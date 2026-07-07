# ADR-0021: Project Pack Export Model

## Status

Accepted for Stage 10.0.

## Context

Universal Learning OS now contains framework specifications, commands, reusable agent skills, domain pack standards, learner state templates, session templates, and quality-reviewed SQL/PostgreSQL and English pilot domain packs. ChatGPT Projects and similar environments may accept only a limited number of source files. For current planning, the repository assumes a hard practical limit of 25 source files per generated Project Pack.

The repository needs an export model that explains how to curate, summarize, and exclude files without weakening canonical semantics.

## Decision

- A Project Pack Export Model is introduced under `exports/project-pack-spec/`.
- The repository remains the canonical source of truth.
- Exported Project Packs are derived artifacts, not canonical specifications.
- The 25-file budget is treated as a first-class design constraint.
- Summaries and curated subsets are allowed when declared in the manifest.
- Learner state remains separate from exported reusable content.
- Evidence/mastery and localization semantics MUST be preserved in exported packs.
- Project Pack templates are added under `templates/project-pack/`.

## Rationale

A Project Pack is useful because ChatGPT Projects need compact, task-oriented context rather than the entire repository. Keeping the repository canonical prevents exported packs from drifting into silent forks of the framework.

The 25-file budget forces explicit selection. Without a budget model, packs could omit critical rules accidentally or include redundant files while excluding evidence, mastery, localization, or learner state boundaries.

Summaries and curated subsets are pragmatic because full domain packs, all commands, all agent skills, and all templates cannot fit into a small project context. They are acceptable only when the pack declares which canonical files were summarized, omitted, or merged.

Learner state must remain separate because Project Packs are reusable context. A pack may include learner profile briefs or templates, but learner progress and mastery records belong in learner state and require evidence.

Localization and evidence semantics must survive export because project-specific defaults, such as Azerbaijani instruction with English terminology or English target language, MUST NOT change mastery or state rules.

## Consequences

- Future SQL/PostgreSQL and English ChatGPT Project packs can be assembled consistently.
- Export decisions become auditable through manifests and file budget rationale.
- Runtime packs can stay small without silently changing framework rules.
- Actual bundle generation, validation, and automation remain future work.

## Provisional Decisions

- The default maximum file count is 25.
- Project Pack manifests are Markdown for now.
- Generated Project Packs are not created in Stage 10.0.
- Summarized and bundled context files are allowed conceptually but are not generated yet.
- Token budget and file count are tracked as separate future concerns.

## OPEN QUESTION

- Where should generated Project Packs be stored once exports are implemented?
- Should generated Project Packs be committed to the repository or treated as ignored build artifacts?
- What validation should enforce that summaries preserve canonical semantics?
- Should file count budgets vary by target environment?
