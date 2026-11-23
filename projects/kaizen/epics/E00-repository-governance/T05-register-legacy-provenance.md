---
id: KZ-E00-T05
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T04, KZ-E00-T06]
---

# Registrar proveniência do legado

## Objective
Criar o manifesto que liga cada artefato futuro à sua origem verificável.

## Inputs
- Decisão de manter `fradelli/kaizen-app` público.
- Repositório privado `developerlucaslima/personal-performance`.
- Commit-base remoto observado; o snapshot definitivo será escolhido em KZ-E01-T01.

## Deliverables
- `docs/migration/MIGRATION-MANIFEST.md`
- `docs/migration/SOURCE-REPOSITORIES.md`
- `docs/decisions/PUBLIC-REPOSITORY-AND-DATA-POLICY.md`

## Subtasks
- [x] Registrar identificadores, remotes, branches e commits sem caminhos locais absolutos.
- [x] Definir tratamentos `COPY`, `TRANSFORM`, `SUMMARIZE` e `SKIP`.
- [x] Definir exposições `PUBLIC`, `REVIEW_REQUIRED` e `DO_NOT_PUBLISH`.
- [x] Definir uso de SHA-256 para origem e destino.
- [x] Registrar que o legado privado não será apagado.

## Validation
- Todo campo do manifesto tem definição inequívoca.
- Nenhum dado pessoal é copiado nesta tarefa.

## Acceptance criteria
- [x] O manifesto pode receber uma linha por artefato sem nova decisão estrutural.
- [x] A origem pode ser reproduzida por repositório, commit e caminho.
- [x] Nenhum conteúdo do legado foi copiado nesta tarefa.

## Result
Concluída em 2026-08-31. A fonte privada, o commit-base remoto, a política pública, os tratamentos, as classificações de exposição e as regras de integridade foram registrados sem copiar conteúdo do legado.
