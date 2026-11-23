---
id: KZ-E03-T04
epic: KZ-E03
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E03-T02, KZ-E03-T03]
---

# Definir arquitetura

## Objective
Definir uma aplicação Next.js full-stack proporcional, com regras portáveis e sem backend separado.

## Inputs
- P0, transição de dados e operação aprovados.
- Auditorias do projeto legado como referência, não autoridade.

## Deliverables
- `docs/architecture/TARGET-ARCHITECTURE.md`
- Registro da escolha de banco e ORM.

## Subtasks
- [x] Definir boundaries de UI, aplicação, domínio e dados.
- [x] Definir Server/Client Components e mutações futuras.
- [x] Escolher banco e ORM por requisitos confirmados.
- [x] Definir testes, migrations e segurança.

## Validation
- Não há NestJS, OpenAPI ou client HTTP interno sem consumidor real.
- Cada camada resolve um problema observado.

## Acceptance criteria
- [x] A arquitetura permite implementar o P0 em incrementos pequenos.

## Result
Arquitetura Next.js full-stack no runtime Node definida em `docs/architecture/TARGET-ARCHITECTURE.md`, com boundaries por feature, PostgreSQL/Neon, Prisma ORM 7 estável, importação idempotente, modelo conceitual, segurança, migrations e testes. A escolha de banco e ORM foi registrada separadamente em `docs/decisions/DATABASE-AND-ORM.md`.
