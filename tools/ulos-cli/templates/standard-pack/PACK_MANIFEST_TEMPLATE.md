# Pack Manifest Template

Expected output file: `PACK_MANIFEST.md`

Purpose: Declare pack identity, profile, source files, summarized files, merged files, excluded files, and generation limitations.

Source files:
- `exports/project-pack-spec/PACK_MANIFEST.md`
- `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md`
- all selected canonical files for the generated pack

Placeholders: `{{DOMAIN_ID}}`, `{{DOMAIN_TITLE}}`, `{{DOMAIN_PREFIX}}`, `{{PROFILE}}`, `{{GENERATED_FILE_COUNT}}`, `{{SOURCE_CONTENT}}`

Template body:

```text
# Pack Manifest

Domain: {{DOMAIN_ID}}
Profile: {{PROFILE}}
Expected files: {{GENERATED_FILE_COUNT}}

{{SOURCE_CONTENT}}
```
