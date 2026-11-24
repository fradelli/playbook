---
id: KZ-E12-T16
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Move the training schedule materialization rules to the domain

## Objective

Move the rules that build planned and weekly activities out of the data layer into pure domain functions with unit tests.

## Context

Finding from the repository sweep of 2026-11-24 on `developer` (`67443f0`).

- `src/features/training/data/ensure-scheduled-training-day.ts` (413 lines) holds `buildPlannedActivity`, `buildWeeklyActivity`, `parseClockMinute`, and `isRestEntry`, which decide what a day contains.
- The architecture keeps business rules in the domain and persistence in the data layer.
- KZ-E12-T07 covers the rules in `prisma-training-repository.ts` only.

## Inputs

- `src/features/training/data/ensure-scheduled-training-day.ts` — the functions listed above.
- `src/features/training/domain/` — existing domain modules and naming.
- `docs/architecture/TARGET-ARCHITECTURE.md` — section "Boundaries" (Domínio, Dados).

## Deliverables

- The four functions in `src/features/training/domain/`, with no Prisma import.
- Unit tests for rest days, weekly entries, and clock parsing.
- `ensure-scheduled-training-day.ts` keeping only reads, writes, and the concurrency retry.

## Subtasks

- [ ] Move the functions and their types to the domain.
- [ ] Add unit tests for each rule.
- [ ] Run the integration tests that materialize a day.

## Validation

- `pnpm test` and `pnpm test:integration` pass.
- `rg -n "@prisma|generated/prisma" src/features/training/domain` finds nothing.

## Acceptance criteria

- [ ] `buildPlannedActivity`, `buildWeeklyActivity`, `parseClockMinute`, and `isRestEntry` live in `src/features/training/domain/`.
- [ ] Each moved function has at least one unit test.
- [ ] `ensure-scheduled-training-day.ts` keeps only persistence and retry code.

## Result

Not started.
