---
id: KZ-E05-T06
epic: KZ-E05
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E05-T05]
---

# Implement personal access

## Status

Canceled on 2026-09-15 by explicit decision of the owner. P0 will be used
temporarily at a public URL, without authentication, with the risk of third-party reading and
modification accepted. Authentication becomes mandatory again before
multiple users or sensitive data.

## Objective
Create session, authorization, and pairing before any operational read or mutation of workouts and nutrition.

## Inputs
- `docs/operations/E05.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`
- `docs/decisions/PUBLIC-SINGLE-WORKSPACE-MODE.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `src/lib/security/workspace.ts`
- `prisma/schema.prisma`

## Deliverables
- Server-only authenticated session.
- Pairing by a high-entropy key.
- Reusable authorization and workspace resolution.
- Origin validation and attempt limiting.
- Tests for success, absence, expiration, rotation, and fraud.

## Subtasks
- [ ] Implement a secure cookie and signed session.
- [ ] Derive actor and workspace exclusively on the server.
- [ ] Implement pairing without recording the key or its hash.
- [ ] Validate origin on mutations and limit attempts.
- [ ] Prevent the client from importing the server-only boundaries.

## Validation
- Test missing, invalid, expired, and rotated sessions.
- Test invalid origin and a client-supplied `workspace_id`.
- Confirm no secret, cookie, or payload in logs.

## Acceptance criteria
- [ ] KZ-E06 and KZ-E07 receive a tested authorization API and do not need to create ad hoc security.
- [ ] Public content remains accessible without exposing operational data.

## Result
Canceled. No session, pairing key, cookie, or activation screen was
implemented. The existing fixed server-only resolver remains as a boundary
replaceable by session and membership in the future.
