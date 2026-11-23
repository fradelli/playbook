---
id: PB-E02-T05
epic: PB-E02
project: playbook
repository: fradelli/playbook
depends_on: [PB-E02-T04]
---

# Apply the writing standard to open tasks

## Objective

Rewrite every open task (not `DONE` or `CANCELLED`) of every project to follow `standards/general/writing.md`, without changing its scope, dependencies, or status.

## Context

On 2026-11-23 there were 55 open Kaizen tasks: 8 with "Not recorded" placeholders, 1 without acceptance criteria, 1 above 6 KB, and 41 with extra sections. Design system and playbook tasks were already short. Done and cancelled tasks stay as historical evidence.

## Inputs

- `standards/general/writing.md` — the standard from PB-E02-T04.
- `projects/kaizen/README.md`, `projects/design-system/README.md`, `projects/playbook/README.md` — status of every task.
- Every open task file listed in those indexes.

## Deliverables

- Open task files rewritten to the standard, one commit per project.
- A list in `Result` of tasks whose meaning was unclear and needs the owner's decision.

## Subtasks

- [ ] List the open tasks that fail the standard.
- [ ] Rewrite them, keeping IDs, frontmatter, dependencies, and statuses.
- [ ] Rename optional sections to the allowed names.
- [ ] Replace unverifiable acceptance criteria with observable ones, or flag them for the owner.

## Validation

- `npm run roadmap:check` passes with the PB-E02-T04 rules.
- `git diff` shows no change in frontmatter or in index statuses.

## Acceptance criteria

- [ ] Every open task passes the writing rules of `roadmap:check`.
- [ ] No open task contains a "Not recorded in the original version" placeholder.
- [ ] No done or cancelled task changed.

## Result

Not started.
