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
