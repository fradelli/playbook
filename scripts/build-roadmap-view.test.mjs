import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, beforeEach, describe, test } from "node:test";

import { buildRoadmapData, computeTaskState, parseActive, parseStatusIndex } from "./build-roadmap-view.mjs";
import { escapeHtml, render } from "../viewer/markdown.js";

const playbookRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
let root;

function write(path, content) {
  const file = join(root, path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}

function task(id, dependsOn = "[]", extra = "") {
  const [prefix, epic] = id.split("-");
  return `---\nid: ${id}\nepic: ${prefix}-${epic}\nproject: x\nrepository: fradelli/x\ndepends_on: ${dependsOn}\n${extra}---\n\n# Task ${id}\n\n## Objective\n\nText.\n`;
}

describe("parseStatusIndex", () => {
  test("reads prefixed task and epic rows and skips headers", () => {
    const { epics, tasks } = parseStatusIndex(
      [
        "| ID | Status | Epic | Outcome |",
        "| --- | --- | --- | --- |",
        "| KZ-E01 | IN_PROGRESS | [Epic one](epics/E01-one/README.md) | Outcome |",
        "| KZ-E01-T01 | DONE | [First](epics/E01-one/T01-first.md) | — |",
        "| KZ-E01-T02 | READY | Second | KZ-E01-T01, DS-E04-T01 |",
      ].join("\n"),
    );

    assert.equal(epics.get("KZ-E01").status, "IN_PROGRESS");
    assert.equal(epics.get("KZ-E01").title, "Epic one");
    assert.equal(tasks.get("KZ-E01-T01").status, "DONE");
    assert.equal(tasks.get("KZ-E01-T02").title, "Second");
    assert.equal(tasks.size, 2);
  });
});

describe("parseActive", () => {
  test("reads one block per active task and the empty block", () => {
    const blocks = parseActive(
      [
        "# Active task",
        "",
        "- **Task:** [KZ-E00-T13](epics/E00/T13.md) — Remove artifacts",
        "- **Status:** IN_PROGRESS",
        "- **Branch:** `claude/KZ-E00-T13-remove`",
        "- **Main input:** `epics/E00/T13.md`",
        "- **Next action:** remove the files.",
        "",
        "- **Task:** KZ-E00-T14 — Analyze",
        "- **Status:** IN_PROGRESS",
        "- **Branch:** `claude/KZ-E00-T14-analyze`",
        "- **Next action:** read the docs.",
        "",
        "## Resumption and parallel work",
        "",
        "- **Task:** KZ-E09-T01 — ignored after the heading",
      ].join("\n"),
    );

    assert.deepEqual(blocks, [
      { branch: "claude/KZ-E00-T13-remove", nextAction: "remove the files.", status: "IN_PROGRESS", task: "KZ-E00-T13" },
      { branch: "claude/KZ-E00-T14-analyze", nextAction: "read the docs.", status: "IN_PROGRESS", task: "KZ-E00-T14" },
    ]);
    assert.deepEqual(parseActive("- **Task:** No task selected\n- **Status:** —\n- **Next action:** wait.\n"), [
      { branch: null, nextAction: "wait.", status: null, task: null },
    ]);
  });
});

describe("computeTaskState", () => {
  const base = (id, status, dependsOn = []) => ({ dependsOn, external: [], id, status });

  test("computes waves, pending dependencies, unblocks, and readiness", () => {
    const state = computeTaskState([
      base("KZ-E01-T01", "DONE"),
      base("KZ-E01-T02", "READY", ["KZ-E01-T01"]),
      base("KZ-E01-T03", "PLANNED", ["KZ-E01-T02"]),
      base("KZ-E01-T04", "READY", ["KZ-E01-T03", "KZ-E01-T01"]),
      base("KZ-E01-T05", "CANCELLED", ["KZ-E01-T04"]),
      base("KZ-E01-T06", "IN_PROGRESS", ["KZ-E01-T03"]),
    ]);
    const byId = Object.fromEntries(state.map((item) => [item.id, item]));

    assert.deepEqual(
      state.map((item) => item.wave),
      ["done", "1", "2", "3", "done", "3"],
    );
    assert.equal(byId["KZ-E01-T02"].canStart, true);
    assert.equal(byId["KZ-E01-T04"].canStart, false);
    assert.deepEqual(byId["KZ-E01-T04"].pending, ["KZ-E01-T03"]);
    assert.equal(byId["KZ-E01-T04"].waiting, true);
    assert.equal(byId["KZ-E01-T06"].waiting, false);
    assert.deepEqual(byId["KZ-E01-T03"].unblocks, ["KZ-E01-T04", "KZ-E01-T06"]);
  });

  test("resolves dependencies across projects", () => {
    const state = computeTaskState([
      base("DS-E04-T01", "IN_PROGRESS"),
      base("DS-E04-T02", "DONE"),
      base("KZ-E10-T10", "READY", ["DS-E04-T01", "DS-E04-T02"]),
    ]);
    const kaizen = state.find((item) => item.id === "KZ-E10-T10");

    assert.deepEqual(kaizen.pending, ["DS-E04-T01"]);
    assert.deepEqual(kaizen.crossProjectPending, ["DS-E04-T01"]);
    assert.equal(kaizen.wave, "2");
    assert.equal(kaizen.canStart, false);
    assert.deepEqual(state[0].unblocks, ["KZ-E10-T10"]);
  });

  test("survives a dependency cycle", () => {
    const state = computeTaskState([base("PB-E01-T01", "PLANNED", ["PB-E01-T02"]), base("PB-E01-T02", "PLANNED", ["PB-E01-T01"])]);
    assert.ok(state.every((item) => Number(item.wave) >= 1));
  });
});

describe("buildRoadmapData", () => {
  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), "roadmap-view-"));
    write(
      "projects/design-system/README.md",
      "# Design system roadmap\n\n| DS-E04 | IN_PROGRESS | [Release](epics/E04-release/README.md) | Outcome |\n| DS-E04-T01 | IN_PROGRESS | [Publish](epics/E04-release/T01-publish.md) | — |\n",
    );
    write("projects/design-system/ACTIVE.md", "# Active task\n\n- **Task:** DS-E04-T01 — Publish\n- **Status:** IN_PROGRESS\n- **Next action:** publish.\n");
    write("projects/design-system/epics/E04-release/README.md", "# DS-E04 — Release\n");
    write("projects/design-system/epics/E04-release/T01-publish.md", task("DS-E04-T01"));
    write(
      "projects/kaizen/README.md",
      "# Kaizen roadmap\n\n| KZ-E10 | READY | [Adopt](epics/E10-adopt/README.md) | Outcome |\n| KZ-E10-T01 | READY | [Install](epics/E10-adopt/T01-install.md) | DS-E04-T01; Owner approves |\n",
    );
    write("projects/kaizen/ACTIVE.md", "# Active task\n\n- **Task:** No task selected\n- **Status:** —\n- **Next action:** wait.\n");
    write("projects/kaizen/epics/E10-adopt/README.md", "# KZ-E10 — Adopt\n");
    write(
      "projects/kaizen/epics/E10-adopt/T01-install.md",
      task("KZ-E10-T01", "[DS-E04-T01]", "external: [Owner approves]\n"),
    );
    write("standards/general/writing.md", "# Writing standard\n\nText.\n");
    write("README.md", "# Playbook\n");
  });

  afterEach(() => rmSync(root, { force: true, recursive: true }));

  test("reads every project, its active blocks, and the standards", () => {
    const data = buildRoadmapData(root);

    assert.deepEqual(
      data.projects.map((project) => [project.id, project.name, project.prefix, project.total, project.epics]),
      [
        ["design-system", "Design system", "DS-", 1, 1],
        ["kaizen", "Kaizen", "KZ-", 1, 1],
      ],
    );
    assert.deepEqual(
      data.epics.map((epic) => [epic.id, epic.project, epic.status, epic.title]),
      [
        ["DS-E04", "design-system", "IN_PROGRESS", "Release"],
        ["KZ-E10", "kaizen", "READY", "Adopt"],
      ],
    );
    assert.deepEqual(
      data.active.map((block) => [block.project, block.task]),
      [
        ["design-system", "DS-E04-T01"],
        ["kaizen", null],
      ],
    );
    assert.ok(data.documents.some((document) => document.path === "standards/general/writing.md" && document.kind === "Standard"));
    assert.ok(data.documents.some((document) => document.path === "projects/kaizen/ACTIVE.md" && document.project === "kaizen"));
  });

  test("shows a task blocked by another project", () => {
    const kaizen = buildRoadmapData(root).tasks.find((item) => item.id === "KZ-E10-T01");

    assert.equal(kaizen.project, "kaizen");
    assert.equal(kaizen.repository, "fradelli/x");
    assert.equal(kaizen.path, "projects/kaizen/epics/E10-adopt/T01-install.md");
    assert.deepEqual(kaizen.external, ["Owner approves"]);
    assert.deepEqual(kaizen.crossProjectPending, ["DS-E04-T01"]);
    assert.equal(kaizen.waiting, true);
    assert.doesNotMatch(kaizen.markdown, /^---/);
  });

  test("reads this repository", () => {
    const data = buildRoadmapData(playbookRoot);
    const ids = new Set(data.tasks.map((item) => item.id));

    assert.ok(data.projects.length >= 4);
    assert.ok(data.tasks.every((item) => item.id.startsWith(data.projects.find((p) => p.id === item.project).prefix)));
    assert.ok(data.tasks.every((item) => item.dependsOn.every((id) => ids.has(id))));
    assert.ok(data.documents.some((document) => document.path.startsWith("standards/")));
  });
});

describe("viewer Markdown renderer", () => {
  test("escapes document HTML and resolves links", () => {
    const { html, headings } = render("## Title\n\n<script>x</script> [a](b.md) `c`", {
      resolveLink: (href) => ({ href: `#/doc/${href}` }),
    });

    assert.match(html, /&lt;script&gt;/);
    assert.match(html, /<a href="#\/doc\/b\.md">a<\/a>/);
    assert.match(html, /<code>c<\/code>/);
    assert.deepEqual(headings, [{ id: "title", level: 2, text: "Title" }]);
    assert.equal(escapeHtml('"<&>'), "&quot;&lt;&amp;&gt;");
  });
});
