---
id: KZ-E06-T02
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T04, KZ-E06-T01]
---

# Create the daily workout page

## Objective
Show the workout, mobility, rest, or unassigned state of the date, quick to read on a phone.

## Inputs
- `docs/history/implementation/E06.md`
- `docs/product/P0.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/features/training/application/training-dto.ts`
- `src/features/training/domain/training-day.rules.ts`
- `src/features/training/domain/training-projection.error.ts`
- `src/features/training/data/training-queries.ts`
- `src/app/treino/page.tsx`
- `src/components/shared/feature-placeholder/feature-placeholder.tsx`

## Deliverables
- Server-rendered day page with date navigation and canonical URL.
- Explicit states for workout, mobility, rest, unassigned,
  unavailable, invalid date, inconsistent reference, and unexpected error.
- Accessible, responsive components, organized in their own folders.

## Implementation decisions

- KZ-E06-T02 is read-only. Assigning a session, mobility, or rest, saving
  execution, and finishing the workout belong to KZ-E06-T03.
- A missing date redirects to `?date=YYYY-MM-DD` calculated on the server in
  `America/Sao_Paulo`; an invalid date does not query the database.
- Previous/Today/next navigation uses civil dates and does not depend on the
  browser time zone.
- `src/app/treino/page.tsx` stays thin: it resolves the route, starts the
  server-only query, and hands only serializable contracts to the UI.
- Server Components are the default. The only mandatory Client boundary is the error
  boundary with retry.
- Async content uses a local `Suspense` to preserve the header and date without
  showing the previous workout as if it belonged to the new date.
- Known reference errors become safe feedback; database details,
  paths, and internal IDs do not reach the browser.
- `null` values stay absent. Load appears only when
  `loadApplicable` is true, and not applicable never becomes `0 kg`.
- Each React component lives in its own folder; helpers stay next to
  their actual consumer and no global barrel is created.

## Plan by responsibility

### Civil date and route

- Create a pure, tested resolver for today in `America/Sao_Paulo`, query
  validation, and previous/next calculation across month, year, and leap year.
- Normalize `/treino` to the canonical URL and offer a return to Today when the
  parameter is invalid or repeated.

### Server-only composition

- Reuse `queryFixedWorkspaceTrainingDay()` and map only known failures
  to a serializable page result; unexpected failures go to the
  error boundary.
- Do not accept `workspace_id`, do not create a public cache, and do not introduce an internal
  HTTP endpoint.

### Interface

- Create `src/features/training/ui/components/training-day-page/` with the page
  frame and private children for navigation, loading, feedback, unassigned day,
  rest, session, exercise, and set.
- Show preparation before the main workout; mobility uses only its session
  and rest does not create artificial exercises.
- Translate states and measures into readable text, preserve the DTO order, and
  show instructions, alerts, and comments as plain text.
- Use `@fradelli/ui` primitives and local composition without duplicating Design System
  tokens.

### Tests

- Cover missing, invalid, and repeated date, month/year changes, and leap year.
- Cover all discriminated states, separate preparation, applicable load,
  missing values, ordering, and accessible labels.
- Confirm the absence of forms, mutations, and ownership coming from the browser.

## Subtasks
- [x] Implement previous date, Today, and next date in `America/Sao_Paulo`.
- [x] Show the available options when the day is unassigned, without writing.
- [x] Separate public content from personal data.
- [x] Handle loading, empty, invalid reference, and error.
- [x] Show workout, preparation, mobility, and rest without inventing data.
- [x] Keep the smallest Client boundary and components in their own folders.

## Validation
- Test navigation, responsiveness, discriminated states, and safe failures.
- Run format, lint, structure, types, tests, PostgreSQL integration,
  coverage, build, audit, `pnpm run ci`, and `git diff --check`.

## Acceptance criteria
- [x] The user identifies the day's state without inferring a private schedule.
- [x] Date and navigation stay visible during loading and failures.
- [x] Preparation and main workout appear separately and in the prescribed order.
- [x] The page does not accept a workspace nor offer write controls.

## Out of scope

- Assigning workout, mobility, or rest.
- Saving preparation, sets, comments, or completion.
- Authentication, multiple users, public cache, or production infrastructure.

## Result
Daily workout page implemented as a server-rendered read, with a canonical
URL by civil date in `America/Sao_Paulo`, navigation between dates, and explicit
states for workout, mobility, rest, unassigned day, unavailability,
invalid date, inconsistent reference, and unexpected error. The composition keeps
the fixed workspace exclusively on the server, offers no mutations, and keeps only
the error boundary as a Client boundary. Components, tests, and styles remain
organized by responsibility; final validation passed 196 unit tests,
33 PostgreSQL integrations, coverage, validators, build, and an audit with no
known vulnerabilities.
