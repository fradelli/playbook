---
id: KZ-E06-T11
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T03]
---

# Review the daily plan lifecycle

## Objective
Document and decide the rules for generating, navigating, and persisting the day before changing its implementation.

## Known context

KZ-E06-T03 stores the weekly schedule in the plan version and materializes only the queried date, in a transaction, from today through today + 4 days. There is no entity named `DailyPlan`; the date is composed of assignment and activities. The prior existence of any activity or assignment prevents a new materialization. Confirm the behavior in the current code after the merge.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `data/schedule.json`
- `prisma/models/training.prisma`
- `src/features/training/application/get-training-day.ts`
- `src/features/training/application/resolve-training-day-date.ts`
- `src/features/training/data/ensure-scheduled-training-day.ts`
- `src/app/treino/page.tsx`
- `src/features/training/data/prisma-training-repository.ts`

## Deliverables
Not recorded in the original version of this task; equivalent content in the section "Deliverables and impacts".

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Deliverables and impacts

- Proven current flow: weekly template, day access, creation, persistence, protection against duplication, and return to the UI.
- Decision between a future read without persistence, a navigation limit, or another simple solution; do not arbitrarily change the current limit.
- Rule for a partially created day, including a manual activity added before the first materialization, intentional deletion, and rest.
- Decision on mobile loading feedback when generation is noticeable.
- Cases of concurrency, the `America/Sao_Paulo` time zone, and limits of the past and the future.

## Out of scope

- Implement another strategy before approval or pre-generate a whole month.
- Clean up operational data or import a new weekly schedule.

## Decisions before implementation

- Approve the read/persistence policy and the future limit; any derived code task requires a new analysis and approval.

## Acceptance criteria
- [x] The real flow is documented without assuming a nonexistent `DailyPlan`.
- [x] Decisions on navigation, partial materialization, and feedback are explicit.
- [x] Gaps were broken down into KZ-E06-T12 and KZ-E06-T13 without implementing code in this task.

## Result
Review and decisions approved by the user. The weekly template belongs to the imported version; `getTrainingDay` materializes only the queried date in a serializable transaction and then projects the assignment and the activities.

- Kept today through today + 4 days and the `America/Sao_Paulo` time zone; do not create past plans or pre-generate weeks.
- Any existing assignment or activity, including logically deleted ones, prevents a new materialization. Do not automatically complete a partial day nor recreate intentional deletions. Editing refinements stay in KZ-E06-T12.
- Dates without entries in the new format have no fixed activities; the Saturday game only by manual inclusion.
- Kept the route loading; no confirmation or save message during local execution.
- Reconciliation of future days after a plan change remains in KZ-E06-T13. The authorized local reset eliminates the current legacy data, but does not replace this future rule.
