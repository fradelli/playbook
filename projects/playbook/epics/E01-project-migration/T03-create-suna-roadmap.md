---
id: PB-E01-T03
epic: PB-E01
project: playbook
repository: fradelli/playbook
depends_on: [PB-E00-T03]
---

# Create the Suna roadmap

## Objective

Start `projects/suna/` with the first `SU-` epics and tasks, replacing Jira as the planning source for Suna.

## Context

Suna was paused while Kaizen moved ahead. Its planning lived in Jira (`KAN-` keys) and in `docs/product/` of this repository. Suna has a separate frontend and API, so each task names one of the two repositories.

## Inputs

- `docs/product/sandicts-open-match-implementation-roadmap.md` and `docs/product/sandicts-v2-backlog.md` — existing Suna plans, or their new location after PB-E00-T03.
- `docs/product/sandicts-scope-checklist.md` — scope checklist.
- `docs/product/sandicts-jira-planning-workflow.md` — sections "Recommended MVP Roadmap" (phases 0 to 11), "Fullstack Parallelization Rules", and "Dependency Map". The Jira rules in the same file are obsolete.

## Deliverables

- `projects/suna/README.md`, `ACTIVE.md`, and `epics/`.
- A `SU-` task per Suna repository to point its agent instructions to the playbook.
- `SU-` tasks to translate the remaining Portuguese documentation to English, following `CLAUDE.md` (section "Language"): 13 Markdown files in `fradelli/nextjs-suna-app` and 1 in `fradelli/nestjs-suna-api` on 2026-11-23.

## Subtasks

- [ ] Decide with the owner which open Jira items become `SU-` tasks and which are archived.
- [ ] Create the first epics and tasks, one repository per task.
- [ ] Register the tasks that adopt Kaizen's recent standards once PB-E02 publishes them.

## Validation

- Dependencies match across frontmatter, index, and epic tables.
- `git diff --check` passes.

## Acceptance criteria

- [ ] Suna has an active task or a recorded next candidate.
- [ ] No Suna planning instruction points to Jira.

## Result

Not started.
