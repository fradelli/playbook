---
id: KZ-E09-T03
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T01]
---

# Implementar registro de atividades gerais

## Objective
Permitir registrar e consultar atividades gerais conforme o contrato aprovado na
KZ-E09-T01, sem duplicar sessões pertencentes ao domínio de treino.

## Inputs
- `roadmap/epics/E09-future-evolution/T01-design-sleep-and-general-activities.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `prisma/models/platform.prisma`
- `src/lib/security/workspace.ts`

## Deliverables
- Persistência e casos de uso protegidos pelo workspace fixo.
- Tela acessível e responsiva para os tipos de atividade aprovados.
- Regras explícitas para data, duração, observações e possível sobreposição.
- Testes de domínio, integração PostgreSQL, componentes e fluxo crítico.

## Subtasks
- [ ] Detalhar a tarefa com os contratos aprovados antes de torná-la `READY`.
- [ ] Atualizar dependências e implementar autenticação antes desta tarefa se a
      KZ-E09-T01 classificar os dados como sensíveis.
- [ ] Impedir duplicação conceitual com treino, mobilidade e descanso.
- [ ] Validar origem, entrada, ownership e concorrência no servidor.
- [ ] Preservar valores ausentes sem defaults inventados.

## Validation
- Testar limites entre domínios, ownership, constraints, acessibilidade e build.

## Acceptance criteria
- [ ] O usuário registra uma atividade aprovada sem alterar treino ou alimentação.

## Fora de escopo

- Agenda composta, notificações ou integração não aprovada na KZ-E09-T01.

## Result
Ainda não concluída.
