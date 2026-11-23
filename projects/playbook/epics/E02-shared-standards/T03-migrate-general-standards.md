---
id: PB-E02-T03
epic: PB-E02
project: playbook
repository: fradelli/playbook
depends_on: [PB-E02-T02]
---

# Migrate the general standards

## Objective

Write the general, frontend, and backend rules in `standards/`, in English, from the approved inventory.

## Inputs

- `standards/INVENTORY.md` — rows classified as general, frontend, or backend, with their target paths.
- `fradelli/nextjs-kaizen-app: docs/` — source sections listed in the inventory.
- `docs/engineering/code-semantics.md` — shared rule already here.

## Deliverables

- `standards/general/`, `standards/frontend/`, and `standards/backend/` with the migrated rules.
- `KZ-` and `SU-` tasks to replace local copies with links to the playbook.

## Subtasks

- [ ] Translate and write each rule at its target path.
- [ ] Mark the source sections as moved, through project tasks.
- [ ] Register the project follow-up tasks.

## Validation

- Every inventory row of these classes points to a written section.
- `git diff --check` passes.

## Acceptance criteria

- [ ] No general rule exists only inside a project repository.

## Result

Not started.
