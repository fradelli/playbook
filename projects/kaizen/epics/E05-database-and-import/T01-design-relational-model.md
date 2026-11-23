---
id: KZ-E05-T01
epic: KZ-E05
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E03-T05]
---

# Model workouts and nutrition

## Objective
Model only the entities, relations, and constraints required by P0.

## Inputs
- `docs/operations/E05.md`
- `docs/product/P0.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/decisions/DATABASE-AND-ORM.md`
- `data/active.json`
- `data/exercises.json`
- `data/nutrition/active.json`
- `data/plans/2026-08-performance-v2.json`
- `data/plans/2026-08-performance-v1.json`
- `data/nutrition/plans/2026-09-personal-v1.json`
- `schemas/training-plan.schema.json`
- `schemas/nutrition-plan.schema.json`
- `schemas/README.md`
- `docs/decisions/DATA-SOURCE-TRANSITION.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`
- `scripts/validate-data.mjs`
- `scripts/validate-data.test.mjs`
- `roadmap/ACTIVE.md`
- `roadmap/README.md`
- `CHANGELOG.md`

## Deliverables
- `docs/architecture/DATA-MODEL.md`
- `data/training-execution-metadata.json`
- `schemas/training-execution-metadata.schema.json`
- Integration of the metadata into `scripts/validate-data.mjs` and its regressions.
- Documented coverage in `schemas/README.md` and evidence in the roadmap/changelog.

## Subtasks
- [x] Map IDs, versions, statuses, and provenance.
- [x] Model workout and nutrition definitions, activations, assignments, and executions.
- [x] Model rate limiting without storing the pairing key or the raw IP.
- [x] Define uniqueness and referential integrity.
- [x] Classify the load measurement and load applicability of every exercise used, with no default by inference.
- [x] Exclude future domains.

## Validation
- Each field derives from approved data or an approved requirement.
- The strict schema, coverage of the two historical plans, and explicit normalizations pass in `pnpm data:check`.
- Regressions cover load, unit, measurement, references, duplication, and unreviewed doses.
- Relational constraints are specified; their actual execution in PostgreSQL belongs to the next tasks.

## Acceptance criteria
- [x] The model represents workouts and nutrition without duplicating sources.
- [x] The 18 entities have columns, relations, uniques, checks, indexes, and deletion policies.
- [x] All 38 exercises used in the versioned plans have reviewed metadata.
- [x] No dependency, database, migration, endpoint, or Client was created.

## Result
Implementation complete: the relational model is specified and the metadata
for the 38 exercises is integrated into the data validator. Plans and library remain
untouched. The local `pnpm run ci` gates passed, including regressions, data
integrity, build, and dependency audit. KZ-E05-T02 is ready but was not started.
