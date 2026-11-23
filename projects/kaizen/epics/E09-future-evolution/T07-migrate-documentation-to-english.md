---
id: KZ-E09-T07
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T05]
---

# Migrate documentation and delivery to English

## Objective
Make English the operating language of the repository for developers, agents, and
reviewers, without rewriting immutable historical evidence.

## Inputs
- `roadmap/epics/E09-future-evolution/T05-design-i18n-and-english-policy.md`
- `AGENTS.md`
- `README.md`
- `.github/pull_request_template.md`
- `docs/architecture/TARGET-ARCHITECTURE.md`
- `roadmap/README.md`
- `CHANGELOG.md`

## Deliverables
- Instructions, active documentation, roadmap, and delivery templates in English.
- Developer-facing CLI messages, tests, and validators in English.
- Proportional automated rule to prevent new documentation in Portuguese.
- Explicit policy to preserve commits, closed PRs, and historical migrations.

## Subtasks
- [ ] Inventory active, historical, and generated documentation before translating.
- [ ] Translate normative sources before the documents that depend on them.
- [ ] Update the template and the PR title/description conventions.
- [ ] Translate test descriptions and operational messages kept in the code.
- [ ] Create a small allowlist for proper names and preserved content.

## Validation
- Validate links, IDs, dependencies, examples, commands, and absence of contradictory instructions.

## Acceptance criteria
- [ ] A developer who reads English can operate the repository without depending on Portuguese documentation.
- [ ] New PRs and documents follow English by default.
- [ ] Preserved historical evidence is identified and was not rewritten.

## Out of scope

- Editing descriptions of closed PRs, existing commit messages, or applied migrations.

## Result
Not yet completed.
