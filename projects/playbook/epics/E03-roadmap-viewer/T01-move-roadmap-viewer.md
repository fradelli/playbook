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

- `fradelli/nextjs-kaizen-app: scripts/build-roadmap-view.mjs` and its tests — data generator.
- `fradelli/nextjs-kaizen-app: roadmap/view/` — React page, Vite config, and Markdown renderer.
- `fradelli/nextjs-kaizen-app: vendor/fradelli-ui-mira-table-progress.tgz` — design system package used by the page until a published version exists.

## Deliverables

- `package.json` with `roadmap:view`.
- `scripts/build-roadmap-view.mjs`, its tests, and `viewer/`.
- A project filter in the overview, matrix, and kanban.
- A `KZ-` task to remove the viewer from Kaizen.

## Subtasks

- [ ] Port the generator to read `projects/*/README.md`, `ACTIVE.md`, epics, and tasks.
- [ ] Resolve cross-project dependencies in waves and readiness.
- [ ] Show `standards/` in the documents tab.
- [ ] Add the project filter.
- [ ] Register the Kaizen clean-up task.

## Validation

- Generator tests pass.
- Every task, epic, and standards route renders without errors or broken internal links.
- No horizontal page scroll at 390 and 320 px.

## Acceptance criteria

- [ ] One page shows the roadmap of every project.
- [ ] A task blocked by another project shows that dependency.

## Result

Not started.
