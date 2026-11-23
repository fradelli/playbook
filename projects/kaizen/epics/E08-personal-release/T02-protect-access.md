---
id: KZ-E08-T02
epic: KZ-E08
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E08-T01]
---

# Validate public exposure

## Objective
Prove the public single-workspace mode in preview and harden the protections that do not depend on authentication.

## Inputs
- `docs/plans/release/E08.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`
- `docs/decisions/PUBLIC-SINGLE-WORKSPACE-MODE.md`
- `src/lib/security/workspace.ts`
- `next.config.ts`
- Preview environment published in KZ-E08-T01.

## Deliverables
- Accepted exposure validated over HTTPS and hardened configuration for production.

## Subtasks
- [ ] Confirm that public reads and mutations act only on the fixed workspace.
- [ ] Test that a client-supplied `workspace_id` does not change ownership.
- [ ] Verify private cache, indexing, headers, logs, and errors.
- [ ] Confirm origin, input, and revision validation in mutations.
- [ ] Confirm that credentials, `DO_NOT_PUBLISH` sources, and data from other environments are not exposed.

## Validation
- Run a public read and mutation smoke test against the preview URL and inspect the persisted workspace.

## Acceptance criteria
- [ ] The public behavior matches the accepted risk, without claiming authentication, and no client can select another workspace.

## Result
Not yet completed.
