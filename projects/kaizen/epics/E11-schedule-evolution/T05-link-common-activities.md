---
id: KZ-E11-T05
epic: KZ-E11
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E11-T03]
---

# Vincular e desvincular atividades comuns

## Objective
Suportar as intenções de colocar uma atividade dentro de outra ou mantê-la independente no mesmo horário, com prévia explícita e preservação da identidade.

## Inputs
- [docs/plans/agenda/RECONCILIATION.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md) — consultar o contrato ou seção correspondente ao escopo.
- [docs/plans/agenda/AGENDA-DRAG-AND-DROP.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) — consultar o contrato ou seção correspondente ao escopo.
- [docs/product/telas/agenda-regras-de-produto.md](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/product/telas/agenda-regras-de-produto.md) — consultar o contrato ou seção correspondente ao escopo.
- [src/features/schedule/application/schedule-command.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/application/schedule-command.ts) — consultar o contrato ou seção correspondente ao escopo.
- [src/features/schedule/data/schedule-writer.ts](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/data/schedule-writer.ts) — consultar o contrato ou seção correspondente ao escopo.
- [src/features/schedule/ui/components/schedule-card/schedule-card.tsx](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/src/features/schedule/ui/components/schedule-card/schedule-card.tsx) — consultar o contrato ou seção correspondente ao escopo.

## Deliverables
Resultado verificável descrito nos critérios abaixo, com evidências vinculadas a esta tarefa. Antes de editar código, aplicar as seções pertinentes da [arquitetura](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/architecture/TARGET-ARCHITECTURE.md) e os contratos locais. Não carregar planos históricos inteiros.

## Subtasks
- [ ] Validar a proposta visual de corpo/faixa lateral, sem assumir dimensões aprovadas.
- [ ] Criar contratos de vínculo e desvínculo, validação de ciclos e concorrência.
- [ ] Representar atividades internas e aplicar as políticas de movimento do pai.

## Validation
Conferir links, IDs, dependências e coerência com regras de produto. Quando houver implementação autorizada, executar os gates proporcionais e os cenários do plano; registrar o que foi executado e o que ficou pendente. Testes ainda não executados não contam como evidência.

## Acceptance criteria
- [ ] Daily entra e sai de Trabalho com um único ID e horário preservado quando só o vínculo muda.
- [ ] Destino inválido preserva estado anterior; sobreposição independente continua permitida.
- [ ] Ciclos são rejeitados; limite de profundidade é explícito e não excede o contrato implementado.

## Fora de escopo

Árvores profundas e pausas internas exigem decisão própria. Agrupamento +N não equivale a vínculo.

## Result
Backlog registrado em 21/11/2026 durante a reconciliação documental. Nenhuma execução desta tarefa foi iniciada por este registro. O status canônico fica exclusivamente no índice do roadmap.
