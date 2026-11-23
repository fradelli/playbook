---
id: KZ-E00-T06
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T04]
---

# Adapt PR and CI/CD governance

## Objective
Adapt the proven Sandicts rules to the local flow, without Jira and with the future application only in Next.js and the database.

## Inputs
- Sandicts PR and CI/CD standards.
- Kaizen branches and roadmap.

## Deliverables
- PR title and template based on local IDs.
- Promotion template between environments.
- Progressive CI/CD policy.
- Rules synchronized in the root contract and in future tasks.

## Subtasks
- [x] Replace Jira with the ID `KZ-E00-T01` without creating an untracked exception.
- [x] Preserve the problem, cause, impact, validation, and notes sections.
- [x] Adapt checks to Next.js and the integrity of personal data.
- [x] Separate current documentation from future workflows.
- [x] Update the open PR according to the standard.

## Validation
- Check links, IDs, dependencies, templates, and the diff.

## Acceptance criteria
- [x] A PR can be understood and audited without Jira.
- [x] CI/CD has a defined direction, gates, environments, and rollback.
- [x] Rules do not anticipate workflows during the phase without code.

## Result
Sandicts standards adapted to Kaizen with a mandatory roadmap ID, an eight-section template, a promotion matrix, and checks specific to Next.js and data integrity.
