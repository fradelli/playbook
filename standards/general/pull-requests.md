# Pull request standard

Applies to every Fradelli repository. Each repository keeps a `.github/pull_request_template.md` with the body sections below and may add repository-specific validation items.

## Title

```text
[<task ID>] <type>(<scope>): <short summary>
```

Examples:

```text
[KZ-E10-T09] feat(ui): complete the Mira adoption
[DS-E02-T01] fix(menu): keep the shortcut highlight on focus
[PB-E00-T02] docs(playbook): retire Jira routing
```

Rules:

- The task ID comes from the playbook roadmap and is the first part of the title. Every delivery has a task; there is no "no task" exception.
- Types: `feat`, `fix`, `docs`, `refactor`, `test`, `ci`, `chore`, `build`, `perf`, `style`.
- The scope uses lowercase letters, numbers, and hyphens.
- When a pull request delivers several related tasks, the main one goes in the title and the others under `Notes`.
- If the task changes before merge, rename the pull request and update `Notes`.

## Branch

```text
claude/<task ID>-<short-description>
```

The description is lowercase kebab-case, for example `claude/KZ-E10-T09-complete-mira-adoption`.

## Commits

Commit subjects use the same `[<task ID>] <type>(<scope>): <summary>` form. Status commits on the playbook `main` branch use `<task ID>: start` or `<task ID>: done` (see the playbook `CLAUDE.md`).

## Body

Use these sections, in this order:

1. `Summary`: what the pull request delivers and where it stops.
2. `Problem`: the need or gap it addresses.
3. `Root cause`: why the repository needed the change. For documentation or setup work, explain why the repository needed it.
4. `Changes`: the real changes, as a list.
5. `Files added or updated`: real paths.
6. `Impact`, with `Fixed` and `Not changed`.
7. `Validation`: checks that ran, and checks that do not apply with the reason.
8. `Notes`: main task, related tasks, branch cleanup, known gaps.

Rules:

- Fill every section with evidence from this pull request before opening or updating it. Never leave a blank body, template placeholders, or a shortened alternative such as `What changed` and `Why`.
- Keep the headings and order of the repository template.
- Never check a validation item that did not run and pass. Record skipped or non-applicable checks with the reason.
- Update the body when the scope changes after opening.

## Validation by change type

- Documentation only: `git diff --check`, plus link and frontmatter checks when the repository has them.
- Application code: the repository's lint, typecheck, tests, and build.
- Dependencies: the repository's dependency audit, and the [dependency security remediation](dependency-security-remediation.md) rules when a vulnerability is involved.
- Data or database: schema, ID, import, and migration checks of the repository.

Each repository lists its exact commands in its own agent instructions or contributing guide.

## Merge

Task pull requests are squash-merged into the repository's integration branch. Promotions between long-lived branches (for example `developer` to `staging` to `main`) use merge commits. No force pushes or rewriting of shared history.
