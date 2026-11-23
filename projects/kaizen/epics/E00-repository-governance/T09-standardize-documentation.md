---
id: KZ-E00-T09
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T08]
---

# Standardize existing documentation

## Objective
Apply the documentation standard to all existing tasks and documents without losing content, leaving the sources ready to feed a visual navigation of the roadmap and keeping the standard verifiable by script.

## Inputs
- `docs/DOCUMENTATION-STANDARD.md` — types, destination, and common header.
- `roadmap/AGENTS.md` — sources of truth, states, and validation.
- `roadmap/templates/TASK-TEMPLATE.md` — required task sections.
- `roadmap/README.md` — index of states and dependencies.
- `scripts/validate-governance.mjs` — existing reading of tasks; reference only.

## Deliverables
- Template sections present in all tasks under `roadmap/epics/`.
- `external` field in the frontmatter for conditions that are not tasks.
- Epic order tables aligned with `depends_on`.
- Common header in all documents under `docs/`, except indexes, instructions, templates, and the journal.
- `scripts/validate-documentation.mjs` and `scripts/verify-doc-preservation.mjs`, with tests.
- [Standardization evidence](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/evidence/documentation/E00-T09-DOCUMENTATION-STANDARDIZATION.md).

## Subtasks
- [x] Complete the missing task sections without renaming or moving the existing ones.
- [x] Record the external conditions of KZ-E02-T02 and KZ-E02-T04 in the frontmatter.
- [x] Align the tables of KZ-E04, KZ-E06, KZ-E07, KZ-E09, and KZ-E10 with `depends_on`.
- [x] Add the common header to the 43 documents that did not have it.
- [x] Create the documentation validator and the preservation verifier.
- [x] Update the standard, task template, catalog, roadmap, and changelog.

## Validation
- `pnpm docs:check` without errors.
- `pnpm docs:preservation` against `66326d6` without missing lines beyond the eight declared replacements.
- `pnpm test:ci-scripts` approved.
- `git diff --check` without errors.

## Acceptance criteria
- [x] No Markdown line from the `66326d6` base was lost. The eight declared replacements only add text: IDs in three table rows and the expansion of five rule lines, which keep the original text.
- [x] Every task has the seven template sections; text missing in the source is marked as not recorded, with the equivalent section when one exists.
- [x] Identical dependencies in the frontmatter, the roadmap index, and the epic table.
- [x] Every content document under `docs/` declares type, area, and related tasks, with no invented link.
- [x] The standard is verified by script, with tests.

## Out of scope

- Renaming sections, moving files, or rewriting the body of documents and tasks.
- Changing states, priority, or the selected task.
- Creating tasks for the gaps pointed out in `docs/plans/RECONCILIATION.md`.
- Building the visual hub.

## Result
Additive standardization applied on top of `66326d6`. Details, numbers, and open items in the [evidence](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/evidence/documentation/E00-T09-DOCUMENTATION-STANDARDIZATION.md).
