---
id: DS-E01-T04
epic: DS-E01
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Enable coverage with thresholds

## Objective

Measure test coverage over every source file and fail CI when it drops.

## Context

`vitest.config.ts` sets `coverage: { enabled: false }` with no `include` or thresholds. Several components have no unit test of their own (accordion, alert, badge, button, checkbox, dialog, dropdown-menu, field, input, label, radio-group, switch, among others) and rely on stories or shared tests.

## Inputs

- `vitest.config.ts` — coverage settings.
- `package.json` — test scripts.

## Deliverables

- `vitest.config.ts` with coverage `include` over `src/**` (excluding stories and generated icons) and thresholds.
- A coverage script run by `npm run ci`.

## Subtasks

- [ ] Measure the current coverage including story interaction tests.
- [ ] Set thresholds at the measured level.
- [ ] Add the script to `npm run ci`.

## Validation

- `npm run ci` reports coverage and passes.

## Acceptance criteria

- [ ] Coverage counts files that no test loads.
- [ ] CI fails when coverage falls below the thresholds.

## Result

Not started.
