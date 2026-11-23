---
id: KZ-E12-T06
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Remove the duplicate refresh after mutations

## Objective
Ensure a single route refresh after each workout mutation.

## Context

Finding from the 2026-11-23 audit: `src/app/workout/training-actions.ts` calls `revalidatePath("/workout")` when the mutation is saved, and the client still calls `router.refresh()` in `src/features/training/ui/hooks/use-training-action-feedback.ts` and in five other places. A `revalidatePath` inside a Server Action already returns the updated tree, so the route is fetched twice.

## Inputs
- `src/app/workout/training-actions.ts` — revalidation.
- `src/features/training/ui/hooks/use-training-action-feedback.ts` — client refresh.
- `docs/architecture/TARGET-ARCHITECTURE.md` — section "Server Actions", step 8.

## Deliverables
- A single refresh strategy per flow, chosen and applied in the six `router.refresh()` places.
- Exceptions justified in a comment when the flow does not go through a Server Action.

## Subtasks
- [ ] Map the six `router.refresh()` places and the action of each one.
- [ ] Remove the redundant refresh.
- [ ] Adjust the tests that expect the refresh.

## Validation
- `pnpm test` passes.
- In the browser, saving an activity triggers a single route refresh request.

## Acceptance criteria
- [ ] No mutation flow refreshes the route twice.
- [ ] The screen shows the saved state without a manual reload.

## Result
Not started.
