# KZ-E07 — Execução de alimentação

## Expected outcome
Plano alimentar do dia consultável, com escolha, cumprimento, alternativa e comentário registráveis no workspace fixo.

## Order
| Tarefa  | Depende de | Resultado                                         |
| ------- | ---------- | ------------------------------------------------- |
| KZ-E07-T01 | KZ-E05-T05    | Projeção do plano e da execução do workspace fixo |
| KZ-E07-T02 | KZ-E04-T04, KZ-E07-T01 | Página de dieta do dia                            |
| KZ-E07-T03 | KZ-E07-T02    | Escolhas, cumprimento e comentários               |
| KZ-E07-T04 | KZ-E07-T03    | Segurança e proveniência                          |
| KZ-E07-T05 | KZ-E07-T04    | Fluxo validado                                    |

## Out of scope
- Prescrição automática ou diagnóstico nutricional.
- Cálculo automático de consumo, calorias ou macronutrientes.
- Edição do plano canônico pela interface.

## Closing criteria
- [ ] O plano ativo é legível e rastreável.
- [ ] O usuário registra plano seguido, refeição diferente ou refeição pulada.
- [ ] Unknowns e ressalvas permanecem explícitos.
