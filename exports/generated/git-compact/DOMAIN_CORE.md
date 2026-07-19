# Git Domain Core

Generated compact domain core for `git`.

This file consolidates canonical domain sources. It is generated from reusable domain content and does not contain learner-specific progress.

## DOMAIN.md

Canonical source: `domains/git/DOMAIN.md`.

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

## SYLLABUS.md

Canonical source: `domains/git/SYLLABUS.md`.

# Git Syllabus

## Progression Contract

Lessons are ordered from state observation to safe mutation, then from local graphs to collaboration, recovery, history editing, investigation, internals, scale, security, and governance. A learner may enter a later phase only when prerequisite evidence exists. Every phase includes graph or state reasoning, hands-on verification, and explanation; displaying commands is not completion.

## Phase 1 — Version Control and Repository Foundations

Prerequisites: none beyond basic file navigation.

1. **Why version control exists** — change history, collaboration, rollback needs, centralized versus distributed systems, and why a local Git clone is a repository rather than merely a working copy.
2. **Install and identify** — verify installation; configure `user.name` and `user.email`; understand system, global, and local scope; avoid confusing author identity with hosting authentication.
3. **Initialize and clone** — `git init`, `git clone`, the working tree, `.git`, local repository, and provider-neutral remote introduction.
4. **The three-state model** — working tree, staging area/index, repository; tracked, untracked, modified, staged, and committed states.
5. **Snapshots and commits** — Git's snapshot-oriented model, parent links, commit identity, `git status`, `git add`, `git commit`, and useful messages.
6. **First history inspection** — `git log`, `git show`, commit identifiers, current branch, and clean-state verification.

Phase evidence: explain the three-state model, create a meaningful two-commit sequence, and identify every file's state from `status` and `diff` output.

## Phase 2 — Inspection and Everyday File Operations

Prerequisites: Phase 1 repository-state competence.

7. **Diff boundaries** — unstaged versus staged diffs with `git diff` and `git diff --staged`; comparing commits and branches.
8. **Ignore and attribute policy** — `.gitignore` scope and limitations; tracked files; `.gitattributes`; line endings, text normalization, and executable-bit concerns.
9. **Restore, remove, and move safely** — `git restore`, `git rm`, `git mv`, filesystem operations followed by staging, and verification before commit.
10. **Partial staging** — pathspec selection, `git add -p`, splitting unrelated changes, and atomic commits.
11. **Navigate and format history** — ranges, `--oneline`, `--graph`, `--decorate`, path history, aliases, and readable configuration.
12. **Commit quality** — intent-focused messages, reviewable scope, tests and documentation with the change, and why a clean graph is not the same as a truthful graph.

Phase evidence: separate mixed changes into atomic commits and explain staged, unstaged, ignored, and attributed behavior.

## Phase 3 — Branches, Refs, and Commit Graphs

Prerequisites: commit creation and history inspection.

13. **Commits as a DAG** — parent edges, ancestry, reachability, branch pointers, tags, refs, symbolic refs, and immutable commit identity.
14. **`HEAD` and the current branch** — symbolic `HEAD`, branch movement on commit, detached `HEAD`, and safe preservation of detached work.
15. **Branch lifecycle** — create, switch, rename, and delete local branches; deletion safety; branches are movable names, not independent file copies.
16. **Divergence and merge bases** — common ancestors, ahead/behind reasoning, graph ranges, and predicting reachable commits.
17. **Fast-forward merge** — conditions, pointer movement, policy implications, and `--ff-only` as an explicit safety choice.
18. **Three-way merge** — merge bases, two tips, merge commits, parent order, `--no-ff`, and when preserving topology helps.

Graph lab:

```text
A---B---C  main
     \
      D---E  topic
```

Predict branch and `HEAD` positions after fast-forward, three-way merge, and branch deletion without assuming commits are deleted.

## Phase 4 — Conflict Resolution and Integration Validation

Prerequisites: divergence, merge bases, and staged-state understanding.

19. **Why conflicts occur** — overlapping textual changes, content conflict markers, index stages, and why Git cannot decide intent.
20. **Resolve content conflicts** — inspect, edit, stage, continue, test, review the diff, and validate the resulting graph.
21. **Structural conflicts** — modify/delete cases, rename-related cases, binary limitations, and choosing an intentional final tree.
22. **Operation-specific behavior** — merge versus rebase conflicts, repeated rebase conflicts, `--continue`, `--skip` risks, and safe `--abort`.
23. **Semantic conflicts** — clean textual merges that break behavior; tests, review, generated-output checks, and conflict-frequency reduction.

Phase evidence: resolve a deliberately divergent repository, explain each side and the merge base, validate behavior, and distinguish textual from semantic correctness.

## Phase 5 — Remotes and Provider-Neutral Collaboration

Prerequisites: local branches, graphs, merges, and basic conflicts.

24. **Remote model** — remote repositories, URLs, named remotes, `origin` as a convention, and authentication as separate from Git history semantics.
25. **Remote-tracking branches** — `refs/remotes/*`, local snapshots of observed remote refs, and why they are not writable working branches or live server state.
26. **Fetch and inspect** — `git fetch`, refspec awareness, pruning choices, ahead/behind graphs, and inspect-before-integrate workflow.
27. **Pull as composition** — fetch plus merge or fetch plus rebase; configuration, `--ff-only`, risk of blind pull, and choosing explicitly.
28. **Push and upstream tracking** — ref updates, non-fast-forward rejection, `-u`, remote branch deletion, and stale remote-tracking knowledge.
29. **Fork and review collaboration** — fork versus clone, multiple remotes, pull/merge requests, code-review iteration, protected branches, and provider-neutral terminology.
30. **Synchronize long-running work** — merge or rebase choices, stale branch costs, integration cadence, and reducing large conflict bursts.

Phase evidence: simulate two collaborators through a local bare remote, explain every local and remote-tracking ref, and integrate review feedback without blind synchronization.

## Phase 6 — Undo, Correction, and Recovery

Prerequisites: state areas, refs, reachability, collaboration model, and graph inspection.

31. **Correct by area** — discard or restore working-tree changes, unstage index changes, amend an unpublished commit, and verify boundaries.
32. **Revert versus reset** — public inverse commit versus ref movement; soft, mixed, and hard modes; local/shared-history decision table.
33. **Reflog and recovery model** — local ref movement history, expiry, reachability, object retention, and recovery limitations.
34. **Lost-looking commits** — recover after reset, deleted branch, wrong-branch commit, detached `HEAD`, or accidental file deletion.
35. **Bad integrations and interrupted operations** — abort or recover merge, cherry-pick, and rebase; revert a bad merge with mainline reasoning; validate repaired history.
36. **Cleanup boundaries** — preview `clean`, prefer scoped removal, understand ignored files, use disposable repositories, and never normalize `reset --hard` as the first answer.
37. **Published damage** — incorrect pushed commit, accidental force push, coordination, ref recovery, provider audit context, and when restoration requires team action.

Recovery drill evidence: reconstruct the pre-incident graph, preserve a recovery ref, restore the intended state, and explain what could not be guaranteed.

