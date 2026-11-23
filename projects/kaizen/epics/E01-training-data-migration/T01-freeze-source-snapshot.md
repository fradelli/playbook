---
id: KZ-E01-T01
epic: KZ-E01
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T05]
---

# Congelar snapshot de origem

## Objective
Escolher um commit limpo e imutável do legado como única base da migração de treino.

## Inputs
- Fonte lógica `personal-performance` registrada em `docs/migration/SOURCE-REPOSITORIES.md`.
- Manifesto criado em KZ-E00-T05.

## Deliverables
- Snapshot registrado em `docs/migration/SOURCE-REPOSITORIES.md`.
- Inventário inicial no manifesto.

## Subtasks
- [x] Verificar branch, commit, remote e worktree.
- [x] Consolidar ou excluir explicitamente alterações não rastreadas da origem.
- [x] Registrar o commit e a tag aprovados.
- [x] Inventariar arquivos candidatos sem copiá-los.

## Validation
- O commit registrado existe e pode ser lido.
- O manifesto não referencia estado ambíguo de worktree.

## Acceptance criteria
- [x] Existe uma única referência de origem para KZ-E01.
- [x] Todo candidato tem hash, tratamento e exposição.
- [x] Nenhum conteúdo do legado foi criado no destino.

## Result
Concluída em 2026-08-31. O commit privado `d1acad309e2b81b714d1aa375e9371a310ad6ed0`, publicado na tag `kaizen-training-source-v1`, é a única origem de KZ-E01. O manifesto contém 23 artefatos calculados dos blobs desse commit e nenhuma cópia no Kaizen.
