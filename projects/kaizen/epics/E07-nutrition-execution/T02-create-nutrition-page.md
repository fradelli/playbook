---
id: KZ-E07-T02
epic: KZ-E07
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T04, KZ-E07-T01]
---

# Criar página de dieta do dia

## Objective
Exibir a estrutura da data, permitir escolher o tipo do dia e navegar com boa leitura em celular.

## Inputs
- `docs/plans/nutrition/E07.md`
- `docs/product/P0.md`
- `src/features/nutrition/application/nutrition-dto.ts`
- `src/app/dieta/page.tsx`

## Deliverables
- Página server-rendered da dieta do dia com navegação por data.

## Subtasks
- [ ] Organizar refeições na ordem prescrita.
- [ ] Implementar data anterior, Hoje e data seguinte em `America/Sao_Paulo`.
- [ ] Exibir horários somente quando confirmados.
- [ ] Solicitar tipo de dia quando ausente sem inventar faixa ou módulos.
- [ ] Indicar dados ausentes sem estimá-los.
- [ ] Implementar estados vazio e de erro.

## Validation
- Testar responsividade, semântica e navegação.

## Acceptance criteria
- [ ] O usuário entende e atribui a estrutura do dia em uma única página.

## Result
Ainda não concluída.
