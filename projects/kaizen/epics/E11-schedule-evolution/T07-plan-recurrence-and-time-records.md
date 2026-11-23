---
id: KZ-E11-T07
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Detail recurrence and time records

## Objective

Convert the planning of recurrence and actual time into implementable contracts and tasks, distinguishing proposals from approved decisions.

## Context

Workout projection does not implement general recurrence; do not assume it does.

## Inputs

- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — reconciled agenda contracts; read only the section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — drag-and-drop plan and scenarios; read only the section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — schedule product rules.
- [docs/architecture/MODELO-CONCEITUAL-DA-AGENDA.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/MODELO-CONCEITUAL-DA-AGENDA.md) — conceptual model.
- [docs/architecture/AGENDA-TABELAS-E-CONSULTAS-PROPOSTAS.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/AGENDA-TABELAS-E-CONSULTAS-PROPOSTAS.md) — proposed tables and queries.
- [docs/research/PROMPT-PESQUISA-AGENDA.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/research/PROMPT-PESQUISA-AGENDA.md) — research prompt.
- [docs/architecture/TARGET-ARCHITECTURE.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) — apply the sections relevant to the change before editing code.

## Deliverables

- A plan of recurrence and time-record contracts that labels each item as proposal or approved decision and lists open questions.
- Proposed implementation tasks, each with identified scope and decisions.

## Subtasks

- [ ] Reconcile the conceptual model, proposed tables, and the existing schema.
- [ ] Define the scope of only this one / this and following, exceptions, identity, and history.
- [ ] Separate reservation, completion, and actual time; record questions that are still open.

## Validation

- Links, IDs, and dependencies resolve, and the plan agrees with the product rules.
- Each item is labeled as proposal or approved decision.

## Acceptance criteria

- [ ] The plan identifies code gaps without recreating existing features.
- [ ] Window projection and exceptions do not require materializing the whole future.
- [ ] New implementation tasks are proposed only with identified scope and decisions.

## Out of scope

- Migration, automatic scheduling, and unspecified diet integration.

## Result

Not started. Backlog recorded on 2026-11-21 during the documentation reconciliation. Status lives only in the roadmap index.
