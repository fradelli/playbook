---
id: KZ-E01-T05
epic: KZ-E01
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E01-T04]
---

# Migrar schemas

## Objective
Migrar contratos documentais de treino e registrar explicitamente sua cobertura e permissividade.

## Inputs
- `schemas/` do snapshot.
- Dados migrados em KZ-E01-T02 e KZ-E01-T03.

## Deliverables
- `schemas/training-plan.schema.json`
- `schemas/exercise-library.schema.json`
- `schemas/README.md`

## Subtasks
- [x] Copiar os schemas aprovados.
- [x] Verificar os dados cobertos.
- [x] Registrar formatos ainda sem schema.
- [x] Não ampliar contratos sem evidência.

## Validation
- Schemas e dados fazem parse.
- Dados cobertos validam contra o contrato correspondente.

## Acceptance criteria
- [x] Cobertura e lacunas são explícitas.
- [x] Schema não é apresentado como validação clínica ou de produto.

## Result
Os dois schemas Draft 2020-12 foram copiados literalmente e validaram biblioteca, plano v1 e plano v2 com `Test-Json`. O README remove a referência ao script excluído, documenta permissividade, formatos, cobertura e arquivos ainda sem contrato. Unicidade, referências cruzadas e ponteiro ativo foram mantidos como invariantes separadas, sem ampliar os schemas.
