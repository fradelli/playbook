---
id: KZ-E12-T17
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Enable type-aware and accessibility lint rules

## Objective

Add the type-aware rules that catch unhandled promises and the recommended accessibility rules to the ESLint gate.

## Context

Finding from the repository sweep of 2026-11-24 on `developer` (`67443f0`).

- `eslint.config.mjs` uses `eslint-config-next` plus two extra rules; no type-aware rule runs, so `no-floating-promises` and `no-misused-promises` are off.
- `eslint-config-next` enables only 6 `jsx-a11y` rules.
- Server Actions and client transitions return promises, so an unhandled one hides a failed mutation.

## Inputs

- `eslint.config.mjs` — current configuration.
- `package.json` — `lint` script and ESLint version.
- `tsconfig.json` — project used by type-aware rules.

## Deliverables

- `eslint.config.mjs` with `parserOptions.projectService`, `@typescript-eslint/no-floating-promises`, `@typescript-eslint/no-misused-promises`, and the `jsx-a11y` recommended set.
- Code fixes for every new error, or a justified inline exception.

## Subtasks

- [ ] Enable the type-aware rules and measure the lint time.
- [ ] Enable the `jsx-a11y` recommended rules.
- [ ] Fix the reported errors in small commits.

## Validation

- `pnpm lint` passes with `--max-warnings=0`.
- A file with an unawaited promise fails `pnpm lint`.

## Acceptance criteria

- [ ] `pnpm lint` reports `@typescript-eslint/no-floating-promises` for an unawaited promise.
- [ ] The `jsx-a11y` recommended rules are enabled for `src/`.
- [ ] `pnpm lint` passes on `developer` after the change.

## Result

Not started.
