# Active task

- **Task:** [DS-E00-T11](epics/E00-repository-governance/T11-run-ci-on-version-pull-request.md) — Run CI on the version pull request without manual approval
- **Status:** IN_PROGRESS
- **Branch:** `claude/DS-E00-T11-run-ci-on-version-pr`
- **Main input:** `epics/E00-repository-governance/T11-run-ci-on-version-pull-request.md`
- **Next action:** PR #27 is merged. The maintainer sets up the release GitHub App (`RELEASE_APP_CLIENT_ID` variable and `RELEASE_APP_PRIVATE_KEY` secret, steps in `docs/governance/releasing.md`); once a CI run on the version PR starts on attempt 1, fill `Result` and record `DS-E00-T11: done`. Then start DS-E04-T03.

## Resumption and parallel work

- 2026-11-24: DS-E02-T02 done in `fradelli/design-system` PR #28 (`ca10a01`). DS-E00-T11 merged in PR #27; it closes once the maintainer sets up the release GitHub App and a CI run starts on its own on the version PR.
- 2026-11-24: DS-E01-T01 done in `fradelli/design-system` PR #26 (`96d9587`).
- Imported on 2026-11-23 from the untracked `roadmap/` of a local `fradelli/design-system` clone (audit at `145bb6e`). Statuses were kept as in the source; "Sandicts" was renamed to "Suna".
- DS-E00-T01 finished in the playbook form and DS-E00-T07 was cancelled in favor of PB-E00-T04, both on 2026-11-23 by the maintainer.
- DS-E00-T03 and DS-E00-T08 finished together in `fradelli/design-system` PR #23 (`9912651`).
- DS-E02-T01 finished in `fradelli/design-system` PR #24 (`3620791`).
- Corrective release path, decided on 2026-11-23 by the maintainer: DS-E02-T01, DS-E01-T01, and DS-E02-T02, then the release task proposed in `fradelli/playbook` PR #24.
- Kaizen consumes the exact published version through KZ-E10-T09 once the corrective release is out.
