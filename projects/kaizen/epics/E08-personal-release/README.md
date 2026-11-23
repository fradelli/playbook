# KZ-E08 — Personal release

## Expected outcome
Application validated locally, in preview, and in production, with accepted public exposure, a fixed workspace, minimal observability, and rollback.

## Order
| Task    | Depends on       | Outcome                                                          |
| ------- | ---------------- | ------------------------------------------------------------------ |
| KZ-E08-T01 | KZ-E06-T05, KZ-E07-T05 | Preview published                                                  |
| KZ-E08-T02 | KZ-E08-T01          | Public exposure and integrity boundaries validated in preview |
| KZ-E08-T03 | KZ-E08-T02, KZ-E05-T05 | Production prepared                                                 |
| KZ-E08-T04 | KZ-E08-T03          | Operations and rollback validated                                      |
| KZ-E08-T05 | KZ-E08-T04          | Personal MVP released                                                 |

## Out of scope
- Public sign-up and multiple users.
- Additional environments without proven need.

## Closing criteria
- [ ] Local, preview, and production use documented configurations.
- [ ] Secrets are not versioned.
- [ ] Access and rollback were tested.
