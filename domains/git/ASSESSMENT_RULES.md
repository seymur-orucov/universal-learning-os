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
