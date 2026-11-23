---
id: KZ-E12-T02
epic: KZ-E12
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: []
---

# Apply security headers and error and loading pages

## Objective
Protect the public application with HTTP security headers and cover errors, missing routes, and loading with dedicated screens.

## Context

Findings from the 2026-11-23 audit:

- `next.config.ts` does not define `headers()`: Content-Security-Policy, `frame-ancestors` or `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and `X-Content-Type-Options` are missing.
- `src/app` has no `not-found.tsx`, `global-error.tsx`, or `loading.tsx`; only `src/app/workout/error.tsx` exists.
- `src/lib/security/request-origin.ts` trusts `x-forwarded-host`, an assumption that is valid behind the Vercel proxy but not recorded.

## Inputs
- `next.config.ts` — current configuration.
- `src/app/layout.tsx` and `src/app/workout/error.tsx` — root layout and existing error handling.
- `src/lib/security/request-origin.ts` — origin validation.
- `docs/architecture/TARGET-ARCHITECTURE.md` — sections "Segurança" (Security) and "Observabilidade e falhas" (Observability and failures).
- `docs/product/telas/guia-de-estilo.md` — appearance of the state screens.

## Deliverables
- `headers()` in `next.config.ts` with a CSP compatible with `next/font`, `next-intl`, and the design system.
- `src/app/not-found.tsx`, `src/app/global-error.tsx`, and `loading.tsx` in the routes with dynamic reads.
- New texts in `messages/en.json` and `messages/pt-BR.json`.
- Trusted proxy assumption recorded in the "Segurança" (Security) section of the architecture.

## Subtasks
- [ ] Define and apply the headers.
- [ ] Test the CSP in development and build with no console violations.
- [ ] Create the screens for missing route, global error, and loading.
- [ ] Record the proxy assumption.

## Validation
- `pnpm build` passes and the `/workout` response carries the defined headers.
- The browser console shows no CSP violations on the existing routes.
- UI tests cover the new screens; `pnpm i18n:check` passes.

## Acceptance criteria
- [ ] All HTML responses carry the security headers.
- [ ] A nonexistent URL shows the dedicated, translated screen.
- [ ] An error in the root layout shows the global error screen.

## Result
Not started.
