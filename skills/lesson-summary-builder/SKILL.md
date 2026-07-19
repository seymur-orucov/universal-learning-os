# Lesson Summary Builder Agent Skill

## Purpose

Build one grounded, destination-neutral lesson summary model for lesson-note exporters.

## Separation of Concerns

- `SAVE_LESSON` decides when to run and which exporter to route to.
- This skill normalizes available lesson context once.
- Exporter skills render the normalized model for Obsidian or Notion.
- Learner state, evidence, and mastery remain governed by their canonical specifications.

## Inputs

- Available conversation and session context.
- Relevant domain, track, module, lesson identity, and localization preferences when grounded.
- Learner-produced work visible in the current context.
- Existing observed evidence or assessment results, when already established.

## Normalized Model

Include only grounded values in these categories:

- lesson identity: date, domain, track, module, lesson number or id, and title;
- objective;
- concepts and important terminology;
- examples that were actually taught or used;
- learner work that was actually submitted or performed;
- observed mistakes and their corrections;
- existing evidence or assessment results;
- meaningful lesson status;
- next steps.

Unsupported values and empty categories MUST be omitted. Do not emit placeholders such as `unknown`, `N/A`, empty headings, empty arrays, or invented dates.

## Grounding Rules

- Distinguish assistant-provided examples from learner work.
- Distinguish displayed instruction from observed evidence.
- Record mistakes only when they were observed in learner work; pair a correction only with what was actually explained or established.
- Preserve an existing assessment result or assessment-derived mastery value without upgrading, downgrading, or creating one.
- Use `in-progress` unless meaningful completion is grounded. Do not infer completion merely because a summary was requested.
- Preserve the learner's instruction language for explanatory content and the configured terminology language for domain terms.
- Normalize a reliably known full date to `YYYY-MM-DD`; otherwise omit it.

## Outputs

- One destination-neutral normalized summary for the selected exporter.
- An explicit report that meaningful lesson context is insufficient when no useful grounded summary can be produced.

## Constraints

- MUST NOT create or modify learner state.
- MUST NOT create evidence from displayed content, note generation, or file creation.
- MUST NOT infer mastery, completion, learner work, mistakes, assessment results, or next steps.
- MUST NOT include credentials, connector internals, opaque ids, local paths, or vault paths.
- MUST NOT contain destination-specific YAML, Notion target discovery, artifact links, or write-success claims.

## Related Specifications

- `specification/SKILL_SPEC.md`
- `specification/LEARNING_LIFECYCLE.md`
- `specification/STATE_SPEC.md`
- `core/mastery-model/EVIDENCE_REQUIREMENTS.md`
