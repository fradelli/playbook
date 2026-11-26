# KZ-E13 — Installable web app

## Expected outcome

Kaizen shows its sun without a background in the browser and invites mobile users to add it to the home screen, where it opens straight to the app.

## Scope

- Browser and home screen icons.
- The web app manifest and the Apple metadata.
- A dismissible install hint on phones.

## Out of scope

- Offline use, caching, and push notifications.
- Publishing to the App Store or Google Play.

## Order

| Task | Depends on | Outcome |
| --- | --- | --- |
| [KZ-E13-T01](T01-remove-icon-background.md) | Owner sends the Kaizen icon files with a transparent background | The browser icon has no background; home screen icons stay opaque |
| [KZ-E13-T02](T02-show-install-hint-on-mobile.md) | KZ-E13-T01 | Phones show a hint to add Kaizen to the home screen |

Status lives only in the project `README.md`.

## Closing criteria

- [ ] Every task is `DONE`.
- [ ] Kaizen opened from the home screen of an Android phone and an iPhone runs without the browser bar.
