# Generated Project Packs

Generated Project Packs are derived artifacts assembled from canonical repository files for target environments such as ChatGPT Projects.

They are not canonical framework source, not learner state, and not executable tooling. Runtime learner progress MUST remain separate from reusable Project Pack content.

Generated packs MAY be committed while the framework is manually developed because they are human-readable and auditable. `tools/ulos-cli` can regenerate standard and compact packs from canonical sources.

## Packs

- `exports/generated/sql-postgresql-standard/`: SQL/PostgreSQL standard Project Pack, exactly 25 files.
- `exports/generated/english-standard/`: English standard Project Pack, exactly 25 files.
- `exports/generated/javascript-standard/`: JavaScript standard Project Pack, exactly 25 files.
- `exports/generated/typescript-standard/`: TypeScript standard Project Pack, exactly 25 files.
- `exports/generated/sql-postgresql-compact/`: SQL/PostgreSQL compact/free Project Pack, exactly 5 files.
- `exports/generated/english-compact/`: English compact/free Project Pack, exactly 5 files.
- `exports/generated/javascript-compact/`: JavaScript compact/free Project Pack, exactly 5 files.
- `exports/generated/typescript-compact/`: TypeScript compact/free Project Pack, exactly 5 files.

## Profiles

- `standard`: exactly 25 files for Plus/Go or higher Project usage.
- `compact`: exactly 5 files for Free Project usage or other low-file-budget usage.

## Validation

Run from the repository root:

```sh
node tools/ulos-cli/src/index.js validate
```

Expected result for v0.2.0 readiness: all eight generated packs pass, launch kits exist, and file counts match the profile contracts.

## Guides and Reports

- `exports/generated/PROJECT_PACK_UPLOAD_GUIDE.md`: how to upload generated packs into ChatGPT Projects.
- `exports/generated/PROJECT_PACK_USAGE_GUIDE.md`: day-to-day usage commands, continuation flow, and evidence handling.
- `exports/generated/PROJECT_PACK_VALIDATION_REPORT.md`: validation report for generated standard and compact packs.
- `exports/generated/project-launch-kits/`: practical ChatGPT Project setup kits, upload lists, ready prompts, recovery guidance, and learner state handoff templates.

## OPEN QUESTION

- Should generated packs later be validated or regenerated automatically?
