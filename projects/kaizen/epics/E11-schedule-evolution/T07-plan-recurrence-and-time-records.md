---
id: KZ-E11-T07
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Detalhar recorrência e registros de tempo

## Objective
Converter o planejamento de recorrência e tempo real em contratos e tarefas implementáveis, distinguindo propostas de Decisions approved. Não assumir que projeção de treino implementa recorrência geral.

## Inputs
- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — consultar o contrato ou seção correspondente ao escopo.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — consultar o contrato ou seção correspondente ao escopo.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — consultar o contrato ou seção correspondente ao escopo.
- [docs/architecture/MODELO-CONCEITUAL-DA-AGENDA.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/MODELO-CONCEITUAL-DA-AGENDA.md) — consultar o contrato ou seção correspondente ao escopo.
- [docs/architecture/AGENDA-TABELAS-E-CONSULTAS-PROPOSTAS.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/AGENDA-TABELAS-E-CONSULTAS-PROPOSTAS.md) — consultar o contrato ou seção correspondente ao escopo.
- [docs/research/PROMPT-PESQUISA-AGENDA.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/research/PROMPT-PESQUISA-AGENDA.md) — consultar o contrato ou seção correspondente ao escopo.

## Deliverables
Resultado verificável descrito nos critérios abaixo, com evidências vinculadas a esta tarefa. Antes de editar código, aplicar as seções pertinentes da [arquitetura](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) e os contratos locais. Não carregar planos históricos inteiros.

## Subtasks
- [ ] Reconciliar modelo conceitual, tabelas propostas e schema existente.
- [ ] Definir alcance de somente esta/esta e próximas, exceções, identidade e histórico.
- [ ] Separar reserva, conclusão e tempo realizado; registrar perguntas ainda abertas.

## Validation
Conferir links, IDs, dependências e coerência com regras de produto. Quando houver implementação autorizada, executar os gates proporcionais e os cenários do plano; registrar o que foi executado e o que ficou pendente. Testes ainda não executados não contam como evidência.

## Acceptance criteria
- [ ] Plano identifica lacunas de código sem recriar funcionalidades existentes.
- [ ] Projeção por janela e exceções não exigem materializar todo o futuro.
- [ ] Novas tarefas de implementação só são propostas com escopo e decisões identificados.

## Fora de escopo

Sem migration, agendamento automático ou integração com dieta não especificada.

## Result
Backlog registrado em 21/11/2026 durante a reconciliação documental. Nenhuma execução desta tarefa foi iniciada por este registro. O status canônico fica exclusivamente no índice do roadmap.
