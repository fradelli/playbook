---
id: KZ-E01-T02
epic: KZ-E01
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E01-T01]
---

# Migrate canonical training data

## Objective
Migrate the approved profile, approved schedule, active pointer, library, and only the current plan without changing IDs or facts.

## Inputs
- Snapshot approved in KZ-E01-T01.
- `e01-t02-*` rows of the manifest.

## Deliverables
- Corresponding canonical files and only the plan pointed to by `data/active.json`.
- Manifest rows for each artifact.

## Subtasks
- [x] Copy or transform according to the manifest.
- [x] Preserve `null`, approved `unknowns`, IDs, and versions.
- [x] Adjust only approved relative paths.
- [x] Record source and destination hash.
- [x] Do not migrate previous versions in this task.

## Validation
- JSON files parse.
- `active_plan_id` matches the pointed plan.
- All `exercise_id` values exist and are unique.

## Acceptance criteria
- [x] No rule or data was invented.
- [x] The canonical training reading is reproducible.

## Result
Five canonical artifacts were migrated exclusively from snapshot `d1acad309e2b81b714d1aa375e9371a310ad6ed0`. The three literal copies kept their SHA-256; profile and schedule received only the approved sanitization, with destination hashes recorded. The active plan and all `exercise_id` values were validated, without including versions or histories from KZ-E01-T03.
