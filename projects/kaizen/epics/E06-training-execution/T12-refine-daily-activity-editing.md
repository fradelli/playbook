---
id: KZ-E06-T12
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T11]
---

# Refine editing of the day's activities

## Objective
Ensure that the daily instance can diverge from the weekly template without changing the recurring definition or losing independent activities.

## Known context

KZ-E06-T03 already includes adding, editing time/type, and logically deleting non-completed activities in a drawer. This task must fix only the gaps confirmed by KZ-E06-T11, including the partial materialization case, without recreating the existing flow.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `roadmap/epics/E06-training-execution/T11-review-daily-plan-lifecycle.md`
- `prisma/models/training.prisma`
- `src/features/training/data/ensure-scheduled-training-day.ts`
- `src/features/training/data/prisma-training-repository.ts`
- `src/features/training/ui/components/training-day-page/components/training-agenda-drawer/training-agenda-drawer.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.tsx`
- `src/features/training/application/mutate-training-day.ts`
- `src/features/training/application/get-training-day.ts`
- `src/features/training/application/get-training-day.test.ts`
- `src/features/training/domain/training-sport.rules.ts`
- `src/features/training/domain/training-sport.rules.test.ts`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.ts`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.test.tsx`
- `tests/integration/training-mutations.test.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-controls/training-activity-controls.tsx`
- `data/plans/2026-09-training-v1.json`
- `data/plans/2026-09-training-v1-1.json`
- `data/exercises.json`
- `data/training-execution-metadata.json`
- `schemas/exercise-library.schema.json`

## Deliverables
Not recorded in the original version of this task; equivalent content in the section "Scope and impacts".

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Expected behavior

- It is possible to cancel a game of the day, move a workout to another time, and add another activity, without changing the weekly schedule.
- Plan origin, manual change, and intentional deletion remain distinguishable.
- Completed activities and real history are not removed by editing the planning.
- Do not automatically complete already materialized dates, per KZ-E06-T11; intentional deletions remain respected.

## Corrections approved on 26/09

- Changes, inclusion, deletion, start, and completion only today and yesterday in America/Sao_Paulo, with server-side validation.
- Viewing and expanding independent of starting, including on future dates; the timer requires an explicit action.
- Partial completion sends the draft as it is, keeping empty values as zero and without marking pending items as done.
- Modal: "Há exercícios ou séries incompletos. Deseja voltar ou finalizar com os dados atuais?" (There are incomplete exercises or sets. Do you want to go back or finish with the current data?); "Voltar" (Back) highlighted, "Finalizar" (Finish) secondary.
- The warm-up has no sets; validate its switch without requiring nonexistent sets.
- New version 1.1.0 with workout data in English, named Push Workout, Pull Workout, and Lower Body Workout; preserve historical sources and user comments.
- i18n and bottom navigation are not implemented. The initial authorization kept the changes uncommitted; on 27/09 the user approved the commit, local import, and PR.

## Scope and impacts

- Adjust only the mutations, reads, UI, and tests needed by the proven gaps.
- Verify ownership, concurrent revision, linked preparation, and null times.

## Out of scope

- Weekly template editor or automatic replanning by recommendations.

## Decisions before implementation

- Reanalyze the current code and the decisions of KZ-E06-T11, present an incremental plan, and wait for explicit approval.

## Acceptance criteria
- [x] Partial completion with a warm-up without sets, confirmation, and viewing without starting pass the tests.
- [x] Today/yesterday can be changed; all mutations outside that window are rejected before the repository.
- [x] Daily changes do not rewrite the template nor the historical definitions.
- [x] Version 1.1.0 in English imported and activated after the commit authorization on 27/09.

## Result
Flow corrections implemented and submitted to local validation. Partial
completion does not require sets on the warm-up, keeps the state of the switches,
and normalizes empty numeric values without fabricating repetitions performed.
The server prevents mutations outside today/yesterday; viewing remains independent
of starting. Expanding and collapsing live on the title, with no duplicate button.

Version 1.1.0 of the workout sheet was created without changing version 1.0.0. English names
use the explicit `name_en` field of the library; `name_pt` and the legacy database
column remain for compatibility. The importer and the audit recognize the new
field. IDs, doses, order, and blocks are preserved; user comments are not
translated. Import authorized on 27/09 and conditioned on the committed source.

Bottom navigation with icons only remains an undecided proposal in KZ-E06-T14.
Confirmed future languages: Portuguese, Spanish, and English; no i18n implementation.

Local validation: 272 unit tests, 41 PostgreSQL integrations, types, lint,
structure, data, format, build, and diff with no problems. Confirmed 200 responses
for yesterday and a future date; the future date does not expose a workout start. Semantic
review preserved the application boundary for the mutation window, the local
draft state, and the distinction between preparation without sets and the main execution.

Pre-PR review fixed three inconsistencies: the projection preserves the
persisted state of the toggle regardless of the set measures; the warm-up
association recognizes Futevôlei and Footvolley without changing the name entered
by the user; pausing another activity does not modify drafts outside today/yesterday.
Local drafts with invalid JSON do not prevent starting a new activity.
The sport comparison lives in a pure domain rule, with no UI or Prisma dependency.
Set data, exercise completion, and activity completion remain distinct
responsibilities.

Local delivery completed on 27/09: source fbd544e imported and activated in version
1.1.0, with 34 exercise definitions, 7 sessions, and 42 new prescriptions.
Reimport returned a no-op. Counts and hashes of assignments, activities,
executions, and food data remained identical before/after. Previous versions
and already materialized dates were not rewritten; future reconciliation
remains out of scope in KZ-E06-T13.

`pnpm run ci` passed fully: 272 unit tests, 41 integrations,
33 validator regressions, coverage above the thresholds, types, format,
lint, structure, schema, data, build, and an audit with no known vulnerabilities.
