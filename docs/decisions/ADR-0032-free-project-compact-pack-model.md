# ADR-0032: Free Project Compact Pack Model

## Status

Accepted for Stage 11.1.

## Context

Current generated Project Packs use the standard 25-file profile. This fits the existing repository export model, but ChatGPT Projects on the Free plan support only 5 uploaded files per project.

Without a compact profile, Free-plan users cannot practically upload the generated SQL/PostgreSQL, English, or JavaScript Mentor OS packs. Reducing the file count must not weaken evidence-based mastery, learner-state separation, localization behavior, or Learner-Facing Mentor Mode.

## Decision

Add a compact/free Project Pack profile with a maximum of 5 files.

Compact packs use exactly these Project-ready files when possible:

- `PROJECT_INSTRUCTIONS.md`
- `STARTUP_PROMPT.md`
- `DOMAIN_CORE.md`
- `COMMANDS_CORE.md`
- `MENTOR_SKILLS_CORE.md`

The compact profile merges framework boundaries, evidence/mastery guardrails, localization, selected commands, selected mentor skills, and domain essentials into fewer files. Merged files MUST cite their canonical sources and MUST NOT silently change framework semantics.

## Consequences

- Standard packs remain the richer 25-file profile.
- Compact/free packs support Free-plan Projects with no more than 5 files.
- Compact packs necessarily summarize more aggressively and may omit detailed manifests, continuation prompt files, and expanded domain context.
- Learner-Facing Mentor Mode remains mandatory in compact packs.
- Manual acceptance tests must check both standard 25-file counts and compact max-5-file counts.

## Boundaries

- Compact packs are generated artifacts under `exports/generated/`, not canonical domain sources.
- Learner state remains outside compact packs.
- Existing standard packs MUST NOT be renamed, removed, or reduced.
- Canonical Project Pack export contracts remain in `exports/project-pack-spec/`.

## OPEN QUESTION

- Should compact packs later include a single embedded manifest section in `DOMAIN_CORE.md` or `PROJECT_INSTRUCTIONS.md`?
- Should automation generate standard and compact packs from one machine-readable profile definition?
