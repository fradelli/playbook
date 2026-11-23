---
id: KZ-E06-T16
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T15]
---

# Validate and import the new training program

## Objective
Turn the new workout provided by the user into valid versioned definitions and
a valid weekly schedule. Alternative sessions depend on specific approval;
the variants received were excluded from this version by user decision.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `data/plans/2026-08-performance-v2.json`
- `data/plans/2026-09-training-v1.json`
- `data/training-execution-metadata.json`
- `docs/guides/TRAINING-GUIDE-2026-09.md`
- `data/schedule.json`
- `data/exercises.json`
- `schemas/training-plan.schema.json`
- `schemas/schedule.schema.json`
- `src/features/plan-definition-import/data/activate-selected-plan-definitions.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.tsx`

## Deliverables
- Inventory of the new plan: exercises, sessions, warm-ups, times, durations,
  rest days, and backup options; gaps remain explicit.
- New canonical version without overwriting or improperly reusing the old one.
- Unapproved backup variants stay out of the active plan sheet; approved sessions can be added manually.
- Validation of references and a one-week preview before activation.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Out of scope

- Inventing missing exercises, prescriptions, or times.
- Automatic navigation between combined exercises, reserved for KZ-E06-T18. In this delivery, preserve blocks and members in the database and display `Bloco nA/nB`, with manual navigation.
- Deleting existing data; the earlier controlled restart is KZ-E06-T17.

## Decisions before implementation

- Receive the new workout and confirm the gaps, especially what will be a backup session.
- Confirm activation after the delivery of the new workout and the authorized restart.

## Acceptance criteria
- [x] The new plan and the week pass the data and reference validations.
- [x] Backup variants stay out of the active plan sheet per the user's decision.
- [x] Versioned historical sources were not overwritten; the authorized local restart is recorded in KZ-E06-T17.

## Result
Approved plan received on 25/09/2026: T1 Tuesday, T2 Thursday, and T3 Friday at 5 p.m.; footvolley Monday to Thursday, 12 p.m.–1:30 p.m. Games are manual. Backup variants stay out of this version. The 40 minutes are an unvalidated target and include warm-up.

Versioned definitions, four warm-ups, and data validation implemented. Source committed locally and imported after the KZ-E06-T17 restart: one training version, seven sessions, 42 prescriptions, and 34 distinct exercises. Nutrition preserved; the second import returned a no-op. The Tuesday query projected footvolley with warm-up and T1 with Bloco 3A/3B and 4A/4B. Re-reading did not duplicate records; a query beyond the future limit did not create activities.

Validation: 258 unit tests, 40 PostgreSQL integrations (including repeating the eight import tests after adapting the schedule of the historical scenario), 33 script regressions, data, lint, types, structure, build, and diff. No push or PR. Automatic guidance of the pairs remains out of scope.
