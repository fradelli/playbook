---
id: KZ-E06-T09
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T03]
---

# Design the rest timer experience

## Objective

Define the mobile, accessible UX of a countdown for the prescribed rest between sets, without implementing it.

## Decisions

Already made by the owner:

- The timer starts only from an explicit button action.
- A floating panel at the top does not block the rest of the app, so it must not use the modal semantics of `AlertDialog`.
- Controls are start/resume, pause, and restart, like a compact player.
- The `×` stops and discards the countdown.
- The rest timer is separate from the timer of the whole activity.

## Inputs

- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/training-local-exercise-editor/training-local-exercise-editor.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-timer/training-activity-timer.tsx`

## Deliverables

A UX record in the Kaizen documentation with:

- The visual flow: position, opening, focus, accessible announcements, time updates, completion, restart, and closing.
- A short comparison of non-modal panel, modal, bottom sheet, and mini-player, justifying the option preferred for mobile.
- The behavior when navigating between exercises or days, in the background, on page reload, and with several rests started.
- The design system components to use, checked before any local presentation is created.

## Subtasks

- [ ] Check the design system components that fit the panel.
- [ ] Define the behavior when the countdown reaches zero and when the user leaves the page.
- [ ] Write the UX record.
- [ ] Present the UX to the owner and get explicit approval before KZ-E06-T10 starts.

## Validation

- The owner's approval is recorded in the task `Result`, with the date.
- Every state of the panel in the flow has a defined trigger and exit.

## Acceptance criteria

- [ ] The UX record covers every item in Deliverables and the owner approved it.
- [ ] No state of the panel blocks interaction with the rest of the app.
- [ ] The record does not promise background behavior that was not validated.

## Out of scope

- Implementing the timer, system notifications, audio, or a background service.

## Result

Not started.
