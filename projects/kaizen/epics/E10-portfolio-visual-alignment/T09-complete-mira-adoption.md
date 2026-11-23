---
id: KZ-E10-T09
epic: KZ-E10
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E10-T08]
---

# Complete the adoption of the Mira design system

## Objective

Complete the migration of Kaizen to the public exports of `@fradelli/ui`, preserving Kaizen's specific behavior, persistence, and composition.

## Authorization

Expansion authorized on 2026-11-13: research the official shadcn/ui composition, incorporate the necessary primitives into the design system, and install them in Kaizen for the persistent bar with a green indicator, preserving the bottom navigation.

## Inputs

- `docs/plans/design-system/MIRA-DESIGN-SYSTEM-MIGRATION-PLAN.md` — sequence, boundaries, and acceptance.
- `docs/product/telas/guia-de-estilo.md` — current visual contract.
- `docs/product/telas/componentes-shadcn.md` — inventory and evidence per flow.
- `docs/product/telas/agenda-padroes-visuais.md` — schedule geometry and interactions.
- `docs/architecture/TARGET-ARCHITECTURE.md` — sections Semântica e legibilidade do código; Boundaries; Organização dos componentes React; Server Components; Client Components; Organização do Prisma e configuração de banco; Migrations.
- `prisma/migrations/20261108010000_exercise_catalog/migration.sql` — local preparation.
- `package.json` and `pnpm-lock.yaml` — candidate actually consumed.

## Deliverables

- `package.json` and `pnpm-lock.yaml` with the validated candidate and, in the final delivery, the exact release.
- Components in `src/features/training/ui/`, `src/components/shared/`, and `src/features/foundations/` migrated according to the inventory.
- `docs/product/telas/componentes-shadcn.md` with real evidence and exceptions.
- `CHANGELOG.md` updated, and the task status synchronized in `fradelli/playbook: projects/kaizen/README.md` and `ACTIVE.md`.

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

- `pnpm db:status` and `pnpm workspace:ensure` pass.
- Real imports of the `@fradelli/ui` subpaths resolve.
- Tests of the changed forms and dialogs, lint, types, structure, translations, formatting, and build pass.
- Journeys pass in desktop and mobile Chromium.
- Final gates and package checks follow the migration plan; a tarball is not treated as a published release.

## Acceptance criteria

- [ ] Kaizen imports generic controls and their appearance only from the public subpaths of `@fradelli/ui`.
- [ ] Composition, domain rules, and submission contracts remain in Kaizen code, not in the package.
- [ ] `docs/product/telas/componentes-shadcn.md` records code, tests, browser, and physical-device limitations as separate evidence for each flow.
- [ ] No catalog or release item is marked complete in the inventory without linked proof.

## Result

Delivered locally, not published:

- 2026-11-13: catalog migration applied, 16 migrations up to date, workspace confirmed. Select candidate installed via pnpm, hash checked, real imports passed. Warm-up selector migrated, preserving serialization, suggestions, and drafts. Offline frozen install, build, lint, types, structure, translations, format, and roadmap governance passed; 21 form tests and 47 editor/card tests passed. At 1440×1000 and emulated 390×844: real submission, draft, Escape, focus, and geometry passed; Checkbox checked in foundations. Synthetic activities deleted through the UI, with deletion history preserved.
- 2026-11-13: floating bar with Mira Item, StatusIndicator, Lucide, and touch target, consumed from the `activity` candidate. Fixed layout with no reserved space; active/paused states and reduced motion passed at 1440, 390, and 320 px. DS: six targeted tests, four stories, build, and tarball passed. Kaizen: 21 bar/reconciliation tests, build, and static checks passed. Evidence and hash are in the inventory. The app ran locally on port 3100 from the production build; no publication or deploy.
- 2026-11-14: executor package (counting/volume rules, Mira Switch, responsive dialogs, header, table, consistent modal opening). Decisions and evidence: `docs/plans/design-system/AJUSTES-DO-EXECUTOR-MIRA.md`.

Open points:

- The native options popover intercepts clicks over the nested delete confirmation; keyboard deletion works. Do not declare the pointer delete flow approved.
- Executor fixes discussed separately: sides side by side, uniform background in the darkest tone, disabled load without focus, and counting by filled measures with ✓ exclusive to rest. The counting change is an approved functional change and needs its own review of contracts and regressions.
- Full migration, catalog, release, and the complete sets journey remain pending. Preserve the previous branch and changes without re-running DONE tasks.
