---
id: KZ-E03-T02
epic: KZ-E03
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E03-T01]
---

# Define source-of-truth transition

## Objective
Avoid two editable sources when introducing a database.

## Inputs
- Versioned data and P0 journeys.

## Deliverables
- `docs/decisions/DATA-SOURCE-TRANSITION.md`

## Subtasks
- [x] Define files as the origin of the initial import.
- [x] Define when the database becomes the operational source.
- [x] Define export, backup, and provenance.
- [x] Define the reimport and conflict policy.

## Validation
- For each phase there is a single editable source.

## Acceptance criteria
- [x] Reading, future writing, and rollback have unambiguous ownership.

## Result
Decided that Git/JSON remains the only editable source of definitions in the MVP, while the database is the exclusive source of assignments and executions. One-way, immutable, idempotent import, conflicts, provenance, export, backup, future cutover, and rollback were specified in `docs/decisions/DATA-SOURCE-TRANSITION.md`.
