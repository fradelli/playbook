---
id: KZ-E03-T04
epic: KZ-E03
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E03-T02, KZ-E03-T03]
---

# Define architecture

## Objective
Define a proportional full-stack Next.js application, with portable rules and no separate backend.

## Inputs
- P0, data transition, and operations approved.
- Audits of the legacy project as reference, not authority.

## Deliverables
- `docs/architecture/TARGET-ARCHITECTURE.md`
- Record of the database and ORM choice.

## Subtasks
- [x] Define UI, application, domain, and data boundaries.
- [x] Define Server/Client Components and future mutations.
- [x] Choose database and ORM based on confirmed requirements.
- [x] Define tests, migrations, and security.

## Validation
- There is no NestJS, OpenAPI, or internal HTTP client without a real consumer.
- Each layer solves an observed problem.

## Acceptance criteria
- [x] The architecture allows implementing P0 in small increments.

## Result
Full-stack Next.js architecture on the Node runtime defined in `docs/architecture/TARGET-ARCHITECTURE.md`, with boundaries by feature, PostgreSQL/Neon, stable Prisma ORM 7, idempotent import, conceptual model, security, migrations, and tests. The database and ORM choice was recorded separately in `docs/decisions/DATABASE-AND-ORM.md`.
