# Playbook rules

This repository holds the roadmap of every Fradelli project and the standards they share. It is public: never commit credentials, unnecessary personal identity, medical context, or personal comments.

## Language

Everything is written in English (en-US), in this repository and in every Fradelli repository: task names and descriptions, epics, documents, standards, code comments, commit messages, branch names, and pull request titles and descriptions.

The only exception is product copy shown to end users, which follows each product's localization (for example, the Portuguese and English messages of Kaizen).

## Reading order

1. Read this file.
2. Read `projects/<project>/ACTIVE.md` and only the selected task with its Inputs.
3. Open a project index (`projects/<project>/README.md`) only to plan or to change status or dependencies.

Finished tasks are evidence, not default context. Do not read trees recursively; locate titles and paths with `rg`.

## Projects and IDs

| Prefix | Project folder | `project` value |
| --- | --- | --- |
| `DS-` | `projects/design-system/` | `design-system` |
| `KZ-` | `projects/kaizen/` | `kaizen` |
| `SU-` | `projects/suna/` | `suna` |
| `PB-` | `projects/playbook/` | `playbook` |

- IDs are unique across the whole repository and carry the project prefix: `KZ-E00-T12`, `DS-E03-T01`.
- Epic folders and task files do not carry the prefix in their names: `projects/kaizen/epics/E00-repository-governance/T01-initialize-repository.md`. The prefix lives in the ID, the frontmatter, and the text.
- Migrated IDs keep their numbers: `E10-T09` becomes `KZ-E10-T09`.

## Project folder

```txt
projects/<project>/
  README.md     canonical status of epics and tasks
  ACTIVE.md     selected task and next action
  OVERVIEW.md   map by area (optional)
  epics/E00-<slug>/README.md
  epics/E00-<slug>/T01-<slug>.md
```

## Task frontmatter

```yaml
---
id: KZ-E00-T12
epic: KZ-E00
project: kaizen                          # design-system | kaizen | suna | playbook
repository: fradelli/nextjs-kaizen-app   # where the work happens; Inputs paths are relative to it
depends_on: [KZ-E00-T03, DS-E04-T01]     # may depend on tasks of other projects
external: [Maintainer merges the version PR]   # conditions that are not tasks; omit when empty
---
```

- Status is not in the frontmatter. It lives only in the project `README.md`.
- A task that touches two repositories is split into two tasks, one per repository, linked by `depends_on`.

## Task sections (in this order)

`Objective` · `Inputs` · `Deliverables` · `Subtasks` · `Validation` · `Acceptance criteria` · `Result`

- Extra sections (for example `Context`) may go between them. Required sections are never renamed or removed.
- `Inputs` lists exact paths in the task `repository`, plus sections for long documents. A path in another repository is written as `owner/repo: path`, for example `fradelli/nextjs-kaizen-app: docs/README.md`. No vague references such as "all documents" or "previous result".

## States

`PLANNED` · `READY` · `IN_PROGRESS` · `BLOCKED` · `DONE` · `CANCELLED`

- At most one `IN_PROGRESS` task per project.
- `READY` only when every dependency is `DONE`.
- An epic status follows its tasks. An epic may be `READY` when its first task is `READY`.
- Do not start a task that is not `READY` or `IN_PROGRESS`.

## Project index (`projects/<project>/README.md`)

- Epics table: `ID | Status | Epic | Outcome`.
- Tasks table: `ID | Status | Task | Depends on`. The dependency column repeats `depends_on` and `external` from the frontmatter with the same text.
- The `Order` table in each epic README repeats the same dependencies.

## ACTIVE (`projects/<project>/ACTIVE.md`)

- Fields: `Task`, `Status`, `Main input`, `Next action`, followed by "Resumption and parallel work".
- When no task is in progress, it records "No task selected" and the next candidate.

## Changing this repository

- Status and `ACTIVE.md` updates go straight to `main` as small commits titled with the task ID, for example `KZ-E10-T09: start` or `KZ-E10-T09: done`. This keeps status independent from the code branch where the task is being built.
- Planning changes (new epics or tasks, dependencies, scope, standards) go through a pull request with a `claude/<ID>-<description>` branch.

## Branches, commits, and PRs in code repositories

- Branch: `claude/<ID>-<description>`, for example `claude/KZ-E10-T09-complete-mira-adoption`.
- Commit and PR titles start with the task ID. Jira is no longer used.
- Older branches and PRs (`codex/E00-...`, `claude/E00-...`, `KAN-...`) stay as history; only new work uses the prefixed IDs.

## Starting or finishing a task

1. Update the status in the project `README.md` (and in the epic, if it changes).
2. Update the project `ACTIVE.md`.
3. When finishing, check only proven items and fill `Result` with short evidence.
4. In the code repository, follow its own rules (Changeset in the design system, CHANGELOG in Kaizen, and so on).

## Standards

Shared rules live in `standards/`. A rule that applies to one product only stays in that product's repository. Stack-specific rules are grouped by stack profile so that a full-stack Next.js app and a Next.js app with a separate API can share the common principles. The layout is defined in [PB-E02](projects/playbook/epics/E02-shared-standards/README.md).

## Validation

Run `npm run roadmap:check` before every commit, including status commits on `main`. CI runs it, its tests (`npm test`), and `git diff --check` on every pull request and every push to `main`. It needs Node.js 24 and no installed packages.

The check enforces:

- IDs unique and with the right prefix for `project`; `epic` and the file name match the ID and the epic folder.
- Every dependency exists (including across projects) and there are no cycles.
- Frontmatter, project index, and epic table carry the same dependencies.
- The seven sections are present and in order, relative links are valid, at most one `IN_PROGRESS` per project, and `ACTIVE.md` matches the index.
- No `READY` task has an open dependency.

Links under `docs/` are not checked until the legacy Suna documents move out ([PB-E00-T03](projects/playbook/epics/E00-repository-foundation/T03-relocate-suna-product-docs.md)).
