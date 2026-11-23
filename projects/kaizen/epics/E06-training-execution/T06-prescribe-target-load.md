---
id: KZ-E06-T06
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T03]
---

# Prescribe target load per exercise and per set

## Objective
Show a target load distinct from the load actually performed, allowing a single target for the exercise or different targets per set.

## Known context

In the implementation proposed by KZ-E06-T03, the execution stores `loadKg` per set and the exercise reports `loadApplicable` and `loadUnit`. There is still no dedicated field for the target load in the prescribed definition. The current data uses kg. Confirm these facts again after the corresponding PR is merged.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `data/training-execution-metadata.json`
- `schemas/training-execution-metadata.schema.json`
- `prisma/models/training.prisma`
- `src/features/plan-definition-import/data/persist-training-plan-definition.ts`
- `src/features/training/application/training-dto.ts`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`

## Deliverables
Not recorded in the original version of this task; equivalent content in the section "Scope and impacts".

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Expected behavior

- A prescription can define the same load for all sets or a specific load for each set.
- The target appears with its unit and is never confused with the load performed.
- Exercises without an applicable load neither show nor require a target.
- Old plans without a target load remain importable and readable.

## Scope and impacts

- Reanalyze the canonical contract, unit, validation, import, versioned persistence, projection, and compact mobile presentation.
- Preserve the immutability of already imported versions and plan a migration/rollback if the schema changes.
- Test a single target, per-set targets, absence of a target, and exercises without load.

## Out of scope

- Calculate or recommend loads automatically.
- Change the load performed or move execution instructions into the summary.

## Decisions before implementation

- Define the canonical representation of the two target modes and whether there is a real need for a range or another unit.
- Check the values available in the approved source; do not invent loads for the current plan.
- Reanalyze the current code, present a solution and trade-offs, and wait for explicit approval before implementing.

## Acceptance criteria
- [ ] Both target modes can be represented and shown without changing real results.
- [ ] Compatibility with old plans, units, and absence of a target is demonstrated by tests.
- [ ] The approved solution has a migration and rollback when needed.

## Result
Not yet started.
