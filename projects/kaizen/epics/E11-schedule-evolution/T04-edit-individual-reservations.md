---
id: KZ-E11-T04
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E11-T03]
---

# Move and resize an individual reservation

## Objective
Create the missing contracts to edit only the selected reservation, without moving the parent or changing other reservations of the task.

## Inputs
- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — consult the contract or section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — consult the contract or section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — consult the contract or section matching the scope.
- [src/features/schedule/application/schedule-command.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/application/schedule-command.ts) — consult the contract or section matching the scope.
- [src/features/schedule/data/schedule-writer.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/data/schedule-writer.ts) — consult the contract or section matching the scope.
- [src/features/schedule/ui/components/reservation-editor/reservation-editor.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/reservation-editor/reservation-editor.tsx) — consult the contract or section matching the scope.

## Deliverables
Verifiable result described in the criteria below, with evidence linked to this task. Before editing code, apply the relevant sections of the [architecture](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) and the local contracts. Do not load entire historical plans.

## Subtasks
- [ ] Define commands and validate the revision of the reservation and of the affected parents.
- [ ] Reuse occupancy, the time grid, history, and receipts.
- [ ] Integrate the editor and the gesture using the same operation.

## Validation
Check links, IDs, dependencies, and consistency with product rules. When implementation is authorized, run the proportional gates and the plan's scenarios; record what was run and what remains pending. Tests not yet run do not count as evidence.

## Acceptance criteria
- [ ] The reservation keeps its ID, todoId, and shared checkbox.
- [ ] Editing one reservation does not move the parent or its siblings.
- [ ] Internal occupancy, cancellation, retry, and concurrency are covered by tests.

## Out of scope

No recurrence, execution inference, or implicit change of all reservations.

## Result
Backlog recorded on 21/11/2026 during the documentation reconciliation. No execution of this task was started by this record. Canonical status lives only in the roadmap index.
