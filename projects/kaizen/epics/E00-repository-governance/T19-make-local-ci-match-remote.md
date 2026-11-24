---
id: KZ-E00-T19
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Make the local CI command match the remote CI

## Objective

Make `pnpm run ci` run the same gates as the remote CI and fail early with a clear message when a local prerequisite is missing.

## Context

Finding from the repository sweep of 2026-11-24 on `developer` (`67443f0`).

- `pnpm run ci` needs the `database-test` container but neither starts nor checks it; without it, `test:integration` fails with "No test files found" and a migration error.
- On 2026-11-24, two local `test:coverage` runs failed because Vitest could not start fork workers (`Timeout waiting for worker to respond`); the skipped files dropped coverage to 34–41%. The same suite passed with `--maxWorkers=4`.
- The remote `Backup restore` job runs `pnpm db:recovery:check`, which `pnpm run ci` does not run.

## Inputs

- `package.json` — `ci`, `test:coverage`, `test:integration`, and `db:recovery:check` scripts.
- `.github/workflows/ci.yml` — the jobs and commands the remote CI runs.
- `vitest.config.ts` — pool and worker settings.
- `tests/integration/database.setup.ts` — the error raised when the test database is missing.
- `compose.yaml` — the `test` and `backup-test` profiles.
- `README.md` — the section that starts `database-test`.

## Deliverables

- `pnpm run ci` running every remote gate, or a documented list of the gates it skips and why.
- A preflight step that stops with one actionable message when `database-test` is not healthy.
- A Vitest worker limit that keeps the coverage run stable on the maintainer's Windows machine.
- `README.md` describing the local CI prerequisites.

## Subtasks

- [ ] List each remote CI command and its local equivalent.
- [ ] Add the database preflight and its message.
- [ ] Set and justify the Vitest worker limit.
- [ ] Decide whether `db:recovery:check` joins `pnpm run ci` or stays remote-only.
- [ ] Update `README.md`.

## Validation

- With `database-test` stopped, `pnpm run ci` fails before the unit tests with a message naming the start command.
- With `database-test` running, `pnpm run ci` passes three times in a row on Windows with no Vitest worker error.

## Acceptance criteria

- [ ] `pnpm run ci` fails in under one minute, with a message naming `docker compose --profile test up -d --wait database-test`, when the test database is down.
- [ ] Three consecutive `pnpm run ci` runs on Windows report no `Failed to start forks worker` error.
- [ ] `README.md` lists every remote CI gate that `pnpm run ci` does not run, with the reason.

## Result

Not started.
