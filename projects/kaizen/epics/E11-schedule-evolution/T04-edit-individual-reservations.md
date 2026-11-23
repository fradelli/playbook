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

- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — reconciled agenda contracts; read only the section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — drag-and-drop plan and scenarios; read only the section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — schedule product rules.
- [src/features/schedule/application/schedule-command.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/application/schedule-command.ts) — existing schedule commands.
- [src/features/schedule/data/schedule-writer.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/data/schedule-writer.ts) — schedule writes.
- [src/features/schedule/ui/components/reservation-editor/reservation-editor.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/reservation-editor/reservation-editor.tsx) — reservation editor.
- [docs/architecture/TARGET-ARCHITECTURE.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) — apply the sections relevant to the change before editing code.

## Deliverables

- Commands that edit one reservation, with revision checks on the reservation and the affected parents.
- The reservation editor and the gesture using the same operation.

## Subtasks

- [ ] Define commands and validate the revision of the reservation and of the affected parents.
- [ ] Reuse occupancy, the time grid, history, and receipts.
- [ ] Integrate the editor and the gesture using the same operation.

## Validation

- Links, IDs, and dependencies resolve, and the behavior agrees with the product rules.
- When implementation is authorized, the proportional gates and the plan scenarios run, and the Result records what ran and what remains pending. Tests not run do not count as evidence.

## Acceptance criteria

- [ ] The reservation keeps its ID, todoId, and shared checkbox.
- [ ] Editing one reservation does not move the parent or its siblings.
- [ ] Internal occupancy, cancellation, retry, and concurrency are covered by tests.

## Out of scope

- Recurrence, execution inference, and implicit change of all reservations.

## Result

Not started. Backlog recorded on 2026-11-21 during the documentation reconciliation. Status lives only in the roadmap index.
