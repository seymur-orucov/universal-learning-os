# Exports

Exports define how repository knowledge may be packaged into project-ready bundles for environments such as ChatGPT Projects.

Export specifications are not learner state. They are not the canonical framework source. Exported Project Packs are derived artifacts assembled from canonical repository files, summaries, and declared omissions.

Generated Project Packs now live under `exports/generated/`.

## Generated Packs

- `exports/generated/sql-postgresql-standard/`
- `exports/generated/english-standard/`
- `exports/generated/javascript-standard/`
- `exports/generated/sql-postgresql-compact/`
- `exports/generated/english-compact/`
- `exports/generated/javascript-compact/`

## Contents

- `exports/project-pack-spec/`: human-readable Project Pack Export Model.
- `exports/generated/`: derived Project Packs, launch kits, upload guides, usage guides, and validation reports assembled from canonical repository files.

## Boundaries

- Canonical framework behavior remains in `specification/`.
- Domain pack content remains in `domains/`.
- Learner-specific progress remains in `learners/` or future learner state storage.
- Project Packs MUST preserve evidence-based mastery and localization semantics from canonical sources.

## OPEN QUESTION

- Should generated Project Packs later be committed, ignored, or published separately once automation exists?
