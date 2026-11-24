# DS-E03 — Mira adoption

## Expected outcome

Every shared component follows an official shadcn/ui Base UI Mira recipe, except the documented StatusIndicator and ColorSwatch.

## Scope

- ADR 0007 and the recipe import method.
- shadcn token aliases.
- Migration of custom AlertDialog, Sheet, Popover, RadioGroup, Separator, Badge, Alert, and Card.
- Alignment of Button, Label, DropdownMenu, and ContextMenu.
- Replacement of PendingButton, LoadingRegion, StatusBadge, and NavigationItem.
- Admission of Spinner, Empty, Drawer, Textarea, InputGroup, and ButtonGroup.

## Out of scope

- Recipes without a real consumer.
- Consumer application changes; they are registered in each consumer roadmap through DS-E04-T02.

## Order

| Task                                               | Depends on                | Outcome                                                 |
| -------------------------------------------------- | ------------------------- | ------------------------------------------------------- |
| [DS-E03-T01](T01-record-mira-only-adr.md)             | —                         | ADR 0007 accepted                                       |
| [DS-E03-T02](T02-add-shadcn-token-aliases.md)         | DS-E03-T01                   | Recipes adoptable without rewriting classes             |
| [DS-E03-T03](T03-migrate-overlays-to-mira.md)         | DS-E03-T01, DS-E03-T02          | Overlays rebuilt on Base UI                             |
| [DS-E03-T04](T04-migrate-basic-primitives-to-mira.md) | DS-E03-T01, DS-E03-T02          | Basic primitives follow Mira                            |
| [DS-E03-T05](T05-align-adapted-recipes.md)            | DS-E03-T01, DS-E03-T02, DS-E02-T01 | Adapted recipes aligned and `render` only               |
| [DS-E03-T06](T06-admit-spinner-and-empty.md)          | DS-E03-T01, DS-E03-T02          | Spinner and Empty published                             |
| [DS-E03-T07](T07-replace-pending-button.md)           | DS-E03-T05, DS-E03-T06          | PendingButton replaced                                  |
| [DS-E03-T08](T08-replace-loading-region.md)           | DS-E03-T04, DS-E03-T06          | LoadingRegion replaced                                  |
| [DS-E03-T09](T09-replace-status-badge.md)             | DS-E03-T04                   | StatusBadge replaced                                    |
| [DS-E03-T10](T10-replace-navigation-item.md)          | DS-E03-T05                   | NavigationItem replaced                                 |
| [DS-E03-T11](T11-admit-form-and-layout-recipes.md)    | DS-E03-T03, DS-E03-T05          | Drawer, Textarea, InputGroup, and ButtonGroup published |
| [DS-E03-T12](T12-choose-single-icon-library.md) | DS-E03-T01 | One icon library for components |

Status lives only in the project `README.md`.

## Closing criteria

- [ ] Every required task is `DONE`.
- [ ] Validation and decisions are recorded.
- [ ] The next eligible epic is identified.
