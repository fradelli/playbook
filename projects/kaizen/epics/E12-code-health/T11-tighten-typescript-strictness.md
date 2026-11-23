---
id: KZ-E12-T11
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E12-T07]
---

# Tighten the strict TypeScript options

## Objective
Enable `noUncheckedIndexedAccess` and `noImplicitOverride` and eliminate the non-null assertions that these options make unnecessary.

## Context

`tsconfig.json` uses `strict: true` without `noUncheckedIndexedAccess`. The code compensates with `!` on `Map` and index reads, for example `cache.listPages.get("current")!` in `use-schedule-entities.ts` and `exercises[key]!` in `use-training-activity-draft.ts`. There is also an `as unknown as` in `src/features/schedule/data/prisma-schedule-repository.ts`.

## Inputs
- `tsconfig.json` — compiler options.
- `docs/architecture/TARGET-ARCHITECTURE.md` — section "Stack escolhida" (Chosen stack, Language).
- Output of `pnpm typecheck` with the options enabled.

## Deliverables
- `tsconfig.json` with the new options.
- Fixes by explicit handling of absence, without silencing errors.
- Lint rule against non-null assertions, if the remaining volume allows it.

## Subtasks
- [ ] Enable the options and measure the errors.
- [ ] Fix module by module, starting with the domain.
- [ ] Remove the `as unknown as`.
- [ ] Evaluate the lint rule.

## Validation
- `pnpm typecheck`, `pnpm lint`, and `pnpm test` pass.
- `git grep -c ')!' -- src` decreases and each remaining use has a justification.

## Acceptance criteria
- [ ] Both options are enabled.
- [ ] No error was silenced with `@ts-expect-error` or `as`.

## Result
Not started.
