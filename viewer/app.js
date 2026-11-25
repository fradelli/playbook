// Roadmap viewer page. Reads /data.json (built by scripts/build-roadmap-view.mjs through
// viewer/server.mjs) and redraws whenever the server reports a file change over /events.
// The page computes no status: waves, pending dependencies, and readiness come from the generator.
// Hash routes: #/ · #/epic/KZ-E06 · #/matrix · #/kanban · #/task/KZ-E06-T26 · #/docs · #/doc/<path> · ?a=<anchor>
import { escapeHtml as h, render as renderMarkdown } from "./markdown.js";

const STATUS_LABEL = {
  PLANNED: "Planned",
  READY: "Ready",
  IN_PROGRESS: "In progress",
  BLOCKED: "Blocked",
  DONE: "Done",
  CANCELLED: "Cancelled",
};
const FINAL = new Set(["DONE", "CANCELLED"]);
const isFinal = (status) => FINAL.has(status);

let data = null;
let index = null;
let loadError = null;
let lastRouteKey = null;

function stored(key, fallback) {
  try {
    return window.localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function store(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage may be blocked; the filter then lasts only for this page load.
  }
}

// Filter state. The project filter is shared by the overview, matrix, and kanban.
const state = {
  project: stored("roadmap.project", "all"),
  matrix: { epic: "all", query: "", onlyReady: false, showFinal: true, lane: "epic" },
  kanban: { epic: "all", query: "", onlyReady: false, showFinal: false, lane: "epic" },
  docs: { kind: "all", query: "" },
  copied: null,
};

// ---------- Routing ----------

function parseRoute() {
  const [path, query] = (window.location.hash || "#/").replace(/^#/, "").split("?");
  return {
    anchor: new URLSearchParams(query ?? "").get("a"),
    path: path.split("/").filter(Boolean).map(decodeURIComponent),
    raw: path || "/",
  };
}

const anchorHref = (route, anchor) => `#${route.raw}?a=${encodeURIComponent(anchor)}`;

// ---------- Data helpers ----------

function createIndex(source) {
  return {
    tasksById: new Map(source.tasks.map((task) => [task.id, task])),
    tasksByPath: new Map(source.tasks.map((task) => [task.path, task])),
    epicsById: new Map(source.epics.map((epic) => [epic.id, epic])),
    epicsByPath: new Map(source.epics.map((epic) => [epic.path, epic])),
    documentsByPath: new Map(source.documents.map((document) => [document.path, document])),
    projectsById: new Map(source.projects.map((project) => [project.id, project])),
  };
}

function countStatuses(tasks) {
  const counts = Object.fromEntries(data.statusOrder.map((status) => [status, 0]));
  for (const task of tasks) counts[task.status] += 1;
  return counts;
}

function wavesOf(tasks) {
  return [...new Set(tasks.map((task) => task.wave))].sort((a, b) => {
    if (a === "done") return 1;
    if (b === "done") return -1;
    return Number(a) - Number(b);
  });
}

const waveLabel = (wave) => (wave === "done" ? "Finished" : `Wave ${wave}`);
const percent = (part, total) => (total ? `${Math.round((part / total) * 100)}%` : "—");
const projectName = (id) => index.projectsById.get(id)?.name ?? id;
const activeTaskIds = () => new Set(data.active.map((block) => block.task).filter(Boolean));
const inProject = (item) => state.project === "all" || item.project === state.project;

function matchesTask(task, query) {
  const normalized = query.trim().toLowerCase();
  return !normalized || task.id.toLowerCase().includes(normalized) || task.title.toLowerCase().includes(normalized);
}

// ---------- Markdown links ----------

function normalizePath(path) {
  const parts = [];
  for (const part of path.split("/")) {
    if (!part || part === ".") continue;
    if (part === "..") parts.pop();
    else parts.push(part);
  }
  return parts.join("/");
}

function editorHref(path) {
  const root = decodeURI(data.repositoryUrl.replace(/^file:\/\/\/?/, "")).replace(/\/$/, "");
  return `vscode://file/${root}/${path}`;
}

function routeFor(path, anchor) {
  const suffix = anchor ? `?a=${encodeURIComponent(anchor)}` : "";
  const task = index.tasksByPath.get(path);
  if (task) return `#/task/${task.id}${suffix}`;
  const epic = index.epicsByPath.get(path);
  if (epic) return `#/epic/${epic.id}${suffix}`;
  if (index.documentsByPath.has(path)) return `#/doc/${path}${suffix}`;
  return null;
}

// Repository links become page routes; other files open in the editor.
function markdown(source, fromPath, route) {
  const base = fromPath.split("/").slice(0, -1).join("/");
  const result = renderMarkdown(source.replace(/^\s*#\s.*\n?/, ""), {
    resolveLink(href) {
      if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return { external: true, href };
      const [rawPath, anchor] = href.split("#");
      if (!rawPath) return { href: anchorHref(route, anchor ?? "") };
      let decoded = rawPath;
      try {
        decoded = decodeURI(rawPath);
      } catch {
        // Keep the original path.
      }
      const path = normalizePath(`${base ? `${base}/` : ""}${decoded}`);
      const target = routeFor(path, anchor);
      return target ? { href: target } : { className: "file-link", href: editorHref(path) };
    },
  });

  const html = result.html
    .replace(/<p>(Not recorded in the original version[^<]*?)<\/p>/g, '<p class="placeholder">$1</p>')
    // Inline code naming a playbook file links to its page; paths of other repositories stay text.
    .replace(/(<a [^>]*>[\s\S]*?<\/a>)|<code>((?:projects|standards|templates)\/[^<\s]+?)<\/code>/g, (all, link, path) => {
      if (link) return all;
      const target = routeFor(path.replace(/[.,;:]$/, ""));
      return target ? `<a href="${h(target)}"><code>${path}</code></a>` : all;
    });

  return { headings: result.headings, html };
}

// Titles may carry inline code (`@fradelli/ui`); everything else in them is escaped.
const t = (text) => h(text).replace(/`([^`]+)`/g, "<code>$1</code>");

const inlineMarkdown = (html) => `<span class="md md-inline">${html.replace(/^<p>|<\/p>$/g, "")}</span>`;

// ---------- Pieces ----------

const statusBadge = (status) =>
  `<span class="badge status-${status}" title="${status}">${h(STATUS_LABEL[status] ?? status)}</span>`;

const statusSwatch = (status) => `<span class="swatch status-fill-${status}" aria-hidden="true"></span>`;

function taskChip(task, from) {
  const active = activeTaskIds().has(task.id);
  const other = from && from.slice(0, 3) !== task.id.slice(0, 3);
  const details = [
    `${task.id} · ${STATUS_LABEL[task.status]}`,
    task.title,
    other ? `project: ${projectName(task.project)}` : null,
    task.pending.length ? `waiting for: ${task.pending.join(", ")}` : null,
    task.external.length ? `external condition: ${task.external.join(", ")}` : null,
  ].filter(Boolean);
  const classes = [
    "badge chip mono",
    `status-${task.status}`,
    task.waiting ? "waiting" : "",
    task.status === "CANCELLED" ? "cancelled" : "",
    active ? "active-ring" : "",
  ].join(" ");
  return `<a class="${classes}" href="#/task/${h(task.id)}" title="${h(details.join("\n"))}" aria-label="${h(details.join(". "))}">${h(task.id)}</a>`;
}

function chipOrId(id, from) {
  const task = index.tasksById.get(id);
  return task ? taskChip(task, from) : `<span class="badge mono">${h(id)}</span>`;
}

function stackedBar(counts) {
  const total = data.statusOrder.reduce((sum, status) => sum + counts[status], 0);
  const present = data.statusOrder.filter((status) => counts[status]);
  const label = present.map((status) => `${counts[status]} ${STATUS_LABEL[status].toLowerCase()}`).join(", ");
  return `<div class="stacked" role="img" aria-label="${h(label || "no tasks")}">${present
    .map((status) => `<span class="status-fill-${status}" style="width:${(counts[status] / total) * 100}%"></span>`)
    .join("")}</div>`;
}

const statusLegend = () =>
  `<ul class="legend">${data.statusOrder
    .map((status) => `<li>${statusSwatch(status)}${STATUS_LABEL[status]}</li>`)
    .join("")}</ul>`;

function progress(value, label) {
  return `<div class="progress"><div class="progress-head"><span class="muted">${label}</span><span>${value}%</span></div>
    <div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}"><span style="width:${value}%"></span></div></div>`;
}

