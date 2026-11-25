// Builds the data of the local roadmap viewer (viewer/) from the files on disk.
// Sources: every projects/<project>/README.md (status), ACTIVE.md (active tasks), epics and tasks,
// plus the Markdown documents in standards/ and at the repository root. All computation lives here;
// the page only draws. viewer/server.mjs calls buildRoadmapData on every change.
// Usage: node scripts/build-roadmap-view.mjs [repository root]   prints the data as JSON.
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { relative, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { PROJECT_PREFIXES, parseFrontmatter } from "./roadmap-check.mjs";

export const statusOrder = ["PLANNED", "READY", "IN_PROGRESS", "BLOCKED", "DONE", "CANCELLED"];
const finalStatuses = new Set(["DONE", "CANCELLED"]);
const TASK_ID = /^[A-Z]{2}-E\d{2}-T\d{2}$/;
const EPIC_ID = /^[A-Z]{2}-E\d{2}$/;
// Documents shown in the documents tab, besides each project's README, ACTIVE, and OVERVIEW.
const documentRoots = ["README.md", "CLAUDE.md", "standards", "templates"];

const toPosix = (path) => path.split(sep).join("/");

function walk(directory, predicate) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => {
      const path = resolve(directory, entry.name);
      if (entry.isDirectory()) return walk(path, predicate);
      return entry.isFile() && predicate(entry.name) ? [path] : [];
    });
}

