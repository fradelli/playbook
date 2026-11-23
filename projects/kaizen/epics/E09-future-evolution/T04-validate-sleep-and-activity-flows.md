---
id: KZ-E09-T04
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T02, KZ-E09-T03]
---

# Validar jornadas de sono e atividades

## Objective
Comprovar que sono e atividades gerais funcionam de ponta a ponta, preservam
ownership e não conflitam com treino ou alimentação.

## Inputs
- `roadmap/epics/E09-future-evolution/T02-implement-sleep-tracking.md`
- `roadmap/epics/E09-future-evolution/T03-implement-general-activity-tracking.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `.github/workflows/ci.yml`

## Deliverables
- Testes automatizados dos fluxos críticos e de falhas seguras.
- Evidência de responsividade, acessibilidade, timezone e isolamento do workspace.
- Registro de limitações e unknowns restantes antes do i18n.

## Subtasks
- [ ] Validar criação, consulta, edição, conflito e dados ausentes.
- [ ] Confirmar que os quatro domínios não sobrescrevem registros entre si.
- [ ] Executar testes relacionais em PostgreSQL real e build de produção.
- [ ] Validar as telas em viewport móvel e desktop.

## Validation
- Executar os gates completos e cenários manuais definidos no planejamento.

## Acceptance criteria
- [ ] Sono e atividades gerais estão utilizáveis antes do início da migração i18n.

## Fora de escopo

- Traduzir interface, conteúdo ou documentação.

## Result
Ainda não concluída.
