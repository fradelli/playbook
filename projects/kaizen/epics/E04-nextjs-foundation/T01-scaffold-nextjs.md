---
id: KZ-E04-T01
epic: KZ-E04
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E03-T05, KZ-E00-T07]
---

# Create the Next.js application

## Objective
Create the approved scaffold without removing the documentation foundation.

## Inputs
## Deliverables
- Manifest, configuration, and Next.js structure defined in the guide.

## Subtasks
- [x] Pin versions and package manager.
- [x] Create App Router and TypeScript.
- [x] Preserve `data/`, `docs/`, `roadmap/`, and `schemas/`.
- [x] Record local commands.

## Validation
- Install, local run, and build pass.

## Acceptance criteria
- [x] The minimal page opens locally.
- [x] No feature was created ahead of time.

## Result
Next.js 16.3.4 scaffold created with Node.js 24.20.0, pnpm 11.25.0, React 19.2.8, and strict TypeScript. Install and build passed, and the minimal page returned HTTP 200 locally without anticipating features, database, or authentication.

## Documentation consolidation of 12/11/2026

The scaffold, generator commands, and original pins are historical; effective versions belong to the manifest/lockfile.

[Full original package](https://github.com/fradelli/nextjs-kaizen-app/blob/fd2269d2eaa7d55cfea724631f12fa6505d37b32/docs/implementation/tasks/E04-T01.md), SHA-256 `ec94f3e07dcc2f5cf8c8ee6bc7460e1b365eff8c3e551c58f2ad18f40b0271b7`. Commands, criteria, risks, and rollback record that baseline and are not a recipe for reinstalling the current application. Open items were not turned into approvals in this consolidation.
