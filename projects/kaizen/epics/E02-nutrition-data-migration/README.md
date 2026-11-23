# KZ-E02 — Migração dos dados alimentares

## Expected outcome
Dieta original preservada, revisão documentada e plano alimentar vigente estruturado, versionado e validado, ainda sem aplicação.

## Out of scope
- Diagnóstico, medicamento ou substituição de acompanhamento profissional.
- Código, banco ou UI.
- Dieta dinâmica e contador completo de calorias.

## Order
| Tarefa | Depende de | Resultado |
| --- | --- | --- |
| KZ-E02-T01 | KZ-E01-T06 | Inventário e unknowns |
| KZ-E02-T02 | KZ-E02-T01, Diet provided | Original preservado |
| KZ-E02-T03 | KZ-E02-T02 | Revisão segura |
| KZ-E02-T04 | KZ-E02-T03, Decisions approved | Plano estruturado |
| KZ-E02-T05 | KZ-E02-T04 | Contratos e guia |
| KZ-E02-T06 | KZ-E02-T05 | Fundação validada |

## Closing criteria
- [x] Plano vigente possui proveniência, versão e status.
- [x] Fatos, estimativas e decisões profissionais estão separados.
- [x] Tag `nutrition-foundation-v1` criada após o merge de KZ-E02-T06.
