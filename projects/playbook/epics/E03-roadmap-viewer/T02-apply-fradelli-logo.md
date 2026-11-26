---
id: PB-E03-T02
epic: PB-E03
project: playbook
repository: fradelli/playbook
depends_on: [PB-E03-T01]
---

# Apply the Fradelli logo to the roadmap viewer

## Objective

Replace the Kaizen icons in the roadmap viewer with the Fradelli FDLL logo.

## Context

- PB-E03-T01 copied `favicon-16.png`, `favicon-32.png`, and `favicon-48.png` from Kaizen, so the viewer shows the Kaizen sun in the browser tab and in the header.
- The Fradelli brand kit has two forms: the FDLL symbol (a rounded square with the letters FDLL) and the horizontal lockup (the symbol plus the word "Fradelli").
- The kit is provisional: its `README.md` lists open points (official color tokens, final typeface, optical corrections, a 16 px test, a similarity search).

## Decisions

- 2026-11-24, maintainer: the browser tab uses the FDLL symbol, because the word "Fradelli" cannot be read at 16 to 48 px.
- 2026-11-24, maintainer: the header uses the horizontal lockup for dark backgrounds (`horizontal-dark.svg`: white block, black letters, white word), because the viewer has a dark theme and the lockup replaces the separate image and the `fradelli` text.
- 2026-11-24, maintainer: `horizontal-black-on-white-background.svg` and `horizontal-white-on-black-background.svg` are not used. Their background has the same color as the block and the word, so only the letters FDLL show, and their names are swapped.

## Inputs

- `viewer/index.html` — `<link rel="icon">` tags and the `.brand` link in the header.
- `viewer/styles.css` — `.brand` and `.brand-name` rules.
- `viewer/icons/` — the Kaizen favicons that this task removes.
- `viewer/server.mjs` — confirms that it serves `.svg` files with the `image/svg+xml` type.
- Fradelli brand kit `fradelli-brand-kit.zip`, which the maintainer provides when the task starts:
  - `svg/symbol-black.svg` and `png/icon-black-32.png`, `icon-black-64.png`, `icon-black-128.png` — FDLL symbol, black block with white letters.
  - `svg/horizontal-dark.svg` — lockup for dark backgrounds.
  - `README.md` — open points of the provisional kit.

## Deliverables

- `viewer/brand/fradelli-symbol.svg` and `viewer/brand/fradelli-horizontal-dark.svg`, with the `viewBox` cropped to the drawing.
- `viewer/icons/favicon-16.png`, `favicon-32.png`, and `favicon-48.png` generated from the FDLL symbol, replacing the Kaizen files.
- `viewer/index.html` with an SVG favicon, the PNG fallbacks, and the lockup in the header.
- `viewer/styles.css` without the unused `.brand-name` rule.

## Subtasks

- [ ] Copy the two SVG files to `viewer/brand/` and crop the lockup `viewBox` to the drawing, without empty margins.
- [ ] Generate the 16, 32, and 48 px PNG favicons from `symbol-black.svg`.
- [ ] Add `<link rel="icon" type="image/svg+xml" href="brand/fradelli-symbol.svg">` before the PNG fallbacks.
- [ ] Replace the header image and the `fradelli` text with the lockup, keeping `aria-label="Fradelli roadmap"` on the link and an empty `alt` on the image.
- [ ] Remove `.brand-name` from `viewer/styles.css`.
- [ ] Confirm that no file in `viewer/` still references a Kaizen asset.

## Validation

- `npm test` and `npm run roadmap:check` pass.
- `npm run roadmap:view`, then open `http://127.0.0.1:4173/`: the tab shows the FDLL symbol and the header shows the lockup, with no 404 in the network panel.
- At 390 and 320 px the header has no horizontal scroll and the lockup is at least 24 px tall.
- At 16 px the FDLL symbol is inspected by eye; the result is recorded in `Result`.

## Acceptance criteria

- [ ] The browser tab of the viewer shows the FDLL symbol.
- [ ] The viewer header shows the "Fradelli" lockup for dark backgrounds and no Kaizen image.
- [ ] `rg -i kaizen viewer/` finds no reference to a Kaizen icon or image.
- [ ] No horizontal page scroll at 390 and 320 px.

## Out of scope

- Closing the open points of the brand kit.
- Moving the brand files to `fradelli/design-system`, which needs its own task in the design system.

## Result

Not started.
