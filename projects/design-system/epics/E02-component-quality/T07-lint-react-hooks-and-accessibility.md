---
id: DS-E02-T07
epic: DS-E02
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Lint React hooks and JSX accessibility

## Objective

Catch broken hook dependencies and inaccessible JSX in lint, before review.

## Context

- `eslint.config.mjs` uses only `@eslint/js` and `typescript-eslint`; no React hooks or JSX accessibility rules run.
- `src/components/popover/index.tsx` registers effects that read `context.setOpen` and `context.triggerRef` without listing them as dependencies.
- Storybook catches accessibility issues only for rendered stories, and 5 components have no story (DS-E02-T05).

## Inputs

- `eslint.config.mjs` — whole file.
- `package.json` — `lint` script and development dependencies.

## Deliverables

- `eslint-plugin-react-hooks` and `eslint-plugin-jsx-a11y` in `devDependencies` and enabled for `src/**/*.tsx`.
- Source fixed, or a reasoned inline exception for each rule violation.

## Subtasks

- [ ] Add both plugins with their recommended configurations.
- [ ] Fix or justify every reported violation.
- [ ] Record the justification of each inline exception in the same line.

## Validation

- `npm run lint` passes.
- A hook with a missing dependency, added on purpose, makes `npm run lint` fail.

## Acceptance criteria

- [ ] `npm run lint` runs the `react-hooks` and `jsx-a11y` recommended rules on `src/**/*.tsx`.
- [ ] Every `eslint-disable` comment in `src/` names the rule and the reason.

## Result

Not started.
