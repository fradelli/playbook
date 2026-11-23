---
id: KZ-E04-T04
epic: KZ-E04
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T08]
---

# Create the accessible shell

## Objective
Create a responsive visual structure with no business rules, consuming the shared foundation that is already validated.

## Context

Shell, pages, routes, brand, and composition belong to Kaizen. Tokens, typography, focus, generic states, and primitives belong to `@fradelli/ui`; this task must not recreate them locally.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/decisions/SHARED-DESIGN-SYSTEM-ADOPTION.md`
- `docs/product/P0.md`
- `src/app/foundations/page.tsx`
- `src/app/layout.tsx`
- `src/app/page.tsx`

## Deliverables
- Layout, minimal navigation, and shared states approved in the guide.

## Out of scope

- Creating Kaizen-specific tokens, primitives, or variants in the package.
- Sharing calendar, diet, workout, habit, or task.
- Changing the Design System version without its own validation.

## Subtasks
- [x] Define landmarks and keyboard navigation.
- [x] Create a mobile-first layout.
- [x] Keep the shell server-side and isolate only the route-dependent navigation as a Client island.
- [x] Separate contracts, constants, styles, utilities, and hooks by real responsibility.
- [x] Consume public primitives and tokens without local duplication.
- [x] Create loading, empty, and error states only when there is real repetition.
- [x] Avoid global providers without a consumer.

## Validation
- Navigation and focus work without a mouse.
- The shell does not depend on the database.
- All KZ-E04-T08 gates remain green.

## Acceptance criteria
- [x] Workout and nutrition can be slotted in without duplicating layout.
- [x] The shell stays local and does not expand the Design System public API.

## Risks

- Locally recreating a primitive that is already shared.
- Pushing Kaizen navigation or domain into the package.

## Rollback

Revert only the shell and keep the integration and the foundations page as the validated technical base.

## Result
Shared shell delivered as a Server Component on top of `@fradelli/ui@0.1.0`,
with Diet/Workout navigation isolated in a Client island, accessible landmarks,
skip link, active route, mobile-first layout, and placeholders with no domain data.
Local gates and manual validation passed; the structural standardization of the
existing pages remains separate in KZ-E04-T09.

## Documentation consolidation of 12/11/2026

Shell/layout belong to Kaizen; primitives/generic states belong to the package. Ownership remains in the architecture and the DS decision.

[Full original package](https://github.com/fradelli/nextjs-kaizen-app/blob/fd2269d2eaa7d55cfea724631f12fa6505d37b32/docs/implementation/tasks/E04-T04.md), SHA-256 `1d745a46e69ca978eb4076ebff4b9b670bbf97b370af1fbfcb8da7b9861c1266`. Commands, criteria, risks, and rollback record that baseline and are not a recipe for reinstalling the current application. Open items were not turned into approvals in this consolidation.