## Phase 7 — Rebase and History Editing

Prerequisites: DAG identity, merge, conflicts, reflog, reset/revert, and local/shared distinction.

38. **Rebase mental model** — select commits, replay onto a new base, create new identities, and move a ref; compare topology and collaboration costs with merge.
39. **Rebase local work** — update an unpublished branch, resolve and continue/abort conflicts, verify range and tests.
40. **Interactive rebase** — reorder, `reword`, `squash`, `fixup`, `edit`, and `drop`; backup refs and disposable practice.
41. **Autosquash** — `fixup!` commits, `--autosquash`, review-friendly local cleanup, and the boundary before publication.
42. **Rewriting shared history** — coordination, protected branches, stale leases, `--force-with-lease` benefits and limits, downstream recovery, and reasons not to rewrite.

Phase evidence: predict old and new graphs, perform an unpublished interactive rebase, map old to new commit identities, and defend merge or rebase for a stated context.

## Phase 8 — Cherry-Pick, Stash, and Worktrees

Prerequisites: graph transformations, conflicts, and recovery.

43. **Cherry-pick** — replay a change as a new commit, use cases, conflict handling, duplicate changes, patch identity, and traceability risks.
44. **Stash model** — stored working/index states, tracked/staged/untracked options, `apply` versus `pop`, conflicts, inspection, and reflog-based recovery limits.
45. **Multiple worktrees** — `git worktree`, one branch per worktree constraints, parallel review/hotfix use, cleanup, and advantages over constant stash/switch cycles.

## Phase 9 — Tags, Releases, and Hotfixes

Prerequisites: refs, remotes, collaboration, and recovery.

46. **Tags and release identity** — lightweight versus annotated tags, signed tags where appropriate, tag objects, immutable release expectations, and remote tags.
47. **Release workflows** — release commit/tag relationship, SemVer context, release branches, changelog traceability, and moving/deleting published tags as coordinated exceptions.
48. **Hotfix and rollback choices** — trunk fix, release-branch fix, cherry-pick trade-offs, revert versus roll-forward, CI maturity, and production traceability.

## Phase 10 — Debugging and Investigation

Prerequisites: history ranges, refs, ancestry, and reliable testing.

49. **Focused history search** — author/date/message/path filters, `--first-parent`, rename-aware file history, and searching added or removed text with `-S` and patterns with `-G`.
50. **Responsible `blame`** — line provenance as an investigation lead, rename/move limits, shared ownership, and why it must not become personal blame.
51. **Regression search with `bisect`** — good/bad boundaries, testable predicates, automation, skips, flaky-test limits, and verifying the identified change.
52. **Investigation report** — evidence trail, uncertainty, root cause versus introducing commit, corrective action, and regression prevention.

## Phase 11 — Practical Git Internals

Prerequisites: commits, trees, refs, reachability, and recovery.

53. **Inside `.git`** — repository layout, `HEAD`, refs, index, object database, config, and logs.
54. **Objects and content addressing** — blobs, trees, commits, annotated tag objects, hashes, identity inputs, and practical `cat-file` inspection.
55. **Refs and reachability** — symbolic refs, packed refs awareness, reachable and unreachable objects, reflogs, and why unreferenced is not immediately permanently deleted.
56. **Storage lifecycle** — loose objects, packfiles, garbage collection, pruning risk, reflog expiry, and backup implications.
57. **Porcelain and plumbing** — stable user workflows versus lower-level inspection, with no expectation to reimplement Git.

## Phase 12 — Configuration, Automation, and Trust

Prerequisites: everyday workflow, remotes, and team policy basics.

58. **Configuration scopes** — system, global, local, and worktree config; inspect origins; aliases; templates; portable team guidance.
59. **Attributes and repository policy** — line endings, executable bits, merge/diff drivers conceptually, binary classification, and generated artifacts.
60. **Hooks** — client-side versus server-side enforcement, commit-message checks, pre-commit and pre-push automation, bypass reality, and why local hooks cannot be the only control.
61. **CI and verification** — required checks, signed commits and tags where justified, verification limitations, reproducible policy, and failure handling.

## Phase 13 — Large and Complex Repositories

Prerequisites: cloning, remotes, storage internals, workflow strategy, and release concepts.

62. **Repository size and performance** — generated artifacts, large binary history, maintenance signals, measurement, and prevention.
63. **Data-reduction tools** — shallow clone limits, partial clone promises, sparse checkout working-tree scope, and tool/CI compatibility.
64. **Git LFS** — pointer model, server dependency, migration and quota implications, availability, and why LFS is not a default.
65. **Submodules and subtree** — separate-history pointers versus imported history, update/release coordination, developer ergonomics, failure modes, and alternatives.
66. **Monorepo and multi-repository strategy** — ownership, atomic cross-project changes, CI selection, release versioning, permissions, scaling, and revisit conditions.
67. **Parallel work at scale** — worktrees, branch lifecycle automation, stale-branch policy, and large-team integration cadence.

## Phase 14 — Security, Incidents, and Workflow Leadership

Prerequisites: published history, recovery, internals, automation, releases, and collaboration policy.

68. **Secret exposure response** — revoke/rotate first, assess exposure, remove from current tree, coordinate conceptual history rewriting tools, invalidate caches/clones where possible, and document limits.
69. **History integrity incidents** — suspicious changes, accidental force push, audit evidence, protected refs, backup/mirror concepts, containment, restoration, and communication.
70. **Access governance** — least privilege, branch protection, required status checks, review ownership, signed changes where appropriate, and emergency bypass controls.
71. **Branching strategy selection** — short-lived branches, trunk-based development, GitHub Flow, GitLab Flow, GitFlow, release/environment branches, and monorepo workflows compared by context rather than brand.
72. **Merge and commit policy** — merge commits, squash merge, rebase merge, atomic commits, Conventional Commits as optional convention, changelog/release automation, and traceability.
73. **Workflow decision record** — document context, benefits, costs, risks, team size, release frequency, CI maturity, review and rollback needs, compliance constraints, mitigations, and revisit triggers.
74. **Professional and interview defense** — diagnose damaged graphs, explain merge/rebase and internals, design release/hotfix flows, review hook/CI proposals, reduce conflicts, define monorepo policies, and respond to incident follow-ups.

## Track Routes

- `git-foundations`: Lessons 1–23, then 31–36 and Project 1–2.
- `git-collaboration`: Lessons 13–30, 35–37, 46–48, 60–61, 71–72 and Project 2–4.
- `git-advanced`: Lessons 31–70 with earlier prerequisite repair and Project 4.
- `git-leadership`: Lessons 24–30, 37, 42, 46–52, 60–74 and Project 5.

All routes may reuse projects and scenarios. Independent assessment follows guided work and correction; it does not begin a normal lesson.

## SKILL_GRAPH.md

Canonical source: `domains/git/SKILL_GRAPH.md`.

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

## PRACTICE_RULES.md

Canonical source: `domains/git/PRACTICE_RULES.md`.

# Git Practice Rules

