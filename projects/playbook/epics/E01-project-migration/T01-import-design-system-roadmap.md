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

- [ ] Copy the epics and tasks, prefixing every ID and dependency with `DS-`.
- [ ] Add `project: design-system` and `repository: fradelli/design-system`.
- [ ] Rebuild the index and the active task from the local `roadmap/` state.
- [ ] Keep `DS-E04-T02` (release to consumers) ready to generate `KZ-` and `SU-` tasks for replacing the local `.tgz` package.
- [ ] Register the design system clean-up task.

## Validation

- Task count matches the local source.
- Dependencies match across frontmatter, index, and epic tables.
- `git diff --check` passes.

## Acceptance criteria

- [ ] Every audit task exists here with a `DS-` ID.
- [ ] The local untracked copy can be deleted without losing content.

## Result

Not started.
