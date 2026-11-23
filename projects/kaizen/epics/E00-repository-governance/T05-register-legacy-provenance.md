---
id: KZ-E00-T05
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T04, KZ-E00-T06]
---

# Register legacy provenance

## Objective
Create the manifest that links each future artifact to its verifiable origin.

## Inputs
- Decision to keep `fradelli/kaizen-app` public.
- Private repository `developerlucaslima/personal-performance`.
- Remote base commit observed; the final snapshot will be chosen in KZ-E01-T01.

## Deliverables
- `docs/migration/MIGRATION-MANIFEST.md`
- `docs/migration/SOURCE-REPOSITORIES.md`
- `docs/decisions/PUBLIC-REPOSITORY-AND-DATA-POLICY.md`

## Subtasks
- [x] Record identifiers, remotes, branches, and commits without absolute local paths.
- [x] Define the `COPY`, `TRANSFORM`, `SUMMARIZE`, and `SKIP` treatments.
- [x] Define the `PUBLIC`, `REVIEW_REQUIRED`, and `DO_NOT_PUBLISH` exposures.
- [x] Define the use of SHA-256 for source and destination.
- [x] Record that the private legacy will not be deleted.

## Validation
- Every manifest field has an unambiguous definition.
- No personal data is copied in this task.

## Acceptance criteria
- [x] The manifest can receive one row per artifact without a new structural decision.
- [x] The origin can be reproduced by repository, commit, and path.
- [x] No legacy content was copied in this task.

## Result
Completed on 2026-08-31. The private source, the remote base commit, the public policy, the treatments, the exposure classifications, and the integrity rules were recorded without copying legacy content.
