# Kaizen — planning overview

An entry point by area to find what exists, what needs validation, and the future work. States are maintained only in the [roadmap](README.md); the active task and its next action live in [ACTIVE](ACTIVE.md). This map does not calculate progress or replace acceptance criteria.

## Map by area

| Area | Where to check deliveries | Where to check remaining work |
| --- | --- | --- |
| Schedule | [Integrated baseline and limits](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/RECONCILIATION.md#o-que-existe-e-o-que-falta) | [KZ-E11: validation and interactions](epics/E11-schedule-evolution/README.md) |
| Workout execution | [Sets, history, and rest](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#treino) | [KZ-E06: task criteria](epics/E06-training-execution/README.md) |
| Plan authoring | [Partial baseline and identity proposal](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#treino) | [Authoring plan](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/training/PLANOS-DE-TREINO.md#sequência-de-entrega-e-critérios-de-saída); a formal task breakdown is missing |
| Catalog | [Seed and editorial limits](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#catálogo) | [Scoped pending items](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/catalog/CATALOG-IMPORT-PLAN.md#pendências-delimitadas); a dedicated queue is missing |
| Design system | [Executor delivered and current candidate](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#design-system) | [KZ-E10-T09: full adoption](epics/E10-portfolio-visual-alignment/T09-complete-mira-adoption.md) |
| Nutrition | [Foundation and current screen](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#alimentação) | [KZ-E07: lookup and logging](epics/E07-nutrition-execution/README.md) |
| Languages | [PT/EN interface and limits](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#internacionalização) | [Editorial plan](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/i18n/I18N-PT-EN-PLAN.md) and [KZ-E09](epics/E09-future-evolution/README.md) |
| Release | [Limits of the local evidence](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#publicação) | [KZ-E08: preview, production, and operations](epics/E08-personal-release/README.md) |
| Governance and agent | [Current documentation standard](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/DOCUMENTATION-STANDARD.md) | [KZ-E00-T12 to KZ-E00-T16: Claude, cleanup, documentation, and CI](epics/E00-repository-governance/README.md) |
| Code health | Technical audit of 2026-11-23, recorded in the tasks | [KZ-E12: boundaries, validation, state, and tests](epics/E12-code-health/README.md) |

## Points that need a decision

The [general reconciliation](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/RECONCILIATION.md#próximos-refinamentos-de-planejamento) identifies missing task links, overlap in the rest backlog, disagreement on plan versions, and limits of the language policy. These are visible planning gaps, with no automatic task closure.

## How to use as a team

1. Pick the area on this map and check its state in the roadmap.
2. Open the task and only the inputs it needs; check dependencies and acceptance.
3. Record the result and evidence in the task. Update the state in the roadmap and the resumption in ACTIVE when there is an effective change.
4. Update the map only when navigation or the understanding of scope changes, without copying percentages, counts, or states.

To repeat the organization in another project, use the [documentation standard](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/DOCUMENTATION-STANDARD.md), the [templates](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/templates/PLAN.md), and the [task template](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/roadmap/templates/TASK-TEMPLATE.md). This structure does not require a new service or manual synchronization between two backlogs. The multi-project visual hub remains a later step.
