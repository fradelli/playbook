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

## Decisions

- 2026-11-24, maintainer: the viewer keeps the repository rule of Node.js 24 with no installed packages. It does not install React, Vite, Tailwind CSS, or `@fradelli/ui`; the page is plain JavaScript and copies the design system dark tokens.
- 2026-11-24, maintainer: the viewer reads the files live from disk, so status changes show before they are committed.

## Inputs

- `fradelli/nextjs-kaizen-app: scripts/build-roadmap-view.mjs` and its tests at commit `1c3dd48` — data generator. KZ-E00-T17 removes them from Kaizen.
- `fradelli/nextjs-kaizen-app: roadmap/view/` and `public/icons/favicon-16.png`, `favicon-32.png`, `favicon-48.png` at commit `1c3dd48` — React page, Vite config, Markdown renderer, and icons.
- `fradelli/design-system: src/styles/tokens.generated.css` — dark color and radius tokens that the page copies.

## Deliverables

- `package.json` with `roadmap:view`, which starts `viewer/server.mjs`.
- `scripts/build-roadmap-view.mjs`, its tests, and `viewer/`.
- A `Roadmap viewer` section in `README.md`.
- A project filter in the overview, matrix, and kanban.

## Subtasks

- [x] Port the generator to read `projects/*/README.md`, `ACTIVE.md`, epics, and tasks.
- [x] Resolve cross-project dependencies in waves and readiness.
- [x] Show `standards/` in the documents tab.
- [x] Add the project filter.

## Validation

- Generator tests pass.
- Every task, epic, and standards route renders without errors or broken internal links.
- No horizontal page scroll at 390 and 320 px.

## Acceptance criteria

- [x] One page shows the roadmap of every project.
- [x] A task blocked by another project shows that dependency.

## Out of scope

- Removing the viewer from Kaizen, which is part of KZ-E00-T17.

## Result

- `npm run roadmap:view` serves the viewer at `http://127.0.0.1:4173/` with no installed packages. It reads 4 projects, 22 epics, 184 tasks, and 19 documents, and redraws open pages about 150 ms after a file changes (an edited status row showed up without a reload).
- Generator ported with prefixed IDs, one `ACTIVE.md` block per active task, waves across projects, and `crossProjectPending`; KZ-E10-T10 shows that it waits on DS-E04-T03 of the design system.
- `npm test`: 41 tests pass, 9 of them for the viewer. `npm run roadmap:check` passes.
- Browser sweep of all 229 routes (overview, matrix, kanban, documents, every epic, task, and document): no script error, no "Not found" page, all 227 internal links resolve, and no element wider than the page at 390 and 320 px.
- Open point: the page does not load the Figtree and IBM Plex Sans web fonts; it uses system fonts.
