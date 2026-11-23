---
id: DS-E00-T05
epic: DS-E00
project: design-system
repository: fradelli/design-system
depends_on: [DS-E00-T03, DS-E00-T04]
---

# Reorganize documentation for Claude

## Objective

Separate normative rules from historical evidence so that an agent reads only the documents that govern the current change.

## Context

- `docs/governance/` mixes rules (`component-admission.md`, `shared-ui-style.md`) with dated evidence (`glass-validation.md`, `select-validation.md`, `persistent-status-validation.md`).
- `docs/implementation/kan-*.md` are Jira-era implementation records with their own frontmatter.
- `docs/governance/releasing.md` and `docs/governance/versioning-and-releases.md` overlap.
- `docs/decisions/0006-mira-component-recipes.md` has no context or alternatives section and does not say how recipes are imported.

## Inputs

- `docs/decisions/`, `docs/governance/`, and `docs/implementation/` — file list and headings.
- `CLAUDE.md` — reading protocol created by DS-E00-T03.

## Deliverables

- A documented folder layout separating rules, decisions, and evidence.
- Moved or merged files with updated links.
- `CLAUDE.md` pointing to the documents to read per type of change.

## Subtasks

- [ ] Propose the target layout and get maintainer approval.
- [ ] Move historical evidence and Jira-era records without rewriting them.
- [ ] Merge the overlapping release documents.
- [ ] Add per-change reading instructions to `CLAUDE.md`.

## Validation

- No broken relative link in `README.md`, `CLAUDE.md`, or `docs/`.
- `npm run format:check` and `git diff --check` pass.

## Acceptance criteria

- [ ] `CLAUDE.md` or a linked document describes a layout in which rules, decisions, and evidence live in separate folders, and no file sits outside it.
- [ ] `CLAUDE.md` lists the documents to read before changing components, tokens, or releases.

## Result

Not started.
