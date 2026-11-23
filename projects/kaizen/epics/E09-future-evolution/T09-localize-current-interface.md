---
id: KZ-E09-T09
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Internationalize the current interface in Portuguese and English

## Authorization and scope

Anticipation authorized by the user on 29/10/2026. The current interface can advance before the new catalog and the future journeys. This delivery does not complete KZ-E09-T05/E09-T06/E09-T08 nor change the documentation policy in Portuguese.

## Objective
Not recorded in the original version of this task; equivalent content in the "Authorization and scope" section.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/plans/i18n/I18N-PT-EN-PLAN.md`
- `docs/evidence/i18n/I18N-UI-IMPLEMENTATION.md`
- `src/i18n/locale.ts`
- `src/i18n/request.ts`
- `src/i18n/next-intl.d.ts`
- `src/i18n/request.test.ts`
- `src/i18n/training-localization.test.tsx`
- `messages/en.json`
- `messages/pt-BR.json`
- `scripts/validate-i18n.mjs`
- `scripts/test-i18n-http.mjs`
- `src/features/training/ui/localize-training-feedback.ts`
- `src/features/training/ui/training-feedback-messages.ts`
- `src/components/shared/feature-placeholder/feature-placeholder.tsx`
- `tests/support/render-localized.tsx`
- `package.json`
- `pnpm-workspace.yaml`
- `next.config.ts`
- `src/app/dieta/page.tsx`
- `src/app/layout.tsx`
- `src/components/shared/app-shell/app-shell.test.tsx`
- `src/components/shared/app-shell/app-shell.tsx`
- `src/components/shared/app-shell/components/app-shell-navigation/app-shell-navigation.test.tsx`
- `src/components/shared/app-shell/components/app-shell-navigation/components/app-shell-navigation-links/app-shell-navigation-links.tsx`
- `src/components/shared/feature-placeholder/feature-placeholder.test.tsx`
- `src/features/training/application/get-public-training-plan.ts`
- `src/features/training/application/get-training-day.ts`
- `src/features/training/application/training-dto.ts`
- `src/features/training/ui/components/training-day-page/components/invalid-training-date/invalid-training-date.tsx`
- `src/features/training/ui/components/training-day-page/components/rest-training-day/rest-training-day.tsx`
- `src/features/training/ui/components/training-day-page/components/training-action-feedback/training-action-feedback.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-action-feedback/training-action-feedback.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-completion-dialog/training-activity-completion-dialog.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-completion-form/training-activity-completion-form.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-controls/training-activity-controls.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-delete-form/training-activity-delete-form.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-delete-form/training-activity-delete-form.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-editor-content/training-activity-editor-content.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-editor-notice/training-activity-editor-notice.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-editor/training-activity-editor.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-editor/training-activity-editor.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/components/training-preparation-select/training-preparation-select.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-modal/training-activity-modal.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-modal/training-activity-modal.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-section/training-activity-section.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-timer/training-activity-timer.tsx`
- `src/features/training/ui/components/training-day-page/components/training-agenda-badges/training-agenda-badges.tsx`
- `src/features/training/ui/components/training-day-page/components/training-date-navigation/training-date-navigation.styles.ts`
- `src/features/training/ui/components/training-day-page/components/training-date-navigation/training-date-navigation.tsx`
- `src/features/training/ui/components/training-day-page/components/training-day-content/training-day-content.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-day-content/training-day-content.tsx`
- `src/features/training/ui/components/training-day-page/components/training-day-feedback/training-day-feedback.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-day-loading/training-day-loading.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/exercise-priority-indicator/exercise-priority-indicator.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/exercise-priority-indicator/exercise-priority-indicator.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/training-completed-exercise-correction/training-completed-exercise-correction.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/training-exercise-form/training-exercise-form.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/training-local-exercise-editor/training-local-exercise-editor.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.constants.ts`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`
- `src/features/training/ui/components/training-day-page/components/training-warmup-toggle/training-warmup-toggle.tsx`
- `src/features/training/ui/components/training-day-page/training-day-page.test.tsx`
- `src/features/training/ui/components/training-day-page/training-day-page.tsx`
- `src/features/training/ui/components/training-day-page/training-day-page.utils.ts`
- `src/features/training/ui/components/training-day-unexpected-error/training-day-unexpected-error.test.tsx`
- `src/features/training/ui/components/training-day-unexpected-error/training-day-unexpected-error.tsx`
- `src/features/training/ui/hooks/use-training-activity-completion-draft/use-training-activity-completion-draft.regressions.test.tsx`
- `src/features/training/ui/hooks/use-training-activity-completion-draft/use-training-activity-completion-draft.test.tsx`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.test.tsx`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.ts`
- `src/features/training/ui/hooks/use-training-activity-editor-draft/use-training-activity-editor-draft.test.tsx`
- `src/features/training/ui/hooks/use-training-exercise-draft/use-training-exercise-draft.utils.ts`

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task; equivalent content in the "Steps and acceptance criteria" section.

## Validation
Not recorded in the original version of this task.

## Acceptance criteria
Not recorded in the original version of this task; equivalent content in the "Steps and acceptance criteria" section.

## Steps and acceptance criteria

- [x] Resolve English/Portuguese from browser preferences and keep an English fallback.
- [x] Translate HTML, metadata, shell, and the available workout interface.
- [x] Translate forms, accessibility, confirmations, drafts, and known errors.
- [x] Localize dates and pluralization while preserving civil rules, codes, and units.
- [x] Validate catalog parity in CI and the interface in both languages.
- [x] Preserve the database, editorial content, and free text for integration of the new catalog.

## Result
290 messages in each language. 408 tests passed, the production build was approved, and six HTTP scenarios confirmed the initial language and metadata. Lint, types, structure, boundaries, icons, and data integrity approved. Details and limits in [I18N-UI-IMPLEMENTATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/evidence/i18n/I18N-UI-IMPLEMENTATION.md).
