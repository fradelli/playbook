---
id: KZ-E02-T02
epic: KZ-E02
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E02-T01]
external: [Diet provided]
---

# Preserve original diet

## Objective
Record the original nutrition source without correcting, completing, or promoting it to the current plan.

## Inputs
- Corrected inventory from KZ-E02-T01.
- Private commit `138531e4fbca6d744de73274fbb96da39c02bad3`.

## Deliverables
- Immutable snapshot and tag in the private repository.
- Original blobs preserved only in the private source.
- Manifest rows with safe references, hashes, treatment, and exposure.

## Subtasks
- [x] Create a private snapshot without rewriting the historical paths.
- [x] Use neutral names in byte-for-byte private copies when needed for public provenance.
- [x] Compute integrity directly from the snapshot blobs.
- [x] Create the private tag `kaizen-nutrition-source-v1`.
- [x] Record originals as `SKIP/DO_NOT_PUBLISH` at the public destination.
- [x] Mark derived plans as not current until review.

## Validation
- Literal private copies keep the hashes of the historical blobs.
- The tag and the commit exist on the private remote.
- No nutrition content or personal path enters the public repository.
- No recommendation is added to the original.

## Acceptance criteria
- [x] The review can return to the exact source through an immutable private reference.
- [x] The public destination contains only safe provenance.

## Result
Private snapshot published at commit `0d6456a68329f51fb9f83e1230cb285fe82f5996` and pinned by tag `kaizen-nutrition-source-v1`. The eight blobs were preserved under neutral aliases with identity confirmed by the Git objects and SHA-256 hashes. Kaizen records only `SKIP/DO_NOT_PUBLISH` metadata; no nutrition content was published.
