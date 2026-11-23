---
id: KZ-E06-T19
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T12]
---

# Autofill the planned end of the workout

## Objective
When adding a plan workout, calculate the planned end from the start
entered and the duration of the selected session, without requiring manual calculation.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.tsx`
- `src/features/training/application/training-dto.ts`
- `src/features/training/data/prisma-training-repository.ts`
- `src/app/treino/training-actions.ts`

- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.types.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.styles.ts`
- `src/features/training/ui/components/training-day-page/components/training-agenda-drawer/training-agenda-drawer.tsx`
- `src/features/training/ui/hooks/use-training-action-feedback.ts`
- `src/features/training/ui/components/training-day-page/components/training-action-feedback/training-action-feedback.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-delete-form/training-activity-delete-form.test.tsx`
- `src/features/training/application/mutate-training-day.ts`
- `tests/integration/training-mutations.test.ts`

- `src/features/training/ui/components/training-day-page/components/training-activity-form/hooks/use-training-activity-schedule.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.utils.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.utils.test.ts`
- `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.test.tsx`

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task; equivalent content is in the section «Proposed detailed plan — 26/10/2026».

## Validation
Not recorded in the original version of this task.

## Confirmed rules

- Use the duration of the session loaded from the plan, never a fixed value in the interface.
- Calculate after selecting the session and entering the start, regardless of order.
- The current duration already includes warm-up; do not add it again.
- Example: a start at 6 p.m. and a duration of 40 minutes result in an end at 6:40 p.m.
- Do not start a timer or persist the activity just by filling in the field.

## Decisions before implementation

- Re-analyze and present the plan to the user before implementing.
- Decide whether the end stays editable and how to preserve a manual change when the start or session changes.
- Define the feedback for a missing duration or an end on the next day, respecting the current time contract.
- Confirm whether it applies when editing existing activities, in addition to adding.

## Acceptance criteria
- [x] The automatic end uses the real session duration and does not duplicate the warm-up.
- [x] Changing the start or session follows the approved policy without silently overwriting manual changes.
- [x] Input in any order and a missing duration have tests.
- [x] Server validation, edit window, and ownership remain preserved.

## Proposed detailed plan — 26/10/2026

Plan approved by the user on 26/10/2026. The sections below preserve the design
used in the implementation; the result and the evidence are at the end of this file.

### 1. Proven diagnosis

- `PublicTrainingSessionDto` already exposes `targetDurationMinutes`. There is no need to
  fetch the duration through a new API or include a fixed value in the UI.
- Session, start, and end use `defaultValue`, with no synchronization between fields.
- Adding and editing share `TrainingActivityForm`, in the schedule drawer.
- The server validates HH:mm and requires the end to be after the start on the same day.
- `useTrainingActionFeedback` uses `useActionState` and calls `router.refresh()`
  after success; errors and conflicts arrive through the shared feedback.
- The update resolves the definition using the active plan. It is necessary to test
  editing an activity linked to an earlier version before promising
  preservation of its session; equal `sessionId` alone does not prove equal
  version or duration.

### 2. Main experience

1. The user chooses Treino do plano (Plan workout) and a session.
2. When a complete and valid start is entered, the end appears automatically.
   The reverse order also works: start before the session is selected.
3. Below the end, show a short explanation, for example:
   "Calculado pela duração do treino: 40 min." (Calculated from the workout duration: 40 min.) The number comes from the session.
4. The field stays editable. A change by the user starts preserving the manual
   end, without asking for confirmation in a modal.
5. In manual mode, show "Horário ajustado por você." (Time adjusted by you.) and a secondary action
   "Usar duração do treino" (Use workout duration), with `type="button"` and without submitting the form.
6. That action returns to automatic mode and applies the calculation to the current values;
   it does not save the activity. "Adicionar atividade" (Add activity) and "Salvar alterações" (Save changes) remain
   the only persistence actions.

The text must speak of a planning estimate. It does not represent real duration,
a timer, or the completion of the activity.

### 3. States and transitions

