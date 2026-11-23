---
id: PB-E00-T02
epic: PB-E00
project: playbook
repository: fradelli/playbook
depends_on: [PB-E00-T01]
---

# Retire Jira and legacy Sandicts routing

## Objective

Remove Jira workflows and Sandicts-era routing so that `CLAUDE.md` is the only entry point.

## Inputs

- `.codex/skills/jira-pr-commit-writer/SKILL.md` — Jira-based PR and commit writer.
- `.codex/skills/sandicts-shared-context/` — routing skill for the old repository layout.
- `.github/pull_request_template.md` — check for Jira fields.
- `docs/ai/index.md`, `docs/ai/pull-request-standard.md`, `docs/ai/task-finalization-workflow.md` — routing and workflows that mention Jira or `KAN-` keys.
- `docs/product/sandicts-jira-planning-workflow.md` — Jira planning rules.
- `.gitignore` — entries for the old `nodejs-sandicts-api/` and `reactjs-sandicts-web/` folders.

## Deliverables

- Removed or rewritten files from the Inputs, with a short note in the PR on each decision.

## Subtasks

- [ ] Remove the Jira skill and the Jira planning workflow.
- [ ] Remove or rewrite the Sandicts routing skill and `docs/ai/index.md`.
- [ ] Align the PR template and the PR standard with prefixed task IDs.
- [ ] Drop obsolete `.gitignore` entries.

## Validation

- `rg -n "Jira|KAN-|sandicts" --glob '!docs/product/**'` returns only intentional historical mentions.
- `git diff --check` passes.

## Acceptance criteria

- [ ] No instruction asks an agent to read Jira.
- [ ] No routing points to `nodejs-sandicts-api`, `reactjs-sandicts-web`, or `sandicts-docs`.

## Result

Not started.
