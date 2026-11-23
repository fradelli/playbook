# KZ-E06 — Execução de treino

## Expected outcome
Treino, preparação, mobilidade ou descanso do dia consultáveis e registráveis no workspace fixo, preservando plano e histórico.

## Order
| Tarefa  | Depende de | Resultado                                                |
| ------- | ---------- | -------------------------------------------------------- |
| KZ-E06-T01 | KZ-E05-T05    | Projeção do plano e da execução do workspace fixo        |
| KZ-E06-T02 | KZ-E04-T04, KZ-E06-T01 | Página de treino do dia                                  |
| KZ-E06-T03 | KZ-E06-T02    | Preparação, séries e comentários                         |
| KZ-E06-T04 | KZ-E06-T03    | Proveniência e histórico                                 |
| KZ-E06-T05 | KZ-E06-T04    | Fluxo validado                                           |
| KZ-E06-T06 | KZ-E06-T03    | Carga alvo por exercício ou por série                    |
| KZ-E06-T07 | KZ-E06-T03    | Última execução por série como referência                |
| KZ-E06-T08 | KZ-E06-T03    | Avanço condicionado às medidas aplicáveis                |
| KZ-E06-T09 | KZ-E06-T03    | UX do contador de descanso aprovada                      |
| KZ-E06-T10 | KZ-E06-T09    | Contador de descanso não modal                           |
| KZ-E06-T11 | KZ-E06-T03    | Ciclo de vida do plano diário decidido                   |
| KZ-E06-T12 | KZ-E06-T11    | Edição diária refinada conforme lacunas                  |
| KZ-E06-T13 | KZ-E06-T11    | Futuro reconciliado após troca de plano                  |
| KZ-E06-T14 | KZ-E04-T04    | Navegação principal inferior no mobile                   |
| KZ-E06-T15 | KZ-E06-T11    | Programação semanal sem esporte fixo                     |
| KZ-E06-T16 | KZ-E06-T15    | Novo plano e aquecimentos validados                      |
| KZ-E06-T17 | KZ-E06-T11    | Reinício operacional controlado e recuperável            |
| KZ-E06-T18 | KZ-E06-T16    | Condução guiada dos blocos combinados                    |
| KZ-E06-T19 | KZ-E06-T12    | Fim planejado calculado pela duração da sessão           |
| KZ-E06-T20 | KZ-E06-T12    | Cancelada; Treino específico permanece disponível        |
| KZ-E06-T21 | KZ-E06-T16    | Contrato de importação externa projetado                 |
| KZ-E06-T22 | KZ-E06-T12    | Agenda futura editável sem execução antecipada           |
| KZ-E06-T23 | KZ-E06-T12    | Registro retrospectivo de atividades externas em revisão |

| KZ-E06-T24 | KZ-E06-T12, KZ-E06-T19 | Aquecimento selecionável e remarcação segura |
| KZ-E06-T25 | KZ-E06-T24 | Modais de inclusão e edição com rascunhos locais |

As tarefas KZ-E06-T06 a KZ-E06-T22 são uma rodada complementar. Nenhuma
começa automaticamente nem amplia o gate de KZ-E06-T05 sem nova priorização. Ao
selecionar qualquer uma, reanalisar a base já integrada, apresentar solução e
plano e aguardar aprovação antes de implementar.

## Prioridade para começar a usar a nova programação

Em 27/10/2026, o usuário priorizou a KZ-E06-T24 para corrigir inclusão de
aquecimento e remarcação antes da Dieta. A KZ-E06-T20 permanece cancelada.

A lista curta priorizada em 26/10/2026 está encerrada: KZ-E06-T19 concluída e
KZ-E06-T20 cancelada pelo usuário. Não existe uma terceira pequena correção
explicitamente priorizada nessa lista.

A próxima pendência imediata já registrada é a validação manual retrospectiva
da KZ-E06-T23. KZ-E06-T14 continua dependendo de dispositivo real. KZ-E06-T04 e KZ-E06-T05
permanecem necessárias para encerrar o épico; blocos combinados e progressão
não foram promovidos automaticamente a prioridade.

1. KZ-E06-T11 decide as regras do dia antes de ampliar a agenda.
2. Após a revisão das alterações do roadmap pelo usuário, KZ-E06-T17 só reinicia
   dados após escolha do ambiente, escopo, backup e autorização específica.
   O reinício local autorizado foi concluído com backup restaurável.
3. KZ-E06-T15 generaliza a semana; após receber o novo treino, KZ-E06-T16 o importa,
   sessões reserva ficam fora da versão atual até aprovação específica.
4. KZ-E06-T06 e KZ-E06-T08 podem ser avaliadas em conjunto; KZ-E06-T07 entra antes de
   comparar execuções posteriores. KZ-E06-T09 precede KZ-E06-T10. KZ-E06-T14 pode ser
   entregue separadamente. KZ-E06-T12 depende das lacunas identificadas em T11.
5. KZ-E06-T13 pode ser reavaliada caso o reinício controlado elimine a necessidade
   imediata de reconciliar atividades futuras antigas; não está cancelada.
6. KZ-E06-T21 começa após a importação manual validada da nova programação. Primeiro
   estabiliza o contrato JSON e a prévia; Excel reutiliza esse contrato em etapa
   posterior, sem criar outro caminho de persistência.

O novo plano contém blocos combinados: KZ-E06-T16 preserva sua estrutura e apresenta
subtítulos A/B com navegação manual. O fluxo guiado permanece adiado em KZ-E06-T18,
com nova revisão antes de implementar. KZ-E06-T04 e KZ-E06-T05 continuam necessários para encerrar o épico.

## Out of scope
- Edição livre dos planos canônicos pelo aplicativo antes da KZ-E06-T21.
- Recomendação automática baseada em dor, fadiga ou diagnóstico.

## Closing criteria
- [ ] O usuário encontra o treino correto para o dia.
- [ ] Carga aparece somente quando aplicável e séries podem ser salvas parcialmente.
- [ ] Mobilidade e descanso não criam exercícios artificiais.
- [ ] Dados ausentes são apresentados sem inferências.
- [ ] Origem e versão do plano são rastreáveis.

## Tarefas complementares registradas

Status canônico no [roadmap](../../README.md). Esta tabela completa a navegação sem alterar prioridade ou dependências.

| Tarefa | Depende de | Resultado |
| --- | --- | --- |
| [KZ-E06-T26](T26-set-execution.md) | KZ-E06-T03, KZ-E09-T09 | Execução independente de séries e histórico |
