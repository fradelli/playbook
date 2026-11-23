# DS-E00 — Repository governance

## Expected outcome

The repository is tracked by its own roadmap, governed for Claude Code only, documented without stale facts, and validated by reliable gates.

## Scope

- Roadmap system replacing Jira.
- Local agent artifacts and Claude contract.
- Stale documentation and documentation layout.
- Quality gate reliability and duplication.

## Out of scope

- Component, token, or package API changes; they belong to DS-E01, DS-E02, and DS-E03.

## Order

| Task                                                  | Depends on       | Outcome                                     |
| ----------------------------------------------------- | ---------------- | ------------------------------------------- |
| [DS-E00-T01](T01-create-roadmap-system.md)               | —                | Roadmap system created                      |
| [DS-E00-T02](T02-ignore-local-agent-artifacts.md)        | —                | Local agent folders ignored                 |
| [DS-E00-T03](T03-migrate-agent-governance-to-claude.md)  | DS-E00-T01          | Claude contract without Jira or Codex rules |
| [DS-E00-T04](T04-update-stale-documentation.md)          | —                | Documentation matches the published package |
| [DS-E00-T05](T05-reorganize-documentation-for-claude.md) | DS-E00-T03, DS-E00-T04 | Rules separated from historical evidence    |
| [DS-E00-T06](T06-streamline-quality-gates.md)            | —                | Reliable gates without duplicated checks    |
| [DS-E00-T07](T07-validate-roadmap-by-script.md)          | DS-E00-T01          | Roadmap consistency checked in CI           |
| [DS-E00-T08](T08-point-repository-to-playbook.md) | PB-E01-T01, PB-E01-T04 | Agents reach the roadmap through the playbook |

Status lives only in the project `README.md`.

## Closing criteria

- [ ] Every required task is `DONE`.
- [ ] Validation and decisions are recorded.
- [ ] The next eligible epic is identified.
