---
id: KZ-E11-T08
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Define overlap presentation and the grouper

## Objective
Detail the visual grouping with two cards and +N, without changing the freedom of overlap or confusing presentation with a link.

## Inputs
- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — consult the contract or section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — consult the contract or section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — consult the contract or section matching the scope.
- [src/features/schedule/ui/schedule-layout.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/schedule-layout.ts) — consult the contract or section matching the scope.
- [src/features/schedule/ui/components/calendar-grid/calendar-grid.entries.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/calendar-grid/calendar-grid.entries.ts) — consult the contract or section matching the scope.

## Deliverables
Verifiable result described in the criteria below, with evidence linked to this task. Before editing code, apply the relevant sections of the [architecture](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) and the local contracts. Do not load entire historical plans.

## Subtasks
- [ ] Define the order of visible activities and the handling of partial crossings.
- [ ] Define how the grouper opens by mouse, touch, and keyboard.
- [ ] Define target selection when a drop meets grouped activities.

## Validation
Check links, IDs, dependencies, and consistency with product rules. When implementation is authorized, run the proportional gates and the plan's scenarios; record what was run and what remains pending. Tests not yet run do not count as evidence.

## Acceptance criteria
- [ ] Order and crossing rules are decided or recorded as pending.
- [ ] All activities remain accessible and identifiable.
- [ ] The plan distinguishes this deliverable from the initial DnD and from linking between activities.

## Out of scope

This task delivers a specification; later implementation depends on visual acceptance. It does not block the existing independent overlap.

## Result
Backlog recorded on 21/11/2026 during the documentation reconciliation. No execution of this task was started by this record. Canonical status lives only in the roadmap index.
