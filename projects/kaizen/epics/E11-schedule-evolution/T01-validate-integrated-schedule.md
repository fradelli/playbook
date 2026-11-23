---
id: KZ-E11-T01
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Validar a base integrada da agenda

## Objective
Verificar os fluxos já integrados na PR #86 e registrar quais validações continuam pendentes. A tarefa é de validação residual, não de reconstrução da agenda.

## Inputs
- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — consultar o contrato ou seção correspondente ao escopo.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — consultar o contrato ou seção correspondente ao escopo.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — consultar o contrato ou seção correspondente ao escopo.
- [src/features/schedule/data/schedule-writer.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/data/schedule-writer.ts) — consultar o contrato ou seção correspondente ao escopo.
- [src/features/schedule/ui/components/calendar-range/hooks/use-calendar-days.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/calendar-range/hooks/use-calendar-days.ts) — consultar o contrato ou seção correspondente ao escopo.
- [tests/integration/agenda-foundation.test.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/tests/integration/agenda-foundation.test.ts) — consultar o contrato ou seção correspondente ao escopo.

## Deliverables
Resultado verificável descrito nos critérios abaixo, com evidências vinculadas a esta tarefa. Antes de editar código, aplicar as seções pertinentes da [arquitetura](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) e os contratos locais. Não carregar planos históricos inteiros.

## Subtasks
- [ ] Conferir criação/edição de atividade, grupos, tarefas e reservas na base integrada.
- [ ] Conferir cache ao reduzir/ampliar dias, resposta perdida e atualização de datas afetadas.
- [ ] Executar regressões proporcionais e registrar resultados e limitações de navegador/dispositivo.

## Validation
Conferir links, IDs, dependências e coerência com regras de produto. Quando houver implementação autorizada, executar os gates proporcionais e os cenários do plano; registrar o que foi executado e o que ficou pendente. Testes ainda não executados não contam como evidência.

## Acceptance criteria
- [ ] O relatório distingue código existente, teste executado e validação não realizada.
- [ ] Lista, reserva e card preservam identidade após recarga; ocupação interna e sobreposição independente são verificadas.
- [ ] Movimento de pai e mudança de grupo preservam horários, vínculos e histórico conforme as regras.

## Fora de escopo

Não implementar gestos, recorrência ou reescrever a fundação. Falhas reais encontradas devem ser delimitadas antes de ampliar o escopo.

## Result
Backlog registrado em 21/11/2026 durante a reconciliação documental. Nenhuma execução desta tarefa foi iniciada por este registro. O status canônico fica exclusivamente no índice do roadmap.
