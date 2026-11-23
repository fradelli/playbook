# KZ-E09 — Future evolution

## Expected outcome
Post-MVP backlog kept separate from the current critical path.

## Anticipation approved on 29/10/2026

The user authorized anticipating [KZ-E09-T09](T09-localize-current-interface.md), limited to the current interface in Portuguese and English with automatic detection. The new catalog will be integrated separately. Spanish and the broad English-first policy remain in the backlog. This authorization overrides the time restriction below only for KZ-E09-T09.

## Creation rule

Tasks remain `PLANNED` until the personal MVP is validated. Before a
task becomes `READY`, its planning must confirm the problem, required data,
privacy, contracts, risks, exact inputs, and success criterion.

## Approved sequence

| Task    | Depends on                  | Outcome                                                       |
| ------- | --------------------------- | ------------------------------------------------------------- |
| KZ-E09-T01 | KZ-E08-T05                     | Scope for sleep and general activities designed               |
| KZ-E09-T02 | KZ-E09-T01                     | Usable sleep tracking                                         |
| KZ-E09-T03 | KZ-E09-T01                     | Usable general activity logging                               |
| KZ-E09-T04 | KZ-E09-T02, KZ-E09-T03            | Sleep and activity journeys validated                         |
| KZ-E09-T05 | KZ-E06-T05, KZ-E07-T05, KZ-E09-T04   | i18n architecture and English-first policy approved            |
| KZ-E09-T06 | KZ-E09-T05                     | Product and canonical content internationalized               |
| KZ-E09-T07 | KZ-E09-T05                     | Documentation and delivery flow migrated to English           |
| KZ-E09-T08 | KZ-E09-T06, KZ-E09-T07            | Multilingual experience and fallback validated                |
| [KZ-E09-T09](T09-localize-current-interface.md) | — | Current interface internationalized in Portuguese and English (anticipated) |

Sleep and general activities come before i18n so that the four product
journeys (workouts, nutrition, sleep, and activities) share the same localization
contract from the migration, without creating an immediate second round.

## Candidates with no scope commitment yet

- Metrics, trends, and interactive history.
- Routine, habits, tasks, composite schedule, notifications, and integrations; domain and calendar remain in Kaizen.
- Assisted editing, administration, and multiple users.

## Out of scope for now

Initial i18n languages confirmed on 26/09: Portuguese, Spanish, and English.
The broad architecture and implementation remain future work; the current interface was anticipated by KZ-E09-T09.

- Implement any task before KZ-E08 is closed.
- Start i18n before workouts, nutrition, sleep, and general activities are validated.
- Rewrite Git history, applied migrations, or stable IDs during translation.

## Entry criteria

- [ ] Personal MVP validated in real use.
- [ ] Next problem prioritized with evidence.
- [ ] Impact on privacy and the data model reviewed.
