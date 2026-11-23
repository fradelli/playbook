---
id: KZ-E08-T04
epic: KZ-E08
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E08-T03]
---

# Validate operations and rollback

## Objective

Prove minimal monitoring, backup, restore, and return to the previous version.

## Inputs

- `docs/plans/release/E08.md`: epic plan.
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`: privacy and operations decision.
- `docs/operations/BACKUP-AND-RESTORE.md`: backup and restore rules.
- Production environment prepared in KZ-E08-T03.

## Deliverables

- Short runbook and evidence of the operational tests.

## Subtasks

- [ ] Define minimal health and failure signals.
- [ ] Test external backup and restore in an isolated Neon branch.
- [ ] Simulate an application rollback.
- [ ] Record owners and the recovery sequence.

## Validation

- Someone who did not write the runbook follows it to restore a backup in an isolated Neon branch and to roll back the application, using only the runbook.

## Acceptance criteria

- [ ] The runbook lists the health and failure signals, the owners, and the recovery sequence.
- [ ] Evidence shows a backup restored in an isolated Neon branch.
- [ ] Evidence shows an application rollback to the previous version.

## Result

Not started.
