---
id: KZ-E09-T06
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T05]
---

# Internationalize product and canonical content

## Objective
Migrate the four product journeys to the approved i18n catalog, using English
as the source language and preserving provenance and history of the canonical data.

## Inputs
- `roadmap/epics/E09-future-evolution/T05-design-i18n-and-english-policy.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `data/exercises.json`
- `data/training-execution-metadata.json`
- `data/active.json`
- `data/nutrition/active.json`
- `src/app/layout.tsx`

## Deliverables
- Complete English catalog and at least one additional approved locale.
- Interface, accessibility, errors, and metadata without scattered product strings.
- English routes with explicit compatibility for previous URLs.
- Canonical content translated as a new version when provenance requires it.
- Tests for fallback, formatting, loading, and missing keys.

## Subtasks
- [ ] Internationalize the shell, workouts, nutrition, sleep, and general activities.
- [ ] Translate dates, numbers, units, messages, and accessible names.
- [ ] Preserve stable IDs and create new versions instead of altering imported history.
- [ ] Keep untranslated content explicit, with no silent incorrect fallback.
- [ ] Update tests by behavior and locale.

## Validation
- Run data integrity, idempotent import, UI tests, and a build per locale.

## Acceptance criteria
- [ ] A user in English uses all journeys without finding product text in Portuguese.
- [ ] The additional approved locale works with a deterministic fallback.
- [ ] History, IDs, and previous versions remain intact.

## Out of scope

- Automatic runtime translation or unreviewed clinical/nutritional content.

## Result
Not yet completed.
