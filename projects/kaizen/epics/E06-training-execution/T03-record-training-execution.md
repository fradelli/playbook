---
id: KZ-E06-T03
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T02]
---

# Record preparation, sets, and comments

## Objective
Allow executing the daily schedule defined by the plan, saving preparation, sets, and comments in a progressive flow.

## Inputs
- `docs/history/implementation/E06.md`
- `docs/product/P0.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `data/exercises.json`
- `data/schedule.json`
- `src/features/plan-definition-import/domain/plan-definition-source.types.ts`
- `src/features/plan-definition-import/domain/plan-definition-import.types.ts`
- `src/features/plan-definition-import/data/read-plan-definitions-from-git.ts`
- `src/features/plan-definition-import/data/persist-plan-definition-snapshot.ts`
- `src/features/plan-definition-import/data/persist-training-plan-definition.ts`
- `src/features/plan-definition-import/data/plan-definition-snapshot-validation.rules.ts`
- `src/features/plan-definition-import/data/validate-plan-definition-snapshot.ts`
- `schemas/schedule.schema.json`
- `data/training-execution-metadata.json`
- `schemas/training-execution-metadata.schema.json`
- `prisma/models/training.prisma`
- `prisma/models/platform.prisma`
- `prisma/migrations/20260916190000_training_activity_log/migration.sql`
- `prisma/migrations/20260919010000_generalize_training_day_activity/migration.sql`
- `prisma/migrations/20260919020000_training_assignment_times/migration.sql`
- `prisma/migrations/20260919030000_training_activity_execution_lifecycle/migration.sql`
- `prisma/migrations/20260919040000_unify_training_activity_execution/migration.sql`
- `prisma/migrations/20260919050000_allow_planned_mobility_definition/migration.sql`
- `prisma/migrations/20260922160000_training_weekly_schedule/migration.sql`
- `prisma/migrations/20260923180000_allow_training_schedule_import_batch/migration.sql`
- `scripts/validate-data.mjs`
- `scripts/validate-data.test.mjs`
- `src/lib/security/workspace.ts`
- `src/app/treino/page.tsx`
- `src/app/treino/training-actions.ts`
- `src/features/training/application/training-dto.ts`
- `src/features/training/application/get-training-day.ts`
- `src/features/training/application/get-public-training-plan.ts`
- `src/features/training/application/resolve-training-day-date.ts`
- `src/features/training/application/resolve-training-day-date.test.ts`
- `src/features/training/application/resolve-training-day-date.types.ts`
- `src/features/training/application/training-mutation.types.ts`
- `src/features/training/application/mutate-training-day.ts`
- `src/features/training/application/training-repository.ts`
- `src/features/training/domain/training-weekly-schedule.ts`
- `src/features/training/domain/training-weekly-schedule.types.ts`
- `src/features/training/domain/training-weekly-schedule.test.ts`
- `src/features/training/data/ensure-scheduled-training-day.ts`
- `src/features/plan-definition-import/domain/training-session-assignment.utils.ts`
- `src/features/plan-definition-import/domain/training-session-assignment.utils.test.ts`
- `src/features/plan-definition-import/data/persist-training-plan-definition.ts`
- `src/features/training/data/prisma-training-repository.ts`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.ts`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.types.ts`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.utils.ts`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.test.tsx`
- `src/features/training/domain/training-day.rules.ts`
- `src/features/training/domain/training-day.types.ts`
- `src/features/training/domain/training-exercise-priority.ts`
- `src/features/training/domain/training-exercise-priority.test.ts`
- `src/features/training/ui/components/training-day-page/components/training-day-content/training-day-content.tsx`
- `src/features/training/ui/components/training-day-page/components/training-day-content/training-day-content.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-day-feedback/training-day-feedback.tsx`
- `src/features/training/ui/components/training-day-page/components/training-day-feedback/training-day-feedback.styles.ts`
- `src/features/training/ui/components/training-day-page/components/training-day-feedback/training-day-feedback.test.tsx`
- `src/features/training/ui/components/training-day-unexpected-error/training-day-unexpected-error.tsx`
- `src/features/training/ui/components/training-day-unexpected-error/training-day-unexpected-error.styles.ts`
- `src/features/training/ui/components/training-day-unexpected-error/training-day-unexpected-error.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-agenda-badges/training-agenda-badges.tsx`
- `src/features/training/ui/components/training-day-page/components/training-agenda-drawer/training-agenda-drawer.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-section/training-activity-section.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.styles.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-controls/training-activity-controls.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-timer/training-activity-timer.tsx`
- `src/features/training/ui/components/training-day-page/components/training-warmup-toggle/training-warmup-toggle.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-delete-form/training-activity-delete-form.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-delete-form/training-activity-delete-form.styles.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-delete-form/training-activity-delete-form.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-action-feedback/training-action-feedback.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.types.ts`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.styles.ts`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.constants.ts`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/exercise-priority-indicator/exercise-priority-indicator.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/exercise-priority-indicator/exercise-priority-indicator.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/training-completed-exercise-correction/training-completed-exercise-correction.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/training-completed-exercise-correction/training-completed-exercise-correction.types.ts`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/training-local-exercise-editor/training-local-exercise-editor.tsx`
- `src/features/training/ui/hooks/use-training-exercise-draft/use-training-exercise-draft.utils.ts`
- `src/features/training/ui/hooks/use-training-exercise-draft/use-training-exercise-draft.test.ts`
- `tests/integration/training-mutations.test.ts`
- `tests/integration/training-projections.test.ts`
- `tests/integration/fixtures/database.fixture.ts`
- `tests/integration/fixtures/import-database.fixture.ts`
- `src/features/plan-definition-import/data/plan-definition-import-validation.test.ts`
- `src/features/persisted-data-integrity/data/prisma-persisted-data.mapper.ts`
- `src/features/persisted-data-integrity/domain/persisted-data-integrity.types.ts`
- `src/features/persisted-data-integrity/domain/training-plan-integrity.rules.ts`
- `src/features/persisted-data-integrity/application/validate-persisted-data.test.ts`
- `tests/unit/fixtures/persisted-data-integrity.fixture.ts`
- `tests/integration/import-versioned-plan-definitions.test.ts`
- `tests/integration/persisted-data-integrity.test.ts`

## Deliverables
- Compact daily schedule, unified management in a drawer, and guided execution of preparation, sets, and activities.

## Subtasks
- [x] Show the available sets, repetitions, rest, and notes.
- [x] Separate preparation from the main workout.
- [x] Use the explicit measurement type per set.
- [x] Show and persist load only with `load_applicable=true`.
- [x] Keep the partially filled execution in the browser, detect conflicts, and preserve the draft on a finalization error.
- [x] Materialize still-empty sets as zero on completion, preserving the ability to correct them later.
- [x] Summarize the schedule in compact badges with activity, duration, or time.
- [x] Include the compatible preparation automatically and allow navigating between warm-up and activity without changing the existing record.
- [x] Start the workout at the warm-up and allow access to the main workout without blocking on pending warm-up items.
- [x] Show one set at a time and block advancing while the previous one is pending.
- [x] Collapse execution tips and fix the visual composition of the alerts.
- [x] Replace the special schedule switch with the same management used to add, edit, and remove activities.
- [x] Persist additional activities without changing the prescribed schedule.
- [x] Separate the structural type, name, and sport of the activity.
- [x] Support structured workout, sport practice, specific workout, and mobility.
- [x] Preserve planned times; record start, pause, and resume in the local draft and persist the intervals on finalization.
- [x] Record perceived intensity and energy only at execution.
- [x] Link mobility preparation to the main activities and keep it visible as an optional step.
- [x] Edit and logically remove activities through the schedule drawer.
- [x] Include activities in the badges and in the day reading for future monthly aggregation.
- [x] Allow multiple structured workouts on the same day, including identical sessions at different times.
- [x] Keep at most one active timer per browser and require confirmation to pause the current activity.
- [x] Exclude paused time from the active duration and preserve all intervals for reports.
- [x] Block deletion of a completed activity, keeping corrections of rating, sets, and loads.
- [x] Use an accessible toggle on the warm-up, blocking its editing while marked as done.
- [x] Load structured sessions dynamically from the persisted active plan, with no mocked catalog in the UI.
- [x] Save exercises and sets in one transaction when finalizing the activity, with no persistence per set or per toggle during the workout.
- [x] Treat an empty field and zero as a set not performed and prevent gaps between sets.
- [x] Show a compact editor with one set at a time, a collapsible comment, and toggle locking.
- [x] Represent priority in three levels with accessible semantics and compatibility with the legacy plan.
- [x] Limit reads and mutations to at most four days in the future, with no prefetch of blocked days.
- [x] Version the weekly schedule with a Saturday model and materialize only the queried date, without recreating deletions.
- [x] Collapse the exercise when the header switch is checked and reopen it without losing the draft.
- [x] Show priority with a label and neutral bars; allow closing the comment from the header.
- [x] Confirm deletion in an overlaid modal, highlighting that the activity is preserved.
- [x] Do not show save notices for local execution actions.
- [x] Recover already started activities in a local draft without writing switches or pauses until finalization.
- [x] Reopen collapsed exercises without losing values and without visible state labels or a textual exercise counter.
- [x] Show a single direct message in the deletion modal.
- [x] Use the same informative color as the switch on the border of every completed exercise, including without repetitions; highlight the main workout badge without changing the preparation one.
- [x] Remove the old assignment and execution interface and commands that duplicated the activity flow.
- [x] Treat an empty schedule after deletion as empty, without resurrecting the old workout; distinguish intentional deletion from a missing reference.
- [x] Keep explicit exercise corrections after completion, without allowing early writes to the database.
- [x] Allow the weekly schedule source in the database, link it only once to legacy versions, and audit its content without weakening the immutability of the other definitions.
- [x] Align the title and description of notices without an icon in the same column to avoid overlap on narrow screens.

## Validation
- Test transitions, pause and resume, constraints, zeroed sets, links between session/exercise, and authorization.

## Acceptance criteria
- [x] The real execution can be recorded without changing the prescription.
- [x] Timer, pauses, warm-up, sets, and rating are recoverable in this browser until finalization; then they are persisted together in the fixed workspace's PostgreSQL.
- [x] The front end discovers the structured workouts from the active plan saved in the database, with no operational mocks.

## Result
Guided flow, generic daily schedule, and separate recording of planning and performance available locally. The schedule remains persisted when changed. A new activity starts expanded; timer, pauses, warm-up, exercises, and comments stay in a draft in this browser and are written in a single transaction when each activity is finalized. Records started before this change are also recovered as a local draft; finalization preserves the IDs of the existing intervals and sets. The weekly model with a game on Saturday was explicitly chosen as the temporary default. The importer links a versioned copy of the schedule to the active plan version, and the read creates only the queried date within the limit of four future days. The footvolley workouts use a provisional 90 planned minutes; the Saturday game stays with a time to be defined. The old assignment/execution interface and commands were removed: deleting the last activity does not show the historical prescription again, and corrections after completion remain possible through an explicit action. The migration allows importing the new source and linking the schedule only once to old versions, without opening editing of the other definitions. The audit covers the active schedule document and its historical links. Notices without an icon now align title and description to avoid overlap on narrow screens.

Integrated into `developer` by PR #48 (`379413c`). The future policy for generating
and persisting the queried date will be reviewed in KZ-E06-T11, without reopening this delivery.
