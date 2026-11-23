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

- [ ] Add the label prop to Dialog and make the Toast label required.
- [ ] Remove the English defaults.
- [ ] Update stories, tests, and the README.

## Validation

- `npm run typecheck`, `npm run test:unit`, and `npm run test:storybook` pass.
- Omitting the label is a type error when the close button is shown.

## Acceptance criteria

- [ ] No close control ships hardcoded English text.

## Result

Not started.
