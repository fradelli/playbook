---
id: KZ-E13-T02
epic: KZ-E13
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E13-T01]
---

# Show an install hint on mobile

## Objective

Show phone users a small hint in a corner of the screen that adds Kaizen to the home screen, so a tap on the icon opens the app without the browser bar.

## Context

- `src/app/manifest.webmanifest` already has `name`, `start_url: "/"`, `display: "standalone"`, and 192, 512, and maskable 512 icons. Kaizen has no service worker.
- Android Chrome fires `beforeinstallprompt` when the site is installable; calling `prompt()` on that event opens the native install dialog.
- iOS Safari has no install event and no install API. The user adds the site with Share, then "Add to Home Screen"; the page can only explain these steps.
- Unknown: whether Chrome on Android fires `beforeinstallprompt` for Kaizen without a service worker. The task checks it on a real device before adding one.

## Expected behavior

- On a phone, after the first page load, a card appears in the bottom corner, above the safe area: the sun icon, "Baixar o app" / "Get the app", and a close button.
- Android Chrome: the card has an "Instalar" / "Install" button that opens the native dialog. After the user accepts, the card disappears.
- iOS Safari: the card shows the two steps, Share, then "Adicionar à Tela de Início" / "Add to Home Screen", with the Share icon.
- Other mobile browsers with no install event: no card.
- The card never shows on desktop, inside the installed app (`display-mode: standalone` or `navigator.standalone`), or for 30 days after the user closes it.
- The card does not cover the bottom navigation or the action buttons of open dialogs.

## Decisions

- 2026-11-24, maintainer, proposal to confirm when the task starts: a closed card stays hidden for 30 days, stored in `localStorage`.

## Inputs

- `src/app/manifest.webmanifest` — installability fields.
- `src/app/layout.tsx` — `viewport` and `generateMetadata`, where `themeColor` and `appleWebApp` are added.
- `src/components/shared/app-shell/app-shell.tsx` — where the card is mounted.
- `en.json` and `pt-BR.json` — message catalogs for the card copy.
- `src/app/apple-icon.png` and `public/icons/maskable-512.png` from KZ-E13-T01 — the icons the home screen shows.

## Deliverables

- An install hint component with its CSS module and tests under `src/components/shared/app-shell/components/`.
- `src/app/manifest.webmanifest` with `id`, `scope`, and `description`.
- `src/app/layout.tsx` with `themeColor` in `viewport` and `appleWebApp` (`capable`, `title`, `statusBarStyle`) in the metadata.
- Copy in `en.json` and `pt-BR.json`.
- A minimal service worker with no caching, only if the device check shows that Chrome needs it.
- A `CHANGELOG.md` entry.

## Subtasks

- [ ] Check on an Android phone, with Chrome DevTools remote debugging, whether `beforeinstallprompt` fires on the deployed site without a service worker.
- [ ] Add `id`, `scope`, and `description` to the manifest, and `themeColor` and `appleWebApp` to the layout.
- [ ] Build the card: capture and defer `beforeinstallprompt`, detect iOS Safari, and hide it on desktop, in standalone mode, and after a dismissal.
- [ ] Add the Portuguese and English copy.
- [ ] Cover each platform branch and the dismissal with unit tests.
- [ ] Add the minimal service worker only if the first subtask showed it is needed.
- [ ] Record the change in `CHANGELOG.md`.

## Validation

- `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm i18n:check` pass.
- Chrome DevTools, Application > Manifest, on the deployed site: no installability error.
- Android Chrome on a real phone: the card shows, "Install" opens the native dialog, and the installed icon opens Kaizen without the browser bar.
- Safari on a real iPhone: the card shows the Share steps, and the icon added to the home screen opens Kaizen without the browser bar.
- Desktop Chrome at 1280 px and the installed app: no card.
- At 390 and 320 px the card covers neither the bottom navigation nor the dialog actions.

## Acceptance criteria

- [ ] Android Chrome shows the card, and its button opens the native install dialog.
- [ ] Safari on an iPhone shows the card with the Share and "Add to Home Screen" steps.
- [ ] Kaizen opened from the home screen icon shows no browser bar and no card.
- [ ] After the user closes the card, it does not show again on the next visit.
- [ ] Desktop browsers never show the card.

## Out of scope

- Offline pages, caching, and push notifications.
- Publishing to the App Store or Google Play.

## Risks

- Install hints can annoy users: the card shows only once per 30 days and closes with one tap.
- The install flow needs HTTPS: test it on the deployed site, not on `localhost` over the network.

## Result

Not started.