## Purpose and Canonical Boundaries

These rules specialize `core/learning-engine/PRACTICE_MODEL.md` for Git. Mastery and state semantics remain canonical in the core model and `specification/LEARNING_LIFECYCLE.md`. Practice never mutates learner state directly.

## Required Practice Contract

Every practical task must state:

1. **Starting repository state** — working tree/index status, relevant refs, `HEAD`, remote-tracking knowledge, and a small graph when relevant.
2. **Intended outcome** — the desired tree, index, ref, graph, collaboration, investigation, or policy result.
3. **Safety boundary** — disposable/simulated environment, local versus shared history, preservation step, forbidden destructive shortcut, and recovery limits.
4. **Learner deliverable** — prediction, command sequence, repository artifact, graph, investigation, review, decision record, or incident plan.
5. **Verification method** — exact `status`, `diff`, `log`, `show`, `rev-parse`, `fsck`-aware inspection, tests, peer-review checks, or policy criteria that establish the result.

The learner must make a prediction or explain intent before mutation when the operation affects history or discards state. Copying a displayed command is not a sufficient task.

## Progressive Delivery

Practice follows concept teaching and command demonstration:

1. interpret a fully shown state;
2. predict one change with a hint;
3. choose among bounded commands and defend the choice;
4. execute in a disposable repository and compare actual output with the prediction;
5. repair a guided mistake;
6. solve an independent but structurally similar scenario;
7. transfer the model to a novel graph, collaboration, recovery, or policy context.

Normal mentor responses request one clear learner action. Full worksheets, challenge-first work, assessments, and practice-only sessions require an explicit learner request.

## Practice Types

### State Prediction

Given working-tree/index/commit state, predict the effect of `add`, `restore`, `commit`, amend, reset mode, revert, stash option, or checkout/switch operation on each area. Verification compares the prediction with `status`, staged/unstaged diffs, and the graph.

### Command Selection

Choose the least risky command or sequence for a stated outcome. The deliverable must name the affected state, whether history is local or shared, safer alternatives, and a verification step.

### Command-Output Interpretation

Interpret realistic `status`, `diff`, `log --graph --decorate`, fetch, push rejection, reflog, conflict, or bisect output. Ask what is known, what remains uncertain, and which read-only command should come next.

### Commit-Graph Prediction

Draw before/after ASCII or Mermaid graphs for merge, rebase, reset, revert, cherry-pick, branch deletion, tag creation, and force-push recovery. Include `HEAD`, local refs, remote-tracking refs, and new commit identities when applicable.

### Repository Simulation

Use a newly created disposable directory, temporary local clones, and a local bare repository when remotes are needed. The simulation must include setup instructions, cleanup ownership, and evidence commands. Never point destructive drills at an important existing repository.

### Guided Command Execution

Teach the state transition, demonstrate it on a small example, then ask the learner to execute one bounded step and report output. The mentor reviews the output before issuing another mutation.

### Conflict-Resolution Lab

Create intentional divergence; identify base and sides; inspect markers or structural conflicts; choose a final tree; stage; continue; run tests or semantic checks; inspect final diff and graph. Marker removal alone does not complete the lab.

### Recovery Drill

Start from a documented pre-incident graph, inject one failure, stop further destructive actions, inspect reflog/refs/objects, create a recovery ref before experimentation, restore the intended state, and report limitations. Include wrong branch, reset, deleted branch, detached `HEAD`, interrupted rebase, bad merge, and force-push variants.

### Debugging Investigation

Define a reproducible good/bad predicate; narrow history with filters or `bisect`; record commands and observations; verify the candidate commit; distinguish introduction from root cause; propose a regression test or process improvement. Flaky predicates must be identified, not hidden.

### Code and History Review

Review commit scope, messages, topology, merge strategy, accidental binaries, generated artifacts, secret indicators, conflict resolution, and traceability. Require prioritized findings and a safe repair plan rather than rewriting the learner's history automatically.

### Branching-Strategy Comparison

Compare at least two credible workflows for a supplied team context. Address benefits, costs, risks, team size, release frequency, CI maturity, review and rollback needs, compliance, migration costs, and revisit conditions.

### Release-Workflow Design

Produce a release graph and operating procedure for tags, branches, CI, approvals, hotfixes, rollback/roll-forward, versioning, and traceability. Inject a production regression and require a revised plan.

### Incident-Response Scenario

Handle secret exposure, accidental force push, suspicious history, or broken release. Deliver containment, technical recovery, coordination, communication, verification, and prevention actions. Credential revocation/rotation precedes any claim of secret safety.

### Interview Simulation

Ask one ambiguous Senior/Lead question, let the learner clarify and drive the model, add a follow-up constraint, then assess precision, safety, trade-offs, and communication. Do not reveal the complete answer before the learner responds.

### Capstone Repository Exercise

Combine local history, collaboration, release, recovery, investigation, automation, security, and policy decisions. Evaluate both repository artifacts and the learner's defense.

## Safety Rules for Dangerous Operations

For `reset --hard`, `clean`, interactive rebase, branch/tag deletion, and force push:

- require a disposable repository or a pure simulation;
- inspect `status`, the graph, and relevant refs first;
- identify local versus published/shared history;
- preserve a named backup or recovery ref when useful;
- show safer alternatives such as `restore`, `revert`, a new branch, or `--ff-only`;
- preview destructive scope (`git clean -n` before any clean exercise);
- explain reflog/object-retention limitations;
- verify after the operation;
- never use unexplained `--force`; discuss `--force-with-lease` and stale-lease limitations.

No practice should ask a learner to paste commands into a repository they cannot safely discard. Secret-removal drills use dummy credentials only and still model revocation/rotation as the first incident action.

## Graph Exercise Standard

A graph task should identify:

- commit nodes and parent edges;
- branch, tag, remote-tracking, and `HEAD` positions;
- merge base where relevant;
- commits selected or replayed by an operation;
- newly created identities;
- reachable and unreachable nodes after ref movement;
- expected final tree when the graph alone cannot establish content.

Example:

```text
          C---D  topic
         /
A---B---E        main, HEAD
```

The learner must not infer timestamps as ancestry and must not say a branch “contains a copy” of a separate file tree.

## Provider-Neutral Remote Labs

Prefer a local bare repository for deterministic fetch/push exercises. Hosting-provider UI terms may frame review, protection, and permissions, but the learner must explain the underlying Git refs and network operation. `origin` may be renamed; `upstream` is a conventional remote name whose meaning depends on configuration.

## Feedback Rules

- Start with the repository or graph outcome, then address the highest-risk misconception.
- Separate command correctness from model correctness.
- Ask the learner to repair one issue before presenting a complete solution.
- Explain why a command worked, what it changed, and what risk boundary applied.
- If a task required substantial help, schedule a later independent or transfer task.
- End with one next learner action.
- Hide internal skill ids, evidence metadata, state proposals, and mastery tables unless explicitly requested.

## Evidence-Producing Deliverables

