---
id: KZ-E11-T01
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Validate the integrated schedule base

## Objective

Verify the flows already integrated in PR #86 and record which validations remain pending.

## Context

This is a residual validation task, not a rebuild of the schedule.

## Inputs

- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — reconciled agenda contracts; read only the section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — drag-and-drop plan and scenarios; read only the section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — schedule product rules.
- [src/features/schedule/data/schedule-writer.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/data/schedule-writer.ts) — schedule writes.
- [src/features/schedule/ui/components/calendar-range/hooks/use-calendar-days.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/calendar-range/hooks/use-calendar-days.ts) — calendar days hook.
- [tests/integration/agenda-foundation.test.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/tests/integration/agenda-foundation.test.ts) — existing integration tests.
- [docs/architecture/TARGET-ARCHITECTURE.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) — apply the sections relevant to the change before editing code.

## Deliverables

- A validation report, linked from the Result, that separates existing code, executed tests, and validation not performed.

## Subtasks

- [ ] Check activity creation/editing, groups, tasks, and reservations in the integrated base.
- [ ] Check the cache when shrinking/expanding days, a lost response, and the update of affected dates.
- [ ] Run proportional regressions and record results and browser/device limitations.

## Validation

- Links, IDs, and dependencies resolve, and the report agrees with the product rules.
- When implementation is authorized, the proportional gates and the plan scenarios run, and the Result records what ran and what remains pending. Tests not run do not count as evidence.

## Acceptance criteria

- [ ] The report distinguishes existing code, executed tests, and validation not performed.
- [ ] List, reservation, and card preserve identity after reload; internal occupancy and independent overlap are verified.
- [ ] Parent movement and group change preserve times, links, and history according to the rules.

## Out of scope

- Gestures, recurrence, and rewriting the foundation.
- Real failures found are delimited before the scope expands.

## Result

Not started. Backlog recorded on 2026-11-21 during the documentation reconciliation. Status lives only in the roadmap index.
