# ADR-0031: New Domain Pack Factory

## Status

Accepted

## Context

Universal Learning OS now has multiple domain packs and generated Project Packs. Adding each new domain manually without a repeatable model increases the risk of copied framework rules, inconsistent file budgets, unclear learner outcomes, and noisy learner-facing behavior.

The framework needs a practical creation path that keeps canonical domain content in `domains/`, generated ChatGPT Project-ready artifacts in `exports/generated/`, launch helpers in `exports/generated/project-launch-kits/`, and validation checks in `tests/manual-acceptance/`.

## Decision

Create a repeatable domain pack factory model documented in `docs/domain-pack-factory.md`.

New domains SHOULD define canonical reusable domain files first. Canonical files describe the subject, syllabus, mentor behavior, practice model, assessment model, mastery expectations, and Project Pack selection. They MUST NOT contain learner progress, generated Project setup instructions, or execution-surface-specific runtime prompts.

Generated Project Packs are derived artifacts. They select and summarize canonical framework, command, skill, and domain files into a fixed Project-ready file budget. Generated files MAY merge or summarize canonical sources, but MUST declare inclusions, omissions, boundaries, and file count.

JavaScript is the first pilot for this factory because it is broad enough to test the model across language fundamentals, runtime reasoning, async behavior, browser basics, interview-style practice, and frontend engineering relevance while still being familiar to many learners.

## Consequences

- Future domains such as TypeScript, Go, DSA, System Design, backend engineering, and frontend engineering can follow the same repository-oriented process.
- Canonical domain packs remain reusable outside ChatGPT Projects.
- Project-ready files remain derived and budget-bound.
- Learner-facing Project instructions can enforce clean mentor output while preserving explicit progress and evidence reporting when requested.
- Existing generated SQL/PostgreSQL and English packs remain unchanged and must continue to contain exactly 25 files each.

## Boundaries

- Domain pack contracts remain canonical in `specification/DOMAIN_PACK_SPEC.md`.
- Project Pack export contracts remain in `exports/project-pack-spec/`.
- Learner state remains outside domain packs and generated packs.
- This ADR does not introduce executable generation tooling.
