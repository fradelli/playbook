---
id: DS-E02-T05
epic: DS-E02
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Complete stories and standardize naming

## Objective

Give every public component a Storybook entry and a consistent file layout.

## Context

- color-swatch, context-menu, kbd, toast, and tooltip have no story.
- `src/stories/components/select/select.stories.tsx` breaks the PascalCase naming of the other stories.
- `src/components/primitives.test.tsx` and `src/components/mira-form.test.tsx` test several components outside their folders.
- 19 of 29 story files have `play` interaction tests.

## Inputs

- `src/stories/components/` — existing stories.
- `src/components/` — component folders and shared tests.
- `docs/decisions/0004-consistent-component-composition.md` — catalog organization.

## Deliverables

- Stories for the five missing components.
- Renamed story files and shared tests split per component.

## Subtasks

- [ ] Add the missing stories, with interaction tests where the component is interactive.
- [ ] Rename `select.stories.tsx`.
- [ ] Move shared tests next to their components.

## Validation

- `npm run storybook:build` and `npm run test:storybook` pass.
- Every `src/components/*` folder has a matching story.

## Acceptance criteria

- [ ] Every exported component appears in Storybook.

## Result

Not started.
