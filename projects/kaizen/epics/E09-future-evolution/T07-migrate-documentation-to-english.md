---
id: KZ-E09-T07
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T05]
---

# Migrar documentação e entrega para inglês

## Objective
Tornar inglês o idioma operacional do repositório para programadores, agentes e
revisores, sem reescrever evidência histórica imutável.

## Inputs
- `roadmap/epics/E09-future-evolution/T05-design-i18n-and-english-policy.md`
- `AGENTS.md`
- `README.md`
- `.github/pull_request_template.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `roadmap/README.md`
- `CHANGELOG.md`

## Deliverables
- Instruções, documentação ativa, roadmap e templates de entrega em inglês.
- Mensagens de CLI, testes e validadores voltadas ao programador em inglês.
- Regra automatizada proporcional para evitar nova documentação em português.
- Política explícita para preservar commits, PRs fechadas e migrations históricas.

## Subtasks
- [ ] Inventariar documentação ativa, histórica e gerada antes de traduzir.
- [ ] Traduzir fontes normativas antes dos documentos dependentes.
- [ ] Atualizar template e convenções de título/descrição de PR.
- [ ] Traduzir descrições de testes e mensagens operacionais mantidas no código.
- [ ] Criar allowlist pequena para nomes próprios e conteúdo preservado.

## Validation
- Validar links, IDs, dependências, exemplos, comandos e ausência de instruções contraditórias.

## Acceptance criteria
- [ ] Um programador que lê inglês consegue operar o repositório sem depender de documentação em português.
- [ ] Novas PRs e documentos seguem inglês por padrão.
- [ ] Evidência histórica preservada está identificada e não foi reescrita.

## Fora de escopo

- Editar descrições de PRs fechadas, mensagens de commits existentes ou migrations aplicadas.

## Result
Ainda não concluída.
