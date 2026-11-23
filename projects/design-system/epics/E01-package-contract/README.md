# DS-E01 — Package contract

## Expected outcome

The published package declares what consumers really need and its checks derive from a single source.

## Scope

- Peer dependencies.
- Export, tarball, and client boundary checks.
- Generated theme mapping.
- Coverage gate.

## Out of scope

- Component recipes and visual changes; they belong to DS-E02 and DS-E03.

## Order

| Task                                                  | Depends on | Outcome                                |
| ----------------------------------------------------- | ---------- | -------------------------------------- |
| [DS-E01-T01](T01-require-tailwind-peer.md)               | —          | Tailwind CSS is a required peer        |
| [DS-E01-T02](T02-derive-export-lists-from-one-source.md) | —          | Checks derived from exports and source |
| [DS-E01-T03](T03-generate-theme-from-tokens.md)          | DS-E03-T02    | Theme mapping generated from tokens    |
| [DS-E01-T04](T04-enable-coverage-thresholds.md)          | —          | Coverage measured and enforced         |
| [DS-E01-T05](T05-plan-development-dependency-upgrades.md) | DS-E00-T09 | Order of the development tool majors decided |

Status lives only in the project `README.md`.

## Closing criteria

- [ ] Every required task is `DONE`.
- [ ] Validation and decisions are recorded.
- [ ] The next eligible epic is identified.
