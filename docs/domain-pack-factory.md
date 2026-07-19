# Domain Pack Factory

This guide defines the standard manual process for adding a new learning domain to Universal Learning OS.

Current supported generated domains include SQL/PostgreSQL, English, JavaScript, TypeScript, and Front-End Testing.

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
- `compact`: exactly 5 files for supported generated Free Project packs. Use `PROJECT_INSTRUCTIONS.md`, `STARTUP_PROMPT.md`, `DOMAIN_CORE.md`, `COMMANDS_CORE.md`, and `MENTOR_SKILLS_CORE.md`.

Compact packs must consolidate domain overview, syllabus, glossary essentials, practice/project contexts, command behavior, mentor skills, evidence/mastery guardrails, localization, learner-state boundaries, and Learner-Facing Mentor Mode without weakening canonical framework semantics.

## 9. Define Launch Kit Requirements

Add launch kit files under `exports/generated/project-launch-kits/`: setup guide, upload file list, startup prompt ready file, and continuation prompt ready file. Launch kits must live outside the generated pack directory so pack counts remain stable.

## 10. Define Manual Acceptance Tests

Add practical tests under `tests/manual-acceptance/<domain-id>/`. Cover startup, first lesson, practice review, learner-facing output cleanliness, explicit progress behavior, and continuation prompt behavior. Normal learner-facing responses should not show framework implementation details unless explicitly requested.

## Repository Checklist

- Canonical domain exists under `domains/<domain-id>/`.
- Standard generated pack exists under `exports/generated/<domain-id>-standard/` and has exactly 25 files.
- Compact generated pack exists under `exports/generated/<domain-id>-compact/` and has exactly the 5 required files when the domain is supported for Free Project usage.
- Launch kit files exist under `exports/generated/project-launch-kits/`.
- Manual acceptance tests exist under `tests/manual-acceptance/<domain-id>/`.
- Relevant README and index files list the new domain.
- Existing generated packs keep their required file counts.
