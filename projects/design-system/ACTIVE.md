# Active task

- **Task:** [DS-E01-T01](epics/E01-package-contract/T01-require-tailwind-peer.md) — Require the Tailwind CSS peer dependency
- **Status:** IN_PROGRESS
- **Branch:** `claude/DS-E01-T01-require-tailwind-peer`
- **Main input:** `epics/E01-package-contract/T01-require-tailwind-peer.md`
- **Next action:** the maintainer merges `fradelli/design-system` PR #26; then fill `Result` and record `DS-E01-T01: done`.

- **Task:** [DS-E00-T11](epics/E00-repository-governance/T11-run-ci-on-version-pull-request.md) — Run CI on the version pull request without manual approval
- **Status:** IN_PROGRESS
- **Branch:** `claude/DS-E00-T11-run-ci-on-version-pr`
- **Main input:** `epics/E00-repository-governance/T11-run-ci-on-version-pull-request.md`
- **Next action:** find the cause of the `action_required` status, apply the fix, and update `docs/governance/releasing.md`. An Actions setting change is the maintainer's to apply.

- **Task:** [DS-E02-T02](epics/E02-component-quality/T02-require-accessible-close-labels.md) — Require accessible close labels
- **Status:** IN_PROGRESS
- **Branch:** `claude/DS-E02-T02-require-close-labels`
- **Main input:** `epics/E02-component-quality/T02-require-accessible-close-labels.md`
- **Next action:** require the close label on Dialog and Toast, remove the English defaults, and add a Changeset with migration notes.

## Resumption and parallel work

- Imported on 2026-11-23 from the untracked `roadmap/` of a local `fradelli/design-system` clone (audit at `145bb6e`). Statuses were kept as in the source; "Sandicts" was renamed to "Suna".
- DS-E00-T01 finished in the playbook form and DS-E00-T07 was cancelled in favor of PB-E00-T04, both on 2026-11-23 by the maintainer.
- DS-E00-T03 and DS-E00-T08 finished together in `fradelli/design-system` PR #23 (`9912651`).
- DS-E02-T01 finished in `fradelli/design-system` PR #24 (`3620791`).
- Corrective release path, decided on 2026-11-23 by the maintainer: DS-E02-T01, DS-E01-T01, and DS-E02-T02, then the release task proposed in `fradelli/playbook` PR #24.
- Kaizen consumes the exact published version through KZ-E10-T09 once the corrective release is out.