function pageHeader(eyebrow, title, extra = "") {
  return `<header class="page-header">${eyebrow ? `<div class="muted small">${eyebrow}</div>` : ""}<h1>${title}</h1>${extra}</header>`;
}

const sectionTitle = (text) => `<h2 class="section-title">${text}</h2>`;
const link = (href, text, className = "") => `<a class="link ${className}" href="${h(href)}">${text}</a>`;

function taskRow(task, aside, from) {
  return `<div class="item">
    <div class="item-content">
      <div class="item-title">${taskChip(task, from)} ${link(`#/task/${task.id}`, t(task.title))}</div>
      ${aside ? `<div class="item-description">${aside}</div>` : ""}
    </div>
    <div class="item-actions">${statusBadge(task.status)}</div>
  </div>`;
}

function markdownArticle(result, route) {
  const items = result.headings.filter((heading) => heading.level <= 3);
  const toc =
    items.length > 1
      ? `<aside class="card card-sm toc"><nav aria-label="On this page"><span class="muted xsmall strong">On this page</span>${items
          .map(
            (heading) =>
              `<a class="toc-link${heading.level === 3 ? " toc-sub" : ""}" href="${h(anchorHref(route, heading.id))}">${h(heading.text)}</a>`,
          )
          .join("")}</nav></aside>`
      : "";
  return `<div class="article-grid${toc ? "" : " no-toc"}"><article class="card"><div class="md">${result.html}</div></article>${toc}</div>`;
}

function projectFilter() {
  const options = [{ id: "all", label: `All (${data.tasks.length})` }].concat(
    data.projects.map((project) => ({ id: project.id, label: `${project.name} (${project.total})` })),
  );
  return `<div class="field"><span class="label" id="project-filter-label">Project</span>
    <div class="segmented" role="group" aria-labelledby="project-filter-label">${options
      .map(
        (option) =>
          `<button type="button" data-project="${h(option.id)}" aria-pressed="${state.project === option.id}">${h(option.label)}</button>`,
      )
      .join("")}</div></div>`;
}

function emptyState(text) {
  return `<p class="muted small">${text}</p>`;
}

// ---------- Pages ----------

function overviewPage(route) {
  const tasks = data.tasks.filter(inProject);
  const epics = data.epics.filter(inProject);
  const projects = data.projects.filter(inProject);
  const counts = countStatuses(tasks);
  const counted = tasks.length - counts.CANCELLED;
  const ready = tasks.filter((task) => task.canStart);
  const blocked = tasks.filter((task) => task.status === "BLOCKED");
  const readyWaiting = tasks.filter((task) => task.status === "READY" && task.waiting);
  const crossProject = tasks.filter((task) => !isFinal(task.status) && task.crossProjectPending.length);
  const stats = [
    { value: counts.DONE, label: `of ${counted} tasks done (${percent(counts.DONE, counted)})` },
    { value: counts.IN_PROGRESS, label: "in progress" },
    { value: ready.length, label: "ready to start" },
    { value: `${epics.filter((epic) => epic.status === "IN_PROGRESS").length} / ${epics.length}`, label: "epics in progress" },
  ];

  const activeBlocks = data.active.filter(inProject).map((block) => {
    const task = block.task ? index.tasksById.get(block.task) : null;
    const next = block.nextAction
      ? inlineMarkdown(markdown(block.nextAction, `projects/${block.project}/ACTIVE.md`, route).html)
      : "";
    return `<div class="item active-block">
      <div class="item-content">
        <div class="muted xsmall">${h(projectName(block.project))}${block.branch ? ` · <code>${h(block.branch)}</code>` : ""}</div>
        <div class="item-title">${task ? `${taskChip(task)} ${link(`#/task/${task.id}`, t(task.title))}` : `<span class="muted">No task selected</span>`}</div>
        ${next ? `<div class="item-description"><strong class="fg">Next action: </strong>${next}</div>` : ""}
      </div>
      <div class="item-actions">${task ? statusBadge(task.status) : ""}${link(`#/doc/projects/${block.project}/ACTIVE.md`, "ACTIVE", "small")}</div>
    </div>`;
  });

  const projectCards =
    state.project === "all"
      ? `${sectionTitle("Projects")}<div class="grid grid-3">${projects
          .map((project) => {
            const done = project.counts.DONE;
            const total = project.total - project.counts.CANCELLED;
            return `<a href="#/" class="card card-sm card-link" data-project="${h(project.id)}" aria-label="Show only ${h(project.name)}">
              <div class="row-between"><span class="mono xsmall muted">${h(project.prefix)}</span><span class="muted xsmall">${project.epics} epics</span></div>
              <div class="card-title">${h(project.name)}</div>
              ${total ? progress(Math.round((done / total) * 100), `${done} of ${total} done`) : emptyState("No tasks yet.")}
              ${total ? stackedBar(project.counts) : ""}
            </a>`;
          })
          .join("")}</div>`
      : "";

  const groups = [
    { title: "Ready to start", list: ready, empty: "No READY task with every dependency met.", aside: (task) => waveLabel(task.wave) },
    { title: "Blocked", list: blocked, empty: "No BLOCKED task.", aside: () => "" },
    {
      title: "Waiting on another project",
      list: crossProject,
      empty: "No open task waits on another project.",
      aside: (task) => `waits for ${task.crossProjectPending.map((id) => chipOrId(id, task.id)).join(" ")}`,
    },
    {
      title: "Ready, but waiting for a dependency",
      list: readyWaiting,
      empty: "None.",
      aside: (task) => `waits for ${task.pending.map((id) => chipOrId(id, task.id)).join(" ")}`,
    },
  ];

  return `${pageHeader("Roadmap", state.project === "all" ? "Where every project stands" : `Where ${h(projectName(state.project))} stands`)}
    <div class="card card-sm filters">${projectFilter()}</div>
    ${sectionTitle("Active tasks")}
    <div class="card card-sm"><div class="stack">${activeBlocks.join("") || emptyState("No ACTIVE.md block.")}</div></div>
    <div class="grid grid-4 mt-3">${stats
      .map((stat) => `<div class="card card-sm"><div class="stat">${h(String(stat.value))}</div><div class="muted small">${h(stat.label)}</div></div>`)
      .join("")}</div>
    ${sectionTitle("Overall progress")}
    <div class="card card-sm">${stackedBar(counts)}${statusLegend()}</div>
    ${projectCards}
    ${sectionTitle("Epics")}
    <div class="grid grid-3">${
      epics
        .map(
          (epic) => `<a class="card card-sm card-link" href="#/epic/${h(epic.id)}">
            <div class="row-between"><span class="mono xsmall muted">${h(epic.id)}</span>${statusBadge(epic.status)}</div>
            <div class="card-title">${t(epic.title)}</div>
            <div class="muted small">${h(epic.result)}</div>
            ${progress(
              Math.round(epic.progress * 100),
              `${epic.counts.DONE} of ${epic.total - epic.counts.CANCELLED} done${epic.counts.CANCELLED ? ` · ${epic.counts.CANCELLED} cancelled` : ""}`,
            )}
          </a>`,
        )
        .join("") || emptyState("No epics in this project yet.")
    }</div>
    ${sectionTitle("To decide the next step")}
    <div class="grid grid-2">${groups
      .map(
        (group) => `<section class="card card-sm"><h3 class="card-title">${group.title} <span class="muted small">${group.list.length}</span></h3>
          <div class="stack">${group.list.length ? group.list.map((task) => taskRow(task, group.aside(task))).join("") : emptyState(group.empty)}</div></section>`,
      )
      .join("")}</div>`;
}

function epicPage(route) {
  const epic = index.epicsById.get(route.path[1] ?? "");
  if (!epic) return notFound(`Epic ${route.path[1] ?? ""}`);
  const tasks = data.tasks.filter((task) => task.epic === epic.id);
  const result = markdown(epic.markdown, epic.path, route);

  return `${pageHeader(
    `${link("#/", "Overview")} › ${h(projectName(epic.project))}`,
    `${h(epic.id)} · ${t(epic.title)}`,
    `<div class="row muted small">${statusBadge(epic.status)} ${epic.counts.DONE} of ${epic.total - epic.counts.CANCELLED} done</div>`,
  )}
    <div class="card card-sm">${stackedBar(epic.counts)}${statusLegend()}</div>
    ${sectionTitle("Tasks by wave")}
    <div class="stack">${
      wavesOf(tasks)
        .map((wave) => {
          const list = tasks.filter((task) => task.wave === wave);
          return `<details class="card card-sm"${wave === "done" ? "" : " open"}>
            <summary>${waveLabel(wave)} · ${list.length}</summary>
            <div class="stack mt-3">${list
              .map((task) =>
                taskRow(task, task.pending.length ? `waits for ${task.pending.map((id) => chipOrId(id, task.id)).join(" ")}` : "", task.id),
              )
              .join("")}</div>
          </details>`;
        })
        .join("") || emptyState("No tasks in this epic.")
    }</div>
    ${sectionTitle("Epic description")}
    ${markdownArticle(result, route)}`;
}

function applyFilters(tasks, filters) {
  return tasks.filter(
    (task) =>
      inProject(task) &&
      (filters.epic === "all" || task.epic === filters.epic) &&
      matchesTask(task, filters.query) &&
      (!filters.onlyReady || task.canStart) &&
      (filters.showFinal || !isFinal(task.status)),
  );
}

function filterBar(page, finalLabel, showLane) {
  const filters = state[page];
  const epics = data.epics.filter(inProject);
  const total = data.tasks.filter(inProject).length;
  return `<div class="card card-sm filters">
    ${projectFilter()}
    <div class="field"><label class="label" for="${page}-epic">Epic</label>
      <select id="${page}-epic" data-filter="${page}.epic">
        <option value="all">All (${total})</option>
        ${epics.map((epic) => `<option value="${h(epic.id)}"${filters.epic === epic.id ? " selected" : ""}>${h(epic.id)} · ${h(epic.title.replaceAll("`", ""))} (${epic.total})</option>`).join("")}
      </select></div>
    <div class="field grow"><label class="label" for="${page}-query">Search</label>
      <input id="${page}-query" type="search" placeholder="Task ID or title" value="${h(filters.query)}" data-filter="${page}.query" /></div>
    ${
      showLane
        ? `<div class="field"><label class="label" for="${page}-lane">Lanes</label>
      <select id="${page}-lane" data-filter="${page}.lane">
        <option value="epic"${filters.lane === "epic" ? " selected" : ""}>By epic</option>
        <option value="wave"${filters.lane === "wave" ? " selected" : ""}>By wave</option>
      </select></div>`
        : ""
    }
    <label class="switch"><input type="checkbox" role="switch" id="${page}-ready" data-filter="${page}.onlyReady"${filters.onlyReady ? " checked" : ""} /><span></span>Only ready to start</label>
    <label class="switch"><input type="checkbox" role="switch" id="${page}-final" data-filter="${page}.showFinal"${filters.showFinal ? " checked" : ""} /><span></span>${finalLabel}</label>
  </div>`;
}

function matrixPage() {
  const tasks = applyFilters(data.tasks, state.matrix);
  const counts = countStatuses(tasks);
  const rows = wavesOf(tasks)
    .map((wave) => {
      const row = tasks.filter((task) => task.wave === wave);
      return `<tr><th scope="row">${waveLabel(wave)}</th>${data.statusOrder
        .map(
          (status) =>
            `<td><div class="chips">${row
              .filter((task) => task.status === status)
              .map((task) => taskChip(task))
              .join("")}</div></td>`,
        )
        .join("")}<td class="num">${row.length} · ${percent(
        row.filter((task) => task.status === "DONE").length,
        row.filter((task) => task.status !== "CANCELLED").length,
      )}</td></tr>`;
    })
    .join("");

  return `${pageHeader(
    "Tasks",
    "Wave × status matrix",
    `<p class="muted small measure">The wave is the dependency level: a task sits one wave after the highest wave of its open dependencies, across projects. Tasks in the same wave can run in parallel. Faded: waiting for a dependency. Yellow outline: an active task.</p>`,
  )}
    ${filterBar("matrix", "Show finished")}
    <div class="card card-sm"><div class="table-scroll"><table class="table matrix">
      <caption class="sr-only">Tasks by wave and status</caption>
      <thead><tr><th scope="col">Wave</th>${data.statusOrder
        .map((status) => `<th scope="col"><span class="row">${statusSwatch(status)}${STATUS_LABEL[status]}</span></th>`)
        .join("")}<th scope="col" class="num">Total · done</th></tr></thead>
      <tbody>${rows || `<tr><td colspan="${data.statusOrder.length + 2}" class="muted">No task matches these filters.</td></tr>`}</tbody>
      <tfoot><tr><td>Total</td>${data.statusOrder
        .map((status) => `<td>${counts[status]} <span class="muted">(${percent(counts[status], tasks.length)})</span></td>`)
        .join("")}<td class="num">${tasks.length}</td></tr></tfoot>
    </table></div></div>
    <p class="muted xsmall mt-3">A dependency is met when it is DONE or CANCELLED. "Ready to start": READY with no open dependency.</p>`;
}

function kanbanPage() {
  const filters = state.kanban;
  const tasks = applyFilters(data.tasks, filters);
  const statuses = data.statusOrder.filter((status) => filters.showFinal || !isFinal(status));
  const active = activeTaskIds();

  const columns = statuses
    .map((status) => {
      const column = tasks.filter((task) => task.status === status);
      const lanes = filters.lane === "epic" ? [...new Set(column.map((task) => task.epic))].sort() : wavesOf(column);
      return `<section class="card card-sm kanban-column" aria-label="${STATUS_LABEL[status]}">
        <h2 class="card-title row">${statusSwatch(status)}${STATUS_LABEL[status]}<span class="muted small push">${column.length}</span></h2>
        ${column.length ? "" : emptyState("—")}
        ${lanes
          .map(
            (lane) => `<div class="stack">
              <h3 class="lane-title">${filters.lane === "epic" ? `${h(lane)} · ${h(index.epicsById.get(lane)?.title ?? "")}` : waveLabel(lane)}</h3>
              ${column
                .filter((task) => (filters.lane === "epic" ? task.epic === lane : task.wave === lane))
                .map(
                  (task) => `<a class="item item-link${task.waiting ? " waiting" : ""}${active.has(task.id) ? " active-ring" : ""}" href="#/task/${h(task.id)}">
                    <div class="item-content">
                      <div class="item-description mono xsmall">${h(task.id)} · ${waveLabel(task.wave)}</div>
                      <div class="item-title">${t(task.title)}</div>
                      ${task.pending.length ? `<div class="item-description danger-text">waits for ${h(task.pending.join(", "))}${task.crossProjectPending.length ? " (another project)" : ""}</div>` : ""}
                    </div>
                  </a>`,
                )
                .join("")}
            </div>`,
          )
          .join("")}
      </section>`;
    })
    .join("");

  return `${pageHeader("Tasks", "Kanban", `<p class="muted small">Columns by status, lanes by epic or by wave.</p>`)}
    ${filterBar("kanban", "Show done and cancelled", true)}
    <div class="kanban">${columns}</div>`;
}

function taskPage(route) {
  const task = index.tasksById.get(route.path[1] ?? "");
  if (!task) return notFound(`Task ${route.path[1] ?? ""}`);
  const epic = index.epicsById.get(task.epic);
  const result = markdown(task.markdown, task.path, route);
  const dependencies = task.dependsOn.map((id) => index.tasksById.get(id)).filter(Boolean);
  const missing = task.dependsOn.filter((id) => !index.tasksById.has(id));
  const unblocks = task.unblocks.map((id) => index.tasksById.get(id)).filter(Boolean);
  const siblings = data.tasks.filter((item) => item.epic === task.epic);
  const position = siblings.indexOf(task);
  const block = data.active.find((item) => item.task === task.id);
  const next = block?.nextAction ? markdown(block.nextAction, `projects/${task.project}/ACTIVE.md`, route).html : "";
  const crossTag = (item) => (item.project !== task.project ? ` <span class="badge outline">${h(projectName(item.project))}</span>` : "");

  return `${pageHeader(
    `${link("#/", "Overview")} › ${h(projectName(task.project))} › ${link(`#/epic/${task.epic}`, `${h(task.epic)} · ${h(epic?.title ?? "")}`)}`,
    `${h(task.id)} · ${t(task.title)}`,
    `<div class="row muted small">${statusBadge(task.status)}<span>${waveLabel(task.wave)}</span>${block ? `<span>· active${block.branch ? ` on <code>${h(block.branch)}</code>` : ""}</span>` : ""}</div>`,
  )}
    ${next ? `<div class="card card-sm mb-3 small"><strong>Next action: </strong>${inlineMarkdown(next)}</div>` : ""}
    ${task.canStart ? `<p class="callout success">Ready to start: every dependency is done or cancelled.</p>` : ""}
    ${
      task.pending.length && !isFinal(task.status)
        ? `<p class="callout danger">Waiting for ${task.pending.map((id) => chipOrId(id, task.id)).join(" ")}${
            task.crossProjectPending.length
              ? ` <span>— from another project: ${task.crossProjectPending.map((id) => h(projectName(index.tasksById.get(id)?.project ?? id.slice(0, 2)))).join(", ")}</span>`
              : ""
          }</p>`
        : ""
    }
    <div class="grid grid-3">
      <section class="card card-sm"><h2 class="muted small">Depends on</h2><div class="stack">
        ${dependencies.map((item) => taskRow(item, crossTag(item), task.id)).join("") || (missing.length ? "" : emptyState("No task"))}
        ${missing.map((id) => `<span class="small">${h(id)} <span class="muted">(not found)</span></span>`).join("")}
        ${task.external.length ? `<span class="small"><span class="muted">External condition: </span>${h(task.external.join(", "))}</span>` : ""}
      </div></section>
      <section class="card card-sm"><h2 class="muted small">Unblocks</h2><div class="stack">
        ${unblocks.map((item) => taskRow(item, crossTag(item), task.id)).join("") || emptyState("No task depends on this one")}
      </div></section>
      <section class="card card-sm"><h2 class="muted small">File</h2><div class="stack">
        <code class="xsmall break">${h(task.path)}</code>
        ${task.repository ? `<span class="small"><span class="muted">Work happens in </span><code>${h(task.repository)}</code></span>` : ""}
        <div class="row">
          <a class="button" href="${h(editorHref(task.path))}">Open in editor ↗</a>
          <button type="button" class="button" data-copy="${h(task.id)}">${state.copied === task.id ? "Copied" : "Copy ID"}</button>
        </div>
      </div></section>
    </div>
    <div class="mt-4">${markdownArticle(result, route)}</div>
    <nav class="pager small" aria-label="Tasks of the epic">
      ${position > 0 ? link(`#/task/${siblings[position - 1].id}`, `← ${h(siblings[position - 1].id)} · ${t(siblings[position - 1].title)}`) : "<span></span>"}
      ${position < siblings.length - 1 ? link(`#/task/${siblings[position + 1].id}`, `${h(siblings[position + 1].id)} · ${t(siblings[position + 1].title)} →`, "right") : ""}
    </nav>`;
}

function documentsPage() {
  const filters = state.docs;
  const kinds = [...new Set(data.documents.map((document) => document.kind))].sort();
  const normalized = filters.query.trim().toLowerCase();
  const documents = data.documents.filter(
    (document) =>
      (filters.kind === "all" || document.kind === filters.kind) &&
      (!normalized || `${document.title} ${document.path}`.toLowerCase().includes(normalized)),
  );
  const folders = [...new Set(documents.map((document) => document.folder))];

  return `${pageHeader("Documentation", "Documents", `<p class="muted small measure">Shared standards, each project's index, active tasks, and overview, and the repository rules.</p>`)}
    <div class="card card-sm filters">
      <div class="field"><label class="label" for="doc-kind">Kind</label>
        <select id="doc-kind" data-filter="docs.kind"><option value="all">All (${data.documents.length})</option>${kinds
          .map((kind) => `<option value="${h(kind)}"${filters.kind === kind ? " selected" : ""}>${h(kind)}</option>`)
          .join("")}</select></div>
      <div class="field grow"><label class="label" for="doc-query">Search</label>
        <input id="doc-query" type="search" placeholder="Title or path" value="${h(filters.query)}" data-filter="docs.query" /></div>
      <span class="muted small">${documents.length} documents</span>
    </div>
    ${folders
      .map(
        (folder) => `<section class="mb-6"><h2 class="mono small muted mb-2">${h(folder)}</h2><div class="grid grid-3">${documents
          .filter((document) => document.folder === folder)
          .map(
            (document) => `<a class="item item-link" href="#/doc/${h(document.path)}"><div class="item-content">
              <div class="item-title">${t(document.title)}</div><div class="item-description">${h(document.kind)} · <code>${h(document.path)}</code></div></div></a>`,
          )
          .join("")}</div></section>`,
      )
      .join("")}
    ${documents.length ? "" : emptyState("No document matches these filters.")}`;
}

function documentPage(route) {
  const path = route.path.slice(1).join("/");
  const document = index.documentsByPath.get(path);
  if (!document) return notFound(`Document ${path}`);
  const result = markdown(document.markdown, document.path, route);
  return `${pageHeader(
    `${link("#/docs", "Documents")} › <code>${h(document.folder)}</code>`,
    t(document.title),
    `<div class="row muted small">${h(document.kind)}<a class="button" href="${h(editorHref(document.path))}">Open in editor ↗</a></div>`,
  )}
    ${markdownArticle(result, route)}`;
}

function notFound(what) {
  return `<div class="card narrow"><h1 class="card-title">Not found</h1>
    <p class="muted small">${h(what)} does not exist in the roadmap files.</p>
    <p>${link("#/", "Back to the overview")}</p></div>`;
}

// ---------- Global search ----------

const search = document.getElementById("global-search");
const results = document.getElementById("search-results");
let hits = [];
let selected = 0;

function drawSearch() {
  const normalized = search.value.trim().toLowerCase();
  if (!normalized || !data) {
    results.hidden = true;
    hits = [];
    return;
  }
  hits = [
    ...data.tasks
      .filter((task) => matchesTask(task, normalized))
      .map((task) => ({ href: `#/task/${task.id}`, title: `${task.id} · ${task.title}`, kind: STATUS_LABEL[task.status] })),
    ...data.epics
      .filter((epic) => `${epic.id} ${epic.title}`.toLowerCase().includes(normalized))
      .map((epic) => ({ href: `#/epic/${epic.id}`, title: `${epic.id} · ${epic.title}`, kind: "Epic" })),
    ...data.documents
      .filter((document) => `${document.title} ${document.path}`.toLowerCase().includes(normalized))
      .map((document) => ({ href: `#/doc/${document.path}`, title: document.title, kind: document.kind })),
  ].slice(0, 12);
  selected = Math.min(selected, Math.max(hits.length - 1, 0));
  results.hidden = false;
  results.innerHTML = hits.length
    ? hits
        .map(
          (hit, position) =>
            `<a class="search-hit${position === selected ? " selected" : ""}" href="${h(hit.href)}"><span>${t(hit.title)}</span><span class="muted xsmall">${h(hit.kind)}</span></a>`,
        )
        .join("")
    : emptyState("Nothing found.");
}

function clearSearch() {
  search.value = "";
  drawSearch();
}

search.addEventListener("input", () => {
  selected = 0;
  drawSearch();
});
search.addEventListener("keydown", (event) => {
  if (event.key === "Escape") return clearSearch();
  if (!hits.length) return;
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    selected = (selected + (event.key === "ArrowDown" ? 1 : -1) + hits.length) % hits.length;
    drawSearch();
  } else if (event.key === "Enter") {
    window.location.hash = hits[selected].href;
    clearSearch();
  }
});
results.addEventListener("click", (event) => {
  if (event.target.closest("a")) clearSearch();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName)) {
    event.preventDefault();
    search.focus();
  }
});

