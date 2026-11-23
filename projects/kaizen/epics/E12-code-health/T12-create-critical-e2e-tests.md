---
id: KZ-E12-T12
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E12-T02]
---

# Create E2E tests for the critical journeys

## Objective
Cover the critical workout and schedule journeys with Playwright on a real PostgreSQL, as the architecture's testing strategy provides.

## Context

The architecture lists Playwright for critical journeys, but the project has no E2E test. The `.gitignore` already reserves `playwright-report/` and `test-results/`. The current suite has unit tests, UI tests in jsdom, and integration tests with a database.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md` — sections "Estratégia de testes" (Testing strategy) and "Casos obrigatórios" (Required cases).
- `compose.yaml` — local test database.
- `.github/workflows/ci.yml` — Test job with a PostgreSQL service.
- `scripts/test-i18n-http.mjs` — HTTP language check, a candidate to become an E2E case.

## Deliverables
- Playwright installed with an exact version and configuration in `tests/e2e/`.
- Journeys: open the day, add and edit an activity, run and finish a workout, conflict between tabs, schedule mutation, and language switch.
- E2E job in CI with a disposable database.

## Subtasks
- [ ] Configure Playwright, the test server, and the data seed.
- [ ] Write the journeys.
- [ ] Add the job to CI.
- [ ] Decide the fate of `scripts/test-i18n-http.mjs`.

## Validation
- The E2E tests pass locally and in CI.
- A deliberate regression in a journey makes the job fail.

## Acceptance criteria
- [ ] The listed critical journeys run on every PR.
- [ ] The job's duration is recorded in the PR.

## Result
Not started.
