# KZ-E05 — Database, import, and access

## Expected outcome
Database chosen, versioned migrations, idempotent import, and a fixed server-only workspace, ready for the operational records. Authentication was postponed by explicit decision.

## Order
| Task    | Depends on       | Outcome                                              |
| ------- | ---------------- | ---------------------------------------------------- |
| KZ-E05-T01 | KZ-E03-T05          | Approved relational model                           |
| KZ-E05-T02 | KZ-E04-T03, KZ-E05-T01 | Database and migrations                                   |
| KZ-E05-T03 | KZ-E05-T02          | Idempotent import                               |
| KZ-E05-T04 | KZ-E05-T03          | Integrity tested                                  |
| KZ-E05-T05 | KZ-E05-T04          | Local backup/restore validated                        |
| KZ-E05-T06 | KZ-E05-T05          | Canceled; public mode with documented accepted risk |
| KZ-E05-T07 | KZ-E05-T04          | Code semantics and boundaries verified         |

| KZ-E05-T08 | KZ-E05-T02 | Audit with no vulnerabilities and compatibility validated |

## Out of scope
- Domains after P0.
- Sign-up, login, authentication, plan editing through the interface, or features outside P0.

## Closing criteria
- [x] Repeated import does not duplicate data.
- [x] Source, version, and active plan remain traceable.
- [x] Assignments and executions belong to the workspace and preserve the presented version.
- [x] The fixed workspace is resolved on the server; future authentication has an explicit gate before multi-user.
