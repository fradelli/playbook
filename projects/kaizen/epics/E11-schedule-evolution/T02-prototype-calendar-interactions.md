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

- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — reconciled agenda contracts; read only the section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — drag-and-drop plan and scenarios; read only the section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — schedule product rules.
- [src/features/schedule/ui/components/calendar-grid/components/calendar-day-column/calendar-day-column.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/calendar-grid/components/calendar-day-column/calendar-day-column.tsx) — day column that receives the gestures.
- [src/features/schedule/ui/components/schedule-workspace/schedule-workspace.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/schedule-workspace/schedule-workspace.tsx) — workspace where the provider is integrated.
- [src/features/schedule/ui/components/todo-task-row/todo-task-row.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/todo-task-row/todo-task-row.tsx) — task row that is scheduled by gesture.
- [docs/architecture/TARGET-ARCHITECTURE.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) — apply the sections relevant to the change before editing code.

## Deliverables

- A local POC with no database writes, integrated in the schedule UI components listed in Inputs.
- A record of the POC results and of touch and keyboard limitations, linked from the Result.

## Subtasks

- [ ] Check the version and public API of @dnd-kit/react; define the geometry and a single snap policy.
- [ ] Integrate the provider, sensors, and local preview while preserving click, checkbox, focus, and scrolling.
- [ ] Validate multi-day selection and the simulated intents of the first increment; record touch and keyboard limitations.

## Validation

- Links, IDs, and dependencies resolve, and the POC agrees with the product rules.
- When implementation is authorized, the proportional gates and the plan scenarios run, and the Result records what ran and what remains pending. Tests not run do not count as evidence.

## Acceptance criteria

- [ ] 21:00 to 12:00 the next day and five days represent a single interval with visual segments.
- [ ] Movement preserves the duration and the offset of the held point; bottom resize preserves the start.
- [ ] Cancellation, an invalid target, and an operation with no change do not send persistent commands.
- [ ] Autoscroll, a grid with variable days, and internal controls work without global per-pixel updates.
- [ ] The click/touch alternative and mobile behavior are demonstrated or identified as an approval blocker.

## Out of scope

- Write Server Action, migration, and public demo route.
- Approval of the POC results, which is a separate gate for KZ-E11-T03.

## Result

Not started. Backlog recorded on 2026-11-21 during the documentation reconciliation. Status lives only in the roadmap index.
