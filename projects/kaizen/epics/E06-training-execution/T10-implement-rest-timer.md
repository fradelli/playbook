---
id: KZ-E06-T10
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T09]
---

# Implement the approved rest timer

## Objective

Build the rest timer UX approved in KZ-E06-T09, kept separate from the total duration of the activity.

## Inputs

- `docs/architecture/TARGET-ARCHITECTURE.md`
- `fradelli/playbook: projects/kaizen/epics/E06-training-execution/T09-design-rest-timer-experience.md` — approved UX.
- `src/features/training/application/training-dto.ts`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/training-local-exercise-editor/training-local-exercise-editor.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-timer/training-activity-timer.tsx`

## Expected behavior

- The explicit button starts the countdown of the rest prescribed for the exercise.
- The floating panel at the top pauses, resumes, restarts, and closes without blocking the page.
- Closing stops and discards the countdown; no rest command saves a set or an activity.
- Without a prescribed rest, the button does not suggest an invented duration.

## Deliverables

- The state and presentation needed by the approved UX, and nothing beyond it.
- Timing and accessibility tests.

## Subtasks

- [ ] Reanalyze the current code and the KZ-E06-T09 record; present a plan and wait for explicit approval.
- [ ] Implement the panel state and controls.
- [ ] Handle timers in inactive tabs and clean up resources when the component unmounts.
- [ ] Add timing tests with fake timers and accessibility tests.

## Validation

- Tests use fake timers, not real clock waits.
- `pnpm run ci` passes.

## Acceptance criteria

- [ ] Every control and the closing action behave as in the approved UX, and the workout stays usable while the panel is open.
- [ ] The countdown stays correct under the navigation conditions approved in KZ-E06-T09.
- [ ] No test waits on the real clock.

## Out of scope

- Push notifications, audio, or storing rest in the database without a specific decision.

## Result

Not started.
