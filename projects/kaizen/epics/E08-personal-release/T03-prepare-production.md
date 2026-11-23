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

- `docs/plans/release/E08.md`: epic plan.
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`: privacy and operations decision.
- `docs/operations/BACKUP-AND-RESTORE.md`: backup rules.
- `.github/workflows/`: pipelines to adjust.
- `prisma/migrations/`: migrations to apply.
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

- Inspect the Vercel production settings and the pipeline variables without printing secret values.

## Acceptance criteria

- [ ] Vercel production is associated with `master`.
- [ ] Production uses a database and secrets that no other environment uses.
- [ ] The release checklist lists the generated URL, the external backup, and the CI and preview evidence required to promote.

## Result

Not started.