Valid deliverables include state explanations, graph predictions, defended command sequences, repository histories, conflict resolutions with validation, recovery reports, investigation logs, review findings, release graphs, workflow decision records, incident playbooks, and independent project milestones. Mentor demonstrations, model graphs, copied commands, and setup completion are not learner evidence.

## Practice Quality Rejections

Reject a practice item when it:

- begins with independent work on an untaught concept;
- asks only for command copying or recall;
- omits the starting state or verification method;
- hides whether history is local or shared;
- uses an important repository for destructive exploration;
- calls marker removal “conflict resolution” without validation;
- treats `pull`, rebase, GitFlow, submodules, or LFS as context-free defaults;
- equates a later secret deletion with incident completion.

## ASSESSMENT_RULES.md

Canonical source: `domains/git/ASSESSMENT_RULES.md`.

# Git Assessment Rules

## Purpose

Assess transferable Git competence without weakening `core/mastery-model/EVIDENCE_REQUIREMENTS.md` or changing learner-state rules. Assessment judges both the final repository state and the learner's understanding of why it is correct, which states changed, which risks applied, and how recovery would work.

## Required Evidence Standard

Mastery requires reviewed learner-produced evidence. Valid evidence includes:

- explaining a repository's working tree, index, refs, `HEAD`, remote-tracking state, and commit graph;
- predicting a graph transformation before execution;
- selecting and defending commands for an explicit outcome;
- creating a valid, reviewable commit sequence;
- resolving and validating a real or simulated conflict;
- recovering a lost-looking commit, deleted branch, detached commit, or interrupted operation;
- correcting damaged local or published history with an appropriate coordination plan;
- explaining merge versus rebase trade-offs and commit identity changes;
- designing a release, hotfix, branching, merge, or repository-governance workflow;
- diagnosing command output or completing a regression investigation;
- reviewing hooks, CI, permissions, protection, signing, monorepo, LFS, or submodule proposals;
- defending an independent project milestone under follow-up constraints.

Displayed model answers, mentor demonstrations, copied commands/graphs, repository setup, lesson attendance, or recognition questions cannot establish mastery.

## Evaluation Dimensions

### State Correctness

The learner identifies the relevant state areas and produces the intended working tree, index, refs, remote state, or configuration without unexplained side effects.

### Graph Correctness

The learner models parent links, ancestry, merge bases, `HEAD`, refs, replayed commits, new identities, reachability, and final topology accurately.

### Command and Verification Correctness

Commands are syntactically valid for the stated shell context, sequenced deliberately, scoped to the intended state, and followed by inspection or tests that can actually verify the claim.

### Safety Judgment

The learner distinguishes local from shared history, identifies destructive scope, selects safer alternatives, preserves recovery paths, understands reflog/retention limits, and does not normalize force or hard reset.

### Recovery Competence

The learner stops compounding damage, reconstructs the earlier graph, protects recoverable objects with refs, uses abort/reflog/restoration paths appropriately, and communicates uncertainty.

### Collaboration Accuracy

The learner distinguishes remote repositories, server refs, local branches, remote-tracking branches, and conventional remote names; explains fetch/pull/push composition; and handles non-fast-forward or review iteration contextually.

### Conflict Quality

The learner understands the competing intents, creates the intended final tree, validates behavior, and recognizes semantic conflicts that produce no markers.

### Investigation Quality

The learner asks a bounded question, chooses suitable history tools, records observations, uses a reliable predicate, verifies findings, and avoids personal misuse of `blame`.

### Strategy and Trade-Off Quality

The learner connects workflow recommendations to team size, release frequency, CI maturity, review, rollback, compliance, repository scale, costs, risks, mitigations, migration, and revisit triggers.

### Security and Incident Quality

The learner prioritizes credential revocation/rotation, containment, evidence preservation, coordinated history repair, protected refs, access control, communication, and prevention; no local rewrite is claimed to make an exposed credential safe.

### Communication and Transfer

The learner uses precise terminology, sketches helpful graphs, states assumptions and uncertainty, responds to changed constraints, and transfers the model to a new repository scenario.

## Assessment Formats

1. **Foundations checkpoint:** explain the three-state model, create atomic commits, and interpret `status`/`diff`/`log`.
2. **Graph checkpoint:** predict branch, `HEAD`, fast-forward, three-way merge, reset, revert, and reachability results.
3. **Conflict checkpoint:** resolve a divergent repository and validate textual and semantic outcomes.
4. **Collaboration checkpoint:** use two clones and a bare remote; explain fetch, upstream, ahead/behind, push rejection, and chosen integration.
5. **Recovery checkpoint:** recover two damaged disposable repositories, one using reflog/ref reconstruction, with limitations stated.
6. **History-editing checkpoint:** perform and defend an unpublished rebase; explain identity replacement and published-history boundaries.
7. **Release/investigation checkpoint:** tag a release, handle a regression, and use focused history or `bisect` to produce a defensible report.
8. **Internals/scale checkpoint:** connect objects/refs/reachability to a recovery or repository-size decision.
9. **Security checkpoint:** respond to dummy secret exposure or accidental force push with containment and coordinated restoration.
10. **Leadership capstone:** design and defend a complete repository workflow, then revise it after a new compliance, scale, or delivery constraint.

## Independence and Assistance

- Guided evidence may show emerging capability but cannot alone establish mastery.
- Significant hints, a supplied command sequence, a pre-drawn final graph, or mentor-performed recovery require a later independent or transfer attempt.
- A correct final tree with an incorrect model is not mastery.
- A correct explanation without the required practical artifact is insufficient when the skill is operational.
- Accidental success must be investigated through explanation and repeatable verification.

## Safety-Critical Assessment Rules

- Destructive assessments run only in disposable repositories or simulations.
- Before execution, require risk, publication status, safer alternatives, and recovery analysis.
- Force-push assessment prefers `--force-with-lease` only after explaining its limitations and repository policy.
- Secret incidents use dummy credentials and require revocation/rotation reasoning before history-cleanup discussion.
- Do not require advanced destructive operations as evidence for beginner foundations.

## Mastery Decision Guidance

- **Introduced:** learner can recognize the model with substantial support.
- **Working:** learner can complete guided state/graph tasks and explain most effects.
- **Independent:** learner completes a fresh operational scenario correctly with bounded verification and safety reasoning.
- **Transferable/leadership:** learner adapts the model to unfamiliar constraints, evaluates alternatives, anticipates failure modes, and defends policy or incident decisions.

These labels map conceptually to the core mastery model; this file does not store learner status.

## Metadata Visibility

Normal learner-facing lessons, practice, reviews, and assessment feedback must not expose internal mastery records, skill ids, evidence logs, proposed state updates, YAML, or audit metadata. Show progress metadata only when explicitly requested, and distinguish observation from recommendation. No assessment mutates learner state silently.

## PROJECTS.md

Canonical source: `domains/git/PROJECTS.md`.

# Git Projects and Scenario Library

## Shared Project Contract

Every project defines a disposable or clearly controlled repository environment, starting graph/state, intended outcomes, safety boundaries, learner artifacts, verification commands, and evidence requirements. Milestones move from guided setup to independent execution and design defense. Existing important repositories are never used for destructive practice.

