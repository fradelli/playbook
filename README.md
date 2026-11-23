# Fradelli Playbook

The playbook holds what Fradelli builds and how it is built:

- **Roadmap:** epics, tasks, status, and the active task of every project.
- **Standards:** shared architecture, organization, code, documentation, and delivery rules that apply across projects.

Business rules that belong to a single product stay in that product's repository.

This repository is public. Never commit credentials, unnecessary personal identity, medical context, or personal comments.

Everything here, and in every Fradelli repository, is written in English, except product copy shown to end users.

Rules for working here: [CLAUDE.md](CLAUDE.md).

## Projects

| Prefix | Project | Repositories | Stack profile | Roadmap | Active task |
| --- | --- | --- | --- | --- | --- |
| `DS-` | Design system | `fradelli/design-system` | Component library | [Index](projects/design-system/README.md) | [Active](projects/design-system/ACTIVE.md) |
| `KZ-` | Kaizen | `fradelli/nextjs-kaizen-app` | Next.js full-stack | [Index](projects/kaizen/README.md) | [Active](projects/kaizen/ACTIVE.md) |
| `SU-` | Suna | `fradelli/nextjs-suna-app`, `fradelli/nestjs-suna-api` | Next.js + NestJS API | [Index](projects/suna/README.md) | [Active](projects/suna/ACTIVE.md) |
| `PB-` | Playbook | `fradelli/playbook` | Documentation | [Index](projects/playbook/README.md) | [Active](projects/playbook/ACTIVE.md) |

Stack profiles are planned in [PB-E02](projects/playbook/epics/E02-shared-standards/README.md).

## Layout

```txt
CLAUDE.md        rules for this repository
templates/       epic and task templates
projects/        one folder per project: index, active task, epics, tasks
standards/       shared rules (being built, see PB-E02)
docs/            legacy Suna documentation, being relocated (see PB-E00-T03)
```

## Local workspace

Clone this repository next to the project repositories:

```txt
fradelli/
  playbook/
  design-system/
  kaizen/nextjs-kaizen-app/
  suna/apps/nextjs-suna-app/
  suna/apps/nestjs-suna-api/
```

Project repositories point agents to this clone for the active task and shared standards.

## History

This repository was `fradelli/suna-docs` (earlier `sandicts-docs`), the shared documentation of Suna. It was renamed on 2026-11-23 to become the shared playbook for every project. The Suna documents under `docs/` remain until [PB-E00-T03](projects/playbook/epics/E00-repository-foundation/T03-relocate-suna-product-docs.md) moves them.
