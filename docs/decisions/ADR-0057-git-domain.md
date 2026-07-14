# ADR-0057: Git Domain

## Status

Accepted

## Context

Universal Learning OS supports seven canonical domains and fourteen generated packs, but it has no reusable learning domain for the version-control system underlying most software-engineering collaboration. Engineers often memorize Git commands without understanding repository state, refs, commit graphs, publication boundaries, or recovery. That gap becomes especially risky during conflicts, rebase, reset, force push, releases, security incidents, and team workflow design.

The repository already has stable domain-pack, teaching-first, evidence, localization, standard-generation, compact-generation, learner-runtime, lesson-export, and Studio contracts. A Git domain should extend those contracts without adding a provider integration, repository runtime, terminal, or new CLI command.

## Decision

Add one canonical domain under `domains/git/` and generate its standard and compact project packs through the existing data-driven generators.

### Canonical Identity

- Domain id: `git`
- Domain title: Git
- Launch prefix: `GIT`
- Standard pack: `git-standard`
- Compact pack: `git-compact`
- Default instruction language: Azerbaijani
- Preserved terminology: English Git commands, flags, refs, objects, file names, and established technical terms

The domain is appended as the eighth supported domain. No separate GitHub, GitLab, Azure DevOps, or Bitbucket domain is created.

### Target Learner

The domain serves beginners, command-familiar developers with incomplete mental models, experienced engineers needing conflict/rebase/recovery competence, and Senior/Lead/Team Lead engineers responsible for repository and delivery policy.

### Mental-Model-First Philosophy

Teach Git as a distributed version-control system and commit DAG. Working tree, index, object database, commits, branches, tags, `HEAD`, refs, remote-tracking branches, server-side refs, and remotes are explicit. State and graph predictions precede risky mutation. Branches are movable refs, not independent file copies.

### Safe-Operation Policy

Before hard reset, clean, force push, interactive rebase, ref deletion, or published rewrite, instruction identifies destructive scope, local versus shared history, safer alternatives, preservation/recovery paths, verification, and limitations. Dangerous practice uses disposable repositories or simulation. `--force-with-lease` is preferred over unexplained `--force` but is not represented as risk-free.

### Provider-Neutral Scope

Hosting providers and pull/merge requests are collaboration contexts. Git remains canonical. `origin` is a convention, remote-tracking refs are local observations, and `pull` is fetch plus integration.

### Recovery Emphasis

Recovery is a core progression, project requirement, and assessment category. It covers wrong-branch commits, local/pushed mistakes, reset, branch deletion, detached `HEAD`, interrupted operations, bad merges, lost-looking commits, force pushes, and secret exposure. Reflog/retention limits are explicit. Credential revocation or rotation precedes any history-cleanup claim.

### Practice and Assessment

Practice progresses from guided state/output interpretation to independent graph, repository, conflict, recovery, investigation, release, incident, and workflow tasks. Every practical task states starting state, intended outcome, safety boundary, deliverable, and verification method. Mastery requires learner-produced evidence and correct reasoning; displayed examples or copied commands do not qualify.

Five projects progress from personal repository foundations to branch/conflict work, remote team simulation, release/recovery operations, and a repository-governance capstone.

### Generated-Pack Impact

Add `git-standard` with exactly 25 files and `git-compact` with exactly five files. The standard pack uses `GIT_DOMAIN_CONTEXT.md`, `GIT_SYLLABUS.md`, `GIT_SKILL_GRAPH.md`, `GIT_GLOSSARY_PROJECTS.md`, and `GIT_PRACTICE_ASSESSMENT_RULES.md`. Existing merged command and skill outputs retain generic `SAVE_LESSON`, Obsidian, and Notion lesson-export behavior.

Total generated packs increase from fourteen to sixteen. Existing pack contracts remain unchanged.

### CLI Impact

Append `git` to the shared domain registry. Existing `list-domains`, `validate`, `inspect-pack`, standard/compact generation, dry-run, handoff, snapshot, and learner-validation workflows accept it. No CLI command or runtime is added.

### Studio Impact

Studio remains optional, local-first, and CLI-backed. Add `git` only to the fallback domain list and smoke expectations. No Git-specific screen, terminal emulator, repository manipulation feature, provider connection, dependency, storage, or authentication is added.

## Non-Goals

- Add another domain or a hosting-provider domain.
- Build a Git GUI, terminal, repository editor, or repository host.
- Connect to hosting-provider APIs.
- Make one branching, merge, rebase, submodule, LFS, or monorepo strategy universal.
- Implement a new learner runtime or make handoffs/snapshots mandatory.
- Modify learner progress or claim a real-learning pilot is complete.
- Change Learner-Facing Mentor Mode, pack file budgets, or lesson-export behavior.
- Create a release tag.

## Consequences

The repository supports eight domains, sixteen generated packs, eight standard packs with exactly 25 files each, and eight compact packs with exactly five files each. Git instruction gains a durable graph-and-recovery-centered path from beginner work to leadership policy. Canonical content is necessarily substantial because unsafe abbreviated recipes would undermine the domain's purpose. Provider-specific operational details remain outside the canonical subject and must be verified against current provider documentation when applied in a real organization.
