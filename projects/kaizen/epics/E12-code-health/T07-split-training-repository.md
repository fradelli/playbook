---
id: KZ-E12-T07
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E12-T05]
---

# Dividir o repositório de treino e mover as regras para o domínio

## Objective
Reduzir `prisma-training-repository.ts` a persistência e mapeamento, com as regras de negócio no domínio e módulos coesos por responsabilidade.

## Contexto

Achados da auditoria de 2026-11-23:

- `src/features/training/data/prisma-training-repository.ts` tem 1641 linhas; `completeTrainingActivityFromDraft` sozinha tem cerca de 340.
- Regras de negócio estão na camada de dados: `validateActivitySchedule`, `validateCompleteExerciseSetInput`, `isSetResultPerformed` e `hasSetExecutionMeasurement`.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md` — seções "Semântica e legibilidade do código", "Boundaries" e "Transações e concorrência".
- `src/features/training/data/prisma-training-repository.ts` — arquivo a dividir.
- `src/features/training/domain/` — destino das regras.
- `tests/integration/training-mutations.test.ts` — rede de proteção.

## Deliverables
- Regras de negócio em módulos de `src/features/training/domain/` com testes unitários.
- Repositório dividido em módulos de leitura, mutação e mapeamento, mantendo a interface `TrainingRepository`.
- Funções longas quebradas em etapas nomeadas.

## Subtasks
- [ ] Cobrir com testes o comportamento atual antes de mover.
- [ ] Mover as regras para o domínio.
- [ ] Separar leitura, mutação e mapeamento.
- [ ] Quebrar `completeTrainingActivityFromDraft` e `findTrainingDay`.

## Validation
- `pnpm test`, `pnpm test:integration` e `pnpm structure:check` passam sem alterar asserções de comportamento.
- Nenhum arquivo de `src/features/training/data/` passa de 500 linhas.

## Acceptance criteria
- [ ] A camada de dados não contém regra de negócio.
- [ ] A interface pública do repositório e o comportamento ficam iguais.

## Result
Não iniciada.
