---
id: KZ-E10-T04
epic: KZ-E10
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E10-T03]
---

# Standardize the visual structure of dialogs

## Objective
Not recorded in the original version of this task.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/features/training/ui/components/training-day-page/components/training-activity-modal/training-activity-modal.styles.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-modal/training-activity-modal.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-delete-form/training-activity-delete-form.styles.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-completion-dialog/training-activity-completion-dialog.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-editor-content/training-activity-editor-content.tsx`

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Acceptance criteria
Not recorded in the original version of this task.

## Result
Confirmations reuse the modal's surfaces, titles, spacing, and dividers.
Redundant edit description removed; an optional description does not produce an empty
accessible reference. Flow, safe focus, and destructive actions on the left preserved.

45 affected tests, lint, structure, types, and build passed. Chromium at 320/1440px
confirmed Inter titles 20px/700/28px and a 1px footer divider. No activity writes
during the check. Local changes, no commit.
