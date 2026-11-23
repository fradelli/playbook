# Kaizen roadmap

Canonical status of every `KZ-` epic and task. Task files do not repeat the status.

Read [CLAUDE.md](../../CLAUDE.md) first, then [ACTIVE.md](ACTIVE.md). [Overview by area](OVERVIEW.md).

Migrated on 2026-11-23 by [PB-E01-T02](../playbook/epics/E01-project-migration/T02-migrate-kaizen-roadmap.md) from `fradelli/nextjs-kaizen-app: roadmap/`, translated from Portuguese. Statuses are kept as in the source. Plans by subject stay in the Kaizen repository (`docs/plans/`); they complement tasks and never hold status.

## States

`PLANNED` · `READY` · `IN_PROGRESS` · `BLOCKED` · `DONE` · `CANCELLED`

## Epics

| ID | Status | Epic | Outcome |
| --- | --- | --- | --- |
| KZ-E00 | READY | [Governança do repositório](epics/E00-repository-governance/README.md) | Repositório público governado, contexto otimizado para Claude e legado rastreável |
| KZ-E01 | DONE | [Migração dos dados de treino](epics/E01-training-data-migration/README.md) | Fundação de treino migrada e validada |
| KZ-E02 | DONE | [Migração dos dados alimentares](epics/E02-nutrition-data-migration/README.md) | Plano alimentar revisado, versionado e validado |
| KZ-E03 | DONE | [Produto e arquitetura](epics/E03-product-and-architecture/README.md) | P0, arquitetura e guia de implementação aprovados |
| KZ-E04 | DONE | [Fundação Next.js](epics/E04-nextjs-foundation/README.md) | Aplicação mínima com gates e Design System compartilhado |
| KZ-E05 | DONE | [Banco, importação e acesso](epics/E05-database-and-import/README.md) | Persistência e importação íntegras; acesso adiado por decisão explícita |
| KZ-E06 | IN_PROGRESS | [Execução de treino](epics/E06-training-execution/README.md) | Consulta e registro utilizáveis de treino |
| KZ-E07 | PLANNED | [Execução de alimentação](epics/E07-nutrition-execution/README.md) | Consulta e registro utilizáveis de alimentação |
| KZ-E08 | PLANNED | [Publicação pessoal](epics/E08-personal-release/README.md) | Local, preview e produção verificados |
| KZ-E09 | PLANNED | [Evolução futura](epics/E09-future-evolution/README.md) | Backlog posterior ao MVP pessoal |
| KZ-E10 | IN_PROGRESS | [Alinhamento visual com o portfólio](epics/E10-portfolio-visual-alignment/README.md) | Base histórica entregue; conclusão da adoção Mira em andamento |
| KZ-E11 | PLANNED | [Evolução da agenda](epics/E11-schedule-evolution/README.md) | Validar base integrada e evoluir interações preservando histórico |
| KZ-E12 | PLANNED | [Saúde técnica do código](epics/E12-code-health/README.md) | Código alinhado à arquitetura após a auditoria técnica |

## Tasks

