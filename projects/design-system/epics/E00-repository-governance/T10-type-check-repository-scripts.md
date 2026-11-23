---
id: DS-E00-T10
epic: DS-E00
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Type-check the repository scripts

## Objective

Make `npm run typecheck` cover the build and validation scripts that guard every release.

## Context

- `tsconfig.json` includes `scripts/**/*.mjs` but sets neither `allowJs` nor `checkJs`, so TypeScript ignores those files.
- On `145bb6e`, `tsc --listFilesOnly` lists 1,617 files under `src/` and none under `scripts/`.
- The scripts build tokens and styles, generate icons, validate the tarball, run the fixtures, and guard publishing.

## Inputs

- `tsconfig.json` — `compilerOptions` and `include`.
- `scripts/*.mjs` — the seven scripts.

## Deliverables

- `tsconfig.json`, or a dedicated `tsconfig.scripts.json` run by `npm run typecheck`, that checks `scripts/*.mjs`.
- Scripts fixed or annotated with JSDoc types until the check passes.

## Subtasks

- [ ] Enable type checking for `scripts/*.mjs`.
- [ ] Fix or annotate the reported errors.

## Validation

- `npx tsc --noEmit --listFilesOnly` lists every file in `scripts/`.
- `npm run typecheck` passes.

## Acceptance criteria

- [ ] `npm run typecheck` checks all seven files in `scripts/`.
- [ ] A type error added on purpose to a script makes `npm run typecheck` fail.

## Result

Not started.
