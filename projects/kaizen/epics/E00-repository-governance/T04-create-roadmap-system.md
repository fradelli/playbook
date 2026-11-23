---
id: KZ-E00-T04
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T03]
---

# Criar sistema de roadmap

## Objective
Permitir que humanos e Codex encontrem status, tarefa ativa e detalhes sem carregar todo o projeto.

## Inputs
- Convenções de `AGENTS.md`.
- Épicos e tarefas aprovados.

## Deliverables
- `roadmap/README.md`
- `roadmap/ACTIVE.md`
- `roadmap/templates/EPIC-TEMPLATE.md`
- `roadmap/templates/TASK-TEMPLATE.md`
- Pastas e arquivos dos épicos KZ-E00–KZ-E09.

## Subtasks
- [x] Consolidar todos os status no arquivo pai.
- [x] Criar ponteiro de tarefa ativa.
- [x] Manter subtarefas dentro da tarefa.
- [x] Definir dependências e critérios de aceite.

## Validation
- Todos os IDs são únicos.
- Cada link do índice resolve para um arquivo existente.
- Existe no máximo uma tarefa `IN_PROGRESS`.

## Acceptance criteria
- [x] O progresso global é visível sem abrir tarefas individuais.
- [x] A leitura mínima está documentada.

## Result
Concluída em 2026-08-30. O status canônico está em `roadmap/README.md`.
