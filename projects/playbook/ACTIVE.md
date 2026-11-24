# Active task

- **Task:** [PB-E01-T04](epics/E01-project-migration/T04-define-repository-integration.md) — Define how project repositories use the playbook
- **Status:** IN_PROGRESS
- **Main input:** `projects/playbook/epics/E01-project-migration/T04-define-repository-integration.md`
- **Next action:** write `standards/general/playbook-integration.md` on `claude/PB-E01-T04-define-repository-integration`. KZ-E00-T17 waits for this task.

## Resumption and parallel work

- 2026-11-23: PB-E00-T01 created the playbook (PR #15), PB-E01-T01 imported the design system roadmap (PR #16), PB-E00-T04 added `npm run roadmap:check` (PR #17), PB-E00-T02 retired Jira (PR #18), PB-E01-T02 migrated the Kaizen roadmap (PR #19), PB-E02-T04 created the writing standard (PR #21), and PB-E02-T05 applied it to every open task (PR #22).
- Write every new or edited task following `standards/general/writing.md`; `roadmap:check` rejects open tasks that break its checked rules, and `scripts/writing-baseline.json` is empty.
- The Kaizen roadmap now lives in `projects/kaizen/`. Make Kaizen roadmap changes here; `roadmap/` in the Kaizen repository stays only until KZ-E00-T17 removes it.
- PB-E00 is blocked only by PB-E00-T03, which waits for the owner to decide where Suna business and product rules live.
