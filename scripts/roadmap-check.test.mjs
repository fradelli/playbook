import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { afterEach, beforeEach, describe, test } from "node:test";

import { checkRoadmap, parseFrontmatter } from "./roadmap-check.mjs";

const SECTIONS = ["Objective", "Inputs", "Deliverables", "Subtasks", "Validation", "Acceptance criteria", "Result"];

function task({ id, epic, depends = [], external, sections = SECTIONS, project = "playbook" }) {
  const lines = ["---", `id: ${id}`, `epic: ${epic}`, `project: ${project}`, "repository: fradelli/playbook", `depends_on: [${depends.join(", ")}]`];
  if (external) lines.push(`external: [${external.join(", ")}]`);
  lines.push("---", "", `# ${id}`, "");
  for (const section of sections) {
    lines.push(`## ${section}`, "", section === "Acceptance criteria" ? "- [ ] Observable result." : "Text.", "");
  }
  return lines.join("\n");
}

// A valid playbook project: PB-E00-T01 (DONE) <- PB-E00-T02 (IN_PROGRESS, also waits on an external condition).
function validFiles() {
  return {
    "README.md": "# Root\n\n[Rules](CLAUDE.md)\n",
    "CLAUDE.md": "# Rules\n\nA path in code is not a link: `[x](missing.md)`.\n",
    "projects/playbook/README.md": [
      "# Playbook roadmap",
      "",
      "| ID | Status | Epic | Outcome |",
      "| --- | --- | --- | --- |",
      "| PB-E00 | IN_PROGRESS | [Foundation](epics/E00-foundation/README.md) | Outcome |",
      "",
      "| ID | Status | Task | Depends on |",
      "| --- | --- | --- | --- |",
      "| PB-E00-T01 | DONE | [First](epics/E00-foundation/T01-first.md) | — |",
      "| PB-E00-T02 | IN_PROGRESS | [Second](epics/E00-foundation/T02-second.md) | PB-E00-T01, Owner approves |",
      "",
    ].join("\n"),
    "projects/playbook/ACTIVE.md": "# Active task\n\n- **Task:** [PB-E00-T02](epics/E00-foundation/T02-second.md) — Second\n- **Status:** IN_PROGRESS\n",
    "projects/playbook/epics/E00-foundation/README.md": [
      "# PB-E00 — Foundation",
      "",
      "| Task | Depends on | Outcome |",
      "| --- | --- | --- |",
      "| [PB-E00-T01](T01-first.md) | — | One |",
      "| PB-E00-T02 | PB-E00-T01, Owner approves | Two |",
      "",
    ].join("\n"),
    "projects/playbook/epics/E00-foundation/T01-first.md": task({ id: "PB-E00-T01", epic: "PB-E00" }),
    "projects/playbook/epics/E00-foundation/T02-second.md": task({
      id: "PB-E00-T02",
      epic: "PB-E00",
      depends: ["PB-E00-T01"],
      external: ["Owner approves"],
    }),
  };
}

let root;

function write(files) {
  for (const [path, content] of Object.entries(files)) {
    mkdirSync(dirname(join(root, path)), { recursive: true });
    writeFileSync(join(root, path), content);
  }
}

function edit(path, from, to) {
  const full = join(root, path);
  const text = readFileSync(full, "utf8");
  assert.ok(text.includes(from), `fixture ${path} does not contain ${from}`);
  writeFileSync(full, text.replace(from, to));
}

const errorsOf = () => checkRoadmap(root).errors;
const expectError = (pattern) => {
  const errors = errorsOf();
  assert.ok(errors.some((error) => pattern.test(error)), `expected ${pattern}, got:\n${errors.join("\n") || "(no errors)"}`);
};

const T01 = "projects/playbook/epics/E00-foundation/T01-first.md";
const T02 = "projects/playbook/epics/E00-foundation/T02-second.md";
const INDEX = "projects/playbook/README.md";
const EPIC = "projects/playbook/epics/E00-foundation/README.md";
const ACTIVE = "projects/playbook/ACTIVE.md";

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), "roadmap-check-"));
  write(validFiles());
});

