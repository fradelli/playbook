# Active task

- **Task:** [PB-E02-T04](epics/E02-shared-standards/T04-create-writing-standard.md) — Create the writing standard
- **Status:** IN_PROGRESS
- **Main input:** `CLAUDE.md`, the templates, and `scripts/roadmap-check.mjs`.
- **Next action:** write `standards/general/writing.md`, update the templates, and extend `roadmap:check` on branch `claude/PB-E02-T04-create-writing-standard`. In Kaizen, [KZ-E00-T17](../kaizen/epics/E00-repository-governance/T17-point-repository-to-playbook.md) is ready to point the repository to the playbook.

## Resumption and parallel work

- 2026-11-23: PB-E00-T01 created the playbook (PR #15), PB-E01-T01 imported the design system roadmap (PR #16), PB-E00-T04 added `npm run roadmap:check` (PR #17), PB-E00-T02 retired Jira (PR #18), and PB-E01-T02 migrated the Kaizen roadmap (PR #19).
- The Kaizen roadmap now lives in `projects/kaizen/`. Make Kaizen roadmap changes here; `roadmap/` in the Kaizen repository stays only until KZ-E00-T17 removes it.
- PB-E00 is blocked only by PB-E00-T03, which waits for the owner to decide where Suna business and product rules live.
