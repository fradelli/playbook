---
id: KZ-E02-T06
epic: KZ-E02
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E02-T05]
---

# Validar fundação alimentar

## Objective
Executar o gate final da migração alimentar antes de produto e arquitetura.

## Inputs
- Todos os entregáveis de KZ-E02.
- Manifesto atualizado.

## Deliverables
- `docs/migration/NUTRITION-VALIDATION-REPORT.md`
- Tag `nutrition-foundation-v1` após aprovação.

## Subtasks
- [x] Validar JSON, schema, ponteiros, links e proveniência.
- [x] Confirmar separação entre original, revisão e plano vigente.
- [x] Confirmar ausência de diagnóstico e dados inventados.
- [x] Revisar privacidade do conteúdo versionado.

## Validation
- Relatório lista comandos, resultados e limitações.

## Acceptance criteria
- [x] Não há falha aberta que impeça leitura do plano.
- [x] KZ-E03-T01 pode iniciar.

## Result
Gate concluído sem falhas bloqueantes. O relatório valida 13 artefatos KZ-E02 na origem, 3 derivados públicos, contratos, ponteiros, referências, links e privacidade; KZ-E03-T01 foi liberada. A tag `nutrition-foundation-v1` é criada no commit mesclado em `developer` e verificada contra o remote.
