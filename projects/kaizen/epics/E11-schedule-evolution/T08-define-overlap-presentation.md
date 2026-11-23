---
id: KZ-E11-T08
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Define overlap presentation and the grouper

## Objective

Specify the visual grouping with two cards and +N, without changing the freedom of overlap or confusing presentation with a link.

## Context

This task delivers a specification; later implementation depends on visual acceptance.

## Inputs

- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — reconciled agenda contracts; read only the section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — drag-and-drop plan and scenarios; read only the section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — schedule product rules.
- [src/features/schedule/ui/schedule-layout.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/schedule-layout.ts) — current schedule layout.
- [src/features/schedule/ui/components/calendar-grid/calendar-grid.entries.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/calendar-grid/calendar-grid.entries.ts) — calendar grid entries.
- [docs/architecture/TARGET-ARCHITECTURE.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) — apply the sections relevant to the change before editing code.

## Deliverables

- A specification of the grouper in the agenda planning documents: order, partial crossings, how it opens, and drop target selection.

## Subtasks

- [ ] Define the order of visible activities and the handling of partial crossings.
- [ ] Define how the grouper opens by mouse, touch, and keyboard.
- [ ] Define target selection when a drop meets grouped activities.

## Validation

- Links, IDs, and dependencies resolve, and the specification agrees with the product rules.
- Each rule is labeled as decided or pending.

## Acceptance criteria

- [ ] Order and crossing rules are decided or recorded as pending.
- [ ] All activities remain accessible and identifiable.
- [ ] The plan distinguishes this deliverable from the initial DnD and from linking between activities.

## Out of scope

- Blocking the existing independent overlap (this task does not block it).

## Result

Not started. Backlog recorded on 2026-11-21 during the documentation reconciliation. Status lives only in the roadmap index.
