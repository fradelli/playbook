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
- `docs/plans/release/E08.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`
- `docs/decisions/PUBLIC-SINGLE-WORKSPACE-MODE.md`
- `docs/decisions/CI-CD-GOVERNANCE.md`
- `.github/workflows/`
- `prisma/migrations/`
- `src/app/`
- `tests/e2e/`

## Deliverables
- Vercel project, preview variables, and a working deploy.

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
- Run a smoke test at the preview address.

## Acceptance criteria
- [ ] Preview builds from Git with no versioned secret.

## Result
Not yet completed.
