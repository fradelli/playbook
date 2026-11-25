---
id: KZ-E00-T13
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T12]
---

# Remove unused artifacts and files from the repository

## Objective
Leave only files with a proven consumer in the root and support folders, with the origin of each removal recorded.

## Context

Findings from the audit of 2026-11-23 on `developer` (`364c71f`):

- `.azul-engai/remote-config/managed.json` is external tool configuration (`"files": []`), versioned by accident in PR #86.
- `.tmp-swc/` is an empty unversioned folder not covered by `.gitignore` (which covers `/.tmp/` and `/.tmp-*.log`).
- `.nvmrc` and `.node-version` have the same content (`24.20.0`).
- `vendor/` versions five `@fradelli/ui` packages; only `fradelli-ui-mira-table-progress.tgz` is referenced by `package.json`. The others (`mira-agenda-final`, `mira-color-swatch`, `mira-dark-tooltips`, `mira-executor-verified`) are unused.
- `scripts/test-i18n-http.mjs` and `scripts/validate-data.d.mts` are not called by `package.json` or by CI; `scripts/verify-doc-preservation.mjs` (`docs:preservation`) served KZ-E00-T09 and does not run in CI.
- `public/icons/favicon-16.png`, `favicon-32.png`, and `favicon-48.png` are used only by `roadmap/view/index.html`.

## Inputs
- `.gitignore` — patterns for local artifacts.
- `package.json` — `scripts` section and `@fradelli/ui` dependency.
- `.github/workflows/ci.yml` — commands executed.
- `roadmap/ACTIVE.md` — section "Retomada e trabalhos paralelos" (Resumption and parallel work), about the local design system package.
- `docs/evidence/i18n/I18N-UI-IMPLEMENTATION.md` — historical use of `test-i18n-http.mjs`.
- `docs/DOCUMENTATION-STANDARD.md` — mention of `docs:preservation`.

## Deliverables
- Removal of `.azul-engai/` from Git and a matching pattern in `.gitignore`.
- `.gitignore` covering `/.tmp-*/`.
- A single Node version file, with the consumers (CI, Vercel, documentation) checked.
- Removal of the four unused `.tgz` files in `vendor/`.
- Decision for each unused script: remove, integrate into CI, or move the record to history.

## Subtasks
- [ ] Check each item with `git grep` before removing it.
- [ ] Remove `.azul-engai/`, `.tmp-swc/`, and the duplicate version file.
- [ ] Remove the orphan `.tgz` files.
- [ ] Decide and apply the destination of the unused scripts.
- [ ] Record the icons used only by the roadmap view.

## Validation
- `pnpm install --frozen-lockfile` works without the removed packages.
- `pnpm run ci` passes, except database-dependent gates when there is no local PostgreSQL, recorded as not run.
- `git grep` returns no reference to a removed file outside the history.

## Acceptance criteria
- [ ] No versioned file without a consumer remains in `vendor/`, `scripts/`, or the root.
- [ ] `.gitignore` covers all known local artifacts.
- [ ] Each removal has its reason recorded in the PR.

## Out of scope

- Reorganizing `scripts/` by purpose moved to [KZ-E00-T19](T19-reorganize-scripts-by-purpose.md) on 2026-11-24 by the maintainer, so that it runs after KZ-E00-T18, which translates the same files.

## Result
Not started.
