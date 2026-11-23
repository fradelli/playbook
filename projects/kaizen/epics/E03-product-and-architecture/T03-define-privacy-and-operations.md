---
id: KZ-E03-T03
epic: KZ-E03
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E03-T01]
---

# Define privacy and operations

## Objective
Decide access, hosting, environments, secrets, backup, restore, and acceptable data loss.

## Inputs
- P0 journey.
- Branches and environments decision.

## Deliverables
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`

## Subtasks
- [x] Define production protection.
- [x] Define candidate Vercel and database provider.
- [x] Define environments and sensitive variables.
- [x] Define backup, retention, and restore testing.

## Validation
- Personal data is not accessible without an explicit decision.

## Acceptance criteria
- [x] KZ-E08 has verifiable operational requirements.

## Result
Defined publication at a public Vercel URL without sign-up, with public canonical content separated from private operational data. Pairing by edit key, secure cookie, server-side authorization, isolated environments, Neon PostgreSQL, secrets, a 24-hour RPO, a 4-hour RTO, encrypted external backup, restore, and evolution to accounts were documented in `docs/decisions/PRIVACY-AND-OPERATIONS.md`.
