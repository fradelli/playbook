# Active task

- **Task:** No task selected
- **Status:** —
- **Main input:** —
- **Next action:** start [PB-E01-T02](epics/E01-project-migration/T02-migrate-kaizen-roadmap.md) to bring the Kaizen roadmap here, or [PB-E02-T01](epics/E02-shared-standards/T01-inventory-kaizen-rules.md) to inventory the Kaizen rules.

## Resumption and parallel work

- PB-E00-T01 created this structure on 2026-11-23, right after `fradelli/suna-docs` was renamed to `fradelli/playbook`.
- PB-E01-T01 imported the design system roadmap on 2026-11-23 (PR #16). DS-E00-T01 was then marked done in the playbook form, and DS-E00-T07 was cancelled because PB-E00-T04 covers every project.
- PB-E00-T04 added `npm run roadmap:check` and its CI on 2026-11-23 (PR #17). Run it before every commit, including status commits on `main`.
- PB-E00-T02 retired Jira and the Sandicts routing on 2026-11-23 (PR #18). Pull request titles now follow `[<ID>] <type>(<scope>): <summary>` (`standards/general/pull-requests.md`).
- PB-E00 is blocked only by PB-E00-T03, which waits for the owner to decide where Suna business and product rules live.
- PB-E01-T02 (Kaizen) must finish before Kaizen removes its `roadmap/` folder; the Kaizen CI still reads it.
