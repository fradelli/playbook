---
id: KZ-E00-T19
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T13, KZ-E00-T18]
---

# Reorganize the scripts folder by purpose

## Objective

Group the repository scripts by purpose, so that each script is easy to find from the command that runs it.

## Context

- KZ-E00-T13 removed the scripts without a consumer (PR #100) and left the reorganization out, because KZ-E00-T18 translates the same `scripts/` and `docs/`.
- `scripts/` is a flat folder used by `package.json`, CI, tests, and application code (`validate-data.mjs` is imported by `plan-definition-snapshot-validation.rules.ts`).

## Inputs

- `scripts/` — current scripts and their tests.
- `package.json` — `scripts` section.
- `.github/workflows/ci.yml` — commands executed.
- `vitest.config.ts` — test globs for `test:ci-scripts`.
- `docs/DOCUMENTATION-STANDARD.md` — references to `docs:preservation`.

## Deliverables

- `scripts/` split into folders by purpose (for example `ci/`, `db/`, `docs/`, `data/`).
- `package.json`, CI, test configuration, imports, and documentation pointing to the new paths.

## Subtasks

- [ ] List each script with the command, workflow, test, or import that uses it.
- [ ] Move the scripts and update every reference.
- [ ] Record the new layout in the repository documentation.

## Validation

- `pnpm run ci` passes, except database-dependent gates when there is no local PostgreSQL, recorded as not run.
- `git grep` finds no reference to an old script path outside dated history.

## Acceptance criteria

- [ ] Every script lives in a folder named for its purpose.
- [ ] Every command in `package.json` and CI runs from the new paths.

## Result

Not started.
