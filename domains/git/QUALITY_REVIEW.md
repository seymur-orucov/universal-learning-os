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
