---
id: KZ-E05-T02
epic: KZ-E05
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T03, KZ-E05-T01]
---

# Configure database and migrations

## Objective
Configure the approved database and ORM with reproducible migrations.

## Inputs
- `AGENTS.md`
- `compose.yaml`
- `tests/integration/database.setup.ts`
- `tests/integration/database.test.ts`
- `tests/integration/import-versioned-plan-definitions.test.ts`
- `tests/integration/fixtures/import-database.fixture.ts`
- `docs/operations/E05.md`
- `docs/architecture/DATA-MODEL.md`
- `docs/decisions/DATABASE-AND-ORM.md`
- `data/training-execution-metadata.json`
- `.env.example`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `src/lib/env/server.ts`
- `src/lib/env/server.test.ts`
- `vitest.config.ts`
- `vitest.setup.ts`
- `tsconfig.json`
- `eslint.config.mjs`
- `.gitignore`
- `.prettierignore`
- `.github/workflows/ci.yml`
- `roadmap/ACTIVE.md`
- `roadmap/README.md`
- `CHANGELOG.md`
- `prisma.config.ts`
- `prisma/schema.prisma`
- `src/lib/db/client.ts`
- `src/lib/db/environment.ts`
- `src/lib/db/environment.test.ts`

## Deliverables
- `compose.yaml`, `prisma.config.ts`, `prisma/schema.prisma`, domain schemas in `prisma/models/`, and a testable CLI configuration.
- `prisma/migrations/20260913011504_initial_p0/migration.sql` and `migration_lock.toml`.
- Server-only Client and configuration in `src/lib/db/`, with unit tests.
- Vitest Node configuration and PostgreSQL tests in `tests/integration/`.
- Client generation and PostgreSQL integration in the local/CI gates.
- Operation, deploy, recovery, and pending items documented in the guide.

## Subtasks
- [x] Isolate URLs per environment.
- [x] Version the initial migration.
- [x] Prevent client access to the database.
- [x] Define the deploy and rollback process.

## Validation
- An empty database converges through the migration.
- Secrets do not enter Git or the bundle.

## Acceptance criteria
- [x] Local and test use reproducible configuration.
- [x] An empty database converges and a second application finds no pending migrations.
- [x] Real tests validate ownership, versions, load, measurements, meals, and history.
- [x] Complete local gates pass, including the audit of the new dependencies.

## Result
On 14/09, the schema was split by domain, with equivalence of the 30 blocks confirmed
and no change to the migration. The typed configuration and the pure CLI safeguards were separated;
automatic generation was included in the development, build, types, and test commands.
Conventions were recorded in the architecture and referenced in AGENTS. A new run
validated 42 unit tests, 10 PostgreSQL tests, 28 validator regressions,
format, lint, structure, types, data, and build. `ci` failed only on the transitive
audit already recorded below; Docker remains pending.

Implementation prepared for a review PR, with the merge conditioned on the pending
criteria. The schema was validated, the Client generated, and the migration
applied in two temporary PostgreSQL 18.6 databases; a second application and the status
confirmed convergence. Unit and PostgreSQL tests, types, lint, data, and build
were run. Local containers are still waiting for the Docker Desktop startup
to be fixed; Compose was validated without starting containers.

After the failure of PR #36, the fix was published and merged separately
through PR #37, based on `developer`. A scoped override on `@prisma/config@7.10.0`
resolves `deepmerge-ts@8.0.2`, with compatibility of the concrete usage verified.
Frozen install and the complete `ci` passed in two clean copies:
`developer` + fix and KZ-E05-T02 + fix, with real PostgreSQL tests.
The two mysql2 findings remain fixed by the scoped override 3.23.1.
No audit exception or Prisma RC was applied. In that run,
validation of the local containers still blocked completion.

### Closing the Docker pending item

On 14/09/2026, Docker Desktop responded normally and Compose was run
with a real PostgreSQL 18.6 Alpine. The local database became healthy on loopback on
port 5432, with a named volume; the test database became healthy on port 5434,
with an independent tmpfs. Port 5433 was taken by another project, which was
preserved. An optional `TEST_DATABASE_PORT` was added with a default of 5433; the two
private test URLs were aligned to the free port, with no change to credentials.
The Compose default and override were validated without exposing the private environment.

The local database started with no public tables. `db:deploy` applied the migration;
a second run and `db:status` confirmed convergence. Restarting the local
container preserved the identity and checksum of the migration in the volume. The test database
received the same migration and also confirmed no pending items. The import
fixtures were removed from the isolated schemas on completion; development
remained without imported batches or personal executions created by the tests.

Frozen install and the complete `pnpm run ci` passed: 85 unit tests,
17 PostgreSQL integration tests, 29 script regressions, format, lint, structure,
types, data, build, and audit with no findings. Both services remain
healthy for local use. No volume was deleted, no migration changed, and no
container from another project was interrupted. The Docker pending item is closed.
