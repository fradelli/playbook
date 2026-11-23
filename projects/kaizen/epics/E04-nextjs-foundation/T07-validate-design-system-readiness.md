---
id: KZ-E04-T07
epic: KZ-E04
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T05, KZ-E04-T06]
---

# Validate technical readiness for the Design System

## Objective
Determine, without installing the package, whether the Kaizen technical base is ready to receive `@fradelli/ui@0.1.0` reproducibly.

## Context

`@fradelli/ui@0.1.0` has already been published privately on GitHub Packages. Node 24.20.0 and React 19.2.8 meet the package engines and peers. KZ-E04-T02 is integrated into `developer`, but its gates must be rerun with the KZ-E04-T05 CI before this gate; the safe authentication strategy must also be proven before installation.

## Inputs
- `docs/decisions/SHARED-DESIGN-SYSTEM-ADOPTION.md`
- `package.json`
- `pnpm-lock.yaml`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `.github/workflows/ci.yml`
- `https://github.com/fradelli/design-system/blob/3e0c23f591ff458ab9e3e74dc44bb0cdba068a03/package.json`

## Scope

- Confirm the versions of Node, pnpm, Next.js, React, and React DOM.
- Confirm the published contract: version, engines, peers, exports, public CSS, `dist`, and primitives.
- Verify that KZ-E04-T02 and KZ-E04-T05 delivered green gates and CI before the visual integration.
- Plan registry and local/CI authentication without writing credentials.
- Record the GO/NO-GO decision and remaining gaps in a sanitized report.

## Out of scope

- Installing `@fradelli/ui`, Tailwind CSS, PostCSS, or fonts.
- Changing `package.json`, lockfile, CSS, root, components, or workflow.
- Implementing the shell, calendar, or a domain screen.

## Deliverables
- `docs/evidence/design-system/E04-T07-DESIGN-SYSTEM-READINESS.md`
- Compatibility matrix, gate checklist, and GO/NO-GO decision.

## Subtasks
- [x] Confirm runtime, package manager, and React peer without installing the package.
- [x] Confirm existing local gates and CI are green.
- [x] Document safe authentication locally and in the workflow.
- [x] Record the public contract of `@fradelli/ui@0.1.0` and the readiness decision.

## Validation
- Run the already available format check, lint, typecheck, tests, coverage, and build.
- Confirm React `>=19.2.7 <20` and Node `>=24.20.0 <25`.
- Confirm that the workflow has a basis for frozen install and the future minimal permission.
- Confirm that the diff contains no package, `.tgz`, token, credential, or authenticated configuration.

## Acceptance criteria
- [x] The matrix confirms runtime and React compatibility with `@fradelli/ui@0.1.0`.
- [x] Format, lint, typecheck, tests, coverage, and build pass locally and in CI.
- [x] The report identifies local authentication as still missing or proven without exposing a secret.
- [x] The GO/NO-GO decision lists all gaps without installing or changing the application.

## Risks

- Confusing Read permission granted to the repository with configured local authentication.
- Approving readiness despite missing gates or CI.
- A `0.x` contract changing without a new exact version and new validation.

## Rollback

Revert only the report and the status update. Since the task neither installs dependencies nor changes the application, there is no technical runtime rollback.

## Result
Completed on 2026-09-10 with a NO-GO decision. Runtime, peers, published contract, local gates, remote CI, and rulesets were proven. The integration remains blocked because the GitHub Packages query returned `401` without authentication and the credential used by the API does not have `read:packages`. No package, token, or application file was added.

## Documentation consolidation of 12/11/2026

The assessment without installation, the initial NO-GO, and the later GO are preserved in the original evidence report; this does not approve new releases.

[Full original package](https://github.com/fradelli/nextjs-kaizen-app/blob/fd2269d2eaa7d55cfea724631f12fa6505d37b32/docs/implementation/tasks/E04-T07.md), SHA-256 `02f79c4fda7e11d5b54c1ffb48f8b04da72a5465a802845806adea33cab0d427`. Commands, criteria, risks, and rollback record that baseline and are not a recipe for reinstalling the current application. Open items were not turned into approvals in this consolidation.
