---
id: KZ-E01-T01
epic: KZ-E01
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T05]
---

# Freeze source snapshot

## Objective
Choose a clean, immutable commit of the legacy as the single base of the training migration.

## Inputs
- Logical source `personal-performance` registered in `docs/migration/SOURCE-REPOSITORIES.md`.
- Manifest created in KZ-E00-T05.

## Deliverables
- Snapshot registered in `docs/migration/SOURCE-REPOSITORIES.md`.
- Initial inventory in the manifest.

## Subtasks
- [x] Verify branch, commit, remote, and worktree.
- [x] Consolidate or explicitly exclude untracked changes in the source.
- [x] Record the approved commit and tag.
- [x] Inventory candidate files without copying them.

## Validation
- The recorded commit exists and can be read.
- The manifest does not reference an ambiguous worktree state.

## Acceptance criteria
- [x] There is a single source reference for KZ-E01.
- [x] Every candidate has a hash, treatment, and exposure.
- [x] No legacy content was created at the destination.

## Result
Completed on 2026-08-31. The private commit `d1acad309e2b81b714d1aa375e9371a310ad6ed0`, published at tag `kaizen-training-source-v1`, is the single source of KZ-E01. The manifest contains 23 artifacts computed from the blobs of that commit and no copy in Kaizen.
