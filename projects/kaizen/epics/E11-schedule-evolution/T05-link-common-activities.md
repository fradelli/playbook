---
id: KZ-E11-T05
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E11-T03]
---

# Link and unlink common activities

## Objective
Support the intents of placing an activity inside another or keeping it independent at the same time, with an explicit preview and preservation of identity.

## Inputs
- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — consult the contract or section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — consult the contract or section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — consult the contract or section matching the scope.
- [src/features/schedule/application/schedule-command.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/application/schedule-command.ts) — consult the contract or section matching the scope.
- [src/features/schedule/data/schedule-writer.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/data/schedule-writer.ts) — consult the contract or section matching the scope.
- [src/features/schedule/ui/components/schedule-card/schedule-card.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/schedule-card/schedule-card.tsx) — consult the contract or section matching the scope.

## Deliverables
Verifiable result described in the criteria below, with evidence linked to this task. Before editing code, apply the relevant sections of the [architecture](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) and the local contracts. Do not load entire historical plans.

## Subtasks
- [ ] Validate the visual proposal of body/side strip, without assuming approved dimensions.
- [ ] Create link and unlink contracts, cycle validation, and concurrency.
- [ ] Represent internal activities and apply the parent's movement policies.

## Validation
Check links, IDs, dependencies, and consistency with product rules. When implementation is authorized, run the proportional gates and the plan's scenarios; record what was run and what remains pending. Tests not yet run do not count as evidence.

## Acceptance criteria
- [ ] Daily enters and leaves Trabalho (Work) with a single ID and preserved time when only the link changes.
- [ ] An invalid target preserves the previous state; independent overlap remains allowed.
- [ ] Cycles are rejected; the depth limit is explicit and does not exceed the implemented contract.

## Out of scope

Deep trees and internal pauses require their own decision. +N grouping is not equivalent to a link.

## Result
Backlog recorded on 21/11/2026 during the documentation reconciliation. No execution of this task was started by this record. Canonical status lives only in the roadmap index.
