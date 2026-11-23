---
id: PB-E01-T01
epic: PB-E01
project: playbook
repository: fradelli/playbook
depends_on: [PB-E00-T01]
---

# Import the design system roadmap

## Objective

Save the design system audit tasks of 2026-11-23 in `projects/design-system/`, with `DS-` IDs and the playbook frontmatter.

## Context

The audit tasks (five epics: governance, package contract, component quality, Mira adoption, consumer release) exist only as untracked files under `roadmap/` in a local clone of `fradelli/design-system`, on branch `claude/E00-T01-create-roadmap-system`. Nothing protects them from being lost until this task lands.

## Inputs

- `fradelli/design-system: roadmap/` (local, untracked) — epics, tasks, and `roadmap/CLAUDE.md`.

## Deliverables

- `projects/design-system/README.md`, `ACTIVE.md`, and `epics/`.
- A `DS-` task in `projects/design-system/` to remove `roadmap/` from the design system repository and point its `CLAUDE.md` to the playbook.

## Subtasks

- [x] Copy the epics and tasks, prefixing every ID and dependency with `DS-`.
- [x] Add `project: design-system` and `repository: fradelli/design-system`.
- [x] Rebuild the index and the active task from the local `roadmap/` state.
- [x] Keep `DS-E04-T02` (release to consumers) ready to generate `KZ-` and `SU-` tasks for replacing the local `.tgz` package.
- [x] Register the design system clean-up task.

## Validation

- Task count matches the local source.
- Dependencies match across frontmatter, index, and epic tables.
- `git diff --check` passes.

## Acceptance criteria

- [x] Every audit task exists here with a `DS-` ID.
- [x] The local untracked copy can be deleted without losing content.

## Result

Imported 5 epics and 30 tasks (the audit had 30, not 28). Evidence:

- Statuses of all 30 tasks match the source index; DS-E00-T08 (point the repository to the playbook) is new.
- Every task body matches the source once the `DS-` prefix and the Sandicts-to-Suna rename are undone; epic READMEs differ only in the status line and the new DS-E00-T08 row.
- DS-E04-T01 had a wrapped `depends_on` list; it was restored by hand after the first conversion dropped it.
- `OVERVIEW.md` links to repository files now point to `https://github.com/fradelli/design-system/blob/main/`.
- The local templates and `roadmap/CLAUDE.md` were not imported; the playbook `CLAUDE.md` and `templates/` replace them.
- Manual check (links, sections, dependencies across frontmatter, index, and epic tables, cross-project dependencies) and `git diff --check` passed.

Open for the owner: whether DS-E00-T01 is done in this form and whether PB-E00-T04 replaces DS-E00-T07.
