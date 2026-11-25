---
id: KZ-E00-T21
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T20]
---

# Extract the repeated CI setup into a composite action

## Objective

Replace the setup steps repeated in every CI job with one local composite action.

## Context

Finding from the repository sweep of 2026-11-24 on `developer` (`67443f0`).

- Six jobs in `.github/workflows/ci.yml` repeat checkout, pnpm setup, Node.js setup with the `@fradelli` registry, and `pnpm install --frozen-lockfile` with `NODE_AUTH_TOKEN`.
- A change to the Node.js, pnpm, or registry setup has to be made six times.

## Inputs

- `.github/workflows/ci.yml` — the repeated steps and their `with` values.

## Deliverables

- `.github/actions/setup/action.yml` with the pnpm, Node.js, registry, and install steps.
- `.github/workflows/ci.yml` using it in every job that installs dependencies.

## Subtasks

- [ ] Create the composite action with an input to skip the install.
- [ ] Replace the repeated steps in each job.
- [ ] Keep pinned action SHAs and job permissions unchanged.

## Validation

- The pull request CI runs every job with the same names and results as before.
- `rg -c "pnpm/action-setup" .github/workflows/ci.yml` returns 0.

## Acceptance criteria

- [ ] `pnpm/action-setup` and `actions/setup-node` appear only in `.github/actions/setup/action.yml`.
- [ ] Every CI check keeps its name, and all pass on the pull request.

## Result

Not started.
