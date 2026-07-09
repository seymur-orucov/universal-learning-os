# ADR-0037: Standard Pack Generation Plan

## Status

Accepted for Stage 16.0.

## Context

Stage 15.0 implemented real compact pack generation. Compact packs are small, fixed 5-file outputs that intentionally merge framework, command, skill, and domain content into broad core files.

Standard packs are more complex. They must remain exactly 25 files, preserve individual command and skill files, include manifest and file-budget documents, include multiple framework context files, and split domain content into five generated domain-specific files. Standard generation also has higher drift risk because existing standard packs are already committed for all supported domains and are used as practical ChatGPT Project upload artifacts.

## Decision

Stage 16.0 defines the standard pack generation model, output contract, source mapping, templates, and safety plan, but does not implement full standard generation.

The standard generation plan is documented in `exports/project-pack-spec/STANDARD_GENERATION_PLAN.md`. Planning templates and source-to-output mapping are stored under `tools/ulos-cli/templates/standard-pack/`.

The CLI `generate --profile standard` remains non-generating and exits consistently with the existing unsupported-standard behavior, but it now prints Stage 16.1 planning guidance.

## Standard vs Compact Packs

Compact packs target a maximum 5-file budget. They merge selected canonical files into:

- `PROJECT_INSTRUCTIONS.md`
- `STARTUP_PROMPT.md`
- `DOMAIN_CORE.md`
- `COMMANDS_CORE.md`
- `MENTOR_SKILLS_CORE.md`

Standard packs target exactly 25 files. They keep separate context, command, skill, and domain outputs so uploaded project context remains inspectable and easier to audit.

## Canonical Mapping Model

The standard generator should derive files from canonical repository sources without changing framework semantics:

- Project instructions, manifest, file budget, startup prompt, and continuation prompt come from project-pack specifications, templates, domain metadata, and selected generated-pack conventions.
- Framework context files summarize `specification/`, `core/learning-engine/`, `core/mastery-model/`, learner state boundaries, and localization rules.
- Command files map one-to-one from selected files under `commands/`.
- Skill files map one-to-one from selected files under `skills/`.
- Domain files map from `domains/<domain>/DOMAIN.md`, `SYLLABUS.md`, `SKILL_GRAPH.md`, `GLOSSARY.md`, `PROJECTS.md`, `PRACTICE_RULES.md`, and `ASSESSMENT_RULES.md`.

The current domain prefixes are `SQL`, `ENGLISH`, `JAVASCRIPT`, and `TYPESCRIPT`. Future domains should use a deterministic uppercase prefix derived from the domain id unless a short explicit prefix is registered.

## Selection Rules

Shared framework files should be selected only when they affect runtime teaching behavior, evidence-based mastery, learner-state boundaries, localization, or command execution.

Command selection for the default standard learning pack should include `START_LESSON`, `CONTINUE_LESSON`, `PRACTICE`, `REVIEW`, `ASSESS`, and `SHOW_PROGRESS`.

Skill selection for the default standard learning pack should include lesson instruction, practice coaching, homework review, and progress management. Assessment behavior can be represented through command and context files unless a future 25-file contract changes.

Domain selection should preserve reusable domain content and exclude learner-specific progress, quality reviews, and unrelated domain packs.

## Safety

Existing standard packs are not overwritten in Stage 16.0 because the generator is not yet implemented and because replacing 25-file packs without stronger source traceability could introduce silent behavioral drift.

Stage 16.1 should implement generation in a low-risk way:

- render the documented 25-file contract;
- verify output file count before writing;
- write only under `exports/generated/<domain>-standard/`;
- refuse unknown domains or prefixes;
- preserve or explicitly regenerate manifest source traceability;
- support dry-run output;
- validate after generation;
- avoid deleting unrelated files unless they are outside the documented standard contract and the user explicitly requests cleanup.
