---
id: DS-E02-T03
epic: DS-E02
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Resolve the dark variant and CSS layers

## Objective

Make the dark-only theme independent of the operating system preference and let consumer utilities override package CSS predictably.

## Context

- `src/styles/styles.css` sets `color-scheme: dark`, but components use the Tailwind `dark:` variant 29 times without `@custom-variant`, so rendering changes with the operating system theme.
- Rules live in three places: `fradelli-ui.*` layers, a generic `@layer components` that merges with the consumer layer, and unlayered rules (Button tones and the responsive modal) that beat consumer utilities.
- The base layer styles `body` and applies a global `prefers-reduced-motion` reset with `!important`; Kaizen duplicates the motion reset in `src/app/globals.css`.

## Inputs

- `src/styles/styles.css` — whole file.
- `src/components/*/index.tsx` — `dark:` classes.

## Deliverables

- `@custom-variant dark` matching the dark-only theme, or `dark:` classes removed.
- Every package rule inside a `fradelli-ui.*` layer.
- A recorded decision on the global body and motion rules.

## Subtasks

- [ ] Choose between defining the dark variant and folding `dark:` values into the base classes.
- [ ] Move generic and unlayered rules into `fradelli-ui.*` layers.
- [ ] Decide whether body and global motion rules stay in the package.
- [ ] Add a Changeset.

## Validation

- Storybook renders the same with the operating system in light and dark modes.
- `npm run test:storybook` and `npm run fixtures:check` pass.

## Acceptance criteria

- [ ] Component appearance does not depend on the operating system theme.
- [ ] A consumer `className` overrides package styles without `!important`.

## Result

Not started.
