---
id: KZ-E00-T04
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T03]
---

# Create roadmap system

## Objective
Let humans and Codex find the status, the active task, and the details without loading the whole project.

## Inputs
- Conventions from `AGENTS.md`.
- Approved epics and tasks.

## Deliverables
- `roadmap/README.md`
- `roadmap/ACTIVE.md`
- `roadmap/templates/EPIC-TEMPLATE.md`
- `roadmap/templates/TASK-TEMPLATE.md`
- Folders and files for epics KZ-E00–KZ-E09.

## Subtasks
- [x] Consolidate all statuses in the parent file.
- [x] Create an active-task pointer.
- [x] Keep subtasks inside the task.
- [x] Define dependencies and acceptance criteria.

## Validation
- All IDs are unique.
- Every index link resolves to an existing file.
- There is at most one `IN_PROGRESS` task.

## Acceptance criteria
- [x] Global progress is visible without opening individual tasks.
- [x] The minimal reading is documented.

## Result
Completed on 2026-08-30. The canonical status is in `roadmap/README.md`.
