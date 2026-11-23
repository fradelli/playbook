---
id: KZ-E06-T18
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T16]
---

# Guiar a execução dos blocos combinados

## Objective
Reanalisar com o usuário e implementar a condução de blocos A/B, usando a composição já preservada na ficha sem alterar as prescrições.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `data/plans/2026-09-training-v1.json`
- `prisma/models/training.prisma`
- `src/features/training/ui/components/training-day-page/components/training-activity-card/training-activity-card.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`
- `src/features/training/ui/hooks/use-training-activity-draft/use-training-activity-draft.utils.ts`

## Deliverables
- Fluxo aprovado de A → pausa → B → pausa → próxima rodada, preservando as pausas de cada membro.
- Rascunho local recuperável, retorno aos membros e persistência apenas na conclusão da atividade.
- Comportamento explícito para exercícios zerados, interrupção e correção posterior.
- Testes de ordem, restauração, séries por lado e conclusão parcial.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Fora de escopo

- Alterar a ficha ou inventar doses, descansos e progressões.
- Implementar antes de nova revisão do usuário.

## Acceptance criteria
- [ ] UX e regras de avanço aprovadas antes da implementação.
- [ ] Blocos e membros preservam IDs e prescrições existentes.
- [ ] Navegação guiada não antecipa gravação no banco.

## Result
Planejada; a KZ-E06-T16 mantém apenas a navegação manual e os subtítulos dos pares.
