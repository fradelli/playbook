---
id: KZ-E06-T21
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T16]
---

# Design the external import of training plans

## Objective

Define a safe boundary for receiving a final approved plan as JSON from the frontend, ready to extend to an Excel template later, without exposing the Git snapshot, internal UUIDs, or nutrition dependencies to the client.

## Inputs

- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/plans/training/E06-T21-external-training-plan-import.md` — the existing plan for this import.
- `schemas/training-plan.schema.json`
- `schemas/training-execution-metadata.schema.json`
- `src/features/plan-definition-import/domain/plan-definition-source.types.ts`
- `src/features/plan-definition-import/application/import-versioned-plan-definitions.ts`
- `src/features/plan-definition-import/data/persist-plan-definition-snapshot.ts`
- `src/features/plan-definition-import/data/persist-training-plan-definition.ts`
- `src/features/plan-definition-import/data/activate-selected-plan-definitions.ts`
- `prisma/models/platform.prisma`
- `prisma/models/training.prisma`
- `tests/integration/import-versioned-plan-definitions.test.ts`

## Deliverables

- A closed, versioned intermediate contract (`PlanCandidate`) for a candidate plan, without technical UUIDs and with structured doses.
- A documented ownership decision between the existing Git importer and the new external entry point, so there are not two competing persistence rules.
- A separate flow for validation, preview, import, and explicit activation.
- An error contract by field, session, and exercise, usable by the frontend and the future Excel adapter.
- An idempotency and provenance plan for uploads without a Git `sourcePath`.
- An exact inventory of the files and migrations needed for JSON; Excel reuses the same contract and gets no persistence of its own.
- The implementation split into tasks after the decisions are approved.

## Subtasks

- [ ] Draft the `PlanCandidate` contract and its versioning strategy, and get approval.
- [ ] Define the idempotent identity and the provenance of an uploaded file.
- [ ] Decide whether creation and activation share one journey, keeping separate confirmations.
- [ ] Decide how the prescribed load is represented, together with KZ-E06-T06.
- [ ] Confirm whether Excel follows after JSON is stable in production.
- [ ] Write the remaining deliverables and register the implementation tasks.

## Validation

- The owner approved the contract, the decisions above, and the task split, recorded in `Result` with the date.
- Each deliverable names its test cases for history, atomicity, idempotency, and rollback.

## Acceptance criteria

- [ ] The external contract does not reference nutrition pointers or plans.
- [ ] JSON and Excel share one intermediate representation and one persistence rule.
- [ ] The preview writes nothing, and activation requires an explicit confirmation.
- [ ] The design never accepts technical IDs or `workspace_id` from the client as ownership, and defines history, atomicity, idempotency, and rollback with planned test cases.
- [ ] The implementation is split into small, ordered tasks approved by the owner.

## Out of scope

- Implementing upload, endpoint, Server Action, components, Excel parser, or migration during design.
- Accepting arbitrary spreadsheets by heuristic or AI without a versioned template.
- Inventing a missing exercise, dose, load, unit, or schedule.
- Removing the Git importer or changing existing data and activations.

## Result

Not started.
