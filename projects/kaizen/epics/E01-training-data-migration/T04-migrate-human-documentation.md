---
id: KZ-E01-T04
epic: KZ-E01
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E01-T03]
---

# Migrar documentação humana

## Objective
Levar ao Kaizen somente guias, evidências e templates úteis, removendo caminhos e decisões obsoletas.

## Inputs
- Guia de treino, evidências, templates e documentação de atualização do snapshot.

## Deliverables
- `docs/guides/`
- `docs/evidence/`
- `templates/`
- Linhas transformadas no manifesto.

## Subtasks
- [x] Classificar cada documento como copiar, transformar, resumir ou omitir.
- [x] Atualizar links e nomes do projeto.
- [x] Remover orientação Next + Nest como decisão vigente.
- [x] Preservar limites de segurança e proveniência.

## Validation
- Links relativos resolvem.
- Não há caminho absoluto antigo usado como instrução vigente.

## Acceptance criteria
- [x] Documentação corresponde aos dados migrados.
- [x] Auditorias e prompts não viraram fonte canônica por acidente.

## Result
Cinco documentos humanos e três templates vazios foram derivados exclusivamente do snapshot aprovado e dos dados já migrados. Os guias subordinam prescrição aos JSONs canônicos; agenda, contexto pessoal, caminhos antigos e duplicações extensas foram removidos. Cada template exige preenchimento privado e proíbe versionar a instância preenchida.
