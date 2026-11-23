---
id: DS-E03-T11
epic: DS-E03
project: design-system
repository: fradelli/design-system
depends_on: [DS-E03-T03, DS-E03-T05]
---

# Admit the Drawer, Textarea, InputGroup, and ButtonGroup recipes

## Objective

Add the Mira recipes that complete the form and overlay set and replace the responsive modal CSS.

## Context

- `src/styles/styles.css` turns Dialog and AlertDialog into bottom sheets below 48rem with unlayered CSS; the Mira Drawer recipe covers this pattern with `@base-ui/react`.
- Textarea, InputGroup, and ButtonGroup pair with the existing Input, Field, and Button recipes. Kaizen has a local `<textarea>`.
- The remaining missing recipes (tabs, toggle, toggle-group, avatar, scroll-area, hover-card, slider, breadcrumb, pagination, aspect-ratio, combobox, navigation-menu, menubar, sidebar, and those with extra dependencies) wait for a real consumer.

## Inputs

- `https://ui.shadcn.com/r/styles/base-mira/{drawer,textarea,input-group,button-group}.json` — official recipes.
- `src/styles/styles.css` — responsive modal rules.
- `docs/governance/component-admission.md` — checklist.

## Deliverables

- `src/components/{drawer,textarea,input-group,button-group}/` with public subpaths, stories, and tests.
- The responsive modal CSS removed or replaced by a documented Drawer pattern.
- A minor Changeset.

## Subtasks

- [ ] Add the four recipes with package tokens.
- [ ] Decide how responsive dialogs use Drawer and remove the CSS override.
- [ ] Record the admissions in the catalog.

## Validation

- `npm run ci` passes, including `pack:check` with the new subpaths.

## Acceptance criteria

- [ ] The four recipes are published entry points.
- [ ] No unlayered CSS changes dialog layout.

## Result

Not started.
