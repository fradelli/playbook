---
id: KZ-E09-T03
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T01]
---

# Implement general activity logging

## Objective
Allow logging and viewing general activities according to the contract approved in
KZ-E09-T01, without duplicating sessions that belong to the workout domain.

## Inputs
- `roadmap/epics/E09-future-evolution/T01-design-sleep-and-general-activities.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `prisma/models/platform.prisma`
- `src/lib/security/workspace.ts`

## Deliverables
- Persistence and use cases protected by the fixed workspace.
- Accessible, responsive screen for the approved activity types.
- Explicit rules for date, duration, notes, and possible overlap.
- Domain, PostgreSQL integration, component, and critical-flow tests.

## Subtasks
- [ ] Detail the task with the approved contracts before making it `READY`.
- [ ] Update dependencies and implement authentication before this task if
      KZ-E09-T01 classifies the data as sensitive.
- [ ] Prevent conceptual duplication with workouts, mobility, and rest.
- [ ] Validate origin, input, ownership, and concurrency on the server.
- [ ] Preserve missing values without invented defaults.

## Validation
- Test boundaries between domains, ownership, constraints, accessibility, and build.

## Acceptance criteria
- [ ] The user logs an approved activity without changing workouts or nutrition.

## Out of scope

- Composite schedule, notifications, or integration not approved in KZ-E09-T01.

## Result
Not yet completed.
