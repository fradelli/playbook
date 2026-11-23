---
id: KZ-E08-T05
epic: KZ-E08
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E08-T04]
---

# Publicar MVP pessoal

## Objective
Promover a versão validada para produção e encerrar o MVP pessoal de Dieta e Treino.

## Inputs
- `docs/plans/release/E08.md`
- `docs/decisions/PUBLIC-SINGLE-WORKSPACE-MODE.md`
- `.github/PULL_REQUEST_TEMPLATE/release-promotion.md`
- Runbook e evidências aprovados em KZ-E08-T04.

## Deliverables
- Produção disponível na URL gerada, com exposição pública aceita e release documentada.

## Subtasks
- [ ] Promover mudanças de `staging` para `master` por PR.
- [ ] Executar migrations e importação aprovadas.
- [ ] Rodar smoke público de leitura e mutação no workspace fixo.
- [ ] Registrar versão, data, limitações e próximo marco.

## Validation
- Confirmar conteúdo e operações públicas no workspace fixo em treino e alimentação.

## Acceptance criteria
- [ ] MVP pessoal funciona conforme o risco público documentado e possui caminho de rollback.

## Result
Ainda não concluída.
