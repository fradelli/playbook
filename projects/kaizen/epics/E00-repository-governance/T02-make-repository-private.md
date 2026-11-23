---
id: KZ-E00-T02
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Make the repository private

## Objective
Prevent public exposure of the personal data that will be migrated in the following epics.

## Inputs
- Visibility settings of `fradelli/kaizen-app` on GitHub.

## Deliverables
- Repository with `PRIVATE` visibility confirmed.

## Subtasks
- [ ] Change the visibility on GitHub.
- [ ] Confirm the required access.
- [ ] Verify the visibility with `gh repo view`.

## Validation
- `gh repo view fradelli/kaizen-app --json isPrivate` returns `true`.

## Acceptance criteria
- [ ] The repository is not publicly accessible.
- [ ] The migration of personal data can be unblocked.

## Result
Canceled on 2026-08-31 by the owner's decision. `kaizen-app` will remain public to make free CI/CD governance and GitHub rules easier; content exposure is now controlled by an allowlist and per-artifact classification.
