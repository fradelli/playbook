# KZ-E06 — Training execution

## Expected outcome
The day's workout, preparation, mobility, or rest can be viewed and recorded in the fixed workspace, preserving plan and history.

## Order
| Task    | Depends on | Outcome                                                  |
| ------- | ---------- | -------------------------------------------------------- |
| KZ-E06-T01 | KZ-E05-T05    | Plan and execution projection of the fixed workspace     |
| KZ-E06-T02 | KZ-E04-T04, KZ-E06-T01 | Daily workout page                              |
| KZ-E06-T03 | KZ-E06-T02    | Preparation, sets, and comments                          |
| KZ-E06-T04 | KZ-E06-T03    | Provenance and history                                   |
| KZ-E06-T05 | KZ-E06-T04    | Validated flow                                           |
| KZ-E06-T06 | KZ-E06-T03    | Target load per exercise or per set                      |
| KZ-E06-T07 | KZ-E06-T03    | Last execution per set as a reference                    |
| KZ-E06-T08 | KZ-E06-T03    | Progress conditioned on applicable measures              |
| KZ-E06-T09 | KZ-E06-T03    | Rest timer UX approved                                   |
| KZ-E06-T10 | KZ-E06-T09    | Non-modal rest timer                                     |
| KZ-E06-T11 | KZ-E06-T03    | Daily plan lifecycle decided                             |
| KZ-E06-T12 | KZ-E06-T11    | Daily editing refined according to gaps                  |
| KZ-E06-T13 | KZ-E06-T11    | Future reconciled after a plan change                    |
| KZ-E06-T14 | KZ-E04-T04    | Bottom primary navigation on mobile                      |
| KZ-E06-T15 | KZ-E06-T11    | Weekly schedule without a fixed sport                    |
| KZ-E06-T16 | KZ-E06-T15    | New plan and warm-ups validated                          |
| KZ-E06-T17 | KZ-E06-T11    | Controlled and recoverable operational reset             |
| KZ-E06-T18 | KZ-E06-T16    | Guided execution of the combined blocks                  |
| KZ-E06-T19 | KZ-E06-T12    | Planned end calculated from the session duration         |
| KZ-E06-T20 | KZ-E06-T12    | Canceled; Specific workout remains available             |
| KZ-E06-T21 | KZ-E06-T16    | External import contract designed                        |
| KZ-E06-T22 | KZ-E06-T12    | Editable future schedule without early execution         |
| KZ-E06-T23 | KZ-E06-T12    | Retrospective recording of external activities under review |

| KZ-E06-T24 | KZ-E06-T12, KZ-E06-T19 | Selectable warm-up and safe rescheduling |
| KZ-E06-T25 | KZ-E06-T24 | Add and edit modals with local drafts |

Tasks KZ-E06-T06 to KZ-E06-T22 are a complementary round. None starts
automatically or expands the KZ-E06-T05 gate without new prioritization. When
selecting any of them, reanalyze the already integrated base, present a solution
and plan, and wait for approval before implementing.

## Priority to start using the new schedule

On 27/10/2026, the user prioritized KZ-E06-T24 to fix warm-up inclusion and
rescheduling before Diet. KZ-E06-T20 remains canceled.

The short list prioritized on 26/10/2026 is closed: KZ-E06-T19 is done and
KZ-E06-T20 was canceled by the user. There is no third small fix explicitly
prioritized in that list.

The next immediate pending item already recorded is the retrospective manual
validation of KZ-E06-T23. KZ-E06-T14 still depends on a real device. KZ-E06-T04 and KZ-E06-T05
remain necessary to close the epic; combined blocks and progression
were not automatically promoted to priority.

1. KZ-E06-T11 decides the day's rules before expanding the schedule.
2. After the user reviews the roadmap changes, KZ-E06-T17 only resets
   data after the environment, scope, backup, and specific authorization are chosen.
   The authorized local reset was completed with a restorable backup.
3. KZ-E06-T15 generalizes the week; after receiving the new workout, KZ-E06-T16 imports it,
   and reserve sessions stay out of the current version until specific approval.
4. KZ-E06-T06 and KZ-E06-T08 can be evaluated together; KZ-E06-T07 comes before
   comparing later executions. KZ-E06-T09 precedes KZ-E06-T10. KZ-E06-T14 can be
   delivered separately. KZ-E06-T12 depends on the gaps identified in T11.
5. KZ-E06-T13 can be reevaluated if the controlled reset removes the immediate need
   to reconcile old future activities; it is not canceled.
6. KZ-E06-T21 starts after the manual import of the new schedule is validated. It first
   stabilizes the JSON contract and the preview; Excel reuses that contract in a
   later step, without creating another persistence path.

The new plan contains combined blocks: KZ-E06-T16 preserves their structure and shows
A/B subtitles with manual navigation. The guided flow remains deferred in KZ-E06-T18,
with a new review before implementing. KZ-E06-T04 and KZ-E06-T05 remain necessary to close the epic.

## Out of scope
- Free editing of canonical plans by the app before KZ-E06-T21.
- Automatic recommendation based on pain, fatigue, or diagnosis.

## Closing criteria
- [ ] The user finds the correct workout for the day.
- [ ] Load appears only when applicable and sets can be saved partially.
- [ ] Mobility and rest do not create artificial exercises.
- [ ] Missing data is presented without inference.
- [ ] Plan origin and version are traceable.

## Registered complementary tasks

Canonical status in the [roadmap](../../README.md). This table completes the navigation without changing priority or dependencies.

| Task | Depends on | Outcome |
| --- | --- | --- |
| [KZ-E06-T26](T26-set-execution.md) | KZ-E06-T03, KZ-E09-T09 | Independent set execution and history |
