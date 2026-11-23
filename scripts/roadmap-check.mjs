// Validates the roadmap rules in CLAUDE.md (section "Validation") for every project.
// Usage: node scripts/roadmap-check.mjs [repository root]
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const PROJECT_PREFIXES = {
  "design-system": "DS-",
  kaizen: "KZ-",
  suna: "SU-",
  playbook: "PB-",
};

export const REQUIRED_SECTIONS = [
  "Objective",
  "Inputs",
  "Deliverables",
  "Subtasks",
  "Validation",
  "Acceptance criteria",
  "Result",
];

// Optional task sections allowed by standards/general/writing.md.
export const OPTIONAL_SECTIONS = [
  "Context",
  "Decisions",
  "Authorization",
  "Expected behavior",
  "Out of scope",
  "Risks",
  "Rollback",
];

// Writing rules checked on open tasks; ids are the keys used in scripts/writing-baseline.json.
export const WRITING_RULES = {
  "acceptance-criteria": "has no acceptance criteria checkbox",
  "optional-sections": "has a section outside the allowed list",
  placeholder: 'has a "Not recorded in the original version" placeholder',
};

const STATES = new Set(["PLANNED", "READY", "IN_PROGRESS", "BLOCKED", "DONE", "CANCELLED"]);
const FINAL_STATES = new Set(["DONE", "CANCELLED"]);
const TASK_ID = /^[A-Z]{2}-E\d{2}-T\d{2}$/;
const EPIC_ID = /^[A-Z]{2}-E\d{2}$/;
// Folders whose Markdown links are checked. `docs/` holds legacy documents until PB-E00-T03.
const LINKED_FOLDERS = ["projects", "standards", "templates"];
const ROOT_DOCUMENTS = ["README.md", "CLAUDE.md", "AGENTS.md"];

function markdownFiles(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) return markdownFiles(path);
    return path.endsWith(".md") ? [path] : [];
  });
}

const normalize = (text) => text.replace(/\s+/g, " ").trim();
// A table cell may hold a plain ID or a Markdown link whose text is the ID.
const cellText = (cell) => normalize(cell ?? "").replace(/^\[([^\]]+)\]\([^)]*\)$/, "$1");
const tableCells = (line) => line.split("|").slice(1, -1);

function parseList(value) {
  const inner = value?.match(/^\[(.*)\]$/s)?.[1];
  if (inner === undefined) return null;
  return inner
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function parseFrontmatter(text) {
  const block = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)?.[1];
  if (block === undefined) return null;
  const fields = {};
  // Values may wrap onto indented continuation lines (Prettier does this for long lists).
  for (const entry of block.split(/\r?\n(?=\S)/)) {
    const match = entry.match(/^([a-z_]+):\s*([\s\S]*)$/);
    if (match) fields[match[1]] = normalize(match[2]);
  }
  return fields;
}

function readTables(text) {
  return text
    .split(/\r?\n/)
    .filter((line) => line.trim().startsWith("|"))
    .map(tableCells)
    .filter((cells) => cells.length >= 3 && !/^\s*-+\s*$/.test(cells[0]));
}

function readActive(text) {
  const field = (name) => text.match(new RegExp(`^- \\*\\*${name}:\\*\\* (.*)$`, "m"))?.[1]?.trim();
  const task = field("Task");
  return {
    task: task?.match(/\b([A-Z]{2}-E\d{2}-T\d{2})\b/)?.[1] ?? null,
    noTask: task === "No task selected",
    status: field("Status"),
  };
}

