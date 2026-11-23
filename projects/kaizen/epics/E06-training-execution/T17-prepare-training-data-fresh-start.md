---
id: KZ-E06-T17
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T11]
---

# Prepare a controlled restart of the training data

## Objective
Plan and carry out, only after specific authorization, a clean operational
start after preparing the new training program, without losing data outside the approved scope.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `prisma/models/training.prisma`
- `prisma/models/nutrition.prisma`
- `roadmap/epics/E05-database-and-import/T05-validate-backup-and-restore.md`
- `roadmap/epics/E06-training-execution/T11-review-daily-plan-lifecycle.md`

## Deliverables
- Database inventory and an explicit definition of the target environment, tables, and records.
- Documented choice between restarting only operational training data or
  also definitions/imports and nutrition; nothing will be assumed.
- Verifiable backup, rollback plan, and user confirmation before deletion.
- Transactional execution or recoverable procedure and verification of the empty state.
  The import/activation and the reading of the new week belong to KZ-E06-T16.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Out of scope

- Deleting any data before defining the scope, obtaining a backup, and getting approval.
- Deleting entire environments or volumes for convenience.

## Decisions before implementation

- Confirm with the user the exact database/environment and the reach of the restart.
- Confirm the policy for old history and nutrition data.

## Acceptance criteria
- [x] Deletion targets, backup, and recovery were proven and approved.
- [x] Only explicitly authorized data was removed.
- [x] The approved environment is ready to receive the new program, with no
      operational leftovers outside the decided scope.

## Result
The user authorized cleaning old operational records and training definitions exclusively in the local PostgreSQL, preserving nutrition, workspace, migrations, and history in Git. Full backup updated on 26/09, copied outside the repository and restored successfully into a temporary database. SHA-256: `50282d22712ce960ca97219565102c588c16ac48a45f9084d8f760055bb660db`. Temporary database removed after verification.

Cleanup completed in a transaction, with the target tables locked and foreign keys active. Only the deletion-protection triggers on the target tables were suspended, and they were re-enabled before the commit. Removed operational records, activations, and training definitions/imports; no nutrition table was deleted. Check before the import: zero training activities and versions, one nutrition version preserved. KZ-E06-T16 imported only the active training.

Rollback: stop the local writers, restore the validated full backup into a separate local database, check the data, and only then switch the database in use. Restoring after new records exist would replace the state that came after the backup; do not roll back automatically and do not delete the backup.
