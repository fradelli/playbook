# KZ-E08 — Publicação pessoal

## Expected outcome
Aplicação validada localmente, em preview e em produção, com exposição pública aceita, workspace fixo, observabilidade mínima e rollback.

## Order
| Tarefa  | Depende de       | Resultado                                                          |
| ------- | ---------------- | ------------------------------------------------------------------ |
| KZ-E08-T01 | KZ-E06-T05, KZ-E07-T05 | Preview publicado                                                  |
| KZ-E08-T02 | KZ-E08-T01          | Exposição pública e fronteiras de integridade validadas no preview |
| KZ-E08-T03 | KZ-E08-T02, KZ-E05-T05 | Produção preparada                                                 |
| KZ-E08-T04 | KZ-E08-T03          | Operação e rollback validados                                      |
| KZ-E08-T05 | KZ-E08-T04          | MVP pessoal publicado                                              |

## Out of scope
- Cadastro público e múltiplos usuários.
- Ambientes adicionais sem necessidade comprovada.

## Closing criteria
- [ ] Local, preview e produção usam configurações documentadas.
- [ ] Segredos não estão versionados.
- [ ] Acesso e rollback foram testados.
