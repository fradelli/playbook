---
id: KZ-E01-T05
epic: KZ-E01
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E01-T04]
---

# Migrate schemas

## Objective
Migrate the training documentation contracts and explicitly record their coverage and permissiveness.

## Inputs
- `schemas/` from the snapshot.
- Data migrated in KZ-E01-T02 and KZ-E01-T03.

## Deliverables
- `schemas/training-plan.schema.json`
- `schemas/exercise-library.schema.json`
- `schemas/README.md`

## Subtasks
- [x] Copy the approved schemas.
- [x] Verify the covered data.
- [x] Record formats still without a schema.
- [x] Do not expand contracts without evidence.

## Validation
- Schemas and data parse.
- Covered data validates against the corresponding contract.

## Acceptance criteria
- [x] Coverage and gaps are explicit.
- [x] The schema is not presented as clinical or product validation.

## Result
The two Draft 2020-12 schemas were copied literally and validated the library, plan v1, and plan v2 with `Test-Json`. The README removes the reference to the deleted script and documents permissiveness, formats, coverage, and files still without a contract. Uniqueness, cross-references, and the active pointer were kept as separate invariants, without expanding the schemas.
