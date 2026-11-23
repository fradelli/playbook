---
id: KZ-E06-T05
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T04]
---

# Validate the workout flow

## Objective
Validate the complete flow of viewing and executing a workout before publication.

## Inputs
- `docs/history/implementation/E06.md`
- `docs/product/P0.md`
- `src/features/training/`
- `src/lib/security/`
- `tests/`

## Deliverables
- Automated evidence and a manual checklist of the flow.

## Subtasks
- [ ] Test assignment, preparation, sets, load, rest, history, and empty states.
- [ ] Validate basic accessibility and mobile navigation.
- [ ] Confirm dates, times, IDs, and provenance.
- [ ] Confirm public access in the fixed workspace, write error, and concurrency.
- [ ] Record known limitations.

## Validation
- `pnpm run ci` passes.
- Walk through the manual checklist on a mobile viewport.

## Acceptance criteria
- [ ] The automated tests and the manual checklist cover assignment, preparation, sets, load, rest, history, and empty states, each marked pass or listed as a known limitation.
- [ ] `pnpm run ci` passes.

## Result
Not started.
