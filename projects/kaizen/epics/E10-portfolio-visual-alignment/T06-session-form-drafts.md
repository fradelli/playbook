---
id: KZ-E10-T06
epic: KZ-E10
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E10-T05]
---

# Per-session form drafts

## Objective
Not recorded in the original version of this task.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/features/training/ui/hooks/use-training-activity-editor-draft/use-training-activity-editor-draft.ts`
- `src/features/training/ui/hooks/use-training-activity-completion-draft/use-training-activity-completion-draft.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-editor-content/training-activity-editor-content.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-completion-dialog/training-activity-completion-dialog.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-completion-form/training-activity-completion-form.styles.ts`

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Acceptance criteria
Not recorded in the original version of this task.

## Result
Creation and completion store filled-in data in sessionStorage. Editing does not recover
or write a draft and confirms discard when closing with changes. Old form keys in
localStorage are removed on open; execution, pauses, and sets remain in
their separate storage. A deleted draft does not reappear without a new change.

Title Finalizar atividade (Finish activity), message Rascunho salvo nesta sessão (Draft saved in this session), action Excluir rascunho (Delete draft)
in the footer, and a single-column form, with no inner background/border/card.

55 affected tests, lint, structure, types/build passed. Chromium confirmed reload
in the same tab, independent new tab, discard, and editing with cancel/accept of the
confirmation, without saving activities. Local changes, no commit.

SessionStorage follows the browser's session lifecycle; session restoration or a duplicated
tab may preserve/copy state depending on the browser. It offers no guarantee of secure erasure
nor of absence of restoration after a browser failure.

## Later user decision

Closing the editor discards changes directly, with no native confirmation or other
dialog. This decision replaces the discard confirmation described above. X, Escape,
and outside click were verified in the browser; 21 editor/modal tests passed.
During submission, closing remains blocked.
