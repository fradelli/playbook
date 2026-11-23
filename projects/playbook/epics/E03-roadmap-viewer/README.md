# PB-E03 — Roadmap viewer

## Expected outcome

The interactive roadmap viewer built in Kaizen (`KZ-E00-T10` and `KZ-E00-T11`) reads every project from this repository and shows the standards in its documents tab.

## Scope

- Move the generator and the page from Kaizen.
- Read `projects/*` and `standards/`.

## Out of scope

- Changing status from the page.
- Publishing the page.

## Order

| Task | Depends on | Outcome |
| --- | --- | --- |
| PB-E03-T01 | PB-E01-T01, PB-E01-T02 | `npm run roadmap:view` builds the viewer for every project |

Status lives only in the project `README.md`.

## Closing criteria

- [ ] Every required task is `DONE`.
- [ ] Kaizen no longer carries the viewer.
- [ ] The next eligible epic is identified.
