---
id: KZ-E06-T13
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T11]
---

# Reconcile future activities when activating another plan

## Objective
Prevent future structured workouts materialized with an old plan from remaining as the current schedule after a new plan is activated.

## Known context

Activation switches the active version, and the day's activities preserve `source` and `trainingPlanVersionId`. There is no reconciliation of already materialized dates; the executed history points to the original version and must remain intact.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `prisma/models/training.prisma`
- `src/features/plan-definition-import/data/activate-selected-plan-definitions.ts`
- `src/features/training/data/ensure-scheduled-training-day.ts`
- `src/features/training/data/prisma-training-repository.ts`
- `roadmap/epics/E06-training-execution/T11-review-daily-plan-lifecycle.md`

## Deliverables
Not recorded in the original version of this task; equivalent content in the section "Scope and impacts".

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Expected behavior

- Future structured activities originating from the old plan stop being presented as current, according to the approved strategy.
- Games, classes, independent practices, and manually created activities remain.
- Workouts already executed are never rewritten; old versions remain auditable.
- The operation is safe under repetition, partial failure, and concurrency.

## Scope and impacts

- Compare logical deletion, invalidation, recreation, and on-demand regeneration; choose the minimal alternative that preserves integrity.
- Define how to handle an activity originating from the plan that was manually edited, and future dates with an execution already started.
- Specify migration and rollback before any destructive operation.

## Out of scope

- Rewrite the past, remove independent activities, or create an additional generic versioning system without a consumer.

## Decisions before implementation

- Approve the reconciliation strategy and the policy for manual exceptions; reanalyze the current code, present a plan, and wait for explicit approval.

## Acceptance criteria
- [ ] Activating Plan B does not leave a future workout from Plan A as current and does not delete an independent game.
- [ ] The executed past and the link to the original version remain intact.
- [ ] Repetition, concurrency, and rollback are covered by proportional tests.

## Result
Not yet started.
