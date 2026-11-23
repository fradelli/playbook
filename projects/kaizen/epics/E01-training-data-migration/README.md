# KZ-E01 — Migração dos dados de treino

## Expected outcome
Regras, planos, biblioteca, agenda, originais, revisões e documentação de treino migrados com proveniência e integridade, ainda sem código.

## Out of scope
- Alimentação.
- Aplicação, banco e scripts.
- Importação de todo o histórico Git.

## Order
| Tarefa | Depende de | Resultado |
| --- | --- | --- |
| KZ-E01-T01 | KZ-E00-T05 | Snapshot imutável da origem |
| KZ-E01-T02 | KZ-E01-T01 | Dados canônicos e plano ativo migrados |
| KZ-E01-T03 | KZ-E01-T02 | Histórico e versões anteriores preservados |
| KZ-E01-T04 | KZ-E01-T03 | Documentação útil transformada |
| KZ-E01-T05 | KZ-E01-T04 | Schemas migrados |
| KZ-E01-T06 | KZ-E01-T05 | Fundação validada e marcada |

## Closing criteria
- [x] Todos os IDs e ponteiros são válidos; a agenda privada é confirmada sem expor valores no destino sanitizado.
- [x] Originais literais mantêm hash.
- [x] Não há caminhos antigos ou arquitetura desatualizada como decisão vigente.
- [x] Tag `training-foundation-v1` criada.
