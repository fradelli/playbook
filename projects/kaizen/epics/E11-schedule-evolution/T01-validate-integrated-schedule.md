---
id: KZ-E11-T01
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Validate the integrated schedule base

## Objective
Verify the flows already integrated in PR #86 and record which validations remain pending. This is a residual validation task, not a rebuild of the schedule.

## Inputs
- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — consult the contract or section matching the scope.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — consult the contract or section matching the scope.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — consult the contract or section matching the scope.
- [src/features/schedule/data/schedule-writer.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/data/schedule-writer.ts) — consult the contract or section matching the scope.
- [src/features/schedule/ui/components/calendar-range/hooks/use-calendar-days.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/calendar-range/hooks/use-calendar-days.ts) — consult the contract or section matching the scope.
- [tests/integration/agenda-foundation.test.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/tests/integration/agenda-foundation.test.ts) — consult the contract or section matching the scope.

## Deliverables
Verifiable result described in the criteria below, with evidence linked to this task. Before editing code, apply the relevant sections of the [architecture](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) and the local contracts. Do not load entire historical plans.

## Subtasks
- [ ] Check activity creation/editing, groups, tasks, and reservations in the integrated base.
- [ ] Check the cache when shrinking/expanding days, a lost response, and the update of affected dates.
- [ ] Run proportional regressions and record results and browser/device limitations.

## Validation
Check links, IDs, dependencies, and consistency with product rules. When implementation is authorized, run the proportional gates and the plan's scenarios; record what was run and what remains pending. Tests not yet run do not count as evidence.

## Acceptance criteria
- [ ] The report distinguishes existing code, executed tests, and validation not performed.
- [ ] List, reservation, and card preserve identity after reload; internal occupancy and independent overlap are verified.
- [ ] Parent movement and group change preserve times, links, and history according to the rules.

## Out of scope

Do not implement gestures or recurrence, or rewrite the foundation. Real failures found must be delimited before expanding the scope.

## Result
Backlog recorded on 21/11/2026 during the documentation reconciliation. No execution of this task was started by this record. Canonical status lives only in the roadmap index.
