---
id: KZ-E06-T18
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T16]
---

# Guide the execution of combined blocks

## Objective

Guide the execution of A/B blocks, using the composition already preserved in the plan sheet and without changing prescriptions.

## Inputs

- `docs/architecture/TARGET-ARCHITECTURE.md`
- `data/plans/2026-09-training-v1.json`
- `prisma/models/training.prisma`
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.utils.ts`

## Deliverables

- An approved flow of A → rest → B → rest → next round, keeping the rest of each member.
- A recoverable local draft, a way back to each member, and persistence only when the activity is completed.
- Explicit behavior for zeroed exercises, interruption, and later correction.
- Tests for order, restoration, sets per side, and partial completion.

## Subtasks

- [ ] Review the UX and the advance rules with the user and get approval.
- [ ] Implement the guided flow and the local draft.
- [ ] Define and implement zeroed exercises, interruption, and correction.
- [ ] Add the tests listed in Deliverables.

## Validation

- Tests cover order, restoration, sets per side, and partial completion.
- Nothing is written to the database before the activity is completed.
- `pnpm run ci` passes.

## Acceptance criteria

- [ ] The user approved the UX and the advance rules before implementation started.
- [ ] Blocks and members keep their existing IDs and prescriptions.
- [ ] Moving through the guided flow writes nothing to the database until the activity is completed.

## Out of scope

- Changing the plan sheet or inventing doses, rests, and progressions.
- Implementing before a new review by the user.

## Result

Not started. KZ-E06-T16 keeps only manual navigation and the pair subtitles.
