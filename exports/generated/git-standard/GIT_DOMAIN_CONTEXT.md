# Git Domain Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/git/DOMAIN.md

# Git Domain

## Identity

- Domain id: `git`
- Domain title: Git
- Domain version: `1.0.0`
- Stage introduced: `30.0`
- Default instruction language: Azerbaijani
- Terminology language: English for Git commands, flags, object names, refs, file names, and established technical terms
- Framework compatibility: the contracts in `specification/DOMAIN_PACK_SPEC.md`, `specification/LOCALIZATION_SPEC.md`, and `specification/LEARNING_LIFECYCLE.md`

## Purpose

Develop durable Git competence from first repository actions through advanced collaboration, recovery, investigation, internals, large-repository operation, and team workflow governance. Git is taught as a distributed version-control system whose commits and refs form a history graph. Command syntax is always connected to the state it reads or changes.

The canonical subject is Git. GitHub, GitLab, Azure DevOps, Bitbucket, pull requests, and merge requests are provider-neutral collaboration contexts, not separate domains and not substitutes for Git's model.

## Target Audience

- Beginners with little or no Git experience.
- Developers who use common commands but cannot reliably explain the working tree, index, `HEAD`, refs, remotes, or commit DAG.
- Experienced engineers who need safer conflict, rebase, undo, recovery, release, debugging, or large-repository skills.
- Senior Engineers, Leads, and Team Leads who define branching, review, release, repository-security, and incident-response policies.

Command memorization alone is not competence. The learner must predict state and graph changes, produce correct repository outcomes, and explain risks and trade-offs.

## Domain Goals

1. Build a precise mental model of the working tree, staging area/index, local object database, commits, branches, tags, `HEAD`, refs, remote-tracking branches, remotes, and the commit DAG.
2. Make everyday repository work deliberate: inspect first, select the state transition, execute it, then verify the result.
3. Reason about ancestry, reachability, fast-forward and three-way merge, rebase identity changes, cherry-pick, reset, revert, and reflog recovery using small graphs.
4. Collaborate safely across remotes while treating `origin` as a convention and `git pull` as fetch plus integration.
5. Resolve and validate textual and semantic conflicts rather than treating marker removal as completion.
6. Distinguish reversible correction from destructive cleanup, and local history from published/shared history.
7. Recover from common mistakes, damaged refs, interrupted operations, and force-push incidents.
8. Design contextual team workflows, release policies, automation, and repository governance with explicit revisit conditions.
9. Investigate regressions and history responsibly with `log`, `show`, `diff`, `blame`, and `bisect`.
10. Use practical internals to explain why Git behaves as it does without turning the track into Git implementation development.

## Expected Outcomes

A successful learner can:

- draw or interpret a repository-state model and a commit graph;
- predict which state a command reads and mutates before running it;
- create reviewable commits and use branches, tags, and remotes accurately;
- distinguish local branches, remote-tracking branches, and server-side refs;
- select merge, rebase, cherry-pick, reset, restore, or revert with a defensible safety rationale;
- resolve conflicts, validate the integrated result, and detect semantic conflicts Git cannot report;
- use reflogs and reachability reasoning to recover lost-looking work when it still exists;
- respond correctly to published-history damage and credential exposure;
- perform regression investigations and explain the limitations of history tools;
- compare branching, merge, release, monorepo, LFS, submodule, and automation strategies in context;
- write and defend repository contribution, review, release, hotfix, force-push, and recovery policies.

## Supported Tracks

### `git-foundations`

Beginner mental model and everyday local Git: version-control purpose, installation, identity, initialization and clone, repository states, staging, commits, inspection, file operations, branches, graphs, merging, introductory conflicts, and safe correction.

### `git-collaboration`

Branches, remotes, fetch/pull/push composition, upstream tracking, forks, review iteration, conflict resolution, protected branches, release tags, team synchronization, and collaboration workflow choices.

### `git-advanced`

Rebase and history editing, reflog recovery, stash, worktrees, cherry-pick, debugging, internals, configuration, hooks, signing, performance, large repositories, monorepos, submodules, LFS, automation, and incident response.

### `git-leadership`

Branching and merge strategy, release governance, repository standards, permissions and protection, CI enforcement, emergency bypass, hotfixes, force-push and secret incidents, monorepo policy, workflow migration, and design defense.

Tracks reuse ordered lessons from `SYLLABUS.md`; they do not duplicate canonical lesson content. Targeted entry is allowed only after prerequisite evidence or a bounded diagnostic.

## Teaching Policy

Normal `START_LESSON` delivery inherits the teaching-first lifecycle and progresses across turns through concept and mental model, concrete example, command demonstration, guided understanding check, guided practice, feedback and correction, independent practice, then closure and one next action. A normal mentor response requests one clear learner action unless the learner explicitly asks for a worksheet, challenge, assessment, or practice-only session.

