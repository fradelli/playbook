# Design system roadmap

Canonical status of every `DS-` epic and task. Task files do not repeat the status.

Read [CLAUDE.md](../../CLAUDE.md) first, then [ACTIVE.md](ACTIVE.md). [Overview by area](OVERVIEW.md).

Imported on 2026-11-23 by [PB-E01-T01](../playbook/epics/E01-project-migration/T01-import-design-system-roadmap.md) from the audit of `fradelli/design-system` at `145bb6e`. Statuses are kept as in the source.

## States

`PLANNED` · `READY` · `IN_PROGRESS` · `BLOCKED` · `DONE` · `CANCELLED`

## Epics

| ID | Status | Epic | Outcome |
| --- | --- | --- | --- |
| DS-E00 | READY | [Repository governance](epics/E00-repository-governance/README.md) | Roadmap, Claude contract, current documentation, and reliable gates |
| DS-E01 | READY | [Package contract](epics/E01-package-contract/README.md) | Real peers, derived checks, generated theme, and coverage |
| DS-E02 | IN_PROGRESS | [Component quality](epics/E02-component-quality/README.md) | Accessible, consistent, and cataloged components |
| DS-E03 | READY | [Mira adoption](epics/E03-mira-adoption/README.md) | Every component follows a Mira recipe or a recorded exception |
| DS-E04 | PLANNED | [Consumer release](epics/E04-consumer-release/README.md) | One published version adopted by every consumer |

## Tasks

| ID | Status | Task | Depends on |
| --- | --- | --- | --- |
| DS-E00-T01 | DONE | [Create the roadmap system](epics/E00-repository-governance/T01-create-roadmap-system.md) | — |
| DS-E00-T02 | READY | [Ignore local agent artifacts](epics/E00-repository-governance/T02-ignore-local-agent-artifacts.md) | — |
| DS-E00-T03 | DONE | [Migrate agent governance to Claude](epics/E00-repository-governance/T03-migrate-agent-governance-to-claude.md) | DS-E00-T01 |
| DS-E00-T04 | READY | [Update stale documentation](epics/E00-repository-governance/T04-update-stale-documentation.md) | — |
| DS-E00-T05 | PLANNED | [Reorganize documentation for Claude](epics/E00-repository-governance/T05-reorganize-documentation-for-claude.md) | DS-E00-T03, DS-E00-T04 |
| DS-E00-T06 | READY | [Streamline the quality gates](epics/E00-repository-governance/T06-streamline-quality-gates.md) | — |
| DS-E00-T07 | CANCELLED | [Validate the roadmap by script](epics/E00-repository-governance/T07-validate-roadmap-by-script.md) | DS-E00-T01 |
| DS-E00-T08 | DONE | [Point the repository to the playbook](epics/E00-repository-governance/T08-point-repository-to-playbook.md) | PB-E01-T01 |
| DS-E01-T01 | READY | [Require the Tailwind CSS peer dependency](epics/E01-package-contract/T01-require-tailwind-peer.md) | — |
| DS-E01-T02 | READY | [Derive export lists from one source](epics/E01-package-contract/T02-derive-export-lists-from-one-source.md) | — |
| DS-E01-T03 | PLANNED | [Generate the Tailwind theme from tokens](epics/E01-package-contract/T03-generate-theme-from-tokens.md) | DS-E03-T02 |
| DS-E01-T04 | READY | [Enable coverage with thresholds](epics/E01-package-contract/T04-enable-coverage-thresholds.md) | — |
| DS-E02-T01 | IN_PROGRESS | [Fix the menu shortcut highlight](epics/E02-component-quality/T01-fix-menu-shortcut-highlight.md) | — |
| DS-E02-T02 | READY | [Require accessible close labels](epics/E02-component-quality/T02-require-accessible-close-labels.md) | — |
| DS-E02-T03 | READY | [Resolve the dark variant and CSS layers](epics/E02-component-quality/T03-resolve-dark-variant-and-css-layers.md) | — |
| DS-E02-T04 | READY | [Add semantic tokens for pastel colors](epics/E02-component-quality/T04-add-semantic-pastel-tokens.md) | — |
| DS-E02-T05 | READY | [Complete stories and standardize naming](epics/E02-component-quality/T05-complete-stories-and-naming.md) | — |
| DS-E02-T06 | PLANNED | [Evaluate visual regression testing](epics/E02-component-quality/T06-evaluate-visual-regression.md) | DS-E02-T05 |
| DS-E03-T01 | READY | [Record the Mira-only component decision](epics/E03-mira-adoption/T01-record-mira-only-adr.md) | — |
| DS-E03-T02 | PLANNED | [Add shadcn token aliases and recipe configuration](epics/E03-mira-adoption/T02-add-shadcn-token-aliases.md) | DS-E03-T01 |
| DS-E03-T03 | PLANNED | [Migrate overlays to Base UI Mira](epics/E03-mira-adoption/T03-migrate-overlays-to-mira.md) | DS-E03-T01, DS-E03-T02 |
| DS-E03-T04 | PLANNED | [Migrate basic primitives to Mira](epics/E03-mira-adoption/T04-migrate-basic-primitives-to-mira.md) | DS-E03-T01, DS-E03-T02 |
| DS-E03-T05 | PLANNED | [Align adapted recipes with Mira](epics/E03-mira-adoption/T05-align-adapted-recipes.md) | DS-E03-T01, DS-E03-T02, DS-E02-T01 |
| DS-E03-T06 | PLANNED | [Admit the Spinner and Empty recipes](epics/E03-mira-adoption/T06-admit-spinner-and-empty.md) | DS-E03-T01, DS-E03-T02 |
| DS-E03-T07 | PLANNED | [Replace PendingButton with Button and Spinner](epics/E03-mira-adoption/T07-replace-pending-button.md) | DS-E03-T05, DS-E03-T06 |
| DS-E03-T08 | PLANNED | [Replace LoadingRegion with Skeleton, Spinner, and Empty](epics/E03-mira-adoption/T08-replace-loading-region.md) | DS-E03-T04, DS-E03-T06 |
| DS-E03-T09 | PLANNED | [Replace StatusBadge with Badge variants](epics/E03-mira-adoption/T09-replace-status-badge.md) | DS-E03-T04 |
| DS-E03-T10 | PLANNED | [Replace NavigationItem with Button rendering a link](epics/E03-mira-adoption/T10-replace-navigation-item.md) | DS-E03-T05 |
| DS-E03-T11 | PLANNED | [Admit the Drawer, Textarea, InputGroup, and ButtonGroup recipes](epics/E03-mira-adoption/T11-admit-form-and-layout-recipes.md) | DS-E03-T03, DS-E03-T05 |
| DS-E04-T01 | PLANNED | [Publish the consolidated release](epics/E04-consumer-release/T01-publish-consolidated-release.md) | DS-E01-T01, DS-E02-T02, DS-E02-T03, DS-E03-T03, DS-E03-T04, DS-E03-T05, DS-E03-T07, DS-E03-T08, DS-E03-T09, DS-E03-T10, Maintainer merges the version PR |
| DS-E04-T02 | PLANNED | [Hand off the release to consumers](epics/E04-consumer-release/T02-hand-off-release-to-consumers.md) | DS-E04-T01 |
| DS-E04-T03 | PLANNED | [Publish a corrective release](epics/E04-consumer-release/T03-publish-corrective-release.md) | DS-E01-T01, DS-E02-T01, DS-E02-T02, Maintainer merges the version PR |

When a public package change lands, the design system repository also needs a Changeset.
