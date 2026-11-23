---
id: DS-E00-T06
epic: DS-E00
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Streamline the quality gates

## Objective

Make every gate in `npm run ci` reliable on Windows and Linux and stop running the same checks several times.

## Context

- `npm run ci` runs `icons:check` and `tokens:check`, and `pack:check` runs `build`, which runs both again. `icons:check` takes about 144 s locally.
- `fixtures:next` failed twice locally with `EPERM unlink` on `.tmp/next-icons/node_modules/@tailwindcss/oxide-win32-x64-msvc/*.node`; it passes in CI.
- `scripts/copy-styles.mjs` throws a Portuguese error message.
- Every merge to `main` runs the full gate in both the CI and Release workflows.

## Inputs

- `package.json` — `build`, `pack:check`, and `ci` scripts.
- `scripts/test-icon-next-fixture.mjs` — fixture directory cleanup.
- `scripts/copy-styles.mjs` — error message.
- `.github/workflows/ci.yml` and `.github/workflows/release.yml` — validation steps.

## Deliverables

- `package.json` scripts without duplicated checks.
- `scripts/test-icon-next-fixture.mjs` removing the fixture directory with retries or using a unique temporary directory.
- `scripts/copy-styles.mjs` with an English message.
- A recorded decision on whether the Release workflow repeats the full gate.

## Subtasks

- [ ] Split a raw build script from the checked build used by `pack:check`.
- [ ] Make the Next fixture cleanup resilient to locked native files.
- [ ] Translate the error message.
- [ ] Decide and document the Release validation scope.

## Validation

- `npm run ci` passes on Windows and in GitHub Actions.
- `icons:check` runs once per `npm run ci`.

## Acceptance criteria

- [ ] No gate fails locally for environmental reasons that CI does not reproduce.
- [ ] Each check runs once per pipeline.

## Result

Not started.
