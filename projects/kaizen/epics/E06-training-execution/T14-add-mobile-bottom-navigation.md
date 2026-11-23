---
id: KZ-E06-T14
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T04]
---

# Move the main navigation to the bottom on mobile

## Objective

Show the Training and Diet links in a bottom bar on mobile, like an app, without duplicating the navigation for screen readers.

## Context

The main links used to sit at the top. The change is app-wide but is recorded here because it came up in the training journey review; it has no training business rules.

## Decisions

Plan approved by the owner on 27/09:

- Below 768 px, the bottom bar shows icons only; the header gets a smaller height, the brand, and spacing.
- Desktop keeps the navigation at the top.
- A single accessible navigation; links keep the valid date; safe area respected and space reserved so content is not covered.
- Changing routes does not affect an execution in progress. Diet only keeps the date in the URL until its journey exists.
- The link primitive (`NavigationItem`) and the `BarbellIcon`/`ForkKnifeIcon` exports live in the design system; the composed bar and the routes stay in Kaizen. No provisional artifact is copied into Kaizen.

## Inputs

- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/app/layout.tsx`
- `src/components/shared/app-shell/app-shell.tsx`, `app-shell.module.css`, `app-shell.test.tsx`
- `src/components/shared/app-shell/components/app-shell-navigation/` — `app-shell-navigation.tsx`, `.constants.ts`, `.types.ts`, `.utils.ts`, `.test.tsx`, `hooks/use-app-shell-navigation.ts`
- `src/components/shared/app-shell/components/app-shell-navigation/components/app-shell-navigation-links/` — `app-shell-navigation-links.tsx`, `.types.ts`, `.module.css`
- `src/components/shared/app-shell/components/app-shell-navigation/components/app-shell-navigation-routes/app-shell-navigation-routes.tsx`
- `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`

## Expected behavior

- On mobile, Training and Diet stay fixed at the bottom, mark the active route clearly, and respect the device safe area.
- On desktop, the navigation stays at the top.
- The bar does not cover content, controls, or the floating rest panel; the virtual keyboard and screen readers stay usable.

## Deliverables

- Design system release 0.3.0 with `NavigationItem` and the two icon exports, installed in Kaizen by exact version.
- Shell with the mobile bottom bar and the desktop top navigation, sharing one accessible navigation.
- Shell tests for focus, keyboard, responsiveness, and date preservation.

## Subtasks

- [x] Re-evaluate the shell structure and the design system components; present the solution and get approval (27/09).
- [x] Publish the primitive and icons through the official design system release (PRs #9 and #10, release 0.3.0).
- [x] Integrate the bar in Kaizen and test focus, keyboard, responsiveness, contrast, narrow viewports, and the reserved space.
- [ ] Validate the virtual keyboard and the safe area on a physical phone.

## Validation

- Shell tests and `pnpm run ci` pass.
- At 320 px there is no horizontal overflow from the bar; touch targets are at least 48 × 44 px.
- On a physical phone, the virtual keyboard and the safe area leave content and controls visible.

## Acceptance criteria

- [x] Mobile bottom navigation and desktop top navigation render from a single accessible navigation.
- [ ] On a physical phone with a safe area and with the virtual keyboard open, no content or control is covered.

## Out of scope

- Redesigning the diet or training pages, or creating navigation for routes that do not exist yet.

## Result

Implemented and approved visually by the owner, who authorized the commit and PR. Design system release 0.3.0 installed by exact version, with a minimum-age exception limited to that package. Checks: 13 shell tests, real Training/Diet navigation keeping the date, 320 px without overflow, 48 × 44 px targets, 80 px bottom reserve; `pnpm run ci` passed (280 unit, 41 PostgreSQL integration, 33 validator tests, audit clean); semantic review kept Server composition and the Client island for URL reading.

Open: virtual keyboard and safe area were not simulated as proof; they need a physical device.
