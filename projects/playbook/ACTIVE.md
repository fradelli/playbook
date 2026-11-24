# Active task

- **Task:** [PB-E00-T05](epics/E00-repository-foundation/T05-allow-parallel-tasks.md) — Allow parallel tasks per project
- **Status:** IN_PROGRESS
- **Branch:** `claude/PB-E00-T05-allow-parallel-tasks`
- **Main input:** `epics/E00-repository-foundation/T05-allow-parallel-tasks.md`
- **Next action:** merge the pull request, then record `PB-E00-T05: done`. After it, start [PB-E02-T01](epics/E02-shared-standards/T01-inventory-kaizen-rules.md) to inventory the Kaizen rules.

## Resumption and parallel work

- 2026-11-24: PB-E00-T05 raises the limit to three `IN_PROGRESS` tasks per project, one `ACTIVE.md` block each.
- 2026-11-24: PB-E01-T04 defined the [playbook integration standard](../../standards/general/playbook-integration.md) (PR #27); KZ-E00-T17 applies it in Kaizen.

- 2026-11-23: PB-E00-T01 created the playbook (PR #15), PB-E01-T01 imported the design system roadmap (PR #16), PB-E00-T04 added `npm run roadmap:check` (PR #17), PB-E00-T02 retired Jira (PR #18), PB-E01-T02 migrated the Kaizen roadmap (PR #19), PB-E02-T04 created the writing standard (PR #21), and PB-E02-T05 applied it to every open task (PR #22).
- Write every new or edited task following `standards/general/writing.md`; `roadmap:check` rejects open tasks that break its checked rules, and `scripts/writing-baseline.json` is empty.
- The Kaizen roadmap now lives in `projects/kaizen/`. Make Kaizen roadmap changes here; `roadmap/` in the Kaizen repository stays only until KZ-E00-T17 removes it.
- PB-E00 is blocked only by PB-E00-T03, which waits for the owner to decide where Suna business and product rules live.
