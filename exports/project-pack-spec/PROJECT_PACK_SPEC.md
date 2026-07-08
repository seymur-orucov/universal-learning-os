# Project Pack Specification

## Purpose

Define the contract for Project Packs: curated, ChatGPT Project-ready subsets of Universal Learning OS.

## Scope

This specification covers Project Pack concepts, boundaries, required metadata, file budget behavior, and runtime separation. It does not generate packs or define executable tooling.

## Non-Goals

- It does not create SQL/PostgreSQL or English Project Packs.
- It does not create compiled bundle files.
- It does not create scripts, schemas, or learner state.
- It does not replace canonical repository specifications.

## Core Concepts

- Project Pack: a curated set of files prepared for a target project environment.
- Pack Profile: a target file-count and selection model such as `standard` or `compact/free`.
- Project Pack Source: canonical repository files used to derive the pack.
- Project Pack Manifest: a human-readable record of included, summarized, and excluded files.
- File Budget: the maximum number of source files allowed for the target environment.
- Required Files: files that MUST be included for the selected pack profile.
- Optional Files: files that MAY be included if budget remains.
- Summarized Files: canonical files represented by a shorter derived summary.
- Excluded Files: source files intentionally omitted from the pack.
- Runtime State: learner-specific data used during learning sessions; it is not reusable Project Pack content.
- Project Instructions: instructions configuring the ChatGPT Project behavior.
- Startup Prompt: prompt used to begin the first session in the project.
- Continuation Prompt: prompt used to continue after a prior session.

## Normative Requirements

- A Project Pack MUST be derived from canonical repository files.
- A Project Pack MUST NOT silently change framework semantics.
- A Project Pack MUST preserve evidence-based mastery from `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.
- A Project Pack MUST preserve localization semantics from `specification/LOCALIZATION_SPEC.md`.
- A Project Pack MUST separate reusable domain content from learner state.
- A Project Pack MUST NOT imply that lesson exposure, file inclusion, generated content, or project setup equals mastery.
- Learner progress MUST belong in learner state, not the Project Pack.
- A Project Pack SHOULD include a manifest.
- A Project Pack SHOULD define a file budget.
- A Project Pack MAY include summarized files when file limits require it.
- A Project Pack MUST declare when files are summarized, omitted, or merged. Standard packs SHOULD use a manifest; compact/free packs MAY declare this in merged core files when a separate manifest would exceed the file budget.
- A Project Pack MUST declare its pack profile and file budget.
- A compact/free Project Pack MUST contain no more than 5 files.

## Relationships

- File budget rules are defined in `exports/project-pack-spec/FILE_BUDGET.md`.
- Manifest requirements are defined in `exports/project-pack-spec/PACK_MANIFEST.md`.
- Selection rules are defined in `exports/project-pack-spec/SELECTION_RULES.md`.
- Manual export workflow is defined in `exports/project-pack-spec/EXPORT_WORKFLOW.md`.
- Project Pack templates are stored in `templates/project-pack/`.

## OPEN QUESTION

- What repository version identifier should be used before stable release tags exist?
- Should generated Project Packs be committed, ignored, or published separately?
