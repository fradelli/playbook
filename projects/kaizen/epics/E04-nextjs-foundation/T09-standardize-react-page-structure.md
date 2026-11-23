---
id: KZ-E04-T09
epic: KZ-E04
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T04]
---

# Standardize the React page structure

## Objective
Keep route entries thin and separate rendering, styles, contracts,
constants, and interactivity of the existing components, preserving the visual
result and keeping Server Components as the default.

## Context

The shell already establishes the minimal boundary between server and client, but the
Diet and Workout placeholder pages still concentrate markup and classes in the
route entry. The technical `/foundations` page also keeps the whole tree on the
client because of a single interactive demo. This task fixes
those responsibilities without anticipating the KZ-E06 and KZ-E07 features.

## Inputs
- `AGENTS.md`
- `CHANGELOG.md`
- `roadmap/ACTIVE.md`
- `roadmap/README.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/app/dieta/page.tsx`
- `src/app/treino/page.tsx`
- `src/app/foundations/page.tsx`
- `src/features/foundations/components/foundations-page/foundations-page.test.tsx`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/shared/app-shell/app-shell.tsx`
- `src/components/shared/app-shell/app-shell.types.ts`
- `src/components/shared/app-shell/app-shell.module.css`
- `src/components/shared/app-shell/app-shell.test.tsx`
- `src/components/shared/app-shell/components/app-shell-navigation/app-shell-navigation.tsx`
- `src/components/shared/app-shell/components/app-shell-navigation/app-shell-navigation.types.ts`
- `src/components/shared/app-shell/components/app-shell-navigation/app-shell-navigation.constants.ts`
- `src/components/shared/app-shell/components/app-shell-navigation/app-shell-navigation.utils.ts`
- `src/components/shared/app-shell/components/app-shell-navigation/app-shell-navigation.module.css`
- `src/components/shared/app-shell/components/app-shell-navigation/app-shell-navigation.test.tsx`
- `src/components/shared/app-shell/components/app-shell-navigation/hooks/use-app-shell-navigation.ts`
- `src/components/shared/feature-placeholder/feature-placeholder.tsx`
- `src/components/shared/feature-placeholder/feature-placeholder.types.ts`
- `src/components/shared/feature-placeholder/feature-placeholder.constants.ts`
- `src/components/shared/feature-placeholder/feature-placeholder.styles.ts`
- `src/components/shared/feature-placeholder/feature-placeholder.test.tsx`
- `src/features/foundations/components/foundations-page/foundations-page.tsx`
- `src/features/foundations/components/foundations-page/foundations-page.styles.ts`
- `src/features/foundations/components/foundations-page/components/foundations-page-header/foundations-page-header.tsx`
- `src/features/foundations/components/foundations-page/components/foundations-page-header/foundations-page-header.styles.ts`
- `src/features/foundations/components/foundations-page/components/foundations-typography-section/foundations-typography-section.tsx`
- `src/features/foundations/components/foundations-page/components/foundations-typography-section/foundations-typography-section.styles.ts`
- `src/features/foundations/components/foundations-page/components/foundations-actions-section/foundations-actions-section.tsx`
- `src/features/foundations/components/foundations-page/components/foundations-actions-section/foundations-actions-section.styles.ts`
- `src/features/foundations/components/foundations-page/components/foundations-alerts-section/foundations-alerts-section.tsx`
- `src/features/foundations/components/foundations-page/components/foundations-alerts-section/foundations-alerts-section.styles.ts`
- `src/features/foundations/components/foundations-page/components/foundations-form-section/foundations-form-section.tsx`
- `src/features/foundations/components/foundations-page/components/foundations-form-section/foundations-form-section.styles.ts`
- `src/features/foundations/components/foundations-page/components/foundations-colors-section/foundations-colors-section.tsx`
- `src/features/foundations/components/foundations-page/components/foundations-colors-section/foundations-colors-section.types.ts`
- `src/features/foundations/components/foundations-page/components/foundations-colors-section/foundations-colors-section.constants.ts`
- `src/features/foundations/components/foundations-page/components/foundations-colors-section/foundations-colors-section.styles.ts`
- `src/features/foundations/components/foundations-page/components/foundations-motion-section/foundations-motion-section.tsx`
- `src/features/foundations/components/foundations-page/components/foundations-motion-section/foundations-motion-section.styles.ts`
- `src/features/foundations/components/foundations-page/components/foundations-sheet-example/foundations-sheet-example.tsx`
- `package.json`
- `.github/workflows/ci.yml`
- `scripts/validate-component-structure.mjs`
- `scripts/validate-component-structure.test.mjs`

## Deliverables
- Route entries limited to composition and the route's static data.
- Shared placeholder with rendering, styles, contracts, and tests separated.
- Server-side `/foundations` with the `Sheet` demo isolated in a Client island.
- Verifiable conventions without empty files or abstractions without a consumer.
- Each component encapsulated in its own folder, including private children.
- Local and CI validator preventing loose components or helpers without ownership.

## Out of scope

- Implementing real data, forms, or workout and nutrition rules.
- Creating Server Actions, database access, session, providers, or an internal HTTP client.
- Changing primitives, tokens, version, or the public API of `@fradelli/ui`.
- Redesigning the shell or changing the visual behavior approved in KZ-E04-T04.

## Subtasks
- [x] Extract the placeholder reused by Diet and Workout into a shared component.
- [x] Separate props and class composition into files with explicit responsibility.
- [x] Keep `src/app/dieta/page.tsx` and `src/app/treino/page.tsx` as thin Server Components.
- [x] Move the visual composition of foundations into its own component family.
- [x] Restrict `"use client"` to the interactive example that actually uses `Sheet`.
- [x] Separate the fixed list of color samples into typed constants.
- [x] Separate the private Foundations sections to keep the main composition readable.
- [x] Encapsulate each private section in its own folder with its helper files.
- [x] Encapsulate AppShellNavigation and its responsibilities in its own folder.
- [x] Move and expand tests without changing accessible names or behavior.
- [x] Audit layout, redirect, global styles, and the AppShell family without creating artificial changes.
- [x] Automate the folder and ownership rule in the quality gate.
- [x] Do not create hooks, utils, types, or barrels without a concrete responsibility.

## Validation
- `page.tsx` contains only route composition and remains without `"use client"`.
- Only components that use hooks, state, or browser APIs have `"use client"`.
- Client Components do not import Prisma, data, the application layer, or server-only modules.
- Diet, Workout, and Foundations preserve content, landmarks, focus, and navigation.
- The 320 px viewport and 200% zoom do not cause horizontal scrolling.
- Format, lint, types, tests, integrity, build, and audit pass.
- The structural validator rejects loose components and mixed helpers.

## Acceptance criteria
- [x] The JSX of route entries does not concentrate styles or reusable visual blocks.
- [x] The placeholder has two real consumers and can be removed when KZ-E06/E07 replace it.
- [x] `/foundations` renders its static composition on the server.
- [x] The smallest Client island contains only the necessary interactive demo.
- [x] No file exists only to satisfy a naming convention.
- [x] No `components/` directory contains loose component files.
- [x] The convention remains protected by a regression test and a CI gate.

## Risks

- Creating a temporary abstraction larger than the two consuming placeholders.
- Changing the technical foundations demo during a structural refactor.
- Pushing Design System primitives or server-only data into client modules.

## Rollback

Revert the extractions and restore the pages from KZ-E04-T04/E04-T08, without changing the
shell, the Design System integration, or the data contracts.

## Result
React pages standardized with thin route entries, components encapsulated
in their own folders, and helper responsibilities colocated. Foundations
now renders on the server with only the `Sheet` example on the client, and the
new `structure:check` gate protects the convention locally and in CI. Content,
accessibility, and visual result were preserved; all gates passed.

## Documentation consolidation of 12/11/2026

Own folder, helper ownership, and Server/Client are in the architecture/validator. The inventory of the old base remains at the source.

[Full original package](https://github.com/fradelli/nextjs-kaizen-app/blob/fd2269d2eaa7d55cfea724631f12fa6505d37b32/docs/implementation/tasks/E04-T09.md), SHA-256 `b25d690846bba03530cf7bb02a17c0412bfe43207220fef0fdc7873f7c118661`. Commands, criteria, risks, and rollback record that baseline and are not a recipe for reinstalling the current application. Open items were not turned into approvals in this consolidation.
