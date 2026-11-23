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

- `docs/plans/nutrition/E07.md`: epic plan.
- `docs/product/P0.md`: P0 rules for states and transitions.
- `data/nutrition/active.json`: approved options and quantities.
- `src/lib/security/authorization.ts`: authorization of mutations.
- `src/features/nutrition/`: feature code from KZ-E07-T01 and KZ-E07-T02.

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

- Compare the options shown with the public plan.
- Tests cover each transition of the P0 rules, a missing description for a different meal, and a concurrent revision conflict.

## Acceptance criteria

- [ ] After a reload, the recorded status and comment of each meal are restored.
- [ ] The recorded execution leaves the plan data unchanged and is not visible from another workspace.
- [ ] `followed_different` without a description is rejected by the server.

## Result

Not started.
