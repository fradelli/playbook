---
id: KZ-E09-T03
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T01]
---

# Implement general activity logging

## Objective

Allow logging and viewing general activities according to the contract approved in KZ-E09-T01, without duplicating sessions that belong to the workout domain.

## Inputs

- `fradelli/playbook: projects/kaizen/epics/E09-future-evolution/T01-design-sleep-and-general-activities.md`: approved contract.
- `docs/architecture/TARGET-ARCHITECTURE.md`: architecture rules.
- `prisma/models/platform.prisma`: model to extend.
- `src/lib/security/workspace.ts`: fixed workspace resolution.

## Deliverables

- Persistence and use cases protected by the fixed workspace.
- Accessible, responsive screen for the approved activity types.
- Explicit rules for date, duration, notes, and possible overlap.
- Domain, PostgreSQL integration, component, and critical-flow tests.

## Subtasks

- [ ] Detail the task with the approved contracts before making it `READY`.
- [ ] Update dependencies and implement authentication before this task if KZ-E09-T01 classifies the data as sensitive.
- [ ] Prevent conceptual duplication with workouts, mobility, and rest.
- [ ] Validate origin, input, ownership, and concurrency on the server.
- [ ] Preserve missing values without invented defaults.

## Validation

- Tests cover the boundaries between domains, ownership, and constraints.
- Accessibility check of the screen and a production build.

## Acceptance criteria

- [ ] An activity of an approved type, logged on the screen, is shown again after a reload.
- [ ] Logging an activity leaves workout and nutrition records unchanged.
- [ ] A field left empty is stored as missing, not as a default value.
- [ ] An activity is not readable from another workspace.

## Out of scope

- Composite schedule, notifications, or integration not approved in KZ-E09-T01.

## Result

Not started.
