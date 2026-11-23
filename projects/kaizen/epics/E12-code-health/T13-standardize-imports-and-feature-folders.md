---
id: KZ-E12-T13
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E12-T09]
---

# Standardize imports and the folder structure of the features

## Objective
Make imports and the physical organization of features and tests uniform, with automatic validation to keep the pattern.

## Context

Findings from the 2026-11-23 audit:

- The schedule mixes 45 imports using `@/` and 42 relative ones with three or more `../`; the workout has 116 and 43.
- `src/features/foundations` uses `components/`, while the other features use `ui/components/`.
- `training-day-page` reaches seven levels of `components/` (for example `training-session/components/training-exercise/components/training-local-exercise-editor`).
- The draft logic is split between `src/features/training/ui/hooks/use-training-*-draft` and `src/features/training/ui/lib/training-*-draft`.
- `tests/training-detail-route.test.tsx` sits loose at the root of `tests/`, and `tests/unit/` only has fixtures.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md` — sections "Estrutura de diretórios alvo" (Target directory structure) and "Organização dos componentes React" (React component organization).
- `scripts/validate-component-structure.mjs` and `scripts/validate-layer-boundaries.mjs` — structure gates.
- `eslint.config.mjs` — import rules.

## Deliverables
- Import rule defined (`@/` alias between folders and relative only for sibling or child files) and enforced by lint.
- `foundations` in the same format as the other features.
- Components that are not private children moved to shallower levels.
- Workout drafts in a single location per responsibility.
- `tests/` organized by type, with fixtures next to whoever uses them.

## Subtasks
- [ ] Define and configure the import rule.
- [ ] Fix imports automatically.
- [ ] Reorganize `foundations`, `training-day-page`, and the drafts.
- [ ] Reorganize `tests/`.
- [ ] Extend the structure gate to a maximum depth, if approved.

## Validation
- `pnpm lint`, `pnpm structure:check`, `pnpm typecheck`, and `pnpm test` pass.
- `git grep -E 'from "(\.\./){3,}' -- src` returns no result.

## Acceptance criteria
- [ ] All features follow the same folder structure.
- [ ] The import rule is enforced by lint.

## Result
Not started.
