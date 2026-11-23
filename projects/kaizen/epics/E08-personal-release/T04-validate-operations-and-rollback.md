---
id: KZ-E08-T04
epic: KZ-E08
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E08-T03]
---

# Validar operação e rollback

## Objective
Comprovar monitoramento mínimo, backup, restauração e retorno à versão anterior.

## Inputs
- `docs/plans/release/E08.md`
- `docs/decisions/PRIVACY-AND-OPERATIONS.md`
- `docs/operations/BACKUP-AND-RESTORE.md`
- Ambiente de produção preparado em KZ-E08-T03.

## Deliverables
- Runbook curto e evidências dos testes operacionais.

## Subtasks
- [ ] Definir sinais mínimos de saúde e falha.
- [ ] Testar backup externo e restauração em branch Neon isolada.
- [ ] Simular rollback da aplicação.
- [ ] Registrar responsáveis e sequência de recuperação.

## Validation
- Executar o runbook sem depender de conhecimento não documentado.

## Acceptance criteria
- [ ] Uma falha pode ser detectada e revertida com passos claros.

## Result
Ainda não concluída.