afterEach(() => rmSync(root, { recursive: true, force: true }));

describe("valid roadmap", () => {
  test("has no errors", () => {
    assert.deepEqual(errorsOf(), []);
    assert.equal(checkRoadmap(root).taskCount, 2);
  });

  test("reads lists wrapped onto the next line", () => {
    const fields = parseFrontmatter("---\nid: X\ndepends_on:\n  [A, B]\n---\n");
    assert.equal(fields.depends_on, "[A, B]");
  });
});

describe("IDs", () => {
  test("rejects a task without the project prefix", () => {
    edit(T01, "id: PB-E00-T01", "id: DS-E00-T01");
    expectError(/does not use the PB- prefix/);
  });

  test("rejects a project value that does not match the folder", () => {
    edit(T01, "project: playbook", "project: kaizen");
    expectError(/project is kaizen, expected playbook/);
  });

  test("rejects duplicate IDs", () => {
    write({ "projects/playbook/epics/E00-foundation/T03-copy.md": task({ id: "PB-E00-T01", epic: "PB-E00" }) });
    expectError(/duplicate id PB-E00-T01/);
  });

  test("rejects an epic that does not match the folder", () => {
    edit(T01, "epic: PB-E00", "epic: PB-E01");
    expectError(/epic PB-E01 does not match/);
  });
});

describe("dependencies", () => {
  test("rejects an unknown dependency", () => {
    edit(T02, "depends_on: [PB-E00-T01]", "depends_on: [PB-E00-T01, PB-E09-T09]");
    expectError(/unknown dependency PB-E09-T09/);
  });

  test("rejects a cycle", () => {
    edit(T01, "depends_on: []", "depends_on: [PB-E00-T02]");
    edit(INDEX, "| PB-E00-T01 | DONE | [First](epics/E00-foundation/T01-first.md) | — |", "| PB-E00-T01 | DONE | [First](epics/E00-foundation/T01-first.md) | PB-E00-T02 |");
    edit(EPIC, "| [PB-E00-T01](T01-first.md) | — | One |", "| [PB-E00-T01](T01-first.md) | PB-E00-T02 | One |");
    expectError(/dependency cycle: PB-E00-T0\d -> PB-E00-T0\d -> PB-E00-T0\d/);
  });

  test("rejects index dependencies that differ from the frontmatter", () => {
    edit(INDEX, "PB-E00-T01, Owner approves |", "PB-E00-T01 |");
    expectError(/index dependencies "PB-E00-T01" differ/);
  });

  test("rejects epic order dependencies that differ from the frontmatter", () => {
    edit(EPIC, "| PB-E00-T02 | PB-E00-T01, Owner approves | Two |", "| PB-E00-T02 | — | Two |");
    expectError(/PB-E00-T02 dependencies "—" differ/);
  });

  test("rejects a READY task with an open dependency", () => {
    edit(INDEX, "| PB-E00-T01 | DONE |", "| PB-E00-T01 | PLANNED |");
    edit(INDEX, "| PB-E00-T02 | IN_PROGRESS |", "| PB-E00-T02 | READY |");
    edit(ACTIVE, "- **Task:** [PB-E00-T02](epics/E00-foundation/T02-second.md) — Second\n- **Status:** IN_PROGRESS", "- **Task:** No task selected\n- **Status:** —");
    expectError(/PB-E00-T02 is READY but PB-E00-T01 is PLANNED/);
  });
});

