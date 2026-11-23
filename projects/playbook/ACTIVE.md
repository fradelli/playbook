# Active task

- **Task:** [PB-E01-T01](epics/E01-project-migration/T01-import-design-system-roadmap.md) — Import the design system roadmap
- **Status:** IN_PROGRESS
- **Main input:** `fradelli/design-system: roadmap/` (local, untracked): 5 epics and 30 tasks.
- **Next action:** copy the epics and tasks into `projects/design-system/` with `DS-` IDs and the playbook frontmatter, on branch `claude/PB-E01-T01-import-design-system-roadmap`.

## Resumption and parallel work

- PB-E00-T01 created this structure on 2026-11-23, right after `fradelli/suna-docs` was renamed to `fradelli/playbook`.
- PB-E00-T03 waits for the owner to decide where Suna business and product rules live.
- PB-E01-T02 (Kaizen) must finish before Kaizen removes its `roadmap/` folder; the Kaizen CI still reads it.
