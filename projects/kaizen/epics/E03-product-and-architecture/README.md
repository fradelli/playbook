# KZ-E03 — Produto e arquitetura

## Expected outcome
Escopo P0, transição da fonte de verdade, operação e arquitetura aprovados em documentação, sem criar código.

## Out of scope
- Scaffold, dependências, banco ou deploy.
- Features além da execução essencial de treino e alimentação.

## Order
| Tarefa | Depende de | Resultado |
| --- | --- | --- |
| KZ-E03-T01 | KZ-E01-T06, KZ-E02-T06 | Jornadas e aceite do P0 |
| KZ-E03-T02 | KZ-E03-T01 | Transição arquivos/banco |
| KZ-E03-T03 | KZ-E03-T01 | Privacidade e operação |
| KZ-E03-T04 | KZ-E03-T02, KZ-E03-T03 | Arquitetura proporcional |
| KZ-E03-T05 | KZ-E03-T04 | Guia copiável aprovado |

## Closing criteria
- [x] Nenhuma decisão técnica bloqueante permanece implícita.
- [x] O guia de implementação possui ordem, arquivos e validações.
- [x] KZ-E04-T01 está `READY`.
