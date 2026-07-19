# Git Skill Graph

## Graph Conventions

Each stable `git.*` id names a reusable learner competency, not an agent skill or learner record. `Prerequisites` control teaching and assessment order. `Evidence` is learner-produced and must be reviewed under `ASSESSMENT_RULES.md`. `Lessons` map to `SYLLABUS.md`. `Relationships` describe reinforcement without creating hidden prerequisites.

Advanced destructive operations depend on inspection, graph reasoning, recovery, and local/shared-history judgment. They are never beginner prerequisites.

## Mental Models

### `git.state-model`

- Description: explains the working tree, staging area/index, local repository, snapshots, tracked-state lifecycle, and which area a common command reads or changes.
- Prerequisites: none.
- Evidence: annotate a repository-state diagram, interpret `status`/`diff`, and predict at least three state transitions before executing them.
- Lessons: 1–7.
- Relationships: foundation for `git.local-lifecycle`, `git.safe-undo`, `git.conflict-resolution`, and `git.internals`.

### `git.distributed-model`

- Description: distinguishes a distributed clone, local history, named remotes, server-side refs, and hosting-provider collaboration layers.
- Prerequisites: `git.state-model`.
- Evidence: explain what exists and can change offline, distinguish Git from a hosting provider, and model a clone/fetch/push exchange.
- Lessons: 1, 3, 24–29.
- Relationships: supports `git.remote-collaboration`, `git.workflow-strategy`, and `git.repository-security`.

### `git.commit-graph-model`

- Description: reasons about commits as immutable snapshot nodes in a parent-linked DAG, including ancestry, identity, reachability, merge bases, branches, tags, refs, and `HEAD`.
- Prerequisites: `git.state-model`, basic commit creation.
- Evidence: draw a graph from history output, locate refs and `HEAD`, identify ancestors and reachability, and predict new identities after replay.
- Lessons: 5–6, 13–18, 33, 38, 53–56.
- Relationships: central prerequisite for every branch, merge, recovery, rebase, debugging, and internals skill.

## Local Repository Lifecycle

### `git.local-lifecycle`

- Description: initializes or clones a repository, configures identity at the correct scope, stages intentional snapshots, commits useful units, and verifies clean or expected state.
- Prerequisites: `git.state-model`.
- Evidence: produce a small repository with a justified commit sequence and narrate each state transition.
- Lessons: 2–6, 12.
- Relationships: reinforced by `git.commit-quality` and Projects 1–4.

### `git.file-selection`

- Description: handles ignored, tracked, moved, removed, partially staged, line-ending, executable-bit, and attributed files without mixing unrelated intent.
- Prerequisites: `git.state-model`, `git.local-lifecycle`.
- Evidence: split mixed working-tree changes into correct atomic commits and verify staged versus unstaged patches.
- Lessons: 7–10, 59.
- Relationships: supports conflict quality, reviewability, and repository-size hygiene.

### `git.commit-quality`

- Description: creates atomic, reviewable commits with intent-focused messages and a truthful relationship between code, tests, and documentation.
- Prerequisites: `git.local-lifecycle`, `git.file-selection`.
- Evidence: revise a poor change set into defensible commits and review another history for scope and message quality.
- Lessons: 10–12, 72.
- Relationships: supports `git.review-collaboration`, `git.release-management`, and `git.professional-defense`.

## History Inspection

### `git.history-inspection`

- Description: uses `status`, `diff`, `show`, and filtered/graphical `log` to answer explicit questions about state and history.
- Prerequisites: `git.state-model`, `git.local-lifecycle`.
- Evidence: select appropriate commands, interpret their output, and produce a traceable answer without mutating the repository.
- Lessons: 6–7, 11, 16, 49.
- Relationships: required before integration, undo, recovery, debugging, and incident response.

## Branch and Graph Reasoning

### `git.ref-head-reasoning`

- Description: distinguishes commits, branches, tags, refs, symbolic refs, and `HEAD`, including detached `HEAD` and safe branch lifecycle operations.
- Prerequisites: `git.commit-graph-model`, `git.history-inspection`.
- Evidence: predict pointer movement across commit/switch/delete operations and preserve work created while detached.
- Lessons: 13–15, 46, 53, 55.
- Relationships: required by `git.merge-reasoning`, `git.recovery`, and `git.release-management`.

### `git.branch-divergence`

- Description: identifies ancestry, merge bases, ahead/behind states, divergence, and reachable ranges across branch tips.
- Prerequisites: `git.commit-graph-model`, `git.ref-head-reasoning`.
- Evidence: interpret a divergent graph and specify the exact commit ranges unique to each side.
- Lessons: 16, 26–27.
- Relationships: prepares `git.merge-reasoning`, `git.remote-collaboration`, and `git.rebase-editing`.

## Merge Reasoning

### `git.merge-reasoning`

