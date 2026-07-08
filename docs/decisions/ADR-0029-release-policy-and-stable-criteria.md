# ADR-0029: Release Policy and Stable Criteria

## Status

Accepted for Stage 10.8.

## Context

Stage 10.7 introduced release readiness documentation for v0.1.0-rc1, but the repository still needed an explicit policy for what release labels mean and what criteria must be satisfied before a release can be called stable.

Without release policy, maintainers could confuse a manually validated release candidate with a stable framework release. That would be risky because generated Project Packs, launch kits, learner state handoff, and acceptance tests are still manually maintained.

## Decision

- Release candidates MAY be published when repository artifacts are practically usable and documented, but known limitations remain.
- Stable releases MUST require stronger evidence than release candidates.
- Stable criteria MUST include validated generated pack file counts, learner-state separation, evidence/mastery guardrails, localization behavior, launch kit completeness, manual acceptance test coverage, and documented known limitations.
- Stable releases SHOULD require executable validation or a clearly repeatable manual validation checklist before being called stable.
- Release documentation belongs under `docs/releases/` and MUST NOT become the canonical source for framework behavior.
- Canonical framework behavior remains in `specification/`, `core/`, `commands/`, `skills/`, `domains/`, and templates.

## Stable Criteria

A stable release requires at minimum:

- Generated Project Packs meet their declared file budgets.
- Generated Project Packs preserve canonical evidence-based mastery and localization semantics.
- Learner state is not embedded in reusable domain packs or generated Project Packs.
- Launch kits are present for supported generated packs.
- Manual acceptance tests cover startup, continuation, progress, learner-state boundaries, evidence/mastery guardrails, localization, and generated pack upload behavior.
- Known limitations are documented and do not contradict stable claims.
- Public contracts, repository structure, and normative behavior are documented.

## Rationale

The project can be useful before it is stable, but stability should communicate repeatability and contract confidence. A release candidate can rely on human-reviewed readiness notes. A stable release should require stronger validation, fewer unresolved release blockers, and clear acceptance criteria.

## Consequences

- v0.1.0-rc1 remains a release candidate, not a stable release.
- Future release work has explicit criteria to evaluate before stable labeling.
- Release status does not override canonical framework specifications.
- Automation remains a future improvement, not a Stage 10.8 requirement.

## OPEN QUESTION

- Which stable criteria should become executable checks first?
- What version identifier should generated Project Packs use once stable releases begin?
