---
id: KZ-E12-T07
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E12-T05]
---

# Split the workout repository and move the rules to the domain

## Objective
Reduce `prisma-training-repository.ts` to persistence and mapping, with the business rules in the domain and modules that are cohesive by responsibility.

## Context

Findings from the 2026-11-23 audit:

- `src/features/training/data/prisma-training-repository.ts` has 1641 lines; `completeTrainingActivityFromDraft` alone has about 340.
- Business rules are in the data layer: `validateActivitySchedule`, `validateCompleteExerciseSetInput`, `isSetResultPerformed`, and `hasSetExecutionMeasurement`.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md` — sections "Semântica e legibilidade do código" (Code semantics and readability), "Boundaries", and "Transações e concorrência" (Transactions and concurrency).
- `src/features/training/data/prisma-training-repository.ts` — file to split.
- `src/features/training/domain/` — destination of the rules.
- `tests/integration/training-mutations.test.ts` — safety net.

## Deliverables
- Business rules in modules under `src/features/training/domain/` with unit tests.
- Repository split into read, mutation, and mapping modules, keeping the `TrainingRepository` interface.
- Long functions broken into named steps.

## Subtasks
- [ ] Cover the current behavior with tests before moving anything.
- [ ] Move the rules to the domain.
- [ ] Separate read, mutation, and mapping.
- [ ] Break up `completeTrainingActivityFromDraft` and `findTrainingDay`.

## Validation
- `pnpm test`, `pnpm test:integration`, and `pnpm structure:check` pass without changing behavior assertions.
- No file in `src/features/training/data/` exceeds 500 lines.

## Acceptance criteria
- [ ] The data layer contains no business rule.
- [ ] The repository's public interface and behavior stay the same.

## Result
Not started.