- Description: predicts fast-forward and three-way merge results, merge commits, parent relationships, topology, and policy trade-offs.
- Prerequisites: `git.branch-divergence`.
- Evidence: draw before/after graphs, perform both merge forms in a disposable repository, and defend an explicit merge choice.
- Lessons: 17–18, 72.
- Relationships: prerequisite for conflict resolution and workflow strategy; contrasts with `git.rebase-editing`.

## Conflict Resolution

### `git.conflict-resolution`

- Description: resolves content, modify/delete, and rename-related conflicts during merge, rebase, or cherry-pick; continues or aborts safely; validates textual and semantic results.
- Prerequisites: `git.state-model`, `git.merge-reasoning`, `git.history-inspection`.
- Evidence: resolve a real or simulated conflict, explain base/ours/theirs in operation context, run verification, and review the final graph and patch.
- Lessons: 19–23, 39, 43.
- Relationships: supports `git.remote-collaboration`, `git.rebase-editing`, `git.recovery`, and incident drills.

## Remote Collaboration

### `git.remote-collaboration`

- Description: manages named remotes, remote-tracking branches, fetch, explicit pull integration, push, upstream tracking, ref deletion, and ahead/behind synchronization accurately.
- Prerequisites: `git.distributed-model`, `git.branch-divergence`, `git.merge-reasoning`.
- Evidence: complete a two-clone collaboration simulation and explain each local, remote-tracking, and server-side ref before and after network operations.
- Lessons: 24–30.
- Relationships: foundation for review, release, workflow, and published-incident skills.

### `git.review-collaboration`

- Description: uses forks or shared repositories, review branches, protected refs, feedback commits, branch synchronization, and merge strategy without assuming one provider.
- Prerequisites: `git.remote-collaboration`, `git.commit-quality`, `git.conflict-resolution`.
- Evidence: simulate review iteration, respond to requested changes with reviewable history, and justify the final integration method.
- Lessons: 29–30, 60–61, 70–72.
- Relationships: supports `git.workflow-strategy` and Projects 3–5.

## Safe Undo

### `git.safe-undo`

- Description: selects restore, unstage, amend, revert, or reset mode by affected state, publication status, desired outcome, and recovery boundary.
- Prerequisites: `git.state-model`, `git.history-inspection`, `git.commit-graph-model`.
- Evidence: solve varied correction scenarios, predict index/tree/ref effects, and reject unsafe context-free commands.
- Lessons: 31–32, 36.
- Relationships: prerequisite for `git.recovery`, `git.rebase-editing`, and release incident handling.

## Recovery

### `git.recovery`

- Description: uses reflogs, refs, reachability, abort paths, and preserved recovery branches to recover wrong-branch commits, resets, deleted branches, detached work, interrupted operations, bad merges, and lost-looking commits.
- Prerequisites: `git.safe-undo`, `git.ref-head-reasoning`, `git.history-inspection`.
- Evidence: recover at least two independently damaged disposable repositories, including one lost-ref scenario, and state expiry/garbage-collection limitations.
- Lessons: 33–37, 55–56.
- Relationships: required before high-risk history editing and supports `git.incident-response`.

## Rebase and History Editing

### `git.rebase-editing`

- Description: explains replay semantics and identity changes; performs local rebase, interactive editing, fixup/autosquash, conflict recovery, and shared-history risk analysis.
- Prerequisites: `git.commit-graph-model`, `git.conflict-resolution`, `git.safe-undo`, `git.recovery`, local/shared-history distinction.
- Evidence: predict and perform an unpublished rebase, map replaced commits to new commits, recover from an interruption, and defend merge versus rebase contextually.
- Lessons: 38–42.
- Relationships: contrasts with `git.merge-reasoning`; supports review cleanup but is not required for beginner branch use.

### `git.selective-workflows`

- Description: selects and operates cherry-pick, stash, and worktree with awareness of identity, duplicate patches, hidden state, conflicts, and parallel-work trade-offs.
- Prerequisites: `git.commit-graph-model`, `git.conflict-resolution`, `git.recovery`.
- Evidence: solve one hotfix or parallel-work scenario with a defended tool choice and verified final graph/state.
- Lessons: 43–45, 67.
- Relationships: supports release and large-repository operations.

## Release and Tag Management

### `git.release-management`

- Description: distinguishes lightweight, annotated, and signed tags; designs release/hotfix history; manages remote tags; and chooses rollback versus roll-forward with traceability.
- Prerequisites: `git.ref-head-reasoning`, `git.remote-collaboration`, `git.safe-undo`.
- Evidence: create and explain a release graph, tag it correctly, respond to a regression, and document coordination for any published tag change.
- Lessons: 46–48, 61, 72.
- Relationships: supports workflow strategy, security, and Project 4–5.

## Debugging and Investigation

### `git.investigation`

