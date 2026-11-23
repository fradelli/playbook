---
id: KZ-E10-T08
epic: KZ-E10
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E10-T07]
---

# Adjust Today and the app entry

## Objective
Not recorded in the original version of this task.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/app/page.tsx`
- `src/components/shared/app-shell/app-shell.tsx`
- `src/features/training/ui/components/training-day-page/training-day-page.tsx`
- `src/features/training/ui/components/training-day-page/components/training-date-navigation/training-date-navigation.tsx`

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Acceptance criteria
Not recorded in the original version of this task.

## Result
Today uses the DS yellow and a native disabled button, without fading, on the current date.
On other dates and on an invalid date, a gray link with yellow hover/focus. Green badge
removed. The accessible brand links to the root; the root redirects to /treino, reusing the
resolution/canonicalization of today in America/Sao_Paulo. Explicit routes with another
date remain preserved. No changes to the DS, database, or plan data.

394 tests, lint, structure, types/build, and diff check passed. Chromium 320/1440px
confirmed the disabled state, hover color, and return to today via the brand and root.
Adjustments published together with KZ-E09-T09 in PR [#75](https://github.com/fradelli/nextjs-kaizen-app/pull/75), targeting developer.
