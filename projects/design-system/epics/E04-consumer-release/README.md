# DS-E04 — Consumer release

## Expected outcome

Every consumer installs a published version: first a corrective release, then the consolidated Mira release.

## Scope

- Corrective release that lets Kaizen replace its local tarball.
- Consolidated release and migration guide.
- Hand-off to Kaizen and Suna.

## Out of scope

- Editing consumer repositories; their work is registered in their own roadmaps.

## Order

| Task                                            | Depends on                                                                                                                 | Outcome                        |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [DS-E04-T01](T01-publish-consolidated-release.md)  | DS-E01-T01, DS-E02-T02, DS-E02-T03, DS-E03-T03, DS-E03-T04, DS-E03-T05, DS-E03-T07, DS-E03-T08, DS-E03-T09, DS-E03-T10, Maintainer merges the version PR | Consolidated version published |
| [DS-E04-T02](T02-hand-off-release-to-consumers.md) | DS-E04-T01                                                                                                                    | Consumers have migration tasks |
| [DS-E04-T03](T03-publish-corrective-release.md) | DS-E01-T01, DS-E02-T01, DS-E02-T02, Maintainer merges the version PR | Corrective version published before the consolidated one |

Status lives only in the project `README.md`.

## Closing criteria

- [ ] Every required task is `DONE`.
- [ ] Validation and decisions are recorded.
- [ ] No consumer depends on a local tarball of this package.
