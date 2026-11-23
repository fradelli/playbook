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

PB-E02-T04 listed the open tasks that break the checked rules in `scripts/writing-baseline.json`: 9 Kaizen tasks with 17 violations. The other open tasks still need a read against the unchecked rules of the standard, such as observable acceptance criteria and no filler. Done and cancelled tasks stay as historical evidence.

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

- [ ] `scripts/writing-baseline.json` is empty and `npm run roadmap:check` passes.
- [ ] No open task contains a placeholder saying a section was not recorded.
- [ ] No done or cancelled task changed.

## Result

Not started.
