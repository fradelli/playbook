---
id: KZ-E09-T01
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E08-T05]
---

# Design sleep and general activities

## Objective

Define journeys, data, privacy limits, and minimal architecture for sleep and general activity tracking before creating a database, screens, or integrations.

## Inputs

- `docs/product/P0.md`: product rules.
- `docs/architecture/TARGET-ARCHITECTURE.md`: architecture rules.
- `fradelli/playbook: projects/kaizen/epics/E06-training-execution/README.md`: workout domain.
- `fradelli/playbook: projects/kaizen/epics/E07-nutrition-execution/README.md`: nutrition domain.
- `fradelli/playbook: projects/kaizen/epics/E09-future-evolution/README.md`: epic scope.

## Deliverables

- Journeys and domain vocabulary for sleep and general activities.
- Required, optional, and deliberately uncollected data.
- Decision on manual entry, import, and external integrations.
- Conceptual model, ownership, retention, privacy, and risks.
- Access decision that blocks implementation if the data is classified as sensitive before adequate authentication exists.
- Revised breakdown of tasks KZ-E09-T02, KZ-E09-T03, and KZ-E09-T04.

## Subtasks

- [ ] Separate facts, decisions, inferences, and missing data for each domain.
- [ ] Define which activities are general and which remain in workouts.
- [ ] Define sleep metrics without diagnosis or medical claims.
- [ ] Evaluate timezone, civil dates, overlap, and historical editing.
- [ ] Classify the sensitivity of the data and decide the authentication gate.
- [ ] Record unknowns about integrations and devices without anticipating dependencies.

## Validation

- Review the design against the fixed workspace, the relational model, and the Server/Client boundaries in `docs/architecture/TARGET-ARCHITECTURE.md`.
- Check that no future entity or integration is written as an approved requirement.

## Acceptance criteria

- [ ] The design assigns each activity to sleep, general activities, or workouts, with no activity in two domains.
- [ ] The design lists required, optional, and uncollected data, and labels unknowns and deferred decisions.
- [ ] KZ-E09-T02 and KZ-E09-T03 depend on an access decision that matches the data classification.
- [ ] KZ-E09-T02, KZ-E09-T03, and KZ-E09-T04 are revised, and every requirement in them traces to the design.

## Out of scope

- Creating a schema, migration, screen, API, or integration.
- Diagnosing sleep quality, injury, recovery, or health.

## Result

Not started.
