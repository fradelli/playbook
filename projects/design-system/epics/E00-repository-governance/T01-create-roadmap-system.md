---
id: DS-E00-T01
epic: DS-E00
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Create the roadmap system

## Objective

Track the design system work in versioned Markdown tasks, following the roadmap model already used by the Kaizen repository, instead of Jira.

## Context

Jira is no longer used. The audit of 2026-11-23 on `main` (`145bb6e`) produced the findings recorded as tasks DS-E00-T02 to DS-E04-T02. The Kaizen roadmap (`roadmap/` in `fradelli/nextjs-kaizen-app`, branch `developer`) is the reference for structure, states, and editing rules.

## Inputs

- `AGENTS.md` — language and delivery rules.
- `roadmap/README.md`, `roadmap/CLAUDE.md`, and `roadmap/templates/` in `fradelli/nextjs-kaizen-app` (`developer`) — reference structure.

## Deliverables

- `roadmap/README.md`, `roadmap/ACTIVE.md`, `roadmap/OVERVIEW.md`, and `roadmap/CLAUDE.md`.
- `roadmap/templates/EPIC-TEMPLATE.md` and `roadmap/templates/TASK-TEMPLATE.md`.
- One README per epic and one file per task under `roadmap/epics/`.

## Subtasks

- [x] Mirror the Kaizen roadmap structure in American English.
- [x] Register the audit findings as epics and tasks with dependencies.
- [x] Review and approve the task list with the maintainer.
- [x] Merge the roadmap through a pull request.

## Validation

- `npm run format:check` and `git diff --check` pass.
- Every ID in `depends_on` exists, there are no cycles, and the index, epic tables, and frontmatter agree.

## Acceptance criteria

- [x] The maintainer approved the epics and tasks.
- [x] `roadmap/ACTIVE.md` points to the next task to start (now `fradelli/playbook: projects/design-system/ACTIVE.md`).

## Result

Done in a different form on 2026-11-23: the roadmap was not merged into this repository. It was imported into the shared playbook (`fradelli/playbook: projects/design-system/`) by PB-E01-T01, PR fradelli/playbook#16, which the maintainer approved and merged. Pointing this repository to the playbook is DS-E00-T08.
