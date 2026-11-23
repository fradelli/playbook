# Kaizen — visão geral do planejamento

Entrada por área para encontrar o que existe, o que precisa de validação e o trabalho futuro. Os estados são mantidos somente no [roadmap](README.md); a tarefa selecionada e sua próxima ação ficam em [ACTIVE](ACTIVE.md). Este mapa não calcula progresso nem substitui critérios de aceite.

## Mapa por área

| Área | Onde conferir entregas | Onde conferir o trabalho restante |
| --- | --- | --- |
| Agenda | [Base integrada e limites](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md#o-que-existe-e-o-que-falta) | [KZ-E11: validação e interações](epics/E11-schedule-evolution/README.md) |
| Execução de treino | [Séries, histórico e descanso](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#treino) | [KZ-E06: critérios das tarefas](epics/E06-training-execution/README.md) |
| Autoria de planos | [Base parcial e proposta de identidade](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#treino) | [Plano de autoria](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/training/PLANOS-DE-TREINO.md#sequência-de-entrega-e-critérios-de-saída); falta recorte formal de tarefas |
| Catálogo | [Seed e limites editoriais](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#catálogo) | [Pendências delimitadas](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/catalog/CATALOG-IMPORT-PLAN.md#pendências-delimitadas); falta fila própria |
| Design system | [Executor entregue e candidato atual](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#design-system) | [KZ-E10-T09: adoção integral](epics/E10-portfolio-visual-alignment/T09-complete-mira-adoption.md) |
| Alimentação | [Fundação e tela atual](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#alimentação) | [KZ-E07: consulta e registro](epics/E07-nutrition-execution/README.md) |
| Idiomas | [Interface PT/EN e limites](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#internacionalização) | [Plano editorial](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/i18n/I18N-PT-EN-PLAN.md) e [KZ-E09](epics/E09-future-evolution/README.md) |
| Publicação | [Limites da evidência local](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#publicação) | [KZ-E08: preview, produção e operação](epics/E08-personal-release/README.md) |
| Governança e agente | [Padrão documental vigente](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/DOCUMENTATION-STANDARD.md) | [KZ-E00-T12 a KZ-E00-T16: Claude, limpeza, documentação e CI](epics/E00-repository-governance/README.md) |
| Saúde do código | Auditoria técnica de 2026-11-23, registrada nas tarefas | [KZ-E12: fronteiras, validação, estado e testes](epics/E12-code-health/README.md) |

## Pontos que precisam de definição

A [reconciliação geral](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#próximos-refinamentos-de-planejamento) identifica vínculos de tarefas ausentes, sobreposição do backlog de descanso, divergência sobre versões de planos e limites da política de idioma. São lacunas visíveis de planejamento, sem encerramento automático de tarefas.

## Como usar em equipe

1. Escolher a área neste mapa e conferir o estado no roadmap.
2. Abrir a tarefa e somente as entradas necessárias; conferir dependências e aceite.
3. Registrar resultado e evidência na tarefa. Atualizar estado no roadmap e retomada em ACTIVE quando houver mudança efetiva.
4. Atualizar o mapa apenas quando mudar a navegação ou o entendimento de escopo, sem copiar percentuais, contagens ou estados.

Para repetir a organização em outro projeto, usar o [padrão documental](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/DOCUMENTATION-STANDARD.md), os [modelos](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/templates/PLAN.md) e o [template de tarefa](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/roadmap/templates/TASK-TEMPLATE.md). Esta estrutura não exige serviço novo nem sincronização manual entre dois backlogs. A central visual multiprojeto continua uma etapa posterior.
