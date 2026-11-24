# Playbook integration

Defines how a project repository reads its roadmap and the shared rules from this playbook. Every project repository applies it once, and an agent working in that repository follows it.

## Section for `CLAUDE.md` and `AGENTS.md`

Copy this section unchanged into the project repository's `CLAUDE.md`, right after its opening paragraph. Replace only `<project>`, `<PREFIX>`, and `<path>` with the values in the table below. In `AGENTS.md`, copy the same section or link to the one in `CLAUDE.md`.

```markdown
## Playbook

The roadmap and the shared standards live in [`fradelli/playbook`](https://github.com/fradelli/playbook), cloned locally at `<path>`. Tasks of this repository use the `<PREFIX>-` prefix.

- Before implementing, read the playbook [`CLAUDE.md`](https://github.com/fradelli/playbook/blob/main/CLAUDE.md), then [`projects/<project>/ACTIVE.md`](https://github.com/fradelli/playbook/blob/main/projects/<project>/ACTIVE.md), then only the selected task and its Inputs.
- Follow the standards the task cites, and always the [writing](https://github.com/fradelli/playbook/blob/main/standards/general/writing.md) and [pull request](https://github.com/fradelli/playbook/blob/main/standards/general/pull-requests.md) standards.
- Change roadmap tasks, status, and `ACTIVE.md` only in the playbook, following its [integration standard](https://github.com/fradelli/playbook/blob/main/standards/general/playbook-integration.md).
- Put a new rule where the integration standard's placement table says.
```

| Repository | `<project>` | `<PREFIX>` | `<path>` |
| --- | --- | --- | --- |
| `fradelli/design-system` | `design-system` | `DS` | `../playbook` |
| `fradelli/nextjs-kaizen-app` | `kaizen` | `KZ` | `../../playbook` |
| `fradelli/nextjs-suna-app` | `suna` | `SU` | `../../../playbook` |
| `fradelli/nestjs-suna-api` | `suna` | `SU` | `../../../playbook` |

The paths assume the local workspace in the playbook [`README.md`](../../README.md#local-workspace).

## Reading order when implementing

1. The project repository's `CLAUDE.md`: product rules, boundaries, and validation commands.
2. The playbook `CLAUDE.md` and `projects/<project>/ACTIVE.md`.
3. The selected task and only its Inputs, at the sections listed.
4. The standards the task cites, plus the writing and pull request standards.

Do not read the project index, finished tasks, or other standards unless the task needs them for planning or a status change.

## Where a new rule goes

| The rule applies to | Destination |
| --- | --- |
| Every Fradelli project | `standards/general/` in the playbook, through a playbook pull request |
| One stack profile | `standards/profiles/<profile>.md` in the playbook, through a playbook pull request |
| One product only | That product repository, in its `CLAUDE.md` or `docs/` |

When a rule is found in a product repository but applies more widely, move it to the playbook in its own pull request and replace the local copy with a link. Do not delete a rule before its new home exists.

## Status changes from another repository

A session working in a project repository updates the roadmap in the local playbook clone:

1. Run `git -C <path> switch main` and `git -C <path> pull --rebase --autostash`.
2. Edit the status in `projects/<project>/README.md` and, if it changes, in the epic `README.md`; update `projects/<project>/ACTIVE.md`. When starting, add a block for the task and keep the blocks of other tasks in progress. When finishing, remove only the block of that task.
3. Run `npm run roadmap:check` in the clone.
4. Commit only those files with the subject `<ID>: start` or `<ID>: done`, and push to `main`.

Planning changes (new tasks, scope, dependencies, standards) use a `claude/<ID>-<description>` branch and a playbook pull request instead. Return the clone to `main` afterwards, because other sessions may share it.

## Local setup

Claude Code reads files outside the project only from added directories. Add the playbook clone with `permissions.additionalDirectories` in the project's `.claude/settings.local.json`, which is personal and not versioned:

```json
{
  "permissions": {
    "additionalDirectories": ["C:/Users/<user>/Projects/fradelli/playbook"]
  }
}
```

- Use the absolute path of your clone. Whether the setting accepts relative paths is an unknown; the Claude Code documentation does not state it.
- Reading files in an added directory needs no prompt; edits follow the session's permission mode.
- For a single session, `claude --add-dir <path>` or `/add-dir <path>` has the same effect.
