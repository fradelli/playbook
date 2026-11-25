---
id: DS-E02-T02
epic: DS-E02
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Require accessible close labels

## Objective

Let consumers name every close control in their own language, as Sheet already requires.

## Context

- `DialogContent` renders a hardcoded English screen reader text, `Close`.
- `ToastProvider` defaults `closeLabel` to `Close toast`, and `ToastClose` hardcodes the same `aria-label`.
- `SheetContent` already requires `closeLabel`. Kaizen is a Portuguese-first application.

## Inputs

- `src/components/dialog/index.tsx` — `DialogContent` close button.
- `src/components/toast/index.tsx` — `ToastClose` and `ToastProvider`.
- `src/components/sheet/index.tsx` — `closeLabel` contract.

## Deliverables

- A required close label on Dialog and Toast when the close control is rendered.
- Updated stories and tests.
- A Changeset with migration notes.

## Subtasks

- [x] Add the label prop to Dialog and make the Toast label required.
- [x] Remove the English defaults.
- [x] Update stories, tests, and the README.

## Validation

- `npm run typecheck`, `npm run test:unit`, and `npm run test:storybook` pass.
- Omitting the label is a type error when the close button is shown.

## Acceptance criteria

- [x] No close control ships hardcoded English text.

## Result

- `fradelli/design-system` PR #28, merged as `ca10a01`: `DialogContent` and `DialogFooter` take a required `closeLabel` when the close control is shown; `Toaster` `closeLabel` and `ToastClose` `aria-label` are required with no English default.
- Omitting a label is a TypeScript error, covered by `@ts-expect-error` assertions in the unit tests; Dialog and Toast stories and README updated.
- `minor` Changeset `.changeset/require-close-labels.md` with migration notes; PR CI `Validate package` (`npm run ci`) passed.
