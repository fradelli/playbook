# KZ-E05 — Banco, importação e acesso

## Expected outcome
Banco escolhido, migrations versionadas, importação idempotente e workspace fixo server-only prontos para os registros operacionais. Autenticação foi adiada por decisão explícita.

## Order
| Tarefa  | Depende de       | Resultado                                            |
| ------- | ---------------- | ---------------------------------------------------- |
| KZ-E05-T01 | KZ-E03-T05          | Modelo relacional aprovado                           |
| KZ-E05-T02 | KZ-E04-T03, KZ-E05-T01 | Banco e migrations                                   |
| KZ-E05-T03 | KZ-E05-T02          | Importação idempotente                               |
| KZ-E05-T04 | KZ-E05-T03          | Integridade testada                                  |
| KZ-E05-T05 | KZ-E05-T04          | Backup/restore local validado                        |
| KZ-E05-T06 | KZ-E05-T05          | Cancelada; modo público com risco aceito documentado |
| KZ-E05-T07 | KZ-E05-T04          | Semântica e fronteiras do código verificadas         |

| KZ-E05-T08 | KZ-E05-T02 | Auditoria sem vulnerabilidades e compatibilidade validada |

## Out of scope
- Domínios posteriores ao P0.
- Cadastro, login, autenticação, edição de planos pela interface ou features fora do P0.

## Closing criteria
- [x] Importação repetida não duplica dados.
- [x] Origem, versão e plano ativo permanecem rastreáveis.
- [x] Atribuições e execuções pertencem ao workspace e preservam a versão apresentada.
- [x] O workspace fixo é resolvido no servidor; autenticação futura possui gate explícito antes de multiusuário.
