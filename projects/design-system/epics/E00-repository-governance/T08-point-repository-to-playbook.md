---
id: DS-E00-T08
epic: DS-E00
project: design-system
repository: fradelli/design-system
depends_on: [PB-E01-T01]
---

# Point the repository to the playbook

## Objective

Make the design system repository send agents to the playbook for the roadmap, and remove the local copy that the playbook replaced.

## Context

The roadmap of this project was planned under `roadmap/` in this repository but never committed. PB-E01-T01 imported it into `fradelli/playbook: projects/design-system/`. DS-E00-T03 also edits the agent contract (`CLAUDE.md`, `AGENTS.md`); do both in the same change when they run close together.

## Inputs

- `AGENTS.md` — current agent contract.
- `CLAUDE.md` — created by DS-E00-T03, if it already exists.
- `fradelli/playbook: CLAUDE.md` — sections "Reading order" and "Branches, commits, and PRs".

## Deliverables

- Agent instructions pointing to `fradelli/playbook: projects/design-system/ACTIVE.md` and to the playbook `CLAUDE.md`.
- No `roadmap/` folder in the local clone, and no local `claude/E00-T01-create-roadmap-system` branch.

## Subtasks

- [x] Confirm that the playbook holds every epic and task of the local `roadmap/`.
- [x] Point the agent instructions to the playbook.
- [x] Delete the local `roadmap/` folder and the local branch, which has no commits beyond `main`.

## Validation

- `rg -n "roadmap/" AGENTS.md CLAUDE.md` finds only references to the playbook.
- `git status` shows no `roadmap/` folder.

## Acceptance criteria

- [x] `AGENTS.md` and `CLAUDE.md` link to `fradelli/playbook: projects/design-system/ACTIVE.md`, and no `roadmap/` folder exists in the clone.

## Result

Done with DS-E00-T03 in `fradelli/design-system#23` (`9912651`, merged 2026-11-23): `CLAUDE.md` has a `Playbook` section linking the playbook `CLAUDE.md` and `projects/design-system/ACTIVE.md`, and `AGENTS.md` is a pointer to `CLAUDE.md`. The local `roadmap/` folder and the `claude/E00-T01-create-roadmap-system` branch no longer exist in the clone (checked 2026-11-24). PB-E01-T04 turns this section into the shared integration.
