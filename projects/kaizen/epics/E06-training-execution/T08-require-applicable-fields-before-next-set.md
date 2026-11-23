---
id: KZ-E06-T08
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T03]
---

# Require applicable measures before advancing the set

## Objective
Align the navigation between sets with the fields required by the exercise, preserving the ability to go back and correct previous sets.

## Known context

In KZ-E06-T03, advancing already requires a positive measure on the current set and treats `0` as not performed, but it does not check whether the load was filled in when `loadApplicable` is true.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/features/training/ui/hooks/use-training-exercise-draft/use-training-exercise-draft.utils.ts`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/training-local-exercise-editor/training-local-exercise-editor.tsx`
- `src/features/training/data/prisma-training-repository.ts`
- `src/features/training/application/training-dto.ts`

## Deliverables
Not recorded in the original version of this task; equivalent content in the section "Scope and impacts".

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Expected behavior

- Repetitions or applicable measures must be positive to release the next set; empty and `0` do not release it.
- When the exercise uses load, the load must also be valid and positive; an exercise without load neither shows nor requires the field.
- Previous sets remain accessible and editable; finishing the workout can still persist empty sets as zero under the existing rule.

## Scope and impacts

- Review the UI and server validation to avoid divergent rules.
- Cover bilateral measures, time, contacts, and directions, without assuming that every exercise uses repetitions.
- Test regression of filling in, advancing, and going back.

## Out of scope

- Save each set separately or interpret zero as a performance improvement.

## Decisions before implementation

- Confirm how assisted loads, a bar without plates, or other special measures would be represented; do not silently accept `0 kg` to advance under the current contract.
- Reanalyze the current code, present a solution and trade-offs, and wait for explicit approval before implementing.

## Acceptance criteria
- [ ] Advancing respects all applicable fields, including load when present.
- [ ] Zero and empty remain equivalent for blocking advancement, without preventing finalization with zeroed sets.
- [ ] Tests cover exercises with and without load and unconventional doses.

## Result
Canceled by the explicit decision of independent editing in KZ-E06-T26. Do not require sequence or positive load as a new condition for advancing; confirmation requires the valid applicable measures.
