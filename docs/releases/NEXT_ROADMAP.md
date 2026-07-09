# Next Roadmap

## Candidate Next Stages

- v0.2.0: Release-candidate finalization complete after validation passes.
- Stage 18.0: Runtime Learner State Strategy completed as documentation and templates.
- Stage 18.1: Learner Handoff Export Model completed as documentation/templates/manual acceptance only.
- Stage 18.2: Optional Learner Snapshot Format completed as documentation/templates/manual acceptance only.
- Stage 19.0: CLI Learner Runtime Commands completed as lightweight optional scaffold/validation helpers.
- Stage 20.0: Optional import-from-handoff workflow, progress summary generator, or richer learner-state validation.
- Stage 21.0: App/dashboard concept.
- Stage 22.0: Stronger automated tests and source drift checks.
- Stage 23.0: Package distribution.
- Future domain stages: DSA, Go, System Design, or another explicitly selected domain.

## Recommended Priority

1. Tag v0.2.0 only after validation passes and the working tree is clean.
2. Keep Stage 18.0 as documentation-only unless a future stage explicitly adds optional learner-state tooling.
3. Keep learner runtime helpers optional and scaffold-oriented; do not require daily repository updates.
4. Consider optional import-from-handoff and progress summary generation before app/dashboard work.
5. Explore app/dashboard concepts after release contracts are stable.

## OPEN QUESTION

- Which future domain should be prioritized after v0.2.0: DSA, Go, System Design, or another domain?
- Should optional learner snapshot tooling be a CLI command, a template workflow, or both?
- Should import-from-handoff remain manual, become an optional CLI command, or wait for a runtime app?
- Should optional progress summaries be Markdown-only or eventually machine-readable?
