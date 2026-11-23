---
id: KZ-E00-T08
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T07]
---

# Consolidate documentation and Codex context

## Authorization

Documentation plan approved by the owner on 12/11/2026. For Codex use only. Preserve the parallel visual migration; no commit, push, publication, database, or dependencies.

## Objective
Not recorded in the original version of this task.

## Inputs
- `docs/documentation-review.md` — inventory, criteria, and approved plan.
- `AGENTS.md` — minimal route.
- `docs/architecture/TARGET-ARCHITECTURE.md` — routes, components, and Prisma.
- `docs/product/telas/guia-de-estilo.md` — current visual direction.
- `scripts/validate-governance.mjs` — existing contract; read-only.

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Acceptance criteria
- [x] Normative sources, proposals, and history are distinguishable.
- [x] Reading guided by task and section.
- [x] Consolidations preserve exclusive content and immutable origins.
- [x] Links, IDs, dependencies, and pointers validated.
- [x] Parallel work preserved; no publication.

## Result
Consolidation completed: 12 redundant documents removed with the full source kept in an immutable commit and SHA-256; section-based route, guides, routes, governance, and validity corrected. Individual inventory and limits in `docs/documentation-review.md`.

Validation: data integrity approved; 26 existing data/governance tests approved; roadmap and diff without errors. No application code, data, dependency, or configuration changed relative to the snapshot before the edit. No commit, push, or publication.

The bodies of the three visual documents under parallel editing were preserved; they received validity notes. Their deep consolidation comes after the visual migration. Skills and 22 junctions remain installed and ignored by Git. The remote state of PR #76, skill discovery by the host, and physical validation remain unproven.
