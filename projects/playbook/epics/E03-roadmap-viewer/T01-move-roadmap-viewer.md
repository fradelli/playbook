---
id: PB-E03-T01
epic: PB-E03
project: playbook
repository: fradelli/playbook
depends_on: [PB-E01-T01, PB-E01-T02]
---

# Move the roadmap viewer

## Objective

Move the interactive roadmap viewer from Kaizen to this repository and make it read every project and the standards.

## Inputs

- `fradelli/nextjs-kaizen-app: scripts/build-roadmap-view.mjs` and its tests at commit `1c3dd48` — data generator. KZ-E00-T17 removes them from Kaizen.
- `fradelli/nextjs-kaizen-app: roadmap/view/` at commit `1c3dd48` — React page, Vite config, and Markdown renderer.
- `fradelli/design-system: package.json` — `@fradelli/ui` is published on GitHub Packages; `0.7.0` already contains the Table and Progress the page uses (the Kaizen tarball has the same `dist/`). Install a published version, not the tarball.

## Deliverables

- `package.json` with `roadmap:view`.
- `scripts/build-roadmap-view.mjs`, its tests, and `viewer/`.
- A project filter in the overview, matrix, and kanban.

## Subtasks

- [ ] Port the generator to read `projects/*/README.md`, `ACTIVE.md`, epics, and tasks.
- [ ] Resolve cross-project dependencies in waves and readiness.
- [ ] Show `standards/` in the documents tab.
- [ ] Add the project filter.

## Validation

- Generator tests pass.
- Every task, epic, and standards route renders without errors or broken internal links.
- No horizontal page scroll at 390 and 320 px.

## Acceptance criteria

- [ ] One page shows the roadmap of every project.
- [ ] A task blocked by another project shows that dependency.

## Out of scope

- Removing the viewer from Kaizen, which is part of KZ-E00-T17.

## Result

Not started.
