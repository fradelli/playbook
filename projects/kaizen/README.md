# Kaizen roadmap

Canonical status of every `KZ-` epic and task. Task files do not repeat the status.

Read [CLAUDE.md](../../CLAUDE.md) first, then [ACTIVE.md](ACTIVE.md). [Overview by area](OVERVIEW.md).

Migrated on 2026-11-23 by [PB-E01-T02](../playbook/epics/E01-project-migration/T02-migrate-kaizen-roadmap.md) from `fradelli/nextjs-kaizen-app: roadmap/`, translated from Portuguese. Statuses are kept as in the source. Plans by subject stay in the Kaizen repository (`docs/plans/`); they complement tasks and never hold status.

## States

`PLANNED` · `READY` · `IN_PROGRESS` · `BLOCKED` · `DONE` · `CANCELLED`

## Epics

| ID | Status | Epic | Outcome |
| --- | --- | --- | --- |
| KZ-E00 | READY | [Repository governance](epics/E00-repository-governance/README.md) | Public repository governed, context optimized for Claude, and traceable legacy |
| KZ-E01 | DONE | [Training data migration](epics/E01-training-data-migration/README.md) | Training foundation migrated and validated |
| KZ-E02 | DONE | [Nutrition data migration](epics/E02-nutrition-data-migration/README.md) | Nutrition plan reviewed, versioned, and validated |
| KZ-E03 | DONE | [Product and architecture](epics/E03-product-and-architecture/README.md) | P0, architecture, and implementation guide approved |
| KZ-E04 | DONE | [Next.js foundation](epics/E04-nextjs-foundation/README.md) | Minimal application with gates and the shared design system |
| KZ-E05 | DONE | [Database, import, and access](epics/E05-database-and-import/README.md) | Sound persistence and import; access deferred by explicit decision |
| KZ-E06 | IN_PROGRESS | [Training execution](epics/E06-training-execution/README.md) | Usable training lookup and recording |
| KZ-E07 | PLANNED | [Nutrition execution](epics/E07-nutrition-execution/README.md) | Usable nutrition lookup and recording |
| KZ-E08 | PLANNED | [Personal release](epics/E08-personal-release/README.md) | Local, preview, and production verified |
| KZ-E09 | PLANNED | [Future evolution](epics/E09-future-evolution/README.md) | Backlog after the personal MVP |
| KZ-E10 | READY | [Visual alignment with the portfolio](epics/E10-portfolio-visual-alignment/README.md) | Historical base delivered; Mira adoption being completed |
| KZ-E11 | PLANNED | [Schedule evolution](epics/E11-schedule-evolution/README.md) | Validate the integrated base and evolve interactions while preserving history |
| KZ-E12 | PLANNED | [Technical code health](epics/E12-code-health/README.md) | Code aligned with the architecture after the technical audit |

## Tasks

