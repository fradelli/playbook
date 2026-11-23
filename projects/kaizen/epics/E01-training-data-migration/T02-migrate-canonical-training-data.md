---
id: KZ-E01-T02
epic: KZ-E01
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E01-T01]
---

# Migrar dados canônicos de treino

## Objective
Migrar perfil aprovado, agenda aprovada, ponteiro ativo, biblioteca e somente o plano vigente sem alterar IDs ou fatos.

## Inputs
- Snapshot aprovado em KZ-E01-T01.
- Linhas `e01-t02-*` do manifesto.

## Deliverables
- Arquivos canônicos correspondentes e somente o plano apontado por `data/active.json`.
- Linhas de manifesto para cada artefato.

## Subtasks
- [x] Copiar ou transformar conforme manifesto.
- [x] Preservar `null`, `unknowns` aprovados, IDs e versões.
- [x] Ajustar somente caminhos relativos aprovados.
- [x] Registrar hash de origem e destino.
- [x] Não migrar versões anteriores nesta tarefa.

## Validation
- JSONs fazem parse.
- `active_plan_id` coincide com o plano apontado.
- Todos os `exercise_id` existem e são únicos.

## Acceptance criteria
- [x] Nenhuma regra ou dado foi inventado.
- [x] A leitura canônica de treino é reproduzível.

## Result
Cinco artefatos canônicos foram migrados exclusivamente do snapshot `d1acad309e2b81b714d1aa375e9371a310ad6ed0`. As três cópias literais mantiveram o SHA-256; perfil e agenda receberam somente a sanitização aprovada, com hashes de destino registrados. O plano ativo e todos os `exercise_id` foram validados, sem incluir versões ou históricos da KZ-E01-T03.
