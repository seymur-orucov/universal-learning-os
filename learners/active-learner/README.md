# Active Learner State

This directory stores the active learner's runtime state.

It intentionally avoids personal-name directories and personal identifiers. Use `Learner name: not stored` where a name field is needed.

This state is separate from reusable Project Packs. Project Packs live under `exports/generated/`.

## Boundaries

- Learner state is runtime/user-specific content.
- Mastery claims require evidence.
- Missing evidence must be marked honestly.
- Do not store sensitive personal data.
- Do not store health, family, finance, address, private workplace details, or personal identifiers.
- Do not treat lesson exposure, generated content, or deleted-chat memory as mastery.

## Contents

- `PROFILE.md`: minimal learning profile and privacy preferences.
- `LEARNER_STATE_INDEX.md`: paths and update guidance.
- `SESSION_HANDOFF_CURRENT.md`: compact cross-project handoff template.
- `sql-postgresql/`: SQL/PostgreSQL runtime state.
- `english/`: English runtime state.
