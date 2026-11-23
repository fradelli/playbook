---
id: KZ-E09-T04
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T02, KZ-E09-T03]
---

# Validate sleep and activity journeys

## Objective
Prove that sleep and general activities work end to end, preserve
ownership, and do not conflict with workouts or nutrition.

## Inputs
- `roadmap/epics/E09-future-evolution/T02-implement-sleep-tracking.md`
- `roadmap/epics/E09-future-evolution/T03-implement-general-activity-tracking.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `.github/workflows/ci.yml`

## Deliverables
- Automated tests of the critical flows and safe failures.
- Evidence of responsiveness, accessibility, timezone, and workspace isolation.
- Record of remaining limitations and unknowns before i18n.

## Subtasks
- [ ] Validate creation, viewing, editing, conflict, and missing data.
- [ ] Confirm that the four domains do not overwrite each other's records.
- [ ] Run relational tests on a real PostgreSQL and a production build.
- [ ] Validate the screens in mobile and desktop viewports.

## Validation
- Run the complete gates and the manual scenarios defined in planning.

## Acceptance criteria
- [ ] Sleep and general activities are usable before the i18n migration starts.

## Out of scope

- Translating interface, content, or documentation.

## Result
Not yet completed.
