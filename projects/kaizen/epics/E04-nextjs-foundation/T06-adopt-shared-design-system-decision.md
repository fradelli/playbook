---
id: KZ-E04-T06
epic: KZ-E04
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E04-T02]
---

# Record adoption of the shared Design System

## Objective
Explicitly replace the local visual direction of P0 with the shared contract of `@fradelli/ui` before any shell or domain screen.

## Context

The architecture approved in KZ-E03 chose CSS Modules and local global tokens. ADR 0001 of the `fradelli/design-system` repository became the normative source for tokens, typography, primitives, and visual patterns without domain. The previous decision must remain traceable and be replaced by a new decision, never silently rewritten.

## Inputs
- `docs/decisions/SHARED-DESIGN-SYSTEM-ADOPTION.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/implementation/P0-IMPLEMENTATION-GUIDE.md`
- `roadmap/epics/E04-nextjs-foundation/T04-create-accessible-shell.md`
- `roadmap/epics/E04-nextjs-foundation/T05-configure-minimal-ci.md`
- `roadmap/epics/E04-nextjs-foundation/T07-validate-design-system-readiness.md`
- `roadmap/epics/E04-nextjs-foundation/T08-integrate-versioned-design-system.md`
- `roadmap/epics/E04-nextjs-foundation/README.md`
- `roadmap/epics/E04-nextjs-foundation/T02-configure-static-quality.md`
- `roadmap/epics/E06-training-execution/T02-create-daily-training-page.md`
- `roadmap/epics/E07-nutrition-execution/T02-create-nutrition-page.md`
- `roadmap/epics/E09-future-evolution/README.md`
- `roadmap/README.md`
- `roadmap/ACTIVE.md`
- `CHANGELOG.md`
- `https://github.com/fradelli/design-system/blob/main/docs/decisions/0001-shared-design-system-foundation.md`
- `https://github.com/fradelli/design-system/blob/3e0c23f591ff458ab9e3e74dc44bb0cdba068a03/package.json`

## Scope

- Create the local adoption decision and point to the normative ADR.
- Update the target architecture and the guide without erasing the KZ-E03 history.
- Record ownership, adoption phases, gates, dependencies, and rollback by version.
- Document the package contracts that still need evidence.

## Out of scope

- Installing Tailwind CSS, fonts, or `@fradelli/ui`.
- Creating components, shell, final pages, or a redesign.
- Creating Jira cards or changing the Design System repository.

## Deliverables
- `docs/decisions/SHARED-DESIGN-SYSTEM-ADOPTION.md`
- Architecture and implementation guide updated with explicit replacement.
- Packages KZ-E04-T04, KZ-E04-T05, KZ-E04-T07, and KZ-E04-T08 consistent with the new order.

## Subtasks
- [x] Record the decision, consequences, and ownership boundaries.
- [x] Mark the previous choices as replaced without changing completed results.
- [x] Define readiness without installation as a gate and GitHub Packages as the integrated state.
- [x] Record missing contracts as blockers, without inventing exports or versions.

## Validation
- Verify links, IDs, dependencies, and absence of cycles in the roadmap.
- Confirm that no implementation file or dependency was created.
- Run `git diff --check` and review for absence of secrets.

## Acceptance criteria
- [x] The normative source and the replaced passages are explicit.
- [x] Kaizen and the Design System have non-overlapping responsibilities.
- [x] Shell and domain screens remain blocked by technical adoption.
- [x] Completed decisions and tasks remain preserved as history.

## Risks

- Duplicating the shared ADR and creating two normative sources.
- Failing to reconfirm the published contract when changing a `0.x` version.
- Mixing Kaizen domain into the visual package.

## Rollback

Before technical adoption, revert only this documentation decision. After a release has been consumed, replace the decision with a new explicit ADR and preserve the history.

## Result
Completed on 2026-09-10. The local decision adopted `@fradelli/ui@0.1.0` by reference, replaced only the exclusive local visual foundation, and preserved the other KZ-E03 decisions. Architecture, guide, packages, and roadmap were synchronized; KZ-E04-T07 became responsible for the GO/NO-GO without installation and KZ-E04-T08 for the technical integration. Links, 53 IDs, dependencies, cycles, scope, whitespace, and absence of secrets were validated with no failures.

## Documentation consolidation of 12/11/2026

Documentation adoption was not installation. The 0.1.0 contract, ownership, and the decision → readiness → integration → shell sequence remain in the decision/results.

[Full original package](https://github.com/fradelli/nextjs-kaizen-app/blob/fd2269d2eaa7d55cfea724631f12fa6505d37b32/docs/implementation/tasks/E04-T06.md), SHA-256 `38497c4c5e3e64e6d1721517401edb92c09313f25e58196bfd3f44eba862ebe8`. Commands, criteria, risks, and rollback record that baseline and are not a recipe for reinstalling the current application. Open items were not turned into approvals in this consolidation.

## Documentation consolidation of 12/11/2026

Documentation adoption was not installation. The 0.1.0 contract, ownership, and the decision → readiness → integration → shell sequence remain in the decision/results.

[Full original package](https://github.com/fradelli/nextjs-kaizen-app/blob/fd2269d2eaa7d55cfea724631f12fa6505d37b32/docs/implementation/E04-T06-DETAILED-PLAN.md), SHA-256 `b080b9bcde8aa01d5c6b6b1b87b3f233dfdd4195957dc171638cf37ad6286a05`. Commands, criteria, risks, and rollback record that baseline and are not a recipe for reinstalling the current application. Open items were not turned into approvals in this consolidation.
