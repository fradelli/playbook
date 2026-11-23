---
id: DS-E03-T06
epic: DS-E03
project: design-system
repository: fradelli/design-system
depends_on: [DS-E03-T01, DS-E03-T02]
---

# Admit the Spinner and Empty recipes

## Objective

Add the official Mira Spinner and Empty recipes needed to replace PendingButton and LoadingRegion.

## Inputs

- `https://ui.shadcn.com/r/styles/base-mira/spinner.json` and `empty.json` — official recipes.
- `docs/governance/component-admission.md` — checklist.
- `package.json` — `exports`.

## Deliverables

- `src/components/spinner/` and `src/components/empty/` with public subpaths, stories, and tests.
- Updated catalog and README.
- A minor Changeset.

## Subtasks

- [ ] Add both recipes with package tokens.
- [ ] Add exports, stories, and tests.
- [ ] Record the admission in the catalog.

## Validation

- `npm run ci` passes, including `pack:check` with the new subpaths.

## Acceptance criteria

- [ ] `@fradelli/ui/spinner` and `@fradelli/ui/empty` are published entry points.

## Result

Not started.
