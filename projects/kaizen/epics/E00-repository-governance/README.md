# KZ-E00 — Repository governance

## Expected outcome
Public repository with governed branches, documentation, content publication, and deliveries, plus a traceable private origin for the legacy repository, with documentation contracts maintained as the application evolves.

## Scope
- Visibility and local clone.
- Integration, staging, and production branches.
- Root contract and task system.
- PR standard and progressive CI/CD governance.
- Provenance of the legacy repository.
- Minimal context and an executable roadmap before the MVP.
- Migration of the development agent to Claude, repository hygiene, and CI gates (audit of 2026-11-23).

## Out of scope
- Migration of personal data.
- Application code, Vercel, or database; code fixes from the audit belong to [KZ-E12](../E12-code-health/README.md).

## Order
| Task | Depends on | Outcome |
| --- | --- | --- |
| KZ-E00-T01 | — | Repository and branches initialized |
| KZ-E00-T02 | — | Canceled: repository public by decision |
| KZ-E00-T03 | KZ-E00-T01 | Root contract created |
| KZ-E00-T04 | KZ-E00-T03 | Operational roadmap created |
| KZ-E00-T06 | KZ-E00-T04 | Delivery governance adapted |
| KZ-E00-T05 | KZ-E00-T04, KZ-E00-T06 | Legacy origin recorded |
| KZ-E00-T07 | KZ-E03-T05 | Context optimized and dependencies cleaned up |
| KZ-E00-T08 | KZ-E00-T07 | Documentation consolidated and Codex targeted context |
| [KZ-E00-T09](T09-standardize-documentation.md) | KZ-E00-T08 | Existing documentation standardized and verifiable by script |
| [KZ-E00-T10](T10-create-local-roadmap-view.md) | KZ-E00-T09 | Roadmap, tasks, and documents browsable on a local page |
| [KZ-E00-T11](T11-apply-design-system-to-roadmap-view.md) | KZ-E00-T10 | Roadmap view with the design system and the Kaizen logo |
| [KZ-E00-T12](T12-migrate-agent-governance-to-claude.md) | — | Claude as the only agent, with no Codex-exclusive rule |
| [KZ-E00-T13](T13-remove-unused-repository-artifacts.md) | KZ-E00-T12 | Repository without artifacts and files that have no consumer |
| [KZ-E00-T14](T14-analyze-documentation-for-claude.md) | KZ-E00-T12 | Approved plan for documentation optimized for Claude |
| [KZ-E00-T15](T15-apply-approved-documentation-reorganization.md) | KZ-E00-T14 | Documentation reorganized according to the plan |
| [KZ-E00-T16](T16-strengthen-ci-gates.md) | — | Remote CI with the same gates as `pnpm run ci` |
| [KZ-E00-T17](T17-point-repository-to-playbook.md) | PB-E01-T02, PB-E01-T04 | Kaizen uses the playbook as its only roadmap |
| [KZ-E00-T18](T18-adopt-english-only-rule.md) | KZ-E00-T17 | Repository written in English, except end-user copy |
| [KZ-E00-T19](T19-reorganize-scripts-by-purpose.md) | KZ-E00-T13, KZ-E00-T18 | Scripts grouped by purpose |

Status lives only in the project `README.md`.

## Closing criteria
- [x] Public exposure has an explicit policy and a restrictive default.
- [x] Provenance points to an immutable base commit of the private legacy.
- [x] KZ-E01-T01 is eligible to choose the final snapshot.
- [ ] KZ-E00-T12 to KZ-E00-T16 are `DONE` or `CANCELLED` by a recorded decision (reopened on 2026-11-23 by the technical audit).