| Situation                                                 | End shown                                      | Next change of start/session     |
| --------------------------------------------------------- | ---------------------------------------------- | -------------------------------- |
| Adding a plan workout, with no end previously typed       | Automatic, when there is valid data            | Recalculate                      |
| Start/session still incomplete in automatic mode          | Empty, without keeping an obsolete suggestion  | Calculate when completed         |
| User changes or clears the end                            | Manual value, including empty                  | Preserve                         |
| User chooses Usar duração do treino                       | New suggestion or explanation of why it is impossible | Resume recalculating      |
| Editing an existing activity                              | Persisted time, in preserved/manual mode       | Preserve until explicit action   |
| Sports practice, mobility, or specific workout            | Manual input                                   | Do not calculate                 |

Complementary rules:

- Focusing the field, opening the picker, or receiving a new render does not count as a manual
  edit; only an actual change of the value by the user does.
- Do not infer automatic mode because the manual end matches the estimate.
- Do not swap the main duration for a short duration and do not add warm-up.
- When leaving Treino do plano, preserve the last visible end as manual;
  do not erase the user's work. When coming back, preserve that end and offer
  Usar duração do treino. If an end was never entered, allow automatic.
- If the user clears the end, respect the intent: do not fill it again
  when another field changes until they request the calculation.
- Do not create a global preference or store the automatic mode in the database or in
  localStorage; it belongs only to the interaction with this form.

### 4. Incomplete and invalid times and the day limit

The calculation must use whole minutes of the civil clock, without `Date`, UTC, browser time zone,
daylight saving conversion, or modulo 24 hours.

| Input                                                      | Expected behavior                                                    |
| ---------------------------------------------------------- | -------------------------------------------------------------------- |
| 18:00 + 40 min                                             | 18:40                                                                |
| 23:00 + 59 min                                             | 23:59                                                                |
| 23:20 + 40 min                                             | Do not generate 00:00 or 24:00; explain that it passes the same day  |
| Start cleared or incomplete                                | Do not calculate; remove only the obsolete automatic suggestion      |
| Duration missing, zero, negative, fractional, or not finite | Do not invent a duration; allow entering the end manually            |
| Session not found or plan unavailable                      | Do not silently use another session; explain the missing duration    |
| Manual end equal to or before the start                    | Flag validation and prevent saving an invalid value                  |

Proposed messages:

- Duration unavailable: "Não foi possível calcular a duração. Informe o fim planejado." (It was not possible to calculate the duration. Enter the planned end.)
- Day rollover: "Esse treino terminaria no dia seguinte. Ajuste o início ou informe um fim no mesmo dia." (This workout would end on the next day. Adjust the start or enter an end on the same day.)
- Invalid interval: "O fim planejado deve ser posterior ao início." (The planned end must be after the start.)

Do not show an aggressive error while the user is still filling in a time.
Guidance about unavailability stays next to the end; a time error must be
shown after enough interaction with the field or a submit attempt.
If the user opts for a shorter valid manual interval, respect it: the
plan duration is a suggestion, not a mandatory minimum of execution.

### 5. Editing, history, and concurrency

- Opening Edit must not change any value nor start an automatic calculation.
- Use the duration of the session linked to the activity when that reference is
  available and proven. Never replace a historical session with the first one of the
  active plan; never resolve the duration only by a reused textual ID.
- If the saved session is not among the current options, keep its identification
  explicit and prevent selection/implicit calculation of another one. Explain the limitation.
- Before enabling the automatic editing flow, reproduce the old-plan scenario
  in the integration. If saving swaps the historical reference,
  treat it as a delivery blocker: propose a minimal fix and a scope review
  before implementing reconciliation or a persistence change.
- A new revision received while there are local changes cannot silently
  change the expected revision nor clear the form draft.
  Keep the reference of the revision that originated the edit until success or an explicit
  reload. A conflict must preserve the fields and guide the user to reload the data.
- An actual change of date or activity initializes another form; an update
  of the same activity during editing is not authorization to discard it.
- Do not edit completed records nor widen the dates currently allowed.

### 6. Submission and server return