| ID | Status | Task | Depends on |
| --- | --- | --- | --- |
| KZ-E00-T01 | DONE | [Inicializar repositório e branches](epics/E00-repository-governance/T01-initialize-repository-and-branches.md) | — |
| KZ-E00-T02 | CANCELLED | [Tornar o repositório privado](epics/E00-repository-governance/T02-make-repository-private.md) | — |
| KZ-E00-T03 | DONE | [Criar contrato raiz](epics/E00-repository-governance/T03-create-root-contract.md) | KZ-E00-T01 |
| KZ-E00-T04 | DONE | [Criar sistema de roadmap](epics/E00-repository-governance/T04-create-roadmap-system.md) | KZ-E00-T03 |
| KZ-E00-T05 | DONE | [Registrar proveniência do legado](epics/E00-repository-governance/T05-register-legacy-provenance.md) | KZ-E00-T04, KZ-E00-T06 |
| KZ-E00-T06 | DONE | [Adaptar governança de PR e CI/CD](epics/E00-repository-governance/T06-adapt-delivery-governance.md) | KZ-E00-T04 |
| KZ-E00-T07 | DONE | [Otimizar contexto e sanear dependências pré-MVP](epics/E00-repository-governance/T07-optimize-agent-context.md) | KZ-E03-T05 |
| KZ-E00-T08 | DONE | [Consolidar documentação e contexto do Codex](epics/E00-repository-governance/T08-consolidate-documentation.md) | KZ-E00-T07 |
| KZ-E00-T09 | DONE | [Padronizar a documentação existente](epics/E00-repository-governance/T09-standardize-documentation.md) | KZ-E00-T08 |
| KZ-E00-T10 | DONE | [Criar a visualização local do roadmap](epics/E00-repository-governance/T10-create-local-roadmap-view.md) | KZ-E00-T09 |
| KZ-E00-T11 | DONE | [Aplicar o design system à visualização do roadmap](epics/E00-repository-governance/T11-apply-design-system-to-roadmap-view.md) | KZ-E00-T10 |
| KZ-E00-T12 | DONE | [Migrar a governança do agente de Codex para Claude](epics/E00-repository-governance/T12-migrate-agent-governance-to-claude.md) | — |
| KZ-E00-T13 | READY | [Remover artefatos e arquivos sem uso do repositório](epics/E00-repository-governance/T13-remove-unused-repository-artifacts.md) | KZ-E00-T12 |
| KZ-E00-T14 | READY | [Analisar a documentação para uso pelo Claude](epics/E00-repository-governance/T14-analyze-documentation-for-claude.md) | KZ-E00-T12 |
| KZ-E00-T15 | PLANNED | [Aplicar a reorganização documental aprovada](epics/E00-repository-governance/T15-apply-approved-documentation-reorganization.md) | KZ-E00-T14 |
| KZ-E00-T16 | DONE | [Fortalecer os gates de CI](epics/E00-repository-governance/T16-strengthen-ci-gates.md) | — |
| KZ-E01-T01 | DONE | [Congelar snapshot de origem](epics/E01-training-data-migration/T01-freeze-source-snapshot.md) | KZ-E00-T05 |
| KZ-E01-T02 | DONE | [Migrar dados canônicos de treino](epics/E01-training-data-migration/T02-migrate-canonical-training-data.md) | KZ-E01-T01 |
| KZ-E01-T03 | DONE | [Migrar histórico de treino](epics/E01-training-data-migration/T03-migrate-training-history.md) | KZ-E01-T02 |
| KZ-E01-T04 | DONE | [Migrar documentação humana](epics/E01-training-data-migration/T04-migrate-human-documentation.md) | KZ-E01-T03 |
| KZ-E01-T05 | DONE | [Migrar schemas](epics/E01-training-data-migration/T05-migrate-schemas.md) | KZ-E01-T04 |
| KZ-E01-T06 | DONE | [Validar fundação de treino](epics/E01-training-data-migration/T06-validate-training-foundation.md) | KZ-E01-T05 |
| KZ-E02-T01 | DONE | [Inventariar alimentação e unknowns](epics/E02-nutrition-data-migration/T01-inventory-nutrition-inputs.md) | KZ-E01-T06 |
| KZ-E02-T02 | DONE | [Preservar dieta original](epics/E02-nutrition-data-migration/T02-preserve-original-diet.md) | KZ-E02-T01, Diet provided |
| KZ-E02-T03 | DONE | [Revisar plano alimentar](epics/E02-nutrition-data-migration/T03-review-nutrition-plan.md) | KZ-E02-T02 |
| KZ-E02-T04 | DONE | [Estruturar plano alimentar](epics/E02-nutrition-data-migration/T04-structure-nutrition-plan.md) | KZ-E02-T03, Decisions approved |
| KZ-E02-T05 | DONE | [Criar ponteiro, schema e guia](epics/E02-nutrition-data-migration/T05-create-nutrition-contracts.md) | KZ-E02-T04 |
| KZ-E02-T06 | DONE | [Validar fundação alimentar](epics/E02-nutrition-data-migration/T06-validate-nutrition-foundation.md) | KZ-E02-T05 |
| KZ-E03-T01 | DONE | [Definir jornadas do P0](epics/E03-product-and-architecture/T01-define-p0-journeys.md) | KZ-E01-T06, KZ-E02-T06 |
| KZ-E03-T02 | DONE | [Definir transição da fonte de verdade](epics/E03-product-and-architecture/T02-define-source-of-truth-transition.md) | KZ-E03-T01 |
| KZ-E03-T03 | DONE | [Definir privacidade e operação](epics/E03-product-and-architecture/T03-define-privacy-and-operations.md) | KZ-E03-T01 |
| KZ-E03-T04 | DONE | [Definir arquitetura](epics/E03-product-and-architecture/T04-define-target-architecture.md) | KZ-E03-T02, KZ-E03-T03 |
| KZ-E03-T05 | DONE | [Aprovar guia de implementação](epics/E03-product-and-architecture/T05-approve-implementation-guide.md) | KZ-E03-T04 |
| KZ-E04-T01 | DONE | [Criar aplicação Next.js](epics/E04-nextjs-foundation/T01-scaffold-nextjs.md) | KZ-E03-T05, KZ-E00-T07 |
| KZ-E04-T02 | DONE | [Configurar qualidade estática](epics/E04-nextjs-foundation/T02-configure-static-quality.md) | KZ-E04-T01 |
| KZ-E04-T03 | DONE | [Criar fronteira server-only](epics/E04-nextjs-foundation/T03-create-server-only-boundary.md) | KZ-E04-T02 |
| KZ-E04-T04 | DONE | [Criar shell acessível](epics/E04-nextjs-foundation/T04-create-accessible-shell.md) | KZ-E04-T08 |
| KZ-E04-T05 | DONE | [Configurar CI mínimo](epics/E04-nextjs-foundation/T05-configure-minimal-ci.md) | KZ-E04-T02, KZ-E04-T03, KZ-E04-T06 |
| KZ-E04-T06 | DONE | [Registrar adoção do Design System compartilhado](epics/E04-nextjs-foundation/T06-adopt-shared-design-system-decision.md) | KZ-E04-T02 |
| KZ-E04-T07 | DONE | [Validar prontidão técnica para o Design System](epics/E04-nextjs-foundation/T07-validate-design-system-readiness.md) | KZ-E04-T05, KZ-E04-T06 |
| KZ-E04-T08 | DONE | [Integrar Design System versionado](epics/E04-nextjs-foundation/T08-integrate-versioned-design-system.md) | KZ-E04-T07 |
| KZ-E04-T09 | DONE | [Padronizar estrutura das páginas React](epics/E04-nextjs-foundation/T09-standardize-react-page-structure.md) | KZ-E04-T04 |
| KZ-E05-T01 | DONE | [Modelar treino e alimentação](epics/E05-database-and-import/T01-design-relational-model.md) | KZ-E03-T05 |
| KZ-E05-T02 | DONE | [Configurar banco e migrations](epics/E05-database-and-import/T02-configure-database-and-migrations.md) | KZ-E04-T03, KZ-E05-T01 |
| KZ-E05-T03 | DONE | [Criar importação idempotente](epics/E05-database-and-import/T03-create-idempotent-import.md) | KZ-E05-T02 |
| KZ-E05-T04 | DONE | [Testar integridade persistida](epics/E05-database-and-import/T04-test-persisted-integrity.md) | KZ-E05-T03 |
| KZ-E05-T05 | DONE | [Validar backup e restauração](epics/E05-database-and-import/T05-validate-backup-and-restore.md) | KZ-E05-T04 |
| KZ-E05-T06 | CANCELLED | [Implementar acesso pessoal](epics/E05-database-and-import/T06-implement-personal-access.md) | KZ-E05-T05 |
| KZ-E05-T07 | DONE | [Aprimorar semântica e fronteiras do código](epics/E05-database-and-import/T07-refine-code-semantics.md) | KZ-E05-T04 |
| KZ-E05-T08 | DONE | [Corrigir vulnerabilidades de dependências](epics/E05-database-and-import/T08-remediate-dependency-vulnerabilities.md) | KZ-E05-T02 |
| KZ-E06-T01 | DONE | [Projetar treino e execução do dia](epics/E06-training-execution/T01-project-active-training-plan.md) | KZ-E05-T05 |
| KZ-E06-T02 | DONE | [Criar página de treino do dia](epics/E06-training-execution/T02-create-daily-training-page.md) | KZ-E04-T04, KZ-E06-T01 |
| KZ-E06-T03 | DONE | [Registrar preparação, séries e comentários](epics/E06-training-execution/T03-record-training-execution.md) | KZ-E06-T02 |
| KZ-E06-T04 | READY | [Exibir proveniência e histórico](epics/E06-training-execution/T04-show-training-provenance.md) | KZ-E06-T03 |
| KZ-E06-T05 | PLANNED | [Validar fluxo de treino](epics/E06-training-execution/T05-validate-training-flow.md) | KZ-E06-T04 |
| KZ-E06-T06 | PLANNED | [Prescrever carga alvo por exercício e por série](epics/E06-training-execution/T06-prescribe-target-load.md) | KZ-E06-T03 |
| KZ-E06-T07 | CANCELLED | [Mostrar a última execução de cada série](epics/E06-training-execution/T07-show-previous-set-performance.md) | KZ-E06-T03 |
| KZ-E06-T08 | CANCELLED | [Exigir medidas aplicáveis antes de avançar a série](epics/E06-training-execution/T08-require-applicable-fields-before-next-set.md) | KZ-E06-T03 |
| KZ-E06-T09 | PLANNED | [Projetar a experiência do contador de descanso](epics/E06-training-execution/T09-design-rest-timer-experience.md) | KZ-E06-T03 |
| KZ-E06-T10 | PLANNED | [Implementar o contador de descanso aprovado](epics/E06-training-execution/T10-implement-rest-timer.md) | KZ-E06-T09 |
| KZ-E06-T11 | DONE | [Revisar o ciclo de vida do plano diário](epics/E06-training-execution/T11-review-daily-plan-lifecycle.md) | KZ-E06-T03 |
| KZ-E06-T12 | DONE | [Refinar edição de atividades do dia](epics/E06-training-execution/T12-refine-daily-activity-editing.md) | KZ-E06-T11 |
| KZ-E06-T13 | PLANNED | [Reconciliar atividades futuras ao ativar outro plano](epics/E06-training-execution/T13-reconcile-future-activities-on-plan-change.md) | KZ-E06-T11 |
| KZ-E06-T14 | BLOCKED | [Mover navegação principal para baixo no mobile](epics/E06-training-execution/T14-add-mobile-bottom-navigation.md) | KZ-E04-T04 |
| KZ-E06-T15 | DONE | [Generalizar a programação semanal de atividades](epics/E06-training-execution/T15-generalize-weekly-training-schedule.md) | KZ-E06-T11 |
| KZ-E06-T16 | DONE | [Validar e importar a nova programação de treino](epics/E06-training-execution/T16-import-new-training-program.md) | KZ-E06-T15 |
| KZ-E06-T17 | DONE | [Preparar reinício controlado dos dados de treino](epics/E06-training-execution/T17-prepare-training-data-fresh-start.md) | KZ-E06-T11 |
| KZ-E06-T18 | PLANNED | [Guiar a execução dos blocos combinados](epics/E06-training-execution/T18-guide-combined-exercise-blocks.md) | KZ-E06-T16 |
| KZ-E06-T19 | DONE | [Preencher automaticamente o fim planejado do treino](epics/E06-training-execution/T19-autofill-planned-workout-end.md) | KZ-E06-T12 |
| KZ-E06-T20 | CANCELLED | [Remover treino específico das opções de inclusão](epics/E06-training-execution/T20-simplify-activity-type-options.md) | KZ-E06-T12 |
| KZ-E06-T21 | PLANNED | [Projetar importação externa de planos de treino](epics/E06-training-execution/T21-design-external-training-plan-import.md) | KZ-E06-T16 |
| KZ-E06-T22 | DONE | [Permitir organizar a agenda futura sem iniciar treinos](epics/E06-training-execution/T22-allow-future-agenda-editing.md) | KZ-E06-T12 |
| KZ-E06-T23 | READY | [Registrar futevôlei e atividades externas retrospectivamente](epics/E06-training-execution/T23-record-external-activities-retrospectively.md) | KZ-E06-T12 |
| KZ-E06-T24 | DONE | [Escolher aquecimento e remarcar atividades não iniciadas](epics/E06-training-execution/T24-select-preparation-and-reschedule-activities.md) | KZ-E06-T12, KZ-E06-T19 |
| KZ-E06-T25 | DONE | [Modais de inclusão e edição de atividades com rascunho local](epics/E06-training-execution/T25-activity-editor-modals-and-drafts.md) | KZ-E06-T24 |
| KZ-E06-T26 | DONE | [Execução independente de séries e histórico](epics/E06-training-execution/T26-set-execution.md) | KZ-E06-T03, KZ-E09-T09 |
| KZ-E07-T01 | PLANNED | [Projetar dieta e execução do dia](epics/E07-nutrition-execution/T01-project-active-nutrition-plan.md) | KZ-E05-T05 |
| KZ-E07-T02 | PLANNED | [Criar página de dieta do dia](epics/E07-nutrition-execution/T02-create-nutrition-page.md) | KZ-E04-T04, KZ-E07-T01 |
| KZ-E07-T03 | PLANNED | [Registrar escolhas, cumprimento e comentários](epics/E07-nutrition-execution/T03-record-meal-execution.md) | KZ-E07-T02 |
| KZ-E07-T04 | PLANNED | [Exibir segurança e proveniência](epics/E07-nutrition-execution/T04-show-nutrition-safety.md) | KZ-E07-T03 |
| KZ-E07-T05 | PLANNED | [Validar fluxo alimentar](epics/E07-nutrition-execution/T05-validate-nutrition-flow.md) | KZ-E07-T04 |
| KZ-E08-T01 | PLANNED | [Publicar preview](epics/E08-personal-release/T01-deploy-preview.md) | KZ-E06-T05, KZ-E07-T05 |
| KZ-E08-T02 | PLANNED | [Validar exposição pública](epics/E08-personal-release/T02-protect-access.md) | KZ-E08-T01 |
| KZ-E08-T03 | PLANNED | [Preparar produção](epics/E08-personal-release/T03-prepare-production.md) | KZ-E08-T02, KZ-E05-T05 |
| KZ-E08-T04 | PLANNED | [Validar operação e rollback](epics/E08-personal-release/T04-validate-operations-and-rollback.md) | KZ-E08-T03 |
| KZ-E08-T05 | PLANNED | [Publicar MVP pessoal](epics/E08-personal-release/T05-release-personal-mvp.md) | KZ-E08-T04 |
| KZ-E09-T01 | PLANNED | [Projetar sono e atividades gerais](epics/E09-future-evolution/T01-design-sleep-and-general-activities.md) | KZ-E08-T05 |
| KZ-E09-T02 | PLANNED | [Implementar controle de sono](epics/E09-future-evolution/T02-implement-sleep-tracking.md) | KZ-E09-T01 |
| KZ-E09-T03 | PLANNED | [Implementar registro de atividades gerais](epics/E09-future-evolution/T03-implement-general-activity-tracking.md) | KZ-E09-T01 |
| KZ-E09-T04 | PLANNED | [Validar jornadas de sono e atividades](epics/E09-future-evolution/T04-validate-sleep-and-activity-flows.md) | KZ-E09-T02, KZ-E09-T03 |
| KZ-E09-T05 | PLANNED | [Projetar arquitetura i18n e política English-first](epics/E09-future-evolution/T05-design-i18n-and-english-policy.md) | KZ-E06-T05, KZ-E07-T05, KZ-E09-T04 |
| KZ-E09-T06 | PLANNED | [Internacionalizar produto e conteúdo canônico](epics/E09-future-evolution/T06-internationalize-product-content.md) | KZ-E09-T05 |
| KZ-E09-T07 | PLANNED | [Migrar documentação e entrega para inglês](epics/E09-future-evolution/T07-migrate-documentation-to-english.md) | KZ-E09-T05 |
| KZ-E09-T08 | PLANNED | [Validar experiência multilíngue](epics/E09-future-evolution/T08-validate-multilingual-experience.md) | KZ-E09-T06, KZ-E09-T07 |
| KZ-E09-T09 | DONE | [Internacionalizar a interface atual em português e inglês](epics/E09-future-evolution/T09-localize-current-interface.md) | — |
| KZ-E10-T01 | DONE | [Integrar a linguagem visual do portfólio no Kaizen](epics/E10-portfolio-visual-alignment/T01-implement-portfolio-visual-alignment.md) | KZ-E06-T25 |
| KZ-E10-T02 | DONE | [Player e registro de atividade em modal](epics/E10-portfolio-visual-alignment/T02-activity-player-and-completion-modal.md) | KZ-E10-T01 |
| KZ-E10-T03 | DONE | [Corrigir navegação e padronizar ações dos diálogos](epics/E10-portfolio-visual-alignment/T03-dialog-actions.md) | KZ-E10-T02 |
| KZ-E10-T04 | DONE | [Uniformizar estrutura visual dos diálogos](epics/E10-portfolio-visual-alignment/T04-dialog-structure.md) | KZ-E10-T03 |
| KZ-E10-T05 | DONE | [Unificar comportamento dos diálogos](epics/E10-portfolio-visual-alignment/T05-unify-dialog-behavior.md) | KZ-E10-T04 |
| KZ-E10-T06 | DONE | [Rascunhos de formulário por sessão](epics/E10-portfolio-visual-alignment/T06-session-form-drafts.md) | KZ-E10-T05 |
| KZ-E10-T07 | DONE | [Corrigir achados da revisão de rascunhos](epics/E10-portfolio-visual-alignment/T07-fix-draft-review.md) | KZ-E10-T06 |
| KZ-E10-T08 | DONE | [Ajustar Hoje e entrada do aplicativo](epics/E10-portfolio-visual-alignment/T08-today-navigation.md) | KZ-E10-T07 |
| KZ-E10-T09 | IN_PROGRESS | [Concluir adoção do design system Mira](epics/E10-portfolio-visual-alignment/T09-complete-mira-adoption.md) | KZ-E10-T08 |
| KZ-E11-T01 | PLANNED | [Validar a base integrada da agenda](epics/E11-schedule-evolution/T01-validate-integrated-schedule.md) | — |
| KZ-E11-T02 | PLANNED | [Validar a POC de seleção e drag and drop](epics/E11-schedule-evolution/T02-prototype-calendar-interactions.md) | KZ-E11-T01 |
| KZ-E11-T03 | PLANNED | [Integrar os gestos aprovados à persistência](epics/E11-schedule-evolution/T03-persist-calendar-interactions.md) | KZ-E11-T02 |
| KZ-E11-T04 | PLANNED | [Mover e redimensionar uma reserva individual](epics/E11-schedule-evolution/T04-edit-individual-reservations.md) | KZ-E11-T03 |
| KZ-E11-T05 | PLANNED | [Vincular e desvincular atividades comuns](epics/E11-schedule-evolution/T05-link-common-activities.md) | KZ-E11-T03 |
| KZ-E11-T06 | PLANNED | [Definir as extensões de interação da agenda](epics/E11-schedule-evolution/T06-define-calendar-extension-rules.md) | — |
| KZ-E11-T07 | PLANNED | [Detalhar recorrência e registros de tempo](epics/E11-schedule-evolution/T07-plan-recurrence-and-time-records.md) | — |
| KZ-E11-T08 | PLANNED | [Definir apresentação de sobreposições e agrupador](epics/E11-schedule-evolution/T08-define-overlap-presentation.md) | — |
| KZ-E12-T01 | PLANNED | [Sanear dependências e overrides](epics/E12-code-health/T01-sanitize-dependencies-and-overrides.md) | KZ-E00-T13 |
| KZ-E12-T02 | PLANNED | [Aplicar headers de segurança e páginas de erro e carregamento](epics/E12-code-health/T02-add-security-headers-and-route-states.md) | — |
| KZ-E12-T03 | PLANNED | [Alinhar a agenda às fronteiras da arquitetura](epics/E12-code-health/T03-align-schedule-with-architecture-boundaries.md) | — |
| KZ-E12-T04 | PLANNED | [Unificar os schemas Zod entre cliente e servidor](epics/E12-code-health/T04-unify-zod-schemas.md) | KZ-E12-T03 |
| KZ-E12-T05 | PLANNED | [Substituir mensagens de erro em texto por códigos tipados](epics/E12-code-health/T05-replace-text-errors-with-typed-codes.md) | KZ-E12-T04 |
| KZ-E12-T06 | PLANNED | [Remover o refresh duplicado após mutações](epics/E12-code-health/T06-remove-duplicate-refresh-after-mutations.md) | — |
| KZ-E12-T07 | PLANNED | [Dividir o repositório de treino e mover as regras para o domínio](epics/E12-code-health/T07-split-training-repository.md) | KZ-E12-T05 |
| KZ-E12-T08 | PLANNED | [Decidir o padrão de estado global e de formulários](epics/E12-code-health/T08-decide-state-and-form-patterns.md) | — |
| KZ-E12-T09 | PLANNED | [Migrar os caches da agenda e o rascunho de treino para a store aprovada](epics/E12-code-health/T09-migrate-client-caches-to-approved-store.md) | KZ-E12-T08 |
| KZ-E12-T10 | PLANNED | [Migrar o formulário de atividade para o padrão aprovado](epics/E12-code-health/T10-migrate-activity-form-to-approved-pattern.md) | KZ-E12-T04, KZ-E12-T08 |
| KZ-E12-T11 | PLANNED | [Endurecer as opções estritas do TypeScript](epics/E12-code-health/T11-tighten-typescript-strictness.md) | KZ-E12-T07 |
| KZ-E12-T12 | PLANNED | [Criar testes E2E das jornadas críticas](epics/E12-code-health/T12-create-critical-e2e-tests.md) | KZ-E12-T02 |
| KZ-E12-T13 | PLANNED | [Padronizar imports e estrutura de pastas das features](epics/E12-code-health/T13-standardize-imports-and-feature-folders.md) | KZ-E12-T09 |

When a task finishes, the Kaizen repository also records it in its `CHANGELOG.md`.
