---
id: PB-E00-T06
epic: PB-E00
project: playbook
repository: fradelli/playbook
depends_on: [PB-E00-T05]
---

# Remove the in-progress limit

## Objective

Let a project have any number of tasks in progress, so that the maintainer decides how many to run at once instead of a fixed number in the check.

## Context

- PB-E00-T05 set a limit of three `IN_PROGRESS` tasks per project as a proxy for the maintainer's review capacity.
- A task waiting only for a merge still takes a slot, and the limit applies per project, so it does not bound the total review load either.
- The rules that prevent conflicts are separate from the limit: each task has its own branch, parallel tasks in one repository do not change the same files, and every `IN_PROGRESS` task has an `ACTIVE.md` block.

## Inputs

- `CLAUDE.md` — sections "States" and "Validation".
- `scripts/roadmap-check.mjs` — `MAX_IN_PROGRESS` and the `IN_PROGRESS` check.
- `scripts/roadmap-check.test.mjs` — `IN_PROGRESS and ACTIVE.md` tests.

## Deliverables

- `roadmap:check` without a maximum number of `IN_PROGRESS` tasks per project.
- `CLAUDE.md` without the limit, keeping the branch, file overlap, and `ACTIVE.md` rules.

## Subtasks

- [x] Remove `MAX_IN_PROGRESS` and its check.
- [x] Replace the limit test with a test that accepts four listed tasks.
- [x] Update `CLAUDE.md`.

## Validation

- `npm run roadmap:check` passes on the current roadmap.
- `npm test` passes, including four `IN_PROGRESS` tasks listed with their branches.

## Acceptance criteria

- [x] Four `IN_PROGRESS` tasks in one project, each listed in `ACTIVE.md` with a `Branch`, pass the check.
- [x] An `IN_PROGRESS` task without a block in `ACTIVE.md` still fails the check.
- [x] `CLAUDE.md` no longer states a maximum number of tasks in progress.

## Decisions

- No limit for now, decided on 2026-11-24 by the maintainer. A limit comes back through a new task if parallel work becomes hard to review.

## Result

- `scripts/roadmap-check.mjs`: `MAX_IN_PROGRESS` and the limit error removed; the listing, duplicate, status, and `Branch` checks stay.
- `scripts/roadmap-check.test.mjs`: the limit rejection became a test that accepts four listed tasks.
- `CLAUDE.md`: "States" and "Validation" no longer mention the limit.