export function writingRulesBroken(text) {
  const body = text.replace(/\r/g, "");
  const rules = [];
  const criteria = body.split(/^## Acceptance criteria$/m)[1]?.split(/^## /m)[0] ?? "";
  if (!/^\s*[-*] \[[ x]\] \S/m.test(criteria)) rules.push("acceptance-criteria");
  const headings = [...body.matchAll(/^## (.+)$/gm)].map((match) => match[1].trim());
  if (headings.some((heading) => !REQUIRED_SECTIONS.includes(heading) && !OPTIONAL_SECTIONS.includes(heading))) {
    rules.push("optional-sections");
  }
  if (/Not recorded in the original version/.test(body)) rules.push("placeholder");
  return rules;
}

function findCycles(dependencies) {
  const cycles = [];
  const state = new Map();
  const stack = [];
  const visit = (id) => {
    state.set(id, "visiting");
    stack.push(id);
    for (const next of dependencies.get(id) ?? []) {
      if (!dependencies.has(next)) continue;
      if (state.get(next) === "visiting") cycles.push([...stack.slice(stack.indexOf(next)), next].join(" -> "));
      else if (!state.has(next)) visit(next);
    }
    stack.pop();
    state.set(id, "done");
  };
  for (const id of dependencies.keys()) if (!state.has(id)) visit(id);
  return cycles;
}

export function checkRoadmap(root) {
  const errors = [];
  const at = (path) => relative(root, path).replaceAll("\\", "/");

  // Relative links.
  const linked = [
    ...ROOT_DOCUMENTS.map((name) => join(root, name)).filter(existsSync),
    ...LINKED_FOLDERS.flatMap((folder) => markdownFiles(join(root, folder))),
  ];
  for (const file of linked) {
    const text = readFileSync(file, "utf8").replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
    for (const match of text.matchAll(/\]\(([^)\s#]+)(?:#[^)]*)?\)/g)) {
      const target = match[1];
      if (/^[a-z]+:/i.test(target)) continue;
      if (!existsSync(resolve(dirname(file), target))) errors.push(`${at(file)}: broken link ${target}`);
    }
  }

  // Project indexes.
  const index = new Map(); // task ID -> { project, status, dependsOn }
  const epicIndex = new Map(); // epic ID -> { project, status }
  for (const [project, prefix] of Object.entries(PROJECT_PREFIXES)) {
    const path = join(root, "projects", project, "README.md");
    if (!existsSync(path)) continue;
    for (const cells of readTables(readFileSync(path, "utf8"))) {
      const id = cellText(cells[0]);
      const status = normalize(cells[1]);
      if (!TASK_ID.test(id) && !EPIC_ID.test(id)) continue;
      if (!id.startsWith(prefix)) errors.push(`${at(path)}: ${id} does not use the ${prefix} prefix`);
      if (!STATES.has(status)) errors.push(`${at(path)}: ${id} has an unknown status ${status}`);
      const target = TASK_ID.test(id) ? index : epicIndex;
      if (target.has(id)) errors.push(`${at(path)}: ${id} is listed twice`);
      target.set(id, { project, status, dependsOn: TASK_ID.test(id) ? normalize(cells[3]) : null });
    }
  }

  // Task files.
  const tasks = new Map(); // ID -> { project, file, depends }
  const writingViolations = new Map(); // open task ID -> { file, rules }
  for (const [project, prefix] of Object.entries(PROJECT_PREFIXES)) {
    const epicsDirectory = join(root, "projects", project, "epics");
    for (const file of markdownFiles(epicsDirectory).filter((path) => /^T\d{2}-/.test(basename(path)))) {
      const text = readFileSync(file, "utf8");
      const fields = parseFrontmatter(text);
      if (!fields) {
        errors.push(`${at(file)}: missing frontmatter`);
        continue;
      }
      const id = fields.id;
      if (!id || !TASK_ID.test(id)) {
        errors.push(`${at(file)}: invalid id ${id ?? "(missing)"}`);
        continue;
      }
      if (tasks.has(id)) errors.push(`${at(file)}: duplicate id ${id}, also in ${at(tasks.get(id).file)}`);
      if (!id.startsWith(prefix)) errors.push(`${at(file)}: ${id} does not use the ${prefix} prefix`);
      if (fields.project !== project) errors.push(`${at(file)}: project is ${fields.project ?? "(missing)"}, expected ${project}`);
      if (!fields.repository) errors.push(`${at(file)}: missing repository`);
      const epicFolder = basename(dirname(file)).match(/^(E\d{2})-/)?.[1];
      if (fields.epic !== `${prefix}${epicFolder}` || !id.startsWith(`${fields.epic}-`)) {
        errors.push(`${at(file)}: epic ${fields.epic ?? "(missing)"} does not match the folder or the id`);
      }
      if (!id.endsWith(basename(file).slice(0, 3))) errors.push(`${at(file)}: file name does not match ${id}`);

      const depends = parseList(fields.depends_on ?? "[]");
      const external = fields.external === undefined ? [] : parseList(fields.external);
      if (depends === null) errors.push(`${at(file)}: depends_on is not a list`);
      if (external === null) errors.push(`${at(file)}: external is not a list`);
      tasks.set(id, { project, file, depends: depends ?? [] });

      let previous = -1;
      for (const section of REQUIRED_SECTIONS) {
        const position = text.search(new RegExp(`\\r?\\n## ${section}\\r?\\n`));
        if (position < 0) errors.push(`${at(file)}: missing section ${section}`);
        else if (position < previous) errors.push(`${at(file)}: section ${section} is out of order`);
        if (position >= 0) previous = position;
      }

      const row = index.get(id);
      if (row && !FINAL_STATES.has(row.status)) {
        const rules = writingRulesBroken(text);
        if (rules.length > 0) writingViolations.set(id, { file, rules });
      }

      const expected = [...(depends ?? []), ...(external ?? [])].join(", ") || "—";
      if (!row) errors.push(`${at(file)}: ${id} is missing from projects/${project}/README.md`);
      else if (row.dependsOn !== expected) {
        errors.push(`${at(file)}: index dependencies "${row.dependsOn}" differ from frontmatter "${expected}"`);
      }

      const epicReadme = join(dirname(file), "README.md");
      if (!existsSync(epicReadme)) errors.push(`${at(file)}: epic folder has no README.md`);
      else {
        const orderRow = readTables(readFileSync(epicReadme, "utf8")).find((cells) => cellText(cells[0]) === id);
        if (!orderRow) errors.push(`${at(epicReadme)}: ${id} is missing from the Order table`);
        else if (normalize(orderRow[1]) !== expected) {
          errors.push(`${at(epicReadme)}: ${id} dependencies "${normalize(orderRow[1])}" differ from frontmatter "${expected}"`);
        }
      }
    }
  }

  for (const [id, row] of index) {
    if (!tasks.has(id)) errors.push(`projects/${row.project}/README.md: ${id} has no task file`);
  }

  // Writing rules: open tasks follow standards/general/writing.md, except known debt in the baseline.
  const baselinePath = join(root, "scripts", "writing-baseline.json");
  const baseline = existsSync(baselinePath) ? JSON.parse(readFileSync(baselinePath, "utf8")) : {};
  for (const [id, { file, rules }] of writingViolations) {
    for (const rule of rules) {
      if (!baseline[id]?.includes(rule)) errors.push(`${at(file)}: open task ${WRITING_RULES[rule]} (standards/general/writing.md)`);
    }
  }
  for (const [id, rules] of Object.entries(baseline)) {
    for (const rule of rules) {
      if (!writingViolations.get(id)?.rules.includes(rule)) {
        errors.push(`scripts/writing-baseline.json: remove "${rule}" from ${id}; the task no longer breaks it or is no longer open`);
      }
    }
  }

  // Dependencies, cycles, and READY tasks.
  const allIds = new Set([...tasks.keys(), ...index.keys()]);
  const dependencyGraph = new Map();
  for (const [id, task] of tasks) {
    dependencyGraph.set(id, task.depends);
    for (const dependency of task.depends) {
      if (!allIds.has(dependency)) errors.push(`${at(task.file)}: unknown dependency ${dependency}`);
    }
    if (index.get(id)?.status === "READY") {
      for (const dependency of task.depends) {
        const status = index.get(dependency)?.status;
        if (status && status !== "DONE") errors.push(`${at(task.file)}: ${id} is READY but ${dependency} is ${status}`);
      }
    }
  }
  for (const cycle of findCycles(dependencyGraph)) errors.push(`dependency cycle: ${cycle}`);

  // One IN_PROGRESS task per project, and ACTIVE.md aligned with the index.
  for (const project of Object.keys(PROJECT_PREFIXES)) {
    const inProgress = [...index].filter(([, row]) => row.project === project && row.status === "IN_PROGRESS").map(([id]) => id);
    if (inProgress.length > 1) errors.push(`projects/${project}/README.md: ${inProgress.length} tasks IN_PROGRESS (${inProgress.join(", ")})`);
    const activePath = join(root, "projects", project, "ACTIVE.md");
    if (!existsSync(join(root, "projects", project, "README.md"))) continue;
    if (!existsSync(activePath)) {
      errors.push(`projects/${project}/ACTIVE.md: missing`);
      continue;
    }
    const active = readActive(readFileSync(activePath, "utf8"));
    if (active.noTask) {
      if (inProgress.length > 0) errors.push(`projects/${project}/ACTIVE.md: says no task selected, but ${inProgress.join(", ")} is IN_PROGRESS`);
    } else if (!active.task) {
      errors.push(`projects/${project}/ACTIVE.md: Task must name a task ID or say "No task selected"`);
    } else {
      const row = index.get(active.task);
      if (!row) errors.push(`projects/${project}/ACTIVE.md: ${active.task} is not in the index`);
      else if (row.status !== active.status) {
        errors.push(`projects/${project}/ACTIVE.md: ${active.task} is ${active.status} here and ${row.status} in the index`);
      }
      if (inProgress.length === 1 && inProgress[0] !== active.task) {
        errors.push(`projects/${project}/ACTIVE.md: points to ${active.task}, but ${inProgress[0]} is IN_PROGRESS`);
      }
    }
  }

  return { errors, taskCount: tasks.size };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), ".."));
  const { errors, taskCount } = checkRoadmap(root);
  if (errors.length > 0) {
    console.error(errors.join("\n"));
    console.error(`\nroadmap:check failed with ${errors.length} error(s).`);
    process.exitCode = 1;
  } else {
    console.log(`roadmap:check passed: ${taskCount} tasks.`);
  }
}
