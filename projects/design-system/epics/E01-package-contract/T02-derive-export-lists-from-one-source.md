---
id: DS-E01-T02
epic: DS-E01
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Derive export lists from one source

## Objective

Add a component by editing one place, with package checks derived from `package.json` and the source tree.

## Context

Each new component requires editing `package.json` exports, `scripts/validate-package.mjs` (`expectedFiles`), `src/testing/public-exports.test.ts`, and `src/testing/client-boundaries.test.ts`. The client boundary list already misses twelve components (accordion, color-swatch, context-menu, kbd, loading-region, pending-button, progress, status-badge, switch, table, toast, tooltip).

## Inputs

- `package.json` — `exports`.
- `scripts/validate-package.mjs` — `expectedFiles`.
- `src/testing/public-exports.test.ts` and `src/testing/client-boundaries.test.ts`.

## Deliverables

- Tests and package validation that derive the component list from `package.json` and `src/components/`.
- A client boundary rule based on imports (hooks, Base UI, event handlers) instead of a manual map.

## Subtasks

- [ ] Derive the expected tarball files from the exports map.
- [ ] Assert that every `src/components/*` folder has an export, and the reverse.
- [ ] Replace the manual `"use client"` map with a rule that covers every component.

## Validation

- `npm run test:unit` and `npm run pack:check` pass.
- Removing an export on purpose makes a test fail.

## Acceptance criteria

- [ ] Adding a component needs no edit to test or validation lists.
- [ ] Every component is covered by the client boundary check.

## Result

Not started.