- Description: uses filtered history, path/rename search, `-S`, `-G`, `--first-parent`, responsible `blame`, and `bisect` to investigate a regression with explicit limitations.
- Prerequisites: `git.history-inspection`, `git.commit-graph-model`, a reproducible test predicate.
- Evidence: produce an investigation report with commands, observations, uncertainty, candidate introducing commit, verification, and prevention step.
- Lessons: 49–52.
- Relationships: informs incident response and professional communication.

## Git Internals

### `git.internals`

- Description: connects `.git`, index, object database, blobs, trees, commits, tag objects, hashes, refs, symbolic refs, loose objects, packfiles, reflogs, reachability, and garbage collection to observable Git behavior.
- Prerequisites: `git.commit-graph-model`, `git.ref-head-reasoning`, `git.recovery` basics.
- Evidence: inspect a disposable repository with safe plumbing commands and explain how one commit and ref are represented and retained.
- Lessons: 53–57.
- Relationships: deepens recovery, security, and large-repository reasoning; does not require Git implementation work.

## Automation and Hooks

### `git.automation-policy`

- Description: chooses configuration scope, attributes, templates, aliases, hooks, CI checks, and signing/verification controls while distinguishing convenience from enforceable server policy.
- Prerequisites: `git.local-lifecycle`, `git.remote-collaboration`, `git.commit-quality`.
- Evidence: review or design an automation proposal with bypass, portability, failure, security, and enforcement analysis.
- Lessons: 58–61.
- Relationships: supports workflow strategy and repository security.

## Large-Repository Operations

### `git.large-repository-operations`

- Description: diagnoses repository-size and performance concerns and compares shallow clone, partial clone, sparse checkout, LFS, submodules, subtree, worktrees, monorepo, and multi-repository approaches.
- Prerequisites: `git.distributed-model`, `git.internals`, `git.remote-collaboration`.
- Evidence: propose and defend a measured remediation or repository layout for a concrete scale scenario, including migration and failure costs.
- Lessons: 62–67.
- Relationships: feeds workflow and release strategy; LFS and submodules are optional tools, not defaults.

## Repository Security

### `git.repository-security`

- Description: handles exposed credentials, signed changes, least privilege, protected refs, suspicious history changes, backups/mirrors, and public rewrite coordination without overstating Git's security guarantees.
- Prerequisites: `git.remote-collaboration`, `git.recovery`, `git.internals`, `git.automation-policy`.
- Evidence: produce a secret-exposure or force-push incident plan that prioritizes containment, rotation, evidence preservation, coordinated restoration, and follow-up controls.
- Lessons: 61, 68–70.
- Relationships: prerequisite for `git.incident-response` and leadership capstone completion.

### `git.incident-response`

- Description: reconstructs damaged history, contains ongoing risk, coordinates people, restores refs or releases, communicates limitations, and creates prevention actions.
- Prerequisites: `git.repository-security`, `git.recovery`, `git.release-management`, `git.investigation`.
- Evidence: lead a timed simulated incident for force push, secret exposure, or bad release and defend the recovery sequence.
- Lessons: 37, 48, 68–70.
- Relationships: integrates technical recovery with governance rather than treating one command as the incident solution.

## Workflow Strategy

### `git.workflow-strategy`

- Description: compares short-lived branches, trunk-based development, GitHub Flow, GitLab Flow, GitFlow, release/environment branches, and monorepo workflows against team and delivery constraints.
- Prerequisites: `git.review-collaboration`, `git.release-management`, `git.automation-policy`; security input for protected/public repositories.
- Evidence: write a decision record covering context, alternatives, benefits, costs, risks, mitigations, team size, release frequency, CI maturity, review/rollback/compliance needs, and revisit triggers.
- Lessons: 70–73.
- Relationships: integrates commit, merge, release, security, and scale policy; no strategy is universal.

## Professional Communication and Design Defense

### `git.professional-defense`

- Description: explains Git models precisely, diagnoses damaged branches, reviews proposals, negotiates merge strategy, communicates incidents, and defends workflow decisions under changing constraints.
- Prerequisites: relevant technical skills plus `git.workflow-strategy` for leadership claims.
- Evidence: complete an interview or architecture-review simulation with graph sketches, clear assumptions, trade-offs, failure modes, and revised recommendations after follow-up constraints.
- Lessons: 52, 71–74.
- Relationships: capstone communication layer for Senior/Lead readiness and Project 5.

## Progression Gates

- Foundations gate: `git.state-model`, `git.local-lifecycle`, and `git.history-inspection` before independent mutation tasks.
- Graph gate: `git.commit-graph-model`, `git.ref-head-reasoning`, and `git.branch-divergence` before merge or remote graph assessment.
- Recovery gate: `git.safe-undo` and `git.recovery` before interactive rebase, force-push practice, cleanup, or published-history repair.
- Leadership gate: collaboration, release, automation, security, and evidence-backed trade-off reasoning before workflow governance mastery.
- Assistance gate: guided success may advance practice difficulty but cannot establish mastery without later independent or transfer evidence.
