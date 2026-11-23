---
id: KZ-E07-T02
epic: KZ-E07
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T04, KZ-E07-T01]
---

# Create the diet page for the day

## Objective
Show the structure of the date, allow choosing the day type, and navigate with good readability on mobile.

## Inputs
- `docs/plans/nutrition/E07.md`
- `docs/product/P0.md`
- `src/features/nutrition/application/nutrition-dto.ts`
- `src/app/dieta/page.tsx`

## Deliverables
- Server-rendered page for the day's diet with date navigation.

## Subtasks
- [ ] Organize meals in the prescribed order.
- [ ] Implement previous date, Today, and next date in `America/Sao_Paulo`.
- [ ] Show times only when confirmed.
- [ ] Ask for the day type when missing, without inventing a range or modules.
- [ ] Indicate missing data without estimating it.
- [ ] Implement empty and error states.

## Validation
- Test responsiveness, semantics, and navigation.

## Acceptance criteria
- [ ] The user understands and assigns the day's structure on a single page.

## Result
Not yet completed.
