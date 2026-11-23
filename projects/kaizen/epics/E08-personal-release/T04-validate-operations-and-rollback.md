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
- `docs/plans/release/E08.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`
- `docs/operations/BACKUP-AND-RESTORE.md`
- Production environment prepared in KZ-E08-T03.

## Deliverables
- Short runbook and evidence of the operational tests.

## Subtasks
- [ ] Define minimal health and failure signals.
- [ ] Test external backup and restore in an isolated Neon branch.
- [ ] Simulate an application rollback.
- [ ] Record owners and the recovery sequence.

## Validation
- Run the runbook without depending on undocumented knowledge.

## Acceptance criteria
- [ ] A failure can be detected and reverted with clear steps.

## Result
Not yet completed.
