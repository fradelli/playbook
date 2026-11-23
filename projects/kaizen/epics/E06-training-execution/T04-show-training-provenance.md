---
id: KZ-E06-T04
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T03]
---

# Show provenance and history

## Objective
Make the active version, the origin, and the documentary history of the workout visible.

## Inputs
- `docs/history/implementation/E06.md`
- `data/active.json`
- `data/plans/`
- `data/reviews/`
- `docs/migration/MIGRATION-MANIFEST.md`
- `src/features/training/`

## Deliverables
- Training UI under `src/features/training/` that shows provenance metadata and lets the user browse versions.

## Subtasks
- [ ] Show the version and update date.
- [ ] Identify original content and adapted content.
- [ ] Allow browsing versions without changing the active plan.
- [ ] Avoid unnecessary exposure of personal data.

## Validation
- Compare the version, update date, and origin shown in the UI with `data/active.json` and `docs/migration/MIGRATION-MANIFEST.md`.
- Browse a past version and confirm `data/active.json` does not change.

## Acceptance criteria
- [ ] The UI shows the version, the update date, and whether the content is original or adapted.
- [ ] Browsing a past version leaves the active plan unchanged.

## Result
Not started.
