---
id: KZ-E00-T09
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T08]
---

# Padronizar a documentação existente

## Objective
Aplicar o padrão documental a todas as tarefas e documentos existentes sem perder conteúdo, deixando as fontes prontas para alimentar uma navegação visual do roadmap e mantendo o padrão verificável por script.

## Inputs
- `docs/DOCUMENTATION-STANDARD.md` — tipos, destino e cabeçalho comum.
- `roadmap/AGENTS.md` — fontes de verdade, estados e validação.
- `roadmap/templates/TASK-TEMPLATE.md` — seções obrigatórias da tarefa.
- `roadmap/README.md` — índice de estados e dependências.
- `scripts/validate-governance.mjs` — leitura existente das tarefas; somente referência.

## Deliverables
- Seções do modelo presentes em todas as tarefas de `roadmap/epics/`.
- Campo `external` no frontmatter para condições que não são tarefas.
- Tabelas de ordem dos épicos alinhadas ao `depends_on`.
- Cabeçalho comum em todos os documentos de `docs/`, exceto índices, instruções, modelos e diário.
- `scripts/validate-documentation.mjs` e `scripts/verify-doc-preservation.mjs`, com testes.
- [Evidência da padronização](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/evidence/documentation/E00-T09-DOCUMENTATION-STANDARDIZATION.md).

## Subtasks
- [x] Completar as seções ausentes das tarefas sem renomear nem mover as existentes.
- [x] Registrar as condições externas de KZ-E02-T02 e KZ-E02-T04 no frontmatter.
- [x] Alinhar as tabelas de KZ-E04, KZ-E06, KZ-E07, KZ-E09 e KZ-E10 ao `depends_on`.
- [x] Acrescentar o cabeçalho comum aos 43 documentos que não o tinham.
- [x] Criar o validador documental e o verificador de preservação.
- [x] Atualizar padrão, modelo de tarefa, catálogo, roadmap e changelog.

## Validation
- `pnpm docs:check` sem erros.
- `pnpm docs:preservation` contra `66326d6` sem linhas ausentes além das oito substituições declaradas.
- `pnpm test:ci-scripts` aprovado.
- `git diff --check` sem erros.

## Acceptance criteria
- [x] Nenhuma linha de Markdown da base `66326d6` foi perdida. As oito substituições declaradas só acrescentam texto: IDs em três linhas de tabela e a ampliação de cinco linhas de regra, que mantêm o texto original.
- [x] Toda tarefa tem as sete seções do modelo; o texto ausente na origem está marcado como não registrado, com a seção equivalente quando ela existe.
- [x] Dependências iguais no frontmatter, no índice do roadmap e na tabela do épico.
- [x] Todo documento de conteúdo em `docs/` declara tipo, área e tarefas relacionadas, sem vínculo inventado.
- [x] O padrão é verificado por script, com testes.

## Fora de escopo

- Renomear seções, mover arquivos ou reescrever o corpo de documentos e tarefas.
- Alterar estados, prioridade ou a tarefa selecionada.
- Criar tarefas para as lacunas apontadas em `docs/plans/RECONCILIATION.md`.
- Construir a central visual.

## Result
Padronização aditiva aplicada sobre `66326d6`. Detalhes, números e pendências na [evidência](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/evidence/documentation/E00-T09-DOCUMENTATION-STANDARDIZATION.md).
