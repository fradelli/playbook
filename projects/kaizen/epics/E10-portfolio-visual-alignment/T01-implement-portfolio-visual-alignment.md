---
id: KZ-E10-T01
epic: KZ-E10
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E06-T25]
---

# Integrate the portfolio visual language into Kaizen

## Objective
Update the foundation and the existing screens so that Kaizen looks like an extension of the
portfolio: same materials, typography, proportions, visual states, and rhythm, without copying
animations or decorative elements.

## Inputs
- `docs/history/implementation/FRADELLI-DESIGN-SYSTEM-ADOPTION-PLAN.md`
- `docs/history/implementation/ICONOGRAPHY-STANDARDIZATION-PLAN.md`
- `docs/history/implementation/TRAINING-ACTIVITY-PLAYER-AND-FEEDBACK-PLAN.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `docs/decisions/SHARED-DESIGN-SYSTEM-ADOPTION.md`
- `package.json` and `pnpm-lock.yaml`
- `src/app/globals.css` and `src/app/layout.tsx`
- `src/components/shared/app-shell/app-shell.tsx`
- `src/components/shared/app-shell/app-shell.module.css`
- `src/components/shared/feature-placeholder/feature-placeholder.tsx`
- `src/features/training/ui/components/training-day-page/training-day-page.styles.ts`

## Deliverables
Not recorded in the original version of this task.

## Subtasks
Not recorded in the original version of this task.

## Validation
Not recorded in the original version of this task.

## Scope

- Complete the full catalog and the generic Button states in the DS according to the plans.
- Consume the latest compatible published version by exact pin, integrating
  public CSS, Tailwind source, and exports without deep imports.
- Fix contrast and local aliases; bring surfaces, geometry, spacing,
  typography, fields, actions, messages, navigation, and overlays closer to the reference.
- Record the specific styles reproduced from the portfolio and their local ownership.
- Keep a uniform background; remove animations and motion in the covered controls without
  losing interaction, focus, pending states, or the reduced-motion preference.
- Preserve Kaizen's routes, content, forms, data, rules, and states.

## Out of scope

Stars, particles, illustrations, and animations from the portfolio; content redesign; new
nutrition features; changes to data/migrations. The player and the closing form
belong to KZ-E10-T02. The DS release will follow the official workflow exclusively.

## Acceptance criteria
- [x] Side-by-side comparison shows a coherent visual language across diet, workout, and shell.
- [x] Surfaces, typography, semantic palette, buttons, fields, and states follow the reference.
- [x] No animation/particles/stars, and with immediate functional state changes.
- [x] No overflow at the 320, 390, 768, and 1440px breakpoints; focus and contrast are legible.
- [x] Flows, submitted names/values, and business rules remain preserved.
- [x] Formatting, lint, structure, types, 377 tests, and build passed.

## Result
Visual foundation integrated with the portfolio, preserving the content and the rules. Published
version `@fradelli/ui@0.6.0` installed by exact pin after DS PRs 19 and 20.
Individual icons, import/symbol guard, glass surfaces, Inter, geometry,
and official states integrated. No stars, particles, or animations.

Validation: 377 tests; line coverage 90.76% in the foundation; 41 script tests;
lint, structure, types, and build passed. Diet/workout loaded in the synthetic database
at 320/390/768/1440px with no overflow. The player script continues in KZ-E10-T02.
