---
id: KZ-E00-T15
epic: KZ-E00
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E00-T14]
---

# Apply the approved documentation reorganization

## Objective
Execute the plan approved in KZ-E00-T14, preserving IDs, history, and links.

## Inputs
- Approved plan delivered by KZ-E00-T14 in `docs/plans/` — move map, naming convention, and single index.
- `docs/DOCUMENTATION-STANDARD.md` — standard to be replaced by the approved one.
- `scripts/validate-documentation.mjs` — validator to adjust.
- `scripts/build-roadmap-view.mjs` — reading of documents by the local view.

## Deliverables
- Documents moved, merged, or archived according to the map.
- `docs/DOCUMENTATION-STANDARD.md` and the single index updated.
- `scripts/validate-documentation.mjs` and tests covering the new convention.
- `CLAUDE.md` and project skills pointing to the normative core.
- Template folders consolidated according to the plan.

## Subtasks
- [ ] Move files with `git mv` to preserve history.
- [ ] Update relative links and the index.
- [ ] Adjust the validator and its tests.
- [ ] Update the agent contract and the skills.
- [ ] Check the local roadmap view.

## Validation
- `pnpm docs:check` and `pnpm test:ci-scripts` pass.
- `pnpm roadmap:view` generates the page without broken links.
- No task, decision, or plan ID changed.

## Acceptance criteria
- [ ] The structure of `docs/` follows the approved taxonomy.
- [ ] There is a single document index.
- [ ] The validator prevents the return of the naming and organization problems addressed.

## Result
Not started.
