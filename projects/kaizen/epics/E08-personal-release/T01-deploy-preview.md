---
id: KZ-E08-T01
epic: KZ-E08
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T05, KZ-E07-T05]
---

# Publish preview

## Objective

Connect the project to Vercel and publish a verifiable preview without promoting production.

## Inputs

- `docs/plans/release/E08.md`: epic plan.
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`: privacy and operations decision.
- `docs/decisions/PUBLIC-SINGLE-WORKSPACE-MODE.md`: public mode decision.
- `docs/decisions/CI-CD-GOVERNANCE.md`: CI/CD rules.
- `.github/workflows/`: pipelines to adjust.
- `prisma/migrations/`: migrations applied before the deploy.
- `src/app/`: application under test.
- `tests/e2e/`: smoke tests.

## Deliverables

- Vercel project, preview variables, and a working deploy.
- Documented promotion and failure diagnosis.

## Subtasks

- [ ] Link the repository and define the build directory.
- [ ] Configure a database and secrets exclusive to preview.
- [ ] Associate `staging` with the stable preview.
- [ ] Run CI on the promoted SHA and confirm the immutable checkout.
- [ ] Use a pinned Vercel CLI, a prebuilt build, and a single deploy run at a time.
- [ ] Apply compatible migrations before the deploy.
- [ ] Run a public read and mutation smoke test in the fixed workspace.
- [ ] Document promotion and failure diagnosis.

## Validation

- The smoke test (public read and mutation in the fixed workspace) passes at the preview address.
- `git grep` finds no secret value in the repository.

## Acceptance criteria

- [ ] The preview URL serves a build produced from the `staging` commit.
- [ ] The preview uses a database and secrets that production does not use.
- [ ] No secret value is versioned in the repository.

## Result

Not started.
