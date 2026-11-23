---
id: KZ-E03-T02
epic: KZ-E03
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E03-T01]
---

# Definir transição da fonte de verdade

## Objective
Evitar duas fontes editáveis ao introduzir banco de dados.

## Inputs
- Dados versionados e jornadas do P0.

## Deliverables
- `docs/decisions/DATA-SOURCE-TRANSITION.md`

## Subtasks
- [x] Definir arquivos como origem da importação inicial.
- [x] Definir quando o banco vira fonte operacional.
- [x] Definir exportação, backup e proveniência.
- [x] Definir política de reimportação e conflito.

## Validation
- Para cada fase existe uma única fonte editável.

## Acceptance criteria
- [x] Leitura, escrita futura e rollback têm ownership inequívoco.

## Result
Decidido que Git/JSON permanece a única fonte editável das definições no MVP, enquanto o banco é a fonte exclusiva de atribuições e execuções. Importação unidirecional, imutável e idempotente, conflitos, proveniência, exportação, backup, cutover futuro e rollback foram especificados em `docs/decisions/DATA-SOURCE-TRANSITION.md`.
