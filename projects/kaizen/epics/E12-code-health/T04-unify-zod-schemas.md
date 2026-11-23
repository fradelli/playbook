---
id: KZ-E12-T04
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E12-T03]
---

# Unify the Zod schemas between client and server

## Objective
Have one Zod schema per contract, from which the types, the Server Action validation, and the parsing of drafts in the browser are derived.

## Context

Findings from the 2026-11-23 audit:
- The activity type enum appears in `src/app/workout/training-actions.ts` and in `src/features/training/ui/lib/training-activity-editor-draft/training-activity-editor-draft.schema.ts`.
- The `intensity` and `energy` enums appear in the action and in `src/features/training/ui/lib/training-activity-completion-draft/training-activity-completion-draft.ts`.
- The execution draft has a Zod schema in the action and, on the client, the manual type guard `isTrainingActivityDraft` in `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.utils.ts`, which validates fewer fields.
- `training-activity-editor-draft.schema.ts` uses `.strict()`, which is legacy in Zod 4 (replacement: `z.strictObject()`).
- The rule that `days` is between 1 and 14 is repeated in `src/app/workout/page.tsx`, in `calendar-range.tsx`, and in `training-date-navigation.tsx`.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md` — sections "Stack escolhida" (Chosen stack, Validation), "Boundaries", and "Server Actions".
- `src/app/workout/training-actions.ts` — boundary schemas.
- `src/features/training/ui/lib/training-activity-editor-draft/training-activity-editor-draft.schema.ts` and `src/features/training/ui/lib/training-activity-completion-draft/training-activity-completion-draft.ts` — client schemas.
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.utils.ts` — manual type guard.
- `src/app/workout/page.tsx` — `searchParams` parsing.

## Deliverables
- Shared schemas module for the feature, importable by client and server with no server-only dependency.
- Action, drafts, and localStorage reads using the same schemas.
- `z.strictObject()` in place of `.strict()`.
- A single `searchParams` schema for the workout route, used by the page and by the components.

## Subtasks
- [ ] Define the location of the shared schemas, respecting the allowed dependencies.
- [ ] Extract common enums and objects.
- [ ] Replace the manual type guard with the schema's `safeParse`.
- [ ] Replace the legacy Zod 4 APIs.
- [ ] Centralize the `searchParams` parsing.

## Validation
- `pnpm typecheck`, `pnpm test`, and `pnpm structure:check` pass.
- `git grep '"structured_training", "sport_practice"'` returns a single definition location.
- Tests cover an invalid draft in localStorage and `days` out of range.

## Acceptance criteria
- [ ] Each contract has a single Zod definition.
- [ ] No manual type guard replaces an existing schema.
- [ ] No use of a legacy Zod 4 API remains.

## Result
Not started.
