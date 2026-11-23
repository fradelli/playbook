---
id: DS-E00-T02
epic: DS-E00
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Ignore local agent artifacts

## Objective

Keep tool folders created by local agents out of Git and out of the formatting gate.

## Context

- `.azul-engai/remote-config/managed.json` is untracked and not ignored; `npm run format:check` fails locally only because of it.
- No `.agents`, `.windsurf`, `.codex`, `.claude`, or `skills-lock.json` path is tracked.

## Inputs

- `.gitignore` — current ignore list.
- `.prettierignore` — current ignore list.

## Deliverables

- `.gitignore` and `.prettierignore` ignoring `.azul-engai/`.

## Subtasks

- [ ] Add `.azul-engai/` to both ignore files.
- [ ] Decide whether other agent folders (`.agents/`, `.windsurf/`, `.codex/`) are ignored preventively.

## Validation

- `npm run format:check` passes with `.azul-engai/` present.
- `git status` no longer lists `.azul-engai/`.

## Acceptance criteria

- [ ] Local agent folders do not appear in `git status` or in formatting results.

## Result

Not started.