function parseList(source) {
  return (source ?? "")
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((item) => item.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

function stripFrontmatter(text) {
  return text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
}

function firstHeading(markdown) {
  return markdown.match(/^# (.+?)\s*$/m)?.[1] ?? "";
}

const tableCells = (line) =>
  line
    .split("|")
    .slice(1, -1)
    .map((cell) => cell.trim());

const linkText = (cell) => cell.match(/^\[(.+?)\]\(.*\)$/)?.[1] ?? cell;

export function parseStatusIndex(markdown) {
  const tasks = new Map();
  const epics = new Map();

  for (const line of markdown.split(/\r?\n/)) {
    const cells = tableCells(line);
    if (cells.length < 4 || !statusOrder.includes(cells[1])) continue;

    if (TASK_ID.test(cells[0])) {
      tasks.set(cells[0], { status: cells[1], title: linkText(cells[2]), dependencyText: cells[3] });
    } else if (EPIC_ID.test(cells[0])) {
      epics.set(cells[0], { status: cells[1], title: linkText(cells[2]), result: cells[3] });
    }
  }

  return { epics, tasks };
}

// ACTIVE.md lists one block of fields per active task, before the first "## " heading.
export function parseActive(markdown) {
  const head = markdown.replace(/\r/g, "").split(/^## /m)[0];
  return head
    .split(/^(?=- \*\*Task:\*\* )/m)
    .filter((block) => block.startsWith("- **Task:** "))
    .map((block) => {
      const field = (name) =>
        block.match(new RegExp(`^- \\*\\*${name}:\\*\\*\\s*(.*)$`, "m"))?.[1]?.trim() || null;
      const status = field("Status");
      const branch = field("Branch");
      return {
        branch: branch ? branch.replace(/^`|`$/g, "") : null,
        nextAction: field("Next action"),
        status: statusOrder.includes(status) ? status : null,
        task: field("Task")?.match(/\b([A-Z]{2}-E\d{2}-T\d{2})\b/)?.[1] ?? null,
      };
    });
}

// Wave: a final task is in "done"; any other task sits one wave after the highest wave among its
// open dependencies. A dependency is met when it is DONE or CANCELLED. IDs are unique across
// projects, so cross-project dependencies resolve like any other.
export function computeTaskState(tasks) {
  const byId = new Map(tasks.map((task) => [task.id, task]));
  const waves = new Map();

  function waveOf(id, trail = new Set()) {
    if (waves.has(id)) return waves.get(id);
    const task = byId.get(id);
    if (!task || finalStatuses.has(task.status)) return 0;
    if (trail.has(id)) return 1;
    trail.add(id);
    const wave = 1 + Math.max(0, ...task.dependsOn.map((dependency) => waveOf(dependency, trail)));
    trail.delete(id);
    waves.set(id, wave);
    return wave;
  }

  return tasks.map((task) => {
    const pending = task.dependsOn.filter((id) => !finalStatuses.has(byId.get(id)?.status));
    const final = finalStatuses.has(task.status);
    return {
      ...task,
      canStart: task.status === "READY" && pending.length === 0,
      crossProjectPending: pending.filter((id) => id.slice(0, 3) !== task.id.slice(0, 3)),
      pending,
      unblocks: tasks.filter((other) => other.dependsOn.includes(task.id)).map((other) => other.id),
      waiting: !final && task.status !== "IN_PROGRESS" && pending.length > 0,
      wave: final ? "done" : String(waveOf(task.id)),
    };
  });
}

function countByStatus(tasks) {
  return Object.fromEntries(statusOrder.map((status) => [status, tasks.filter((task) => task.status === status).length]));
}

function readProject(repositoryRoot, project, prefix) {
  const folder = `projects/${project}`;
  const read = (path) => readFileSync(resolve(repositoryRoot, path), "utf8");
  const readmeText = existsSync(resolve(repositoryRoot, `${folder}/README.md`)) ? read(`${folder}/README.md`) : "";
  const activeText = existsSync(resolve(repositoryRoot, `${folder}/ACTIVE.md`)) ? read(`${folder}/ACTIVE.md`) : "";
  const index = parseStatusIndex(readmeText);
  const epicDirectory = resolve(repositoryRoot, folder, "epics");
  const epics = [];
  const tasks = [];

  const epicFolders = existsSync(epicDirectory)
    ? readdirSync(epicDirectory, { withFileTypes: true }).filter((entry) => entry.isDirectory())
    : [];

  for (const entry of epicFolders) {
    const id = `${prefix}${entry.name.slice(0, 3)}`;
    const readmePath = `${folder}/epics/${entry.name}/README.md`;
    const readme = existsSync(resolve(repositoryRoot, readmePath)) ? read(readmePath) : "";
    epics.push({
      id,
      markdown: readme,
      path: readmePath,
      project,
      result: index.epics.get(id)?.result ?? "",
      status: index.epics.get(id)?.status ?? "PLANNED",
      title: index.epics.get(id)?.title ?? firstHeading(readme).replace(/^[A-Z]{2}-E\d{2}\s*[—-]\s*/, ""),
    });

    for (const file of walk(resolve(epicDirectory, entry.name), (name) => /^T\d{2}-.+\.md$/.test(name))) {
      const text = readFileSync(file, "utf8");
      const fields = parseFrontmatter(text) ?? {};
      const body = stripFrontmatter(text);
      if (!fields.id) continue;
      tasks.push({
        dependsOn: parseList(fields.depends_on),
        epic: fields.epic ?? id,
        external: parseList(fields.external),
        id: fields.id,
        markdown: body,
        path: toPosix(relative(repositoryRoot, file)),
        project,
        repository: fields.repository ?? null,
        status: index.tasks.get(fields.id)?.status ?? "PLANNED",
        title: firstHeading(body) || index.tasks.get(fields.id)?.title || fields.id,
      });
    }
  }

  return {
    active: parseActive(activeText),
    epics,
    project: {
      id: project,
      name: firstHeading(readmeText).replace(/\s+roadmap$/i, "") || project,
      path: `${folder}/README.md`,
      prefix,
    },
    tasks,
  };
}

function documentKind(path) {
  if (path.startsWith("standards/")) return "Standard";
  if (path.startsWith("templates/")) return "Template";
  if (path.startsWith("projects/")) return "Project";
  return "Repository";
}

export function buildRoadmapData(repositoryRoot = process.cwd()) {
  const projects = [];
  const epics = [];
  const rawTasks = [];
  const active = [];

  for (const [project, prefix] of Object.entries(PROJECT_PREFIXES)) {
    if (!existsSync(resolve(repositoryRoot, "projects", project))) continue;
    const result = readProject(repositoryRoot, project, prefix);
    projects.push(result.project);
    epics.push(...result.epics);
    rawTasks.push(...result.tasks);
    active.push(...result.active.map((block) => ({ ...block, project })));
  }

  rawTasks.sort((a, b) => a.id.localeCompare(b.id));
  epics.sort((a, b) => a.id.localeCompare(b.id));
  const tasks = computeTaskState(rawTasks);

  for (const epic of epics) {
    const own = tasks.filter((task) => task.epic === epic.id);
    const counted = own.filter((task) => task.status !== "CANCELLED");
    epic.counts = countByStatus(own);
    epic.total = own.length;
    epic.progress = counted.length ? counted.filter((task) => task.status === "DONE").length / counted.length : 0;
  }

  for (const project of projects) {
    const own = tasks.filter((task) => task.project === project.id);
    project.counts = countByStatus(own);
    project.total = own.length;
    project.epics = epics.filter((epic) => epic.project === project.id).length;
  }

  const documentPaths = [
    ...documentRoots.flatMap((root) => {
      const absolute = resolve(repositoryRoot, root);
      if (!existsSync(absolute)) return [];
      return root.endsWith(".md") ? [absolute] : walk(absolute, (name) => name.endsWith(".md"));
    }),
    ...projects.flatMap((project) =>
      ["README.md", "ACTIVE.md", "OVERVIEW.md"]
        .map((name) => resolve(repositoryRoot, "projects", project.id, name))
        .filter(existsSync),
    ),
  ];
  const documents = documentPaths.map((file) => {
    const path = toPosix(relative(repositoryRoot, file));
    const markdown = readFileSync(file, "utf8");
    return {
      folder: path.split("/").slice(0, -1).join("/") || ".",
      kind: documentKind(path),
      markdown,
      path,
      project: path.match(/^projects\/([^/]+)\//)?.[1] ?? null,
      title: firstHeading(markdown) || path,
    };
  });

  let commit = null;
  try {
    commit = execFileSync("git", ["rev-parse", "--short", "HEAD"], {
      cwd: repositoryRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    // Outside a Git repository the page leaves the commit out.
  }

  return {
    active,
    commit,
    counts: countByStatus(tasks),
    documents,
    epics,
    generatedAt: new Date().toISOString(),
    projects,
    repositoryUrl: pathToFileURL(resolve(repositoryRoot)).href,
    statusOrder,
    tasks,
  };
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  process.stdout.write(`${JSON.stringify(buildRoadmapData(resolve(process.argv[2] ?? ".")), null, 2)}\n`);
}
