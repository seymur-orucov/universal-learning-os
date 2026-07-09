# Continuation Prompt Template

Expected output file: `CONTINUATION_PROMPT.md`

Purpose: Provide a safe continuation prompt that asks for prior state or session summaries without inventing progress.

Source files:
- `templates/project-pack/CONTINUATION_PROMPT_TEMPLATE.md`
- `specification/STATE_SPEC.md`
- `specification/LEARNING_LIFECYCLE.md`

Placeholders: `{{DOMAIN_ID}}`, `{{DOMAIN_TITLE}}`, `{{PROFILE}}`, `{{SOURCE_CONTENT}}`

Template body:

```text
# Continuation Prompt

Continue {{DOMAIN_TITLE}} learning with evidence-based progress boundaries.

{{SOURCE_CONTENT}}
```
