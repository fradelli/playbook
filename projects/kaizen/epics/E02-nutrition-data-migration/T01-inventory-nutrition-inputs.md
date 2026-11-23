---
id: KZ-E02-T01
epic: KZ-E02
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E01-T06]
---

# Inventory nutrition and unknowns

## Objective
Confirm which nutrition sources exist and which data is still missing before any structured plan.

## Inputs
- Files provided by the user.
- Migrated profile, schedule, and training load.

## Deliverables
- `docs/migration/NUTRITION-INPUT-INVENTORY.md`

## Subtasks
- [x] Inventory the prescribed diet and the nutrition actually practiced.
- [x] Separate facts, estimates, hypotheses, and professional decisions.
- [x] List the minimum data still missing.
- [x] Identify sources that cannot be versioned.

## Validation
- No nutritional value is inferred as fact.
- Every absence appears in `unknowns` or in open items.

## Acceptance criteria
- [x] It is clear what can be preserved and what blocks the review.

## Result
A correction widened the discovery to all remote refs of the legacy and located eight nutrition artifacts in the private commit `138531e4fbca6d744de73274fbb96da39c02bad3`. The inventory records categories, sizes, hashes, candidate treatment, and default exposure without copying content or revealing personal paths. The original diet and the practiced nutrition are available; `KZ-E02-T02` was released to freeze and preserve the private source.