// ---------- Drawing ----------

const main = document.getElementById("main");

function tabOf(kind) {
  if (kind === "matrix" || kind === "kanban") return kind;
  if (kind === "docs" || kind === "doc") return "docs";
  return "overview";
}

function draw() {
  const route = parseRoute();
  const routeKey = `${route.raw}?${route.anchor ?? ""}`;
  const navigated = routeKey !== lastRouteKey;
  const focused = document.activeElement;
  const focus = main.contains(focused) && focused.id ? { id: focused.id, start: focused.selectionStart, end: focused.selectionEnd } : null;

  const [kind] = route.path;
  for (const tab of document.querySelectorAll("[data-tab]")) {
    if (tab.dataset.tab === tabOf(kind)) tab.setAttribute("aria-current", "page");
    else tab.removeAttribute("aria-current");
  }

  if (loadError) {
    main.innerHTML = `<div class="card narrow"><h1 class="card-title">Could not read the roadmap</h1><p class="muted small">${h(loadError)}</p></div>`;
    return;
  }
  if (!data) return;

  const pages = { epic: epicPage, matrix: matrixPage, kanban: kanbanPage, task: taskPage, docs: documentsPage, doc: documentPage };
  main.innerHTML = kind === undefined ? overviewPage(route) : (pages[kind]?.(route) ?? notFound(`The page ${route.raw}`));

  if (focus) {
    const element = document.getElementById(focus.id);
    element?.focus({ preventScroll: true });
    if (element && typeof focus.start === "number" && element.setSelectionRange) element.setSelectionRange(focus.start, focus.end);
  }

  if (navigated) {
    lastRouteKey = routeKey;
    if (route.anchor) document.getElementById(route.anchor)?.scrollIntoView({ block: "start" });
    else window.scrollTo(0, 0);
    if (document.activeElement?.closest(".tabs")) main.focus({ preventScroll: true });
    const heading = main.querySelector("h1")?.textContent;
    document.title = heading ? `${heading} · Fradelli roadmap` : "Roadmap · Fradelli";
  }
}

