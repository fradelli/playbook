# KZ-E00 — Governança do repositório

## Expected outcome
Repositório público com branches, documentação, publicação de conteúdo e entregas governadas, além da origem privada do legado rastreável, com contratos documentais mantidos durante a evolução da aplicação.

## Scope
- Visibilidade e clone local.
- Branches de integração, homologação e produção.
- Contrato raiz e sistema de tarefas.
- Padrão de PR e governança progressiva de CI/CD.
- Proveniência do repositório legado.
- Contexto mínimo e roadmap executável antes do MVP.
- Migração do agente de desenvolvimento para Claude, higiene do repositório e gates de CI (auditoria de 2026-11-23).

## Out of scope
- Migração de dados pessoais.
- Código da aplicação, Vercel ou banco; correções de código da auditoria pertencem ao [KZ-E12](../E12-code-health/README.md).

## Order
| Tarefa | Depende de | Resultado |
| --- | --- | --- |
| KZ-E00-T01 | — | Repositório e branches inicializados |
| KZ-E00-T02 | — | Cancelada: repositório público por decisão |
| KZ-E00-T03 | KZ-E00-T01 | Contrato raiz criado |
| KZ-E00-T04 | KZ-E00-T03 | Roadmap operacional criado |
| KZ-E00-T06 | KZ-E00-T04 | Governança de entrega adaptada |
| KZ-E00-T05 | KZ-E00-T04, KZ-E00-T06 | Origem do legado registrada |
| KZ-E00-T07 | KZ-E03-T05 | Contexto otimizado e dependências saneadas |
| KZ-E00-T08 | KZ-E00-T07 | Documentação consolidada e contexto dirigido do Codex |
| [KZ-E00-T09](T09-standardize-documentation.md) | KZ-E00-T08 | Documentação existente padronizada e verificável por script |
| [KZ-E00-T10](T10-create-local-roadmap-view.md) | KZ-E00-T09 | Roadmap, tarefas e documentos navegáveis numa página local |
| [KZ-E00-T11](T11-apply-design-system-to-roadmap-view.md) | KZ-E00-T10 | Visualização do roadmap com o design system e o logo do Kaizen |
| [KZ-E00-T12](T12-migrate-agent-governance-to-claude.md) | — | Claude como único agente, sem regra exclusiva do Codex |
| [KZ-E00-T13](T13-remove-unused-repository-artifacts.md) | KZ-E00-T12 | Repositório sem artefatos e arquivos sem consumidor |
| [KZ-E00-T14](T14-analyze-documentation-for-claude.md) | KZ-E00-T12 | Plano aprovado de documentação otimizada para Claude |
| [KZ-E00-T15](T15-apply-approved-documentation-reorganization.md) | KZ-E00-T14 | Documentação reorganizada conforme o plano |
| [KZ-E00-T16](T16-strengthen-ci-gates.md) | — | CI remoto com os mesmos gates do `pnpm run ci` |

Status lives only in the project `README.md`.

## Closing criteria
- [x] A exposição pública possui política explícita e padrão restritivo.
- [x] A proveniência aponta para um commit-base imutável do legado privado.
- [x] KZ-E01-T01 está elegível para escolher o snapshot definitivo.
- [ ] KZ-E00-T12 a KZ-E00-T16 estão `DONE` ou `CANCELLED` por decisão registrada (reaberto em 2026-11-23 pela auditoria técnica).
