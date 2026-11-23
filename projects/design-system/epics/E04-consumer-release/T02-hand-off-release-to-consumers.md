---
id: DS-E04-T02
epic: DS-E04
project: design-system
repository: fradelli/design-system
depends_on: [DS-E04-T01]
---

# Hand off the release to consumers

## Objective

Give each consumer the information and tasks needed to install the published version instead of a local tarball.

## Context

- Kaizen (`fradelli/nextjs-kaizen-app`, branch `developer`) depends on `file:vendor/fradelli-ui-mira-table-progress.tgz` and versions five tarballs in `vendor/`, four of them unused.
- Kaizen CSS duplicates package contracts: a second reduced-motion reset in `src/app/globals.css`, hex fallbacks equal to token values in `kaizen-logo.module.css`, derived sizes such as `calc(var(--fd-font-size-xs) * 5 / 6)`, and a `[data-slot="card"]` override.
- Kaizen imports PendingButton four times and NavigationItem once; both are removed by DS-E03.
- Suna usage of removed components is unknown.

## Inputs

- The migration guide from DS-E04-T01.
- `package.json`, `.npmrc`, `src/app/globals.css`, and `vendor/` in `fradelli/nextjs-kaizen-app` (`developer`).

## Deliverables

- Tasks registered in the Kaizen roadmap for installing the exact published version, removing `vendor/*.tgz`, removing duplicated CSS, and adopting the replaced components.
- The equivalent request for Suna.
- Missing tokens identified from consumer CSS registered as tasks in this roadmap.

## Subtasks

- [ ] Register the Kaizen tasks following its roadmap rules.
- [ ] Confirm package read access for Kaizen CI.
- [ ] Notify Suna with the migration guide.
- [ ] Register any missing token found in consumer CSS.

## Validation

- Each consumer roadmap contains an approved migration task.

## Acceptance criteria

- [ ] Every known consumer has a recorded path to the published version.

## Result

Not started.
