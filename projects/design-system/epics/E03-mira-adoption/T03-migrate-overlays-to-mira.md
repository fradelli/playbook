---
id: DS-E03-T03
epic: DS-E03
project: design-system
repository: fradelli/design-system
depends_on: [DS-E03-T01, DS-E03-T02]
---

# Migrate overlays to Base UI Mira

## Objective

Replace the native and hand-built AlertDialog, Sheet, and Popover with the official Base UI Mira recipes.

## Context

- AlertDialog and Sheet use native `<dialog>` with focus handled in `useEffect`; Popover implements positioning, focus, Escape, and outside clicks by hand. The auto-focus routine is copied in each of them.
- Official class coverage measured in the audit: AlertDialog 18%, Sheet 22%, Popover 14%.
- The recipes use `@base-ui/react/alert-dialog`, `@base-ui/react/dialog`, and `@base-ui/react/popover`, and add `AlertDialogMedia`, `PopoverHeader`, `PopoverTitle`, and `PopoverDescription`.
- `SheetOverlay` currently renders `null`.
- Kaizen imports Popover twice and Sheet once; AlertDialog has no Kaizen import.

## Inputs

- `src/components/alert-dialog/index.tsx`, `src/components/sheet/index.tsx`, `src/components/popover/` — current APIs.
- `https://ui.shadcn.com/r/styles/base-mira/alert-dialog.json`, `sheet.json`, `popover.json` — official recipes.
- `src/styles/styles.css` — responsive modal rules for `alert-dialog-content`.

## Deliverables

- The three components rebuilt from the recipes, keeping the subpaths.
- `src/components/popover/popover-position.ts` and `use-popover-position.ts` removed.
- A migration guide and a Changeset classifying the breaking change.

## Subtasks

- [ ] Rebuild each component from its recipe.
- [ ] Map removed props (`asChild`, `onOpenAutoFocus`, `onCloseAutoFocus`) to Base UI equivalents in the guide.
- [ ] Update stories, tests, and fixtures.

## Validation

- `npm run ci` passes.
- Keyboard, focus return, and Escape behave as before in Storybook interaction tests.

## Acceptance criteria

- [ ] No overlay manages focus with custom effects.
- [ ] Consumers have a migration guide for every changed prop.

## Result

Not started.
