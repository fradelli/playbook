---
id: KZ-E00-T11
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T10]
---

# Apply the design system to the roadmap view

## Objective
Rebuild the local roadmap view from KZ-E00-T10 with the Kaizen design system (`@fradelli/ui`, Mira preset), the logo, and the application fonts. It stays outside the Next app, with no new route or service, and only reads the same sources.

## Inputs
- `docs/product/telas/guia-de-estilo.md` — typography, density, dark theme, colors by intent, and the rule to consume the package catalog.
- `src/components/shared/app-shell/components/kaizen-logo/kaizen-logo.tsx` — composition of the solar logo.
- `src/app/layout.tsx` — IBM Plex Sans and Figtree fonts and the dark theme.
- `roadmap/epics/E00-repository-governance/T10-create-local-roadmap-view.md` — screens, data, and calculations already delivered.

## Deliverables
- `roadmap/view/` as a React page bundled by Vite: `index.html`, `vite.config.mjs`, and `src/` (components, screens, routes, and Markdown renderer).
- `@fradelli/ui` components: Table (matrix), Progress (epic progress), Card, Badge, StatusIndicator, NavigationItem, Button, Input, NativeSelect, Switch, Label, Tooltip, Collapsible, Item, and Kbd; Lucide icons.
- Solar logo of the application, with the same stylesheet as `KaizenLogo`, and the Kaizen favicon.
- Table and Progress added to the design system from the official Mira recipes (Base UI) and consumed through the local package `vendor/fradelli-ui-mira-table-progress.tgz`.
- `vite` 8.2.4 declared as a devDependency, at the version the lockfile already had through Vitest.
- `pnpm roadmap:view` generates the data and the build in `roadmap/view/dist/` (outside Git).

## Subtasks
- [x] Replace the hand-written page with React components from the package, keeping the screens and routes from KZ-E00-T10.
- [x] Reproduce the solar logo and the application fonts.
- [x] Generate a classic bundle (IIFE) so the page opens directly from disk.
- [x] Include `roadmap/view/src` in lint and formatting.
- [x] Check in the browser on desktop, 390 px, and 320 px.

## Validation
- `tsc --noEmit`, `pnpm format:check`, ESLint on the changed files, `pnpm test:ci-scripts`, `pnpm docs:check`, `pnpm data:check`, and `pnpm structure:check` approved.
- 221 routes (tasks, epics, documents, and screens) rendered without errors or broken internal links.
- No horizontal page scrolling at 390 and 320 px.

## Acceptance criteria
- [x] The page uses the components, tokens, fonts, dark theme, and logo of Kaizen, without recreating package components.
- [x] The information and controls from KZ-E00-T10 remain: overview, epic, wave × status matrix, kanban, task, and documents, with filters, search, and navigation between files.
- [x] Opens from disk after `pnpm roadmap:view`, with no server; only the fonts come from Google Fonts.
- [x] No state is written or duplicated.

## Out of scope

- Dedicated roadmap app and multi-project task control, planned for later.
- Route in the Next app.
- Changing states through the page.
- Prose component in the design system: the shadcn/ui Base registry has no recipe for typography, prose, or Markdown; the text style of documents stays local (`roadmap/view/src/styles.css`). The stacked bar by status also stays local, because Progress represents a single value.
- Fixing `pnpm i18n:check`, which already failed in `src/` before this task (`training-activity-form`, `training-date-navigation`, and `app-shell`).

## Result
View rebuilt with `@fradelli/ui` in `roadmap/view/`. Open it with `pnpm roadmap:view` and the path of `roadmap/view/dist/index.html` that the command prints. The components stay in React to serve as the basis for the future app.
