---
id: PB-E02-T01
epic: PB-E02
project: playbook
repository: fradelli/playbook
depends_on: [PB-E00-T01]
---

# Inventory the Kaizen rules

## Objective

Classify each Kaizen rule document, and the shared engineering documents already in this repository, as general, stack profile, or project-only, before moving anything.

## Inputs

- `fradelli/nextjs-kaizen-app: docs/architecture/TARGET-ARCHITECTURE.md` — architecture rules by section.
- `fradelli/nextjs-kaizen-app: docs/product/telas/guia-de-estilo.md` — style guide.
- `fradelli/nextjs-kaizen-app: docs/DOCUMENTATION-STANDARD.md` — documentation standard.
- `fradelli/nextjs-kaizen-app: docs/delivery/PULL-REQUEST-STANDARD.md` — pull request standard.
- `fradelli/nextjs-kaizen-app: AGENTS.md` — global rules section.
- `docs/engineering/code-semantics.md` and `docs/decisions/api-contract-governance.md` — shared rules already here.

## Deliverables

- `standards/INVENTORY.md`: one row per document section, with its class (general, frontend, backend, profile, project-only), its target path, and notes on conflicts between Kaizen and Suna.

## Subtasks

- [ ] List the rule sections of each input.
- [ ] Classify each section and propose a target path.
- [ ] Record conflicts, such as Server Actions versus a separate API.
- [ ] Confirm the planned `standards/` layout or propose a change.

## Validation

- Every section of every input has a row.
- `git diff --check` passes.

## Acceptance criteria

- [ ] The owner can approve the target of each rule from the inventory alone.

## Result

Not started.
