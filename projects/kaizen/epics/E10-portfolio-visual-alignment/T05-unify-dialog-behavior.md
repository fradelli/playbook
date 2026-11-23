---
id: KZ-E10-T05
epic: KZ-E10
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E10-T04]
---

# Unify dialog behavior

## Objective
Not recorded in the original version of this task.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/features/training/ui/components/training-day-page/components/training-activity-modal/training-activity-modal.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-modal/training-activity-modal.types.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-delete-form/training-activity-delete-form.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-completion-dialog/training-activity-completion-dialog.tsx`

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Acceptance criteria
Not recorded in the original version of this task.

## Result
Confirmations use TrainingActivityModal, with X, Escape, and outside click centralized,
configurable safe initial focus, focus return, and blocking during submission. Escape
events do not propagate to the previous modal; Tab navigation excludes child dialogs.
Delete and completion keep their commands, states, and preservation of filled-in data.
Two style modules without consumers removed. Buttons use the same variants
and sizes as the forms, keeping destruction on the left and the primary action on the right.

45 tests, types, lint, structure, and build passed. Chromium at 320/1440px confirmed
closing by X, Escape, and outside click; closing the confirmation keeps the editor and the scroll
lock. No activity was deleted during validation. Local changes, no commit.