- Send the end the user sees, not an earlier suggestion or a parallel variable.
- Calculating/switching modes never triggers a Server Action.
- During submission, disable repeated submission and freeze the controls of this
  form to prevent changes that would not be part of the request sent.
- On a validation error, unavailability, or conflict, keep type, session,
  start, end, and mode. Do not treat the mere end of the request as success.
- On success, keep clear feedback. On adding, reset the form and its
  mode to the initial state; on editing, reconcile with the saved values and the
  new revision, returning to the mode that preserves the existing time.
- Check the reset of controlled and uncontrolled fields in the real cycle of
  `useActionState`; do not assume the automatic behavior will be enough.
- Do not remodel the shared feedback hook without evidence of need;
  start with local behavior in the current consumer.

### 7. Accessibility and mobile use

- Keep the Início planejado (Planned start) and Fim planejado (Planned end) labels tied to their inputs.
- Link guidance and errors to the field with `aria-describedby`; set
  `aria-invalid` only when there is an actual error.
- Automatic updates do not move focus, open a modal, or change the screen position.
- Use a discreet announcement, without `role="alert"` on each time change.
  Test reading the result without duplicating messages.
- The Usar duração do treino action must work by keyboard and touch,
  with an accessible name and presentation by the existing Design System.
- Check narrow layout, long text, zoom, tab order, and editing through the
  native time picker. Do not simulate a physical keyboard/safe area test as
  proof; document it if a real device is not available.

### 8. Planned files and responsibilities

The paths below are change plans, not files already implemented.

| Action                 | Path                                                                                                                              | Responsibility                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Change                 | `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.tsx`              | Compose controlled fields, messages, calculation action, and submission state                 |
| Create                 | `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.utils.ts`         | Calculate the end with an explicit result for incomplete data, invalid duration, and day limit |
| Create                 | `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.utils.test.ts`    | Exercise arithmetic rules and defensive inputs                                                |
| Create                 | `src/features/training/ui/components/training-day-page/components/training-activity-form/hooks/use-training-activity-schedule.ts` | Local state, manual/automatic modes, and transitions, with no database access                 |
| Create                 | `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.test.tsx`         | Test the observable experience of the form                                                    |
| Change, if needed      | `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.types.ts`         | Local contracts and calculation results with business names                                   |
| Change, if needed      | `src/features/training/ui/components/training-day-page/components/training-activity-form/training-activity-form.styles.ts`        | Composition of the guidance and action, using existing tokens                                 |
| Extend, if needed      | `tests/integration/training-mutations.test.ts`                                                                                    | Ensure the time contract and detect a historical-version regression                           |

The calculation must have a single source; automatic values must be derived from the
current state to avoid effects that overwrite typing. Do not create an endpoint,
dependency, migration, or DTO change: the duration already exists. The server keeps
accepting valid manual adjustments and validating origin, workspace, ownership,
revision, and date window. Do not accept workspace IDs coming from the browser.

### 9. Minimum regression matrix

| Group              | Required scenarios                                                                                                                            |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Main flow          | Session before/after the start; first session selected; session change; start change; main duration without duplicating warm-up               |
| Manual control     | End adjustment; end cleared; manual value equal to the automatic one; session/start change without overwriting; explicitly resuming automatic |
| Activity types     | Leave and return to plan workout; the other types keep manual input; legacy options preserved until KZ-E06-T20                                |
| Times              | 00:00, 23:59, exactly midnight, day rollover, invalid duration, empty start, and end before/equal to the start                                |
| Editing            | Open without changes; edit times; keep session and historical version; session missing from the current plan; remount on date/activity change |
| Server             | Payload contains the visible times; stale revision gives a conflict; access outside the window and invalid ownership remain blocked          |
| Return             | Success on add and edit; error and conflict preserve fields; duplicate submission blocked; refresh does not discard unsent changes            |
| Accessibility      | Keyboard, stable focus, linked messages, calculation button does not submit the form, layout in a narrow viewport                            |

Component tests must simulate interaction and the return of the action; mocks cannot
replace all the checks of the submit/reset cycle. The real journey with
persistence proves at least one add, one edit, and one write failure.

