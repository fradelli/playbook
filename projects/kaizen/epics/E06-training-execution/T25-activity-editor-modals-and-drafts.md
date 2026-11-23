---
id: KZ-E06-T25
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T24]
---

# Add and edit activity modals with a local draft

## Objective
The + button opens only the add form; the pencil on the card opens only the
edit form for that activity. Keep the existing conditional fields and footer actions,
with recovery of local input independent of the execution drafts.

## Inputs
Not recorded in the original version of this task; equivalent content is in the section «Main input».

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task; equivalent content is in the section «Validation results».

## Main input

`docs/history/implementation/TRAINING-ACTIVITY-MODALS-AND-DRAFTS-IMPLEMENTATION-GUIDE.md`.

## Decisions and integration

- Native dialog with focus, Esc/backdrop controlled, and footer outside the forms.
- Validated cache, add by date and edit by ID, 400ms debounce, and 7-day retention.
- A conflict of base/plan/another tab prevents silent replacement and keeps the values.
- While saving/deleting, block closing and duplicate operations. An error keeps the data.
- Warm-up, times, historical session, and rescheduling limits preserve KZ-E06-T24.
- No changes to migrations, canonical plan, or dependencies.
- Adjustment found in Chrome: the saved return must clear/navigate in the continuation of the
  Server Action, before the refresh removes the card from the origin. The feedback hook
  gained an optional refreshOnSaved; editor/deletion coordinate their single refresh.

## Acceptance criteria
- [x] + opens only add and the pencil opens only the chosen workout.
- [x] Current fields kept; actions outside the body/form; no nested forms.
- [x] Drafts recovered and discarded safely; conflicts do not overwrite.
- [x] Submit, close, delete, and failures with data protection and focus.
- [x] Dates, warm-up, and execution keep the existing rules.
- [x] Quality, tests, build, and browser script passed.

## Result
Not recorded in the original version of this task.

## Validation results

Completed on 27/10/2026:

- 377 application tests across 52 files; line coverage 90.76% and branches 84.69%.
- 50 PostgreSQL tests across seven files and 33 script tests passed.
- Formatting, lint, structure, types, data integrity, build, and governance passed.
- Audit with no known vulnerabilities.
- Chrome with a disposable database: exclusive add, recovery, external footer,
  suggestion by sport, edit and rescheduling with the same ID/times/warm-up,
  origin not recreated, Sem aquecimento preserved, deletion canceled/confirmed.
- Focus/Escape/Tab and footer at 320px viewport with enlarged font validated in the browser.
- Local verification artifacts in .git: activity-editor-browser-result.log,
  activity-editor-add-mobile.png, activity-editor-edit-mobile.png, and
  activity-editor-small-mobile.png. They are not physical-device tests.
- Additional adjustment: the transition on the trigger waits for the updated DTO before reopening;
  explicit reference to the trigger and Tab cycle ensure focus return/containment.
- The saved response is handled before unmounting the card; an automated regression covers
  the removal of the origin by the server before updating the interface.

No personal operational data was used in the tests.
Virtual keyboard and safe area on a physical device remain in the scope of KZ-E06-T14.
