---
id: PB-E02-T04
epic: PB-E02
project: playbook
repository: fradelli/playbook
depends_on: [PB-E00-T04]
---

# Create the writing standard

## Objective

Define how rules, documents, and tasks are written in every Fradelli repository, and make `npm run roadmap:check` enforce the parts that can be checked.

## Context

The 2026-11-23 audit found no writing standard: tasks only follow a structure. Design system and playbook tasks are short; Kaizen tasks carry 111 placeholders saying a section was not recorded, unnamed extra sections ("Context" and "Known context", "Scope" and "Scope and impacts"), results up to 40 lines, and 9 tasks without acceptance criteria.

## Inputs

- `CLAUDE.md` — sections "Task sections", "Language", and "Validation".
- `templates/TASK-TEMPLATE.md` and `templates/EPIC-TEMPLATE.md`.
- `scripts/roadmap-check.mjs` and `scripts/roadmap-check.test.mjs`.
- `standards/general/pull-requests.md` — tone and length reference.

## Deliverables

- `standards/general/writing.md` covering rules, documents, and tasks.
- Templates rewritten to follow it, with the allowed optional sections.
- `roadmap:check` rules for acceptance criteria, optional section names, and placeholders in open tasks, with tests.
- `CLAUDE.md` and `standards/README.md` pointing to the standard.

## Subtasks

- [x] Write the rule style: imperative, one rule per item, reason only when not obvious, history kept out of rules.
- [x] Write the task style per section, including what makes an acceptance criterion valid.
- [x] Fix the names of the optional sections (for example Context, Out of scope, Decisions, Risks, Rollback).
- [x] Update the templates.
- [x] Extend `roadmap:check` and its tests.

## Validation

- `npm test` and `npm run roadmap:check` pass.
- A fixture with an unknown optional section, no acceptance criteria, or a placeholder in an open task fails the check.

## Acceptance criteria

- [x] The standard says, for each task section, what to write and what to leave out.
- [x] Every acceptance criterion it allows is observable and answerable with yes or no.
- [x] `roadmap:check` rejects open tasks without acceptance criteria.
- [x] Done and cancelled tasks still pass the check unchanged.

## Result

- `standards/general/writing.md`: rules for every text, rules, documents, tasks (a write/leave-out table per section), acceptance criteria with before-and-after examples and a list of vague words, the seven optional sections, and epics.
- Templates rewritten to the standard; `CLAUDE.md` and `standards/README.md` point to it.
- `roadmap:check` now rejects open tasks without an acceptance criteria checkbox, with a section outside the allowed list, or with a "not recorded" placeholder. Done and cancelled tasks are not checked for writing.
- `scripts/writing-baseline.json` lists the current debt: 9 open Kaizen tasks, 17 violations. The check fails if a new violation appears or a listed one is fixed but not removed, so the list can only shrink (PB-E02-T05 empties it).
- `npm test` passed 27 of 27 (7 new cases) and `npm run roadmap:check` passed with 171 tasks.
