---
id: KZ-E02-T04
epic: KZ-E02
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E02-T03]
external: [Decisions approved]
---

# Structure nutrition plan

## Objective
Represent the approved version of the plan by day context, meals, items, alternatives, and limits.

## Inputs
- Completed review.
- Decisions approved by the user or the responsible professional.

## Deliverables
- Versioned plan in `data/nutrition/plans/`.

## Subtasks
- [x] Define version, status, and validity.
- [x] Structure day types and meals.
- [x] Record quantities and equivalences only when confirmed.
- [x] Preserve warnings and unknowns.

## Validation
- No required field depends on invented data.
- Alternatives do not lose their relationship to the meal.

## Acceptance criteria
- [x] The plan is readable without consulting the original conversation.
- [x] Professional status is unambiguous.

## Result
Completed on 2026-09-02. Created `data/nutrition/plans/2026-09-personal-v1.json` with six day types, five meals, twenty options, conditional times, carbohydrate modules, preferences, `unknowns`, provenance, and explicit public approval. Energy ranges were preserved as legacy values approved for personal use, without professional validation; identity, medical context, supplements, cognitive protocol, private paths, and inferred targets were excluded. JSON, references, manifest, and exposure were validated, releasing KZ-E02-T05.
