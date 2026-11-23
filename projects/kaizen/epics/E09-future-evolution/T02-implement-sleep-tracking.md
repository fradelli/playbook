---
id: KZ-E09-T02
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T01]
---

# Implement sleep tracking

## Objective

Allow logging and viewing sleep according to the contract approved in KZ-E09-T01, without producing a diagnosis or medical recommendation.

## Inputs

- `fradelli/playbook: projects/kaizen/epics/E09-future-evolution/T01-design-sleep-and-general-activities.md`: approved contract.
- `docs/architecture/TARGET-ARCHITECTURE.md`: architecture rules.
- `prisma/models/platform.prisma`: model to extend.
- `src/lib/security/workspace.ts`: fixed workspace resolution.

## Deliverables

- Versioned persistence protected by the fixed workspace.
- Server-side reading and logging with input validation and concurrency handling.
- Accessible, responsive screen for viewing and editing the approved data.
- Domain, PostgreSQL integration, component, and critical-flow tests.

## Subtasks

- [ ] Detail the task with the approved contracts before making it `READY`.
- [ ] Update dependencies and implement authentication before this task if KZ-E09-T01 classifies the data as sensitive.
- [ ] Preserve civil dates in `America/Sao_Paulo` and timestamps in UTC.
- [ ] Handle absence, editing, conflict, and failure without inventing metrics.
- [ ] Keep components in their own folders and the smallest Client boundary.

## Validation

- Tests cover ownership, constraints, timezone, and concurrency.
- Accessibility check of the screen and a production build.

## Acceptance criteria

- [ ] A sleep record created on the screen is shown again after a reload, with its civil date unchanged.
- [ ] A concurrent edit of the same record is rejected with a conflict.
- [ ] The screen shows only the approved data and no diagnosis or medical recommendation.
- [ ] A sleep record is not readable from another workspace.

## Out of scope

- Medical recommendations, disorder detection, or integration not approved in KZ-E09-T01.

## Result

Not started.
