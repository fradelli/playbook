---
id: KZ-E09-T05
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T05, KZ-E07-T05, KZ-E09-T04]
---

# Design i18n architecture and English-first policy

## Objective

Approve an i18n architecture with English as the source language that serves other languages without scattering translations through the code.

## Context

Unknowns, not to be turned into defaults:

- Repository, version, and exact files of the Sandicts (now Suna) i18n pattern.
- Priority order and default locale of the confirmed initial languages: Portuguese, Spanish, and English.
- Automatic language detection versus explicit selection.

## Decisions

- 2026-11-23, owner: repository text (code, tests, documentation, PRs) is written in English in every Fradelli repository; only end-user product copy is localized (`fradelli/playbook: CLAUDE.md`, section "Language").

## Inputs

- `AGENTS.md`
- `.github/pull_request_template.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/app/layout.tsx`
- `src/components/shared/app-shell/app-shell.tsx`
- `fradelli/playbook: projects/kaizen/epics/E06-training-execution/README.md`
- `fradelli/playbook: projects/kaizen/epics/E07-nutrition-execution/README.md`
- `fradelli/playbook: projects/kaizen/epics/E09-future-evolution/T04-validate-sleep-and-activity-flows.md`

## Deliverables

- An architecture decision on locale, catalog, fallback, formatting, and routing.
- English as the source language of the UI catalog, aligned with the repository rule in Decisions.
- A strategy to preserve IDs, imported versions, old URLs, and Git history.
- An inventory of the Suna i18n pattern, with each item adopted or rejected.
- An executable plan for KZ-E09-T06, KZ-E09-T07, and KZ-E09-T08.

## Subtasks

- [ ] Identify the exact Suna reference before comparing implementations.
- [ ] Choose a library only after confirming consumers and requirements.
- [ ] Define locale negotiation, persistence, and fallback on the server.
- [ ] Separate product text, canonical content, and technical documentation.
- [ ] Define the policy for the `/treino` and `/dieta` routes without breaking existing URLs.
- [ ] Define how to block new strings outside the catalog without false positives.

## Validation

- A minimal disposable spike or a contract test proves the decision, without migrating the product.
- The decision is checked for compatibility with Server Components, Server Actions, and versioned content.

## Acceptance criteria

- [ ] The architecture serves English and further locales without duplicating business rules.
- [ ] IDs, history, ownership, and canonical versions each have a written preservation strategy.
- [ ] Every unknown in Context is either resolved by the owner or still listed as an unknown.

## Out of scope

- Translating screens, data, documents, or historical PRs.
- Rewriting commits, applied migrations, or already imported versions.

## Result

Not started.
