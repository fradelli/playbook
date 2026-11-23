---
id: KZ-E05-T05
epic: KZ-E05
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E05-T04]
---

# Validate backup and restore

## Objective
Demonstrate data recovery on a local PostgreSQL before depending on a managed provider.

## Inputs
- `docs/operations/E05.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`
- `compose.yaml`
- `prisma/schema.prisma`
- `prisma/models/platform.prisma`
- `prisma/models/training.prisma`
- `prisma/models/nutrition.prisma`
- `prisma/migrations/20260913011504_initial_p0/migration.sql`
- `.env.example`
- `package.json`
- `.github/workflows/ci.yml`
- `.github/pull_request_template.md`
- `scripts/import-versioned-plan-definitions.ts`
- `scripts/validate-persisted-data.ts`
- `src/lib/db/test-database-configuration.types.ts`
- `src/lib/db/test-database-configuration.utils.ts`
- `src/features/plan-definition-import/data/read-plan-definitions-from-git.ts`
- `src/features/persisted-data-integrity/application/validate-persisted-data.ts`
- `src/features/persisted-data-integrity/data/prisma-persisted-data-reader.ts`
- `tests/integration/database.setup.ts`
- `tests/integration/fixtures/database.fixture.ts`
- `tests/integration/fixtures/import-database.fixture.ts`
- `vitest.integration.config.ts`
- `roadmap/ACTIVE.md`
- `roadmap/README.md`
- `CHANGELOG.md`

## Deliverables
- `docs/operations/BACKUP-AND-RESTORE.md`
- Evidence of the restore test.

## Subtasks
- [x] Run `pg_dump` on the local source PostgreSQL.
- [x] Restore with `pg_restore` into another disposable local PostgreSQL.
- [x] Validate counts, IDs, and active version.
- [x] Record duration, limitations, and evidence; managed RPO/RTO belongs to KZ-E08.
- [x] Isolate source and destination in disposable containers without touching existing volumes.
- [x] Automate the flow and its cleanup with sanitized errors.
- [x] Run the proof in a dedicated CI job.

## Validation
- The local restore produces a usable, intact database.
- No Neon account, branch, or credential is needed in this task.

## Acceptance criteria
- [x] The local procedure is repeatable and does not expose credentials.

## Result
Completed in PR #42. The `Backup restore` job ran PostgreSQL 18.6 in two
disposable containers, produced a custom dump of 151,376 bytes in 199 ms, and restored
it in 231 ms. The destination kept current migrations, valid persisted integrity,
active plans, global and per-workspace counts, and all the canary identities.
All seven PR gates passed. The local workstation had no Docker engine available;
the repeatable proof was run on the isolated Linux CI runner. Neon, real data,
managed RPO/RTO, retention, and production restore remain out of scope.
