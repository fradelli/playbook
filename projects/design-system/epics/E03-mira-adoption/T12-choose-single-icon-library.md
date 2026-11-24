---
id: DS-E03-T12
epic: DS-E03
project: design-system
repository: fradelli/design-system
depends_on: [DS-E03-T01]
---

# Choose a single icon library

## Objective

Decide whether the package keeps Phosphor, Lucide, or both, and align the components and public subpaths with the decision.

## Context

- Mira recipes use Lucide; ADR 0006 adopts Lucide for new recipes and keeps the Phosphor entry points public.
- `@fradelli/ui/icons` and `@fradelli/ui/icons/*` expose 1,512 generated Phosphor components (4.4 MB in `dist/icons`); `icons:check` takes about 144 s locally.
- `@fradelli/ui/lucide-icons` exports only `Trash2`.
- PendingButton and Sheet still render Phosphor icons; DS-E03-T03 and DS-E03-T07 replace both components.

## Decisions

- 2026-11-23, maintainer: every component follows its Mira recipe (DS-E03-T01).

## Inputs

- `docs/decisions/0006-mira-component-recipes.md` — icon decision.
- `docs/governance/iconography.md` — current catalog contract.
- `src/icons/`, `src/lucide-icons/index.ts`, and `scripts/generate-icons.mjs`.
- `package.json` — `exports` and dependencies.

## Deliverables

- A decision recorded in ADR 0007 or in a new ADR.
- Components, subpaths, and `docs/governance/iconography.md` aligned with the decision.
- A Changeset with migration notes when a public subpath changes.

## Subtasks

- [ ] List the icon imports of Kaizen and Suna.
- [ ] Record the decision and its migration path.
- [ ] Apply it to components, subpaths, scripts, and documentation.

## Validation

- `npm run ci` passes.
- `rg -n "phosphor|lucide" src/components` shows only the chosen library.

## Acceptance criteria

- [ ] An accepted ADR names the icon library used by components.
- [ ] Every file under `src/components/` imports icons from that library only.
- [ ] The public icon subpaths in `package.json` match the ADR.

## Result

Not started.
