---
id: KZ-E08-T03
epic: KZ-E08
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E08-T02, KZ-E05-T05]
---

# Prepare production

## Objective
Prepare the production database, variables, branch, and configuration without releasing the MVP.

## Inputs
- `docs/plans/release/E08.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`
- `docs/operations/BACKUP-AND-RESTORE.md`
- `.github/workflows/`
- `prisma/migrations/`
- Approved evidence from preview and from KZ-E08-T02.

## Deliverables
- Configured production environment and release checklist.

## Subtasks
- [ ] Associate `master` with production.
- [ ] Create a database and secrets exclusive to production.
- [ ] Apply migrations and import in a controlled way.
- [ ] Run CI on the promoted SHA and require evidence from preview.
- [ ] Use a pinned Vercel CLI and a prebuilt deploy.
- [ ] Confirm the generated URL, logs, external backup, and operational limits.

## Validation
- Validate the configuration without exposing secret values.

## Acceptance criteria
- [ ] Production is ready for reproducible promotion.

## Result
Not yet completed.
