# Project Instructions Template

Expected output file: `PROJECT_INSTRUCTIONS.md`

Purpose: Configure learner-facing project behavior, domain purpose, localization defaults, evidence boundaries, and metadata visibility guardrails.

Source files:
- `exports/project-pack-spec/PROJECT_PACK_SPEC.md`
- `specification/FRAMEWORK_SPEC.md`
- `specification/LEARNING_LIFECYCLE.md`
- `specification/LOCALIZATION_SPEC.md`
- `domains/{{DOMAIN_ID}}/DOMAIN.md`

Placeholders:
- `{{DOMAIN_ID}}`
- `{{DOMAIN_TITLE}}`
- `{{DOMAIN_PREFIX}}`
- `{{PROFILE}}`
- `{{GENERATED_FILE_COUNT}}`
- `{{SOURCE_CONTENT}}`

Template body:

```text
# {{DOMAIN_TITLE}} Mentor OS

Profile: {{PROFILE}}
Generated file count: {{GENERATED_FILE_COUNT}}
Domain prefix: {{DOMAIN_PREFIX}}

{{SOURCE_CONTENT}}
```
