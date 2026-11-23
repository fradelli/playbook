---
id: KZ-E01-T04
epic: KZ-E01
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E01-T03]
---

# Migrate human documentation

## Objective
Bring only useful guides, evidence, and templates to Kaizen, removing obsolete paths and decisions.

## Inputs
- Training guide, evidence, templates, and update documentation from the snapshot.

## Deliverables
- `docs/guides/`
- `docs/evidence/`
- `templates/`
- Transformed rows in the manifest.

## Subtasks
- [x] Classify each document as copy, transform, summarize, or omit.
- [x] Update project links and names.
- [x] Remove Next + Nest guidance as a current decision.
- [x] Preserve safety and provenance limits.

## Validation
- Relative links resolve.
- No old absolute path is used as a current instruction.

## Acceptance criteria
- [x] Documentation matches the migrated data.
- [x] Audits and prompts did not become a canonical source by accident.

## Result
Five human documents and three empty templates were derived exclusively from the approved snapshot and the data already migrated. The guides subordinate prescription to the canonical JSON files; schedule, personal context, old paths, and extensive duplication were removed. Each template requires private completion and forbids versioning the filled-in instance.
