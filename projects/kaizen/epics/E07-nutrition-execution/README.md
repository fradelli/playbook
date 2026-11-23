# KZ-E07 — Nutrition execution

## Expected outcome
The day's meal plan can be viewed, with choice, adherence, alternative, and comment recordable in the fixed workspace.

## Order
| Task    | Depends on | Outcome                                           |
| ------- | ---------- | ------------------------------------------------- |
| KZ-E07-T01 | KZ-E05-T05    | Projection of the fixed workspace plan and execution |
| KZ-E07-T02 | KZ-E04-T04, KZ-E07-T01 | Diet page for the day                            |
| KZ-E07-T03 | KZ-E07-T02    | Choices, adherence, and comments               |
| KZ-E07-T04 | KZ-E07-T03    | Safety and provenance                           |
| KZ-E07-T05 | KZ-E07-T04    | Validated flow                                    |

## Out of scope
- Automatic prescription or nutritional diagnosis.
- Automatic calculation of intake, calories, or macronutrients.
- Editing the canonical plan through the interface.

## Closing criteria
- [ ] The active plan is readable and traceable.
- [ ] The user records plan followed, different meal, or skipped meal.
- [ ] Unknowns and caveats remain explicit.
