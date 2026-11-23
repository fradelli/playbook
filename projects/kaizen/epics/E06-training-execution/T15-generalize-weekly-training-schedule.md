---
id: KZ-E06-T15
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T11]
---

# Generalize the weekly activity schedule

## Objective
Allow the planned week to describe structured sessions, sports practice,
specific workouts, mobility, and rest without fixed footvolley rules or
weekend-game rules.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `data/schedule.json`
- `schemas/schedule.schema.json`
- `src/features/training/domain/training-weekly-schedule.ts`
- `src/features/training/data/ensure-scheduled-training-day.ts`
- `src/features/plan-definition-import/domain/plan-definition-source.types.ts`
- `prisma/models/training.prisma`

## Deliverables
- Generic weekly schedule model, with type, reference or name, day, time, and
  planned duration when applicable.
- Materialization only of the queried date, respecting the decisions of KZ-E06-T11.
- Support for more than one structured activity on the same day and for backup
  sessions defined in the plan, but with no mandatory link to a day of the week.
- Explicit and reversible migration of the current schedule format, preserving
  historical versions and stable IDs.
- Schema validation, import, and tests for days with multiple activities,
  rest, missing time, and invalid references.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Out of scope

- Importing the new personal workout, clearing the database, or creating a visual plan editor.
- Grouping combined exercises, whose structure is preserved in the KZ-E06-T16 import and whose guided flow belongs to KZ-E06-T18.

## Decisions before implementation

- Re-evaluate the format with the new plan provided by the user and approve the migration.

## Acceptance criteria
- [x] The schedule does not depend on a sport, game day, or duration hardcoded in the application.
- [x] A backup session can exist without being materialized automatically.
- [x] Historical plans and executed activities remain traceable.

## Result
Schedule 2.0 implemented with generic entries, times, and preparation references. Historical 1.0 reading preserved; Saturday and Sunday with no fixed activity. Types, lint, data validation, and unit tests passed. Local migration applied after a backup; the final integrated validation is part of the KZ-E06-T16 import.
