# Domain Practice Assessment Rules Template

Expected output file: `{{DOMAIN_PREFIX}}_PRACTICE_ASSESSMENT_RULES.md`

Purpose: Merge practice rules and assessment rules for standard pack runtime use.

Source files:
- `domains/{{DOMAIN_ID}}/PRACTICE_RULES.md`
- `domains/{{DOMAIN_ID}}/ASSESSMENT_RULES.md`

Placeholders: `{{DOMAIN_ID}}`, `{{DOMAIN_TITLE}}`, `{{DOMAIN_PREFIX}}`, `{{PROFILE}}`, `{{SOURCE_CONTENT}}`

Template body:

```text
# {{DOMAIN_TITLE}} Practice and Assessment Rules

{{SOURCE_CONTENT}}
```
