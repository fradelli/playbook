---
id: KZ-E06-T23
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T12]
---

# Record footvolley and external activities retrospectively

## Objective

Record sports practices and specific workouts for today and yesterday directly, without a timer, real times, or a mandatory warm-up.

## Inputs

- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/app/workout/training-actions.ts`
- `src/features/training/application/mutate-training-day.ts`
- `src/features/training/application/training-mutation.types.ts`
- `src/features/training/data/prisma-training-repository.ts`
- `src/features/training/domain/training-retrospective-record.rules.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-controls/training-activity-controls.tsx`
- `prisma/migrations/20261004120000_allow_retrospective_external_activity/migration.sql`
- `tests/integration/training-mutations.test.ts`

## Expected behavior

- Optional preparation can be viewed; the recording form appears only at the end of the expanded card.

## Deliverables

- Retrospective recording rules, mutation, and repository support for today and yesterday.
- Additive migration `20261004120000_allow_retrospective_external_activity`.
- Card and controls showing the record last, only when the card is expanded.
- Integration tests in `tests/integration/training-mutations.test.ts`.

## Subtasks

- [x] Implement recording without guided execution, keeping unknown times absent.
- [x] Show the optional warm-up without blocking the record.
- [x] Apply the additive migration to the local PostgreSQL (04/10/2026).
- [x] Pass the PostgreSQL integrations and the CI of PRs #61 and #62.
- [ ] Walk through the full manual journey.

## Validation

- `pnpm run ci` passes, including PostgreSQL integrations, backup/restore, and build.
- The manual journey records a practice for yesterday and confirms the record is refused for a future date.

## Acceptance criteria

- [x] An activity is recorded without guided execution, and unknown times stay empty.
- [x] The optional warm-up is visible and does not block the record.
- [x] The record is hidden on the collapsed card and is the last item when expanded.
- [x] Fixed workspace, ownership, revision, and the block on future completion are preserved.
- [ ] The full manual journey passed.

## Result

Implemented, authorized, and reviewed by the user; `developer` was updated with KZ-E06-T22 without widening the retrospective window. The first CI of PR #61 failed the audit (17 findings); dependency fixes left one high finding in `braces` 3.0.3 without a published patch ([GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)), so PR #62 added an internal fork from commit `28d440b5dd449dbf1fe6f3506cf94ecca4d02660` with depth limits, documented in `vendor/braces/README.kaizen.md`. The full CI of PRs #61 and #62 passed on 12/10/2026 (291 app tests, 904 package tests, audit clean).

Open: the full manual journey.
