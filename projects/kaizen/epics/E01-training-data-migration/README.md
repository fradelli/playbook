# KZ-E01 — Training data migration

## Expected outcome
Training rules, plans, library, schedule, originals, reviews, and documentation migrated with provenance and integrity, still without code.

## Out of scope
- Nutrition.
- Application, database, and scripts.
- Import of the entire Git history.

## Order
| Task | Depends on | Outcome |
| --- | --- | --- |
| KZ-E01-T01 | KZ-E00-T05 | Immutable snapshot of the source |
| KZ-E01-T02 | KZ-E01-T01 | Canonical data and active plan migrated |
| KZ-E01-T03 | KZ-E01-T02 | History and previous versions preserved |
| KZ-E01-T04 | KZ-E01-T03 | Useful documentation transformed |
| KZ-E01-T05 | KZ-E01-T04 | Schemas migrated |
| KZ-E01-T06 | KZ-E01-T05 | Foundation validated and tagged |

## Closing criteria
- [x] All IDs and pointers are valid; the private schedule is confirmed without exposing values in the sanitized destination.
- [x] Literal originals keep their hash.
- [x] There are no old paths or outdated architecture as a current decision.
- [x] Tag `training-foundation-v1` created.
