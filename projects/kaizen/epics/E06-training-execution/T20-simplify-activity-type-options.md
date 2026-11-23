---
id: KZ-E06-T20
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T12]
---

# Remove specific workout from the add options

## Cancellation on 26/10/2026

The user decided to keep the Treino específico (Specific workout) option. Removing it
was no longer necessary and the task was dropped from the pending items. The ID is kept only
as history; no interface, server, or data change was made.
The scope below records the earlier proposal and does not authorize implementation.

## Objective
Simplify the list of activity types by removing the Treino específico option
by user decision, without deleting historical data or schedule activities.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.tsx`
- `src/features/training/ui/components/training-day-page/components/training-agenda-drawer/training-agenda-drawer.tsx`
- `src/features/training/data/prisma-training-repository.ts`
- `src/features/training/domain/training-day.types.ts`
- `prisma/models/training.prisma`
- `data/schedule.json`

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Confirmed rules

- Do not offer Treino específico when adding a new activity.
- Keep Treino do plano (Plan workout), Prática esportiva (Sports practice), and Mobilidade (Mobility).
- Do not automatically delete the enum, history, or existing activities of the `specific_training` type.
- Preserve the planned footvolley workouts and their warm-ups.

## Decisions before implementation

- Re-analyze and present the plan to the user before implementing.
- The current schedule uses `specific_training` for footvolley: decide whether it stays as internal compatibility or moves to another category in a new plan version.
- Approve how to edit and label existing activities of this type without silent conversion or data loss.
- Decide whether manual creation will also be rejected by the server; hiding the option does not replace this business decision.

## Out of scope

- Deleting data or rewriting historical versions without specific authorization and migration.
- Implementing i18n or redesigning the drawer.

## Acceptance criteria
- [ ] Adding does not offer Treino específico and keeps the other three options.
- [ ] Schedule, warm-ups, and existing records remain queryable.
- [ ] Editing of legacy data follows the approved policy and has tests.
- [ ] The interface and the server apply the same approved creation rule.

## Result
Canceled by user decision on 26/10/2026. Treino específico remains
available; this task must not cause any functional change.
