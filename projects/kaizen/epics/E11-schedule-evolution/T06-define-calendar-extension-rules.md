---
id: KZ-E11-T06
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Define the schedule interaction extensions

## Objective

Record the decisions that block the specification of top resize, multi-day navigation on mobile, the untimed strip, and moving completed workouts.

## Context

Documentation deliverable; the extensions are not implemented here.

## Inputs

- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — reconciled agenda contracts; read only the section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — drag-and-drop plan and scenarios; read only the section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — schedule product rules.
- [src/features/training/ui/training-calendar.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/training/ui/training-calendar.ts) — training calendar.
- [docs/architecture/TARGET-ARCHITECTURE.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) — apply the sections relevant to the change before editing code.

## Deliverables

- Recorded decisions, or explicit blockers, for each question in the subtasks, in the agenda planning documents.

## Subtasks

- [ ] Separate planning from execution in completed cards and define the moved representation.
- [ ] Define the effects of top resize on internal items and the historical time policy.
- [ ] Define accessible input without dragging, the untimed strip on touch, and navigation between days on mobile.

## Validation

- Links, IDs, and dependencies resolve, and the decisions agree with the product rules.
- Each decision is labeled as decided or as a blocker.

## Acceptance criteria

- [ ] Each question has a recorded decision or an explicit blocker, with no hypothesis presented as approval.
- [ ] ScheduledDate, a task without a date, and a possible all-day item remain distinct concepts.
- [ ] Each decision states that execution times are not rounded or rewritten for visual convenience.

## Out of scope

- Implementing top resize, recurrence, or changes to completed records.
- This task can be refined independently of the POC.

## Result

Not started. Backlog recorded on 2026-11-21 during the documentation reconciliation. Status lives only in the roadmap index.
