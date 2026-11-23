---
id: PB-E02-T02
epic: PB-E02
project: playbook
repository: fradelli/playbook
depends_on: [PB-E02-T01]
---

# Define the stack profiles

## Objective

Describe each stack in `standards/profiles/`, so a project can declare one profile and inherit its rules.

## Inputs

- `standards/INVENTORY.md` — rows classified as profile.

## Deliverables

- `standards/profiles/next-fullstack.md` — Next.js with Server Actions and no separate backend (Kaizen).
- `standards/profiles/next-plus-api.md` — Next.js frontend with a separate NestJS API and a generated client (Suna).
- Profile column of the projects table in `README.md` linked to the profile files.

## Subtasks

- [ ] Write each profile from the inventory rows.
- [ ] State which general rules each profile overrides, if any.
- [ ] Link each project to its profile.

## Validation

- Each profile row in the inventory points to a profile section.
- `git diff --check` passes.

## Acceptance criteria

- [ ] Kaizen and Suna each declare one profile.

## Result

Not started.
