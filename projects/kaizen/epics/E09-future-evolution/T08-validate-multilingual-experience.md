---
id: KZ-E09-T08
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T06, KZ-E09-T07]
---

# Validate multilingual experience

## Objective
Prove that the product, content, and repository operation work in English and
in the additional approved locales, with safe fallback and no loss of history.

## Inputs
- `roadmap/epics/E09-future-evolution/T06-internationalize-product-content.md`
- `roadmap/epics/E09-future-evolution/T07-migrate-documentation-to-english.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `.github/workflows/ci.yml`
- `package.json`
- `scripts/validate-data.mjs`

## Deliverables
- Automated matrix of supported locales and fallbacks.
- Manual validation of the four journeys on mobile and desktop.
- Evidence of integrity, accessibility, SEO/noindex, routes, and locale persistence.
- Runbook to add and review a new language.

## Subtasks
- [ ] Test valid, missing, and unknown locales and an incomplete catalog.
- [ ] Test workouts, nutrition, sleep, and general activities in each supported locale.
- [ ] Confirm formatting of date, number, unit, and versioned content.
- [ ] Confirm that CI blocks language regressions without blocking preserved IDs.
- [ ] Review bundle, server-side rendering, and Client boundaries.

## Validation
- Run the complete gates, an E2E matrix per locale, and a manual content audit.

## Acceptance criteria
- [ ] English is complete and works as a deterministic fallback.
- [ ] Each declared locale covers the four journeys without improper keys or texts.
- [ ] The process of adding a language is documented and reproducible.

## Out of scope

- Publishing a locale without human review of the workout or nutrition content.

## Result
Not yet completed.
