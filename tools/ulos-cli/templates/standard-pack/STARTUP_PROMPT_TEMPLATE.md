# Startup Prompt Template

Expected output file: `STARTUP_PROMPT.md`

Purpose: Provide the paste-ready first prompt for a new project session.

Source files:
- `templates/project-pack/STARTUP_PROMPT_TEMPLATE.md`
- `domains/{{DOMAIN_ID}}/DOMAIN.md`
- `specification/LOCALIZATION_SPEC.md`

Placeholders: `{{DOMAIN_ID}}`, `{{DOMAIN_TITLE}}`, `{{DOMAIN_PREFIX}}`, `{{PROFILE}}`, `{{SOURCE_CONTENT}}`

Template body:

```text
# Startup Prompt

Use {{DOMAIN_TITLE}} Mentor OS with the {{PROFILE}} pack.

{{SOURCE_CONTENT}}
```
