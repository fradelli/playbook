---
id: DS-E00-T09
epic: DS-E00
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Raise the dependency audit gate to moderate

## Objective

Make the dependency audit block CI at the `moderate` level, as the dependency security remediation standard requires.

## Context

- `package.json` runs `npm audit --audit-level=high`; on `145bb6e` it hides 15 moderate advisories.
- All 15 come from development dependencies; `npm audit --omit=dev --audit-level=moderate` finds none.
- The affected chains are `eslint` and `typescript-eslint` (`minimatch`), `style-dictionary` (`glob`, `minimatch`), `@storybook/react-vite` (`glob`), and `qs`.
- `npm audit` suggests a fix for `style-dictionary` and `@storybook/react-vite` only by downgrading to an older major.

## Inputs

- `package.json` — `audit` script and development dependencies.
- `package-lock.json` — resolved versions of the affected packages.
- `fradelli/playbook: standards/general/dependency-security-remediation.md` — whole file.

## Deliverables

- `package.json` with `npm audit --audit-level=moderate`.
- Updated development dependencies or reviewed `overrides` that clear every moderate advisory.
- A dedicated remediation pull request with the decision trail the standard requires.

## Subtasks

- [ ] Update `eslint` and `typescript-eslint` to the versions without the `minimatch` advisory.
- [ ] Resolve the `glob`, `minimatch`, and `qs` chains without downgrading `style-dictionary` or Storybook to an older major.
- [ ] Change the `audit` script to `--audit-level=moderate`.

## Validation

- `npm audit --audit-level=moderate` exits with code 0.
- `npm run ci` passes.

## Acceptance criteria

- [ ] The `audit` script in `package.json` uses `--audit-level=moderate`.
- [ ] `npm audit --audit-level=moderate` reports 0 vulnerabilities on the merged `main`.
- [ ] No `style-dictionary` or `@storybook/*` package moves to an older major version.

## Result

Not started.
