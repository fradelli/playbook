---
id: KZ-E12-T20
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E12-T13]
---

# Split the oversized training UI components

## Objective

Split the largest training UI components into smaller components and hooks without changing behavior.

## Context

Finding from the repository sweep of 2026-11-24 on `developer` (`67443f0`).

- `training-activity-card.tsx` has 450 lines, `training-date-navigation.tsx` 337, and `training-exercise.tsx` 302.
- KZ-E12-T10 covers `training-activity-form.tsx`; KZ-E12-T13 changes the folder depth these files live in.

## Inputs

- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.tsx`
- `src/features/training/ui/components/training-day-page/components/training-date-navigation/training-date-navigation.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`
- `docs/architecture/TARGET-ARCHITECTURE.md` — section "Organização dos componentes React".

## Deliverables

- Each of the three components under 200 lines, with extracted subcomponents and hooks in their own folders.
- Existing tests passing, plus tests for extracted hooks with logic.

## Subtasks

- [ ] Extract presentational parts and hooks from each component.
- [ ] Keep props and behavior unchanged.
- [ ] Run the UI tests and check the screens at 1440 and 390 px.

## Validation

- `pnpm test` passes with no test removed.
- `wc -l` reports under 200 lines for each of the three files.

## Acceptance criteria

- [ ] Each of the three files has under 200 lines.
- [ ] Every extracted component has its own folder and passes `pnpm structure:check`.
- [ ] The existing UI tests of the three components pass unchanged.

## Result

Not started.
