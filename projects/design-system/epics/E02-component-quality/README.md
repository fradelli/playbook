# DS-E02 — Component quality

## Expected outcome

Existing components are accessible, consistent, and fully cataloged before and during the Mira migration.

## Scope

- Menu shortcut highlight.
- Accessible close labels.
- Dark variant and CSS layers.
- Semantic pastel tokens for ColorSwatch.
- Stories, naming, and visual regression.

## Out of scope

- Replacing custom components with Mira recipes; it belongs to DS-E03.

## Order

| Task                                                  | Depends on | Outcome                                     |
| ----------------------------------------------------- | ---------- | ------------------------------------------- |
| [DS-E02-T01](T01-fix-menu-shortcut-highlight.md)         | —          | Menu shortcuts highlight on focus           |
| [DS-E02-T02](T02-require-accessible-close-labels.md)     | —          | Close controls named by consumers           |
| [DS-E02-T03](T03-resolve-dark-variant-and-css-layers.md) | —          | Theme independent of the OS and layered CSS |
| [DS-E02-T04](T04-add-semantic-pastel-tokens.md)          | —          | ColorSwatch uses semantic tokens only       |
| [DS-E02-T05](T05-complete-stories-and-naming.md)         | —          | Every component cataloged consistently      |
| [DS-E02-T06](T06-evaluate-visual-regression.md)          | DS-E02-T05    | Visual regression decision recorded         |
| [DS-E02-T07](T07-lint-react-hooks-and-accessibility.md) | — | Hook and JSX accessibility rules in lint |

Status lives only in the project `README.md`.

## Closing criteria

- [ ] Every required task is `DONE`.
- [ ] Validation and decisions are recorded.
- [ ] The next eligible epic is identified.
