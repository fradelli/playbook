# KZ-E04 — Next.js foundation

## Expected outcome
A minimal Next.js application with no business features, with boundaries, quality gates, and the shared Design System validated and integrated at an exact version.

## Order
| Task | Depends on | Outcome |
| --- | --- | --- |
| KZ-E04-T01 | KZ-E03-T05, KZ-E00-T07 | Validated scaffold |
| KZ-E04-T02 | KZ-E04-T01 | Static quality |
| KZ-E04-T06 | KZ-E04-T02 | Adoption decision and architecture updated |
| KZ-E04-T03 | KZ-E04-T02 | Server-only boundary |
| KZ-E04-T05 | KZ-E04-T02, KZ-E04-T03, KZ-E04-T06 | Minimal CI before visual adoption |
| KZ-E04-T07 | KZ-E04-T05, KZ-E04-T06 | Technical readiness decided without installing the package |
| KZ-E04-T08 | KZ-E04-T07 | `@fradelli/ui@0.1.0` integrated through GitHub Packages |
| KZ-E04-T04 | KZ-E04-T08 | Accessible shell on top of the Design System |
| KZ-E04-T09 | KZ-E04-T04 | React pages and Server/Client boundaries standardized |

## Out of scope
- Rules, final pages, production database, or deploy.
- Shared calendar, domain, or Kaizen-specific components in the package.

## Closing criteria
- [x] Lint, types, tests, and build pass.
- [x] Frozen install resolves exactly `@fradelli/ui@0.1.0`.
- [x] Inter, dark mode, public CSS, `@source`, and foundations are validated before the shell.
- [x] There are no workout or nutrition rules in components/routes.
- [ ] Existing pages follow the organization by responsibility and the smallest possible Client boundary.
