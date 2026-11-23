---
id: KZ-E06-T21
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T16]
---

# Design the external import of training plans

## Objective
Define the safe boundary for receiving a final approved plan as JSON sent
by the frontend and prepare the later extension to an Excel template, without exposing
to the client the Git snapshot, internal UUIDs, or dependencies on the nutrition domain.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/plans/training/E06-T21-external-training-plan-import.md`
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
- Closed, versioned intermediate contract for a candidate plan, without technical
  UUIDs and with structured doses.
- Documented ownership decision between the existing Git importer and the new
  external entry point, avoiding two competing persistence rules.
- Separate flow for validation, preview, import, and explicit activation.
- Error contract by field, session, and exercise, suitable for the frontend and the
  future Excel adapter.
- Idempotency and provenance plan for uploads without a Git `sourcePath`.
- Exact inventory of the files and migrations needed to implement JSON;
  Excel reuses the same contract and gets no persistence of its own.
- Split of the implementation tasks after the decisions are approved.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Out of scope

- Implementing upload, endpoint, Server Action, components, Excel parser, or
  migration during the design stage.
- Accepting arbitrary spreadsheets by heuristic or AI without a versioned template.
- Inventing a missing exercise, dose, load, unit, or schedule.
- Removing the Git importer or changing existing data and activations.

## Decisions before implementation

- Approve the `PlanCandidate` contract and its versioning strategy.
- Define the idempotent identity and the provenance of an uploaded file.
- Decide whether creation and activation will be in the same journey, keeping
  separate confirmations.
- Decide the representation of the prescribed load in coordination with KZ-E06-T06.
- Confirm whether Excel will be implemented after JSON stabilizes in production.

## Acceptance criteria
- [ ] The external contract does not depend on the nutrition pointers or plans.
- [ ] JSON and Excel have a single intermediate representation and a single
      persistence rule.
- [ ] The preview is provably write-free and activation requires confirmation.
- [ ] Technical IDs and `workspace_id` are never accepted from the client as ownership.
- [ ] History, atomicity, idempotency, and rollback have defined behavior
      and planned test cases.
- [ ] The implementation was split into small, ordered, approved tasks.

## Result
Not started yet.
