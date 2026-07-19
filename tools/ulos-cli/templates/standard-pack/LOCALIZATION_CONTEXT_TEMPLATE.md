# Localization Context Template

Expected output file: `LOCALIZATION_CONTEXT.md`

Purpose: Preserve instruction-language and terminology-language behavior.

Source files:
- `specification/LOCALIZATION_SPEC.md`
- `domains/{{DOMAIN_ID}}/DOMAIN.md`
- `domains/{{DOMAIN_ID}}/GLOSSARY.md`

Placeholders: `{{DOMAIN_ID}}`, `{{DOMAIN_TITLE}}`, `{{DOMAIN_PREFIX}}`, `{{PROFILE}}`, `{{SOURCE_CONTENT}}`

Template body:

```text
# Localization Context

Domain: {{DOMAIN_TITLE}}

{{SOURCE_CONTENT}}
```
