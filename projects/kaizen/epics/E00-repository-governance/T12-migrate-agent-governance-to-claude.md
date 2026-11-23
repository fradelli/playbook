---
id: KZ-E00-T12
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Migrate agent governance from Codex to Claude

## Objective
Make Claude Code the only development agent supported by the repository, with no rule, validator, or local installation that requires Codex or other clients.

## Context

Facts gathered in the audit of 2026-11-23 on `developer` (`364c71f`):

- `scripts/validate-governance.mjs` accepts only `codex/<ID>-description` branches; a PR from a branch with another prefix fails in CI.
- `AGENTS.md` is titled "Contrato do Codex" (Codex contract) and reserves `.agents/skills/` for Codex; `docs/delivery/PULL-REQUEST-STANDARD.md` repeats the `codex/` prefix.
- `.agents/skills/` holds 11 Prisma skills; `.claude/skills/` and `.windsurf/skills/` contain only links to them; `skills-lock.json` belongs to Codex. None of these paths is versioned.
- `.gitignore` keeps Codex-specific and Windsurf-specific blocks.

Owner decision on 2026-11-23: use only Claude for development. Proposed branch prefix: `claude/<ID>-short-description`.

## Inputs
- `AGENTS.md` — current contract to convert.
- `scripts/validate-governance.mjs` — `taskBranchPattern` and error message.
- `scripts/validate-governance.test.mjs` — branch cases.
- `docs/delivery/PULL-REQUEST-STANDARD.md` — branches section.
- `.gitignore` — blocks of local references to Codex and unused clients.
- `roadmap/AGENTS.md`, `docs/AGENTS.md`, `docs/migration/AGENTS.md`, `data/AGENTS.md` — nested instructions that must keep being loaded.

## Deliverables
- `CLAUDE.md` at the root as the agent contract (content converted from `AGENTS.md`), and a recorded decision on keeping `AGENTS.md` as an import or removing it.
- Nested instructions converted to `CLAUDE.md` in the same folders, or referenced by the root contract.
- `scripts/validate-governance.mjs` and tests accepting the new prefix; `codex/` history preserved only for branches already integrated.
- `docs/delivery/PULL-REQUEST-STANDARD.md` updated.
- `.claude/skills/` with the Prisma skills as a real folder (local, outside Git) and `.claude/settings.json` versioned only if there is a permission or hook with a consumer.
- `.gitignore` without the Codex and Windsurf blocks.

## Subtasks
- [x] Convert the root contract and remove the Codex-exclusive "Skills locais" (Local skills) section.
- [x] Convert or reference the four nested instructions.
- [x] Change the branch pattern in the validator, in the tests, and in the PR standard.
- [x] Move the Prisma skills to `.claude/skills/` and remove the local `.agents/`, `.windsurf/`, and `skills-lock.json`.
- [x] Clean up `.gitignore`.
- [x] Review mentions of Codex outside the history (`docs/history/`, `docs/worklog/`, and `docs/evidence/` remain as record).

## Validation
- `pnpm test:ci-scripts` passes with cases for `claude/E00-T12-x` (accepted) and unforeseen prefixes (rejected).
- `pnpm governance` with a PR event from a `claude/...` branch passes.
- `git grep -i codex -- ':!docs/history' ':!docs/worklog' ':!docs/evidence' ':!roadmap/epics'` returns no current rule.
- `pnpm docs:check` passes.

## Acceptance criteria
- [x] An open PR from a `claude/<ID>-description` branch passes the Governance job.
- [x] A new Claude Code session loads the root contract and the nested instructions without depending on the Codex `AGENTS.md`.
- [x] No local folders or files of other agent clients remain.

## Result
Completed on 2026-11-23.

- The five `AGENTS.md` files (root, `roadmap/`, `docs/`, `docs/migration/`, and `data/`) were renamed to `CLAUDE.md` with `git mv`. Decision: keep neither `AGENTS.md` nor an import, because Claude Code is the only supported agent.
- The root contract is now called "Contrato do Claude no Kaizen" (Claude contract in Kaizen), lists the nested instructions in `CLAUDE.md`, and replaces the Codex skills section with "Agente e skills locais" (Agent and local skills).
- `scripts/validate-governance.mjs` accepts only `claude/<ID>-description`; a new test rejects `codex/` and `feature/`. `docs/delivery/PULL-REQUEST-STANDARD.md` and `docs/decisions/BRANCHING-AND-ENVIRONMENTS.md` record the change.
- `scripts/validate-documentation.mjs`, `scripts/verify-doc-preservation.mjs`, and the current links now point to `CLAUDE.md`. Mentions of the design system `AGENTS.md` and historical branch names were preserved.
- Locally, the 11 Prisma skills became a real folder in `.claude/skills/` (content identical to `.agents/skills/`), and `.agents/`, `.windsurf/`, and `skills-lock.json` were removed. `.gitignore` ignores `.claude/skills/` and `.claude/settings.local.json`.
- `.claude/settings.json` was not created: no permission or hook has a consumer in this task.
- Validations: `pnpm test:ci-scripts` (60 tests), `pnpm docs:check`, `pnpm format:check`, and `git diff --check` passed. The first PR with a `claude/` branch proves the Governance job criterion.
