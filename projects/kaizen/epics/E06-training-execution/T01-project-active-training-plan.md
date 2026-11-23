---
id: KZ-E06-T01
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E05-T05]
---

# Project the day's workout and execution

## Objective
Create separate server-side projections for public reading of the plan and operational reading of the workout and execution for the date in the fixed workspace.

## Inputs
- `docs/history/implementation/E06.md`
- `docs/product/P0.md`
- `docs/architecture/DATA-MODEL.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/decisions/PUBLIC-SINGLE-WORKSPACE-MODE.md`
- `data/active.json`
- `data/exercises.json`
- `src/lib/security/workspace.ts`
- `src/lib/env/server.ts`
- `src/lib/db/client.ts`
- `src/features/plan-definition-import/domain/plan-definition-source.types.ts`
- `src/features/plan-definition-import/data/plan-definition.mapper.ts`
- `prisma/schema.prisma`
- `prisma/models/platform.prisma`
- `prisma/models/training.prisma`
- `tests/integration/fixtures/database.fixture.ts`
- `tests/integration/fixtures/import-database.fixture.ts`

## Deliverables
- Public DTO of the active plan, without operational state.
- Discriminated DTO of the day in the fixed workspace, with assignment, preparation, sets,
  comments, status, and persisted revisions.
- Read use cases independent of Prisma and a server-only Prisma adapter.
- Unit tests and PostgreSQL integration tests covering history and isolation.

## Implementation decisions

- The public projection resolves the `training`-domain `PlanActivation` in the
  current `APP_ENV` and uses only the active, non-superseded version.
- The day projection resolves the workspace through `resolveFixedWorkspace()`; its public API
  receives the civil date, never `workspace_id`.
- An assigned day uses the version linked to the assignment/execution. Switching the activation
  does not change the historical projection.
- A day without an assignment returns the `unassigned` state and the selectable sessions of the
  active version; it does not infer the schedule from names, times, or day of the week.
- The `training`, `mobility`, `rest`, and `unassigned` states form a discriminated
  union. Impossible fields do not appear as generic optionals.
- Prescriptions are the base of the projection. Existing executions are overlaid by
  identity; a set not yet persisted appears as `pending` with `null` values,
  without creating a row in the database.
- Preparation remains separate from the main workout. Mobility does not receive
  invented sets or load, and rest does not create artificial exercises.
- Exercises follow `ordinal`; sets follow `set_number`; selectable sessions
  use stable ordering by identifier. Ties or inconsistent references
  return a typed error instead of an ambiguous partial projection.
- `normalized_dose`, `definition`, and Prisma `Decimal` are converted at the data
  boundary. Generated types, raw JSON, and Prisma objects do not cross
  into the application or the UI.
- A source `null` stays `null`. Absence does not become zero, empty text, body
  weight, or an inferred recommendation.
- The related reads of the day use a consistent PostgreSQL snapshot. The
  task does not write, does not create an assignment, and does not materialize a missing execution.

## Plan by file

### Domain

- Create `src/features/training/domain/training-day.types.ts` with civil date,
  kinds, status, measures, and internal read models with no Prisma dependency.
- Create `src/features/training/domain/training-day.rules.ts` to validate the
  `YYYY-MM-DD` date, normalized dose, and consistency between measurement, sides, and load.
- Create `src/features/training/domain/training-projection.error.ts` with stable
  codes for missing plan, invalid activation, and inconsistent reference.
- Add unit tests next to the rules and errors that have behavior.

### Application

- Create `src/features/training/application/training-dto.ts` with the serializable
  contracts `PublicTrainingPlanDto` and the discriminated `TrainingDayDto`.
- Create `src/features/training/application/training-repository.ts` with the smallest
  read port needed by the two use cases.
- Create `src/features/training/application/get-public-training-plan.ts` and its
  types file to resolve the activation and assemble only public definitions.
- Create `src/features/training/application/get-training-day.ts` and its types
  file to resolve workspace, date, historical version, and operational state.