### 10. Execution order and delivery acceptance

1. After approval, revalidate the `developer` base and create the branch
   `codex/E06-T19-autofill-planned-workout-end`. Preserve the local documentation
   commits not yet integrated; do not use reset or force push to switch the base.
2. Confirm historical integrity on editing and stabilize the expected cases
   before enabling the calculation on that path.
3. Implement the pure calculation, local transitions, and presentation, in that order.
4. Cover the behaviors with proportional tests; run format, lint,
   structure, types, and relevant tests through the existing scripts.
5. Validate the relevant PostgreSQL integration, build, data, and applicable gates.
   Run `pnpm run ci` with test dependencies available; unavailability
   must be recorded, never turned into approval of a check that was not run.
6. Walk through adding and editing in the UI, including failure, manual mode, and day rollover.
7. Do the semantic review, `git diff --check`, and a search for secrets; update the
   checklist, result, roadmap, and changelog only with evidence obtained.

The change is delivered when the applicable matrix passes, there is no silent swap of
session/version, manual fields survive transitions and failures, and the persisted
result matches the time shown. No implementation check is
marked as completed by this planning.

### 11. Limits and rollback

- KZ-E06-T20, Diet, plan reconciliation, and the timer are outside this adjustment.
- The intended change is UI-only, with no data migration. It can be reverted
  by removing the automatic calculation and restoring manual input.
- Reverting the UI does not undo times the user already confirmed and saved; corrections
  of those records keep following the normal flow, with no destructive cleanup.
- If the historical investigation requires a persistence change, re-evaluate the
  tests and the rollback before widening the scope.

## Result
Calculation implemented in civil minutes using the session duration, without duplicating
warm-up. The end stays editable; manual changes and clears are
preserved until the explicit Usar duração do treino action. Adding resets the
form after success; editing preserves existing times, the origin revision,
and the historical session duration. Connection, validation, and conflict failures keep
the input; submission freezes controls and prevents duplication.

The inspection confirmed the improper resolution through the active plan on update.
The unchanged-session case was fixed: the server preserves the existing version, session, and
preparation, with ownership and revision in both the query and the write.
Explicit selection of another session still goes through the existing rules.
There was no change to schema, migration, dependency, or personal data.

### Implementation evidence

- Full unit suite passed with global line coverage of 90.92%.
- 34 targeted calculation and component tests passed, using the real cycle
  of `useActionState`; they even cover the call being rejected due to lack of connection.
- PostgreSQL integrations: 45 tests passed, including a historical version with
  the same textual ID in another plan, a stale revision, and a different workspace.
- Types, lint, format, structure and boundaries, Prisma schema, build, and data
  integrity passed; 33 validator tests passed.
- Real Chrome at a 390×844 viewport: calculation, manual preservation, persisted add and edit,
  explicit recalculation, connection failure preserving fields, and day-rollover
  warning passed on an isolated disposable database.
- Visual review of the narrow-screen capture completed. Physical device keyboard and safe area
  were neither tested nor considered proven.
- Semantic review: pure calculation without dates/time zone, cohesive local state in the hook,
  component composes the form, and historical preservation happens on the server.

### Audit history before PR #68

The dependency audit failed with 19 findings: 3 low, 10 moderate,
4 high, and 2 critical. Manifest and lockfile were preserved; this task does not
update dependencies. Do not declare full CI or the audit as passed nor
promote the delivery as if that gate were green.

The browser validation used in-memory configuration only and an isolated
PostgreSQL. The temporary server and database were shut down after the test.

### Update after the security fix

[PR #68](https://github.com/fradelli/nextjs-kaizen-app/pull/68) was merged into
`developer` with seven checks passed and an audit with no findings. This branch
incorporated `410042d` by merge, preserving the records of both deliveries and
resolving conflicts only in the changelog, index, and roadmap pointer.
The revalidation of the combination is recorded in [PR #69](https://github.com/fradelli/nextjs-kaizen-app/pull/69).
The integration requires success of the seven checks on the final commit, with no bypass.
