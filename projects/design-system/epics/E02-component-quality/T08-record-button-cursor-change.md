---
id: DS-E02-T08
epic: DS-E02
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Record the Button cursor change

## Objective

Decide the cursor of enabled buttons and links styled as buttons, and tell consumers about the change that `0.7.0` shipped without a note.

## Context

- `0.6.0` (commit `2fdf58f`) added `cursor-pointer` to enabled Button variants and recorded it in `CHANGELOG.md`.
- PR #21 (commit `52b4af2`) replaced it with `cursor-default` while adopting the Mira recipe; no Changeset mentions it, so `0.7.0` changed the cursor silently.
- The official Base UI Mira Button recipe sets no cursor class.
- Kaizen sets `a[href] { cursor: default; }` globally in `src/app/globals.css`.

## Inputs

- `src/components/button/index.tsx` — `buttonVariants` base classes.
- `CHANGELOG.md` — `0.6.0` patch notes.
- `https://ui.shadcn.com/r/styles/base-mira/button.json` — official recipe.

## Deliverables

- A decision between `cursor-default`, `cursor-pointer`, and the recipe default, recorded in `docs/governance/shared-ui-style.md`.
- `src/components/button/index.tsx` matching the decision.
- A patch Changeset that tells consumers the current cursor behavior.

## Subtasks

- [ ] Record the decision with the maintainer.
- [ ] Align the Button classes with it.
- [ ] Add a Button story assertion for the enabled and disabled cursor.
- [ ] Add the Changeset.

## Validation

- `npm run test:storybook` passes with the cursor assertion.

## Acceptance criteria

- [ ] `docs/governance/shared-ui-style.md` states the cursor of enabled and disabled buttons.
- [ ] A Button story asserts the computed cursor of an enabled and a disabled button.
- [ ] The next release notes describe the cursor behavior.

## Result

Not started.
