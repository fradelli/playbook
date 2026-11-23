---
id: KZ-E12-T03
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Align the schedule with the architecture boundaries

## Objective
Make the schedule Server Actions and reads follow the order and layers defined in the architecture, with no internal REST.

## Context

Findings from the 2026-11-23 audit:

- `src/app/workout/schedule-actions.ts` sends the `unknown` input to the repository, which validates with Zod in `src/features/schedule/data/prisma-schedule-repository.ts`; the action parses again afterward.
- The action calls the data layer directly, with no use case in `application`, and finds the `id` with five nested ternaries.
- `loadTodoLists`, `loadTodos`, and `loadCalendarTrainingDay` do not validate the origin; the first two throw an exception instead of returning a typed result, and `loadCalendarTrainingDay` does not validate `civilDate` with Zod.
- `src/app/workout/calendar-day/route.ts` is consumed through `fetch` in `src/features/schedule/ui/components/calendar-range/hooks/use-calendar-days.ts`, which the architecture forbids ("Não existe REST interna", There is no internal REST); the response is used without validation and the two reads run in sequence.
- Measurement `console.info` calls remain in `schedule-actions.ts` and in `prisma-schedule-repository.ts`.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md` — sections "Boundaries", "Server Actions", "Route Handlers", and "Segurança" (Security).
- `src/app/workout/schedule-actions.ts` — current actions.
- `src/app/workout/calendar-day/route.ts` — route to remove.
- `src/features/schedule/data/prisma-schedule-repository.ts` — validation and transaction.
- `src/features/schedule/application/schedule-command.ts` — command schema.
- `src/features/schedule/ui/components/calendar-range/hooks/use-calendar-days.ts` — route consumer.

## Deliverables
- Schedule mutation use case in `src/features/schedule/application/`, receiving an already validated command.
- `schedule-actions.ts` in order: origin, workspace, Zod, command, use case, typed result.
- Schedule reads with origin and input validation and a typed result.
- `calendar-day/route.ts` removed; day read through a Server Action, with the two queries in parallel.
- Measurements removed or centralized in a logger with a consumer.

## Subtasks
- [ ] Extract the use case and the resolution of the affected identifier.
- [ ] Move the Zod validation to the action boundary.
- [ ] Protect and type the reads.
- [ ] Replace the Route Handler with an action and update `use-calendar-days.ts`.
- [ ] Remove the `console.info` calls.

## Validation
- `pnpm test`, `pnpm test:integration`, and `pnpm structure:check` pass.
- Tests cover invalid origin, invalid input, conflict, and success of the actions.
- `git grep "calendar-day?date"` returns no result.

## Acceptance criteria
- [ ] No schedule action calls the data layer without a use case.
- [ ] No internal HTTP route is consumed by the UI itself.
- [ ] All exposed reads validate origin and input.

## Result
Not started.
