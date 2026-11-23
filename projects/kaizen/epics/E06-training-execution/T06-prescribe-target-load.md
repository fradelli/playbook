---
id: KZ-E06-T06
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T03]
---

# Prescribe target load per exercise and per set

## Objective

Show a target load, separate from the load performed, as one target for the exercise or one target per set.

## Context

In KZ-E06-T03 the execution stores `loadKg` per set, and the exercise reports `loadApplicable` and `loadUnit`. The prescribed definition has no target load field yet, and current data uses kg. Confirm these facts again against the merged code before starting.

## Inputs

- `docs/architecture/TARGET-ARCHITECTURE.md`
- `data/training-execution-metadata.json`
- `schemas/training-execution-metadata.schema.json`
- `prisma/models/training.prisma`
- `src/features/plan-definition-import/data/persist-training-plan-definition.ts`
- `src/features/training/application/training-dto.ts`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`

## Expected behavior

- A prescription defines the same load for all sets or a specific load for each set.
- The target shows its unit and is never confused with the load performed.
- Exercises without an applicable load neither show nor require a target.
- Old plans without a target load stay importable and readable.

## Deliverables

- Canonical contract and schema for both target modes, with unit and validation.
- Import, versioned persistence, and projection of the target.
- Compact mobile presentation of the target next to the load performed.
- Migration and rollback, if the schema changes.

## Subtasks

- [ ] Define the canonical representation of the two target modes, and whether a range or another unit is really needed.
- [ ] Check the values available in the approved source; do not invent loads for the current plan.
- [ ] Reanalyze the current code, present a solution with trade-offs, and wait for explicit approval.
- [ ] Implement contract, validation, import, persistence, projection, and presentation, keeping imported versions immutable.
- [ ] Add tests for the four cases in Validation.

## Validation

- Tests cover a single target, per-set targets, no target, and an exercise without load.
- An old plan without a target imports and renders unchanged.
- `pnpm run ci` passes.

## Acceptance criteria

- [ ] A plan can hold one target per exercise or one target per set, and both render without changing recorded results.
- [ ] Tests pass for old plans, units, and plans without a target.
- [ ] When the schema changes, the PR includes a migration and a rollback.

## Out of scope

- Calculating or recommending loads automatically.
- Changing the load performed or moving execution instructions into the summary.

## Result

Not started.
