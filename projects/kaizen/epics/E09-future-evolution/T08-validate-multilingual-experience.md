---
id: KZ-E09-T08
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T06, KZ-E09-T07]
---

# Validate multilingual experience

## Objective

Prove that the product, content, and repository operation work in English and in the additional approved locales, with safe fallback and no loss of history.

## Inputs

- `fradelli/playbook: projects/kaizen/epics/E09-future-evolution/T06-internationalize-product-content.md`: product i18n scope.
- `fradelli/playbook: projects/kaizen/epics/E09-future-evolution/T07-migrate-documentation-to-english.md`: documentation scope.
- `docs/architecture/TARGET-ARCHITECTURE.md`: architecture rules.
- `.github/workflows/ci.yml`: gates executed.
- `package.json`: scripts.
- `scripts/validate-data.mjs`: data integrity check.

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

- `pnpm run ci` passes, an E2E matrix runs per locale, and a manual content audit is recorded.

## Acceptance criteria

- [ ] Every English key exists, and a missing key in another locale shows the English text.
- [ ] For each declared locale, the E2E matrix covers the four journeys and finds no missing key or foreign-language text.
- [ ] The runbook lists the steps to add and review a new language.

## Out of scope

- Publishing a locale without human review of the workout or nutrition content.

## Result

Not started.