- Keep orchestration explicit: resolve context, read snapshot, validate
  references, project the DTO. Do not create a generic service or a global barrel.

### Data and server-only composition

- Create `src/features/training/data/prisma-training-repository.ts` with explicit selects,
  a mandatory `workspaceId + civilDate` filter, and reading of the active plan
  by `logicalEnvironment + domain + supersededAt`.
- Create `src/features/training/data/prisma-training-repository.types.ts` only
  for the payloads of the selects used and `prisma-training.mapper.ts` to convert
  database/JSON/Decimal into semantic read models.
- Create `src/features/training/data/training-queries.ts` as a `server-only`
  composition root: it connects Client, `APP_ENV`, and `resolveFixedWorkspace()` to the
  use cases. This module will be the entry point consumed by the page in KZ-E06-T02.
- Reuse `src/lib/db/client.ts`; do not create a Client, HTTP endpoint, cache, or
  new environment configuration.

### Tests

- Test the use cases with small fakes: plan available/missing, day without
  assignment, workout, mobility, rest, and reference failure.
- Create `tests/integration/training-projections.test.ts` on real PostgreSQL,
  reusing the disposable fixtures and the canonical importer.
- Extend the fixture only with explicit factories for assignment, execution, and
  sets; do not couple tests to random IDs or to implicit database ordering.
- Prove that another workspace on the same date does not appear, that an external
  `workspace_id` cannot be passed to the public query, and that all relations read
  belong to the resolved workspace.
- Prove that a new activation changes the public plan and the options of an
  unassigned day, but does not rewrite a day already linked to the previous version.
- Prove partial overlay: missing sets stay pending, persisted values and
  revisions are restored, `null` load stays absent, and ordering is stable.
- Test inconsistent snapshots with a controlled fixture and require a typed error, without
  leaking SQL, private paths, or the source document.

## Execution order

1. Fix the discriminated DTOs and read models from the product and the schema.
2. Implement pure rules and use cases with unit tests.
3. Implement minimal Prisma selects and server-only mappers.
4. Assemble the composition root with environment and fixed workspace.
5. Cover canonical integration, isolation, history, and partial projection.
6. Run semantic review and all proportional gates.

## Subtasks
- [x] Resolve the active plan pointer.
- [x] Resolve workspace and date without accepting ownership from the client.
- [x] Combine assignment, version, and execution without losing history.
- [x] Order preparation, exercises, and sets deterministically.
- [x] Preserve `null` and unknowns.
- [x] Cover missing plan and invalid references.
- [x] Ensure Prisma types and raw JSON do not escape the data layer.
- [x] Ensure no API accepts `workspace_id` from the browser.

## Validation
- The projection matches the migrated canonical data.
- `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, unit tests,
  PostgreSQL integration, coverage, build, `pnpm run ci`, and `git diff --check`.
- Search for secrets, private paths, and forbidden imports between layers.

## Acceptance criteria
- [x] The plan DTO contains no operational data; the workspace DTO serves the day page without accepting ownership from the client.
- [x] Active plan, unassigned day, workout, mobility, and rest have explicit, tested states.
- [x] History stays on the presented version even after a new activation.
- [x] Reads from another workspace and invalid references never produce a partial DTO.

## Out of scope

- Changing schema or migration, importing data again, or adding a dependency.
- Changing `src/app/treino/page.tsx` or creating React components; that belongs to KZ-E06-T02.
- Creating a Server Action, assignment, or write; that belongs to KZ-E06-T03.
- Implementing login, session, cookie, pairing, multiple users, or public cache.

## Result
Server-side projections of the public plan and the workout for the date implemented with
discriminated DTOs, pure rules, Prisma-independent use cases, and a PostgreSQL
repository with a consistent snapshot. Integration proved
workspace isolation, historical preservation, partial overlay, and rejection of
inconsistent references. `pnpm run ci` passed fully with 177 unit
tests, 33 PostgreSQL tests, a production build, and an audit with no vulnerabilities.