## Project 1 — Personal Repository Foundations

### Scenario

Create and maintain a small documentation or code repository while demonstrating that the working tree, index, commits, and refs are understood as separate state.

### Prerequisites

Lessons 1–12; `git.state-model`, `git.local-lifecycle`, `git.history-inspection`.

### Milestones

1. Configure repository-local identity intentionally and initialize the repository.
2. Plan and create at least four meaningful, atomic commits with useful messages.
3. Add an appropriate `.gitignore` and `.gitattributes`; explain why already tracked files behave differently.
4. Inspect staged and unstaged patches, split a mixed change with partial staging, and verify a clean final state.
5. Restore one accidental working-tree edit safely without using a hard reset.
6. Create an annotated baseline tag and show its relationship to the commit.

### Expected Learner Artifacts

Repository, commit graph, selected `status`/`diff`/`show` evidence, commit rationale, ignore/attributes explanation, and restoration note.

### Evidence Requirements

The learner must narrate state transitions and explain why each verification proves the intended result. A repository created by copying commands is insufficient.

### Common Failure Modes

One giant commit; committing generated/secrets content; confusing staged with tracked; ignoring an already tracked file; destructive restoration; tag/branch confusion; unverified final state.

### Extension Challenges

Use `git add -p` to split one file's unrelated changes; diagnose a line-ending or executable-bit diff; create a useful log alias and document its scope.

### Completion Criteria

Correct clean repository, reviewable history, accurate state explanation, safe restoration, useful annotated tag, and independent verification.

## Project 2 — Branch and Conflict Lab

### Scenario

Use a disposable repository to create linear and divergent development, demonstrate both merge forms, resolve conflicts, and explain the resulting DAG.

### Prerequisites

Project 1; Lessons 13–23; graph, merge, and conflict skills.

### Milestones

1. Draw the intended starting graph and create branches from specified commits.
2. Demonstrate a fast-forward merge and explain pointer movement.
3. Create divergence and perform a three-way merge with an intentional merge commit.
4. Resolve a content conflict and one modify/delete or rename-related conflict.
5. Inject a semantic conflict that merges cleanly; catch it with a test or explicit validation.
6. Create a commit in detached `HEAD`, preserve it with a branch, and explain the recovery.
7. Clean up merged branches only after proving commit reachability.

### Expected Learner Artifacts

Before/after graphs, repository history, conflict-resolution journal, validation output, reachability explanation, and branch-cleanup record.

### Evidence Requirements

Accurate base/side reasoning, intentional final tree, valid graph predictions, operation-specific continue/abort knowledge, and semantic validation.

### Common Failure Modes

Saying branches are file copies; deleting a branch without checking work; treating marker removal as resolution; confusing ours/theirs across rebase; incorrect parent/topology explanation.

### Extension Challenges

Recreate one conflict under rebase and compare repeated resolution behavior; compare default, `--ff-only`, and `--no-ff` outcomes.

### Completion Criteria

Both merge forms and both conflict classes are correct, tested, graphically explained, and cleaned up without losing reachable work.

## Project 3 — Team Collaboration Simulation

### Scenario

Simulate a provider-neutral team with a local bare remote, two contributor clones, feature branches, review feedback, protected-branch policy, and an explicit merge-strategy decision.

### Prerequisites

Project 2; Lessons 24–30 and 58–61; remote/review skills.

### Milestones

1. Create a bare remote and two clones; identify server refs, local branches, and remote-tracking branches.
2. Configure upstream tracking and complete feature work with reviewable commits.
3. Produce remote divergence, fetch without integration, inspect ahead/behind, then choose merge, rebase, or `--ff-only` deliberately.
4. Respond to simulated review feedback without hiding the review trail unintentionally.
5. Demonstrate a non-fast-forward push rejection and repair it without blind `pull` or force.
6. Write provider-neutral contributor guidance for branch names, commit quality, reviews, checks, stale branches, and branch cleanup.
7. Propose protected-branch and required-status-check policy, including emergency bypass governance.

### Expected Learner Artifacts

Remote simulation, ref diagrams, command/output journal, review history, `CONTRIBUTING`-style guidance, and branch-protection decision record.

### Evidence Requirements

Precise remote terminology, fetch/pull composition, justified integration, collaboration safety, review responsiveness, and enforceability analysis.

### Common Failure Modes

Calling `origin` special; treating remote-tracking refs as live/writable branches; blind pull; unnecessary force; provider-specific rules presented as Git facts; local hooks claimed as sufficient enforcement.

### Extension Challenges

Add a fork-style second remote named `upstream`; synchronize a stale long-running branch; compare squash, merge commit, and rebase merge for the same review.

### Completion Criteria

Two-clone workflow succeeds, every ref is explained, divergence is repaired safely, and team guidance has explicit trade-offs and enforcement boundaries.

## Project 4 — Release and Recovery Scenario

### Scenario

Operate a simulated release, then handle a production regression plus multiple local-history mistakes without sacrificing traceability or safety.

### Prerequisites

Projects 1–3; Lessons 31–52; safe undo, recovery, rebase, release, and investigation skills.

### Milestones

1. Create a release commit and annotated tag with release notes and a graph.
2. Use a deterministic failing test and `git bisect` to identify the regression-introducing commit; verify the finding.
3. Decide between revert, roll-forward fix, release-branch hotfix, or cherry-pick and defend the traceability costs.
4. Recover a commit created on the wrong branch without duplicating or losing intended work.
5. Recover a deleted branch or commit lost after reset using reflog/reachability reasoning and a preservation ref.
6. Abort and recover from a failed rebase, then complete an unpublished history cleanup if still justified.
7. Respond to a simulated bad merge or incorrect pushed commit with a local/shared-history-aware plan.
8. Produce release documentation and a recovery runbook with limitations.

### Expected Learner Artifacts

Release graph/tags, bisect log, regression decision, recovered refs/commits, corrected history, validation output, release notes, and recovery runbook.

### Evidence Requirements

Correct final repository plus pre-operation predictions, safety analysis, verified investigation, recovery path, publication awareness, and explanation of alternatives.

### Common Failure Modes

Moving a published tag silently; hard reset as first response; reflog treated as permanent backup; rebase claimed superior; cherry-pick duplication ignored; incorrect merge revert; failure to test recovered history.

### Extension Challenges

Simulate accidental force push between two clones and coordinate restoration; recover a dropped stash entry if still discoverable; use a worktree for an urgent hotfix.

### Completion Criteria

Release remains traceable, regression response is justified, lost-looking work is recovered where possible, and the runbook states real recovery limits.

## Project 5 — Repository Governance Capstone

### Scenario

Design and defend a complete Git workflow for a realistic engineering organization. The supplied context must include team topology, repository layout, release frequency, CI maturity, review obligations, rollback needs, compliance constraints, binary/large-file needs, and incident history.

### Prerequisites

Projects 1–4; leadership track; independent evidence for collaboration, release, recovery, automation, security, and workflow strategy.

