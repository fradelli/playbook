# PB-E00 — Repository foundation

## Expected outcome

The former Suna docs repository works as the shared Fradelli playbook, with roadmap rules, templates, and a check that keeps them consistent.

## Scope

- Repository structure, rules, and templates.
- Removal of Jira and Sandicts-specific routing.
- Relocation of Suna product documents.
- An automated roadmap check.

## Out of scope

- Moving project roadmaps (PB-E01).
- Writing shared standards (PB-E02).

## Order

| Task | Depends on | Outcome |
| --- | --- | --- |
| PB-E00-T01 | — | Structure, rules, templates, and the playbook roadmap |
| PB-E00-T02 | PB-E00-T01 | No Jira or Sandicts routing left |
| PB-E00-T03 | PB-E00-T01, Owner decides the repository for Suna business rules | Suna product documents live with the Suna project |
| PB-E00-T04 | PB-E00-T01 | `npm run roadmap:check` runs locally and in CI |
| PB-E00-T05 | PB-E00-T04 | Up to three tasks in progress per project, each listed in `ACTIVE.md` |
| PB-E00-T06 | PB-E00-T05 | Any number of tasks in progress per project, each listed in `ACTIVE.md` |
| PB-E00-T07 | PB-E00-T06 | Status changes reach `main` in one daily commit |
| PB-E00-T08 | PB-E00-T04 | `/update-roadmap` settles a roadmap change before editing and validates it |

Status lives only in the project `README.md`.

## Closing criteria

- [ ] Every required task is `DONE`.
- [ ] Validation and decisions are recorded.
- [ ] The next eligible epic is identified.
