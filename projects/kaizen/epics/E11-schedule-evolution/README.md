# KZ-E11 — Schedule evolution

## Expected outcome
A schedule operable by dragging and accessible alternatives, preserving identity, history, and cache. The foundation already integrated is validated, not recreated.

## Scope
Residual validation of the base, POC and integration of the first increment, editing of reservations, links between activities, and specification of the extensions that are still open. [Reconciliation and evidence](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md).

## Order
| Task | Depends on | Outcome |
| --- | --- | --- |
| [KZ-E11-T01](T01-validate-integrated-schedule.md) | — | Validate the integrated schedule base |
| [KZ-E11-T02](T02-prototype-calendar-interactions.md) | KZ-E11-T01 | Validate the selection and drag-and-drop POC |
| [KZ-E11-T03](T03-persist-calendar-interactions.md) | KZ-E11-T02 | Integrate the approved gestures with persistence |
| [KZ-E11-T04](T04-edit-individual-reservations.md) | KZ-E11-T03 | Move and resize an individual reservation |
| [KZ-E11-T05](T05-link-common-activities.md) | KZ-E11-T03 | Link and unlink common activities |
| [KZ-E11-T06](T06-define-calendar-extension-rules.md) | — | Define the schedule interaction extensions |
| [KZ-E11-T07](T07-plan-recurrence-and-time-records.md) | — | Detail recurrence and time records |
| [KZ-E11-T08](T08-define-overlap-presentation.md) | — | Define overlap presentation and the grouper |

The dependencies above are the initial planning sequence. Status exists only in [roadmap/README.md](../../README.md). T06–T08 are independent documentation refinements; they do not authorize implementation. KZ-E10-T09 remains the selected task. T03 requires approval of the POC results, in addition to the technical dependency.

## Out of scope
Reimplementing the delivered base, replacing the chosen library, implicitly modifying workout execution, building the project hub, or expanding authentication/workspaces.

## Closing criteria
- [ ] Implemented flows approved with evidence and accessible alternatives.
- [ ] Open decisions and limitations are explicit; specifications are not presented as delivered features.
- [ ] Later implementation stages receive their own tasks when approved.