### Milestones

1. Clarify context, assumptions, constraints, risks, and non-goals.
2. Compare short-lived branches/trunk-based development with at least one other credible workflow; include GitHub Flow, GitLab Flow, GitFlow, release/environment branches only when context makes them relevant.
3. Define branch naming/lifecycle, atomic commit guidance, optional Conventional Commits position, and stale-branch policy.
4. Choose merge commit, squash merge, rebase merge, or a contextual combination and explain traceability/debugging consequences.
5. Define CI checks, review ownership, branch protection, permissions, signed commit/tag position, hook responsibilities, and emergency bypass.
6. Design release, tag, hotfix, rollback/roll-forward, changelog, and release-automation flows.
7. Define force-push, bad-merge, lost-commit, accidental branch deletion, suspicious-history, and secret-exposure playbooks.
8. Address monorepo versus multi-repository choice, atomic cross-project changes, CI selection, release coordination, binaries/LFS, generated artifacts, submodules/subtree, worktrees, and performance.
9. Run a tabletop incident and revise the design after a new compliance, scale, or release-frequency constraint.
10. Record revisit triggers, migration steps, success indicators, and owners.

### Expected Learner Artifacts

Context brief, graph examples, workflow decision record, contribution policy, merge/release/hotfix rules, CI/protection matrix, permissions model, incident/recovery playbook, repository-scale decision, tabletop report, and concise oral/written defense.

### Evidence Requirements

Recommendations must trace to context; alternatives and risks must be honest; policies must distinguish Git from hosting controls; incident steps must be technically recoverable; security response must rotate credentials; and changed constraints must produce a coherent revision.

### Common Failure Modes

Universal GitFlow or trunk claims; provider lock-in; clean history valued above truth; force push without lease/policy; local hooks as sole enforcement; no emergency governance; secret rewrite without rotation; submodule/LFS defaults; monorepo policy without release/CI ownership; no revisit conditions.

### Extension Challenges

Design a migration from an existing workflow without stopping delivery; add regulated release evidence; handle multiple release trains; define a repository backup/mirror recovery exercise.

### Completion Criteria

The complete workflow is internally consistent, safe, enforceable, provider-neutral, adaptable, incident-ready, and defended under follow-up questions.

## Reusable Scenario Library

Each scenario must instantiate the shared practice contract and use a disposable repository or simulation.

| Scenario | Core question | Required evidence |
| --- | --- | --- |
| Commit on the wrong branch | Move or replay intent without losing unrelated work | Before/after graph, command choice, verification |
| Accidental detached `HEAD` | Preserve new commits before switching away | `HEAD` explanation, recovery branch, reachability proof |
| Deleted local branch | Determine whether its tip remains recoverable | Reflog/graph inspection, preservation ref, limitation note |
| Lost commit after reset | Reconstruct ref movement and restore safely | Reflog entry, recovered graph, state verification |
| Bad merge commit | Choose revert-mainline, repair commit, or coordinated rewrite | Parent reasoning, local/shared status, tests |
| Rebase conflict | Resolve repeated replay context or abort safely | Old/new graph, conflict journal, identity map |
| Accidental force push | Contain, find authoritative tip, coordinate restoration | Multi-clone evidence, restoration plan, prevention action |
| Remote branch divergence | Fetch, inspect, then choose integration | Ref diagram, ahead/behind ranges, defended commands |
| Stale long-running feature | Reduce integration risk without hiding costs | Merge/rebase comparison, tests, review plan |
| Urgent production hotfix | Balance speed, traceability, release branches, and follow-up | Release graph, approval/CI path, rollback plan |
| Secret committed to history | Contain exposure before cleanup | Revocation/rotation, exposure assessment, coordinated rewrite concept |
| Merge strategy disagreement | Decide from context rather than preference | Options matrix, costs/risks, revisit conditions |
| Large binary added | Remove current impact and prevent recurrence; assess historical cleanup | Size evidence, LFS/tracking trade-off, migration plan |
| Monorepo release coordination | Preserve atomicity and independent release needs | Ownership/CI/release policy and failure handling |
| Regression with `bisect` | Find a candidate using a reliable predicate | Bisect log, verification, limitations, regression test |

Scenario variants should alter publication status, CI maturity, team size, compliance, reflog age, clone availability, or repository scale so memorized recipes do not pass as transferable competence.

## GLOSSARY.md

Canonical source: `domains/git/GLOSSARY.md`.

# Git Glossary

## İstifadə Qaydası

Terminlərin canonical English forması saxlanılır; izah Azerbaijani dilində verilir. Komandalar, flag-lər, ref adları və fayl yolları tərcümə edilmir. “A versus B” qeydləri tez-tez qarışdırılan anlayışların sərhədini göstərir.

