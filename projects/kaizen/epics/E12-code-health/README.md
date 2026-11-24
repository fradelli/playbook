# KZ-E12 — Technical code health

## Expected outcome
Application code aligned with the target architecture, with boundaries, validation, state, security, and tests fixed based on the technical audit of 2026-11-23 on `developer` (`364c71f`).

## Scope
- Dependencies, configuration, and security headers.
- Boundaries between app, application, domain, and data in the schedule and in workouts.
- Single Zod schemas shared between client and server, and typed errors.
- Decision on and adoption of global state and form patterns.
- Strict TypeScript, E2E tests, and folder organization.
- Findings of the 2026-11-24 sweep: merged coverage, type-aware and accessibility lint, foreign key indexes, oversized components, the foundations route, and dependency triage.

## Out of scope
- New product features.
- Governance, documentation, and CI, handled in KZ-E00.
- The Mira migration, which continues in KZ-E10-T09.

## Order
| Task | Depends on | Outcome |
| --- | --- | --- |
| [KZ-E12-T01](T01-sanitize-dependencies-and-overrides.md) | KZ-E00-T13 | Dependencies with exact versions and valid overrides |
| [KZ-E12-T02](T02-add-security-headers-and-route-states.md) | — | Security headers and error and loading pages |
| [KZ-E12-T03](T03-align-schedule-with-architecture-boundaries.md) | — | Schedule with a use case, an action in order, and no internal REST |
| [KZ-E12-T04](T04-unify-zod-schemas.md) | KZ-E12-T03 | One schema per contract, shared between client and server |
| [KZ-E12-T05](T05-replace-text-errors-with-typed-codes.md) | KZ-E12-T04 | Errors by code, translated only in the UI |
| [KZ-E12-T06](T06-remove-duplicate-refresh-after-mutations.md) | — | A single route refresh after each mutation |
| [KZ-E12-T07](T07-split-training-repository.md) | KZ-E12-T05 | Workout repository split and rules in the domain |
| [KZ-E12-T08](T08-decide-state-and-form-patterns.md) | — | Decision on Zustand and React Hook Form recorded |
| [KZ-E12-T09](T09-migrate-client-caches-to-approved-store.md) | KZ-E12-T08 | Schedule caches and workout draft in the approved store |
| [KZ-E12-T10](T10-migrate-activity-form-to-approved-pattern.md) | KZ-E12-T04, KZ-E12-T08 | Activity form in the approved pattern |
| [KZ-E12-T11](T11-tighten-typescript-strictness.md) | KZ-E12-T07 | Extra strict TypeScript options enabled |
| [KZ-E12-T12](T12-create-critical-e2e-tests.md) | KZ-E12-T02 | Critical journeys covered by Playwright |
| [KZ-E12-T13](T13-standardize-imports-and-feature-folders.md) | KZ-E12-T09 | Uniform imports and folder structure |
| [KZ-E12-T14](T14-report-integration-coverage.md) | — | Coverage counts both suites and the floor reflects it |
| [KZ-E12-T15](T15-split-schedule-writer.md) | KZ-E12-T03 | One handler per schedule command |
| [KZ-E12-T16](T16-move-schedule-materialization-to-domain.md) | — | Day materialization rules live in the domain with unit tests |
| [KZ-E12-T17](T17-enable-typed-and-accessibility-lint.md) | — | Lint catches unhandled promises and common accessibility errors |
| [KZ-E12-T18](T18-add-foreign-key-indexes.md) | — | Every foreign key has a leading index |
| [KZ-E12-T19](T19-decide-foundations-route-exposure.md) | — | `/foundations` behaves as the owner decided in each environment |
| [KZ-E12-T20](T20-split-oversized-training-components.md) | KZ-E12-T13 | The three largest training components are under 200 lines |
| [KZ-E12-T21](T21-triage-dependency-updates.md) | KZ-E12-T01 | No stale Dependabot pull request and a plan for each major upgrade |

Status lives only in the project `README.md`.

## Closing criteria
- [ ] All required tasks are `DONE` or `CANCELLED` by a recorded decision.
- [ ] `docs/architecture/TARGET-ARCHITECTURE.md` reflects the decisions made in the epic.
- [ ] `pnpm run ci` passes with the new gates.
