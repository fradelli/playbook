---
id: DS-E01-T05
epic: DS-E01
project: design-system
repository: fradelli/design-system
depends_on: [DS-E00-T09]
---

# Plan the development dependency major upgrades

## Objective

Decide when and in which order the package adopts the new majors of its development tools.

## Context

On 2026-11-23, `npm outdated` reported new majors for `typescript` (6 to 7), `@vitest/browser-playwright` (4 to 5), `jsdom` (30 to 31), `@testing-library/jest-dom` (7 to 8), and `@types/node` (24 to 26). The fixtures already type-check with `typescript@7.0.2`.

## Inputs

- `package.json` — `devDependencies` and `engines`.
- `fixtures/npm-consumer/package.json` and `fixtures/pnpm-consumer/package.json` — TypeScript version.

## Deliverables

- An upgrade order with one pull request per major, recorded in this task `Result`.
- `@types/node` kept on the major that matches `engines.node`.

## Subtasks

- [ ] Read the breaking changes of each major.
- [ ] Order the upgrades by risk and dependency.
- [ ] Register a task for each upgrade that is approved.

## Validation

- Each registered upgrade task lists `npm run ci` in its validation.

## Acceptance criteria

- [ ] This task `Result` lists each major with a decision: upgrade now, upgrade later with a reason, or skip with a reason.
- [ ] An approved upgrade has its own `DS-` task.

## Result

Not started.
