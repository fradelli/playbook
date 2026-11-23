---
id: KZ-E12-T09
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E12-T08]
---

# Migrate the schedule caches and the workout draft to the approved store

## Objective
Replace the hand-built client caches with the state pattern approved in KZ-E12-T08, preserving the concurrency and draft behavior.

## Context

The three places identified in the 2026-11-23 audit are `use-schedule-entities.ts`, `use-calendar-days.ts`, and `use-training-activity-draft.ts`. The workout draft also uses the native `window.confirm` to pause another activity, outside the design system; the schedule already has the `schedule-confirm` component.

If KZ-E12-T08 rejects Zustand, this task applies the approved alternative or is cancelled with the decision recorded.

## Inputs
- Decision approved by KZ-E12-T08 in `docs/decisions/`.
- `docs/architecture/TARGET-ARCHITECTURE.md` — section "Client Components".
- `src/features/schedule/ui/components/schedule-workspace/` — contexts and hooks.
- `src/features/schedule/ui/components/calendar-range/hooks/use-calendar-days.ts`.
- `src/features/training/ui/hooks/use-training-activity-draft/`.
- `src/features/schedule/ui/components/schedule-confirm/schedule-confirm.tsx` — existing confirmation.

## Deliverables
- Schedule store with selectors, replacing the three contexts and the aggregate `useMemo`.
- Calendar days cache in the same approach, keeping epochs and cancellation.
- Workout draft with local persistence and cross-tab synchronization, with no custom `CustomEvent` or manual localStorage scan.
- Pause confirmation with a design system dialog.

## Subtasks
- [ ] Install the approved dependency with an exact version.
- [ ] Migrate the schedule and remove the contexts.
- [ ] Migrate the calendar cache.
- [ ] Migrate the workout draft and the confirmation.
- [ ] Keep or expand the current regression tests.

## Validation
- `pnpm test`, `pnpm typecheck`, and `pnpm structure:check` pass.
- Tests cover revision conflict, a draft in another tab, and storage failure.
- Manual check in two tabs shows pause and resume in sync.

## Acceptance criteria
- [ ] No client cache uses `useReducer` only to force rendering.
- [ ] No `window.confirm` remains in product code.
- [ ] The observable behavior is the same as before.

## Result
Not started.
