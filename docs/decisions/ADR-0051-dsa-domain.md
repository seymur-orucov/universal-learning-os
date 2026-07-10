# ADR-0051: DSA Domain

## Context

Stage 24.0 paused speculative framework and Studio expansion so development could focus on real learning value. Stage 25.0 is the first learning-stack expansion and needs a practical Data Structures and Algorithms domain without changing stable generated-pack or runtime boundaries.

## Decision

Add one reusable DSA domain under `domains/dsa/`, integrate it through the existing CLI registry and generators, and publish one standard and one compact generated pack. Keep ChatGPT Projects as the daily learning runtime and Studio as an optional CLI-backed control panel.

## Domain ID

The canonical domain id is `dsa`. Existing domain ids and their ordering remain unchanged; `dsa` is appended as the fifth supported domain.

## Target Learner

The primary learner is a Senior Front-End Engineer preparing for technical interviews and improving algorithmic problem-solving. The ordered path remains beginner-safe, while experienced developers can use prerequisite-aware targeted review.

## JavaScript/TypeScript Language Decision

JavaScript is the default implementation language because it is directly relevant to the target learner and keeps examples practical. TypeScript is supported when explicitly requested or when typing improves clarity, but DSA lessons must not become TypeScript language lessons.

## Syllabus Scope

The syllabus progresses from Big O, arrays/strings, hashing, Two Pointers, and Sliding Window through linear structures, Binary Search, recursion/backtracking, trees, heap, graphs, sorting, greedy, Dynamic Programming, pattern selection, communication, and interview simulations. Advanced graph and DP work follows prerequisite skills.

## Problem-Solving Methodology

All DSA workflows use: understand; clarify constraints; identify examples and edge cases; describe and analyze brute force; find and explain an optimization; implement; test; analyze final time/space complexity.

Assistance escalates from a question through small and stronger hints, pseudocode, and partial implementation. A full solution appears only when needed or requested.

## Practice and Assessment Approach

Practice has guided, independent, review, and interview-simulation levels. Assessment evaluates understanding, clarification, pattern selection, baseline and optimization reasoning, correctness, edge cases, complexity, communication, independence, and transfer. Mastery requires learner-produced evidence and cannot follow from reading or receiving a solution.

## Generated Pack Impact

Add `exports/generated/dsa-standard/` with exactly 25 files and `exports/generated/dsa-compact/` with exactly five files. The compact exact file list and every existing pack contract remain unchanged. Total generated packs increase from eight to ten.

## CLI Impact

The CLI exposes `dsa` through existing list, inspect, validate, generate, handoff, and snapshot paths. Automated tests cover DSA file contracts, dry-runs, validation totals, and optional learner helpers.

## Studio Impact

Studio reads the CLI domain list dynamically. Only its fallback and smoke expectations change; there is no DSA-specific screen, dependency, or feature.

## Non-goals

- Front-End System Design or Node.js domains.
- Authentication, cloud/database storage, ChatGPT API integration, a full LMS, or a heavy learner runtime.
- Mandatory daily learner-state updates or automatic mastery inference.
- A DSA-specific Studio feature.
- A release tag.

## Consequences

The repository now supports five domains and ten generated packs while retaining the 25/5 contracts and learner-facing metadata boundaries. The learning stack gains an interview-relevant domain, but canonical content and generated artifacts require regeneration and validation together after future DSA edits.
