---
id: DS-E02-T06
epic: DS-E02
project: design-system
repository: fradelli/design-system
depends_on: [DS-E02-T05]
---

# Evaluate visual regression testing

## Objective

Decide whether and how visual regressions are detected before release.

## Context

Storybook runs accessibility and interaction tests in Chromium through Vitest, but nothing compares rendered images. The Mira migration in DS-E03 changes many components at once.

## Inputs

- `vitest.config.ts` — Storybook project.
- `.storybook/main.ts` and `.storybook/preview.ts`.
- `.github/workflows/ci.yml` — validation job.

## Deliverables

- A recorded decision comparing options (Vitest browser screenshots, a hosted service, or none) with cost and flakiness.
- If approved, a baseline and a CI step.

## Subtasks

- [ ] Compare the options.
- [ ] Record the decision.
- [ ] Implement the approved option before the DS-E03 migrations land.

## Validation

- If implemented, a deliberate style change makes the visual check fail.

## Acceptance criteria

- [ ] The decision is recorded and, if approved, enforced in CI.

## Result

Not started.
