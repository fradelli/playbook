---
id: KZ-E00-T20
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Run CI after merges to the long-lived branches

## Objective

Run the CI workflow on pushes to `developer`, `staging`, and `master`, so the merged result is validated as the CI/CD decision requires.

## Context

Finding from the repository sweep of 2026-11-24 on `developer` (`67443f0`).

- `.github/workflows/ci.yml` triggers only on `pull_request`.
- `docs/decisions/CI-CD-GOVERNANCE.md` and `.github/PULL_REQUEST_TEMPLATE/release-promotion.md` state that deployment starts only after the merge and the post-merge CI.
- The `Governance` job reads `pull_request` from the event and cannot run on `push` as it is.

## Inputs

- `.github/workflows/ci.yml` — triggers, `concurrency` group, and the `Governance` job.
- `docs/decisions/CI-CD-GOVERNANCE.md` — section "CI de pull request" and the post-merge requirement.
- `scripts/validate-governance.mjs` — behavior when the event has no `pull_request`.

## Deliverables

- `.github/workflows/ci.yml` triggered by `push` to the three branches, with `Governance` skipped on `push`.
- A `concurrency` group that works for both event types.
- `docs/decisions/CI-CD-GOVERNANCE.md` describing the post-merge run.

## Subtasks

- [ ] Add the `push` trigger for `developer`, `staging`, and `master`.
- [ ] Skip `Governance` on `push` and keep it required on pull requests.
- [ ] Fix the `concurrency` group, which uses the pull request number.
- [ ] Update the CI/CD decision.

## Validation

- After the merge of this task's pull request, a CI run with event `push` appears for `developer` and every job except `Governance` passes.

## Acceptance criteria

- [ ] A merge into `developer` starts a CI run with event `push`.
- [ ] That run executes every job except `Governance`, and they pass.
- [ ] Pull request runs still execute `Governance`.

## Result

Not started.