| ID | Status | Task | Depends on |
| --- | --- | --- | --- |
| KZ-E00-T01 | DONE | [Initialize repository and branches](epics/E00-repository-governance/T01-initialize-repository-and-branches.md) | — |
| KZ-E00-T02 | CANCELLED | [Make the repository private](epics/E00-repository-governance/T02-make-repository-private.md) | — |
| KZ-E00-T03 | DONE | [Create root contract](epics/E00-repository-governance/T03-create-root-contract.md) | KZ-E00-T01 |
| KZ-E00-T04 | DONE | [Create roadmap system](epics/E00-repository-governance/T04-create-roadmap-system.md) | KZ-E00-T03 |
| KZ-E00-T05 | DONE | [Register legacy provenance](epics/E00-repository-governance/T05-register-legacy-provenance.md) | KZ-E00-T04, KZ-E00-T06 |
| KZ-E00-T06 | DONE | [Adapt PR and CI/CD governance](epics/E00-repository-governance/T06-adapt-delivery-governance.md) | KZ-E00-T04 |
| KZ-E00-T07 | DONE | [Optimize context and clean up pre-MVP dependencies](epics/E00-repository-governance/T07-optimize-agent-context.md) | KZ-E03-T05 |
| KZ-E00-T08 | DONE | [Consolidate documentation and Codex context](epics/E00-repository-governance/T08-consolidate-documentation.md) | KZ-E00-T07 |
| KZ-E00-T09 | DONE | [Standardize existing documentation](epics/E00-repository-governance/T09-standardize-documentation.md) | KZ-E00-T08 |
| KZ-E00-T10 | DONE | [Create the local roadmap view](epics/E00-repository-governance/T10-create-local-roadmap-view.md) | KZ-E00-T09 |
| KZ-E00-T11 | DONE | [Apply the design system to the roadmap view](epics/E00-repository-governance/T11-apply-design-system-to-roadmap-view.md) | KZ-E00-T10 |
| KZ-E00-T12 | DONE | [Migrate agent governance from Codex to Claude](epics/E00-repository-governance/T12-migrate-agent-governance-to-claude.md) | — |
| KZ-E00-T13 | READY | [Remove unused artifacts and files from the repository](epics/E00-repository-governance/T13-remove-unused-repository-artifacts.md) | KZ-E00-T12 |
| KZ-E00-T14 | READY | [Analyze the documentation for use by Claude](epics/E00-repository-governance/T14-analyze-documentation-for-claude.md) | KZ-E00-T12 |
| KZ-E00-T15 | PLANNED | [Apply the approved documentation reorganization](epics/E00-repository-governance/T15-apply-approved-documentation-reorganization.md) | KZ-E00-T14 |
| KZ-E00-T16 | DONE | [Strengthen the CI gates](epics/E00-repository-governance/T16-strengthen-ci-gates.md) | — |
| KZ-E00-T17 | PLANNED | [Point the repository to the playbook](epics/E00-repository-governance/T17-point-repository-to-playbook.md) | PB-E01-T02, PB-E01-T04 |
| KZ-E00-T18 | PLANNED | [Adopt the English-only rule](epics/E00-repository-governance/T18-adopt-english-only-rule.md) | KZ-E00-T17 |
| KZ-E01-T01 | DONE | [Freeze source snapshot](epics/E01-training-data-migration/T01-freeze-source-snapshot.md) | KZ-E00-T05 |
| KZ-E01-T02 | DONE | [Migrate canonical training data](epics/E01-training-data-migration/T02-migrate-canonical-training-data.md) | KZ-E01-T01 |
| KZ-E01-T03 | DONE | [Migrate training history](epics/E01-training-data-migration/T03-migrate-training-history.md) | KZ-E01-T02 |
| KZ-E01-T04 | DONE | [Migrate human documentation](epics/E01-training-data-migration/T04-migrate-human-documentation.md) | KZ-E01-T03 |
| KZ-E01-T05 | DONE | [Migrate schemas](epics/E01-training-data-migration/T05-migrate-schemas.md) | KZ-E01-T04 |
| KZ-E01-T06 | DONE | [Validate training foundation](epics/E01-training-data-migration/T06-validate-training-foundation.md) | KZ-E01-T05 |
| KZ-E02-T01 | DONE | [Inventory nutrition and unknowns](epics/E02-nutrition-data-migration/T01-inventory-nutrition-inputs.md) | KZ-E01-T06 |
| KZ-E02-T02 | DONE | [Preserve original diet](epics/E02-nutrition-data-migration/T02-preserve-original-diet.md) | KZ-E02-T01, Diet provided |
| KZ-E02-T03 | DONE | [Review nutrition plan](epics/E02-nutrition-data-migration/T03-review-nutrition-plan.md) | KZ-E02-T02 |
| KZ-E02-T04 | DONE | [Structure nutrition plan](epics/E02-nutrition-data-migration/T04-structure-nutrition-plan.md) | KZ-E02-T03, Decisions approved |
| KZ-E02-T05 | DONE | [Create pointer, schema, and guide](epics/E02-nutrition-data-migration/T05-create-nutrition-contracts.md) | KZ-E02-T04 |
| KZ-E02-T06 | DONE | [Validate nutrition foundation](epics/E02-nutrition-data-migration/T06-validate-nutrition-foundation.md) | KZ-E02-T05 |
| KZ-E03-T01 | DONE | [Define P0 journeys](epics/E03-product-and-architecture/T01-define-p0-journeys.md) | KZ-E01-T06, KZ-E02-T06 |
| KZ-E03-T02 | DONE | [Define source-of-truth transition](epics/E03-product-and-architecture/T02-define-source-of-truth-transition.md) | KZ-E03-T01 |
| KZ-E03-T03 | DONE | [Define privacy and operations](epics/E03-product-and-architecture/T03-define-privacy-and-operations.md) | KZ-E03-T01 |
| KZ-E03-T04 | DONE | [Define architecture](epics/E03-product-and-architecture/T04-define-target-architecture.md) | KZ-E03-T02, KZ-E03-T03 |
| KZ-E03-T05 | DONE | [Approve implementation guide](epics/E03-product-and-architecture/T05-approve-implementation-guide.md) | KZ-E03-T04 |
| KZ-E04-T01 | DONE | [Create the Next.js application](epics/E04-nextjs-foundation/T01-scaffold-nextjs.md) | KZ-E03-T05, KZ-E00-T07 |
| KZ-E04-T02 | DONE | [Configure static quality](epics/E04-nextjs-foundation/T02-configure-static-quality.md) | KZ-E04-T01 |
| KZ-E04-T03 | DONE | [Create the server-only boundary](epics/E04-nextjs-foundation/T03-create-server-only-boundary.md) | KZ-E04-T02 |
| KZ-E04-T04 | DONE | [Create the accessible shell](epics/E04-nextjs-foundation/T04-create-accessible-shell.md) | KZ-E04-T08 |
| KZ-E04-T05 | DONE | [Configure minimal CI](epics/E04-nextjs-foundation/T05-configure-minimal-ci.md) | KZ-E04-T02, KZ-E04-T03, KZ-E04-T06 |
| KZ-E04-T06 | DONE | [Record adoption of the shared Design System](epics/E04-nextjs-foundation/T06-adopt-shared-design-system-decision.md) | KZ-E04-T02 |
| KZ-E04-T07 | DONE | [Validate technical readiness for the Design System](epics/E04-nextjs-foundation/T07-validate-design-system-readiness.md) | KZ-E04-T05, KZ-E04-T06 |
| KZ-E04-T08 | DONE | [Integrate the versioned Design System](epics/E04-nextjs-foundation/T08-integrate-versioned-design-system.md) | KZ-E04-T07 |
| KZ-E04-T09 | DONE | [Standardize the React page structure](epics/E04-nextjs-foundation/T09-standardize-react-page-structure.md) | KZ-E04-T04 |
| KZ-E05-T01 | DONE | [Model workouts and nutrition](epics/E05-database-and-import/T01-design-relational-model.md) | KZ-E03-T05 |
| KZ-E05-T02 | DONE | [Configure database and migrations](epics/E05-database-and-import/T02-configure-database-and-migrations.md) | KZ-E04-T03, KZ-E05-T01 |
| KZ-E05-T03 | DONE | [Create idempotent import](epics/E05-database-and-import/T03-create-idempotent-import.md) | KZ-E05-T02 |
| KZ-E05-T04 | DONE | [Test persisted integrity](epics/E05-database-and-import/T04-test-persisted-integrity.md) | KZ-E05-T03 |
| KZ-E05-T05 | DONE | [Validate backup and restore](epics/E05-database-and-import/T05-validate-backup-and-restore.md) | KZ-E05-T04 |
| KZ-E05-T06 | CANCELLED | [Implement personal access](epics/E05-database-and-import/T06-implement-personal-access.md) | KZ-E05-T05 |
| KZ-E05-T07 | DONE | [Refine code semantics and boundaries](epics/E05-database-and-import/T07-refine-code-semantics.md) | KZ-E05-T04 |
| KZ-E05-T08 | DONE | [Fix dependency vulnerabilities](epics/E05-database-and-import/T08-remediate-dependency-vulnerabilities.md) | KZ-E05-T02 |
| KZ-E06-T01 | DONE | [Project the day's workout and execution](epics/E06-training-execution/T01-project-active-training-plan.md) | KZ-E05-T05 |
| KZ-E06-T02 | DONE | [Create the daily workout page](epics/E06-training-execution/T02-create-daily-training-page.md) | KZ-E04-T04, KZ-E06-T01 |
| KZ-E06-T03 | DONE | [Record preparation, sets, and comments](epics/E06-training-execution/T03-record-training-execution.md) | KZ-E06-T02 |
| KZ-E06-T04 | READY | [Show provenance and history](epics/E06-training-execution/T04-show-training-provenance.md) | KZ-E06-T03 |
| KZ-E06-T05 | PLANNED | [Validate the workout flow](epics/E06-training-execution/T05-validate-training-flow.md) | KZ-E06-T04 |
| KZ-E06-T06 | PLANNED | [Prescribe target load per exercise and per set](epics/E06-training-execution/T06-prescribe-target-load.md) | KZ-E06-T03 |
| KZ-E06-T07 | CANCELLED | [Show the last execution of each set](epics/E06-training-execution/T07-show-previous-set-performance.md) | KZ-E06-T03 |
| KZ-E06-T08 | CANCELLED | [Require applicable measures before advancing the set](epics/E06-training-execution/T08-require-applicable-fields-before-next-set.md) | KZ-E06-T03 |
| KZ-E06-T09 | PLANNED | [Design the rest timer experience](epics/E06-training-execution/T09-design-rest-timer-experience.md) | KZ-E06-T03 |
| KZ-E06-T10 | PLANNED | [Implement the approved rest timer](epics/E06-training-execution/T10-implement-rest-timer.md) | KZ-E06-T09 |
| KZ-E06-T11 | DONE | [Review the daily plan lifecycle](epics/E06-training-execution/T11-review-daily-plan-lifecycle.md) | KZ-E06-T03 |
| KZ-E06-T12 | DONE | [Refine editing of the day's activities](epics/E06-training-execution/T12-refine-daily-activity-editing.md) | KZ-E06-T11 |
| KZ-E06-T13 | PLANNED | [Reconcile future activities when activating another plan](epics/E06-training-execution/T13-reconcile-future-activities-on-plan-change.md) | KZ-E06-T11 |
| KZ-E06-T14 | BLOCKED | [Move the main navigation to the bottom on mobile](epics/E06-training-execution/T14-add-mobile-bottom-navigation.md) | KZ-E04-T04 |
| KZ-E06-T15 | DONE | [Generalize the weekly activity schedule](epics/E06-training-execution/T15-generalize-weekly-training-schedule.md) | KZ-E06-T11 |
| KZ-E06-T16 | DONE | [Validate and import the new training program](epics/E06-training-execution/T16-import-new-training-program.md) | KZ-E06-T15 |
| KZ-E06-T17 | DONE | [Prepare a controlled restart of the training data](epics/E06-training-execution/T17-prepare-training-data-fresh-start.md) | KZ-E06-T11 |
| KZ-E06-T18 | PLANNED | [Guide the execution of combined blocks](epics/E06-training-execution/T18-guide-combined-exercise-blocks.md) | KZ-E06-T16 |
| KZ-E06-T19 | DONE | [Autofill the planned end of the workout](epics/E06-training-execution/T19-autofill-planned-workout-end.md) | KZ-E06-T12 |
| KZ-E06-T20 | CANCELLED | [Remove specific workout from the add options](epics/E06-training-execution/T20-simplify-activity-type-options.md) | KZ-E06-T12 |
| KZ-E06-T21 | PLANNED | [Design the external import of training plans](epics/E06-training-execution/T21-design-external-training-plan-import.md) | KZ-E06-T16 |
| KZ-E06-T22 | DONE | [Allow organizing the future schedule without starting workouts](epics/E06-training-execution/T22-allow-future-agenda-editing.md) | KZ-E06-T12 |
| KZ-E06-T23 | READY | [Record footvolley and external activities retrospectively](epics/E06-training-execution/T23-record-external-activities-retrospectively.md) | KZ-E06-T12 |
| KZ-E06-T24 | DONE | [Choose a warm-up and reschedule activities that have not started](epics/E06-training-execution/T24-select-preparation-and-reschedule-activities.md) | KZ-E06-T12, KZ-E06-T19 |
| KZ-E06-T25 | DONE | [Add and edit activity modals with a local draft](epics/E06-training-execution/T25-activity-editor-modals-and-drafts.md) | KZ-E06-T24 |
| KZ-E06-T26 | DONE | [Independent set execution and history](epics/E06-training-execution/T26-set-execution.md) | KZ-E06-T03, KZ-E09-T09 |
| KZ-E07-T01 | PLANNED | [Project the diet and the day's execution](epics/E07-nutrition-execution/T01-project-active-nutrition-plan.md) | KZ-E05-T05 |
| KZ-E07-T02 | PLANNED | [Create the diet page for the day](epics/E07-nutrition-execution/T02-create-nutrition-page.md) | KZ-E04-T04, KZ-E07-T01 |
| KZ-E07-T03 | PLANNED | [Record choices, adherence, and comments](epics/E07-nutrition-execution/T03-record-meal-execution.md) | KZ-E07-T02 |
| KZ-E07-T04 | PLANNED | [Show safety and provenance](epics/E07-nutrition-execution/T04-show-nutrition-safety.md) | KZ-E07-T03 |
| KZ-E07-T05 | PLANNED | [Validate the nutrition flow](epics/E07-nutrition-execution/T05-validate-nutrition-flow.md) | KZ-E07-T04 |
| KZ-E08-T01 | PLANNED | [Publish preview](epics/E08-personal-release/T01-deploy-preview.md) | KZ-E06-T05, KZ-E07-T05 |
| KZ-E08-T02 | PLANNED | [Validate public exposure](epics/E08-personal-release/T02-protect-access.md) | KZ-E08-T01 |
| KZ-E08-T03 | PLANNED | [Prepare production](epics/E08-personal-release/T03-prepare-production.md) | KZ-E08-T02, KZ-E05-T05 |
| KZ-E08-T04 | PLANNED | [Validate operations and rollback](epics/E08-personal-release/T04-validate-operations-and-rollback.md) | KZ-E08-T03 |
| KZ-E08-T05 | PLANNED | [Release the personal MVP](epics/E08-personal-release/T05-release-personal-mvp.md) | KZ-E08-T04 |
| KZ-E09-T01 | PLANNED | [Design sleep and general activities](epics/E09-future-evolution/T01-design-sleep-and-general-activities.md) | KZ-E08-T05 |
| KZ-E09-T02 | PLANNED | [Implement sleep tracking](epics/E09-future-evolution/T02-implement-sleep-tracking.md) | KZ-E09-T01 |
| KZ-E09-T03 | PLANNED | [Implement general activity logging](epics/E09-future-evolution/T03-implement-general-activity-tracking.md) | KZ-E09-T01 |
| KZ-E09-T04 | PLANNED | [Validate sleep and activity journeys](epics/E09-future-evolution/T04-validate-sleep-and-activity-flows.md) | KZ-E09-T02, KZ-E09-T03 |
| KZ-E09-T05 | PLANNED | [Design i18n architecture and English-first policy](epics/E09-future-evolution/T05-design-i18n-and-english-policy.md) | KZ-E06-T05, KZ-E07-T05, KZ-E09-T04 |
| KZ-E09-T06 | PLANNED | [Internationalize product and canonical content](epics/E09-future-evolution/T06-internationalize-product-content.md) | KZ-E09-T05 |
| KZ-E09-T07 | PLANNED | [Migrate documentation and delivery to English](epics/E09-future-evolution/T07-migrate-documentation-to-english.md) | KZ-E09-T05 |
| KZ-E09-T08 | PLANNED | [Validate multilingual experience](epics/E09-future-evolution/T08-validate-multilingual-experience.md) | KZ-E09-T06, KZ-E09-T07 |
| KZ-E09-T09 | DONE | [Internationalize the current interface in Portuguese and English](epics/E09-future-evolution/T09-localize-current-interface.md) | — |
| KZ-E10-T01 | DONE | [Integrate the portfolio visual language into Kaizen](epics/E10-portfolio-visual-alignment/T01-implement-portfolio-visual-alignment.md) | KZ-E06-T25 |
| KZ-E10-T02 | DONE | [Player and activity record in a modal](epics/E10-portfolio-visual-alignment/T02-activity-player-and-completion-modal.md) | KZ-E10-T01 |
| KZ-E10-T03 | DONE | [Fix navigation and standardize dialog actions](epics/E10-portfolio-visual-alignment/T03-dialog-actions.md) | KZ-E10-T02 |
| KZ-E10-T04 | DONE | [Standardize the visual structure of dialogs](epics/E10-portfolio-visual-alignment/T04-dialog-structure.md) | KZ-E10-T03 |
| KZ-E10-T05 | DONE | [Unify dialog behavior](epics/E10-portfolio-visual-alignment/T05-unify-dialog-behavior.md) | KZ-E10-T04 |
| KZ-E10-T06 | DONE | [Per-session form drafts](epics/E10-portfolio-visual-alignment/T06-session-form-drafts.md) | KZ-E10-T05 |
| KZ-E10-T07 | DONE | [Fix the findings of the draft review](epics/E10-portfolio-visual-alignment/T07-fix-draft-review.md) | KZ-E10-T06 |
| KZ-E10-T08 | DONE | [Adjust Today and the app entry](epics/E10-portfolio-visual-alignment/T08-today-navigation.md) | KZ-E10-T07 |
| KZ-E10-T09 | READY | [Complete the adoption of the Mira design system](epics/E10-portfolio-visual-alignment/T09-complete-mira-adoption.md) | KZ-E10-T08 |
| KZ-E10-T10 | PLANNED | [Install the published corrective release of `@fradelli/ui`](epics/E10-portfolio-visual-alignment/T10-install-published-ui-release.md) | DS-E04-T03 |
| KZ-E11-T01 | PLANNED | [Validate the integrated schedule base](epics/E11-schedule-evolution/T01-validate-integrated-schedule.md) | — |
| KZ-E11-T02 | PLANNED | [Validate the selection and drag-and-drop POC](epics/E11-schedule-evolution/T02-prototype-calendar-interactions.md) | KZ-E11-T01 |
| KZ-E11-T03 | PLANNED | [Integrate the approved gestures with persistence](epics/E11-schedule-evolution/T03-persist-calendar-interactions.md) | KZ-E11-T02 |
| KZ-E11-T04 | PLANNED | [Move and resize an individual reservation](epics/E11-schedule-evolution/T04-edit-individual-reservations.md) | KZ-E11-T03 |
| KZ-E11-T05 | PLANNED | [Link and unlink common activities](epics/E11-schedule-evolution/T05-link-common-activities.md) | KZ-E11-T03 |
| KZ-E11-T06 | PLANNED | [Define the schedule interaction extensions](epics/E11-schedule-evolution/T06-define-calendar-extension-rules.md) | — |
| KZ-E11-T07 | PLANNED | [Detail recurrence and time records](epics/E11-schedule-evolution/T07-plan-recurrence-and-time-records.md) | — |
| KZ-E11-T08 | PLANNED | [Define overlap presentation and the grouper](epics/E11-schedule-evolution/T08-define-overlap-presentation.md) | — |
| KZ-E12-T01 | PLANNED | [Sanitize dependencies and overrides](epics/E12-code-health/T01-sanitize-dependencies-and-overrides.md) | KZ-E00-T13 |
| KZ-E12-T02 | PLANNED | [Apply security headers and error and loading pages](epics/E12-code-health/T02-add-security-headers-and-route-states.md) | — |
| KZ-E12-T03 | PLANNED | [Align the schedule with the architecture boundaries](epics/E12-code-health/T03-align-schedule-with-architecture-boundaries.md) | — |
| KZ-E12-T04 | PLANNED | [Unify the Zod schemas between client and server](epics/E12-code-health/T04-unify-zod-schemas.md) | KZ-E12-T03 |
| KZ-E12-T05 | PLANNED | [Replace text error messages with typed codes](epics/E12-code-health/T05-replace-text-errors-with-typed-codes.md) | KZ-E12-T04 |
| KZ-E12-T06 | PLANNED | [Remove the duplicate refresh after mutations](epics/E12-code-health/T06-remove-duplicate-refresh-after-mutations.md) | — |
| KZ-E12-T07 | PLANNED | [Split the workout repository and move the rules to the domain](epics/E12-code-health/T07-split-training-repository.md) | KZ-E12-T05 |
| KZ-E12-T08 | PLANNED | [Decide the global state and form pattern](epics/E12-code-health/T08-decide-state-and-form-patterns.md) | — |
| KZ-E12-T09 | PLANNED | [Migrate the schedule caches and the workout draft to the approved store](epics/E12-code-health/T09-migrate-client-caches-to-approved-store.md) | KZ-E12-T08 |
| KZ-E12-T10 | PLANNED | [Migrate the activity form to the approved pattern](epics/E12-code-health/T10-migrate-activity-form-to-approved-pattern.md) | KZ-E12-T04, KZ-E12-T08 |
| KZ-E12-T11 | PLANNED | [Tighten the strict TypeScript options](epics/E12-code-health/T11-tighten-typescript-strictness.md) | KZ-E12-T07 |
| KZ-E12-T12 | PLANNED | [Create E2E tests for the critical journeys](epics/E12-code-health/T12-create-critical-e2e-tests.md) | KZ-E12-T02 |
| KZ-E12-T13 | PLANNED | [Standardize imports and the folder structure of the features](epics/E12-code-health/T13-standardize-imports-and-feature-folders.md) | KZ-E12-T09 |

When a task finishes, the Kaizen repository also records it in its `CHANGELOG.md`.
