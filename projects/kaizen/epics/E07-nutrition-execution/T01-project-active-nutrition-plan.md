---
id: KZ-E07-T01
epic: KZ-E07
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E05-T05]
---

# Project the diet and the day's execution

## Objective

Create server-side projections, separate for the public plan and for the operational diet of the date in the fixed workspace.

## Inputs

- `docs/plans/nutrition/E07.md`: epic plan.
- `docs/product/P0.md`: P0 product rules.
- `docs/architecture/DATA-MODEL.md`: data model.
- `docs/architecture/TARGET-ARCHITECTURE.md`: architecture rules.
- `docs/decisions/PUBLIC-SINGLE-WORKSPACE-MODE.md`: public mode decision.
- `data/nutrition/active.json`: active plan pointer and canonical data.
- `src/lib/security/workspace.ts`: fixed workspace resolution.
- `prisma/schema.prisma`: persisted records.

## Deliverables

- Public plan DTO and workspace DTO with day type, meals, executions, and review.

## Subtasks

- [ ] Resolve the active plan pointer.
- [ ] Resolve workspace, date, and day type without inferring a missing load.
- [ ] Preserve order, units, and source text.
- [ ] Represent alternatives without invented equivalences.
- [ ] Combine existing records without exposing them in the anonymous DTO.
- [ ] Cover a missing plan and invalid references.

## Validation

- Tests compare each projection with the canonical data in `data/nutrition/active.json`.
- Tests for a missing plan and an invalid reference pass.

## Acceptance criteria

- [ ] The anonymous plan DTO contains no workspace record (execution, comment, or review).
- [ ] Meal order, units, and source text in the DTOs equal the canonical data.
- [ ] A missing plan or an invalid reference returns a defined error instead of a partial DTO.

## Result

Not started.
