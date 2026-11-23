---
id: KZ-E10-T09
epic: KZ-E10
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E10-T08]
---

# Complete the adoption of the Mira design system

## Objective
Complete the existing migration to the public exports of `@fradelli/ui`,
preserving Kaizen's specific behavior, persistence, and composition.

## Inputs
- `docs/plans/design-system/MIRA-DESIGN-SYSTEM-MIGRATION-PLAN.md` — sequence, boundaries, and acceptance.
- `docs/product/telas/guia-de-estilo.md` — current visual contract.
- `docs/product/telas/componentes-shadcn.md` — inventory and evidence per flow.
- `docs/product/telas/agenda-padroes-visuais.md` — schedule geometry and interactions.
- `docs/architecture/TARGET-ARCHITECTURE.md` — Semântica e legibilidade do código;
  Boundaries; Organização dos componentes React; Server Components; Client Components;
  Organização do Prisma e configuração de banco; Migrations.
- `prisma/migrations/20261108010000_exercise_catalog/migration.sql` — local preparation.
- `package.json` and `pnpm-lock.yaml` — candidate actually consumed.

## Deliverables
- `package.json` and `pnpm-lock.yaml` with the validated candidate and, in the final delivery, the exact release.
- Components in `src/features/training/ui/`, `src/components/shared/`, and
  `src/features/foundations/` migrated according to the inventory.
- `docs/product/telas/componentes-shadcn.md` with real evidence and exceptions.
- `CHANGELOG.md`, `roadmap/README.md`, and `roadmap/ACTIVE.md` synchronized.

## Subtasks
- [x] Review/apply the local migration, confirm the workspace and an accessible database.
- [x] Check the hash and exports and install the candidate with Select via pnpm.
- [x] Migrate and validate the first real form selector inside a Dialog.
- [x] Validate Field, Checkbox, submission, keyboard, and focus restoration in the consumers.
- [ ] Reconcile the inventory and the design system gaps.
- [x] Incorporate the Mira Item and the status indicator into the DS, install the candidate, and validate the floating bar without shifting content.
- [ ] Complete the executor, schedule, forms, and common routes in batches.
- [ ] Remove competing overrides and document the remaining local composition.
- [ ] Validate complete desktop/mobile journeys and final gates.
- [ ] After local review and the DS release, consume the exact published version.

## Validation
`pnpm db:status`, `pnpm workspace:ensure`, real imports of the subpaths,
tests of the changed forms/dialogs, lint, types, structure, translations,
formatting, build, and journeys in desktop/mobile Chromium. Final gates and
package checks follow the plan, without treating a tarball as a published release.

## Acceptance criteria
- [ ] Generic controls and appearance come from the package's public contract.
- [ ] Composition, domain rules, and submission contracts remain in Kaizen.
- [ ] Evidence distinguishes code, tests, browser, and physical limitations.
- [ ] No catalog/release pending item is declared complete without proof.

## Result
Local preparation delivered on 13/11/2026: catalog migration applied, 16 migrations
up to date, and workspace confirmed. Select candidate installed via pnpm, hash checked,
and real imports passed. Warm-up selector migrated, preserving serialization,
suggestions, and drafts. Offline frozen install, build, lint, types, structure,
translations, format, and roadmap governance passed; 21 form tests and
47 editor/card tests passed. Desktop 1440×1000 and emulated mobile 390×844: real submission,
draft, Escape, focus, and geometry passed; Checkbox checked in foundations.
Synthetic activities deleted through the UI, with deletion history preserved.

Pending finding from the menu review: the native options popover intercepts clicks
over the nested delete confirmation; keyboard deletion works. Do not
declare the pointer delete flow approved. The inventory details the evidence.
The full migration, catalog, release, and complete sets journey remain
pending. Preserve the previous branch and changes without re-running DONE tasks.

Expansion authorized on 13/11/2026: research the official shadcn/ui composition,
incorporate the necessary primitives into the design system, and then install them in Kaizen
for the persistent bar with a green indicator, preserving the bottom navigation.
Executor fixes discussed separately remain pending: sides
side by side, uniform background in the darkest tone, disabled load without focus, and counting
by filled measures with ✓ exclusive to rest. The last is an approved
functional change and requires its own review of contracts and regressions.

Bar delivered locally: Mira Item, StatusIndicator, Lucide, and touch target
consumed from the `activity` candidate. Fixed layout with no reserved space; active/paused
states and reduced motion passed at 1440, 390, and 320 px. DS: six targeted tests
and four stories, build, and tarball passed. Kaizen: 21 bar/reconciliation tests,
build, and static checks passed. Evidence and hash in the
inventory. The app remains local on port 3100, served by the production
build during this check; there is no publication or deploy.

Executor package delivered locally on 14/11/2026. Decisions and evidence are in `docs/plans/design-system/AJUSTES-DO-EXECUTOR-MIRA.md`. It includes counting/volume rules, Mira Switch, responsive dialogs, header, table, and consistent modal opening. Release and full adoption remain in the migration subtasks.
