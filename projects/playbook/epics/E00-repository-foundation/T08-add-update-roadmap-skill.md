---
id: PB-E00-T08
epic: PB-E00
project: playbook
repository: fradelli/playbook
depends_on: [PB-E00-T04]
---

# Add the update-roadmap skill

## Objective

Give Claude Code a `/update-roadmap` skill that settles a roadmap change with the maintainer before editing, then edits every place the change belongs and validates it.

## Context

- A change to one task often reaches other files: the project index, the epic `Order` table, `ACTIVE.md`, and the tasks that depend on it.
- `npm run roadmap:check` finds files that disagree, but it does not tell the agent which questions to ask before editing.
- The skill adapts a roadmap skill from another maintainer project: read the facts first, ask in numbered rounds with a recommendation, confirm the change list, then edit and validate.

## Inputs

- `CLAUDE.md` — sections "Task frontmatter", "States", "Project index", "ACTIVE", "Changing this repository", and "Validation".
- `standards/general/playbook-integration.md` — section "Status changes from another repository".
- `standards/general/writing.md` — sections "Tasks" and "Epics".
- `templates/TASK-TEMPLATE.md` — structure of a new task.

## Deliverables

- `.claude/skills/update-roadmap/SKILL.md`, user-invoked, written in English.
- `CLAUDE.md` with one line in "Changing this repository" that names the skill.

## Subtasks

- [x] Write the skill with the fact-finding, question rounds, edit, validation, and commit steps.
- [x] Separate the status route (commit on `main`) from the planning route (branch and pull request).
- [x] Name the skill in `CLAUDE.md`.

## Validation

- `npm run roadmap:check` passes.
- `npm test` passes.
- The skill appears as `/update-roadmap` in a Claude Code session opened in this repository.

## Acceptance criteria

- [ ] `.claude/skills/update-roadmap/SKILL.md` exists with `disable-model-invocation: true`.
- [ ] The skill lists every file a status or dependency change touches: task frontmatter, project index, epic `Order` table, and `ACTIVE.md`.
- [ ] The skill tells the agent to show the final change list and wait for confirmation before editing.
- [ ] The skill sends status changes to `main` as `<ID>: <event>` commits and planning changes to a `claude/<ID>-<description>` branch.

## Out of scope

- A skill that suggests the next task.
- A skill that runs the start and finish steps from a project repository.

## Result

- `.claude/skills/update-roadmap/SKILL.md`: user-invoked skill with six steps (facts, questions, edit, validate, commit, report) and the two commit routes.
- `CLAUDE.md`: "Changing this repository" names `/update-roadmap`.