| Term | Azerbaijani explanation | Distinction or example |
| --- | --- | --- |
| Git | Dəyişiklikləri content-addressed obyektlər, commit-lər və ref-lər vasitəsilə idarə edən distributed version-control system. | GitHub hosting və collaboration platform-dur; Git-in özü deyil. Git internet olmadan local history ilə işləyə bilər. |
| repository | Git object database, ref-lər, configuration və adətən working tree-ni birləşdirən history mühiti. | Clone yalnız faylların surəti deyil; adətən tam local repository-dir. |
| working tree | Hazırda diskdə gördüyümüz checkout edilmiş fayl və qovluqlar. | Staging area deyil. `git diff` default olaraq working tree ilə index arasındakı dəyişiklikləri göstərir. |
| staging area / index | Növbəti commit snapshot-u üçün seçilmiş fayl vəziyyətini saxlayan Git strukturu. | İki ad eyni əsas anlayışı bildirir. `git diff --staged` index ilə `HEAD` commit-i müqayisə edir. |
| object database | Blob, tree, commit və annotated tag object-lərinin hash ilə saxlandığı `.git/objects` məntiqi sahəsi. | Ref database deyil; branch adı object-in özü deyil. |
| snapshot | Müəyyən anda project tree-sinin Git tərəfindən modelləşdirilən vəziyyəti. | Git diff göstərə bilər, amma əsas commit modeli yalnız “patch siyahısı” deyil. |
| tracked | Git-in index/history vasitəsilə tanıdığı path. | Tracked olmaq staged olmaq demək deyil; tracked fayl modified, staged və ya unchanged ola bilər. |
| untracked | Working tree-də olub index/history-də hələ qeyd edilməyən path. | `.gitignore` untracked path-in default görünüşünü və seçilməsini dəyişə bilər; artıq tracked faylı avtomatik untrack etmir. |
| modified | Tracked faylın working tree versiyasının index və ya commit vəziyyətindən fərqli olması. | Modified dəyişiklik hələ staged olmaya bilər. |
| staged | Index-də növbəti commit üçün seçilmiş vəziyyət. | Eyni faylda bəzi hunks staged, digərləri unstaged ola bilər. |
| commit | Tree snapshot-u, parent link-ləri, author/committer metadata-sı və message saxlayan immutable Git object-i. | Branch commit deyil; branch commit-ə yönələn movable ref-dir. Commit dəyişdiriləndə eyni commit “edit” olunmur, yeni identity yaranır. |
| commit hash / object id | Object məzmunundan hesablanan identifier. | Rebase, amend və cherry-pick metadata/parent/content kontekstinə görə yeni commit id yaradır. |
| DAG | Directed acyclic graph; commit-lərin parent istiqamətli, cycle olmayan history graph-ı. | Tarix sırası ancestry ilə eyni deyil; graph parent əlaqəsi əsasdır. |
| parent | Commit-in əvvəlki history node-na link-i. Merge commit-in birdən çox parent-i ola bilər. | First parent adətən merge edilən əsas xətti izləmək üçün istifadə olunur, amma bütün history-ni göstərmir. |
| ancestor / descendant | Parent link-ləri ilə daha əvvəlki və ya ondan törəyən commit əlaqəsi. | Timestamp ancestry sübut etmir. |
| reachability | Ref və ya seçilmiş commit-dən parent link-ləri ilə hansı object/commit-lərə çatmağın mümkün olması. | Unreachable dərhal permanently deleted demək deyil; reflog və object retention müddəti bərpa imkanı verə bilər. |
| ref | Commit və ya başqa object id-sinə yönələn adlı pointer, məsələn branch və tag ref-i. | Ref object məzmununu daşımır; adı hərəkət edə bilər. |
| branch | Adətən yeni commit yarandıqca irəliləyən `refs/heads/*` local ref-i. | Ayrı fayl surəti deyil. Branch silinməsi reachable commit-ləri dərhal silmir. |
| local branch | Cari repository-də `refs/heads/*` altında olan və checkout edilə bilən branch ref-i. | Remote-tracking branch-dən fərqlidir və push etmədən server branch-ını dəyişmir. |
| remote-tracking branch | Son fetch zamanı remote ref barədə local müşahidəni saxlayan `refs/remotes/<remote>/*` ref-i. | Writable working branch deyil və serverin canlı vəziyyəti deyil; `git fetch` ilə yenilənir. |
| server-side branch | Remote repository-də olan `refs/heads/*` ref-i. | Local `origin/main` onun son müşahidə edilmiş vəziyyətidir, özü deyil. |
| `HEAD` | Hazırda checkout edilmiş branch-a symbolic ref və ya detached halda birbaşa commit göstəricisi. | `HEAD` current branch ilə eyni anlayış deyil; detached `HEAD` zamanı current branch yoxdur. |
| symbolic ref | Başqa ref-in adını saxlayan ref. | Normal halda `HEAD` məsələn `refs/heads/main`-ə işarə edir. |
| detached `HEAD` | `HEAD`-in branch adı əvəzinə birbaşa commit-ə yönəldiyi vəziyyət. | Burada commit yaratmaq mümkündür; switch etməzdən əvvəl branch/ref yaradaraq işi qorumaq lazımdır. |
| tag | Adətən release və ya mühüm nöqtəni göstərən ref. Lightweight tag birbaşa object-ə, annotated tag isə tag object-i vasitəsilə yönəlir. | Branch kimi yeni commit-lərlə avtomatik irəliləmir. Published tag-i hərəkət etdirmək koordinasiya tələb edir. |
| lightweight tag | Birbaşa object id-sinə yönələn sadə tag ref-i. | Annotated tag message, tagger və optional signature daşıyan ayrıca object yaradır. |
| remote | Başqa repository üçün konfiqurasiya edilmiş ad və fetch/push URL/refspec əlaqəsi. | Remote server demək məcburiyyətində deyil; local bare repository də remote ola bilər. |
| `origin` | Clone zamanı default verilən conventional remote adı. | Git keyword-ü və mandatory ad deyil; dəyişdirilə və ya ümumiyyətlə istifadə edilməyə bilər. |
| `upstream` | Kontekstdən asılı conventional addır: remote adı və ya branch-in izlədiyi branch ola bilər. | `origin` versus `upstream` universal rollar deyil; configuration yoxlanılmalıdır. |
| clone | Başqa repository-dən yeni local repository və working tree yaratmaq əməliyyatı. | Fork provider-side repository copy-sidir; clone local əməliyyatdır. |
| fork | Hosting provider-də başqa repository əsasında ayrıca server-side repository yaratma collaboration modeli. | Git-in core object/command anlayışı deyil; fork-u ayrıca clone etmək olar. |
| fetch | Remote-dan object və ref məlumatını alıb remote-tracking ref-ləri yeniləyən, current branch-i avtomatik integrate etməyən əməliyyat. | `pull` adətən fetch + merge və ya fetch + rebase-dir. Əvvəl fetch edib inspect etmək daha aydın ola bilər. |
| pull | Remote dəyişikliklərini fetch edib seçilmiş üsulla current branch-ə integrate edən composite əməliyyat. | “Magical sync” deyil. Merge/rebase/ff-only davranışı explicit və ya config-dən asılıdır. |
| push | Local object/ref nəticəsini remote ref update tələbi kimi göndərən əməliyyat. | Fetch-in tərsi kimi düşünmək natamamdır; server policy və fast-forward yoxlamaları update-i rədd edə bilər. |
| upstream tracking branch | Local branch üçün default remote və merge target əlaqəsi. | Remote-tracking ref-lə əlaqəlidir, amma eyni anlayış deyil; `git branch -vv` ilə inspect etmək olar. |
| ahead / behind | İki tip arasında yalnız bir tərəfdən reachable olan commit sayları. | File diff ölçüsü deyil və fetch edilməmiş server state-ni bilmir. |
| merge base | İki commit üçün integration zamanı istifadə edilən uyğun common ancestor. | Three-way merge base tree-ni iki tip tree ilə müqayisə edir. |
| fast-forward | Target branch tip-i digər tip-in ancestor-u olduqda yeni merge commit yaratmadan ref-in irəli çəkilməsi. | Three-way merge divergence olduqda base və iki tip ilə nəticə yaradır və adətən merge commit edir. |
| three-way merge | Merge base, current tip və other tip tree-lərindən integration nəticəsi hesablayan merge. | Fast-forward sadəcə pointer movement ola bilər; three-way merge yeni merge commit yarada bilər. |
| merge commit | İki və ya daha çox parent-i olan commit. | “Bütün dəyişiklikləri özündə ayrıca saxlayan qutu” deyil; tree snapshot və parent əlaqələri saxlayır. |
| merge conflict | Git-in seçilmiş integration zamanı final content barədə avtomatik qərar verə bilmədiyi hal. | Semantic conflict Git marker yaratmadan davranışı poza bilər; test və review lazımdır. |
| conflict marker | `<<<<<<<`, `=======`, `>>>>>>>` ilə göstərilən unresolved content hissəsi. | Marker-i silmək təkbaşına düzgün resolution sübutu deyil. |
| rebase | Seçilmiş commit dəyişikliklərini yeni base üzərinə replay edib yeni commit identity-ləri yaradan history transformation. | Merge mövcud commit-ləri yeni merge commit ilə əlaqələndirə bilər; rebase universal üstün deyil. |
| interactive rebase | Commit-ləri reorder, reword, squash, fixup, edit və ya drop etmək üçün idarə olunan local history rewrite. | Published/shared history-də downstream disruption yarada bilər; recovery və koordinasiya tələb edir. |
| reset | Cari ref və seçilmiş mode-a görə index/working tree-ni başqa commit vəziyyətinə yönəldən əməliyyat. | Revert yeni inverse commit yaradır; published history üçün çox vaxt daha təhlükəsizdir. |
| soft / mixed / hard reset | `--soft` ref-i dəyişib index/working tree-ni saxlayır; mixed index-i də reset edir; `--hard` working tree-ni də uyğunlaşdıraraq dəyişiklik itirə bilər. | Mode seçimi intended state və safety boundary ilə əsaslandırılmalıdır. |
| revert | Seçilmiş commit effektinin əksini yeni commit kimi yazan əməliyyat. | History-ni geri hərəkət etdirmir; shared history-də traceable correction verir. |
| restore | Working tree və ya `--staged` ilə index path-lərini seçilmiş source-dan bərpa etməyə yönələn command. | Reset ref/index/history sərhədlərinə də təsir edə bilər; restore daha path/state-focused-dur. |
| reflog | Local ref və `HEAD` hərəkətlərinin repository-local log-u. | Remote backup və daimi arxiv deyil; expire/prune ola bilər və başqa clone-da eyni olmaya bilər. |
| unreachable | Cari ref-lərdən parent traversal ilə çatılmayan object/commit. | Permanently deleted deyil, amma reflog expiry və garbage collection sonrası itə bilər. |
| cherry-pick | Bir commit-in dəyişikliyini current tip üzərinə yeni commit kimi tətbiq etmək. | Original commit identity-ni daşımır; duplicate patch və traceability riski yarada bilər. |
| patch identity | Commit identity-dən fərqli olaraq dəyişiklik məzmununun ekvivalentliyini təsvir edən fikir. | Eyni change merge/rebase/cherry-pick nəticəsində fərqli commit id-lərlə görünə bilər. |
| stash | Working tree/index dəyişikliklərini müvəqqəti Git-managed commit-like state kimi saxlayan mexanizm. | Branch əvəzi və ya təhlükəsiz daimi backup deyil. `apply` entry-ni saxlayır, `pop` uğurlu tətbiqdən sonra silməyə çalışır. |
| worktree | Eyni repository object database-i ilə əlaqəli əlavə working tree və branch checkout-u. | Ayrı clone deyil; parallel hotfix/review işi üçün istifadə oluna bilər. |
| blame | Hər line üçün seçilmiş history provenance məlumatını göstərən investigation aləti. | İnsan günahlandırmaq üçün deyil; rename, move, squash və context limitləri var. |
| bisect | Known-good və known-bad sərhədlər arasında binary search ilə candidate regression commit tapan workflow. | Etibarlı test predicate tələb edir; tapılan commit root cause-u avtomatik sübut etmir. |
| blob | Fayl content-ni saxlayan Git object-i; filename saxlamır. | Filename və directory əlaqəsi tree object-dədir. |
| tree | Path adlarını blob və alt-tree object-lərinə bağlayan directory snapshot object-i. | Commit müəyyən tree object-inə yönəlir. |
| packfile | Bir çox object-i delta/compression ilə səmərəli saxlayan Git storage formatı. | Loose object ayrıca fayl kimi saxlanıla bilər; `gc` storage-i yenidən təşkil edə bilər. |
| garbage collection | Object storage-ni pack edən və uyğun şərtlərdə artıq qorunmayan object-ləri prune edə bilən maintenance. | Reflog-u daimi backup saymamağın səbəblərindən biridir. |
| porcelain / plumbing | Porcelain user-facing workflow command-ləri; plumbing aşağı səviyyəli object/ref əməliyyatlarıdır. | Internals dərsində plumbing inspect üçün istifadə olunur, gündəlik işi lazımsız çətinləşdirmək üçün deyil. |
| hook | Müəyyən Git event-i ətrafında local script icra mexanizmi. | Client-side hook bypass və paylaşma problemlərinə görə tək policy enforcement ola bilməz; server/CI control ilə tamamlanmalıdır. |
| signed commit / tag | Cryptographic signature ilə origin/integrity verification məlumatı daşıyan commit və ya tag. | Signature kodun təhlükəsiz, müəllifin səlahiyyətli və ya change-in doğru olduğunu avtomatik sübut etmir. |
| protected branch | Hosting/server policy ilə ref update, review və check şərtləri qoyulan branch. | Git core branch xüsusiyyəti deyil; provider/server enforcement context-dir. |
| force push | Remote ref-i non-fast-forward update etməyə çalışan push. | `--force-with-lease` gözlənilən remote tip-i qorumağa çalışır, amma stale knowledge/policy problemlərini tam aradan qaldırmır. |
| shallow clone | Məhdud history depth ilə yaradılan clone. | Tam ancestry, merge-base və bəzi investigation/release işlərini məhdudlaşdıra bilər. |
| partial clone | Bəzi object-ləri ehtiyac olduqda almaq üçün promisor remote modelindən istifadə edən clone. | Sparse checkout yalnız working tree path seçimini daraldır; eyni şey deyil. |
| sparse checkout | Working tree-də repository path-lərinin yalnız seçilmiş hissəsini materialize etmə üsulu. | History/object transfer ölçüsünü təkbaşına tam həll etmir. |
| Git LFS | Böyük file content-ni xarici LFS storage-da saxlayıb Git history-də pointer file istifadə edən extension. | Server/quota/migration dependency-si var; bütün repository-lər üçün default deyil. |
| submodule | Başqa repository-nin konkret commit-inə pointer saxlayan repository əlaqəsi. | Parent repository child history-ni daxil etmir; clone/update/release coordination əlavə mürəkkəblik yaradır. |
| subtree | Başqa project history/content-ni parent repository daxilində idarə etmə yanaşması. | Submodule-dan fərqli trade-off-ları var; sync və history ölçüsü qiymətləndirilməlidir. |
| monorepo | Bir neçə project/package-in bir repository-də idarə edilməsi. | Multi-repository universal alternativ deyil; ownership, CI, release, permissions və scale trade-off-ları var. |

## Critical Confusion Checks

- Git ≠ GitHub.
- working tree ≠ staging area/index.
- commit ≠ branch.
- local branch ≠ remote-tracking branch ≠ server-side branch.
- `fetch` ≠ `pull`.
- merge ≠ rebase.
- reset ≠ revert; restore ≠ reset.
- `HEAD` ≠ həmişə current branch.
- tag ≠ branch.
- `origin` və `upstream` konvensiyadır, xüsusi məcburi rollar deyil.
- fast-forward ≠ three-way merge.
- fork ≠ clone.
- tracked ≠ staged.
- unreachable ≠ permanently deleted.
- merge conflict ≠ semantic conflict.

## QUALITY_REVIEW.md

Canonical source: `domains/git/QUALITY_REVIEW.md`.

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
