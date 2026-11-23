# Design system — planning overview

Entry point by area to find what exists and where the remaining work lives. States are kept only in the [roadmap](README.md); the selected task and its next action live in [ACTIVE](ACTIVE.md). This map does not compute progress or replace acceptance criteria.

## Map by area

| Area                 | Where to check what exists                                  | Where to check remaining work                                                                                                                                                                                                            |
| -------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Governance and agent | [Repository contract](https://github.com/fradelli/design-system/blob/main/AGENTS.md)                         | [DS-E00: roadmap, Claude, documentation, and gates](epics/E00-repository-governance/README.md)                                                                                                                                              |
| Package and release  | [Release runbook](https://github.com/fradelli/design-system/blob/main/docs/governance/releasing.md)          | [DS-E01: package contract](epics/E01-package-contract/README.md) and [DS-E04: consumer release](epics/E04-consumer-release/README.md)                                                                                                          |
| Components           | [Mira catalog](https://github.com/fradelli/design-system/blob/main/docs/governance/base-mira-catalog.md)     | [DS-E02: quality](epics/E02-component-quality/README.md) and [DS-E03: Mira adoption](epics/E03-mira-adoption/README.md)                                                                                                                        |
| Tokens and styles    | [Shared style guide](https://github.com/fradelli/design-system/blob/main/docs/governance/shared-ui-style.md) | [DS-E01-T03](epics/E01-package-contract/T03-generate-theme-from-tokens.md), [DS-E02-T03](epics/E02-component-quality/T03-resolve-dark-variant-and-css-layers.md), and [DS-E02-T04](epics/E02-component-quality/T04-add-semantic-pastel-tokens.md) |

## Open questions

- Suna usage of LoadingRegion and StatusBadge is unknown (DS-E03-T08 and DS-E03-T09).
- The Card glass surface and the Button `tone` prop need a decision under ADR 0007 (DS-E03-T04 and DS-E03-T05).

## How to use

1. Pick the area on this map and check the state in the roadmap.
2. Open the task and only the inputs it needs; check dependencies and acceptance.
3. Record the result and evidence in the task, then update the state in the roadmap and the resumption note in ACTIVE.
