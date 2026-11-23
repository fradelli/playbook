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
- `docs/plans/nutrition/E07.md`
- `docs/product/P0.md`
- `docs/architecture/DATA-MODEL.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/decisions/PUBLIC-SINGLE-WORKSPACE-MODE.md`
- `data/nutrition/active.json`
- `src/lib/security/workspace.ts`
- `prisma/schema.prisma`

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
- Compare the projection with the canonical data.

## Acceptance criteria
- [ ] DTOs contain only the data needed by the corresponding anonymous or personal mode.

## Result
Not yet completed.
