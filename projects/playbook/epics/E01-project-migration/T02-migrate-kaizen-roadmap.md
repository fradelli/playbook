---
id: PB-E01-T02
epic: PB-E01
project: playbook
repository: fradelli/playbook
depends_on: [PB-E00-T01]
---

# Migrate the Kaizen roadmap

## Objective

Bring the Kaizen roadmap into `projects/kaizen/`, translated to English, with `KZ-` IDs and the playbook frontmatter, preserving every status and dependency.

## Inputs

- `fradelli/nextjs-kaizen-app: roadmap/README.md` — canonical status of epics and tasks.
- `fradelli/nextjs-kaizen-app: roadmap/ACTIVE.md` — selected task and resumption notes.
- `fradelli/nextjs-kaizen-app: roadmap/OVERVIEW.md` — map by area.
- `fradelli/nextjs-kaizen-app: roadmap/epics/` — epics and tasks.

## Deliverables

- `projects/kaizen/README.md`, `ACTIVE.md`, `OVERVIEW.md`, and `epics/`.
- `KZ-` task in `projects/kaizen/` (next free `KZ-E00` ID) for the Kaizen repository: adapt `scripts/validate-governance.mjs` to `[KZ-...]` titles and `claude/` branches, replace the links from `docs/` to `roadmap/`, split `docs:check`, update `AGENTS.md` and `CLAUDE.md`, and only then remove `roadmap/`.
- `KZ-` task for the Kaizen repository to adopt the English-only rule of `CLAUDE.md` (section "Language"): change the PT-BR rule in `AGENTS.md`, translate the documentation (266 of 277 Markdown files were in Portuguese on 2026-11-23), the pull request template, and script messages. Product copy in `messages/` stays localized.

## Subtasks

- [x] Prefix every ID, dependency, table row, link, and text reference with `KZ-`.
- [x] Add `project: kaizen` and `repository: fradelli/nextjs-kaizen-app`.
- [x] Translate titles and sections to English, keeping the seven required sections.
- [x] Keep statuses exactly as in the source.
- [x] Register the Kaizen repository follow-up task.

## Validation

- Every source task has a target with the same status and the same dependencies, prefixed.
- Spot-check the translation of at least one task per epic against the source.
- `git diff --check` passes.

## Acceptance criteria

- [x] `projects/kaizen/ACTIVE.md` points to the same task as the source.
- [x] Kaizen keeps its own `roadmap/` until the follow-up task lands, so its CI keeps working.

## Result

Migrated 13 epics and 125 tasks from `fradelli/nextjs-kaizen-app: roadmap/` at `developer` `1c3dd48`. Evidence:

- Conversion by script: `KZ-` prefix, `project` and `repository`, English required headings, the two external conditions ("Diet provided", "Decisions approved"), and 88 links outside the roadmap pointed to the Kaizen repository on GitHub.
- Translation by seven parallel agents, one group of epics each, with shared rules: frontmatter, IDs, links, code, and Order dependency cells unchanged; quoted end-user interface text kept in Portuguese with the English meaning.
- Checks after translation: frontmatter identical in all 125 tasks; headings, list items, table rows, checkboxes, and numbered items match the converted source in all 141 files; no Portuguese prose left in task files; statuses and dependencies of all 125 tasks match the source index; spot-checked one task per epic against the source.
- Source inconsistencies fixed: a missing external condition (KZ-E02-T04) and dependency order (KZ-E06-T02, KZ-E07-T02) in epic tables, and Validation placed after Acceptance criteria in the eight KZ-E11 tasks (lines unchanged, only moved).
- The script-wide replacement of "decisões aprovadas" also hit body text; three sentences were corrected by hand.
- Registered KZ-E00-T17 (point Kaizen to the playbook) and KZ-E00-T18 (English-only rule in Kaizen).
- `npm run roadmap:check` passed with 169 tasks; the Kaizen `developer` had no roadmap change after `1c3dd48` when checked.

Known gaps: some tasks quote Portuguese headings and file names of Kaizen documents (for example sections of `docs/architecture/TARGET-ARCHITECTURE.md`); KZ-E00-T18 updates them when those documents are translated. A few translated tables are not re-padded; they render correctly.
