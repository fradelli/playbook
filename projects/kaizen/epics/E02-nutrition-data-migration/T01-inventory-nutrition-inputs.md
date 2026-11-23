---
id: KZ-E02-T01
epic: KZ-E02
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E01-T06]
---

# Inventariar alimentação e unknowns

## Objective
Confirmar quais fontes alimentares existem e quais dados ainda faltam antes de qualquer plano estruturado.

## Inputs
- Arquivos fornecidos pelo usuário.
- Perfil, agenda e carga de treino migrados.

## Deliverables
- `docs/migration/NUTRITION-INPUT-INVENTORY.md`

## Subtasks
- [x] Inventariar dieta prescrita e alimentação praticada.
- [x] Separar fatos, estimativas, hipóteses e decisões profissionais.
- [x] Listar dados mínimos ainda ausentes.
- [x] Identificar fontes que não podem ser versionadas.

## Validation
- Nenhum valor nutricional é inferido como fato.
- Toda ausência aparece em `unknowns` ou pendências.

## Acceptance criteria
- [x] Está claro o que pode ser preservado e o que bloqueia a revisão.

## Result
Uma correção ampliou a descoberta para todas as refs remotas do legado e localizou oito artefatos alimentares no commit privado `138531e4fbca6d744de73274fbb96da39c02bad3`. O inventário registra categorias, tamanhos, hashes, tratamento candidato e exposição padrão sem copiar conteúdo ou revelar caminhos pessoais. Dieta original e alimentação praticada estão disponíveis; `KZ-E02-T02` foi liberada para congelar e preservar a fonte privada.
