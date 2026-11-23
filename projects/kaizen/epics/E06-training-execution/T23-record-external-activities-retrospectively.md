---
id: KZ-E06-T23
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T12]
---

# Record footvolley and external activities retrospectively

## Implemented scope

Direct recording of sports practices and specific workouts for today and yesterday,
with no timer, real times, or mandatory warm-up. Optional preparation
can be viewed; the recording form appears only at the end of the expanded card.

## Objective
Not recorded in the original version of this task; equivalent content is in the section «Implemented scope».

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

## Deliverables
Not recorded in the original version of this task; equivalent content is in the section «Implemented scope».

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Acceptance criteria
Not recorded in the original version of this task; equivalent content is in the section «Acceptance and result».

## Result
Not recorded in the original version of this task; equivalent content is in the section «Acceptance and result».

## Acceptance and result

- [x] Recording without guided execution; unknown times remain absent.
- [x] Optional warm-up visible, without blocking the record.
- [x] Record hidden on the collapsed card and in the last position when expanded.
- [x] Fixed workspace, ownership, revision, and the block on future completion preserved.
- [x] Additive migration applied to the local PostgreSQL on 04/10/2026.
- [x] PostgreSQL integrations and checks of PRs #61 and #62 passed.

Implementation authorized and reviewed by the user in the conversation. Update of
`developer` with KZ-E06-T22 incorporated without widening the retrospective window.
Tests, PostgreSQL integrations, backup/restore, build, quality, data, and governance
passed in the first CI of PR #61. The audit failed with 17 findings.
Fixes for Next.js 16.3.8 and transitive dependencies reduced the local audit to one high
finding in `braces` 3.0.3, a development dependency with no published patch
([GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)). PR #62
adds an internal fork based on the reviewed commit
`28d440b5dd449dbf1fe6f3506cf94ecca4d02660`, with depth limits. The fork
is identified and documented in `vendor/braces/README.kaizen.md`.
Frozen install, lint, formatting, audit with no findings, 291 app tests,
and 904 package tests passed locally. The full CI of PRs #61 and #62 passed
on 12/10/2026, including PostgreSQL, backup/restore, and build. The full manual
journey remains pending; no planning document accompanies the delivery.
