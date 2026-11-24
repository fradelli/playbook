# Active task

- **Task:** No task selected
- **Status:** —
- **Main input:** —
- **Next action:** start [PB-E00-T07](epics/E00-repository-foundation/T07-batch-daily-status-commits.md) or [PB-E03-T01](epics/E03-roadmap-viewer/T01-move-roadmap-viewer.md), which the maintainer wants for following the roadmap locally. Then [PB-E02-T01](epics/E02-shared-standards/T01-inventory-kaizen-rules.md).

## Resumption and parallel work

- 2026-11-24: PB-E00-T06 removed the `IN_PROGRESS` limit (PR #31); the maintainer decides how many tasks run at once.
- 2026-11-24: PB-E00-T05 raised the limit to three `IN_PROGRESS` tasks per project, one `ACTIVE.md` block each (PR #29).
- 2026-11-24: PB-E01-T04 defined the [playbook integration standard](../../standards/general/playbook-integration.md) (PR #27); KZ-E00-T17 applies it in Kaizen.

- 2026-11-23: PB-E00-T01 created the playbook (PR #15), PB-E01-T01 imported the design system roadmap (PR #16), PB-E00-T04 added `npm run roadmap:check` (PR #17), PB-E00-T02 retired Jira (PR #18), PB-E01-T02 migrated the Kaizen roadmap (PR #19), PB-E02-T04 created the writing standard (PR #21), and PB-E02-T05 applied it to every open task (PR #22).
- Write every new or edited task following `standards/general/writing.md`; `roadmap:check` rejects open tasks that break its checked rules, and `scripts/writing-baseline.json` is empty.
- The Kaizen roadmap now lives in `projects/kaizen/`. Make Kaizen roadmap changes here; `roadmap/` in the Kaizen repository stays only until KZ-E00-T17 removes it.
- PB-E00 is blocked only by PB-E00-T03, which waits for the owner to decide where Suna business and product rules live.
