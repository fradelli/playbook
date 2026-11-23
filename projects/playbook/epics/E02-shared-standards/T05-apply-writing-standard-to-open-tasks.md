---
id: PB-E02-T05
epic: PB-E02
project: playbook
repository: fradelli/playbook
depends_on: [PB-E02-T04]
---

# Apply the writing standard to open tasks

## Objective

Rewrite every open task (not `DONE` or `CANCELLED`) of every project to follow `standards/general/writing.md`, without changing its scope, dependencies, or status.

## Context

PB-E02-T04 listed the open tasks that break the checked rules in `scripts/writing-baseline.json`: 9 Kaizen tasks with 17 violations. The other open tasks still need a read against the unchecked rules of the standard, such as observable acceptance criteria and no filler. Done and cancelled tasks stay as historical evidence.

## Inputs

- `standards/general/writing.md` — the standard from PB-E02-T04.
- `projects/kaizen/README.md`, `projects/design-system/README.md`, `projects/playbook/README.md` — status of every task.
- Every open task file listed in those indexes.

## Deliverables

- Open task files rewritten to the standard, one commit per project.
- A list in `Result` of tasks whose meaning was unclear and needs the owner's decision.

## Subtasks

- [x] List the open tasks that fail the standard.
- [x] Rewrite them, keeping IDs, frontmatter, dependencies, and statuses.
- [x] Rename optional sections to the allowed names.
- [x] Replace unverifiable acceptance criteria with observable ones, or flag them for the owner.

## Validation

- `npm run roadmap:check` passes with the PB-E02-T04 rules.
- `git diff` shows no change in frontmatter or in index statuses.

## Acceptance criteria

- [x] `scripts/writing-baseline.json` is empty and `npm run roadmap:check` passes.
- [x] No open task contains a placeholder saying a section was not recorded.
- [x] No done or cancelled task changed.

## Result

All 91 open tasks were read against the standard; 56 changed (design system 11, Kaizen 43, playbook 2) and 35 already met it. The 9 baseline tasks were rewritten by hand and the other 81 by four parallel agents with shared rules; `scripts/writing-baseline.json` is now empty.

- Frontmatter identical in all 56 tasks, no done or cancelled task changed, no project index changed; `npm run roadmap:check` passed with 171 tasks and `npm test` 27 of 27.
- Placeholders replaced with real Deliverables, Subtasks, and Validation; pending "decisions before implementation" became subtasks; long results condensed to evidence (KZ-E06-T14 from 47 lines to 3); inputs pointing to Kaizen `roadmap/` moved to the playbook, except in KZ-E00-T13, T14, and T17, which act on that folder.
- Two criteria added by an agent from the standard's example, not from the task, were removed or corrected (KZ-E07-T02 widths, KZ-E08-T02 header location). Changed tasks grew 7% overall, because empty sections now have content.

Needs the owner's decision:

- KZ-E11-T01 to T08: deliverables name reports and specifications without target paths.
- Criteria still only partly verifiable: KZ-E11-T02 (no global per-pixel updates), KZ-E11-T05 (depth limit), KZ-E09-T01 (requirements trace to the design), KZ-E09-T06 (no Portuguese product text, method not given), KZ-E06-T05 (basic accessibility check), KZ-E06-T04 (personal data exposure).
- Criteria that depend on a person stay as written: DS-E03-T01 (maintainer accepts ADR 0007), DS-E02-T06 (conditional decision).
