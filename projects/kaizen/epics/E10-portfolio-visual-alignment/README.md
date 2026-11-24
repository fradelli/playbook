# KZ-E10 — Visual alignment with the portfolio

## Expected outcome
Kaizen looks like an extension of the portfolio, with the same static visual language
and without changing content, features, or business rules. Animations, stars, and
particles stay out of the experience.

## Sequence

The outcome and limits below describe the historical portfolio reference.
KZ-E10-T09 follows the approved Mira guide, with appearance and primitives in the design system;
it does not authorize recreating generic styles locally when an export is missing.

| Task | Depends on | Outcome |
| --- | --- | --- |
| KZ-E10-T01 | KZ-E06-T25 | Integrate the visual reference, the icon catalog, and the generic DS states |
| KZ-E10-T02 | KZ-E10-T01 | Player in the card, consistent hints, and closing in a modal with a draft |
| KZ-E10-T09 | KZ-E10-T08 | Complete the Mira adoption after the historical deliveries KZ-E10-T01 to KZ-E10-T08 |
| [KZ-E10-T10](T10-install-published-ui-release.md) | DS-E04-T03 | Kaizen installs the exact published corrective release instead of a local tarball |

## Limits

- The published portfolio is the final reference; `@fradelli/ui` provides the available tokens and primitives.
- Local additions reproduce the portfolio's static styles when there is no equivalent public contract.
- Diet/Workout content and behavior remain specific to Kaizen.
- Do not copy animations, starry background, particles, or illustrations.

## Registered complementary tasks

Canonical status is in the [roadmap](../../README.md). This table completes the navigation without changing priority or dependencies.

| Task | Depends on | Outcome |
| --- | --- | --- |
| [KZ-E10-T03](T03-dialog-actions.md) | KZ-E10-T02 | Fix navigation and standardize dialog actions |
| [KZ-E10-T04](T04-dialog-structure.md) | KZ-E10-T03 | Standardize the visual structure of dialogs |
| [KZ-E10-T05](T05-unify-dialog-behavior.md) | KZ-E10-T04 | Unify dialog behavior |
| [KZ-E10-T06](T06-session-form-drafts.md) | KZ-E10-T05 | Per-session form drafts |
| [KZ-E10-T07](T07-fix-draft-review.md) | KZ-E10-T06 | Fix the findings of the draft review |
| [KZ-E10-T08](T08-today-navigation.md) | KZ-E10-T07 | Adjust Today and the app entry |