Small ASCII or Mermaid graphs should be used when positions, ancestry, reachability, or a transformation are easier to see than describe. Exercises must not depend on commands, terminology, or graph concepts that have not been taught.

## Safety Policy

Before `reset --hard`, `clean`, force push, interactive rebase, branch/tag deletion, or any published-history rewrite, the mentor must:

1. state what can be lost or disrupted;
2. identify whether the affected history is local or shared;
3. show a safer inspection, backup-ref, revert, restore, or non-destructive alternative when one exists;
4. explain realistic recovery and its limits;
5. require a disposable repository or clearly simulated environment for destructive practice.

Prefer `--force-with-lease` to unexplained `--force`, while explaining that the lease can still be wrong when local remote-tracking knowledge is stale or policy forbids rewrites. Never present a destructive command as a context-free default.

Credential exposure is a security incident: revoke or rotate the credential first, then coordinate history cleanup when required. A later deletion or a local rewrite alone does not make an exposed secret safe.

## Localization Policy

Generated Git packs teach in Azerbaijani by default. Preserve technically natural English terms such as `commit`, `branch`, `merge`, `rebase`, `remote`, `working tree`, `staging area`, `index`, `HEAD`, `ref`, `reflog`, `fast-forward`, `upstream`, `cherry-pick`, `bisect`, `worktree`, and `submodule`. Explain unfamiliar terms clearly in Azerbaijani rather than replacing them with awkward literal translations. All command examples must remain valid shell commands.

## Prerequisites

- Basic command-line navigation and file editing are helpful but may be taught just in time.
- A disposable local directory is required for hands-on destructive or recovery labs.
- Collaboration labs may use local bare repositories to simulate a provider-neutral remote.
- Advanced workflow or governance lessons require foundations in repository state, commits, refs, graphs, branches, merges, and remotes.

## Non-Goals

- Teaching one hosting provider as the canonical subject.
- Building a Git GUI, terminal emulator, repository host, or provider API integration.
- Treating one branching strategy, merge policy, GitFlow, rebase, submodule, or Git LFS choice as universally best.
- Replacing security incident response with history rewriting.
- Teaching Git's source-code implementation or every plumbing command.
- Storing learner-specific progress, evidence, goals, or session history in the domain pack.

## Canonical Relationships

- `SYLLABUS.md` owns progressive lesson ordering and prerequisite flow.
- `SKILL_GRAPH.md` owns stable learning-skill ids, dependencies, evidence expectations, and lesson mappings.
- `PRACTICE_RULES.md` owns Git-specific practice formats, safety boundaries, deliverables, and verification.
- `ASSESSMENT_RULES.md` owns Git-specific evidence and evaluation criteria without weakening the framework mastery contract.
- `PROJECTS.md` owns progressive projects and the reusable scenario library.
- `GLOSSARY.md` owns Azerbaijani explanations for preserved English terminology and confused-term distinctions.
- `QUALITY_REVIEW.md` owns the Git-specific content and generated-pack quality gate.

Framework lifecycle, state, localization, and mastery rules remain canonical in their specifications and core models; this domain cross-references rather than copies those contracts.

## Source: domains/git/QUALITY_REVIEW.md

# Git Domain Quality Review

## Stage 30.0 Acceptance Gate

### Identity and Boundaries

- [x] Canonical id is `git`, title is Git, launch prefix is `GIT`, and no hosting-provider domain is introduced.
- [x] Content is reusable and learner-neutral; no progress, mastery, history, personal goal, or session state is stored.
- [x] Framework, lifecycle, mastery, command, skill, and learner-state contracts remain canonical outside the domain.
- [x] GitHub, GitLab, Azure DevOps, Bitbucket, pull requests, and merge requests appear only as contextual collaboration surfaces.

### Mental Model and Graph Correctness

- [x] Working tree, index, object database, commits, branches, tags, `HEAD`, refs, remote-tracking branches, remotes, and commit DAG are distinguished.
- [x] Commands are tied to the state they read or mutate.
- [x] Snapshots, parent edges, ancestry, merge bases, reachability, fast-forward, three-way merge, and identity replacement are accurate.
- [x] Branches are movable refs, never described as independent copies of files.
- [x] ASCII graphs are small, directed by parent relationships, and label refs/`HEAD` clearly.

### Command Correctness

- [x] Command examples are valid shell commands and use current Git command forms intentionally.
- [x] `git pull` is described as fetch plus configured/selected integration, not magical synchronization.
- [x] `origin` is a convention, not a special mandatory keyword.
- [x] Remote-tracking branches are local observations, not writable local branches or live server refs.
- [x] Reset modes, revert, restore, rebase, cherry-pick, stash, worktree, bisect, tags, fetch, push, and ref behavior are distinguished.

