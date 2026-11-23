---
id: KZ-E12-T01
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T13]
---

# Sanitize dependencies and overrides

## Objective
Ensure every dependency uses an exact version and every pnpm override still matches a resolved package and a current reason.

## Context

Findings from the 2026-11-23 audit:

- `lucide-react` uses `^1.71.0`, which contradicts `save-exact=true` and the architecture rule of exact versions.
- `pnpm-workspace.yaml` has overrides with the selectors `@prisma/config@7.10.0` and `prisma@7.10.0`, but the lockfile resolves 7.10.1; `mysql2` resolves to 3.24.4, not to the 3.23.1 of the override.
- `minimumReleaseAgeExclude` mentions `@fradelli/ui@0.3.0 || 0.6.0`, while the package comes from `vendor/`.

## Inputs
- `package.json` — `dependencies` and `devDependencies`.
- `pnpm-workspace.yaml` — `overrides` and `minimumReleaseAgeExclude`.
- `pnpm-lock.yaml` — resolved versions.
- `docs/architecture/TARGET-ARCHITECTURE.md` — section "Stack escolhida" (Chosen stack).

## Deliverables
- `package.json` with exact versions only.
- `pnpm-workspace.yaml` with overrides that match the current lockfile, each with its corresponding security advisory, or removed when the parent package already fixes the issue.
- Updated `minimumReleaseAgeExclude`.

## Subtasks
- [ ] Pin the `lucide-react` version.
- [ ] Check each override against the lockfile and the security advisory.
- [ ] Remove or update overrides that have no effect.
- [ ] Update the minimum-age exclusions.

## Validation
- `pnpm install --frozen-lockfile` and `pnpm audit --audit-level=moderate` pass.
- `pnpm why <package>` confirms the version applied by each remaining override.

## Acceptance criteria
- [ ] No direct dependency uses a version range.
- [ ] No override is left without effect or without a recorded reason.

## Result
Not started.
