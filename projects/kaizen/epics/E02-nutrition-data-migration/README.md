# KZ-E02 — Nutrition data migration

## Expected outcome
Original diet preserved, review documented, and the current nutrition plan structured, versioned, and validated, still without an application.

## Out of scope
- Diagnosis, medication, or replacement of professional follow-up.
- Code, database, or UI.
- Dynamic diet and a full calorie counter.

## Order
| Task | Depends on | Outcome |
| --- | --- | --- |
| KZ-E02-T01 | KZ-E01-T06 | Inventory and unknowns |
| KZ-E02-T02 | KZ-E02-T01, Diet provided | Original preserved |
| KZ-E02-T03 | KZ-E02-T02 | Safe review |
| KZ-E02-T04 | KZ-E02-T03, Decisions approved | Structured plan |
| KZ-E02-T05 | KZ-E02-T04 | Contracts and guide |
| KZ-E02-T06 | KZ-E02-T05 | Foundation validated |

## Closing criteria
- [x] The current plan has provenance, version, and status.
- [x] Facts, estimates, and professional decisions are separated.
- [x] Tag `nutrition-foundation-v1` created after the merge of KZ-E02-T06.
