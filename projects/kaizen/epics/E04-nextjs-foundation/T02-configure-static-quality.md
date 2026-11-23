---
id: KZ-E04-T02
epic: KZ-E04
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T01]
---

# Configure static quality

## Objective
Define formatting, lint, types, and minimal tests before features.

## Inputs
- `package.json`
- `tsconfig.json`
- `src/app/page.tsx`

## Deliverables
- Configurations and scripts defined in the implementation guide.

## Subtasks
- [x] Configure formatting and lint without destructive fixes in CI.
- [x] Configure typecheck and tests.
- [x] Create import and module conventions.

## Validation
- Local commands succeed on a clean checkout.

## Acceptance criteria
- [x] Gates are fast and reproducible.

## Result
Completed by [PR #24](https://github.com/fradelli/kaizen-app/pull/24), merge commit `a2962a8f3c52018fdbf235359310622126c75be9`. Added Prettier, ESLint, Vitest, Testing Library, a minimum 80% coverage threshold, and reproducible scripts for format, lint, types, tests, and build. Quality, tests, build, and dependency audit were proven; CI, data integrity, and manual validation remained out of scope.

## Documentation consolidation of 12/11/2026

The original ESLint 9/TypeScript 6 compatibility rationale is preserved; current gates belong to the scripts and configurations.

[Full original package](https://github.com/fradelli/nextjs-kaizen-app/blob/fd2269d2eaa7d55cfea724631f12fa6505d37b32/docs/implementation/tasks/E04-T02.md), SHA-256 `ba985c80365710b79f63994a702acf429404073f64cd5374b6aca42c8fade30c`. Commands, criteria, risks, and rollback record that baseline and are not a recipe for reinstalling the current application. Open items were not turned into approvals in this consolidation.
