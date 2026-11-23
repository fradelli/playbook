---
id: KZ-E12-T08
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Decide the global state and form pattern

## Objective
Record a decision on adopting Zustand for shared client state and React Hook Form for complex forms, with a criterion for when to use each.

## Context

Facts from the 2026-11-23 audit:
- The project uses neither Zustand nor React Hook Form.
- There are three hand-built client caches using a mutable `Map` and `useReducer` to force rendering: `use-schedule-entities.ts`, `use-calendar-days.ts`, and the workout draft in `use-training-activity-draft.ts`, which uses `CustomEvent`, the `storage` event, and a localStorage scan.
- `schedule-workspace.tsx` creates three contexts and a long `useMemo`; `useScheduleWorkspace` joins the contexts again.
- `training-activity-form.tsx` has 391 lines, six `useState` calls, and manual validation in `onSubmit`; the other forms are simple and use `useActionState`.
- The architecture forbids a dependency without a consumer and requires an explicit decision to change the stack.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md` — sections "Stack escolhida" (Chosen stack), "Client Components", and "Server Actions".
- `docs/decisions/` — format of the existing decisions.
- `src/features/schedule/ui/components/schedule-workspace/schedule-workspace.tsx` and `hooks/use-schedule-entities.ts`.
- `src/features/schedule/ui/components/calendar-range/hooks/use-calendar-days.ts`.
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.ts`.
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.tsx`.

## Deliverables
- Decision in `docs/decisions/` comparing the current situation, Zustand and alternatives, and React Hook Form with `zodResolver` against plain `useActionState`.
- Usage criteria recorded in the "Client Components" section of the architecture.
- Exact versions planned, without installing a dependency in this task.

## Subtasks
- [ ] Measure re-renders and complexity of the three current caches.
- [ ] Evaluate compatibility with Server Actions, local drafts, and the rule of not confirming before the server.
- [ ] Write the decision and submit it to the owner.
- [ ] Update the architecture with the approved result.

## Validation
- `pnpm docs:check` passes with the decision in the catalog.

## Acceptance criteria
- [ ] Decision approved by the owner, accepting or rejecting each library.
- [ ] Explicit usage criterion for local state, shared state, and forms.

## Result
Not started.
