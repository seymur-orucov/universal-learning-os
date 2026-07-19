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
