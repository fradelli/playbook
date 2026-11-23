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

- `docs/plans/nutrition/E07.md`: epic plan.
- `docs/product/P0.md`: P0 product rules.
- `src/features/nutrition/application/nutrition-dto.ts`: DTOs from KZ-E07-T01.
- `src/app/dieta/page.tsx`: page to create or change.

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

- Component and navigation tests pass for previous date, Today, next date, a missing day type, and the empty and error states.
- Manual check of responsiveness on a phone-width viewport.

## Acceptance criteria

- [ ] The page lists meals in the prescribed order and shows a time only when it is confirmed.
- [ ] A date without a day type shows a day-type choice and no range or modules.
- [ ] Previous date, Today, and next date change the date in `America/Sao_Paulo`.

## Result

Not started.
