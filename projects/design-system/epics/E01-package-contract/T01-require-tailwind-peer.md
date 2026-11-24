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

- [x] Remove `peerDependenciesMeta.tailwindcss`.
- [x] Update the README consumer setup.
- [x] Add the Changeset.

## Validation

- `npm run pack:check` and `npm run fixtures:check` pass.

## Acceptance criteria

- [x] Installing the package without Tailwind CSS reports a missing peer.

## Result

- `fradelli/design-system` PR #26, merged as `96d9587`: `tailwindcss` (`>=4.3.0 <5`) is a required peer, `peerDependenciesMeta` removed, README updated, `minor` Changeset `.changeset/require-tailwind-peer.md`.
- PR CI `Validate package` passed (`npm run ci`, including `pack:check` and `fixtures:check`).
- Installing the packed tarball with pnpm and `auto-install-peers=false` reported `missing peer tailwindcss`.
