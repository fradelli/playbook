---
id: PB-E00-T05
epic: PB-E00
project: playbook
repository: fradelli/playbook
depends_on: [PB-E00-T04]
---

# Allow parallel tasks per project

## Objective

Let one project have up to three tasks in progress at the same time, each in its own session and branch, without losing the resumption that `ACTIVE.md` gives.

## Context

- `CLAUDE.md` allowed one `IN_PROGRESS` task per project, and `roadmap:check` enforced it. No decision recorded why.
- The rule followed from the `ACTIVE.md` format, which had a single `Task` field. It also limited work waiting for review.
- The design system has several `READY` tasks that change different files and could run in separate sessions.

## Inputs

- `CLAUDE.md` — sections "States", "ACTIVE", and "Validation".
- `scripts/roadmap-check.mjs` — `readActive` and the `IN_PROGRESS` check.
- `scripts/roadmap-check.test.mjs` — `IN_PROGRESS and ACTIVE.md` tests.
- `standards/general/playbook-integration.md` — section "Status changes from another repository".

## Deliverables

- `ACTIVE.md` format with one block of fields per active task and a `Branch` field.
- `roadmap:check` that accepts up to three `IN_PROGRESS` tasks per project and requires each one in `ACTIVE.md`.
- Rules in `CLAUDE.md` and the integration standard for the limit, the file overlap, and the status commits.

## Subtasks

- [x] Read every task block in `ACTIVE.md` and check the limit, the listing, duplicates, and `Branch`.
- [x] Replace the test for two tasks with tests for the new rules.
- [x] Update `CLAUDE.md` and the integration standard.

## Validation

- `npm run roadmap:check` passes on the current roadmap, whose `ACTIVE.md` files still use one block.
- `npm test` covers two listed tasks, the limit, a missing listing, a missing `Branch`, a duplicate, and fields below the first heading.

## Acceptance criteria

- [x] Two `IN_PROGRESS` tasks listed in `ACTIVE.md` with their branches pass the check.
- [x] A fourth `IN_PROGRESS` task fails the check with the limit in the message.
- [x] An `IN_PROGRESS` task without a block in `ACTIVE.md` fails the check.
- [x] Existing single-block `ACTIVE.md` files pass without changes.

## Decisions

- The limit is three, the review capacity of one maintainer. It lives in `MAX_IN_PROGRESS`.
- File overlap between parallel tasks is a written rule only; the check cannot know which files a task will change.

## Result

- `scripts/roadmap-check.mjs`: `MAX_IN_PROGRESS = 3`; `readActive` returns one entry per `Task` block before the first `## ` heading; the check reports the limit, unlisted `IN_PROGRESS` tasks, duplicates, and a missing `Branch` when more than one block is listed.
- `scripts/roadmap-check.test.mjs`: six tests replace the two-task rejection.
- `CLAUDE.md` and `standards/general/playbook-integration.md` describe the limit, the blocks, and how start and done commits keep the other blocks.
- `npm run roadmap:check` passed (182 tasks); `npm test` passed (32).
