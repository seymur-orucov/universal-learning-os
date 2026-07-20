# Stage 33.0 GoF and React Design Patterns Domain Test

## Purpose

Verify that `gof-react-patterns` is the only Stage 33.0 domain addition and preserves the nine-file canonical domain, exact 25/5 pack contracts, learner-state boundaries, generic CLI/Studio integration and existing domains.

## Automated Baseline

```sh
node tools/ulos-cli/src/index.js list-domains
node tools/ulos-cli/src/index.js inspect-pack --domain gof-react-patterns --profile standard
node tools/ulos-cli/src/index.js inspect-pack --domain gof-react-patterns --profile compact
node tools/ulos-cli/src/index.js generate --domain gof-react-patterns --profile standard --dry-run
node tools/ulos-cli/src/index.js generate --domain gof-react-patterns --profile compact --dry-run
node tools/ulos-cli/src/index.js validate
node tools/ulos-cli/src/index.js validate-learner
node --test tools/ulos-cli/test/*.test.js
```

Expected: domain appears once; 11 domains and 22 packs validate; standard has 25 files including five `GOF_REACT_PATTERNS_*` outputs; compact has the exact five contract filenames.

## Manual Acceptance

Use `tests/manual-acceptance/gof-react-patterns/ACCEPTANCE_CHECKLIST.md` and `REAL_LEARNING_PILOT.md`.

- Confirm Module 1 starts from problem/forces, not a catalog quiz.
- Sample all GoF categories and all React pattern groups.
- Confirm TypeScript-first completeness, purposeful JavaScript comparison, Vitest, and RTL only for rendered behavior.
- Confirm diagrams are valid and simplification labels are honest.
- Ask learner to reject/remove a pattern and defend no-pattern alternative.
- Exercise every requested command and both profiles.
- Confirm Studio dynamically lists the domain after CLI-backed reload with no domain-specific screen.
- Confirm no learner progress changes without observed activity or explicit instruction.

