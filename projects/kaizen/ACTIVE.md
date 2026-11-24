# Active task

- **Task:** KZ-E10-T09 — Complete the Mira design system adoption
- **Status:** IN_PROGRESS
- **Main input:** `roadmap/epics/E10-portfolio-visual-alignment/T09-complete-mira-adoption.md`.
- **Authorization:** package of executor and dialog adjustments authorized on 13/11/2026. Warm-ups are excluded from the summary, and load is unilateral per side.
- **Next action:** review the package recorded in `docs/plans/design-system/AJUSTES-DO-EXECUTOR-MIRA.md` and continue the global Mira migration backlog. The build, 64 targeted tests, 18 integration tests, and browser checks at 1440/390/320 px are evidence from the original delivery, not checks redone in this reorganization. KZ-E00-T08 remains done.

## Resumption and parallel work

- Reorganization baseline: `27536ef`, the schedule integration from PR #86; the local history also records the Mira integration in `b37c215` from PR #84. This does not automatically close KZ-E10-T09 or prove a design system release or production.
- KZ-E00-T08 to KZ-E00-T11 were integrated into `developer` by PRs #87 to #90 (up to `e0834f3`): documentation organization and standardization, and the [local roadmap view](epics/E00-repository-governance/T11-apply-design-system-to-roadmap-view.md), opened with `pnpm roadmap:view`. The documentation reorganization does not start the drag and drop implementation.
- `@fradelli/ui` comes from the local package `vendor/fradelli-ui-mira-table-progress.tgz`, built from design system commit `698b828`; its `dist/` is identical to the published `0.7.0`. Replace it with the corrective release planned in DS-E04-T03.
- Own roadmap app and multi-project hub: a proposal with no registered task or plan. Do not start without an approved task.
- KZ-E06-T26 keeps the original commits and results in the task itself. Do not repeat the implementation from the old checkpoints.
- The [drag and drop](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AGENDA-DRAG-AND-DROP.md) plan is linked to [KZ-E11](epics/E11-schedule-evolution/README.md), without starting its execution. The [documentation reorganization](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/REORGANIZATION-2026-11.md) preserves existing statuses and dependencies.
- KZ-E06-T23: implementation delivered, full manual journey pending. KZ-E06-T14: virtual keyboard and safe area on a physical device pending.
- KZ-E06-T22 and KZ-E06-T25 remain done; see their respective tasks for details.
- Technical audit of 2026-11-23 on `developer` (`364c71f`) recorded as KZ-E00-T12 to KZ-E00-T16 and in [KZ-E12](epics/E12-code-health/README.md). KZ-E00-T12 is done: the supported agent is now Claude Code, with contracts in `CLAUDE.md` and branches `claude/<ID>-descricao`. KZ-E00-T16 is done: CI runs i18n and Prisma formatting, and coverage covers all of `src/`. KZ-E00-T13 and KZ-E00-T14 are `READY`. None of them replaces the active task without a decision from the owner.

The [operational log](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/worklog/index.md) records sessions; its states do not replace the canonical roadmap status.

The [next schedule tasks before drag and drop](https://github.com/fradelli/nextjs-kaizen-app/blob/developer/docs/plans/agenda/AJUSTES-DA-AGENDA.md#próximas-tarefas-antes-do-drag-and-drop) are recorded with acceptance criteria.
