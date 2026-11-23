---
id: KZ-E04-T05
epic: KZ-E04
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T02, KZ-E04-T03, KZ-E04-T06]
---

# Configure minimal CI

## Objective
Implement the stable gates approved in the CI governance for pull requests and promotions.

## Context

CI must protect the readiness validation and the Design System integration before the shell. KZ-E04-T08 will extend the workflow with minimal access to the already published private package.

## Inputs
- `.github/dependabot.yml`
- `.github/workflows/ci.yml`
- `docs/decisions/CI-CD-GOVERNANCE.md`
- `docs/guides/NUTRITION.md`
- `docs/guides/TRAINING-GUIDE.md`
- `.github/pull_request_template.md`
- `.github/PULL_REQUEST_TEMPLATE/release-promotion.md`
- `AGENTS.md`
- `CHANGELOG.md`
- `data/AGENTS.md`
- `data/active.json`
- `data/exercises.json`
- `data/nutrition/active.json`
- `data/nutrition/plans/2026-09-personal-v1.json`
- `data/nutrition/reviews/e02-t03-review-metadata.json`
- `data/plans/2026-08-performance-v1.json`
- `data/plans/2026-08-performance-v2.json`
- `data/profile.json`
- `data/reviews/2026-08-review.json`
- `data/schedule.json`
- `package.json`
- `pnpm-lock.yaml`
- `roadmap/ACTIVE.md`
- `roadmap/README.md`
- `roadmap/epics/E04-nextjs-foundation/T07-validate-design-system-readiness.md`
- `schemas/exercise-library.schema.json`
- `schemas/nutrition-plan.schema.json`
- `schemas/training-plan.schema.json`
- `scripts/validate-data.mjs`
- `scripts/validate-data.test.mjs`
- `scripts/validate-governance.mjs`
- `scripts/validate-governance.test.mjs`
- `vitest.config.ts`

## Deliverables
- Reusable PR workflow.
- Mechanical validation of branches, titles, descriptions, and direction.
- Rulesets for the protected branches.

## Out of scope

- Configuring credentials or access to GitHub Packages before KZ-E04-T08.
- Installing `@fradelli/ui`, Tailwind, or fonts.

## Subtasks
- [x] Run a reproducible install.
- [x] Create the stable jobs `Governance`, `Quality`, `Test`, `Data integrity`, `Build`, and `Dependency audit`.
- [x] Run lint, types, format, tests, documentation validations, build, and `moderate` audit.
- [x] Validate task ID, template, and the `developer -> staging -> master` matrix.
- [x] Configure rulesets without allowing direct push.
- [x] Configure cache only if it brings a measured benefit.

## Validation
- The workflow passes and fails deliberately on a controlled regression.
- Local implementation approved by `pnpm run ci`; remote execution and rulesets depend on publishing the PR.

## Acceptance criteria
- [x] The three protected branches receive only changes that pass the applicable gates.

## Risks

- Local and remote workflows running different matrices.
- Anticipating package authentication without a real consumer.

## Rollback

Revert the defective workflow without removing or relaxing the local gates.

## Result
Completed on 2026-09-10. PR #27 ran all six remote gates successfully. The rulesets `developer-pr-gates` and `promotion-pr-gates` require a PR and the stable checks on `developer`, `staging`, and `master`, with no bypass, deletion, or force push. Tasks use squash, promotions use merge commit, and rebase merge is disabled.

## Documentation consolidation of 12/11/2026

The initial Action SHAs remain at the source. Current rules are in CI-CD-GOVERNANCE/PULL-REQUEST-STANDARD and in the validator.

[Full original package](https://github.com/fradelli/nextjs-kaizen-app/blob/fd2269d2eaa7d55cfea724631f12fa6505d37b32/docs/implementation/tasks/E04-T05.md), SHA-256 `ba71abd93960777e303ae6b3e5c3a07083e7f7b3bd7a056231a72e08ec563b7d`. Commands, criteria, risks, and rollback record that baseline and are not a recipe for reinstalling the current application. Open items were not turned into approvals in this consolidation.
