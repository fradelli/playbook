---
id: DS-E04-T01
epic: DS-E04
project: design-system
repository: fradelli/design-system
depends_on: [DS-E01-T01, DS-E02-T02, DS-E02-T03, DS-E03-T03, DS-E03-T04, DS-E03-T05, DS-E03-T07, DS-E03-T08, DS-E03-T09, DS-E03-T10]
external: [Maintainer merges the version PR]
---

# Publish the consolidated release

## Objective

Publish one version that contains the fixes and the Mira migration, with a single migration guide for consumers.

## Context

Version 0.7.0 was published on 2026-11-23. Kaizen still installs `vendor/fradelli-ui-mira-table-progress.tgz`, which declares version 0.6.0 but differs from the published 0.6.0. The maintainer decided to migrate Kaizen only after the corrections in this roadmap are published, because the version will change again.

## Inputs

- `.changeset/*.md` — pending Changesets.
- `docs/governance/releasing.md` — release runbook.
- Migration guides produced by DS-E02 and DS-E03 tasks.

## Deliverables

- A consolidated migration guide listing every breaking change since 0.7.0.
- The version PR created by the Release workflow and its published version.

## Subtasks

- [ ] Review pending Changesets and their SemVer classification.
- [ ] Consolidate the migration guide.
- [ ] Merge the version PR after maintainer approval.

## Validation

- The Release workflow publishes the version, the tag, and the GitHub Release.
- `npm view @fradelli/ui version` against GitHub Packages returns the new version.

## Acceptance criteria

- [ ] The new version is published from `main` by the Release workflow.
- [ ] The migration guide covers every removed or changed public API.

## Result

Not started.
