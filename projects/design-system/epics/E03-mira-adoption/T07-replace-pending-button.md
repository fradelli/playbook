---
id: DS-E03-T07
epic: DS-E03
project: design-system
repository: fradelli/design-system
depends_on: [DS-E03-T05, DS-E03-T06]
---

# Replace PendingButton with Button and Spinner

## Objective

Remove the custom PendingButton and document the Mira composition that replaces it.

## Context

PendingButton wraps Button with a Phosphor `SpinnerGap` icon and has no shadcn equivalent. Kaizen imports it four times.

## Inputs

- `src/components/pending-button/index.tsx` — current API and accessibility behavior.
- `src/stories/components/pending-button/PendingButton.stories.tsx`.
- `src/components/spinner/` — created by DS-E03-T06.

## Deliverables

- `@fradelli/ui/pending-button` removed from `package.json`, source, stories, and validation lists.
- A Button story showing the pending composition with Spinner and an accessible busy state.
- A migration guide and a Changeset classifying the removal.

## Subtasks

- [ ] Document the replacement composition, including `aria-busy` and the disabled state.
- [ ] Remove the component and its subpath.
- [ ] Update stories, tests, and fixtures.

## Validation

- `npm run ci` passes.

## Acceptance criteria

- [ ] The package no longer exports PendingButton.
- [ ] The guide shows the equivalent markup for each existing usage pattern.

## Result

Not started.
