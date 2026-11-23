---
id: PB-E00-T04
epic: PB-E00
project: playbook
repository: fradelli/playbook
depends_on: [PB-E00-T01]
---

# Create the roadmap check

## Objective

Automate the validation rules in `CLAUDE.md` with `npm run roadmap:check`, run locally and in CI on every pull request.

## Inputs

- `CLAUDE.md` — section "Validation".
- `fradelli/nextjs-kaizen-app: scripts/validate-documentation.mjs` and `scripts/validate-governance.mjs` — existing checks to reuse where they fit.

## Deliverables

- `package.json` with the `roadmap:check` script.
- `scripts/roadmap-check.mjs` and its tests.
- `.github/workflows/roadmap-check.yml`.

## Subtasks

- [ ] Parse frontmatter, project indexes, epic order tables, and `ACTIVE.md` files.
- [ ] Implement every rule in "Validation", including cross-project dependencies.
- [ ] Add tests with valid and invalid fixtures.
- [ ] Run the check in CI.

## Validation

- `npm run roadmap:check` passes on the current tree.
- Each rule has a failing fixture in the tests.

## Acceptance criteria

- [ ] A pull request with a broken dependency, a missing section, or two `IN_PROGRESS` tasks in one project fails CI.

## Result

Not started.
