---
id: DS-E02-T04
epic: DS-E02
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Add semantic tokens for pastel colors

## Objective

Make ColorSwatch read only semantic tokens.

## Context

ColorSwatch is a documented exception with no shadcn equivalent. Its categorical colors use `--fd-color-category-*`, but the five pastel colors (lilac, sage, peach, sky, rose) point directly to `--fd-primitive-color-*-400`, bypassing the semantic layer.

## Inputs

- `src/components/color-swatch/index.tsx` — `colors` map.
- `tokens/primitives.json` and `tokens/semantic.visual.json` — pastel primitives and semantic layer.
- `src/tokens/contrast.test.ts` — contrast rules.

## Deliverables

- Semantic pastel tokens in `tokens/` and a regenerated `src/styles/tokens.generated.css`.
- `src/components/color-swatch/index.tsx` using them.

## Subtasks

- [ ] Add the semantic tokens and run `npm run tokens:build`.
- [ ] Point ColorSwatch to the semantic tokens.
- [ ] Add a patch Changeset.

## Validation

- `npm run tokens:check` and `npm run test:unit` pass.
- Searching `src/components` for `primitive-color` returns nothing.

## Acceptance criteria

- [ ] No component references a primitive token directly.

## Result

Not started.
