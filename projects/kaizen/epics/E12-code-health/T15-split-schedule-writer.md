---
id: KZ-E12-T15
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E12-T03]
---

# Split the schedule writer into one handler per command

## Objective

Replace the single `writeSchedule` function with one small handler per schedule command.

## Context

Finding from the repository sweep of 2026-11-24 on `developer` (`67443f0`).

- `src/features/schedule/data/schedule-writer.ts` has 528 lines; `writeSchedule` runs from line 62 to the end and switches over 16 command kinds.
- Revision checks, parent touches, and lookups are mixed with each command's writes.

## Inputs

- `src/features/schedule/data/schedule-writer.ts` — `writeSchedule` and its helpers.
- `tests/integration/schedule-mutations.test.ts` and `tests/integration/agenda-foundation.test.ts` — the behavior to preserve.
- `docs/architecture/TARGET-ARCHITECTURE.md` — sections "Boundaries" and "Transações e concorrência".

## Deliverables

- One handler per command kind, each under 80 lines, called from a dispatcher that keeps the transaction.
- Shared helpers (revision check, active lookups) in one module.

## Subtasks

- [ ] Extract each command branch into its own handler without changing behavior.
- [ ] Keep one transaction per command in the dispatcher.
- [ ] Run the schedule integration tests after each extraction.

## Validation

- `pnpm test:integration` passes with the same test count.
- No function in `src/features/schedule/data/` exceeds 80 lines.

## Acceptance criteria

- [ ] `writeSchedule` contains only dispatch and transaction code.
- [ ] Every command kind has its own handler function under 80 lines.
- [ ] The schedule integration tests pass unchanged.

## Result

Not started.
