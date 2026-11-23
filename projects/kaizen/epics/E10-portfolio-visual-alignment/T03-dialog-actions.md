---
id: KZ-E10-T03
epic: KZ-E10
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E10-T02]
---

# Fix navigation and standardize dialog actions

## Objective
Not recorded in the original version of this task; equivalent content is in the "Scope" section.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/components/shared/app-shell/components/app-shell-navigation/components/app-shell-navigation-links/app-shell-navigation-links.module.css`
- `src/features/training/ui/components/training-day-page/components/training-activity-delete-form/training-activity-delete-form.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-completion-dialog/training-activity-completion-dialog.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-editor-content/training-activity-editor-content.tsx`

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Acceptance criteria
Not recorded in the original version of this task; equivalent content is in the "Acceptance" section.

## Scope

Navigation above the header glass. Destructive actions on the left in red,
primary action on the right; safe initial focus on the delete confirmation.
Preserve validation, cache, submission, and business rules.

## Acceptance

- [x] Order, color, and focus verified on desktop and mobile.
- [x] Affected tests, types, and lint passed.

## Result
Implemented locally: delete/discard on the left in red, confirmation on the right, and safe focus on Manter atividade (Keep activity). The shared footer uses two columns to preserve positions at 320px. Browser validated at 320/390/1440px without performing deletions. 45 tests, lint, structure, types, and build passed. Changes not yet committed.
