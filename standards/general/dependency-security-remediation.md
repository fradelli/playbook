# Dependency security remediation

Keeps dependency audit remediation consistent across repositories without hiding risk, weakening CI, or mixing a pre-existing vulnerability into an unrelated delivery.

This document owns the shared policy. Each repository owns its exact validation commands, dependency paths, and runtime-specific checks.

## Non-negotiable rules

- Keep the dependency audit blocking in CI at the `moderate` level (`npm audit --audit-level=moderate` or `pnpm audit --audit-level=moderate`).
- Do not remove the audit job, lower its threshold, skip it, or turn a failure into a warning to make a pull request green.
- Do not run a forced audit fix (`npm audit fix --force`) without explicit approval and a documented compatibility plan.
- Do not mix dependency remediation into an unrelated feature, fix, refactor, or documentation pull request.
- Use a dedicated roadmap task and a separate remediation pull request for every affected repository.
- Keep a reviewable decision trail in the task and in every remediation pull request.

## Pre-existing failure isolation

When an unrelated pull request exposes an audit failure that already exists on its base branch:

1. Confirm the pull request does not change `package.json` or the lockfile.
2. Reproduce the failure from the base branch, or confirm from CI evidence that the vulnerability predates the pull request.
3. Create or reuse a dedicated security task in the playbook roadmap.
4. Create one remediation branch and pull request per affected repository, from that repository's integration branch.
5. Keep the unrelated pull request's dependency diff empty.
6. Merge the remediation pull request first.
7. Update the blocked branch from its integration branch and rerun CI.
8. Confirm the original pull request is green without carrying the remediation.

Branches follow the [pull request standard](pull-requests.md), for example `claude/KZ-E05-T09-remediate-dependency-audit`. Shared policy changes go to the playbook in their own pull request.

## Remediation workflow

For each affected repository:

1. Install from the lockfile (`npm ci` or `pnpm install --frozen-lockfile`) and reproduce the CI audit command.
2. Inspect the JSON audit output and explain the vulnerable dependency paths (`npm explain <package>` or `pnpm why <package>`).
3. Confirm patched versions with the registry or the owning project's official release information.
4. Select the smallest compatible remediation.
5. Recreate the dependency tree from the lockfile.
6. Confirm the audit reports no vulnerabilities at the configured threshold.
7. Run the full repository validation and any CLI or generated artifact affected by the change.
8. Record the evidence in the pull request and the task.

## Fix selection order

1. Upgrade a direct dependency inside the supported major range.
2. Refresh the lockfile when an existing range already allows a patched transitive version.
3. Add a narrow override when a supported upstream package still pins a vulnerable transitive version.
4. Consider a breaking upgrade or a forced fix only after explicit approval and a compatibility plan.

Do not accept an audit tool's proposed downgrade or broad major change without checking it against the repository's architecture and supported runtime.

## Override requirements

An override must:

- target the narrowest dependency path the package manager supports;
- select a published patched version compatible with the repository runtime;
- name the upstream package that still requires it;
- pass the affected tool or runtime checks;
- be visible in the pull request and the task;
- be removed when upstream ranges make it unnecessary.

When an override affects a CLI or a code generator, run that tool and confirm it still works and creates no unrelated drift.

## Commit and pull request isolation

Use separate commits when process documentation changes together with dependencies:

- `chore(security): ...` for `package.json`, lockfile, and dependency changes;
- `docs(security): ...` for workflow documentation.

Open separate pull requests per repository. Each describes only its own diff.

## Required delivery record

Record in the task and in the pull request:

- vulnerable packages and severities;
- whether each dependency is direct or transitive;
- the dependency paths that introduced the vulnerabilities;
- direct upgrades, lockfile refreshes, and overrides selected;
- rejected breaking or forced alternatives and why;
- clean-install and validation results;
- residual risk, merge order, and any blocked pull request that must be updated.

For a remediation across several repositories, the task links every pull request and states that the blocked pull request can be updated only after the remediation reaches its integration branch.
