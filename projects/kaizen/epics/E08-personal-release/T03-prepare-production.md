---
id: KZ-E08-T03
epic: KZ-E08
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E08-T02, KZ-E05-T05]
---

# Preparar produção

## Objective
Preparar banco, variáveis, branch e configuração de produção sem liberar o MVP.

## Inputs
- `docs/plans/release/E08.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`
- `docs/operations/BACKUP-AND-RESTORE.md`
- `.github/workflows/`
- `prisma/migrations/`
- Evidência aprovada do preview e de KZ-E08-T02.

## Deliverables
- Ambiente de produção configurado e checklist de release.

## Subtasks
- [ ] Associar `master` à produção.
- [ ] Criar banco e segredos exclusivos de produção.
- [ ] Aplicar migrations e importação de forma controlada.
- [ ] Executar CI no SHA promovido e exigir evidência do preview.
- [ ] Usar Vercel CLI fixada e deploy prebuilt.
- [ ] Confirmar URL gerada, logs, backup externo e limites operacionais.

## Validation
- Validar configuração sem expor valores secretos.

## Acceptance criteria
- [ ] Produção está pronta para promoção reproduzível.

## Result
Ainda não concluída.
