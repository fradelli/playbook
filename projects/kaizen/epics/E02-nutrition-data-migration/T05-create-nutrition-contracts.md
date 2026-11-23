---
id: KZ-E02-T05
epic: KZ-E02
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E02-T04]
---

# Criar ponteiro, schema e guia

## Objective
Tornar o plano alimentar vigente localizável, validável e compreensível sem transformá-lo em código.

## Inputs
- Plano estruturado de KZ-E02-T04.

## Deliverables
- `data/nutrition/active.json`
- `schemas/nutrition-plan.schema.json`
- `docs/guides/NUTRITION.md`

## Subtasks
- [x] Criar ponteiro inequívoco para versão vigente.
- [x] Criar contrato mínimo e permissivo.
- [x] Criar guia derivado com proveniência.
- [x] Documentar limites e atualização.

## Validation
- Ponteiro resolve e ID coincide.
- Plano valida contra o schema.
- Guia não diverge dos dados.

## Acceptance criteria
- [x] Consumidor read-only consegue localizar e interpretar o plano.

## Result
Criados o ponteiro ativo, o JSON Schema Draft 2020-12 e o guia humano derivado. O ponteiro resolve para `nutrition_2026_09_personal_v1`, o plano valida estruturalmente e o guia declara o JSON como única fonte canônica. KZ-E02-T06 foi liberada para o gate final.
