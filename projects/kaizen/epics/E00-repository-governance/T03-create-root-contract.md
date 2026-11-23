---
id: KZ-E00-T03
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T01]
---

# Create root contract

## Objective
Define purpose, language, sources of truth, task flow, privacy, and branches before the migration.

## Inputs
- Strategy approved in the conversation.
- Actual state of the repository and branches.

## Deliverables
- `AGENTS.md`
- `README.md`
- `CHANGELOG.md`
- `docs/decisions/BRANCHING-AND-ENVIRONMENTS.md`
- `docs/migration/README.md`

## Subtasks
- [x] Define the minimal reading for Codex.
- [x] Define the status and the canonical source of the work.
- [x] Record privacy and the absence of code.
- [x] Document branches and Vercel limits.

## Validation
- All files exist and have valid links.
- No file declares preview or production as already configured.

## Acceptance criteria
- [x] Self-contained contract, written in Brazilian Portuguese.
- [x] No dependency or application introduced.

## Result
Completed on 2026-08-30 in the roadmap foundation PR.
