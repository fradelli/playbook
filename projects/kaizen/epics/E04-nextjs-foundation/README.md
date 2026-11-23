# KZ-E04 — Fundação Next.js

## Expected outcome
Aplicação Next.js mínima, sem features de negócio, com boundaries, gates de qualidade e Design System compartilhado validado e integrado por versão exata.

## Order
| Tarefa | Depende de | Resultado |
| --- | --- | --- |
| KZ-E04-T01 | KZ-E03-T05, KZ-E00-T07 | Scaffold validado |
| KZ-E04-T02 | KZ-E04-T01 | Qualidade estática |
| KZ-E04-T06 | KZ-E04-T02 | Decisão de adoção e arquitetura atualizadas |
| KZ-E04-T03 | KZ-E04-T02 | Boundary server-only |
| KZ-E04-T05 | KZ-E04-T02, KZ-E04-T03, KZ-E04-T06 | CI mínimo antes da adoção visual |
| KZ-E04-T07 | KZ-E04-T05, KZ-E04-T06 | Prontidão técnica decidida sem instalar o package |
| KZ-E04-T08 | KZ-E04-T07 | `@fradelli/ui@0.1.0` integrado pelo GitHub Packages |
| KZ-E04-T04 | KZ-E04-T08 | Shell acessível sobre o Design System |
| KZ-E04-T09 | KZ-E04-T04 | Páginas React e fronteiras Server/Client padronizadas |

## Out of scope
- Regras, páginas finais, banco produtivo ou deploy.
- Calendário compartilhado, domínio ou componentes específicos do Kaizen no package.

## Closing criteria
- [x] Lint, tipos, testes e build passam.
- [x] Instalação congelada resolve exatamente `@fradelli/ui@0.1.0`.
- [x] Inter, dark, CSS público, `@source` e foundations estão validados antes do shell.
- [x] Não há regra de treino ou alimentação em componentes/rotas.
- [ ] Páginas existentes seguem a organização por responsabilidade e a menor fronteira Client possível.
