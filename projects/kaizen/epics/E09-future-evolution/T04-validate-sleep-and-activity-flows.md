---
id: KZ-E09-T04
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T02, KZ-E09-T03]
---

# Validate sleep and activity journeys

## Objective

Prove that sleep and general activities work end to end, preserve ownership, and do not conflict with workouts or nutrition.

## Inputs

- `fradelli/playbook: projects/kaizen/epics/E09-future-evolution/T02-implement-sleep-tracking.md`: sleep scope.
- `fradelli/playbook: projects/kaizen/epics/E09-future-evolution/T03-implement-general-activity-tracking.md`: general activity scope.
- `docs/architecture/TARGET-ARCHITECTURE.md`: architecture rules.
- `.github/workflows/ci.yml`: gates executed.

## Deliverables

- Automated tests of the critical flows and safe failures.
- Evidence of responsiveness, accessibility, timezone, and workspace isolation.
- Record of remaining limitations and unknowns before i18n.

## Subtasks

- [ ] Validate creation, viewing, editing, conflict, and missing data.
- [ ] Confirm that the four domains do not overwrite one another.
- [ ] Run relational tests on a real PostgreSQL and a production build.
- [ ] Validate the screens in mobile and desktop viewports.

## Validation

- `pnpm run ci` passes, including the relational tests on a real PostgreSQL and the production build.
- The manual scenarios defined in planning pass on a mobile and a desktop viewport.

## Acceptance criteria

- [ ] Automated tests cover creation, viewing, editing, conflict, and missing data for sleep and for general activities, and all pass.
- [ ] A test shows that writing a sleep or general activity record leaves workout and nutrition records unchanged.
- [ ] The evidence lists the remaining limitations and unknowns before i18n.

## Out of scope

- Translating interface, content, or documentation.

## Result

Not started.
