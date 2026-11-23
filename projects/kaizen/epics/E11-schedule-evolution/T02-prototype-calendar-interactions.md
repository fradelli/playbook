---
id: KZ-E11-T02
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E11-T01]
---

# Validar a POC de seleção e drag and drop

## Objective
Construir, após autorização de implementação, uma POC local sem escrita no banco para seleção multidia, mover atividades, agendar tarefas, trocar grupos e resize inferior.

## Inputs
- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — consultar o contrato ou seção correspondente ao escopo.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — consultar o contrato ou seção correspondente ao escopo.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — consultar o contrato ou seção correspondente ao escopo.
- [src/features/schedule/ui/components/calendar-grid/components/calendar-day-column/calendar-day-column.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/calendar-grid/components/calendar-day-column/calendar-day-column.tsx) — consultar o contrato ou seção correspondente ao escopo.
- [src/features/schedule/ui/components/schedule-workspace/schedule-workspace.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/schedule-workspace/schedule-workspace.tsx) — consultar o contrato ou seção correspondente ao escopo.
- [src/features/schedule/ui/components/todo-task-row/todo-task-row.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/todo-task-row/todo-task-row.tsx) — consultar o contrato ou seção correspondente ao escopo.

## Deliverables
Resultado verificável descrito nos critérios abaixo, com evidências vinculadas a esta tarefa. Antes de editar código, aplicar as seções pertinentes da [arquitetura](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) e os contratos locais. Não carregar planos históricos inteiros.

## Subtasks
- [ ] Conferir versão e API pública de @dnd-kit/react; definir geometria e política única de snap.
- [ ] Integrar provider, sensores e prévia local preservando clique, checkbox, foco e rolagem.
- [ ] Validar seleção multidia e intenções simuladas do primeiro incremento; registrar limitações de toque e teclado.

## Validation
Conferir links, IDs, dependências e coerência com regras de produto. Quando houver implementação autorizada, executar os gates proporcionais e os cenários do plano; registrar o que foi executado e o que ficou pendente. Testes ainda não executados não contam como evidência.

## Acceptance criteria
- [ ] 21h até 12h do dia seguinte e cinco dias representam um intervalo único com segmentos visuais.
- [ ] Movimento preserva duração e deslocamento do ponto segurado; resize inferior preserva início.
- [ ] Cancelamento, destino inválido e operação sem alteração não enviam comandos persistentes.
- [ ] Autoscroll, grade com dias variáveis e controles internos funcionam sem atualizações globais por pixel.
- [ ] Alternativa por clique/toque e comportamento mobile são demonstrados ou identificados como impedimento de aprovação.

## Fora de escopo

Nenhuma Server Action de escrita, migration ou rota de demonstração pública. A aprovação dos resultados da POC é gate separado para KZ-E11-T03.

## Result
Backlog registrado em 21/11/2026 durante a reconciliação documental. Nenhuma execução desta tarefa foi iniciada por este registro. O status canônico fica exclusivamente no índice do roadmap.
