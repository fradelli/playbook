---
id: KZ-E13-T01
epic: KZ-E13
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
external: [Owner sends the Kaizen icon files with a transparent background]
---

# Remove the background from the Kaizen browser icon

## Objective

Show the Kaizen sun without the black square in the browser tab, while the home screen icons keep a full background.

## Context

- Every icon in `public/icons/` and `src/app/icon.png` and `src/app/apple-icon.png` is an RGB PNG with no alpha channel, so the sun sits on a black square.
- The header logo already uses `public/brand/kaizen-solar.png`, a 256 px PNG with alpha.
- iOS fills a transparent home screen icon with black, and Android crops a `maskable` icon to its own shape, so these two icons must stay opaque.

## Decisions

- 2026-11-24, maintainer: the browser tab and the header show the sun without a background.
- 2026-11-24, maintainer: `apple-icon.png` and `maskable-512.png` keep the black background, because the home screen icon cannot be transparent on iOS and the maskable icon must fill its whole square.

## Inputs

- `src/app/icon.png` and `src/app/apple-icon.png` — icons that Next.js turns into `<link rel="icon">` and `<link rel="apple-touch-icon">`.
- `src/app/favicon.ico` — legacy favicon.
- `public/icons/` — `favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `icon-192.png`, `icon-512.png`, and `maskable-512.png`.
- `src/app/manifest.webmanifest` — `icons` list and their `purpose`.
- `public/brand/kaizen-solar.png` — current transparent sun.
- Transparent icon files that the owner sends when the task starts, with at least one 1024 px source.

## Deliverables

- `src/app/icon.png`, `src/app/favicon.ico`, `public/icons/favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `icon-192.png`, and `icon-512.png` as PNG or ICO files with alpha and no background.
- `src/app/apple-icon.png` and `public/icons/maskable-512.png` with an opaque `#000000` background and the sun inside the maskable safe zone (the central 80 %).
- A `CHANGELOG.md` entry.

## Subtasks

- [ ] Generate every `any` icon from the owner's transparent source.
- [ ] Generate `apple-icon.png` (180 px) and `maskable-512.png` on a `#000000` background, with the sun inside the central 80 %.
- [ ] Replace `public/brand/kaizen-solar.png` if the owner's source is sharper at 256 px.
- [ ] Keep `purpose: "any"` for `icon-192.png` and `icon-512.png` and `purpose: "maskable"` for `maskable-512.png`.
- [ ] Record the change in `CHANGELOG.md`.

## Validation

- A script or `file` inspection reports an alpha channel for every `any` icon and none for `apple-icon.png` and `maskable-512.png`.
- In Chrome and Safari, with a light and a dark tab bar, the tab shows the sun without a square.
- `maskable-512.png` passes the preview at <https://maskable.app> with the circle mask, with no part of the sun cut.
- `pnpm lint`, `pnpm typecheck`, and `pnpm test` pass.

## Acceptance criteria

- [ ] The browser tab shows the sun without a black square on a light tab bar.
- [ ] Every icon with `purpose: "any"` and `src/app/icon.png` has transparent corners.
- [ ] `src/app/apple-icon.png` and `public/icons/maskable-512.png` have no transparent pixels.
- [ ] The sun in `maskable-512.png` fits in the central 80 % of the image.

## Out of scope

- The install hint, which is KZ-E13-T02.
- Changing the sun design.

## Result

Not started.
