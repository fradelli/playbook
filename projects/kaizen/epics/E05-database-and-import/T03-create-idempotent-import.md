---
id: KZ-E05-T03
epic: KZ-E05
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E05-T02]
---

# Create idempotent import

## Objective
Import the documentary foundation without duplicating or silently altering data.

## Inputs
- `AGENTS.md`
- `.github/pull_request_template.md`
- `docs/operations/E05.md`
- `docs/decisions/DATA-SOURCE-TRANSITION.md`
- `docs/migration/MIGRATION-MANIFEST.md`
- `data/active.json`
- `data/nutrition/active.json`
- `prisma/schema.prisma`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/architecture/DATA-MODEL.md`
- `prisma/models/platform.prisma`
- `prisma/models/training.prisma`
- `prisma/models/nutrition.prisma`
- `src/lib/db/client.ts`
- `src/lib/db/environment.ts`
- `src/lib/env/server.ts`
- `data/exercises.json`
- `data/training-execution-metadata.json`
- `data/plans/2026-08-performance-v1.json`
- `data/plans/2026-08-performance-v2.json`
- `data/nutrition/plans/2026-09-personal-v1.json`
- `schemas/exercise-library.schema.json`
- `schemas/training-execution-metadata.schema.json`
- `schemas/training-plan.schema.json`
- `schemas/nutrition-plan.schema.json`
- `scripts/validate-data.mjs`
- `scripts/validate-data.test.mjs`
- `tests/integration/database.setup.ts`
- `tests/integration/database.test.ts`
- `tests/integration/fixtures/database.fixture.ts`
- `vitest.config.ts`
- `vitest.integration.config.ts`
- `tsconfig.json`
- `eslint.config.mjs`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `.github/workflows/ci.yml`
- `.env.example`
- `.prettierignore`
- `roadmap/README.md`
- `roadmap/ACTIVE.md`
- `CHANGELOG.md`

## Sequence authorization

On 14/09/2026, the owner authorized implementing with a real PostgreSQL,
keeping the validation of the containers as an explicit pending item of KZ-E05-T02.
This sequence exception does not close the pending criterion or waive the gates.

## Deliverables
- Importer and execution report defined in the guide.

## Subtasks
- [x] Validate before writing.
- [x] Use stable IDs and versions.
- [x] Record source and hash.
- [x] Use a transaction where consistency requires it.

## Validation
- A second run creates no duplicates.
- An intermediate failure does not leave a partial version active.

## Acceptance criteria
- [x] Counts and relations match the source.

## Result
Implemented the CLI `pnpm data:import --environment local`, with selection of the pinned
commit, shared validation, and server-only persistence with no endpoint or UI.
Batches preserve the original documents, SHA-256, and source; versions are insert-only,
and the pointers control atomic activations with history.

First real run on a disposable local database: 7 batches, 38 reviewed exercises,
2 workout versions, 14 sessions, 87 prescriptions, 1 nutrition version,
5 meals, 20 options, 6 day types, 30 links, and 2 activations. Second
run: `no-op`, with no new records or activations.

Complete local gates passed, including 85 unit/validator tests with
coverage above 80%, 17 integration tests on a real PostgreSQL, 29 script
regressions, format, lint, structure, types, data, build, and audit with no findings.
Tests verify a new version with a stable ID, conflict, real rollback, concurrency,
nutrition references, invalid pointers, cycles, and operational preservation.

Operational documentation in `docs/operations/E05.md`. No JSON
plans, schemas, migration, shells, personal data, or external infrastructure were changed.
The Docker validation remains pending in KZ-E05-T02; the sequence authorization
does not declare it complete.

Authorized semantic refinement: feature `plan-definition-import`, use case
`importVersionedPlanDefinitions`, separate persistence steps receiving the
same transaction, and explicit mappers. The manifest was converted into
named properties, validation rules were separated, and the CLI no longer duplicates validation. The database
client is created only after validation; error code and report were kept.
Complete gates were rerun after the refinement, including regressions for
manifest publication, single validation, and a CLI smoke test over existing data
with a `no-op` result.

Recorded a permanent convention on semantics and readability in the architecture, with
a mandatory reference in AGENTS and a semantic review checklist in the PR
template, as requested by the owner. The convention guides names, responsibilities,
external formats, tests, and the preservation of boundaries and atomicity.
