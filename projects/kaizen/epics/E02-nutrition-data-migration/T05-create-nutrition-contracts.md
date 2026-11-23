---
id: KZ-E02-T05
epic: KZ-E02
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E02-T04]
---

# Create pointer, schema, and guide

## Objective
Make the current nutrition plan locatable, validatable, and understandable without turning it into code.

## Inputs
- Structured plan from KZ-E02-T04.

## Deliverables
- `data/nutrition/active.json`
- `schemas/nutrition-plan.schema.json`
- `docs/guides/NUTRITION.md`

## Subtasks
- [x] Create an unambiguous pointer to the current version.
- [x] Create a minimal, permissive contract.
- [x] Create a derived guide with provenance.
- [x] Document limits and updates.

## Validation
- The pointer resolves and the ID matches.
- The plan validates against the schema.
- The guide does not diverge from the data.

## Acceptance criteria
- [x] A read-only consumer can locate and interpret the plan.

## Result
Created the active pointer, the Draft 2020-12 JSON Schema, and the derived human guide. The pointer resolves to `nutrition_2026_09_personal_v1`, the plan validates structurally, and the guide declares the JSON as the only canonical source. KZ-E02-T06 was released for the final gate.
