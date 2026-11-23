---
id: KZ-E07-T05
epic: KZ-E07
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E07-T04]
---

# Validate the nutrition flow

## Objective

Validate the complete flow of viewing and recording nutrition before release.

## Inputs

- `docs/plans/nutrition/E07.md`: epic plan.
- `docs/product/P0.md`: P0 product rules.
- `src/features/nutrition/`: feature code.
- `src/lib/security/`: workspace and authorization code.
- `tests/`: existing tests.

## Deliverables

- Automated tests and a manual checklist of the flow, with the known limitations recorded.

## Subtasks

- [ ] Test day type, meals, choices, alternative, comment, and empty states.
- [ ] Validate basic accessibility and mobile navigation.
- [ ] Confirm units, unknowns, and provenance.
- [ ] Confirm public access in the fixed workspace, write error, and concurrency.
- [ ] Record known limitations.

## Validation

- `pnpm run ci` passes.
- The manual checklist is run once on a mobile viewport and once on desktop.

## Acceptance criteria

- [ ] Automated tests cover day type, meals, choices, alternative, comment, empty states, write error, and concurrency, and all pass.
- [ ] Every item of the manual checklist is marked as passed or listed as a known limitation.

## Result

Not started.