main.addEventListener("input", (event) => {
  const target = event.target.closest("[data-filter]");
  if (!target) return;
  const [page, key] = target.dataset.filter.split(".");
  state[page][key] = target.type === "checkbox" ? target.checked : target.value;
  draw();
});

main.addEventListener("click", (event) => {
  const projectButton = event.target.closest("[data-project]");
  if (projectButton) {
    state.project = projectButton.dataset.project;
    store("roadmap.project", state.project);
    // An epic from another project would hide every task.
    for (const page of ["matrix", "kanban"]) {
      if (state.project !== "all" && index.epicsById.get(state[page].epic)?.project !== state.project) state[page].epic = "all";
    }
    draw();
    return;
  }
  const copy = event.target.closest("[data-copy]");
  if (copy) {
    void navigator.clipboard?.writeText(copy.dataset.copy).then(() => {
      state.copied = copy.dataset.copy;
      draw();
      window.setTimeout(() => {
        state.copied = null;
        draw();
      }, 1500);
    });
  }
});

window.addEventListener("hashchange", draw);

// ---------- Live data ----------

const live = document.getElementById("live");

function showLive(text, ok) {
  live.textContent = text;
  live.classList.toggle("ok", ok);
}

async function load() {
  try {
    const response = await fetch("data.json", { cache: "no-store" });
    if (!response.ok) throw new Error(await response.text());
    data = await response.json();
    index = createIndex(data);
    loadError = null;
    if (state.project !== "all" && !index.projectsById.has(state.project)) state.project = "all";
    const time = new Date(data.generatedAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    showLive(`live · ${time}${data.commit ? ` · ${data.commit}` : ""}`, true);
  } catch (error) {
    loadError = error.message;
  }
  draw();
  drawSearch();
}

const events = new EventSource("events");
events.addEventListener("change", () => void load());
events.addEventListener("open", () => void load());
events.addEventListener("error", () => showLive("offline: run npm run roadmap:view", false));
