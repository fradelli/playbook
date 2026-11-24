---
id: KZ-E12-T21
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E12-T01]
---

# Triage the open dependency updates and plan the major upgrades

## Objective

Clear the open Dependabot pull requests and record a plan for each pending major upgrade.

## Context

Finding from the repository sweep of 2026-11-24 on `developer` (`67443f0`).

- Dependabot pull requests #94 (production group), #96 (`jsdom` 30 to 31, major), and #99 (`@testing-library/user-event`) are open.
- `pnpm outdated` lists majors: `eslint` 9 to 10, `@vitest/coverage-v8` 4 to 5 (with `vitest`), and `@testing-library/jest-dom` 7 to 8.
- `.github/dependabot.yml` groups only minor and patch updates.

## Inputs

- `package.json` and `pnpm-lock.yaml` — current versions.
- `.github/dependabot.yml` — groups and update types.
- `fradelli/playbook: standards/general/dependency-security-remediation.md` — rules for dependency changes.

## Deliverables

- Each open Dependabot pull request merged or closed with a reason.
- A plan in the task Result for each major upgrade: order, breaking changes, and the task that will do it.
- `.github/dependabot.yml` updated if majors need a different grouping.

## Subtasks

- [ ] Review and merge or close #94, #96, and #99.
- [ ] Read the release notes of each major and record the breaking changes.
- [ ] Register one task per major upgrade that needs code changes.

## Validation

- `gh pr list --author app/dependabot` shows no pull request older than one week.
- `pnpm run ci` passes after the merged updates.

## Acceptance criteria

- [ ] Pull requests #94, #96, and #99 are merged or closed with a comment.
- [ ] Each pending major has a registered task or a recorded decision to wait.

## Result

Not started.
