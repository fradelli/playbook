---
id: DS-E04-T03
epic: DS-E04
project: design-system
repository: fradelli/design-system
depends_on: [DS-E01-T01, DS-E02-T01, DS-E02-T02]
external: [Maintainer merges the version PR]
---

# Publish a corrective release

## Objective

Publish a small release with low-risk corrections so Kaizen can replace its local tarball before the consolidated Mira release.

## Context

- `fradelli/nextjs-kaizen-app` installs `file:vendor/fradelli-ui-mira-table-progress.tgz`, built from commit `698b828`.
- The `dist/` of that tarball is identical to the published `0.7.0`; no component, token, or style changed between `698b828` and `145bb6e`.
- Kaizen CI already reads GitHub Packages (`packages: read`, `NODE_AUTH_TOKEN`); it installed `0.6.0` from the registry until 2026-11-17.
- DS-E04-T01 waits for the full Mira migration, which contains breaking changes.

## Decisions

- 2026-11-23, maintainer: publish a corrective release before the consolidated one, instead of moving Kaizen to `0.7.0` unchanged.

## Inputs

- `.changeset/*.md` — Changesets added by the dependency tasks.
- `docs/governance/releasing.md` — release runbook.
- `fradelli/playbook: projects/kaizen/epics/E10-portfolio-visual-alignment/T09-complete-mira-adoption.md` — subtask that consumes the exact published version.

## Deliverables

- The version pull request created by the `Release` workflow, containing only the Changesets of DS-E01-T01, DS-E02-T01, and DS-E02-T02.
- A published `@fradelli/ui` version with migration notes for the required close labels.

## Subtasks

- [ ] Confirm that `main` has no Changeset outside the three dependency tasks.
- [ ] Review the version pull request and its SemVer classification.
- [ ] Record the published version in KZ-E10-T09 through a Kaizen planning change.

## Validation

- `npm view @fradelli/ui version --registry=https://npm.pkg.github.com` returns the new version.
- The GitHub Release of the new version lists only the three corrections.

## Acceptance criteria

- [ ] A version newer than `0.7.0` is published by the `Release` workflow from `main`.
- [ ] Its changelog lists the menu shortcut fix, the required Tailwind CSS peer, and the required close labels, and nothing else.
- [ ] KZ-E10-T09 names that exact version as the one to install.

## Risks

- The required close labels break Dialog and Toast usages that omit them; the migration notes list the prop to add for each component.

## Result

Not started.
