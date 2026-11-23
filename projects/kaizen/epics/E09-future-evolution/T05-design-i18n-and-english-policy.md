---
id: KZ-E09-T05
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T05, KZ-E07-T05, KZ-E09-T04]
---

# Design i18n architecture and English-first policy

## Objective
Define English as the source language of the product and the repository, and approve an
i18n architecture able to serve other languages without scattering translations through the code.

## Inputs
- `AGENTS.md`
- `.github/pull_request_template.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/app/layout.tsx`
- `src/components/shared/app-shell/app-shell.tsx`
- `roadmap/epics/E06-training-execution/README.md`
- `roadmap/epics/E07-nutrition-execution/README.md`
- `roadmap/epics/E09-future-evolution/T04-validate-sleep-and-activity-flows.md`

## Deliverables
- Architecture decision on locale, catalog, fallback, formatting, and routing.
- English defined as the source language for UI, code, tests, documentation, and PRs.
- Strategy to preserve IDs, imported versions, old URLs, and Git history.
- Inventory of the Sandicts i18n pattern with decisions adopted or rejected.
- Executable plan for KZ-E09-T06, KZ-E09-T07, and KZ-E09-T08.

## Subtasks
- [ ] Identify the exact Sandicts reference before comparing implementations.
- [ ] Choose a library only after confirming consumers and requirements.
- [ ] Define locale negotiation, persistence, and fallback on the server.
- [ ] Separate product text, canonical content, and technical documentation.
- [ ] Define the policy for the `/treino` and `/dieta` routes without breaking existing URLs.
- [ ] Define how to prevent new strings outside the catalog without false positives.

## Missing data

- Repository, version, and exact files of the Sandicts i18n pattern.
- Confirmed initial languages: Portuguese, Spanish, and English. Priority order and default locale are still to be defined.
- Need for automatic detection versus explicit language selection.

## Validation
- Prove the decision with a minimal disposable spike or a contract test, without migrating the product.
- Review compatibility with Server Components, Server Actions, and versioned content.

## Acceptance criteria
- [ ] The architecture supports English and locale expansion without duplicating business rules.
- [ ] IDs, history, ownership, and canonical versions have a preservation strategy.
- [ ] Remaining unknowns are explicit and were not converted into defaults.

## Out of scope

- Translating screens, data, documents, or historical PRs.
- Rewriting commits, applied migrations, or already imported versions.

## Result
Not yet completed.
