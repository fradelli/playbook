---
id: KZ-E01-T03
epic: KZ-E01
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E01-T02]
---

# Migrate training history

## Objective
Preserve previous versions, reviews, and history without transforming immutable artifacts, keeping unpublishable originals in the private snapshot.

## Inputs
- `e01-t03-*` rows of the manifest, including plans not pointed to by `data/active.json`.

## Deliverables
- Corresponding public history in Kaizen.
- Auditable reference to the originals kept only in the legacy.
- SHA-256 of each source and destination in the manifest.

## Subtasks
- [x] Preserve originals byte for byte in the legacy and copy only those authorized as `PUBLIC`.
- [x] Preserve previous versions without retroactively changing their embedded status.
- [x] Migrate reviews keeping the reference to the source.
- [x] Migrate historical summaries with provenance.
- [x] Confirm that no month was omitted.

## Validation
- The hash of each literal copy is identical.
- Each review points to the source artifact in the manifest; the file exists at the destination only when its exposure is `PUBLIC`.
- The active plan pointer is not changed.

## Acceptance criteria
- [x] History and the current plan are distinguishable.
- [x] The legacy remains preserved.

## Result
Plan v1 was copied literally with its historical `status`, while `data/active.json` kept pointing to v2. The review references the private original by `artifact_id`; the analysis preserves decisions and aggregate context without the exact schedule or any health matter. The coach workout remains byte for byte in the private snapshot and was closed as `SKIPPED/DO_NOT_PUBLISH`.
