---
id: KZ-E00-T07
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E03-T05]
---

# Otimizar contexto e sanear dependências pré-MVP

## Objective
Reduzir leituras desnecessárias do Codex e tornar a sequência KZ-E04–KZ-E08 executável sem dependências implícitas.

## Inputs
- `AGENTS.md`
- `roadmap/README.md`
- `roadmap/ACTIVE.md`
- `docs/implementation/P0-IMPLEMENTATION-GUIDE.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`

## Deliverables
- Instruções segmentadas por árvore.
- Guia de implementação modular e tarefas com entradas exatas.
- Ordem corrigida para autorização, backup local e Neon.
- Nomes e checklists coerentes com o P0 operacional.

## Subtasks
- [x] Reduzir o contrato raiz e criar instruções especializadas.
- [x] Separar a implementação em pacotes pequenos por tarefa ou épico.
- [x] Antecipar sessão e autorização para antes de KZ-E06/E07.
- [x] Limitar KZ-E05-T05 ao restore local e manter Neon em KZ-E08.
- [x] Normalizar nomes, checklists, entradas, links e índices.

## Validation
- Medir a rota mínima de leitura de KZ-E04-T01 antes e depois.
- Validar Markdown, JSON, schemas, IDs, dependências e estados.
- Confirmar ausência de código, dependências, workflows e segredos.

## Acceptance criteria
- [x] KZ-E04-T01 é autocontida e pode começar sem ler o guia inteiro.
- [x] Nenhuma feature operacional antecede sua autorização.
- [x] Nenhuma tarefa exige Neon antes de sua configuração.

## Result
Contrato do agente segmentado, guia modularizado, tarefas futuras com entradas exatas e sequência de segurança/infraestrutura corrigida. A rota mínima de KZ-E04-T01 caiu de 4.801 para 1.761 palavras, redução aproximada de 63%. O saneamento permanece exclusivamente documental e mantém KZ-E04-T01 como próximo incremento de código.
