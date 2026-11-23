---
id: DS-E00-T03
epic: DS-E00
project: design-system
repository: fradelli/design-system
depends_on: [DS-E00-T01]
---

# Migrate agent governance to Claude

## Objective

Make Claude Code the only supported development agent and replace Jira references with roadmap task IDs.

## Context

- There is no `CLAUDE.md`; Claude Code does not load `AGENTS.md` by itself.
- `AGENTS.md` asks for `codex/KAN-123-description` branches and Jira keys.
- `.github/pull_request_template.md` starts with a Jira section.
- `.github/workflows/release.yml` hardcodes `[KAN-226]` in the version commit message and PR title.

## Inputs

- `AGENTS.md` — whole file.
- `.github/pull_request_template.md` — Jira section.
- `.github/workflows/release.yml` — `commit-message` and `pr-title`.
- `roadmap/CLAUDE.md` — branch and commit convention.

## Deliverables

- `CLAUDE.md` at the root with the repository contract (moved from `AGENTS.md` or importing it).
- `AGENTS.md` removed or reduced to a pointer, as decided.
- `.github/pull_request_template.md` referencing the roadmap task.
- `.github/workflows/release.yml` without the Jira key.

## Subtasks

- [ ] Decide between moving `AGENTS.md` to `CLAUDE.md` or importing it.
- [ ] Replace `codex/KAN-123` with `claude/<ID>-description` and Jira keys with task IDs.
- [ ] Update the PR template and the release workflow texts.

## Validation

- `rg -n "KAN-|Jira|codex/" --glob '!roadmap/**' --glob '!CHANGELOG.md' --glob '!docs/implementation/**'` returns no match that requires Jira keys or the `codex/` prefix.
- `npm run format:check` passes.

## Acceptance criteria

- [ ] `CLAUDE.md` exists at the repository root and contains or imports the repository contract.
- [ ] The Validation `rg` command finds no current rule that requires Jira keys or the `codex/` prefix.

## Result

Not started.
