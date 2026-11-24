---
id: KZ-E10-T10
epic: KZ-E10
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [DS-E04-T03]
---

# Install the published corrective release of `@fradelli/ui`

## Objective

Make Kaizen install the exact `@fradelli/ui` version published by DS-E04-T03 from GitHub Packages instead of a local tarball.

## Context

- `package.json` installs `file:vendor/fradelli-ui-mira-table-progress.tgz`; its `dist/` is identical to the published `0.7.0`.
- `vendor/` also holds four unused tarballs: `mira-agenda-final`, `mira-color-swatch`, `mira-dark-tooltips`, and `mira-executor-verified`.
- The corrective release makes the close labels of Dialog and Toast required, so consumers that omit them stop type-checking.
- Kaizen CI already reads GitHub Packages (`packages: read`, `NODE_AUTH_TOKEN`) and installed `0.6.0` from the registry until 2026-11-17.

## Decisions

- 2026-11-24, owner: wait for the corrective release instead of installing `0.7.0` unchanged.

## Inputs

- `fradelli/design-system: CHANGELOG.md` — the published version and its migration notes for the required close labels.
- `package.json` and `pnpm-lock.yaml` — the `@fradelli/ui` dependency.
- `.npmrc` and `.github/workflows/ci.yml` — registry scope and the CI token used to install it.
- `vendor/` — the five `fradelli-ui-*.tgz` files; `vendor/braces/` is a separate override and stays.
- The files under `src/` that import `@fradelli/ui/dialog`, `@fradelli/ui/alert-dialog`, or `@fradelli/ui/toast` (`rg -l '@fradelli/ui/(dialog|alert-dialog|toast)"' src`) — usages that may need the close label.
- `src/app/globals.css` — the `kaizen-static-motion` reset, to compare with the reduced-motion rules in `@fradelli/ui/styles.css`.
- `src/components/shared/app-shell/components/kaizen-logo/kaizen-logo.module.css` — hex fallbacks equal to token values.
- `src/features/schedule/ui/components/calendar-grid/calendar-grid.module.css` — `calc(var(--fd-font-size-xs) * 5 / 6)` sizes.
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.module.css` — the `[data-slot="card"]` override.

## Deliverables

- `package.json` with `"@fradelli/ui": "<exact version>"` and a matching `pnpm-lock.yaml`.
- Every `fradelli-ui-*.tgz` removed from `vendor/`.
- Close labels added where the release requires them.
- Duplicated CSS removed, or kept with a one-line comment naming the missing package contract.
- A design system task registered in the playbook for each missing token found.
- `CHANGELOG.md` updated.

## Subtasks

- [ ] Read the release notes and confirm the exact version.
- [ ] Install it with `pnpm add -E @fradelli/ui@<version>` and remove the tarballs.
- [ ] Add the required close labels and run the affected tests.
- [ ] Compare each duplicated CSS rule with the package contract; remove the duplicates.
- [ ] Register the missing tokens in the design system roadmap.
- [ ] Check desktop and mobile Chromium on Today, the schedule, and the workout executor.

## Validation

- `rg -n "vendor/fradelli-ui" package.json pnpm-lock.yaml` finds nothing.
- `ls vendor/*.tgz` finds nothing.
- `pnpm run ci` passes.
- The `pnpm install --frozen-lockfile` step of the pull request CI passes, proving that CI reads the package.

## Acceptance criteria

- [ ] `package.json` pins `@fradelli/ui` to the exact version published by DS-E04-T03, without a range.
- [ ] `vendor/` contains no `@fradelli/ui` tarball.
- [ ] The pull request CI installs `@fradelli/ui` from GitHub Packages and passes.
- [ ] Each of the four CSS findings listed in Inputs is removed or has a comment naming the missing package contract.

## Out of scope

- Adopting the components that the consolidated Mira release (DS-E04-T01) replaces, such as PendingButton and NavigationItem; that stays in KZ-E10-T09.
- `vendor/braces/` and the dependency overrides, owned by KZ-E12-T01.

## Result

Not started.
