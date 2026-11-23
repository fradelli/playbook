---
id: KZ-E11-T06
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Definir as extensões de interação da agenda

## Objective
Fechar as decisões que impedem especificar resize superior, navegação multidia no mobile, faixa sem horário e movimentação de treinos concluídos. Entrega documental, sem implementar essas extensões.

## Inputs
- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — consultar o contrato ou seção correspondente ao escopo.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — consultar o contrato ou seção correspondente ao escopo.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — consultar o contrato ou seção correspondente ao escopo.
- [src/features/training/ui/training-calendar.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/training/ui/training-calendar.ts) — consultar o contrato ou seção correspondente ao escopo.

## Deliverables
Resultado verificável descrito nos critérios abaixo, com evidências vinculadas a esta tarefa. Antes de editar código, aplicar as seções pertinentes da [arquitetura](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) e os contratos locais. Não carregar planos históricos inteiros.

## Subtasks
- [ ] Separar planejamento de execução nos cards concluídos e definir a representação movida.
- [ ] Definir efeitos do resize superior sobre itens internos e a política temporal histórica.
- [ ] Definir entrada acessível sem arraste, faixa sem horário no toque e navegação entre dias no mobile.

## Validation
Conferir links, IDs, dependências e coerência com regras de produto. Quando houver implementação autorizada, executar os gates proporcionais e os cenários do plano; registrar o que foi executado e o que ficou pendente. Testes ainda não executados não contam como evidência.

## Acceptance criteria
- [ ] Cada questão possui decisão registrada ou bloqueio explícito, sem hipótese apresentada como aprovação.
- [ ] ScheduledDate, tarefa sem data e eventual dia inteiro permanecem conceitos distintos.
- [ ] Implementações posteriores são delimitadas por decisões; nada arredonda ou reescreve execução por conveniência visual.

## Fora de escopo

Não autoriza implementar resize superior, recorrência ou alterar registros realizados. Pode ser refinada independentemente da POC.

## Result
Backlog registrado em 21/11/2026 durante a reconciliação documental. Nenhuma execução desta tarefa foi iniciada por este registro. O status canônico fica exclusivamente no índice do roadmap.
