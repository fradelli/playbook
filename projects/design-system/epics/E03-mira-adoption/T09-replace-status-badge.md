---
id: DS-E03-T09
epic: DS-E03
project: design-system
repository: fradelli/design-system
depends_on: [DS-E03-T04]
---

# Replace StatusBadge with Badge variants

## Objective

Remove the custom StatusBadge and cover its use cases with the Mira Badge.

## Context

StatusBadge has no shadcn equivalent and no Kaizen import. `docs/governance/component-admission.md` already says status mapping belongs to applications. Suna usage is unknown.

## Inputs

- `src/components/status-badge/index.tsx` — current tones.
- `src/components/badge/index.tsx` — Mira Badge from DS-E03-T04.

## Deliverables

- `@fradelli/ui/status-badge` removed from `package.json`, source, stories, and validation lists.
- Badge variants or documented classes covering the status tones that remain needed.
- A migration guide and a Changeset.

## Subtasks

- [ ] Confirm whether Suna imports StatusBadge.
- [ ] Map each StatusBadge tone to a Badge variant or composition.
- [ ] Remove the component and its subpath.

## Validation

- `npm run ci` passes.

## Acceptance criteria

- [ ] The package no longer exports StatusBadge.
- [ ] Each previous tone has a documented Badge equivalent.

## Result

Not started.
