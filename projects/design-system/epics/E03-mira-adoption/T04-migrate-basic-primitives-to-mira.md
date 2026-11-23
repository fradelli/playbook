---
id: DS-E03-T04
epic: DS-E03
project: design-system
repository: fradelli/design-system
depends_on: [DS-E03-T01, DS-E03-T02]
---

# Migrate basic primitives to Mira

## Objective

Replace RadioGroup, Separator, Badge, Alert, and Card with the official Mira recipes.

## Context

Official class coverage measured in the audit: RadioGroup 10%, Separator 33%, Badge 37%, Alert 21%, Card 47%.

- RadioGroup uses buttons with `role="radio"` and custom keyboard handling; the recipe uses `@base-ui/react/radio-group` and `radio`.
- Separator is plain HTML; the recipe uses `@base-ui/react/separator`.
- Badge composes with the internal `Slot`; the recipe uses `useRender` and `mergeProps`.
- Card has glass and solid surfaces from ADR 0003 and ADR 0004; the recipe uses `--card-spacing` and a `size` variant.
- Kaizen imports Card 10 times, Alert 5, Badge 3, and Separator once; RadioGroup has no Kaizen import.

## Inputs

- `src/components/radio-group/index.tsx`, `separator/index.tsx`, `badge/index.tsx`, `alert/index.tsx`, `card/index.tsx` — current APIs.
- `https://ui.shadcn.com/r/styles/base-mira/{radio-group,separator,badge,alert,card}.json` — official recipes.
- `docs/decisions/0003-shared-glass-visual-language.md` and `docs/decisions/0004-consistent-component-composition.md` — Card surface decisions.

## Deliverables

- The five components rebuilt from the recipes, keeping the subpaths.
- A decision on the glass Card surface under ADR 0007.
- A migration guide and a Changeset.

## Subtasks

- [ ] Decide whether the glass surface survives as a token-level variant or is removed.
- [ ] Rebuild each component from its recipe.
- [ ] Update stories, tests, and fixtures.

## Validation

- `npm run ci` passes.
- RadioGroup keyboard navigation and form submission are covered by interaction tests.

## Acceptance criteria

- [ ] The five components follow their recipes, with adaptations recorded.

## Result

Not started.
