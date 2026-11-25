---
id: KZ-E12-T18
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Add indexes for foreign keys without one

## Objective

Give every foreign key in the Prisma schema an index whose leading columns match it.

## Context

Finding from the repository sweep of 2026-11-24 on `developer` (`67443f0`).

PostgreSQL does not index foreign keys automatically. Eight relations have no index or unique constraint starting with their columns:

- `TodoPlacementVersion(workspaceId, listId)`, `AgendaActivity(workspaceId, tagId)`, `TodoReservation(workspaceId, todoId, placementVersionId)`
- `TrainingExecution(workspaceId, assignmentId, trainingPlanVersionId)`, `PlannedWorkout(workspaceId, planId)`
- `WorkoutPrescriptionVersion(workspaceId, workoutId)`, `WorkoutPrescriptionExercise(catalogExerciseId)`, `EquipmentGroupItem(equipmentId)`

## Inputs

- `prisma/models/*.prisma` — the relations listed above.
- `docs/architecture/TARGET-ARCHITECTURE.md` — sections "Organização do Prisma e configuração de banco" and "Migrations".

## Deliverables

- `@@index` entries for each relation that needs one, or a recorded reason to skip it.
- A migration in `prisma/migrations/` creating the indexes.

## Subtasks

- [ ] Confirm each relation against the existing indexes, including column order.
- [ ] Add the indexes and generate the migration.
- [ ] Apply it to the local and test databases.

## Validation

- `pnpm db:validate`, `pnpm db:format:check`, and `pnpm test:integration` pass.
- A rerun of the foreign key index check finds no relation without a leading index.

## Acceptance criteria

- [ ] Each of the eight relations has a leading index or a recorded reason in the task Result.
- [ ] The new migration applies cleanly with `pnpm db:deploy` on an empty database.

## Result

Not started.
