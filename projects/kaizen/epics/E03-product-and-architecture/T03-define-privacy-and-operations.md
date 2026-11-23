---
id: KZ-E03-T03
epic: KZ-E03
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E03-T01]
---

# Definir privacidade e operação

## Objective
Decidir acesso, hospedagem, ambientes, segredos, backup, restore e perda aceitável de dados.

## Inputs
- Jornada do P0.
- Decisão de branches e ambientes.

## Deliverables
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`

## Subtasks
- [x] Definir proteção da produção.
- [x] Definir Vercel e provedor de banco candidatos.
- [x] Definir ambientes e variáveis sensíveis.
- [x] Definir backup, retenção e teste de restore.

## Validation
- Dados pessoais não ficam acessíveis sem decisão explícita.

## Acceptance criteria
- [x] KZ-E08 possui requisitos operacionais verificáveis.

## Result
Definida publicação em URL pública da Vercel sem cadastro, com conteúdo canônico público separado dos dados operacionais privados. Pareamento por chave de edição, cookie seguro, autorização server-side, ambientes isolados, Neon PostgreSQL, segredos, RPO de 24 horas, RTO de 4 horas, backup externo cifrado, restore e evolução para contas foram documentados em `docs/decisions/PRIVACY-AND-OPERATIONS.md`.
