---
id: KZ-E12-T19
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Decide whether the foundations showcase route ships to production

## Objective

Record and apply a decision on whether `/foundations` is reachable in production.

## Context

Finding from the repository sweep of 2026-11-24 on `developer` (`67443f0`).

- `src/app/foundations/page.tsx` renders the design system showcase from `src/features/foundations/` with no environment check.
- No navigation links to it; it is reachable by URL in every environment.

## Inputs

- `src/app/foundations/page.tsx` and `src/features/foundations/` — the route and its content.
- `docs/product/P0.md` — the routes the product exposes.
- `docs/architecture/TARGET-ARCHITECTURE.md` — section "Rotas do P0".

## Deliverables

- A decision with date and owner: keep public, restrict to non-production, or remove.
- The route behavior changed to match the decision, with a test.

## Subtasks

- [ ] Ask the owner and record the decision.
- [ ] Apply it, for example with `notFound()` when `APP_ENV` is production.
- [ ] Update the route list in the architecture document if it changes.

## Validation

- A test covers the route behavior for the chosen environments.

## Acceptance criteria

- [ ] The decision is recorded with date and owner.
- [ ] A test proves that `/foundations` behaves as decided in production.

## Result

Not started.
