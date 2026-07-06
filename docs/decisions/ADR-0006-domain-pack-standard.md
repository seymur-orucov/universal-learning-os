# ADR-0006: Domain Pack Standard

## Status

Accepted for Stage 5.

## Context

The framework needs a reusable structure for subject-specific learning content before real domain packs are authored. Domain packs must remain separate from framework core behavior, learner state, commands, and agent skills.

## Decision

- Domain packs are separated from framework core so reusable subject content can evolve without changing domain-independent behavior.
- Domain packs are separated from learner state because learner state contains learner-specific progress, evidence, review items, and mastery claims.
- Learning skills live in domain skill graphs because they are domain-specific learner competencies.
- Templates are created before real SQL, English, or other domain packs to establish contracts without inventing unsupported content.
- Commands and agent skills may consume domain packs to select tracks, lessons, practice, assessments, reviews, projects, glossary terms, and next actions.

## Rationale

Separating domain packs from the framework core preserves domain independence. Separating domain packs from learner state prevents reusable curriculum from being polluted by individual progress. Keeping learning skills in domain skill graphs makes prerequisites, practice expectations, assessment criteria, glossary terms, and mastery targets explicit within the subject context.

Templates provide authoring guidance without creating fake syllabuses or placeholder lessons. This allows the repository to harden structure before creating real domain content from reliable source material.

## Consequences

- Future domain authors have a standard structure to follow.
- Commands and agent skills can reference predictable domain pack files.
- Learner state can reference domain learning skills without duplicating domain content.
- Domain packs can support localization and terminology preservation through glossary guidance.

## Provisional Decisions

- Domain pack manifests are not yet machine-readable.
- Domain pack versioning and compatibility rules are not final.
- Domain pack validation schemas do not exist yet.
- Minimal required files for a valid domain pack are not finalized.

## OPEN QUESTION

- Which domain pack files are mandatory for a minimal valid pack?
- Should domain packs declare framework compatibility through Markdown, metadata, or future schemas?
- Should learning skill identifiers be globally unique or domain-scoped?
