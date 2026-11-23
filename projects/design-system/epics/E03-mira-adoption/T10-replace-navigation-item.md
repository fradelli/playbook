---
id: DS-E03-T10
epic: DS-E03
project: design-system
repository: fradelli/design-system
depends_on: [DS-E03-T05]
---

# Replace NavigationItem with Button rendering a link

## Objective

Remove the custom NavigationItem and document the Mira composition that replaces it.

## Context

NavigationItem is a link with a 44 px minimum target, visible focus, and `aria-current="page"` styling through unlayered CSS shared with the Button tones. It has no shadcn equivalent. Kaizen imports it once, in its responsive navigation.

## Inputs

- `src/components/navigation-item/index.tsx` — current API.
- `docs/governance/navigation-item-admission.md` — admission rationale.
- `src/styles/styles.css` — `[data-slot="navigation-item"]` rules.
- `src/components/button/index.tsx` — Mira Button from DS-E03-T05.

## Deliverables

- `@fradelli/ui/navigation-item` removed from `package.json`, source, stories, styles, and validation lists.
- A Button story rendering a link with the active state, the minimum target, and visible focus.
- `docs/governance/navigation-item-admission.md` archived as historical evidence.
- A migration guide and a Changeset.

## Subtasks

- [ ] Document the replacement composition with `render` and `aria-current`.
- [ ] Remove the component, its CSS, and its subpath.
- [ ] Update stories, tests, and fixtures.

## Validation

- `npm run ci` passes.

## Acceptance criteria

- [ ] The package no longer exports NavigationItem.
- [ ] The documented link keeps the active state, focus, and target size.

## Result

Not started.
