---
id: KZ-E00-T18
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T17]
---

# Adopt the English-only rule

## Objective

Write the Kaizen repository in English, following `fradelli/playbook: CLAUDE.md` (section "Language"), except product copy shown to end users.

## Context

On 2026-11-23, 266 of the 277 Markdown files in the repository were in Portuguese, and `AGENTS.md` required PT-BR. The roadmap was already translated when it moved to the playbook (PB-E01-T02). Some playbook tasks quote Portuguese headings of Kaizen documents, such as sections of `docs/architecture/TARGET-ARCHITECTURE.md`; those references must follow the new English headings.

## Inputs

- `AGENTS.md` and `CLAUDE.md` — the PT-BR language rule.
- `docs/` — documentation to translate.
- `.github/pull_request_template.md` — Portuguese headings.
- `scripts/` — Portuguese messages of the validation scripts.
- `fradelli/playbook: projects/kaizen/` — tasks that quote Portuguese document headings.

## Deliverables

- `AGENTS.md` and `CLAUDE.md` stating the English-only rule.
- Documentation, PR template, and script messages in English.
- Playbook task references updated to the new English headings, in a playbook pull request.
- `messages/` and other end-user copy unchanged.

## Subtasks

- [ ] Change the language rule in the agent instructions.
- [ ] Translate the documentation, keeping file paths stable or updating every link.
- [ ] Translate the PR template and the script messages, with their tests.
- [ ] Update the playbook references to translated headings.

## Validation

- `pnpm run ci` passes.
- A search for common Portuguese words outside `messages/` and quoted interface text finds no prose.

## Acceptance criteria

- [ ] No repository document, instruction, or script message is written in Portuguese, except end-user copy.

## Result

Not started.
