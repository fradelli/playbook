---
id: KZ-E12-T14
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Report integration test coverage and raise the coverage floor

## Objective

Measure coverage over the unit and integration suites together, so the data and application layers count and the floor reflects real coverage.

## Context

Finding from the repository sweep of 2026-11-24 on `developer` (`67443f0`).

- `vitest.config.ts` measures coverage only for the unit suite; its comment says the integration suite does not report coverage yet.
- The report shows 0% for `src/features/schedule/data/`, the Prisma repositories, `src/app/workout/schedule-actions.ts`, and `src/app/workout/training-actions.ts`, which the integration tests exercise.
- The current floor is 61% lines, 60% functions, 57% branches, and 59% statements.

## Inputs

- `vitest.config.ts` — `coverage` section and thresholds.
- `vitest.integration.config.ts` — integration suite settings.
- `package.json` — `test:coverage` and `test:integration`.
- `.github/workflows/ci.yml` — `Test` job.

## Deliverables

- Coverage collected from both suites and merged into one report.
- Thresholds raised to the merged result, rounded down.
- The `Test` job enforcing the merged thresholds.

## Subtasks

- [ ] Enable coverage in the integration config.
- [ ] Merge both reports, for example with `vitest --merge-reports` or a single run.
- [ ] Record the merged numbers and set the new floor.
- [ ] Update the comment in `vitest.config.ts`.

## Validation

- The merged report shows non-zero coverage for `src/features/schedule/data/schedule-writer.ts`.
- `pnpm run ci` and the remote `Test` job pass with the new thresholds.

## Acceptance criteria

- [ ] One coverage report includes files exercised only by `tests/integration/`.
- [ ] The line threshold in `vitest.config.ts` is higher than 61%.
- [ ] The remote `Test` job fails when merged coverage drops below the new floor.

## Result

Not started.
