---
id: KZ-E11-T06
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Define the schedule interaction extensions

## Objective
Close the decisions that prevent specifying top resize, multi-day navigation on mobile, the untimed strip, and moving completed workouts. Documentation deliverable, without implementing these extensions.

## Inputs
- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — consult the contract or section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — consult the contract or section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — consult the contract or section matching the scope.
- [src/features/training/ui/training-calendar.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/training/ui/training-calendar.ts) — consult the contract or section matching the scope.

## Deliverables
Verifiable result described in the criteria below, with evidence linked to this task. Before editing code, apply the relevant sections of the [architecture](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) and the local contracts. Do not load entire historical plans.

## Subtasks
- [ ] Separate planning from execution in completed cards and define the moved representation.
- [ ] Define the effects of top resize on internal items and the historical time policy.
- [ ] Define accessible input without dragging, the untimed strip on touch, and navigation between days on mobile.

## Validation
Check links, IDs, dependencies, and consistency with product rules. When implementation is authorized, run the proportional gates and the plan's scenarios; record what was run and what remains pending. Tests not yet run do not count as evidence.

## Acceptance criteria
- [ ] Each question has a recorded decision or an explicit blocker, with no hypothesis presented as approval.
- [ ] ScheduledDate, a task without a date, and a possible all-day item remain distinct concepts.
- [ ] Later implementations are bounded by decisions; nothing rounds or rewrites execution for visual convenience.

## Out of scope

Does not authorize implementing top resize, recurrence, or changing completed records. It can be refined independently of the POC.

## Result
Backlog recorded on 21/11/2026 during the documentation reconciliation. No execution of this task was started by this record. Canonical status lives only in the roadmap index.
