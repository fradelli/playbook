---
id: KZ-E03-T01
epic: KZ-E03
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E01-T06, KZ-E02-T06]
---

# Define P0 journeys

## Objective
Close the smallest usable operational product for training and nutrition.

## Inputs
- Validated training and nutrition foundations.
- Current roadmap and decisions.

## Deliverables
- `docs/product/P0.md`

## Subtasks
- [x] Define journeys, screens, and navigation.
- [x] Define the ready, empty, incomplete, and error states.
- [x] Define observable acceptance criteria.
- [x] Include only the records needed to follow the diet and execute training.
- [x] Exclude automations and areas unrelated to diet and training.

## Validation
- Each journey references existing data.
- No screen requires still-unknown data without an alternative state.

## Acceptance criteria
- [x] P0 can be tested by behavior, not by visual opinion.

## Result
Two testable journeys defined in `docs/product/P0.md`: Diet records the option followed, a different meal, a skipped item, and a comment; Training resolves the session, mobility, or rest, separates preparation, records sets, load only when applicable, repetitions, and comments. States, failures, history, accessibility, and P0 limits were made explicit.
