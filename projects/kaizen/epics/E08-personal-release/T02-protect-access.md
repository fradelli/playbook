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

- `docs/plans/release/E08.md`: epic plan.
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`: privacy and operations decision.
- `docs/decisions/PUBLIC-SINGLE-WORKSPACE-MODE.md`: accepted exposure.
- `src/lib/security/workspace.ts`: fixed workspace resolution.
- `next.config.ts`: headers and configuration.
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

- [ ] A mutation sent with another `workspace_id` changes only the fixed workspace.
- [ ] Responses from the preview URL carry private-cache, noindex, and security headers.
- [ ] No response, log, or error from the preview exposes credentials, `DO_NOT_PUBLISH` sources, or data from other environments.
- [ ] No page or document states that the app has authentication.

## Result

Not started.
