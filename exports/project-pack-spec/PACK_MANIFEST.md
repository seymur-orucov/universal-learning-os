# Project Pack Manifest

## Purpose

Define the human-readable manifest contract for Project Packs.

## Scope

This document describes what a manifest records. It does not define a machine-readable schema.

## Manifest Fields

A Project Pack manifest SHOULD record:

- Pack id.
- Pack title.
- Pack version.
- Source repository version or commit placeholder.
- Target environment.
- File budget.
- Included files.
- Summarized files.
- Excluded files.
- Domain pack selected.
- Commands selected.
- Agent skills selected.
- Learner templates selected.
- Session templates selected.
- Localization defaults.
- Evidence and mastery rules included.
- Known limitations.
- Open questions.

## Normative Requirements

- A manifest MUST be human-readable at this stage.
- A manifest SHOULD identify the canonical repository files used to derive the pack.
- A manifest MUST declare files that are summarized, omitted, or merged.
- A standard manifest containing the optional Notion journal integration MUST declare the command and skill source merges and keep each canonical source separately labeled in its output file.
- A manifest MUST distinguish reusable Project Pack content from runtime learner state.
- A manifest SHOULD document the 25-file budget and remaining spare capacity.
- Machine-readable manifests MAY be future work.

## Relationships

- File budget rules are defined in `exports/project-pack-spec/FILE_BUDGET.md`.
- File selection rules are defined in `exports/project-pack-spec/SELECTION_RULES.md`.
- Manifest authoring template is `templates/project-pack/PACK_MANIFEST_TEMPLATE.md`.

## OPEN QUESTION

- Should manifest ids follow a repository-wide naming convention?
