---
id: KZ-E00-T07
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E03-T05]
---

# Optimize context and clean up pre-MVP dependencies

## Objective
Reduce unnecessary reads by Codex and make the KZ-E04–KZ-E08 sequence executable without implicit dependencies.

## Inputs
- `AGENTS.md`
- `roadmap/README.md`
- `roadmap/ACTIVE.md`
- `docs/implementation/P0-IMPLEMENTATION-GUIDE.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`

## Deliverables
- Instructions segmented by tree.
- Modular implementation guide and tasks with exact inputs.
- Corrected order for authorization, local backup, and Neon.
- Names and checklists consistent with the operational P0.

## Subtasks
- [x] Shrink the root contract and create specialized instructions.
- [x] Split the implementation into small packages per task or epic.
- [x] Move session and authorization ahead of KZ-E06/E07.
- [x] Limit KZ-E05-T05 to the local restore and keep Neon in KZ-E08.
- [x] Normalize names, checklists, inputs, links, and indexes.

## Validation
- Measure the minimal reading route of KZ-E04-T01 before and after.
- Validate Markdown, JSON, schemas, IDs, dependencies, and states.
- Confirm there is no code, dependency, workflow, or secret.

## Acceptance criteria
- [x] KZ-E04-T01 is self-contained and can start without reading the whole guide.
- [x] No operational feature precedes its authorization.
- [x] No task requires Neon before it is configured.

## Result
Agent contract segmented, guide modularized, future tasks with exact inputs, and the security/infrastructure sequence corrected. The minimal reading route of KZ-E04-T01 dropped from 4,801 to 1,761 words, a reduction of about 63%. The cleanup remains documentation-only and keeps KZ-E04-T01 as the next code increment.
