---
id: KZ-E00-T17
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [PB-E01-T02]
---

# Point the repository to the playbook

## Objective

Make the Kaizen repository use the playbook as its only roadmap: CI, documentation links, and agent instructions read `fradelli/playbook: projects/kaizen/`, and the local `roadmap/` folder is removed.

## Context

PB-E01-T02 migrated `roadmap/` to the playbook at `developer` `1c3dd48`, translated and with `KZ-` IDs. Until this task lands, two copies exist and the Kaizen CI still reads the local one. Changes to the Kaizen roadmap after the migration are made in the playbook only.

The pull request of this task changes the governance check that validates its own title. CI runs the scripts from the pull request, so the new `[KZ-E00-T17]` title is validated by the new rules.

## Inputs

- `scripts/validate-governance.mjs` and its tests — title format `[E00-T01]`, `codex/` branches, and reads of `roadmap/README.md` and `roadmap/ACTIVE.md`.
- `scripts/validate-documentation.mjs`, `scripts/verify-doc-preservation.mjs`, and their tests — task and header rules that read `roadmap/`.
- `scripts/build-roadmap-view.mjs`, its tests, `roadmap/view/`, and the `roadmap:view` script in `package.json` — the local roadmap viewer.
- `docs/` — 59 documents with links to `roadmap/` files.
- `AGENTS.md` and `CLAUDE.md` — reading order that starts at `roadmap/ACTIVE.md`.
- `.github/pull_request_template.md` and `docs/delivery/PULL-REQUEST-STANDARD.md` — title and branch format.
- `fradelli/playbook: standards/general/pull-requests.md` — the shared standard to adopt.

## Deliverables

- Governance check accepting `[KZ-E00-T00] type(scope): summary` titles and `claude/KZ-...` branches, validating task IDs against the public playbook index, and no longer reading `roadmap/`.
- Documentation check limited to `docs/`; task rules now live in the playbook `roadmap:check`.
- Links from `docs/` to `roadmap/` replaced by links to the playbook on GitHub.
- `AGENTS.md`, `CLAUDE.md`, the PR template, and the PR standard pointing to the playbook.
- `roadmap/`, including the viewer and `scripts/build-roadmap-view*`, removed. The viewer returns in the playbook with PB-E03-T01.

## Subtasks

- [ ] Confirm the playbook holds every epic and task of `roadmap/` at the current `developer`; migrate any later change first.
- [ ] Update the governance check and its tests.
- [ ] Narrow the documentation checks and their tests.
- [ ] Replace the links from `docs/` to `roadmap/`.
- [ ] Update the agent instructions, the PR template, and the PR standard.
- [ ] Remove `roadmap/`, the viewer, and its scripts, and drop `vite` from `devDependencies` if nothing else uses it.

## Validation

- `pnpm run ci` passes.
- `rg -n "roadmap/" -g '!node_modules'` finds only links to the playbook.
- A pull request titled `[E00-T01] ...` or from a `codex/` branch fails the governance check.

## Acceptance criteria

- [ ] The Kaizen repository has no roadmap of its own, and its CI validates tasks against the playbook.
- [ ] An agent starting in Kaizen reaches `projects/kaizen/ACTIVE.md` in the playbook.

## Result

Not started.
