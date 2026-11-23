---
id: KZ-E05-T08
epic: KZ-E05
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E05-T02]
---

# Fix dependency vulnerabilities

## Objective
Fix the findings of the 26/10/2026 audit in a separate branch, prove
compatibility, and merge the PR before KZ-E06-T19.

## Inputs
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `.github/workflows/ci.yml`
- `.github/pull_request_template.md`

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task; equivalent content in the "Validation and integration" section.

## Acceptance criteria
Not recorded in the original version of this task.

## Initial evidence

`pnpm audit --json`: 19 findings, of which 3 low, 10 moderate, 4 high, and 2 critical.

| Package        | Detected version | Lowest fix reported by the scanner |
| -------------- | ---------------- | ---------------------------------- |
| next           | 16.3.8           | 16.4.1                             |
| zod            | 4.6.5            | 4.6.6                              |
| @vitest/mocker | 4.1.11           | 4.1.12                             |
| vite           | 8.2.2            | 8.2.4                              |
| undici         | 8.10.2           | 8.12.2                             |
| fast-uri       | 3.1.8            | 3.1.9                              |

## Policy

- Update Next.js and eslint-config-next together; keep Vitest and coverage-v8 aligned.
- Update Zod within the same major line and regenerate compatible transitive resolutions.
- Do not edit the lockfile manually or use suppressions or lower the audit level.
- Preserve the braces fork and the earlier overrides that do not belong to the current findings.
- Do not bring Design System changes or features into this branch.

## Validation and integration

- [x] Frozen install and audit with no findings.
- [x] Format, lint, structure, types, and data integrity approved.
- [x] Unit tests, PostgreSQL, backup/restore, and build approved.
- [x] Security PR with CI approved and merged into developer.
      The integration of KZ-E06-T19 is the next step, after the merge of this fix; it is not
      part of the closing criteria of the dependency fix.

## Traceability of the findings

Source: initial report of `pnpm audit --json` on 26/10/2026 and the primary advisories
referenced below. The vulnerable range is the one reported by the scanner.

| Advisory                                                                 | Package        | Severity   | Vulnerable range         | Version applied |
| ------------------------------------------------------------------------ | -------------- | ---------- | ------------------------ | --------------- |
| [GHSA-698v-4r3x-3vcv](https://github.com/advisories/GHSA-698v-4r3x-3vcv) | vite           | moderate   | `>=8.2.0 <=8.2.3`        | 8.2.4           |
| [GHSA-r825-w8mm-5pxw](https://github.com/advisories/GHSA-r825-w8mm-5pxw) | vite           | moderate   | `>=8.2.0 <=8.2.3`        | 8.2.4           |
| [GHSA-587h-7wmj-h5pm](https://github.com/advisories/GHSA-587h-7wmj-h5pm) | vite           | high       | `>=8.2.0 <=8.2.3`        | 8.2.4           |
| [GHSA-9jrq-w75r-8gcw](https://github.com/advisories/GHSA-9jrq-w75r-8gcw) | vite           | low        | `>=8.2.0 <=8.2.3`        | 8.2.4           |
| [GHSA-rq7h-c2jc-7f22](https://github.com/advisories/GHSA-rq7h-c2jc-7f22) | vite           | moderate   | `>=8.2.0 <=8.2.3`        | 8.2.4           |
| [GHSA-vfpm-58rq-9qcg](https://github.com/advisories/GHSA-vfpm-58rq-9qcg) | vite           | moderate   | `>=8.2.0 <=8.2.3`        | 8.2.4           |
| [GHSA-qxg6-89mg-rqv8](https://github.com/advisories/GHSA-qxg6-89mg-rqv8) | @vitest/mocker | moderate   | `>=2.1.0-beta.7 <4.1.12` | 4.1.12          |
| [GHSA-xp26-3454-mjgp](https://github.com/advisories/GHSA-xp26-3454-mjgp) | @vitest/mocker | moderate   | `>=4.1.11 <4.1.12`       | 4.1.12          |
| [GHSA-2464-fhr4-w9xw](https://github.com/advisories/GHSA-2464-fhr4-w9xw) | next           | critical   | `>=16.0.0 <=16.4.0`      | 16.4.2          |
| [GHSA-p3m5-59mp-jv5r](https://github.com/advisories/GHSA-p3m5-59mp-jv5r) | next           | high       | `>=16.0.0 <=16.4.0`      | 16.4.2          |
| [GHSA-673q-mjm6-r5xr](https://github.com/advisories/GHSA-673q-mjm6-r5xr) | next           | critical   | `>=16.0.0 <=16.4.0`      | 16.4.2          |
| [GHSA-mrhx-c7xc-m3w5](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5) | zod            | high       | `<4.6.6`                 | 4.6.7           |
| [GHSA-4qv8-2p9j-2685](https://github.com/advisories/GHSA-4qv8-2p9j-2685) | undici         | moderate   | `>=8.0.0 <8.12.2`        | 8.12.3          |
| [GHSA-f72v-6w45-q472](https://github.com/advisories/GHSA-f72v-6w45-q472) | undici         | moderate   | `>=8.0.0 <8.12.2`        | 8.12.3          |
| [GHSA-w74x-v6f9-j3xg](https://github.com/advisories/GHSA-w74x-v6f9-j3xg) | fast-uri       | moderate   | `>=3.0.0 <3.1.9`         | 3.1.9           |
| [GHSA-xhq7-xmqj-769h](https://github.com/advisories/GHSA-xhq7-xmqj-769h) | fast-uri       | low        | `>=3.0.0 <3.1.9`         | 3.1.9           |
| [GHSA-wjr9-j795-jxcr](https://github.com/advisories/GHSA-wjr9-j795-jxcr) | fast-uri       | moderate   | `>=3.1.3 <3.1.9`         | 3.1.9           |
| [GHSA-333x-w4r6-6crp](https://github.com/advisories/GHSA-333x-w4r6-6crp) | fast-uri       | low        | `>=3.0.0 <3.1.9`         | 3.1.9           |
| [GHSA-xjj6-f33q-929c](https://github.com/advisories/GHSA-xjj6-f33q-929c) | undici         | high       | `>=8.0.0 <8.12.2`        | 8.12.3          |

## Resolutions applied

- Next.js and eslint-config-next: 16.3.8 → 16.4.2.
- Zod, direct and transitive from eslint-plugin-react-hooks: 4.6.5 → 4.6.7.
- Vitest, mocker, and coverage-v8: 4.1.11 → 4.1.12.
- Vite, transitive from Vitest/mocker: 8.2.2 → 8.2.4.
- Undici, transitive from jsdom: 8.10.2 → 8.12.3.
- fast-uri, transitive from AJV: 3.1.8 → 3.1.9.
- pnpm regenerated the peer resolutions; no new overrides
  or artificial direct dependencies were kept. `pnpm install --frozen-lockfile` approved.
- Final local audit: zero findings at all severities.

## Result
Fixes implemented. `pnpm run ci` approved (291 unit tests, 44
integrations, and 33 validator tests), as was the PostgreSQL backup/restore
test. Local audit with no findings; local governance approved.
Remote CI approved in all seven jobs: Governance, Quality, Test, Data integrity,
Backup restore, Build, and Dependency audit. [PR #68](https://github.com/fradelli/nextjs-kaizen-app/pull/68) merged by squash
into developer at commit `410042d`, on 26/10/2026.
