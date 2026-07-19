# Data Structures and Algorithms Practice and Assessment Rules

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/dsa/PRACTICE_RULES.md

# DSA Practice Rules

## Purpose

Practice builds reasoning and transfer. It must require learner output rather than passive reading or solution recognition.

## Required Problem-Solving Flow

Use the canonical sequence in `DOMAIN.md`: understand, clarify constraints, identify examples/edge cases, establish and analyze brute force, find and explain an optimization, implement, test, and analyze final time/space complexity.

## Practice Levels

### Guided Practice

- Interpret the problem together.
- Ask the learner to identify likely patterns and complexity targets.
- Use the assistance progression: question, small hint, stronger hint, pseudocode, partial implementation, full solution only when needed or requested.
- Collaboratively implement only after the learner has reasoned about the approach.

### Independent Practice

- Give a complete problem statement, examples, constraints, signature, and requested analysis.
- Do not provide the full solution before the attempt.
- Give hints only when needed.
- Require the learner to explain the approach and complexity.

### Review Practice

- Change constraints, representation, or output requirements on a previously studied pattern.
- Mix patterns without naming the expected technique.
- Use bug-finding, complexity comparison, test design, and code explanation.
- Require transfer rather than repetition of memorized code.

### Interview Simulation

- Use timed or semi-timed reasoning when requested.
- Expect requirement clarification, verbal approach, implementation, testing, and complexity defense.
- Respond in a concise interviewer style and provide one next action.

## Exercise Format

Exercises normally include:

1. Problem statement.
2. Examples with input and output.
3. Constraints.
4. Expected JavaScript function signature (TypeScript when requested/useful).
5. Edge cases to consider without pre-solving them.
6. Requested approach explanation.
7. Requested time complexity and space complexity.
8. Optional follow-up optimization.

## Feedback Conventions

- Start with whether the solution is correct for the stated contract.
- Identify the first important reasoning or implementation issue.
- Review complexity, readability, mutation, and edge cases.
- Distinguish brute-force correctness from optimized quality.
- Ask a focused repair question before rewriting learner code.
- Keep learner-facing feedback concise.
- End with one recommended next action.
- Do not expose internal evidence or state metadata unless explicitly requested.

## Hint and Solution Guardrails

- Do not reveal the pattern label or full solution too early when recognition is part of the task.
- Prefer questions and invariant-focused hints over code fragments.
- If a full solution is requested, explain it step by step, test it, and analyze complexity; then ask for explanation, modification, or a transfer problem.
- Avoid obscure tricks when a standard readable pattern exists.

## Evidence-Producing Practice

Reviewable learner evidence may include code, explanation, corrected solution, complexity analysis, independently solved work, test cases, or transfer to a related problem. Generated examples, copied code, hints received, lesson exposure, and reading a solution are not mastery evidence.

## Source: domains/dsa/ASSESSMENT_RULES.md

# DSA Assessment Rules

## Purpose

Assess whether the learner can independently reason, implement, test, explain, and transfer DSA patterns. These rules specialize evaluation criteria without weakening `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## Evaluation Criteria

- Problem understanding: accurately restates the task and required output.
- Requirement clarification: identifies ambiguities and relevant constraints.
- Pattern selection: connects data shape and constraints to a suitable approach.
- Brute-force reasoning: presents a correct baseline before optimizing when useful.
- Optimization reasoning: explains why the optimized method improves the baseline.
- Implementation correctness: produces executable, contract-compliant code.
- Edge-case handling: tests meaningful boundaries and adversarial inputs.
- Time complexity: derives and defends the runtime.
- Space complexity: distinguishes input/output storage from auxiliary space where relevant.
- Communication: explains invariants, decisions, and tradeoffs concisely.
- Transfer: applies the pattern to a related problem with changed constraints.

## Required Evidence

Assessment requires learner-produced, reviewed evidence such as:

- code;
- an approach explanation;
- a corrected solution after feedback;
- time/space complexity analysis;
- an independent solution;
- successful transfer to a related problem;
- tests that demonstrate edge-case reasoning.

Recognizing, reading, or receiving a solution is not sufficient. Correct code without explanation may be partial evidence but is not by itself proof of transferable mastery.

## Checkpoint Formats

- Foundation checkpoint: Big O, constraints, brute force, tests, arrays, and hashing.
- Core-pattern checkpoint: Two Pointers, Sliding Window, Stack/Queue, linked lists, and Binary Search.
- Nonlinear checkpoint: recursion/backtracking, trees, heap, and graphs.
- Algorithm-design checkpoint: sorting, greedy, and Dynamic Programming.
- Mixed-pattern checkpoint: problems are not labeled by technique.
- Interview simulation: full clarification-to-complexity workflow with interviewer-style feedback.

## Independence and Assistance

Record the assistance level conceptually when interpreting evidence: independent, question only, small hint, stronger hint, pseudocode, partial implementation, or full solution. More assistance requires later independent or transfer evidence; it must not be hidden behind a mastery claim.

## Mastery Expectations

- Early working ability: solves straightforward foundation problems with limited hints and analyzes common complexity correctly.
- Solid working ability: selects and implements common patterns independently, tests edge cases, and explains tradeoffs.
- Strong interview-ready ability: handles mixed unfamiliar problems, repairs mistakes, transfers patterns, and communicates clearly under interview constraints.

Mastery must never be declared merely because a lesson, explanation, pseudocode, or solution was displayed. Internal mastery logic and state updates remain hidden from normal learner-facing responses.
