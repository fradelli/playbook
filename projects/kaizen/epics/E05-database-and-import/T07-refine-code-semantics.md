---
id: KZ-E05-T07
epic: KZ-E05
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E05-T04]
---

# Refine code semantics and boundaries

## Objective
Make the importer and the persisted audit readable through business concepts,
with explicit types, cohesive responsibilities, and architectural boundaries
verified automatically.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/operations/E05.md`
- `src/features/plan-definition-import/domain/plan-definition-import.types.ts`
- `src/features/plan-definition-import/domain/plan-definition-source.types.ts`
- `src/features/plan-definition-import/domain/plan-definition-import.error.ts`
- `src/features/plan-definition-import/data/read-plan-definitions-from-git.ts`
- `src/features/plan-definition-import/data/plan-definition.mapper.ts`
- `src/features/plan-definition-import/data/plan-definition-persistence.types.ts`
- `src/features/plan-definition-import/data/plan-definition-persistence.utils.ts`
- `src/features/plan-definition-import/data/plan-definition-snapshot-validation.rules.ts`
- `src/features/plan-definition-import/data/activate-selected-plan-definitions.ts`
- `src/features/plan-definition-import/data/persist-reviewed-exercise-definitions.ts`
- `src/features/plan-definition-import/data/persist-training-plan-definition.ts`
- `src/features/plan-definition-import/data/persist-nutrition-plan-definition.ts`
- `src/features/plan-definition-import/data/plan-definition-import-validation.test.ts`
- `src/features/persisted-data-integrity/application/validate-persisted-data.ts`
- `src/features/persisted-data-integrity/application/validate-persisted-data.test.ts`
- `src/features/persisted-data-integrity/application/validate-imported-source-commits.test.ts`
- `src/features/persisted-data-integrity/application/validate-persisted-data.fixture.ts`
- `src/features/persisted-data-integrity/domain/persisted-data-integrity.types.ts`
- `src/features/persisted-data-integrity/domain/definition-parity.utils.ts`
- `src/features/persisted-data-integrity/domain/import-provenance-integrity.rules.ts`
- `src/features/persisted-data-integrity/domain/training-definition-integrity.rules.ts`
- `src/features/persisted-data-integrity/domain/nutrition-definition-integrity.rules.ts`
- `src/features/persisted-data-integrity/data/prisma-persisted-data-reader.ts`
- `src/features/persisted-data-integrity/data/persisted-data-integrity-cli.utils.ts`
- `src/features/persisted-data-integrity/data/persisted-data-integrity-cli.utils.test.ts`
- `scripts/validate-persisted-data.ts`
- `scripts/validate-component-structure.mjs`
- `scripts/validate-component-structure.test.mjs`
- `tests/integration/import-versioned-plan-definitions.test.ts`
- `tests/integration/persisted-data-integrity.test.ts`
- `package.json`
- `vitest.config.ts`
- `roadmap/ACTIVE.md`
- `roadmap/README.md`
- `roadmap/epics/E05-database-and-import/README.md`
- `CHANGELOG.md`
- `.github/pull_request_template.md`

## Deliverables
- Typed contracts and explicit mapping between Prisma and the domain.
- Integrity rules separated by entity and fixtures restricted to tests.
- Public taxonomy of CLI failures without leaking internal details.
- Automated gate for dependencies between layers and Client/Server boundaries.

## Subtasks
- [x] Type each persisted projection and map Prisma explicitly.
- [x] Make the importer sources a discriminated union and type the counters.
- [x] Separate parity rules by entity and move fixtures to tests.
- [x] Distinguish arguments, source, and infrastructure in CLI errors.
- [x] Prevent imports between incompatible layers with an automated gate.
- [x] Document the conventions as a permanent architecture rule.

## Validation
- Format, lint, structure, boundaries, types, coverage, data, build, and audit.
- PostgreSQL integrations run in the PR CI in a disposable environment.

## Acceptance criteria
- [x] Production code does not use double casts to discover canonical formats.
- [x] Prisma types remain in the data layer.
- [x] Workout and nutrition rules reveal their responsible entity by name.
- [x] Architecturally incompatible imports fail in the local gate and in CI.

## Result
Implementation complete. The unit suite has 150 tests, the integration suite has
30 PostgreSQL cases, and the CI validators have 32 regressions. The six checks
of PR #41 approved governance, quality, tests, data integrity, build, and
dependency audit. The local integration was unavailable because the Docker Desktop
engine did not start, without replacing or weakening the remote validation.
