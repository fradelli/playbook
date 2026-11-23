---
id: KZ-E06-T14
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T04]
---

# Move the main navigation to the bottom on mobile

## Objective
Present the Training and Diet links in a bottom bar on mobile screens, with app-like behavior, without duplicating the navigation for screen readers.

## Known context

Today the main links sit at the top. The visual change is app-wide, but it is recorded in this epic because it came up during the review of the training journey; it contains no training business rules.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/app/layout.tsx`
- `src/components/shared/app-shell/app-shell.tsx`
- `src/components/shared/app-shell/components/app-shell-navigation/app-shell-navigation.tsx`
- `src/components/shared/app-shell/components/app-shell-navigation/components/app-shell-navigation-links/app-shell-navigation-links.module.css`
- `src/components/shared/app-shell/app-shell.module.css`
- `src/components/shared/app-shell/app-shell.test.tsx`
- `src/components/shared/app-shell/components/app-shell-navigation/app-shell-navigation.constants.ts`
- `src/components/shared/app-shell/components/app-shell-navigation/app-shell-navigation.types.ts`
- `src/components/shared/app-shell/components/app-shell-navigation/app-shell-navigation.utils.ts`
- `src/components/shared/app-shell/components/app-shell-navigation/hooks/use-app-shell-navigation.ts`
- `src/components/shared/app-shell/components/app-shell-navigation/app-shell-navigation.test.tsx`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `src/components/shared/app-shell/components/app-shell-navigation/components/app-shell-navigation-links/app-shell-navigation-links.tsx`
- `src/components/shared/app-shell/components/app-shell-navigation/components/app-shell-navigation-links/app-shell-navigation-links.types.ts`
- `src/components/shared/app-shell/components/app-shell-navigation/components/app-shell-navigation-routes/app-shell-navigation-routes.tsx`

## Deliverables
Not recorded in the original version of this task; equivalent content is in the section «Scope and impacts».

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Expected behavior

- On mobile, Training and Diet appear fixed at the bottom with a clear indication of the active route and respect for the device safe area.
- On desktop, the navigation stays at the top.
- The bar does not cover content, controls, or the floating rest panel; the virtual keyboard and screen readers remain usable.

## Scope and impacts

- Re-evaluate the real structure of the shell and the components available in the Design System before choosing which files to change.
- Test focus, keyboard navigation, responsiveness, contrast, narrow viewports, and safe area.

## Out of scope

- Redesigning the diet/training pages or creating navigation for routes that do not exist yet.

## Decisions before implementation

- Confirm the transition width and the behavior with the virtual keyboard during the analysis of the task.
- Re-analyze the current code, present the solution and trade-offs, and wait for explicit approval before implementing.

## Acceptance criteria
- [x] Mobile bottom navigation and desktop top navigation work without accessible duplication.
- [ ] No content is covered on a common phone or with a safe area.

## Result
Plan approved on 27/09: below 768 px, icons only in the bottom bar;
header with smaller height, brand, and spacing. Desktop keeps the navigation at the top.
A single accessible navigation, valid date preserved in the links, safe area, and
reserved space so content is not covered. Changing routes does not affect execution.
Diet still preserves only the date in the URL while its journey does not exist.

Implementation starts in the Design System: NavigationItem as the fundamental
link primitive and BarbellIcon/ForkKnifeIcon exports on top of the existing Phosphor.
Admission follows the exception for primitives; the composed bar and routes stay in the app. Generic
API without Next.js, and no new tokens or dependencies. Compatible minor changeset.

The release depends on the official Design System workflow on main after review.
Do not copy code or install a provisional artifact in Kaizen. Integration and
mobile validation remain pending until an exact version of the package is published.

First stage implemented on the `codex/mobile-navigation-primitives` branch of the
Design System, with no commit or PR. `npm run ci` passed: 27 unit tests,
12 Storybook tests in Chromium, format, lint, types, tokens, build,
tarball, and npm/pnpm consumers with a single React; audit with no vulnerabilities.
Icon wrappers expose only React types, without propagating the NodeNext
incompatibility of the Phosphor declarations to the consumer. No Kaizen UI changed
before the dependency was published. The next action requires approval to deliver the
Design System and publication through the official workflow.

Update of 27/09: PR #9 merged; PR #10 fixed with an aligned lockfile,
local and remote CI passed, and merge authorized. Official release 0.3.0 published
and installed by exact version in Kaizen. A minimum-age exception limited to the
published version of the own package, added by pnpm.
Shell integration under validation, with no Kaizen commit or PR.

Integration checks: 13 shell tests passed; format, lint,
boundaries, and types passed. Real Training/Diet navigation preserved the date;
320 px viewport with no horizontal overflow caused by the bar, two destinations,
touch targets of 48 × 44 px, and a bottom reserve of 80 px. Desktop keeps the
navigation at the top. Virtual keyboard and safe area on physical devices depend on validation
on a real device; they were not simulated as proof that it works.

`pnpm run ci` passed: 280 unit tests, 41 PostgreSQL integration tests,
33 validator tests, format, lint, structure, types, data, build, and
audit with no vulnerabilities. After moving the CSS to the responsible child,
format, structure, lint, 13 shell tests, and build were repeated and passed.
Semantic review: the shell keeps Server composition, URL reading stays in the
Client island, date validation is pure, and the navigation does not import persistence.
Diff reviewed with no credentials or operational data; `git diff --check` passed.

The user approved the visual result and authorized commit and PR. The task remains
blocked until the virtual keyboard and safe area are validated on a real device.
