---
name: update-roadmap
description: Settle a roadmap change with the maintainer through question rounds, edit every file it touches, run the roadmap check, and commit by the right route.
disable-model-invocation: true
argument-hint: "<ID> <what changed>  e.g. KZ-E00-T18 done, PR #99 merged"
---

# Update the roadmap

Request: `$ARGUMENTS`

One roadmap change usually reaches several files, and they must say the same thing. The rules for each file live in [CLAUDE.md](../../../CLAUDE.md); this skill is the order of work.

| File | What it holds |
| --- | --- |
| `projects/<project>/README.md` | Canonical status of epics and tasks; the `Depends on` column |
| `projects/<project>/epics/E00-<slug>/README.md` | Scope, out of scope, the `Order` table with dependencies and outcomes |
| `projects/<project>/epics/E00-<slug>/T01-<slug>.md` | Frontmatter (`depends_on`, `external`) and the task sections |
| `projects/<project>/ACTIVE.md` | One block per `IN_PROGRESS` task, the next candidate, and resumption notes |
| `standards/general/writing.md` | How each task and epic section is written |
| `templates/TASK-TEMPLATE.md`, `templates/EPIC-TEMPLATE.md` | Starting point for a new task or epic |

## 1. Read the facts

Answer from the files everything they can answer. The maintainer answers only decisions.

- Read the item: the task file, its row in the project index, and its row in the epic `Order` table.
- Find its **dependents**: `rg -n "<ID>" projects/`. They are the tasks whose `depends_on` names it, the `ACTIVE.md` lines that cite it, and the epic it belongs to.
- Run `git status --short` and `git branch --show-current`. Note every change that is not yours and the branch you are on.
- Run `git fetch` and compare `main` with `origin/main`.

**Done when:** you can name every file the change may touch and every dependent.

## 2. Ask in rounds

Build a decision tree from the facts. The branches that usually appear:

- **Route:** a status change (`start`, `done`, `blocked`, back to `READY`) or a planning change (new epic or task, scope, dependencies, standards). See step 5.
- **Status:** the new value, and whether it is allowed. `READY` needs every dependency `DONE`; `IN_PROGRESS` starts only from `READY`.
- **Dependents:** a task going `DONE` may make a dependent `READY`. Ask about each one.
- **Epic status:** it follows its tasks. Ask when this change moves it.
- **ACTIVE.md:** add the block on start (`Task`, `Status`, `Branch`, `Main input`, `Next action`), remove only this task's block on finish, and update the next candidate when no task is left.
- **Finishing:** which subtasks and acceptance criteria are proven, and the evidence for `Result` (PR, commit, command output).
- **New task:** the next free number in the epic, the `repository`, `depends_on`, and `external`. A task that touches two repositories becomes two tasks linked by `depends_on`. A number that left the roadmap is never reused.
- **Dependency change:** the same text in the frontmatter, the project index `Depends on` column, and the epic `Order` table.
- **Foreign changes:** changes that are not yours in the same files are left out of the commit, included, or a reason to stop.

Number the questions and give your recommendation on each, based on the facts:

```
❓ **Q1** - **<title>**: <question, with the options>

➡️ <your recommendation>

---

❓ **Q2** - ...
```

Each round carries every question that does not depend on an open answer. Answers open new questions; ask them in the next round. When an answer needs a fact from the files, read it instead of asking.

**Done when:** every branch is visited and nothing is assumed. Then show the **change list**, file by file and line by line, and wait for the maintainer to confirm it.

## 3. Edit

Edit exactly the confirmed change list. Write every text by `standards/general/writing.md`. When editing reveals an effect the change list does not cover, stop and ask.

## 4. Validate

Run `npm run roadmap:check`. Run `npm test` too when `scripts/` changed.

- A failure means the roadmap data is wrong. Fix the data and keep the check as it is.
- `scripts/writing-baseline.json` may only shrink.

**Done when:** both commands pass.

## 5. Commit

Stage only your files, with `git add -p` when a file also holds foreign changes. Review `git diff --staged`: this repository is public, so unstage any credential, personal identity, medical context, or personal comment and tell the maintainer.

| Route | Branch | Commit subject |
| --- | --- | --- |
| Status | `main`, after `git pull --rebase` | `<ID>: start`, `<ID>: done`, or another short event such as `<ID>: blocked` |
| Planning | `claude/<ID>-<description>` from `origin/main` | `[<ID>] docs(roadmap): <summary>` |

When the current checkout is on another branch or holds foreign changes, work in a separate worktree from `origin/main` and leave the checkout as it is.

Push and open the pull request after the maintainer confirms. The pull request follows `standards/general/pull-requests.md`.

## 6. Report

Say what changed in each file, the check result, the commit hash, and the branch or pull request.