### Destructive-Operation Safety

- [x] `reset --hard`, `clean`, force push, interactive rebase, branch/tag deletion, and shared-history rewrite require explicit risk explanation.
- [x] Local versus published/shared history is identified before risky advice.
- [x] Safer alternatives, preservation refs, verification, recovery, and limitations are included.
- [x] Dangerous practice uses disposable repositories or simulation; important repositories are excluded.
- [x] `--force-with-lease` is preferred to unexplained `--force`, with stale-knowledge and policy limitations stated.
- [x] Beginner prerequisites never require advanced destructive operations.

### Recovery and Security Accuracy

- [x] Recovery is a core progression covering wrong branch, local/pushed error, reset, branch deletion, detached `HEAD`, rebase, merge, lost commit, file deletion, bad resolution, force push, and secret exposure.
- [x] Reflog, reachability, expiry, garbage collection, multi-clone evidence, and backup limitations are honest.
- [x] A later deletion does not remove an exposed secret from history.
- [x] Credential revocation/rotation precedes history cleanup; local rewrite alone is never claimed to make a secret safe.
- [x] Force-push and suspicious-history incidents include containment, coordination, restoration, communication, and prevention.

### Deep Teaching and Progressive Practice

- [x] Normal `START_LESSON` is teaching-first and progresses concept → example → demonstration → guided check → guided practice → feedback → independent practice → closure.
- [x] Normal mentor responses request one clear learner action.
- [x] Independent work does not precede taught concepts or missing prerequisites.
- [x] Practices state starting state, outcome, safety boundary, deliverable, and verification.
- [x] Practice varies across state, output, graph, simulation, conflict, recovery, investigation, review, strategy, release, incident, interview, and capstone work.
- [x] Copying commands or displayed solutions cannot count as evidence.

### Workflow and Trade-Off Honesty

- [x] Merge and rebase are contextual alternatives; rebase is not universally superior.
- [x] Trunk-based development, GitHub Flow, GitLab Flow, GitFlow, release/environment branches, and monorepo workflows are compared contextually.
- [x] GitFlow is not presented as universal best practice.
- [x] Every leadership decision considers team size, release frequency, CI maturity, review, rollback, compliance, costs, risks, and revisit conditions.
- [x] Merge commit, squash merge, and rebase merge consequences are explicit.
- [x] Submodules and Git LFS include operational trade-offs and are not defaults.

### Evidence and Assessment

- [x] Mastery requires learner-produced repository, graph, recovery, investigation, review, workflow, or project evidence.
- [x] Both correct final state and correct reasoning/risk understanding are assessed.
- [x] Assistance level affects claims; guided work requires later independent or transfer evidence.
- [x] Normal learner-facing output hides internal evidence, mastery, state, and proposed-update metadata unless explicitly requested.

### Localization

- [x] Default instruction is Azerbaijani with natural English Git commands, flags, refs, object names, file names, and technical terms preserved.
- [x] Glossary explanations are clear Azerbaijani rather than awkward literal translations.
- [x] Git versus provider and all required confused-term pairs are explicitly distinguished.
- [x] Command syntax is never localized into invalid commands.

### Generated-Pack Compatibility

- [x] Canonical files match the standard/compact generator source contract.
- [x] Standard output uses the five `GIT_*` domain filenames within exactly 25 files.
- [x] Compact output preserves exactly the five contract filenames.
- [x] Merged command/skill behavior keeps generic `SAVE_LESSON`, Obsidian, and Notion export compatibility.
- [x] Learner-Facing Mentor Mode, optional continuity, and no-silent-state-mutation rules remain intact.

## Explicit Rejections

Reject content or generated output that:

- teaches Git as command memorization;
- claims branches contain independent file copies;
- presents `origin` as special or mandatory;
- treats remote-tracking branches as writable local branches or live server state;
- recommends blind `git pull`;
- recommends unexplained `reset --hard`, `git clean`, force push, or published rewrite;
- teaches rebase as universally superior to merge;
- teaches GitFlow as universal best practice;
- claims later deletion or local rewrite makes an exposed credential safe;
- treats marker removal as complete conflict resolution without validation;
- marks copied commands, mentor demonstrations, or displayed answers as mastery;
- places independent tasks before concept teaching and prerequisite establishment;
- hides costs, recovery limits, or provider-specific enforcement boundaries.

## Known Limits

- This domain defines reusable progression and evidence contracts, not a fixed archive of complete lesson transcripts.
- Hosting-provider UI, authentication, and protection features change; concrete production setup should be checked against current provider documentation while preserving the provider-neutral Git model.
- Recovery depends on actual ref logs, object retention, backups, clones, server audit data, and time; no scenario guarantees recoverability.
- Cryptographic signing, LFS, partial clone, submodules, and monorepo tooling require environment-specific validation before adoption.
