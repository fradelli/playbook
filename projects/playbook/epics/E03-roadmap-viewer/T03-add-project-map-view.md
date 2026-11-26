---
id: PB-E03-T03
epic: PB-E03
project: playbook
repository: fradelli/playbook
depends_on: [PB-E03-T01]
---

# Add the project map view to the roadmap viewer

## Objective

The roadmap viewer shows each project as a map of areas by phase, where pointing at an epic shows the epics it is linked to and its prerequisites.

## Context

- The viewer has overview, matrix, kanban, and documents tabs. None shows which area of a product an epic belongs to or in which phase it runs.
- `projects/kaizen/OVERVIEW.md` already lists the Kaizen areas in "Map by area", but no file assigns an epic to an area or a phase.
- Task dependencies (`depends_on`) already link epics, inside a project and across projects. The map derives every link from them.
- The map serves onboarding and the planned Kaizen backend migration, where each area moves to the new backend in its own phase.
- Suna has no epics yet (PB-E01-T03), so its map is empty until then.

## Decisions

- 2026-11-26, maintainer: one map per project, starting with Kaizen and Suna.
- 2026-11-26, maintainer: pointing at an epic shows the epics it is linked to and its prerequisites.

## Inputs

- `projects/kaizen/OVERVIEW.md` — "Map by area": the candidate lanes for Kaizen.
- `projects/kaizen/README.md` — Epics table: the epics to place on the map.
- `scripts/build-roadmap-view.mjs` — `readProject`, `computeTaskState`, and `buildRoadmapData`: where epics, tasks, and cross-project dependencies are built.
- `scripts/build-roadmap-view.test.mjs` — test style for the generator.
- `scripts/roadmap-check.mjs` — `checkRoadmap`: where the map table is validated.
- `viewer/app.js` — routing (`parseRoute`, `routeFor`), the shared project filter (`state.project`), and `overviewPage` as the page pattern.
- `viewer/index.html` — the tab list in the header.
- `viewer/styles.css` — the design system dark tokens that the map uses.

## Expected behavior

- A `Map` tab at `#/map` shows one project at a time, chosen with the existing project filter.
- Each lane is an area, drawn as a horizontal line. Each column is a phase, in the order of the phase table.
- Each product epic is a station on its lane, inside its phase column. The ring color comes from the lane, and the inner dot from the epic status.
- A band below the lanes holds the prerequisites: technical epics of the project and epics of other projects that a mapped epic depends on. Each prerequisite sits in the column of the earliest phase that waits on it.
- A dashed arrow joins two epics when a task of one depends on a task of the other.
- Pointing at or focusing an epic highlights it, the epics it depends on, the epics that depend on it, and its prerequisites, and fades everything else. Pointing at a prerequisite highlights the epics that wait on it.
- Clicking an epic opens its epic page.
- A project without a map table shows a short message with the file to edit.

## Deliverables

- A `Map` table in `projects/kaizen/OVERVIEW.md` that places every Kaizen epic, plus a `Phases` table with the phase order. The format below is a proposal that the first subtask confirms:
  - `Phases`: `Phase | Name | Milestone`.
  - `Map`: `Epic | Area | Phase | Kind`, where `Kind` is `product` or `prerequisite`.
- `scripts/build-roadmap-view.mjs` that adds a `map` to each project: lanes, phases, stations, prerequisites, and epic-to-epic links derived from task dependencies.
- Tests in `scripts/build-roadmap-view.test.mjs` for the map data.
- `scripts/roadmap-check.mjs` and its tests: when a project has a `Map` table, every epic exists, appears once, and names a phase from the `Phases` table.
- The `#/map` route and page in `viewer/app.js`, the tab in `viewer/index.html`, and the map styles in `viewer/styles.css`.
- A `Map` paragraph in the `Roadmap viewer` section of `README.md`, naming the tables to edit.

## Subtasks

- [ ] Record in `Decisions` the maintainer's choice of the Kaizen phases, the lanes, the table format, and whether a station is an epic or a task.
- [ ] Write the `Phases` and `Map` tables in `projects/kaizen/OVERVIEW.md`.
- [ ] Parse the tables in the generator and derive the epic-to-epic links from task dependencies.
- [ ] Place each prerequisite in the column of the earliest phase that waits on it.
- [ ] Validate the tables in `roadmap-check.mjs`, with tests for a missing epic, a repeated epic, and an unknown phase.
- [ ] Draw the map in SVG with lanes, phase columns, stations, the prerequisite band, and arrows.
- [ ] Add the highlight on pointer and keyboard focus, and the click to the epic page.
- [ ] Show the empty-map message for a project without tables.
- [ ] Document the tables in `README.md`.

## Validation

- `npm test` and `npm run roadmap:check` pass.
- A `Map` table that names a missing epic, repeats an epic, or uses an unknown phase makes `npm run roadmap:check` fail with the epic ID in the message.
- `npm run roadmap:view`, then open `http://127.0.0.1:4173/#/map` with Kaizen selected: every Kaizen epic of the `Map` table appears once, and pointing at KZ-E10 highlights DS-E04 in the prerequisite band, because KZ-E10-T10 depends on DS-E04-T03.
- Tab through the stations: each focused station gets the same highlight as on pointer.
- Select Suna: the page shows the empty-map message and no script error.
- At 390 and 320 px the page has no horizontal scroll; only the map container scrolls sideways.

## Acceptance criteria

- [ ] The viewer has a `Map` tab that shows Kaizen epics by area and phase.
- [ ] Pointing at or focusing an epic highlights its linked epics and its prerequisites, including epics of other projects.
- [ ] Every link on the map comes from task `depends_on`; no file repeats a dependency for the map.
- [ ] `npm run roadmap:check` rejects a `Map` table with a missing, repeated, or unknown-phase epic.
- [ ] No horizontal page scroll at 390 and 320 px.

## Out of scope

- The Suna map tables, which wait for the Suna epics of PB-E01-T03.
- Planning the Kaizen backend migration; this task only makes room for its phase.
- Changing status from the page and publishing the page, as in the epic.

## Risks

- PB-E03-T02 also changes `viewer/index.html` and `viewer/styles.css`. Do not run both at the same time; finish one first.
- A project with many epics in one phase can crowd a column. Spread the stations across the column and let the map container scroll instead of shrinking the labels below legibility.

## Result

Not started.
