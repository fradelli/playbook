---
id: PB-E01-T02
epic: PB-E01
project: playbook
repository: fradelli/playbook
depends_on: [PB-E00-T01]
---

# Migrate the Kaizen roadmap

## Objective

Bring the Kaizen roadmap into `projects/kaizen/`, translated to English, with `KZ-` IDs and the playbook frontmatter, preserving every status and dependency.

## Inputs

- `fradelli/nextjs-kaizen-app: roadmap/README.md` — canonical status of epics and tasks.
- `fradelli/nextjs-kaizen-app: roadmap/ACTIVE.md` — selected task and resumption notes.
- `fradelli/nextjs-kaizen-app: roadmap/OVERVIEW.md` — map by area.
- `fradelli/nextjs-kaizen-app: roadmap/epics/` — epics and tasks.

## Deliverables

- `projects/kaizen/README.md`, `ACTIVE.md`, `OVERVIEW.md`, and `epics/`.
- `KZ-` task in `projects/kaizen/` (next free `KZ-E00` ID) for the Kaizen repository: adapt `scripts/validate-governance.mjs` to `[KZ-...]` titles and `claude/` branches, replace the links from `docs/` to `roadmap/`, split `docs:check`, update `AGENTS.md` and `CLAUDE.md`, and only then remove `roadmap/`.

## Subtasks

- [ ] Prefix every ID, dependency, table row, link, and text reference with `KZ-`.
- [ ] Add `project: kaizen` and `repository: fradelli/nextjs-kaizen-app`.
- [ ] Translate titles and sections to English, keeping the seven required sections.
- [ ] Keep statuses exactly as in the source.
- [ ] Register the Kaizen repository follow-up task.

## Validation

- Every source task has a target with the same status and the same dependencies, prefixed.
- Spot-check the translation of at least one task per epic against the source.
- `git diff --check` passes.

## Acceptance criteria

- [ ] `projects/kaizen/ACTIVE.md` points to the same task as the source.
- [ ] Kaizen keeps its own `roadmap/` until the follow-up task lands, so its CI keeps working.

## Result

Not started.
