# Framework Context Template

Expected output file: `FRAMEWORK_CONTEXT.md`

Purpose: Summarize domain-independent framework boundaries and canonical-source rules.

Source files:
- `specification/FRAMEWORK_SPEC.md`
- `docs/ARCHITECTURE.md`
- `docs/VISION.md`

Placeholders: `{{DOMAIN_ID}}`, `{{DOMAIN_TITLE}}`, `{{PROFILE}}`, `{{SOURCE_CONTENT}}`

Template body:

```text
# Framework Context

Domain: {{DOMAIN_ID}}
Profile: {{PROFILE}}

{{SOURCE_CONTENT}}
```
