---
id: KZ-E06-T13
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T11]
---

# Reconcile future activities when activating another plan

## Objective

Stop future structured workouts created from an old plan from staying on the schedule after a new plan is activated.

## Context

Activation switches the active version, and the day's activities keep `source` and `trainingPlanVersionId`. Dates already materialized are not reconciled. The executed history points to the original version and must stay intact.

## Inputs

- `docs/architecture/TARGET-ARCHITECTURE.md`
- `prisma/models/training.prisma`
- `src/features/plan-definition-import/data/activate-selected-plan-definitions.ts`
- `src/features/training/data/ensure-scheduled-training-day.ts`
- `src/features/training/data/prisma-training-repository.ts`
- `fradelli/playbook: projects/kaizen/epics/E06-training-execution/T11-review-daily-plan-lifecycle.md` — plan lifecycle decisions.

## Expected behavior

- Future structured activities from the old plan stop showing as current, following the approved strategy.
- Games, classes, independent practices, and manually created activities stay.
- Executed workouts are never rewritten; old versions stay auditable.
- The operation is safe under repetition, partial failure, and concurrency.

## Deliverables

- An approved reconciliation strategy, chosen among logical deletion, invalidation, recreation, and on-demand regeneration as the smallest option that preserves integrity.
- A policy for plan activities edited by hand and for future dates with an execution already started.
- The implementation, with migration and rollback specified before any destructive operation.

## Subtasks

- [ ] Reanalyze the current code and compare the four strategies.
- [ ] Define the policy for manual edits and started executions.
- [ ] Present the plan and wait for explicit approval of the strategy and the policy.
- [ ] Implement it with migration and rollback.
- [ ] Add tests for repetition, concurrency, and rollback.

## Validation

- A test activates plan B and checks that no future plan A workout stays current and that an independent game stays.
- Tests cover repeated activation, concurrent activation, and rollback.
- `pnpm run ci` passes.

## Acceptance criteria

- [ ] After activating plan B, no future workout from plan A is current and no independent game was deleted.
- [ ] Executed workouts and their link to the original version are unchanged.
- [ ] Tests for repetition, concurrency, and rollback pass.

## Out of scope

- Rewriting the past, removing independent activities, or creating a generic versioning system without a consumer.

## Result

Not started.
