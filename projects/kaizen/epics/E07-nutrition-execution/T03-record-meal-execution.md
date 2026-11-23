---
id: KZ-E07-T03
epic: KZ-E07
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E07-T02]
---

# Record choices, adherence, and comments

## Objective
Present the approved options and record the actual outcome of each meal.

## Inputs
- `docs/plans/nutrition/E07.md`
- `docs/product/P0.md`
- `data/nutrition/active.json`
- `src/lib/security/authorization.ts`
- `src/features/nutrition/`

## Deliverables
- Meal components and Server Actions with state and revision.

## Subtasks
- [ ] Differentiate main item, complement, and alternative.
- [ ] Preserve original quantities and units.
- [ ] Avoid converting an alternative into a clinical equivalence.
- [ ] Record `followed_plan`, `followed_different`, `skipped`, and comment.
- [ ] Require a description for a different meal and clear incompatible fields.
- [ ] Preserve the draft on error and detect concurrency.

## Validation
- Check options against the public plan and transitions against the P0 rules.

## Acceptance criteria
- [ ] Reloading restores the record without changing the plan or exposing another workspace.

## Result
Not yet completed.
