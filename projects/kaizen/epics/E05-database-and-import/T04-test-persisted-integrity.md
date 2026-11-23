---
id: KZ-E05-T04
epic: KZ-E05
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E05-T03]
---

# Test persisted integrity

## Objective
Prove joins, constraints, active version, and provenance against a real test database.

## Inputs
- `docs/operations/E05.md`
- `docs/architecture/DATA-MODEL.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `prisma/schema.prisma`
- `prisma/models/platform.prisma`
- `prisma/models/training.prisma`
- `prisma/models/nutrition.prisma`
- `prisma/migrations/20260913011504_initial_p0/migration.sql`
- `src/features/plan-definition-import/domain/plan-definition-import.types.ts`
- `src/features/plan-definition-import/domain/plan-definition-source.types.ts`
- `src/features/plan-definition-import/application/import-versioned-plan-definitions.ts`
- `src/features/plan-definition-import/data/read-plan-definitions-from-git.ts`
- `src/features/plan-definition-import/data/validate-plan-definition-snapshot.ts`
- `src/features/plan-definition-import/data/prisma-plan-definition-import-repository.ts`
- `src/features/plan-definition-import/data/plan-definition.mapper.ts`
- `src/features/plan-definition-import/data/persist-source-import-batches.ts`
- `src/features/plan-definition-import/data/persist-reviewed-exercise-definitions.ts`
- `src/features/plan-definition-import/data/persist-training-plan-definition.ts`
- `src/features/plan-definition-import/data/persist-nutrition-plan-definition.ts`
- `src/features/plan-definition-import/data/activate-selected-plan-definitions.ts`
- `tests/integration/import-versioned-plan-definitions.test.ts`
- `tests/integration/database.test.ts`
- `tests/integration/database.setup.ts`
- `tests/integration/fixtures/database.fixture.ts`
- `tests/integration/fixtures/import-database.fixture.ts`
- `vitest.config.ts`
- `vitest.integration.config.ts`
- `package.json`
- `compose.yaml`
- `.env.example`
- `.github/workflows/ci.yml`
- `scripts/import-versioned-plan-definitions.ts`
- `scripts/validate-governance.mjs`
- `roadmap/README.md`
- `CHANGELOG.md`
- `src/features/persisted-data-integrity/application/validate-persisted-data.ts`
- `src/features/persisted-data-integrity/data/prisma-persisted-data-reader.ts`
- `src/lib/db/test-database-configuration.utils.ts`
- `scripts/validate-persisted-data.ts`
- `tests/integration/persisted-data-integrity.test.ts`
- `tests/integration/persisted-data-concurrency.test.ts`

## Deliverables
- Integration tests and parity report.

## Subtasks
- [x] Test the active plan and references.
- [x] Test duplication and missing parent.
- [x] Compare counts and relevant fields.
- [x] Test import rollback.
- [x] Audit projections and provenance in a consistent read-only snapshot.
- [x] Distinguish an empty database from valid parity, without exposing operational data.
- [x] Validate revision conflicts with two real connections.
- [x] Run the CLI in a disposable schema prepared by the integration.

## Validation
- Tests run in a disposable environment and fail for invalid data.

## Acceptance criteria
- [x] The database preserves the repository invariants.

## Result
Implemented a read-only server-only auditor, with pure parity rules,
DTOs without Prisma, a hash of the Git bytes, and confirmation of the source in the first-import
commit. The report distinguishes `valid`, `invalid`, and `not-imported`, without including
values, documents, UUIDs, or connection strings. Its scope is the canonical set
of definitions of the selected commit; it does not certify unselected
historical sources or scan private operational data.

CLI protected by the loopback target `kaizen_test`, with no operational fallback,
import, migration, or repair. The integration prepares a random schema, imports,
runs the CLI, and removes only the validated schema. Concurrent revision cases
use two independent Clients and require one winner and one conflict, preserving the
winner's fields and links. Earlier rollback and history tests were kept.

`pnpm run ci` approved: 144 unit/validator tests, 30 PostgreSQL integrations,
29 script regressions, format, lint, structure, types, data, build, and audit
with no known vulnerabilities. Initial migration, approved JSONs, shells, and
volumes preserved. Local implementation awaiting validation and authorization for
commit/PR. The earlier Docker closure was already merged through PR #39.
