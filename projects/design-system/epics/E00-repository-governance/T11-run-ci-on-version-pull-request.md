---
id: DS-E00-T11
epic: DS-E00
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Run CI on the version pull request without manual approval

## Objective

Make the CI workflow start on the Changesets version pull request as soon as the Release workflow opens or updates it.

## Context

- The Release workflow opens the version pull request with `changesets/action` and `secrets.GITHUB_TOKEN`; GitHub records `github-actions[bot]` as the actor.
- CI run `45108955414` for PR #22 was created at 2026-11-23 03:57 UTC with status `action_required`; it ran only on attempt 2, started manually by a maintainer at 11:40 UTC.
- Unknown: whether the repository setting for workflow approval or the use of `GITHUB_TOKEN` causes the wait.
- DS-E04-T03 needs a green CI on its version pull request.

## Inputs

- `.github/workflows/release.yml` — `changesets/action` step and its token.
- `.github/workflows/ci.yml` — `on` triggers.
- `docs/governance/releasing.md` — version pull request steps.

## Deliverables

- The cause of the `action_required` status, recorded in this task `Result`.
- `.github/workflows/release.yml` or the repository Actions settings changed so CI starts without approval.
- `docs/governance/releasing.md` describing how CI runs on the version pull request.

## Subtasks

- [ ] Reproduce the status on the next version pull request or read the repository Actions approval settings.
- [ ] Apply the fix (approval setting, GitHub App token, or workflow trigger).
- [ ] Update the release runbook.

## Validation

- `gh run list --branch changeset-release/main` shows a CI run that starts without a manual re-run after the Release workflow updates the version pull request.

## Acceptance criteria

- [ ] The next version pull request gets a CI run whose first attempt executes, with no `action_required` status.
- [ ] `docs/governance/releasing.md` names the token and settings that let CI run on the version pull request.

## Result

Not started.
