---
id: DS-E03-T08
epic: DS-E03
project: design-system
repository: fradelli/design-system
depends_on: [DS-E03-T04, DS-E03-T06]
---

# Replace LoadingRegion with Skeleton, Spinner, and Empty

## Objective

Remove the custom LoadingRegion and document the Mira composition that replaces it.

## Context

LoadingRegion renders a `section` with `aria-busy` and a screen reader status message. It has no shadcn equivalent and no Kaizen import. Suna usage is unknown.

## Inputs

- `src/components/loading-region/index.tsx` — current API and accessibility behavior.
- `src/components/skeleton/index.tsx` and `src/components/spinner/`, `src/components/empty/` — created by DS-E03-T06.

## Deliverables

- `@fradelli/ui/loading-region` removed from `package.json`, source, stories, and validation lists.
- A pattern story showing the loading and empty compositions with an announced status.
- A migration guide and a Changeset.

## Subtasks

- [ ] Confirm whether Suna imports LoadingRegion.
- [ ] Document the replacement composition, including `aria-busy` and `role="status"`.
- [ ] Remove the component and its subpath.

## Validation

- `npm run ci` passes.

## Acceptance criteria

- [ ] The package no longer exports LoadingRegion.
- [ ] Loading and empty states remain announced to assistive technology in the documented pattern.

## Result

Not started.
