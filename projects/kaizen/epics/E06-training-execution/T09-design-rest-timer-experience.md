---
id: KZ-E06-T09
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T03]
---

# Design the rest timer experience

## Objective
Define the mobile, accessible UX of a countdown timer for the prescribed rest between sets, without implementing the timer in this task.

## Product decisions already made

- The timer starts only through an explicit action on a button.
- A floating panel at the top does not block the rest of the application; therefore, it must not use the modal semantics of `AlertDialog`.
- The controls are start/resume, pause, and restart, like a compact player.
- The `×` stops and discards the countdown.
- The rest timer is distinct from the timer of the whole activity.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/training-local-exercise-editor/training-local-exercise-editor.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-timer/training-activity-timer.tsx`

## Deliverables
Not recorded in the original version of this task; equivalent content in the section "Deliverables and impacts".

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Deliverables and impacts

- Visual flow of position, opening, focus, accessible announcements, time updates, completion, restart, and closing.
- Short comparison between non-modal panel, modal, bottom sheet, and mini-player, justifying the option already preferred for mobile.
- Decision on navigation between exercises/days, background, page reload, and multiple rests started.
- Check of Design System components before creating a local presentation.

## Out of scope

- Implement a timer, system notifications, audio, or a background service.

## Decisions before implementation

- Define the behavior when the countdown reaches zero and when the user leaves the page.
- Present the final UX to the owner and wait for explicit approval for KZ-E06-T10.

## Acceptance criteria
- [ ] The mobile flow and the panel states are documented and approved.
- [ ] There is no interaction blocking and no promise of background operation without validation.

## Result
Not yet started.
