---
id: KZ-E00-T16
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Strengthen the CI gates

## Objective
Make remote CI run the same gates as `pnpm run ci` and close the gaps that let failures pass unnoticed.

## Context

Findings from the audit of 2026-11-23 on `developer` (`364c71f`):

- `pnpm i18n:check` fails with four errors, and `.github/workflows/ci.yml` does not run this gate.
- The four errors are validator false positives: HTML entities (`&rarr;`, `&plusmn;`, `&minus;`) read as text and the brand name `kaizen` missing from the exceptions list.
- `scripts/validate-i18n.mjs` does not inspect `src/features/schedule/ui`, `src/features/training/ui/hooks`, or `src/app/workout`, and does not detect unused keys; about 75 keys have no reference in the code.
- `npx prisma format --check` flags unformatted files; CI does not check this.
- `vitest.config.ts` requires 80% coverage without `coverage.include`; files not loaded by tests stay out of the count.
- The whole suite runs in jsdom (the environment added up to 586 s in the local run).
- All jobs use `package-manager-cache: false`, with no recorded decision.

## Inputs
- `.github/workflows/ci.yml` — jobs and steps.
- `package.json` — `ci` script.
- `scripts/validate-i18n.mjs` — inspected roots and text rule.
- `messages/en.json` and `messages/pt-BR.json` — keys that are candidates for removal.
- `vitest.config.ts` — coverage and environment.
- `prisma/models/` — unformatted files.

## Deliverables
- `pnpm i18n:check` step in the Quality job.
- `scripts/validate-i18n.mjs` decoding entities, ignoring `aria-hidden` content, with a brand exception, expanded roots, and detection of unused keys, with a test in `scripts/`.
- Unused keys removed from both catalogs.
- `prisma format --check` step in CI and a formatted schema.
- `coverage.include` defined; thresholds revised if real coverage drops.
- Vitest projects with a `node` environment for domain, application, and data and `jsdom` for UI.
- Recorded decision on dependency caching in CI.

## Subtasks
- [x] Fix the i18n validator and cover it with tests.
- [x] Remove the orphan keys.
- [x] Include i18n and Prisma formatting in the workflow.
- [x] Adjust coverage and separate the test environments.
- [x] Decide and apply the cache policy.

## Validation
- `pnpm i18n:check`, `pnpm test:coverage`, `pnpm test:ci-scripts`, and `pnpm run ci` pass locally.
- This task PR shows the new steps running in CI.
- A hard-coded text deliberately inserted in `src/features/schedule/ui` makes i18n fail.

## Acceptance criteria
- [x] Every `pnpm run ci` gate also runs in remote CI.
- [x] i18n detects hard-coded text in the schedule and unused keys.
- [x] The reported coverage considers all files in `src/`.

## Result
Completed on 2026-11-23.

- `scripts/validate-i18n.mjs` was rebuilt into testable functions (`scripts/validate-i18n.test.mjs`, 5 tests, included in `pnpm test:ci-scripts`). It ignores HTML entities and the brand (`kaizen`, `改善`), inspects `src/app`, `src/components`, and `src/features/*/ui` (except the `foundations` showcase), and flags keys with no reference. A temporary hard-coded text in `src/features/schedule/ui` made the gate fail.
- 75 unused keys were removed from `messages/en.json` and `messages/pt-BR.json`; 349 messages remain, all referenced.
- The Quality job now runs `pnpm db:format:check` (new script) and `pnpm i18n:check`; `pnpm run ci` gained `db:format:check`. The schema in `prisma/models/` was formatted, with whitespace-only changes (zero differing lines with `git diff -w`).
- `vitest.config.ts`: `node` projects (domain, application, data, `tests/`, and `prisma/`) and `dom` (UI components and hooks); `coverage.include` covers all of `src/`. The unit suite dropped from 144 s to 55 s; `scripts/validate-data.test.mjs` no longer runs twice (it stays in `test:ci-scripts`).
- Real coverage over all of `src/`: 61.26% lines, 60.66% functions, 57.57% branches, and 59.68% statements. The 80% thresholds were lowered to that floor (61/60/57/59), as a guard against regression. Known gap: the `data` and `app` layers are exercised only by the integration suite, which does not measure coverage.
- Dependency caching kept off, with the decision commented in `.github/workflows/ci.yml`: installation takes 10 to 14 s per job, in parallel.
- Local validations: `pnpm i18n:check`, `pnpm test:coverage` (80 files, 577 tests), `pnpm test:ci-scripts`, `pnpm lint`, `pnpm typecheck`, `pnpm structure:check`, `pnpm data:check`, `pnpm docs:check`, `pnpm db:validate`, `pnpm db:format:check`, `pnpm format:check`, and `git diff --check`. Integration, build, and audit were left for CI.
