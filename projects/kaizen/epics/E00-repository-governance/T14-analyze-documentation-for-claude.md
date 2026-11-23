---
id: KZ-E00-T14
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T12]
---

# Analyze the documentation for use by Claude

## Objective
Deliver a diagnosis and an approved plan for reorganizing the Markdown documentation, optimized so Claude Code reads little context and finds the right normative source.

## Context

Facts gathered in the audit of 2026-11-23:

- The repository versions 258 `.md` files (about 22.7 thousand lines); `docs/` has 20 subfolders.
- There are three template folders: `templates/`, `docs/templates/`, and `roadmap/templates/`.
- Historical record split across four places: `docs/worklog/` (23 files), `docs/evidence/`, `docs/history/`, and `docs/implementation/` (one file).
- One-off reports at the root of `docs/`: `REORGANIZATION-2026-11.md` and `documentation-review.md`.
- Names without a single case convention (`CATALOG.md` and `documentation-review.md`) or language (`componentes-shadcn.md` and `UPDATING-TRAINING-DATA.md`).
- Three hand-maintained indexes: `docs/README.md`, `docs/CATALOG.md`, and the per-subject `README.md` files.
- `templates/` holds manual forms that predate the app (weekly check-in, schedule change, new coach workout); the schedule already covers part of them.

This task does not move or delete documents; execution belongs to KZ-E00-T15.

## Inputs
- `docs/README.md` — current navigation.
- `docs/DOCUMENTATION-STANDARD.md` — current standard to review.
- `docs/CATALOG.md` — current catalog.
- `docs/REORGANIZATION-2026-11.md` — decisions from the previous reorganization.
- `scripts/validate-documentation.mjs` — automated rules that the new standard must keep or adjust.
- `CLAUDE.md` — root contract delivered by KZ-E00-T12.

## Deliverables
- Plan in `docs/plans/` (folder defined by the standard itself) with:
  - inventory by folder: count, purpose, frequency of use by the agent, and proposed destination;
  - single taxonomy: normative (architecture, style, delivery standards), operational (active roadmap, guides), and archive (history, evidence, journal);
  - naming convention (case, language, date and ID prefixes);
  - single index and what becomes generated or validated by script;
  - context strategy for Claude: what goes into `CLAUDE.md` by import, what becomes a project skill in `.claude/skills/`, and what stays outside the default context;
  - destination of `templates/`, `docs/templates/`, and `roadmap/templates/`;
  - move map with old and new path, to preserve links and IDs.

## Subtasks
- [ ] Inventory `docs/`, `roadmap/`, `templates/`, and the agent instructions.
- [ ] Identify normative, historical, duplicate, and obsolete documents.
- [ ] Propose taxonomy, naming convention, and a single index.
- [ ] Propose the Claude context strategy (imports, skills, exclusions).
- [ ] Build the move map.
- [ ] Submit the plan to the owner and record the approval.

## Validation
- The inventory adds up to all versioned `.md` files (`git ls-files '*.md'`).
- The plan distinguishes fact, decision, proposal, and unknown.
- `pnpm docs:check` passes with the plan added to the catalog.

## Acceptance criteria
- [ ] Every current document has a proposed destination: keep, move, merge, archive, or remove.
- [ ] The plan defines a small normative core, read by default, and states what stays outside the context.
- [ ] The owner approved the plan.

## Result
Not started.
