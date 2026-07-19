# Git Practice and Assessment Rules

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/git/PRACTICE_RULES.md

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

## Source: domains/git/ASSESSMENT_RULES.md

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
