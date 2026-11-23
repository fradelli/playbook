---
id: KZ-E10-T02
epic: KZ-E10
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E10-T01]
---

# Player and activity record in a modal

## Objective
Replace the wide start button and the inline rating with execution controls in the
header and a record modal, with active time and preserved drafts. Also adjust
the surface and the interactive outline of the execution hints.

## Inputs
- `docs/history/implementation/TRAINING-ACTIVITY-PLAYER-AND-FEEDBACK-PLAN.md`
- `docs/history/implementation/FRADELLI-DESIGN-SYSTEM-ADOPTION-PLAN.md`
- `docs/history/implementation/ICONOGRAPHY-STANDARDIZATION-PLAN.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-controls/training-activity-controls.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-modal/training-activity-modal.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.ts`
- `src/features/training/domain/training-retrospective-record.rules.ts`
- `src/features/training/application/training-mutation.types.ts`
- `src/app/treino/training-actions.ts`
- `src/features/training/data/prisma-training-repository.ts`
- `tests/integration/training-mutations.test.ts`
- `tests/integration/fixtures/import-database.fixture.ts`
- `prisma/migrations/20261028010000_allow_short_training_activity_times/migration.sql`

## Input decisions

- Complete KZ-E10-T01 with the published version that contains the DS catalog and hover.
- Most recent guidance: guided workouts use the player; futevôlei/external types open a direct record without a timer.
- The Design System CheckCircle was approved by the user for direct completion.
- Preserve the current Mobility rule (comment only); do not add fields without an explicit decision.
- Approve the flow and the stop semantics defined in the plan before implementing.

## Deliverables
- Native hints with an elevated surface and a rounded outline on hover/focus.
- Play/Pause/Stop in the header and a responsive layout with adequate touch targets.
- One record modal per activity, with an external footer and the action on the right.
- Consistent pause capture, rating cache, and recovery on failures.
- Server and regressions aligned with the approved decisions, with no presumed migration.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Acceptance criteria
- [x] Player represents the states and keeps the approved transitions.
- [x] Stop opens the modal without completing automatically or counting its filling as active time.
- [x] Save/error/close/reopen preserve the rating, execution, focus, and review.
- [x] Direct record and rating correction keep their own contracts.
- [x] Hints, cursor, hover, responsiveness, and accessibility pass the plan's script.
- [x] Consumer gates and disposable integrations passed.

## Result
Implemented and validated on 28/10/2026: published DS icons, guided player in the
header, direct external record, and recoverable modal with submit/focus protection,
isolated cache, and synchronous stop capture. Mobility keeps comment only.
Hints and buttons follow the shared states. The additional migration fixes
short real times and the day rollover without fabricating a duration.

Validation: 389 application tests, 53 PostgreSQL integrations, 41 script tests,
quality/types/build and audit passed. Chromium confirmed the journeys, network
error, recovery/focus, and widths 320/390/768/1440px. Physical device remains in KZ-E06-T14.

Evidence and limits: [implementation report](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/evidence/design-system/TRAINING-PLAYER-VALIDATION-2026-10-28.md).

## Finding confirmed in the browser

The real-minutes constraint rejected executions within the same minute and at the day rollover.
The additional migration validates the clock range without inventing a minimum duration; chronological
order remains protected by timestamps, intervals, and server validation.
