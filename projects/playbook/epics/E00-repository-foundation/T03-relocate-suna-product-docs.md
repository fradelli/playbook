---
id: PB-E00-T03
epic: PB-E00
project: playbook
repository: fradelli/playbook
depends_on: [PB-E00-T01]
external: [Owner decides the repository for Suna business rules]
---

# Relocate Suna product documentation

## Objective

Move the Suna product context, scope, business rules, and glossary out of the shared playbook, following the rule that product business rules stay with the product.

## Context

Suna has a separate frontend (`fradelli/nextjs-suna-app`) and API (`fradelli/nestjs-suna-api`). The owner has not yet decided which repository holds Suna business rules, or whether a `projects/suna/docs/` exception is preferred.

## Inputs

- `docs/product/` — Suna product context, MVP scope, specifications, and backlog.
- `docs/business-rules/sandicts-business-rules.md` — Suna business rules.
- `docs/glossary/domain-glossary.md` — Suna domain glossary.
- `docs/decisions/` — decisions to sort into Suna-specific and shared.
- `docs/engineering/` — guides to sort into Suna-specific and shared.

## Deliverables

- Suna documents moved to the chosen location, with a SU- follow-up task in the target repository when it is not this one.
- Shared documents left for PB-E02.

## Subtasks

- [ ] Record the owner's decision on the target location.
- [ ] Classify each document under `docs/` as Suna-specific or shared.
- [ ] Move the Suna-specific documents and update links.

## Validation

- No Suna-specific product document remains outside the chosen location.
- `git diff --check` passes.

## Acceptance criteria

- [ ] Every document under `docs/` has a recorded destination.

## Result

Not started. Blocked on the owner's decision.
