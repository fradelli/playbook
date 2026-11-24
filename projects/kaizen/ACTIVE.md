# Active task

- **Task:** No task selected
- **Status:** —
- **Main input:** —
- **Next action:** sweep the repository for improvements and register each new finding as a `KZ-` task, checking KZ-E00-T13, KZ-E00-T14, and KZ-E12 first. After that, start [KZ-E00-T18](epics/E00-repository-governance/T18-adopt-english-only-rule.md).

## Resumption and parallel work

- 2026-11-24: KZ-E00-T17 done (PR #98, `67443f0`). Kaizen has no local roadmap; its CI validates `KZ-` IDs against this index.

- KZ-E10-T09 paused on 2026-11-24 by owner decision, back to `READY`, so that KZ-E00-T17 can run first. To resume: review the package in `docs/plans/design-system/AJUSTES-DO-EXECUTOR-MIRA.md` and continue the Mira migration backlog. The executor and dialog package was authorized on 2026-11-13; warm-ups are excluded from the summary, and load is unilateral per side.

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
