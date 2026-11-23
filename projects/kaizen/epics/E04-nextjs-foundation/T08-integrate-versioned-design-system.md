---
id: KZ-E04-T08
epic: KZ-E04
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T07]
---

# Integrate the versioned Design System

## Objective
Adopt exactly `@fradelli/ui@0.1.0` through GitHub Packages with reproducible install, build, and rollback.

## Context

The integration only starts after the readiness GO from KZ-E04-T07. The published package is private and versioned; read credentials stay outside the repository.

## Inputs
- `docs/evidence/design-system/E04-T07-DESIGN-SYSTEM-READINESS.md`
- `docs/decisions/SHARED-DESIGN-SYSTEM-ADOPTION.md`
- `.npmrc`
- `package.json`
- `pnpm-lock.yaml`
- `postcss.config.mjs`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/page.module.css`
- `src/app/foundations/page.tsx`
- `src/app/foundations/page.test.tsx`
- `.github/workflows/ci.yml`
- `CHANGELOG.md`
- `https://github.com/fradelli/design-system/blob/3e0c23f591ff458ab9e3e74dc44bb0cdba068a03/package.json`

## Scope

- Configure the public registry scope without versioning authentication.
- Install exact versions of the package and the compatible CSS toolchain.
- Configure Tailwind CSS 4 and PostCSS.
- Load variable Inter and expose `--font-inter` on the root element.
- Explicitly enable dark mode, import the public CSS once, and register `dist` in `@source`.
- Create `/foundations` as a smoke test with no domain.
- Remove only the local tokens and states replaced by the package.
- Extend CI to install the private package with minimal access.

## Out of scope

- Building the final shell, diet/workout pages, or the shared calendar.
- Copying package code into Kaizen.
- Adding product-specific flags or variants to the Design System.

## Deliverables
- Reproducible dependencies and lockfile.
- Tailwind/PostCSS configuration and root integration of font, theme, and CSS.
- Foundations page and smoke tests.
- CI authorized to read only the necessary package.

## Subtasks
- [x] Pin `@fradelli/ui@0.1.0` without a range or local path.
- [x] Apply the public contract reconfirmed in KZ-E04-T07.
- [x] Create foundations without any diet, workout, habit, or task concept.
- [x] Validate clean install, accessibility, responsiveness, and build.
- [x] Record the previous version or the pre-adoption commit for rollback.

## Validation
- Run `pnpm install --frozen-lockfile` on a clean checkout.
- Run format check, lint, typecheck, tests, coverage, and build locally and in CI.
- Inspect generated CSS, focus, keyboard, contrast, 320 px, and 200% zoom.
- Confirm a single React, absence of credentials, and a single import of the public CSS.

## Acceptance criteria
- [x] `@fradelli/ui` uses an exact version from GitHub Packages.
- [x] Inter, `--font-inter`, dark mode, public CSS, and `@source` are active at the root.
- [x] Foundations proves tokens and primitives are available without domain.
- [x] Frozen install and build pass in a clean environment and in CI.
- [x] Rollback by version or commit is documented and testable.

## Risks

- Authentication or permission failure on the private package.
- Duplicated CSS, wrong import order, or omitted classes.
- Two copies of React or incompatibility during the `0.x` line.

## Rollback

Revert the PR on the first adoption to restore the pre-adoption base `26f1416`. On later upgrades, restore the exact version and lockfile of the last known good release; never copy code or republish the same version number.

## Result
Implementation and local validation completed on 2026-09-11 on top of the pre-adoption base `26f1416`:

- `@fradelli/ui@0.1.0`, Tailwind CSS `4.3.3`, `@tailwindcss/postcss@4.3.3`, and PostCSS `8.5.28` were pinned in the manifest and lockfile;
- frozen install passed in a temporary worktree without a prior `node_modules`;
- `/foundations` exercises public exports, states, labeled colors, fields, focus, reduced motion, and a keyboard-operated sheet;
- the 320 px viewport and 200% zoom were inspected with no horizontal overflow in the final condition;
- `pnpm run ci`, the single React tree `19.2.8`, compiled CSS, and a sanitized secret scan passed locally;
- CI received `packages: read` only in the four jobs that install dependencies and uses `GITHUB_TOKEN` only in the install step.

PR #30 proved the authenticated install on GitHub Actions and completed the six required gates on 2026-09-11.

## Documentation consolidation of 12/11/2026

Registry without secrets, public CSS/source, font/theme, and a single React were initial gates. The current release requires new verification; the tarball is a preview.

[Full original package](https://github.com/fradelli/nextjs-kaizen-app/blob/fd2269d2eaa7d55cfea724631f12fa6505d37b32/docs/implementation/tasks/E04-T08.md), SHA-256 `1b2b095e2b32bab9098ea848576eab1b13afdbd0a42d1935fec49b29177ec3a0`. Commands, criteria, risks, and rollback record that baseline and are not a recipe for reinstalling the current application. Open items were not turned into approvals in this consolidation.
