# Stage 30.0 Git Domain Manual Acceptance Test

## Canonical Domain

- [ ] `domains/git/` contains exactly the required reusable domain sources: `DOMAIN.md`, `SYLLABUS.md`, `SKILL_GRAPH.md`, `PRACTICE_RULES.md`, `ASSESSMENT_RULES.md`, `PROJECTS.md`, `GLOSSARY.md`, and `QUALITY_REVIEW.md`.
- [ ] Domain id is `git`, title is Git, launch prefix is `GIT`, and default instruction language is Azerbaijani with natural English Git terminology.
- [ ] Target learners include beginners, command-familiar developers, experienced engineers, and Senior/Lead/Team Lead workflow owners.
- [ ] Tracks are `git-foundations`, `git-collaboration`, `git-advanced`, and `git-leadership` and reuse one progressive syllabus.
- [ ] No learner progress, evidence log, personal goal, mastery record, or session state appears in canonical domain content.

## Teaching and Technical Accuracy

- [ ] Working tree, index, local object database, commits, branches, tags, `HEAD`, refs, remote-tracking branches, server refs, remotes, and DAG are distinguished.
- [ ] Branches are described as movable refs rather than independent file copies.
- [ ] Graph prediction covers fast-forward, three-way merge, reset, revert, rebase, cherry-pick, reachability, and reflog recovery.
- [ ] `origin` is a convention, remote-tracking branches are local observations, and `pull` is fetch plus explicit/configured integration.
- [ ] Merge/rebase and branching strategies are compared contextually; no universal rebase or GitFlow recommendation appears.
- [ ] `START_LESSON` behavior remains teaching-first, prerequisite-safe, progressive across turns, and normally asks for one learner action.

## Safety, Recovery, and Security

- [ ] Hard reset, clean, force push, interactive rebase, branch/tag deletion, and shared rewrite include risk, local/shared status, safer alternatives, recovery, verification, and disposable-practice boundaries.
- [ ] `--force-with-lease` is preferred to unexplained `--force`, with its limitations stated.
- [ ] Recovery covers wrong branch, incorrect local/pushed commit, reset, branch deletion, detached `HEAD`, interrupted rebase, bad merge, lost commit, file deletion, incorrect conflict resolution, force push, and secret exposure.
- [ ] Reflog expiry, garbage collection, object retention, and multi-clone/server evidence limits are accurate.
- [ ] Secret response requires credential revocation/rotation; later deletion or local rewrite is not claimed to make exposure safe.

## Practice, Assessment, and Projects

- [ ] Every practice format requires starting state, outcome, safety boundary, deliverable, and verification.
- [ ] Guided work precedes independent practice in normal lessons; copied commands and displayed answers are not mastery evidence.
- [ ] Assessment checks both final repository state and model/risk understanding.
- [ ] Five projects cover foundations, branches/conflicts, remote team simulation, release/recovery, and repository governance.
- [ ] Scenario library covers all fifteen Stage 30.0 required mistake, collaboration, scale, security, release, and investigation scenarios.

## Generated Packs and Registry

- [ ] `list-domains` reports exactly eight domains and `git` appears once, last in established order.
- [ ] `git-standard` contains exactly 25 files including the five correct `GIT_*` domain files.
- [ ] `git-compact` contains exactly `PROJECT_INSTRUCTIONS.md`, `STARTUP_PROMPT.md`, `DOMAIN_CORE.md`, `COMMANDS_CORE.md`, and `MENTOR_SKILLS_CORE.md`.
- [ ] There are exactly sixteen generated domain packs: eight standard and eight compact.
- [ ] Every standard pack contains exactly 25 files and every compact pack exactly five.
- [ ] Standard and compact Git packs preserve deep-teaching, Learner-Facing Mentor Mode, optional continuity, evidence, safety, metadata visibility, and generic Obsidian/Notion lesson-export behavior.

## CLI and Studio

- [ ] Standard and compact inspect commands pass.
- [ ] Standard and compact dry-run generation commands pass.
- [ ] Handoff and snapshot commands accept `git`; unsupported domains remain rejected.
- [ ] Studio fallback and bridge smoke expectations include `git` while the UI remains generic and CLI-backed.
- [ ] Studio contains no Git-specific screen, terminal, repository manipulation, provider API, dependency, authentication, cloud, or database addition.

## Required Commands

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js inspect-pack --domain git --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain git --profile compact
node tools/ulos-cli/src/index.js generate --domain git --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain git --profile compact --dry-run
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node --test tools/ulos-cli/test/*.test.js
git diff --check
```

Run the production build, bridge smoke, and health smoke with the exact scripts in `apps/studio/package.json`.

## Final Repository Checks

- [ ] Real generation has produced both Git packs.
- [ ] No temporary handoff, snapshot, custom-output, smoke, or test artifacts remain.
- [ ] No learner state was generated or modified.
- [ ] Existing canonical domain content is unchanged; only required shared indexes/global generated context may change.
- [ ] No release tag, commit, branch, push, or pull request was created.
