---
id: KZ-E08-T05
epic: KZ-E08
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E08-T04]
---

# Release the personal MVP

## Objective

Promote the validated version to production and close the personal MVP of Diet and Workout.

## Inputs

- `docs/plans/release/E08.md`: epic plan.
- `docs/decisions/PUBLIC-SINGLE-WORKSPACE-MODE.md`: accepted public exposure.
- `.github/PULL_REQUEST_TEMPLATE/release-promotion.md`: promotion PR template.
- Runbook and evidence approved in KZ-E08-T04.

## Deliverables

- Production available at the generated URL, with accepted public exposure.
- Release record with version, date, limitations, and next milestone.

## Subtasks

- [ ] Promote changes from `staging` to `master` through a PR.
- [ ] Run the approved migrations and import.
- [ ] Run a public read and mutation smoke test in the fixed workspace.
- [ ] Record version, date, limitations, and next milestone.

## Validation

- Read and mutate workout and nutrition data in the fixed workspace at the production URL.

## Acceptance criteria

- [ ] The `staging` to `master` PR is merged using the release-promotion template.
- [ ] The production URL passes the public read and mutation smoke test for workouts and nutrition.
- [ ] The release record lists version, date, limitations, next milestone, and the rollback path from KZ-E08-T04.

## Result

Not started.
