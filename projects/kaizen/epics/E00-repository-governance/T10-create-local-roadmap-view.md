---
id: KZ-E00-T10
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T09]
---

# Create the local roadmap view

## Objective
View and navigate the roadmap, tasks, and documentation on a local page, with no new service and no second source of state. The page only reads `roadmap/` and `docs/`.

## Inputs
- `roadmap/README.md` — canonical states of epics and tasks.
- `roadmap/ACTIVE.md` — selected task and next action.
- `roadmap/epics/` — tasks standardized by KZ-E00-T09.
- `docs/DOCUMENTATION-STANDARD.md` — common header (type and area) of documents.

## Deliverables
- `scripts/build-roadmap-view.mjs` and tests: generates `roadmap/view/data.js`, local and unversioned.
- `roadmap/view/index.html` and `roadmap/view/markdown.js`: page with no dependencies and no network.
- Command `pnpm roadmap:view`.

## Subtasks
- [x] Generate the data with computed states, waves, pending items, unlocks, and readiness.
- [x] Render Markdown locally, with escaped HTML and repository links converted into navigation.
- [x] Create the screens: overview, epic, wave × status matrix, kanban, task, document list, and document.
- [x] Check in the browser, on desktop and at 375 px, in the light and dark themes.

## Validation
- `node --test scripts/build-roadmap-view.test.mjs` approved.
- All task, epic, and document routes rendered without errors and without broken internal links.
- No horizontal page scrolling at 375 px.

## Acceptance criteria
- [x] The matrix shows the waves by status, with an epic filter, search, ready-to-start items, and hideable finished items.
- [x] Clicking a task opens the rendered description, with dependencies, unlocks, wave, and source file.
- [x] Links between tasks, epics, and documents navigate within the page; code paths open in the editor.
- [x] No state is written or duplicated: the page reads the files and the generator computes.

## Out of scope

- Changing states through the page or the CLI.
- Publishing the page or serving it through the Next.js application.
- Multi-project hub.

## Result
View delivered in `roadmap/view/`. Open it with `pnpm roadmap:view` and the path the command prints. The data file contains the repository local path for the editor links; for that reason it stays out of Git.
