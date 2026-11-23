---
id: KZ-E11-T03
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E11-T02]
---

# Integrate the approved gestures with persistence

## Objective

Connect the approved slice of the POC to the existing commands for common activities, scheduling, and group change, preserving revision, receipts, and cache.

## Inputs

- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — reconciled agenda contracts; read only the section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — drag-and-drop plan and scenarios; read only the section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — schedule product rules.
- [src/features/schedule/application/schedule-command.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/application/schedule-command.ts) — existing schedule commands.
- [src/features/schedule/ui/components/schedule-workspace/hooks/use-schedule-mutations.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/schedule-workspace/hooks/use-schedule-mutations.ts) — client mutation hook.
- [src/app/workout/schedule-actions.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/app/workout/schedule-actions.ts) — schedule Server Actions.
- [docs/architecture/TARGET-ARCHITECTURE.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) — apply the sections relevant to the change before editing code.

## Deliverables

- Approved gestures connected to the existing schedule commands, with parent confirmations, pending states, and failure reconciliation.
- A record of the POC approval and of how its blocking limitations were resolved, linked from the Result.

## Subtasks

- [ ] Record the POC approval and resolve its blocking limitations.
- [ ] Use create/update/move_activity, reserve/reserve_new, and change_list according to the intent.
- [ ] Integrate parent confirmations, pending states, and failure reconciliation.

## Validation

- Links, IDs, and dependencies resolve, and the behavior agrees with the product rules.
- When implementation is authorized, the proportional gates and the plan scenarios run, and the Result records what ran and what remains pending. Tests not run do not count as evidence.

## Acceptance criteria

- [ ] A confirmed valid gesture produces an idempotent operation; pointer movement does not write.
- [ ] Resubmission, concurrency, and transactional failure do not duplicate tasks/reservations or overwrite more recent revisions.
- [ ] Keep/shift and group change respect the distinction between an internal activity and a to-do reservation.
- [ ] Reload preserves the result; after a gesture, the cache updates only the affected dates.

## Out of scope

- Individual reservations, new links between activities, recurrence, and completed workouts.

## Result

Not started. Backlog recorded on 2026-11-21 during the documentation reconciliation. Status lives only in the roadmap index.
