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
- `docs/plans/release/E08.md`
- `docs/decisions/PUBLIC-SINGLE-WORKSPACE-MODE.md`
- `.github/PULL_REQUEST_TEMPLATE/release-promotion.md`
- Runbook and evidence approved in KZ-E08-T04.

## Deliverables
- Production available at the generated URL, with accepted public exposure and a documented release.

## Subtasks
- [ ] Promote changes from `staging` to `master` through a PR.
- [ ] Run the approved migrations and import.
- [ ] Run a public read and mutation smoke test in the fixed workspace.
- [ ] Record version, date, limitations, and next milestone.

## Validation
- Confirm public content and operations in the fixed workspace for workouts and nutrition.

## Acceptance criteria
- [ ] The personal MVP works according to the documented public risk and has a rollback path.

## Result
Not yet completed.
