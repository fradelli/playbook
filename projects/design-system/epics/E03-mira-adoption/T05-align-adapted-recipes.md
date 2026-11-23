---
id: DS-E03-T05
epic: DS-E03
project: design-system
repository: fradelli/design-system
depends_on: [DS-E03-T01, DS-E03-T02, DS-E02-T01]
---

# Align adapted recipes with Mira

## Objective

Bring Button, Label, DropdownMenu, and ContextMenu back to their official recipes and use one composition API.

## Context

- Official class coverage measured in the audit: Button 76%, DropdownMenu 68%, ContextMenu 62%, Label 60%.
- Button renders a plain `button` with the internal `Slot` and `asChild`, while the recipe uses `@base-ui/react/button` and `render`. Button also adds a `tone` prop with seven tones styled by unlayered CSS.
- Composition is split between `asChild` (11 components) and Base UI `render` (5 components).
- Label lacks the recipe disabled-group states.

## Inputs

- `src/components/button/index.tsx`, `label/index.tsx`, `dropdown-menu/index.tsx`, `context-menu/index.tsx`.
- `src/lib/slot.tsx` and `src/lib/menu-styles.ts`.
- `src/styles/styles.css` — `data-fd-tone` rules.
- `https://ui.shadcn.com/r/styles/base-mira/{button,label,dropdown-menu,context-menu}.json` — official recipes.

## Deliverables

- The four components aligned with their recipes.
- A decision on the Button `tone` prop.
- `render` as the only composition API, with `src/lib/slot.tsx` removed when unused.
- A migration guide and a Changeset.

## Subtasks

- [ ] Decide whether `tone` stays, becomes variants, or is removed.
- [ ] Align classes and primitives with the recipes.
- [ ] Replace `asChild` with `render` across the package.

## Validation

- `npm run ci` passes.
- No source file outside tests references `asChild`.

## Acceptance criteria

- [ ] Every component composes through `render`.

## Result

Not started.
