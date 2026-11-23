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

- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — reconciled agenda contracts; read only the section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — drag-and-drop plan and scenarios; read only the section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — schedule product rules.
- [src/features/schedule/application/schedule-command.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/application/schedule-command.ts) — existing schedule commands.
- [src/features/schedule/data/schedule-writer.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/data/schedule-writer.ts) — schedule writes.
- [src/features/schedule/ui/components/schedule-card/schedule-card.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/schedule-card/schedule-card.tsx) — schedule card that shows the link.
- [docs/architecture/TARGET-ARCHITECTURE.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) — apply the sections relevant to the change before editing code.

## Deliverables

- Link and unlink contracts with cycle validation and concurrency control.
- Internal activities represented in the card, with the parent movement policies applied.
- The visual proposal of body/side strip, validated without assuming approved dimensions.

## Subtasks

- [ ] Validate the visual proposal of body/side strip, without assuming approved dimensions.
- [ ] Create link and unlink contracts, cycle validation, and concurrency.
- [ ] Represent internal activities and apply the parent movement policies.

## Validation

- Links, IDs, and dependencies resolve, and the behavior agrees with the product rules.
- When implementation is authorized, the proportional gates and the plan scenarios run, and the Result records what ran and what remains pending. Tests not run do not count as evidence.

## Acceptance criteria

- [ ] Daily enters and leaves Trabalho (Work) with a single ID and preserved time when only the link changes.
- [ ] An invalid target preserves the previous state; independent overlap remains allowed.
- [ ] Cycles are rejected; the depth limit is explicit and does not exceed the implemented contract.

## Out of scope

- Deep trees and internal pauses, which require their own decision.
- +N grouping, which is not equivalent to a link.

## Result

Not started. Backlog recorded on 2026-11-21 during the documentation reconciliation. Status lives only in the roadmap index.