describe("sections and files", () => {
  test("rejects a missing section", () => {
    write({ [T01]: task({ id: "PB-E00-T01", epic: "PB-E00", sections: SECTIONS.filter((s) => s !== "Validation") }) });
    expectError(/missing section Validation/);
  });

  test("rejects sections out of order", () => {
    write({ [T01]: task({ id: "PB-E00-T01", epic: "PB-E00", sections: ["Inputs", "Objective", ...SECTIONS.slice(2)] }) });
    expectError(/section Inputs is out of order|section Objective is out of order/);
  });

  test("rejects a task missing from the index", () => {
    write({ "projects/playbook/epics/E00-foundation/T03-third.md": task({ id: "PB-E00-T03", epic: "PB-E00" }) });
    expectError(/PB-E00-T03 is missing from projects\/playbook\/README.md/);
  });

  test("rejects an index row without a task file", () => {
    edit(INDEX, "| PB-E00-T01 | DONE |", "| PB-E00-T03 | PLANNED | x | — |\n| PB-E00-T01 | DONE |");
    expectError(/PB-E00-T03 has no task file/);
  });

  test("rejects an unknown status", () => {
    edit(INDEX, "| PB-E00-T01 | DONE |", "| PB-E00-T01 | FINISHED |");
    expectError(/unknown status FINISHED/);
  });

  test("rejects a broken relative link", () => {
    edit("README.md", "[Rules](CLAUDE.md)", "[Rules](MISSING.md)");
    expectError(/README.md: broken link MISSING.md/);
  });
});

describe("IN_PROGRESS and ACTIVE.md", () => {
  test("rejects two IN_PROGRESS tasks in one project", () => {
    edit(INDEX, "| PB-E00-T01 | DONE |", "| PB-E00-T01 | IN_PROGRESS |");
    expectError(/2 tasks IN_PROGRESS/);
  });

  test("rejects an ACTIVE status that differs from the index", () => {
    edit(ACTIVE, "- **Status:** IN_PROGRESS", "- **Status:** DONE");
    expectError(/PB-E00-T02 is DONE here and IN_PROGRESS in the index/);
  });

  test("rejects 'No task selected' while a task is IN_PROGRESS", () => {
    edit(ACTIVE, "- **Task:** [PB-E00-T02](epics/E00-foundation/T02-second.md) — Second\n- **Status:** IN_PROGRESS", "- **Task:** No task selected\n- **Status:** —");
    expectError(/says no task selected, but PB-E00-T02 is IN_PROGRESS/);
  });
});

describe("writing rules on open tasks", () => {
  const withoutCriteria = (text) => text.replace("- [ ] Observable result.", "Text.");

  test("rejects an open task without acceptance criteria", () => {
    edit(T02, "- [ ] Observable result.", "Text.");
    expectError(/T02-second.md: open task has no acceptance criteria checkbox/);
  });

  test("rejects an open task with a section outside the allowed list", () => {
    edit(T02, "## Result", "## Known context\n\nText.\n\n## Result");
    expectError(/open task has a section outside the allowed list/);
  });

  test("accepts the allowed optional sections", () => {
    edit(T02, "## Result", "## Out of scope\n\nText.\n\n## Risks\n\nText.\n\n## Result");
    edit(T02, "## Inputs", "## Context\n\nText.\n\n## Inputs");
    assert.deepEqual(errorsOf(), []);
  });

  test("rejects a placeholder in an open task", () => {
    edit(T02, "## Result\n\nText.", "## Result\n\nNot recorded in the original version of this task.");
    expectError(/open task has a "Not recorded in the original version" placeholder/);
  });

  test("ignores writing rules on done tasks", () => {
    write({ [T01]: withoutCriteria(readFileSync(join(root, T01), "utf8")).replace("## Result", "## Known context\n\nNot recorded in the original version of this task.\n\n## Result") });
    assert.deepEqual(errorsOf(), []);
  });

  test("accepts known violations listed in the baseline", () => {
    edit(T02, "- [ ] Observable result.", "Text.");
    write({ "scripts/writing-baseline.json": JSON.stringify({ "PB-E00-T02": ["acceptance-criteria"] }) });
    assert.deepEqual(errorsOf(), []);
  });

  test("rejects a baseline entry that is no longer needed", () => {
    write({ "scripts/writing-baseline.json": JSON.stringify({ "PB-E00-T02": ["placeholder"] }) });
    expectError(/remove "placeholder" from PB-E00-T02/);
  });
});
