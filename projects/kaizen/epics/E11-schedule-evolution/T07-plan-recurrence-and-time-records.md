---
id: KZ-E11-T07
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Detail recurrence and time records

## Objective
Convert the planning of recurrence and actual time into implementable contracts and tasks, distinguishing proposals from approved decisions. Do not assume that workout projection implements general recurrence.

## Inputs
- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — consult the contract or section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — consult the contract or section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — consult the contract or section matching the scope.
- [docs/architecture/MODELO-CONCEITUAL-DA-AGENDA.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/MODELO-CONCEITUAL-DA-AGENDA.md) — consult the contract or section matching the scope.
- [docs/architecture/AGENDA-TABELAS-E-CONSULTAS-PROPOSTAS.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/AGENDA-TABELAS-E-CONSULTAS-PROPOSTAS.md) — consult the contract or section matching the scope.
- [docs/research/PROMPT-PESQUISA-AGENDA.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/research/PROMPT-PESQUISA-AGENDA.md) — consult the contract or section matching the scope.

## Deliverables
Verifiable result described in the criteria below, with evidence linked to this task. Before editing code, apply the relevant sections of the [architecture](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) and the local contracts. Do not load entire historical plans.

## Subtasks
- [ ] Reconcile the conceptual model, proposed tables, and the existing schema.
- [ ] Define the scope of only this one / this and following, exceptions, identity, and history.
- [ ] Separate reservation, completion, and actual time; record questions that are still open.

## Validation
Check links, IDs, dependencies, and consistency with product rules. When implementation is authorized, run the proportional gates and the plan's scenarios; record what was run and what remains pending. Tests not yet run do not count as evidence.

## Acceptance criteria
- [ ] The plan identifies code gaps without recreating existing features.
- [ ] Window projection and exceptions do not require materializing the whole future.
- [ ] New implementation tasks are proposed only with identified scope and decisions.

## Out of scope

No migration, automatic scheduling, or unspecified diet integration.

## Result
Backlog recorded on 21/11/2026 during the documentation reconciliation. No execution of this task was started by this record. Canonical status lives only in the roadmap index.
