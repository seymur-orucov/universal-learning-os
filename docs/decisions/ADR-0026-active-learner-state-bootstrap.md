# ADR-0026: Active Learner State Bootstrap

## Status

Accepted for Stage 10.5.

## Context

The repository now has generated Project Packs and launch kits for SQL/PostgreSQL and English. Practical use requires a small runtime learner state area for cross-chat continuation and deleted-chat recovery.

Learner state should not be stored under a personal-name directory or include unnecessary personal identifiers. It must remain separate from reusable Project Packs and canonical framework/domain content.

## Decision

- Generic active learner starter state lives under `learners/active-learner/`.
- It avoids personal-name directories and personal identifiers by default.
- It is separate from reusable Project Packs.
- It contains minimal learning-relevant state for SQL/PostgreSQL and English.
- It must not store sensitive personal data.
- It must not claim mastery without evidence.
- It supports deleted-chat recovery and cross-chat continuation.
- Canonical Project Pack content remains under `exports/generated/`.
- Future runtime tools may update learner state automatically, but current state is manually maintained.

## Rationale

A generic active learner path supports practical learning continuity without encoding a personal name in the repository structure. It also gives ChatGPT Project usage a clear place to store handoff notes, evidence summaries, weak learning skills, review queues, and next actions.

Separating learner state from Project Packs preserves the reusable-pack boundary. Generated packs remain upload-ready context; learner state remains runtime/user-specific and should be minimal, private, and evidence-oriented.

Requiring `not enough evidence` where proof is missing prevents lesson exposure, deleted-chat memory, or informal progress assumptions from becoming unsupported mastery claims.

## Consequences

- The repository has a practical starter state location for active learning.
- Personal-name learner directories are avoided by default.
- SQL/PostgreSQL and English learner state can progress independently while sharing one profile and handoff file.
- Manual maintenance is required until runtime tooling exists.

## Provisional Decisions

- State files are Markdown for now.
- The active learner name is stored as `not stored`.
- SQL/PostgreSQL prior context is recorded as partial and needing verification.
- English B1 level is recorded as self-assessed, not formally assessed.

## OPEN QUESTION

- Should active learner state later move to YAML once schemas exist?
- Should learner state be gitignored, encrypted, or stored outside the repository for privacy?
- What runtime tool should update evidence logs and session history automatically?
