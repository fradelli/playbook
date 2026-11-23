# Active task

- **Task:** No task selected
- **Status:** —
- **Main input:** —
- **Next action:** start [PB-E00-T02](epics/E00-repository-foundation/T02-retire-jira-and-legacy-routing.md), which removes the Jira fields still present in the pull request template, or [PB-E01-T02](epics/E01-project-migration/T02-migrate-kaizen-roadmap.md) to bring the Kaizen roadmap here.

## Resumption and parallel work

- PB-E00-T01 created this structure on 2026-11-23, right after `fradelli/suna-docs` was renamed to `fradelli/playbook`.
- PB-E01-T01 imported the design system roadmap on 2026-11-23 (PR #16). DS-E00-T01 was then marked done in the playbook form, and DS-E00-T07 was cancelled because PB-E00-T04 covers every project.
- PB-E00-T04 added `npm run roadmap:check` and its CI on 2026-11-23 (PR #17). Run it before every commit, including status commits on `main`.
- PB-E00-T03 waits for the owner to decide where Suna business and product rules live.
- PB-E01-T02 (Kaizen) must finish before Kaizen removes its `roadmap/` folder; the Kaizen CI still reads it.
