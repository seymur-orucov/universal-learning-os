# Obsidian Lesson Exporter Agent Skill

## Purpose

Render a normalized lesson summary as a downloadable, portable UTF-8 Obsidian Markdown (`.md`) note without requiring Obsidian plugins or vault access.

## Inputs

- Explicit `SAVE_LESSON` invocation routed to the default or `OBSIDIAN` target.
- The normalized output of `skills/lesson-summary-builder/SKILL.md`.
- Runtime date only when reliably available.
- File-creation capability and the stable filename already used in the current session, when any.

## Filename Contract

Use one stable filename for the lesson during the current session:

1. Prefer `Lesson NN - English Title.md` when lesson number and a grounded English title are available.
2. Omit the number when unknown: `English Title.md`.
3. Sanitize invalid filename characters (`< > : " / \\ | ? *`), control characters, trailing dots or spaces, repeated separators, and non-English filename characters. Keep the extension exactly `.md`.
4. If no reliable title remains, use `Lesson Notes - YYYY-MM-DD.md` when a reliable runtime date is available.
5. If neither a title nor date is reliable, use `Lesson Notes.md`.

The filename MUST be ASCII/English, while note content remains localized. Do not put learner names, opaque ids, local directories, or vault paths in the filename. Regeneration in the same session MUST reuse the stable filename.

## YAML Frontmatter

Produce valid YAML frontmatter at the beginning of the note.

Required properties:

- `type: lesson-note`
- a safely quoted `title`
- `mastery: not-assessed`, unless an existing assessment-derived mastery value is grounded and preserved unchanged
- `status: in-progress`, unless meaningful completion is grounded
- `tags` containing `plos` and `lesson`

Optional properties, included only when grounded:

- `date` in `YYYY-MM-DD`
- `domain`
- `track`
- `module`
- `lesson` number or id
- one sanitized domain tag
- `aliases`

Quote and escape scalar values when YAML syntax could reinterpret them. Do not emit null, unknown, empty, duplicate, state-update, evidence-creation, credential, id, local-path, or vault-path properties.

## Note Rendering

- Start with the lesson title and concise objective when available.
- Adapt sections to the domain instead of forcing a generic syllabus. For example, language notes may use comparison tables and usage examples; programming notes may use fenced code; SQL notes may use query/result reasoning; algorithms may use complexity tables; system design may use decisions and trade-offs.
- Use callouts, tables, or fenced code blocks only when they improve the grounded material.
- Keep fenced code syntactically intact and label the language when known.
- Use restrained Obsidian wikilinks only for grounded, reusable concepts likely to be useful as separate notes. Do not wikilink every term or invent target notes.
- Add recall questions only from taught material, then place their answers later in a separate answer section so answers are not revealed immediately.
- Omit empty sections and unsupported values.
- Require no Dataview, Templater, Tasks, or other plugin syntax.
- Include a brief boundary when needed: exporting the note does not create evidence, change mastery, or update learner state.

## Artifact Workflow

1. Render the complete note from the normalized model.
2. Prefer creating an actual UTF-8 `.md` runtime artifact.
3. Mention its filename or provide a link only after the runtime confirms successful creation.
4. If file creation is unavailable or fails, state the limitation honestly, give the intended filename, and return the complete note in exactly one fenced block for manual saving. Do not claim a download exists.
5. On regeneration, create a new artifact with the same stable filename and say it supersedes the earlier session artifact. Do not claim that an earlier local or vault file was found, edited, deleted, or overwritten.

## Constraints

- MUST run only after explicit learner invocation.
- MUST consume the shared normalized model rather than re-extracting lesson truth independently.
- MUST NOT access, inspect, select, or write an Obsidian vault.
- MUST NOT expose local paths, vault names or paths, credentials, connector internals, or opaque ids.
- MUST NOT offer PDF, DOCX, HTML, proprietary Obsidian formats, or automatic vault placement as if supported.
- MUST NOT create evidence, infer mastery, or mutate learner state.

## Failure Modes

- Meaningful normalized lesson context is unavailable.
- A safe filename cannot be derived, requiring the defined fallback filename.
- Runtime file creation is unavailable or fails, requiring the one-block fallback.

## Related Specifications

- `specification/SKILL_SPEC.md`
- `commands/SAVE_LESSON.md`
- `skills/lesson-summary-builder/SKILL.md`
- `specification/LEARNING_LIFECYCLE.md`
- `specification/STATE_SPEC.md`
