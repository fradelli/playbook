---
id: KZ-E06-T18
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T16]
---

# Guide the execution of combined blocks

## Objective
Re-analyze with the user and implement the guidance of A/B blocks, using the composition already preserved in the plan sheet without changing the prescriptions.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `data/plans/2026-09-training-v1.json`
- `prisma/models/training.prisma`
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.utils.ts`

## Deliverables
- Approved flow of A → rest → B → rest → next round, preserving the rests of each member.
- Recoverable local draft, return to the members, and persistence only when the activity is completed.
- Explicit behavior for zeroed exercises, interruption, and later correction.
- Tests for order, restoration, sets per side, and partial completion.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Out of scope

- Changing the plan sheet or inventing doses, rests, and progressions.
- Implementing before a new review by the user.

## Acceptance criteria
- [ ] UX and advance rules approved before implementation.
- [ ] Blocks and members preserve existing IDs and prescriptions.
- [ ] Guided navigation does not anticipate writing to the database.

## Result
Planned; KZ-E06-T16 keeps only manual navigation and the subtitles of the pairs.
