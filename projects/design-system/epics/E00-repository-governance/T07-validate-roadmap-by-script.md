---
id: DS-E00-T07
epic: DS-E00
project: design-system
repository: fradelli/design-system
depends_on: [DS-E00-T01]
---

# Validate the roadmap by script

## Objective

Detect roadmap inconsistencies automatically instead of relying on manual review.

## Inputs

- `roadmap/CLAUDE.md` — "Validation".
- `roadmap/README.md` — index tables.
- `roadmap/epics/*/README.md` and task frontmatter.

## Deliverables

- `scripts/validate-roadmap.mjs` with tests.
- A `roadmap:check` script included in `npm run ci`.

## Subtasks

- [ ] Check unique IDs, existing dependencies, and absence of cycles.
- [ ] Check that frontmatter, the global index, and the epic tables list the same dependencies.
- [ ] Check the seven required sections, relative links, the single `IN_PROGRESS` rule, and `ACTIVE.md` alignment.

## Validation

- `npm run roadmap:check` passes on the current roadmap.
- An unknown dependency inserted on purpose makes the check fail.

## Acceptance criteria

- [ ] CI fails when the roadmap becomes inconsistent.

## Result

Cancelled on 2026-11-23: the roadmap moved to the shared playbook, where PB-E00-T04 creates `npm run roadmap:check` for every project.
