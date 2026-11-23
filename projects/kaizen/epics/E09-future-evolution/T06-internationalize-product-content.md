---
id: KZ-E09-T06
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T05]
---

# Internationalize product and canonical content

## Objective

Migrate the four product journeys to the approved i18n catalog, using English as the source language and preserving provenance and history of the canonical data.

## Inputs

- `fradelli/playbook: projects/kaizen/epics/E09-future-evolution/T05-design-i18n-and-english-policy.md`: approved i18n policy.
- `docs/architecture/TARGET-ARCHITECTURE.md`: architecture rules.
- `data/exercises.json`: canonical exercises.
- `data/training-execution-metadata.json`: workout metadata.
- `data/active.json`: active workout plan pointer.
- `data/nutrition/active.json`: active nutrition plan.
- `src/app/layout.tsx`: locale and metadata entry point.

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

- Data integrity check, idempotent import, UI tests, and a build per locale pass.

## Acceptance criteria

- [ ] In English, no screen of the four journeys shows product text in Portuguese.
- [ ] A key missing from the additional approved locale shows the English text, in a test.
- [ ] Every ID and version in the data files before the change exists unchanged after it.

## Out of scope

- Automatic runtime translation or unreviewed clinical/nutritional content.

## Result

Not started.
