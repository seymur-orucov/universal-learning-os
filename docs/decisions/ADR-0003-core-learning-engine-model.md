# ADR-0003: Core Learning Engine Model

## Status

Accepted for Stage 2.1.

## Context

The repository needs a domain-independent learning engine contract before commands, domain packs, schemas, or executable tooling are introduced. The contract must be usable by humans and agents while preserving clear boundaries between reusable framework behavior, domain-specific content, and learner-specific state.

## Decision

- The core learning engine is specified as Markdown before executable tooling.
- Lesson structure, practice, assessment, review, next action, mastery, and evidence are separated into focused documents.
- The framework uses evidence-based mastery instead of lesson-completion-based progress.
- Core documents define domain-independent behavior; domain packs will later provide subject-specific content and rubrics.

## Rationale

Markdown keeps the model reviewable, diffable, and usable by ChatGPT Projects, Codex, IDE agents, and documentation workflows before runtime choices exist.

Separating the engine models prevents one document from becoming the hidden source of truth for unrelated concerns. Lesson structure describes instructional flow, practice describes learner activity, assessment describes evaluation dimensions, review describes revisit triggers, next action describes session continuation choices, mastery describes competence levels, and evidence describes what justifies claims.

Evidence-based mastery prevents false progress. A learner may complete or view a lesson without demonstrating competence, so progress and mastery claims require learner output, reviewed answers, assessment results, project artifacts, interview responses, or explicit user instruction.

## Consequences

- Commands and applications can later orchestrate the same core contracts without redefining them.
- Domain packs can map core models to subject-specific rubrics without weakening evidence requirements.
- Learner state can reference evidence and mastery decisions without duplicating lesson content.
- Documentation authors must maintain cross-references carefully to avoid duplicated normative rules.

## Provisional Decisions

- No executable session selector exists yet.
- No machine-readable session report format exists yet.
- No concrete mastery or evidence schema exists yet.
- No domain-specific mapping from mastery levels to rubrics exists yet.

## OPEN QUESTION

- Should the core learning engine have its own version separate from the framework version?
- Should future tooling enforce all next-action and review-item fields through schemas?
- What minimum session report fields are required before command implementation begins?
