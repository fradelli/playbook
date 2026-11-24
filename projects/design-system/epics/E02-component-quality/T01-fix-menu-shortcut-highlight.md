---
id: DS-E02-T01
epic: DS-E02
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Fix the menu shortcut highlight

## Objective

Highlight menu shortcuts when their item is focused, as the Mira recipe intends.

## Context

`DropdownMenuShortcut` uses `group-focus/dropdown-menu-item:text-foreground` and `ContextMenuShortcut` uses `group-focus/context-menu-item:text-foreground`, but menu items declare `group/menu-item` in `src/lib/menu-styles.ts`. The highlight never applies.

## Inputs

- `src/lib/menu-styles.ts` — `menuItemClasses`.
- `src/components/dropdown-menu/index.tsx` — `DropdownMenuShortcut`.
- `src/components/context-menu/index.tsx` — `ContextMenuShortcut`.

## Deliverables

- Shortcut classes referencing the group the items declare.
- A story or test asserting the focused shortcut color.

## Subtasks

- [x] Align the group name between items and shortcuts.
- [x] Cover the focused state in Storybook or a unit test.
- [x] Add a patch Changeset.

## Validation

- `npm run test:storybook` passes with the new assertion.

## Acceptance criteria

- [x] A focused menu item shows its shortcut in the foreground color in both menus.

## Result

- Delivered in `fradelli/design-system` PR #24, squash-merged as `3620791` on 2026-11-24.
- `DropdownMenuShortcut` and `ContextMenuShortcut` use `group-focus/menu-item` and `group-data-highlighted/menu-item`, the group the items declare.
- New `Shortcuts` stories in `DropdownMenu.stories.tsx` and `ContextMenu.stories.tsx` (the first ContextMenu story) assert that the highlighted shortcut takes the item color and the other shortcut does not.
- Regression proof: with the fix reverted, both stories fail; with it, they pass. CI `Validate package` passed; all 12 `npm run ci` gates passed locally.
- Patch Changeset: `.changeset/menu-shortcut-highlight.md`.
