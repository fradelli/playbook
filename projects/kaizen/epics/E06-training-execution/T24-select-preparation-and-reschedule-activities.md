---
id: KZ-E06-T24
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T12, KZ-E06-T19]
---

# Choose a warm-up and reschedule activities that have not started

## Objective
Allow selecting a warm-up from the plan when adding a specific workout and
changing the date of activities that have not started, preserving times and warm-up.

## Decisions approved on 27/10/2026

- Warm-up selector from the plan, suggesting the footvolley one when there is a
  sport association in the active schedule. Allow Sem aquecimento (No warm-up).
- Rescheduling only before the start, between yesterday and today + 4 days. Validate
  origin and destination on the server, using America/Sao_Paulo.
- Keep the times, the warm-up, and the activity ID. Block rescheduling
  when there is a persisted execution or a draft in the browser.
- Preserve Treino específico (Specific workout), per the cancellation of KZ-E06-T20.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/app/treino/training-actions.ts`
- `src/features/training/application/training-mutation.types.ts`
- `src/features/training/application/mutate-training-day.ts`
- `src/features/training/application/mutate-training-day.test.ts`
- `src/features/training/application/training-dto.ts`
- `src/features/training/application/get-public-training-plan.ts`
- `src/features/training/application/get-public-training-plan.test.ts`
- `src/features/training/domain/training-day.types.ts`
- `src/features/training/domain/training-edit-window.ts`
- `src/features/training/domain/training-sport.rules.ts`
- `src/features/training/data/prisma-training.mapper.ts`
- `src/features/training/data/prisma-training-repository.ts`
- `src/features/training/data/ensure-scheduled-training-day.ts`
- `src/features/training/data/training-activity-rescheduling.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.test.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/components/training-preparation-select/training-preparation-select.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/components/training-preparation-select/training-preparation-select.types.ts`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.utils.ts`
- `tests/integration/training-activity-scheduling.test.ts`

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Implementation and safety

- The selector offers only public preparation sessions and the server validates
  their presence in the active plan. Keeping the current one preserves the existing historical reference.
- Changing the date uses the original day for ownership/revision and a separate destination.
  The origin is not replaced by arbitrary client input.
- Materialize the destination schedule within the same transaction before moving,
  preserving the activities already planned. Do not copy or recreate the real activity.
- A logically deleted marker stays at the origin to prevent recreation by the
  weekly schedule; the legacy assignment stays tied to the original day.
- Child warm-ups follow the activity in the same serializable transaction.
  Errors and concurrency cannot leave part of the change persisted.
- After success, the interface opens the destination day. Failures preserve the form.
- Do not create a migration, change canonical plans, or move completed records.

## Acceptance criteria
- [x] Selectable warm-up and footvolley suggestion based on the real plan.
- [x] Manual choice/no warm-up and historical reference preserved.
- [x] Date field with limits and navigation to the destination after success.
- [x] A started activity, a started warm-up, and a local draft block rescheduling.
- [x] Rescheduling keeps IDs and times, preserves the destination schedule, and does not recreate the origin.
- [x] Concurrency, rollback, ownership, and date limits covered by tests.
- [x] Quality, types, tests, build, and semantic review passed.

## Result
Implementation and validation completed on 27/10/2026, integrated into the new interface of KZ-E06-T25.

- 50 PostgreSQL integration tests passed across seven files, including selection of
  preparation, Sem aquecimento, concurrency, rollback, and legacy assignment.
- Chrome with an isolated database confirmed the footvolley suggestion, rescheduling with the same ID,
  times/warm-up preserved, origin not recreated, and the Sem aquecimento option
  kept after editing a time again.
- Failure fixture fixed: create an invalid definition from the origin, respecting
  the database immutability trigger.
- Application, quality, types, integrity, and build tests passed; aggregated
  results of the new UI recorded in KZ-E06-T25.
- No personal operational data was used to validate mutations.
