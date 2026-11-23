---
id: PB-E00-T01
epic: PB-E00
project: playbook
repository: fradelli/playbook
depends_on: []
---

# Create the playbook structure

## Objective

Turn the renamed `fradelli/suna-docs` repository into the shared playbook: rules, templates, project folders, and the roadmap of the playbook itself.

## Inputs

- `README.md` and `AGENTS.md` — previous Sandicts routing being replaced.
- `docs/` — legacy Suna documents, kept untouched in this task.

## Deliverables

- `README.md`, `CLAUDE.md`, and `AGENTS.md` (pointer to `CLAUDE.md`).
- `templates/EPIC-TEMPLATE.md` and `templates/TASK-TEMPLATE.md`.
- `projects/playbook/` with index, active task, epics PB-E00 to PB-E03, and their tasks.
- `projects/design-system/`, `projects/kaizen/`, and `projects/suna/` with an index and an active task waiting for migration.
- `standards/README.md` with the planned layout.

## Subtasks

- [x] Write the repository rules from the roadmap standard approved on 2026-11-23, adapted for a public repository and the `PB-` prefix.
- [x] Translate the Kaizen epic and task templates to English and add `project` and `repository`.
- [x] Register the migration work as `PB-` tasks.
- [x] Create placeholder folders for the three projects.

## Validation

- Every task has the seven sections and the dependencies match across frontmatter, index, and epic tables (checked by hand until PB-E00-T04).
- Relative links resolve.
- `git diff --check` passes.

## Acceptance criteria

- [x] An agent can start from `CLAUDE.md` and reach the next task of any project.
- [x] Legacy Suna documents are untouched and flagged for relocation.

## Result

Structure created on branch `claude/PB-E00-T01-create-playbook-structure`. Jira routing in `AGENTS.md` was replaced by a pointer to `CLAUDE.md`; the remaining Jira material is PB-E00-T02.
