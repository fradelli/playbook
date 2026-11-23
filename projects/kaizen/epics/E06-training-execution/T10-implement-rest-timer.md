---
id: KZ-E06-T10
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T09]
---

# Implement the approved rest timer

## Objective
Execute the UX approved in KZ-E06-T09 for the prescribed rest between sets, without confusing this countdown with the total duration of the activity.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `roadmap/epics/E06-training-execution/T09-design-rest-timer-experience.md`
- `src/features/training/application/training-dto.ts`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/training-local-exercise-editor/training-local-exercise-editor.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-timer/training-activity-timer.tsx`

## Deliverables
Not recorded in the original version of this task; equivalent content in the section "Scope and impacts".

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Expected behavior

- The explicit button starts the countdown of the rest prescribed for the exercise.
- The floating panel at the top allows pausing, resuming, restarting, and closing without blocking the page.
- Closing stops and discards the countdown; no rest command saves a set or activity.
- Without a prescribed rest, the button does not suggest an invented duration.

## Scope and impacts

- Implement only the state and presentation needed by the approved UX, with timing and accessibility tests.
- Check timers in inactive tabs and resource cleanup when the component unmounts.

## Out of scope

- Push notifications, audio, or rest monitoring in the database without a specific decision.

## Decisions before implementation

- Reanalyze the current code and the decision documented in KZ-E06-T09; present a plan and wait for explicit approval before implementing.

## Acceptance criteria
- [ ] All controls and closing follow the approved UX and do not block the workout.
- [ ] The timer is reliable under the explicitly approved navigation conditions.
- [ ] Tests do not depend on real clock waiting.

## Result
Not yet started.
