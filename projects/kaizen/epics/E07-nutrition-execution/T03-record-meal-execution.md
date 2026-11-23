---
id: KZ-E07-T03
epic: KZ-E07
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E07-T02]
---

# Registrar escolhas, cumprimento e comentários

## Objective
Apresentar as opções aprovadas e registrar o resultado real de cada refeição.

## Inputs
- `docs/plans/nutrition/E07.md`
- `docs/product/P0.md`
- `data/nutrition/active.json`
- `src/lib/security/authorization.ts`
- `src/features/nutrition/`

## Deliverables
- Componentes e Server Actions de refeição com estado e revisão.

## Subtasks
- [ ] Diferenciar item principal, complemento e alternativa.
- [ ] Preservar quantidades e unidades originais.
- [ ] Evitar converter alternativa em equivalência clínica.
- [ ] Registrar `followed_plan`, `followed_different`, `skipped` e comentário.
- [ ] Exigir descrição para refeição diferente e limpar campos incompatíveis.
- [ ] Preservar rascunho em erro e detectar concorrência.

## Validation
- Conferir opções contra o plano público e transições contra as regras do P0.

## Acceptance criteria
- [ ] Recarregar restaura o registro sem alterar o plano ou expor outro workspace.

## Result
Ainda não concluída.
