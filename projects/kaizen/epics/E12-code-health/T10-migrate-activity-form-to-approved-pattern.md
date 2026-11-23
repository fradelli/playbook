---
id: KZ-E12-T10
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E12-T04, KZ-E12-T08]
---

# Migrate the activity form to the approved pattern

## Objective
Rewrite the activity create and edit form in the form pattern approved in KZ-E12-T08, validating with the same schema as the Server Action.

## Context

`training-activity-form.tsx` has 391 lines, six `useState` calls, manual validation in `onSubmit`, and a `useMemo` that builds the published snapshot for the editor and the draft. If KZ-E12-T08 rejects React Hook Form, this task applies the approved alternative or is cancelled with the decision recorded.

## Inputs
- Decision approved by KZ-E12-T08 in `docs/decisions/`.
- Shared schemas delivered by KZ-E12-T04.
- `src/features/training/ui/components/training-day-page/components/training-activity-form/` — form, schedule hook, utils, and tests.
- `src/features/training/ui/components/training-day-page/components/training-activity-editor/` — snapshot consumer.
- `docs/product/telas/guia-de-estilo.md` — field and error states.

## Deliverables
- Form with state and validation through the approved pattern and the shared schema.
- Integration with `useActionState` and the Server Action preserved, with no optimistic confirmation.
- Local draft and editor snapshot fed by the form state.

## Subtasks
- [ ] Install the approved dependency, if any, with an exact version.
- [ ] Migrate fields, validation, and error messages.
- [ ] Keep the draft, double-submit blocking, and reload on conflict.
- [ ] Update tests.

## Validation
- `pnpm test`, `pnpm typecheck`, and `pnpm i18n:check` pass.
- Manual check: create, edit, conflict, and draft restoration.

## Acceptance criteria
- [ ] The form does not keep one `useState` per field.
- [ ] Client and server validate with the same schema.
- [ ] The existing behavior tests keep passing.

## Result
Not started.
