---
id: DS-E00-T04
epic: DS-E00
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Update stale documentation

## Objective

Make the README, the Mira catalog, the ADR statuses, and the admission table match the published package.

## Context

- `README.md` lists 22 of the 41 public subpaths and links Kaizen to `fradelli/kaizen-app` instead of `fradelli/nextjs-kaizen-app`.
- `docs/governance/base-mira-catalog.md` marks accordion, context-menu, tooltip, and kbd as absent although they exist.
- ADR 0002 is still `Accepted` although ADR 0006 supersedes its headless restriction; ADR 0003 and 0004 still say publication is pending.
- `docs/governance/component-admission.md` keeps `StatusBadge` local, but `@fradelli/ui/status-badge` is exported.

## Inputs

- `package.json` — `exports`.
- `README.md` — "Normative sources" and "Consumers".
- `docs/governance/base-mira-catalog.md` — inventory table.
- `docs/decisions/0002-native-accessible-primitives.md`, `0003-shared-glass-visual-language.md`, `0004-consistent-component-composition.md` — status lines.
- `docs/governance/component-admission.md` — "Initial examples".

## Deliverables

- `README.md`, `docs/governance/base-mira-catalog.md`, `docs/governance/component-admission.md`, and the three ADR status lines updated.

## Subtasks

- [ ] List every public subpath in the README, or point to a generated list.
- [ ] Fix the Kaizen repository link.
- [ ] Update the catalog rows for existing components.
- [ ] Mark ADR 0002 as superseded in part by ADR 0006 and update ADR 0003 and 0004 statuses without rewriting their decisions.
- [ ] Align the `StatusBadge` row with the package.

## Validation

- Every `package.json` export appears in the README.
- `npm run format:check` and `git diff --check` pass.

## Acceptance criteria

- [ ] No document claims a component is absent when it is exported, or the reverse.
- [ ] ADR statuses reflect the decisions in force.

## Result

Not started.
