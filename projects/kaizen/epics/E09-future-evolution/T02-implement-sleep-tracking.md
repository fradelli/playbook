---
id: KZ-E09-T02
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T01]
---

# Implementar controle de sono

## Objective
Permitir registrar e consultar sono conforme o contrato aprovado na KZ-E09-T01,
sem produzir diagnóstico ou recomendação médica.

## Inputs
- `roadmap/epics/E09-future-evolution/T01-design-sleep-and-general-activities.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `prisma/models/platform.prisma`
- `src/lib/security/workspace.ts`

## Deliverables
- Persistência versionada e protegida pelo workspace fixo.
- Leitura e registro server-side com validação de entrada e concorrência.
- Tela acessível e responsiva para consulta e edição dos dados aprovados.
- Testes de domínio, integração PostgreSQL, componentes e fluxo crítico.

## Subtasks
- [ ] Detalhar a tarefa com os contratos aprovados antes de torná-la `READY`.
- [ ] Atualizar dependências e implementar autenticação antes desta tarefa se a
      KZ-E09-T01 classificar os dados como sensíveis.
- [ ] Preservar datas civis em `America/Sao_Paulo` e timestamps em UTC.
- [ ] Tratar ausência, edição, conflito e falha sem inventar métricas.
- [ ] Manter componentes em pastas próprias e o menor limite Client.

## Validation
- Testar ownership, constraints, timezone, concorrência, acessibilidade e build.

## Acceptance criteria
- [ ] O usuário registra e consulta sono sem que o aplicativo faça inferência clínica.

## Fora de escopo

- Recomendações médicas, detecção de distúrbios ou integração não aprovada na KZ-E09-T01.

## Result
Ainda não concluída.
