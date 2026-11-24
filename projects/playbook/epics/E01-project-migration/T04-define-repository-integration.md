---
id: PB-E01-T04
epic: PB-E01
project: playbook
repository: fradelli/playbook
depends_on: [PB-E02-T04]
---

# Define how project repositories use the playbook

## Objective

Write the one integration that every project repository copies to read its roadmap and the shared rules from the playbook.

## Context

DS-E00-T08 already pointed the design system to the playbook with its own section. KZ-E00-T17 and the future Suna tasks need the same reading order, place for new rules, and local setup, so this task turns the design system version into the shared one instead of letting each repository write its own.

## Inputs

- `fradelli/design-system: CLAUDE.md` and `AGENTS.md` — the playbook section written by DS-E00-T08.
- `CLAUDE.md` — sections "Reading order", "Changing this repository", and "Standards".
- `README.md` — section "Local workspace".
- `standards/general/writing.md` — style of the snippet and the rules.

## Deliverables

- `standards/general/playbook-integration.md` with:
  - the `## Playbook` section that each repository adds to its `CLAUDE.md` and `AGENTS.md`;
  - the reading order when implementing: repository rules, then the playbook `ACTIVE.md` and task, then the standards the task lists;
  - where a new rule goes: playbook `standards/` for every project, `standards/profiles/` for one stack, the product repository for one product;
  - how status commits reach the playbook `main` from a session working in another repository;
  - the Claude Code setting that lets a repository read the local playbook clone without a prompt for every file.
- `CLAUDE.md` and `README.md` pointing to it.

## Subtasks

- [ ] Write the snippet with the relative path from each known repository to the playbook clone.
- [ ] Write the reading order and the rule placement table.
- [ ] Write the status flow and the local setup.
- [ ] Point `CLAUDE.md` and `README.md` to the document.

## Validation

- `npm run roadmap:check` passes.
- Following the document in the Kaizen clone, an agent reaches `projects/kaizen/ACTIVE.md` and the standards of the selected task without further instructions.

## Acceptance criteria

- [ ] `standards/general/playbook-integration.md` contains a snippet that can be copied unchanged into Kaizen, the design system, and Suna, except for the project folder and the relative path.
- [ ] The rule placement table gives exactly one destination for a rule that applies to every project, to one stack, and to one product.
- [ ] The document names the setting and the value that allow reading the playbook clone.

## Out of scope

- Changing the project repositories; KZ-E00-T17 and the Suna tasks apply the document, and the design system aligns its section if it differs.

## Result

Not started.
