---
id: DS-E01-T01
epic: DS-E01
project: design-system
repository: fradelli/design-system
depends_on: []
---

# Require the Tailwind CSS peer dependency

## Objective

Declare Tailwind CSS 4 as a required peer dependency, because the package cannot be styled without it.

## Context

- `package.json` marks `tailwindcss` as optional in `peerDependenciesMeta`.
- `dist/styles.css` contains `@theme` and `@layer components`, and every component relies on utilities compiled by the consumer through `@source`.

## Inputs

- `package.json` — `peerDependencies` and `peerDependenciesMeta`.
- `README.md` — consumer CSS setup.
- `fixtures/npm-consumer/package.json` and `fixtures/pnpm-consumer/package.json` — installed peers.

## Deliverables

- `package.json` without the optional flag for `tailwindcss`.
- `README.md` stating that Tailwind CSS 4 is required.
- A Changeset classifying the change.

## Subtasks

- [ ] Remove `peerDependenciesMeta.tailwindcss`.
- [ ] Update the README consumer setup.
- [ ] Add the Changeset.

## Validation

- `npm run pack:check` and `npm run fixtures:check` pass.

## Acceptance criteria

- [ ] Installing the package without Tailwind CSS reports a missing peer.

## Result

Not started.
