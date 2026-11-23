# KZ-E11 — Evolução da agenda

## Expected outcome
Agenda operável por arraste e alternativas acessíveis, preservando identidade, histórico e cache. A fundação já integrada é validada, não recriada.

## Scope
Validação residual da base, POC e integração do primeiro incremento, edição de reservas, vínculos entre atividades e especificação das extensões ainda abertas. [Reconciliação e evidências](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md).

## Order
| Tarefa | Depende de | Resultado |
| --- | --- | --- |
| [KZ-E11-T01](T01-validate-integrated-schedule.md) | — | Validar a base integrada da agenda |
| [KZ-E11-T02](T02-prototype-calendar-interactions.md) | KZ-E11-T01 | Validar a POC de seleção e drag and drop |
| [KZ-E11-T03](T03-persist-calendar-interactions.md) | KZ-E11-T02 | Integrar os gestos aprovados à persistência |
| [KZ-E11-T04](T04-edit-individual-reservations.md) | KZ-E11-T03 | Mover e redimensionar uma reserva individual |
| [KZ-E11-T05](T05-link-common-activities.md) | KZ-E11-T03 | Vincular e desvincular atividades comuns |
| [KZ-E11-T06](T06-define-calendar-extension-rules.md) | — | Definir as extensões de interação da agenda |
| [KZ-E11-T07](T07-plan-recurrence-and-time-records.md) | — | Detalhar recorrência e registros de tempo |
| [KZ-E11-T08](T08-define-overlap-presentation.md) | — | Definir apresentação de sobreposições e agrupador |

As dependências acima são a sequência inicial de planejamento. O status existe somente em [roadmap/README.md](../../README.md). T06–T08 são refinamentos documentais independentes; não autorizam implementação. KZ-E10-T09 continua sendo a tarefa selecionada. T03 exige aprovação dos resultados da POC, além da dependência técnica.

## Out of scope
Reimplementar a base entregue, substituir a biblioteca escolhida, modificar execução de treino implicitamente, construir a central de projetos ou ampliar autenticação/workspaces.

## Closing criteria
- [ ] Fluxos implementados aprovados com evidências e alternativas acessíveis.
- [ ] Decisões abertas e limitações estão explícitas; especificações não são apresentadas como funcionalidades entregues.
- [ ] Etapas posteriores de implementação recebem tarefas próprias quando forem aprovadas.
