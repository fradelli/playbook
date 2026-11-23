---
id: KZ-E06-T10
epic: KZ-E06
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T09]
---

# Implementar o contador de descanso aprovado

## Objective
Executar a UX aprovada na KZ-E06-T09 para o descanso prescrito entre séries, sem confundir essa contagem com a duração total da atividade.

## Inputs
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `roadmap/epics/E06-training-execution/T09-design-rest-timer-experience.md`
- `src/features/training/application/training-dto.ts`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/training-exercise.tsx`
- `src/features/training/ui/components/training-day-page/components/training-session/components/training-exercise/components/training-local-exercise-editor/training-local-exercise-editor.tsx`
- `src/features/training/ui/components/training-day-page/components/training-activity-timer/training-activity-timer.tsx`

## Deliverables
Não registrado na versão original desta tarefa; conteúdo equivalente na seção «Escopo e impactos».

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Comportamento esperado

- O botão explícito inicia a contagem do descanso prescrito para o exercício.
- O painel flutuante no topo permite pausar, retomar, reiniciar e fechar sem bloquear a página.
- Fechar para e descarta a contagem; nenhum comando de descanso salva série ou atividade.
- Sem descanso prescrito, o botão não sugere uma duração inventada.

## Escopo e impactos

- Implementar somente o estado e a apresentação necessários à UX aprovada, com teste de temporização e acessibilidade.
- Verificar timers em abas inativas e limpeza de recursos ao desmontar o componente.

## Fora de escopo

- Notificações push, áudio ou monitoramento de descanso no banco sem decisão específica.

## Decisões antes da implementação

- Reanalisar o código vigente e a decisão documentada na KZ-E06-T09; apresentar plano e aguardar aprovação explícita antes de implementar.

## Acceptance criteria
- [ ] Todos os controles e o fechamento seguem a UX aprovada e não bloqueiam o treino.
- [ ] O contador é confiável nas condições de navegação explicitamente aprovadas.
- [ ] Os testes não dependem de espera real do relógio.

## Result
Ainda não iniciada.
