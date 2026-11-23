---
id: KZ-E06-T22
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T12]
---

# Allow organizing the future schedule without starting workouts

## Objective
Allow adding, removing, and adjusting activities on accessible future dates,
while keeping the start of any execution blocked before its civil date.

## Known context

The user reported that future dates do not allow adding or removing workouts.
The approved rule distinguishes planning from execution: organizing the coming days
is allowed; training ahead of time in the app is not. The technical cause must be
confirmed before implementation, without assuming the block is only visual.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/features/training/application/resolve-training-day-date.ts`
- `src/features/training/application/resolve-training-day-date.test.ts`
- `src/features/training/application/mutate-training-day.ts`
- `src/features/training/application/mutate-training-day.test.ts`
- `src/features/training/domain/training-edit-window.ts`
- `src/features/training/domain/training-edit-window.test.ts`
- `src/features/training/domain/training-day.rules.ts`
- `src/features/training/data/ensure-scheduled-training-day.ts`
- `src/features/training/ui/components/training-day-page/training-day-page.tsx`
- `src/features/training/ui/components/training-day-page/components/training-agenda-drawer/training-agenda-drawer.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-controls/training-activity-controls.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-delete-form/training-activity-delete-form.tsx`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.ts`
- `tests/integration/training-mutations.test.ts`

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task; equivalent content is in the section «Task plan».

## Validation
Not recorded in the original version of this task.

## Approved rules

- Tomorrow through today + 4 days: allow adding, deleting, and editing the planning.
- Future dates: allow viewing and expanding the workouts, but never starting,
  resuming, or finishing an execution nor recording results ahead of time.
- Separate the permission to edit the schedule from the permission to execute an activity;
  enforce both on the server, in addition to showing the controls correctly.
- Planning can be persisted; it does not start a timer or create results.
- Keep today and yesterday as allowed dates for records; earlier dates
  remain blocked for changes, per the rule already approved.
- Preserve the four-day future limit, the `America/Sao_Paulo` time zone, ownership,
  concurrent revision, and the restrictions on deleting completed activities.
- Do not change the weekly schedule nor automatically recreate activities
  intentionally removed from an already materialized date.

## Task plan

1. Re-analyze the current permissions in the UI, application, and mutation boundaries.
2. Present the diagnosis and the detailed plan for approval before implementing.
3. Fix the distinction between editing the schedule and recording the execution in the
   necessary layers, without duplicating validations or widening ownership permissions.
4. Cover future adding, deleting, and editing, blocking the start via a
   direct server call, time limits, and regressions for today and yesterday.
5. Run proportional gates, semantic review, and manual testing of the future schedule.

## Out of scope

- Widening the future window, changing canonical data, or reconciling a plan change.
- Changing the completion flow, drafts, or timers during a workout.

## Acceptance criteria
- [x] Adding, removing, and adjusting planning works on today + 1 and today + 4.
- [x] Starting a future activity remains unavailable and is rejected on the server.
- [x] Dates beyond today + 4 and before yesterday do not gain new permissions.
- [x] Future deletion does not recreate the workout on the next query.
- [x] Today and yesterday keep the current flow and completed activities cannot be deleted.
- [x] Tests, semantic review, and project validations passed.

## Result
Schedule and execution permissions separated in the domain, the application, and the UI.
Adding, editing, and deleting are available from yesterday through today + 4; starting,
pausing, and recording the execution remain limited to yesterday and today. The tests
cover the limits, the São Paulo time zone, direct calls to the mutations, and
the preservation of deletions on materialized days.

CI of PR #56 passed in governance, quality, unit and PostgreSQL tests,
data integrity, backup restore, build, and dependency audit.
Semantic review and `git diff --check` passed; manual validation not run.
