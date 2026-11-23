# Active task

- **Task:** No task selected
- **Status:** —
- **Main input:** —
- **Next action:** start [PB-E02-T05](epics/E02-shared-standards/T05-apply-writing-standard-to-open-tasks.md) to rewrite open tasks to the writing standard and empty `scripts/writing-baseline.json`. In Kaizen, [KZ-E00-T17](../kaizen/epics/E00-repository-governance/T17-point-repository-to-playbook.md) is ready to point the repository to the playbook.

## Resumption and parallel work

- 2026-11-23: PB-E00-T01 created the playbook (PR #15), PB-E01-T01 imported the design system roadmap (PR #16), PB-E00-T04 added `npm run roadmap:check` (PR #17), PB-E00-T02 retired Jira (PR #18), PB-E01-T02 migrated the Kaizen roadmap (PR #19), and PB-E02-T04 created the writing standard (PR #21).
- Write every new or edited task following `standards/general/writing.md`; `roadmap:check` rejects open tasks that break its checked rules.
- The Kaizen roadmap now lives in `projects/kaizen/`. Make Kaizen roadmap changes here; `roadmap/` in the Kaizen repository stays only until KZ-E00-T17 removes it.
- PB-E00 is blocked only by PB-E00-T03, which waits for the owner to decide where Suna business and product rules live.
