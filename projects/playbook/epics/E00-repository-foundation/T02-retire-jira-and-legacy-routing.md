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

- [x] Remove the Jira skill. The Jira planning workflow was kept; see Result.
- [x] Remove or rewrite the Sandicts routing skill and `docs/ai/index.md`.
- [x] Align the PR template and the PR standard with prefixed task IDs.
- [x] Drop obsolete `.gitignore` entries.

## Validation

- `rg -n -i "jira|KAN-|sandicts" --glob '!docs/**' --glob '!projects/**'` returns only intentional historical mentions. The legacy Suna documents under `docs/` are PB-E00-T03.
- `npm run roadmap:check` and `git diff --check` pass.

## Acceptance criteria

- [x] No instruction asks an agent to read Jira.
- [x] No routing points to `nodejs-sandicts-api`, `reactjs-sandicts-web`, or `sandicts-docs`.

## Result

- Removed `.codex/skills/jira-pr-commit-writer/`, `.codex/skills/sandicts-shared-context/`, `docs/ai/index.md` (replaced by `CLAUDE.md`), and `docs/ai/task-finalization-workflow.md` (Jira-based delivery flow of the old docs repository).
- Rewrote and moved the two shared policies, without Jira or the old repositories: `docs/ai/pull-request-standard.md` became `standards/general/pull-requests.md`, and `docs/ai/dependency-security-remediation.md` became `standards/general/dependency-security-remediation.md`. Titles now follow `[<ID>] <type>(<scope>): <summary>`, the format the Kaizen CI already enforces.
- Rewrote `.github/pull_request_template.md` and the "Branches, commits, and PRs" section of `CLAUDE.md`; dropped the `nodejs-sandicts-api/` and `reactjs-sandicts-web/` entries from `.gitignore`.
- Kept `docs/product/sandicts-jira-planning-workflow.md`: besides the obsolete Jira rules, it holds the Suna MVP roadmap (phases 0 to 11) and the dependency map. It was added to the Inputs of PB-E01-T03, and PB-E00-T03 decides where it goes.
- Legacy Suna documents under `docs/` still mention Sandicts, Jira, and the old repositories as content; PB-E00-T03 handles them.
