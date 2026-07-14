# Domain Pack Factory

This guide defines the standard manual process for adding a new learning domain to Universal Learning OS.

Current supported generated domains include SQL/PostgreSQL, English, JavaScript, TypeScript, DSA, Front-End System Design, and Node.js.

## 1. Define Domain Purpose

Create `domains/<domain-id>/` and state the domain identity, audience, prerequisites, goals, non-goals, and localization policy. Keep this canonical and reusable. Do not include learner progress or Project setup instructions.

## 2. Define Learner Outcome

Describe what a learner should be able to do after meaningful practice and review. Outcomes must be evidence-based and should not treat lesson exposure as mastery.

## 3. Define Syllabus Stages

Create a staged path with concise lesson outlines. Each stage should include goal, included competencies, practice expectations, assessment checkpoint, and review triggers.

## 4. Define Lesson Style

Document mentor behavior: explanation language, technical term policy, pacing, examples, Socratic prompts, debugging style, and when to ask for learner output.

## 5. Define Practice Model

Define evidence-producing practice types, constraints, prompts, and review behavior. Practice should require learner attempts, not just generated examples.

## 6. Define Assessment and Checkpoint Model

Define what counts as evidence, what does not count, and how checkpoints should evaluate reasoning, accuracy, independence, transfer, and error repair.

## 7. Define Mastery Expectations

Map the domain to the framework mastery model without weakening `core/mastery-model/EVIDENCE_REQUIREMENTS.md`. State what novice, working, and stronger performance look like for the domain.

## 8. Define Generated Project Pack File Budget

Generated Project Packs use two profiles:

- `standard`: exactly 25 files for Plus/Go or higher Project usage. Include instructions, manifest, budget, startup and continuation prompts, selected framework context, selected commands, selected agent skills, and selected summarized domain files.
- `compact`: exactly 5 files for Free Project usage or other low-file-budget environments. Use `PROJECT_INSTRUCTIONS.md`, `STARTUP_PROMPT.md`, `DOMAIN_CORE.md`, `COMMANDS_CORE.md`, and `MENTOR_SKILLS_CORE.md`.

Compact packs must consolidate domain overview, syllabus, glossary essentials, practice/project contexts, command behavior, mentor skills, evidence/mastery guardrails, localization, learner-state boundaries, Learner-Facing Mentor Mode, and all global lesson-note export sources without weakening canonical framework semantics.

## 9. Define Launch Kit Requirements

Add launch kit files under `exports/generated/project-launch-kits/`: setup guide, upload file list, startup prompt ready file, and continuation prompt ready file. Launch kits must live outside the generated pack directory so pack counts remain stable.

## 10. Define Manual Acceptance Tests

Add practical tests under `tests/manual-acceptance/<domain-id>/`. Cover startup, first lesson, practice review, learner-facing output cleanliness, explicit progress behavior, and continuation prompt behavior. Normal learner-facing responses should not show framework implementation details unless explicitly requested.

## Repository Checklist

- Canonical domain exists under `domains/<domain-id>/`.
- Standard generated pack exists under `exports/generated/<domain-id>-standard/` and has exactly 25 files.
- Compact generated pack exists under `exports/generated/<domain-id>-compact/` and has exactly 5 files when the domain is supported for Free Project usage.
- Launch kit files exist under `exports/generated/project-launch-kits/`.
- Manual acceptance tests exist under `tests/manual-acceptance/<domain-id>/`.
- Relevant README and index files list the new domain.
- Existing generated packs keep their required file counts.

## How to add a new domain after v0.2.0

1. Create the canonical domain pack under `domains/<domain>/` with `DOMAIN.md`, `SYLLABUS.md`, `SKILL_GRAPH.md`, `GLOSSARY.md`, `PROJECTS.md`, `PRACTICE_RULES.md`, and `ASSESSMENT_RULES.md`.
2. Add the domain config to `tools/ulos-cli/src/lib/domains.js`, including domain id, title, purpose, terminology guidance, and launch kit prefix.
3. Add launch kit files under `exports/generated/project-launch-kits/` using the configured prefix for standard and compact profiles.
4. Generate the compact pack with `node tools/ulos-cli/src/index.js generate --domain <domain> --profile compact`.
5. Generate the standard pack with `node tools/ulos-cli/src/index.js generate --domain <domain> --profile standard`.
6. Run `node tools/ulos-cli/src/index.js validate` and fix any file-count, required-file, guardrail, lesson-note routing/rendering/safety, manifest, compact-structure, or launch-kit failures.
7. Add or update manual acceptance tests under `tests/manual-acceptance/` for startup, lesson, practice, review, progress visibility, and continuation behavior.
8. Update root docs, export docs, release notes, changelog, and any launch kit indexes to list the new domain.

Do not include learner-specific progress in the domain pack or generated packs. Runtime learner state belongs under `learners/active-learner/` or future learner state storage, and sensitive personal data should not be stored by default.
