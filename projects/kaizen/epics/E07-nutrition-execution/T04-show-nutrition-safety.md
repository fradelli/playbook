---
id: KZ-E07-T04
epic: KZ-E07
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E07-T03]
---

# Show safety and provenance

## Objective

Show the version, origin, unknowns, and caveats of the nutrition content.

## Inputs

- `docs/plans/nutrition/E07.md`: epic plan.
- `data/nutrition/active.json`: active plan.
- `data/nutrition/reviews/e02-t03-review-metadata.json`: review metadata.
- `docs/guides/NUTRITION.md`: nutrition guide.
- `docs/migration/MIGRATION-MANIFEST.md`: origin of the migrated content.
- `src/features/nutrition/`: feature code.

## Deliverables

- Provenance metadata and contextual notices.

## Subtasks

- [ ] Identify date, version, and authorship when known.
- [ ] Distinguish confirmed fact from documented interpretation.
- [ ] Show guidance to seek professional assessment when applicable.
- [ ] Minimize the personal data presented.

## Validation

- Compare each notice and metadata value shown with its source file.

## Acceptance criteria

- [ ] Every notice and metadata value shown (date, version, authorship) matches `data/nutrition/active.json` or the review metadata.
- [ ] Content marked as interpretation or unknown in the sources is labeled as such and never shown as a confirmed prescription.

## Result

Not started.
