---
id: KZ-E11-T02
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E11-T01]
---

# Validate the selection and drag-and-drop POC

## Objective
Build, after implementation is authorized, a local POC with no database writes for multi-day selection, moving activities, scheduling tasks, changing groups, and bottom resize.

## Inputs
- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — consult the contract or section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — consult the contract or section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — consult the contract or section matching the scope.
- [src/features/schedule/ui/components/calendar-grid/components/calendar-day-column/calendar-day-column.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/calendar-grid/components/calendar-day-column/calendar-day-column.tsx) — consult the contract or section matching the scope.
- [src/features/schedule/ui/components/schedule-workspace/schedule-workspace.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/schedule-workspace/schedule-workspace.tsx) — consult the contract or section matching the scope.
- [src/features/schedule/ui/components/todo-task-row/todo-task-row.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/todo-task-row/todo-task-row.tsx) — consult the contract or section matching the scope.

## Deliverables
Verifiable result described in the criteria below, with evidence linked to this task. Before editing code, apply the relevant sections of the [architecture](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) and the local contracts. Do not load entire historical plans.

## Subtasks
- [ ] Check the version and public API of @dnd-kit/react; define the geometry and a single snap policy.
- [ ] Integrate the provider, sensors, and local preview while preserving click, checkbox, focus, and scrolling.
- [ ] Validate multi-day selection and the simulated intents of the first increment; record touch and keyboard limitations.

## Validation
Check links, IDs, dependencies, and consistency with product rules. When implementation is authorized, run the proportional gates and the plan's scenarios; record what was run and what remains pending. Tests not yet run do not count as evidence.

## Acceptance criteria
- [ ] 21:00 to 12:00 the next day and five days represent a single interval with visual segments.
- [ ] Movement preserves the duration and the offset of the held point; bottom resize preserves the start.
- [ ] Cancellation, an invalid target, and an operation with no change do not send persistent commands.
- [ ] Autoscroll, a grid with variable days, and internal controls work without global per-pixel updates.
- [ ] The click/touch alternative and mobile behavior are demonstrated or identified as an approval blocker.

## Out of scope

No write Server Action, migration, or public demo route. Approval of the POC results is a separate gate for KZ-E11-T03.

## Result
Backlog recorded on 21/11/2026 during the documentation reconciliation. No execution of this task was started by this record. Canonical status lives only in the roadmap index.
