---
id: KZ-E04-T03
epic: KZ-E04
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T02]
---

# Create the server-only boundary

## Objective
Prevent data access, secrets, and privileged rules from leaking to the client.

## Inputs
- `.env.example`
- `.gitignore`
- `CHANGELOG.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`
- `package.json`
- `pnpm-lock.yaml`
- `roadmap/ACTIVE.md`
- `roadmap/README.md`
- `roadmap/epics/E04-nextjs-foundation/T05-configure-minimal-ci.md`
- `src/lib/env/server.test.ts`
- `src/lib/env/server.ts`
- `src/lib/security/workspace.test.ts`
- `src/lib/security/workspace.ts`
- `tsconfig.json`

## Deliverables
- Server-only boundary and minimal environment validation defined in the guide.

## Subtasks
- [x] Isolate environment and data access.
- [x] Return minimal projections for rendering.
- [x] Prevent imports by Client Components.
- [x] Define minimal discriminated errors.

## Validation
- Build fails on an improper import in the client.
- No secret appears in the bundle.

## Acceptance criteria
- [x] Data entry has a single boundary.

## Result
Completed on 2026-09-10 with a single server-only boundary for configuration and for resolving the fixed personal workspace.

- `APP_ENV` and `PERSONAL_WORKSPACE_ID` are validated on the server with Zod, without anticipating database, session, or authentication.
- Configuration errors use a discriminated code and report only the names of invalid variables.
- The minimal workspace context is derived without client-controlled input and returned as an immutable object.
- Unit tests cover validation, absence, caching, sanitization, and workspace resolution.
- A temporary Client Component confirmed that imports from this tree make the build fail; after the probe was removed, the production build passed again.
- Frozen install, format, lint, types, tests, coverage, build, dependency audit, diff, and secret search were validated locally.

## Documentation consolidation of 12/11/2026

The server-only negative proof and environment validation remain evidence; permanent rules are in the architecture.

[Full original package](https://github.com/fradelli/nextjs-kaizen-app/blob/fd2269d2eaa7d55cfea724631f12fa6505d37b32/docs/implementation/tasks/E04-T03.md), SHA-256 `fc7dacd7e0d82458fe9a6625703e11efae6fca4a3de25d862b459754f4c70540`. Commands, criteria, risks, and rollback record that baseline and are not a recipe for reinstalling the current application. Open items were not turned into approvals in this consolidation.
