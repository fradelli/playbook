# Playbook roadmap

Canonical status of every `PB-` epic and task. Task files do not repeat the status.

Read [CLAUDE.md](../../CLAUDE.md) first, then [ACTIVE.md](ACTIVE.md).

## States

`PLANNED` · `READY` · `IN_PROGRESS` · `BLOCKED` · `DONE` · `CANCELLED`

## Epics

| ID | Status | Epic | Outcome |
| --- | --- | --- | --- |
| PB-E00 | BLOCKED | [Repository foundation](epics/E00-repository-foundation/README.md) | The former Suna docs repository works as the shared playbook |
| PB-E01 | PLANNED | [Project migration](epics/E01-project-migration/README.md) | Design system, Kaizen, and Suna roadmaps live here |
| PB-E02 | IN_PROGRESS | [Shared standards](epics/E02-shared-standards/README.md) | Architecture and organization rules shared across projects |
| PB-E03 | DONE | [Roadmap viewer](epics/E03-roadmap-viewer/README.md) | The interactive viewer reads every project from this repository |

## Tasks

| ID | Status | Task | Depends on |
| --- | --- | --- | --- |
| PB-E00-T01 | DONE | [Create the playbook structure](epics/E00-repository-foundation/T01-create-playbook-structure.md) | — |
| PB-E00-T02 | DONE | [Retire Jira and legacy Sandicts routing](epics/E00-repository-foundation/T02-retire-jira-and-legacy-routing.md) | PB-E00-T01 |
| PB-E00-T03 | BLOCKED | [Relocate Suna product documentation](epics/E00-repository-foundation/T03-relocate-suna-product-docs.md) | PB-E00-T01, Owner decides the repository for Suna business rules |
| PB-E00-T04 | DONE | [Create the roadmap check](epics/E00-repository-foundation/T04-create-roadmap-check.md) | PB-E00-T01 |
| PB-E00-T05 | DONE | [Allow parallel tasks per project](epics/E00-repository-foundation/T05-allow-parallel-tasks.md) | PB-E00-T04 |
| PB-E00-T06 | DONE | [Remove the in-progress limit](epics/E00-repository-foundation/T06-remove-in-progress-limit.md) | PB-E00-T05 |
| PB-E00-T07 | READY | [Batch status changes into a daily commit](epics/E00-repository-foundation/T07-batch-daily-status-commits.md) | PB-E00-T06 |
| PB-E00-T08 | READY | [Add the update-roadmap skill](epics/E00-repository-foundation/T08-add-update-roadmap-skill.md) | PB-E00-T04 |
| PB-E01-T01 | DONE | [Import the design system roadmap](epics/E01-project-migration/T01-import-design-system-roadmap.md) | PB-E00-T01 |
| PB-E01-T02 | DONE | [Migrate the Kaizen roadmap](epics/E01-project-migration/T02-migrate-kaizen-roadmap.md) | PB-E00-T01 |
| PB-E01-T03 | PLANNED | [Create the Suna roadmap](epics/E01-project-migration/T03-create-suna-roadmap.md) | PB-E00-T03 |
| PB-E01-T04 | DONE | [Define how project repositories use the playbook](epics/E01-project-migration/T04-define-repository-integration.md) | PB-E02-T04 |
| PB-E02-T01 | READY | [Inventory the Kaizen rules](epics/E02-shared-standards/T01-inventory-kaizen-rules.md) | PB-E00-T01 |
| PB-E02-T02 | PLANNED | [Define the stack profiles](epics/E02-shared-standards/T02-define-stack-profiles.md) | PB-E02-T01 |
| PB-E02-T03 | PLANNED | [Migrate the general standards](epics/E02-shared-standards/T03-migrate-general-standards.md) | PB-E02-T02 |
| PB-E02-T04 | DONE | [Create the writing standard](epics/E02-shared-standards/T04-create-writing-standard.md) | PB-E00-T04 |
| PB-E02-T05 | DONE | [Apply the writing standard to open tasks](epics/E02-shared-standards/T05-apply-writing-standard-to-open-tasks.md) | PB-E02-T04 |
| PB-E03-T01 | DONE | [Move the roadmap viewer](epics/E03-roadmap-viewer/T01-move-roadmap-viewer.md) | PB-E01-T01, PB-E01-T02 |
