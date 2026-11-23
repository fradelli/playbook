---
id: DS-E03-T02
epic: DS-E03
project: design-system
repository: fradelli/design-system
depends_on: [DS-E03-T01]
---

# Add shadcn token aliases and recipe configuration

## Objective

Let official Mira recipes be copied or compared without rewriting their color classes.

## Context

Recipes use shadcn semantic names (`accent`, `secondary`, `card`, `popover`, `ring`, `muted`, `destructive`), while the package exposes `surface-interactive`, `surface-elevated`, `focus-ring`, and `status-destructive`. Every adopted recipe is adapted by hand, which explains most of the class differences measured in the audit (for example, 68% of the official dropdown-menu classes present).

## Inputs

- `src/styles/styles.css` — `@theme inline` block.
- `tokens/semantic.dark.json` — semantic colors.
- `docs/decisions/0007-mira-only-components.md` — import method decided in DS-E03-T01.

## Deliverables

- Tailwind theme aliases for the shadcn semantic names mapped to `--fd-*` tokens.
- `components.json` configured for the Base UI Mira registry, if DS-E03-T01 chooses the CLI.
- A documented procedure for adopting or comparing a recipe.

## Subtasks

- [ ] Map each shadcn semantic color to an existing `--fd-*` token.
- [ ] Add the aliases and, if decided, `components.json`.
- [ ] Document the adoption procedure.

## Validation

- An official recipe copied verbatim renders with package colors in Storybook.
- `npm run ci` passes.

## Acceptance criteria

- [ ] A recipe can be adopted without changing its class names.

## Result

Not started.
