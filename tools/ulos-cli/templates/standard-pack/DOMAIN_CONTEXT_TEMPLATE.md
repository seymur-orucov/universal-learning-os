# Domain Context Template

Expected output file: `{{DOMAIN_PREFIX}}_DOMAIN_CONTEXT.md`

Purpose: Summarize reusable domain identity, scope, assumptions, audience, and mentor behavior.

Source files:
- `domains/{{DOMAIN_ID}}/DOMAIN.md`
- `domains/{{DOMAIN_ID}}/README.md`
- optional selected domain overview files

Placeholders: `{{DOMAIN_ID}}`, `{{DOMAIN_TITLE}}`, `{{DOMAIN_PREFIX}}`, `{{PROFILE}}`, `{{SOURCE_CONTENT}}`

Template body:

```text
# {{DOMAIN_TITLE}} Domain Context

{{SOURCE_CONTENT}}
```
