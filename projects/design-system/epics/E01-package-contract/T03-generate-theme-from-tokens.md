---
id: DS-E01-T03
epic: DS-E01
project: design-system
repository: fradelli/design-system
depends_on: [DS-E03-T02]
---

# Generate the Tailwind theme from tokens

## Objective

Generate the `@theme inline` mapping from the DTCG tokens so the CSS contract is not maintained twice.

## Context

`src/styles/styles.css` maps about 80 Tailwind theme variables to `--fd-*` tokens by hand. DS-E03-T02 adds shadcn semantic aliases to the same mapping.

## Inputs

- `tokens/*.json` — semantic tokens.
- `style-dictionary.config.mjs` and `scripts/build-tokens.mjs` — generation.
- `src/styles/styles.css` — `@theme inline` block.

## Deliverables

- A generated theme file imported by `src/styles/styles.css`.
- `tokens:check` covering the generated theme.

## Subtasks

- [ ] Add a Style Dictionary format for the Tailwind theme mapping.
- [ ] Replace the manual block with the generated file.
- [ ] Extend `scripts/copy-styles.mjs` and `tokens:check` to the new file.

## Validation

- `npm run tokens:check`, `npm run storybook:build`, and `npm run test:storybook` pass.
- The compiled CSS of a consumer fixture has the same theme variables before and after.

## Acceptance criteria

- [ ] Changing a semantic token requires no manual CSS edit.

## Result

Not started.
