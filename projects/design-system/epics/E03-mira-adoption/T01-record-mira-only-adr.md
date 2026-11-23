---
id: DS-E03-T01
epic: DS-E03
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Record the Mira-only component decision

## Objective

Record in ADR 0007 that every shared component follows the official shadcn/ui Base UI Mira recipe (preset `b1HwjY1BI0`), with explicit exceptions.

## Context

Maintainer decisions of 2026-11-23:

- Custom components that have a Mira recipe are replaced by the recipe.
- PendingButton, LoadingRegion, StatusBadge, and NavigationItem are replaced by Mira compositions (Button with Spinner, Skeleton or Spinner with Empty, Badge variants, and Button rendering a link).
- StatusIndicator and ColorSwatch have no shadcn equivalent and stay as documented exceptions.

ADR 0006 already allows Base UI and Mira for new primitives but keeps native components and does not say how recipes are imported. ADR 0002 still describes native primitives.

## Inputs

- `docs/decisions/0001-shared-design-system-foundation.md` — "Review and supersession".
- `docs/decisions/0002-native-accessible-primitives.md` — whole file.
- `docs/decisions/0006-mira-component-recipes.md` — whole file.
- `docs/governance/component-admission.md` — checklist.
- `docs/governance/base-mira-catalog.md` — inventory.

## Deliverables

- `docs/decisions/0007-mira-only-components.md`.
- Supersession notes in ADR 0002 and ADR 0006 status lines.
- `docs/governance/component-admission.md` requiring a Mira recipe or a recorded exception.

## Subtasks

- [ ] Write the ADR with context, decision, exceptions, rejected alternatives, and migration policy.
- [ ] Record how recipes are imported and compared (manual copy or CLI with `components.json`).
- [ ] Update the admission checklist.

## Validation

- `npm run format:check` and `git diff --check` pass.

## Acceptance criteria

- [ ] The maintainer accepted ADR 0007.
- [ ] Each current component is classified as recipe, exception, or replacement.

## Result

Not started.
