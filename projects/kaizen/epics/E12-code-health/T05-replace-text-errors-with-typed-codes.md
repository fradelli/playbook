---
id: KZ-E12-T05
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E12-T04]
---

# Replace text error messages with typed codes

## Objective
Make the workout application, data, and Server Actions return typed error codes, with translation done only in the UI.

## Context

Findings from the 2026-11-23 audit:

- `src/features/training/application/mutate-training-day.ts`, `src/features/training/data/prisma-training-repository.ts`, and `src/app/workout/training-actions.ts` return fixed pt-BR texts in the `message` field.
- `src/features/training/ui/localize-training-feedback.ts` translates by comparing the received text, including a regex over the Portuguese sentence.
- The schedule already uses codes (`code: "invalid_command"`, `code: "invalid_origin"`).

## Inputs
- `src/features/training/application/training-mutation.types.ts` — result type.
- `src/features/training/ui/localize-training-feedback.ts` and `src/features/training/ui/training-feedback-messages.ts` — current translation.
- `src/features/schedule/application/schedule-command.types.ts` — schedule code pattern.
- `messages/en.json` and `messages/pt-BR.json` — `feedback` namespace.

## Deliverables
- `TrainingMutationResult` with a typed `code` and structured parameters (for example the limit date).
- Application, data, and actions with no interface texts.
- UI translation by code, with no text comparison.

## Subtasks
- [ ] Define the union of codes and parameters.
- [ ] Update the application, repository, and actions.
- [ ] Rewrite the translation by code and remove the text-based mapping.
- [ ] Update tests.

## Validation
- `pnpm test`, `pnpm test:integration`, and `pnpm i18n:check` pass.
- `git grep -n 'message: "' src/features src/app` returns no interface text outside tests.

## Acceptance criteria
- [ ] No server layer returns interface text.
- [ ] Every error code has a translation in both languages.

## Result
Not started.
