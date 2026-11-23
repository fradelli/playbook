---
id: KZ-E06-T07
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T03]
---

# Show the last execution of each set

## Objective
Give a progression reference by showing, on the current set, the result of the set with the same number in the last completed execution of the same exercise.

## Known context

KZ-E06-T03 persists exercises and sets per activity, but the day read queries only the executions of that date. The stable identity of the exercise across plan versions needs to be confirmed, without relying on the name alone.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `prisma/models/training.prisma`
- `src/features/training/data/prisma-training-repository.ts`
- `src/features/training/application/get-training-day.ts`
- `src/features/training/application/training-dto.ts`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/training-local-exercise-editor/training-local-exercise-editor.tsx`

## Deliverables
Not recorded in the original version of this task; equivalent content in the section "Scope and impacts".

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Expected behavior

- Set 1 shows set 1 of the last completed execution of the same exercise; set 2 shows set 2, and so on.
- The reference is informational: the user can keep, improve, or reduce the result.
- With no history or no matching set, no value is invented.
- Exercises without load show only the applicable measures.

## Scope and impacts

- Investigate the canonical identity of exercises across plans, versions, and sessions; evaluate reusing the existing `ExerciseDefinition` before proposing another entity.
- Define an efficient query, ordering by actual completion, workspace ownership, and a minimal projection for the UI.
- Cover a change in the number of sets, zeroed sets, a deleted activity, and more than one session on the same day.

## Out of scope

- Require progression, change prescriptions, or create historical charts.
- Refactor the entire exercise catalog without proven need.

## Decisions before implementation

- Define whether the last execution with a zeroed set counts as a reference or whether the search goes back to the last set actually performed.
- Confirm the stable key of the exercise and the tie-break for executions on the same day.
- Reanalyze the current code, present a solution and trade-offs, and wait for explicit approval before implementing.

## Acceptance criteria
- [ ] The reference by set number is correct across compatible versions and does not leak data from another workspace.
- [ ] Cases with no history, with different sets, and without load are clear and tested.
- [ ] The query does not make the daily page unnecessarily slow.

## Result
Scope incorporated into KZ-E06-T26 with matching by type (warm-up/work), across workouts, approved by the user. Do not implement another parallel reference.
