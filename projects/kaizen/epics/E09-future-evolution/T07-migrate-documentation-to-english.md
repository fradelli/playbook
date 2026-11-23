---
id: KZ-E09-T07
epic: KZ-E09
project: kaizen
repository: fradelli/nextjs-kaizen-app
depends_on: [KZ-E09-T05]
---

# Migrate documentation and delivery to English

## Objective

Make English the operating language of the repository for developers, agents, and reviewers, without rewriting immutable historical evidence.

## Inputs

- `fradelli/playbook: projects/kaizen/epics/E09-future-evolution/T05-design-i18n-and-english-policy.md`: approved English policy.
- `AGENTS.md`: agent instructions.
- `README.md`: repository entry point.
- `.github/pull_request_template.md`: delivery template.
- `docs/architecture/TARGET-ARCHITECTURE.md`: normative source to translate first.
- `fradelli/playbook: projects/kaizen/README.md`: roadmap index.
- `CHANGELOG.md`: release history.

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

- Links, IDs, dependencies, examples, and commands in the translated documents resolve, and no instruction contradicts another.
- The automated rule fails on a new Portuguese document and passes on the allowlisted content.

## Acceptance criteria

- [ ] Every active document, instruction, template, and developer-facing message is in English.
- [ ] The automated rule rejects a new Portuguese document.
- [ ] The preserved historical evidence is listed in the policy, and `git diff` shows no change to it.

## Out of scope

- Editing descriptions of closed PRs, existing commit messages, or applied migrations.

## Result

Not started.
