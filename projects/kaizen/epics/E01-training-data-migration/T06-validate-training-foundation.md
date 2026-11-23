---
id: KZ-E01-T06
epic: KZ-E01
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E01-T05]
---

# Validate training foundation

## Objective
Run the final gate of the training migration and tag an immutable base for the next phases.

## Inputs
- All KZ-E01 deliverables.
- Complete manifest.

## Deliverables
- `docs/migration/TRAINING-VALIDATION-REPORT.md`
- Tag `training-foundation-v1` after approval.

## Subtasks
- [x] Validate JSON files, schemas, IDs, pointers, sanitized schedule, and links.
- [x] Compare hashes of literal copies.
- [x] Confirm the absence of code, dependencies, and invented data.
- [x] Review the manifest for completeness.

## Validation
- The private snapshot keeps four confirmed sessions; their values are not reproduced at the public destination.
- The public destination keeps four sessions with day, time, and intensity as `null`.
- The match day and time remain `null` if there is no new fact.

## Acceptance criteria
- [x] Report with no open failures.
- [x] KZ-E02-T01 can start.

## Result
The final gate directly verified the private snapshot, the 23 manifest artifacts, the 19 published destinations, the structural contracts, and the invariants across files. The active pointer was transformed to eliminate missing paths, the public schedule remained sanitized, and the earlier historical exposure was accepted without authorizing new publications. The report has no open failures; tag `training-foundation-v1` identifies the integrated commit of this delivery.
