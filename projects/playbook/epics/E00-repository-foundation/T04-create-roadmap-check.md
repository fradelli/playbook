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

- [x] Parse frontmatter, project indexes, epic order tables, and `ACTIVE.md` files.
- [x] Implement every rule in "Validation", including cross-project dependencies.
- [x] Add tests with valid and invalid fixtures.
- [x] Run the check in CI.

## Validation

- `npm run roadmap:check` passes on the current tree.
- Each rule has a failing fixture in the tests.

## Acceptance criteria

- [x] A pull request with a broken dependency, a missing section, or two `IN_PROGRESS` tasks in one project fails CI.

## Result

`scripts/roadmap-check.mjs` checks every rule in `CLAUDE.md` with Node.js only, no packages. `npm run roadmap:check` passed on the tree with 42 tasks (design system and playbook). `npm test` runs 20 cases: one valid roadmap, wrapped frontmatter lists, and one failing fixture per rule. `.github/workflows/roadmap-check.yml` runs the tests, the check, and `git diff --check` on pull requests and on pushes to `main`, with the same pinned actions and Node.js version as the Kaizen CI.

Links under `docs/` stay unchecked until PB-E00-T03 moves the legacy Suna documents. The Kaizen scripts listed in Inputs were not reused: their rules are Kaizen-specific (Portuguese headings, a single project, the `codex/` branch format).
