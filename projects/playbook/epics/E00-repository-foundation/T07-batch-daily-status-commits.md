---
id: PB-E00-T07
epic: PB-E00
project: playbook
repository: fradelli/playbook
depends_on: [PB-E00-T06]
---

# Batch status changes into a daily commit

## Objective

Let status and `ACTIVE.md` changes build up in the local playbook during the day and reach `main` in one commit at the end of the day, instead of one commit per start or finish.

## Context

- The maintainer starts every task from a session in the local playbook and follows the roadmap there.
- `CLAUDE.md` asks for one small commit on `main` per status change, titled with the task ID.
- Status changes that stay uncommitted are visible only on the maintainer's machine, and they move with the working tree when a session switches branches to open a planning pull request.

## Inputs

- `CLAUDE.md` — sections "Changing this repository", "Starting or finishing a task", and "Validation".
- `standards/general/playbook-integration.md` — section "Status changes from another repository".

## Deliverables

- Rule in `CLAUDE.md` for local status changes and the daily status commit, including its title and body.
- Matching rule in the integration standard for sessions that change status from another repository.

## Subtasks

- [ ] Define the daily commit title (for example `status: 2026-11-24`) and a body that lists each task that changed status.
- [ ] Define how a planning pull request is opened while status changes are uncommitted, so that they do not enter the pull request.
- [ ] Update `CLAUDE.md` and the integration standard.

## Validation

- `npm run roadmap:check` and `npm test` pass.
- The rules in `CLAUDE.md` and the integration standard agree with each other.

## Acceptance criteria

- [ ] `CLAUDE.md` allows status and `ACTIVE.md` changes to stay local until a daily commit on `main`.
- [ ] The daily commit runs `npm run roadmap:check` first and lists the tasks that changed status.
- [ ] Planning changes still go through a pull request, and the rules say how uncommitted status changes stay out of it.

## Risks

- Status that is not committed by the end of the day exists only on the maintainer's machine; GitHub and cloud sessions see the previous state.

## Result

Not started.
