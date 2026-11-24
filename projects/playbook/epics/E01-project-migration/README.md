# PB-E01 — Project migration

## Expected outcome

The design system, Kaizen, and Suna roadmaps live in `projects/`, in English, with prefixed IDs, and each project repository points to this playbook.

## Scope

- Import the design system audit tasks.
- Translate and prefix the Kaizen roadmap.
- Create the Suna roadmap.
- Define how project repositories use the playbook.

## Out of scope

- Changes inside project repositories beyond pointing to the playbook; those are tasks of each project (`DS-`, `KZ-`, `SU-`).

## Order

| Task | Depends on | Outcome |
| --- | --- | --- |
| PB-E01-T01 | PB-E00-T01 | `projects/design-system/` holds the `DS-` tasks |
| PB-E01-T02 | PB-E00-T01 | `projects/kaizen/` holds the `KZ-` roadmap in English |
| PB-E01-T03 | PB-E00-T03 | `projects/suna/` holds the first `SU-` tasks |
| PB-E01-T04 | PB-E02-T04 | `standards/general/playbook-integration.md` defines how repositories use the playbook |

Status lives only in the project `README.md`.

## Closing criteria

- [ ] Every required task is `DONE`.
- [ ] Each project repository points agents to this playbook.
- [ ] The next eligible epic is identified.
