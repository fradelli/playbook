---
id: KZ-E00-T02
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Tornar o repositório privado

## Objective
Impedir exposição pública dos dados pessoais que serão migrados nos épicos seguintes.

## Inputs
- Configuração de visibilidade de `fradelli/kaizen-app` no GitHub.

## Deliverables
- Repositório com visibilidade `PRIVATE` confirmada.

## Subtasks
- [ ] Alterar a visibilidade no GitHub.
- [ ] Confirmar acessos necessários.
- [ ] Verificar a visibilidade com `gh repo view`.

## Validation
- `gh repo view fradelli/kaizen-app --json isPrivate` retorna `true`.

## Acceptance criteria
- [ ] O repositório não é acessível publicamente.
- [ ] A migração de dados pessoais pode ser desbloqueada.

## Result
Cancelada em 2026-08-31 por decisão do proprietário. O `kaizen-app` permanecerá público para facilitar a governança gratuita de CI/CD e regras no GitHub; a exposição de conteúdo passou a ser controlada por allowlist e classificação por artefato.
