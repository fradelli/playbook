# PB-E02 — Shared standards

## Expected outcome

`standards/` holds the architecture, organization, code, documentation, and delivery rules shared by every project, grouped into general rules and stack profiles.

## Context

Kaizen holds the most recent rules (design, architecture, documentation, pull requests), and Suna should adopt them when it resumes. Kaizen is a full-stack Next.js monorepo with Server Actions and no separate backend; Suna has a Next.js frontend and a separate NestJS API with a generated client. The common principles are shared; stack-specific rules live in profiles.

## Scope

- Inventory of Kaizen rules.
- Stack profiles.
- Migration of the general rules.

## Out of scope

- Product business rules, which stay in each product repository.
- Rewriting project code to follow the standards; those are project tasks.

## Order

| Task | Depends on | Outcome |
| --- | --- | --- |
| PB-E02-T01 | PB-E00-T01 | Each Kaizen rule classified as general, profile, or Kaizen-only |
| PB-E02-T02 | PB-E02-T01 | `standards/profiles/` describes each stack |
| PB-E02-T03 | PB-E02-T02 | `standards/general/`, `frontend/`, and `backend/` hold the shared rules |

Status lives only in the project `README.md`.

## Closing criteria

- [ ] Every required task is `DONE`.
- [ ] Each project declares its stack profile.
- [ ] The next eligible epic is identified.
