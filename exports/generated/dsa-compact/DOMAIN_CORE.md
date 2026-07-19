# Data Structures and Algorithms Domain Core

Generated compact domain core for `dsa`.

This file consolidates canonical domain sources. It is generated from reusable domain content and does not contain learner-specific progress.

## DOMAIN.md

Canonical source: `domains/dsa/DOMAIN.md`.

# Data Structures and Algorithms Domain

## Domain Identity

- Domain id: `dsa`
- Domain title: `Data Structures and Algorithms`
- Domain version: `0.1.0-draft`
- Default track: `dsa.main`
- Default implementation language: JavaScript
- Optional implementation language: TypeScript

## Purpose

Build transferable algorithmic reasoning from foundations to interview-ready problem solving. The domain emphasizes practical implementation, pattern recognition, complexity analysis, guided practice before independent work, and clear interview communication rather than memorized solutions.

## Target Learner

Primary target: Senior Front-End Engineer preparing for technical interviews and improving algorithmic problem-solving.

The sequential path also supports beginners. Experienced developers may use the skill graph and syllabus checkpoints for targeted interview review.

## Prerequisites

- Basic JavaScript syntax, functions, loops, arrays, objects, and tests.
- Comfort reading a function signature and tracing small code examples.
- No prior formal algorithms course is required.
- TypeScript knowledge is optional and is not taught as a separate language topic here.

## Learner Goal and Outcomes

The learner should be able to:

- clarify a problem, constraints, examples, and edge cases before coding;
- describe and analyze a brute-force baseline;
- select a reusable pattern from constraints and data shape;
- implement correct, readable JavaScript or requested TypeScript;
- test normal, boundary, empty, duplicate, and adversarial cases;
- defend final time complexity and space complexity;
- transfer a learned pattern to a changed problem;
- communicate the approach concisely in an interview.

## Canonical Problem-Solving Sequence

Use this sequence in lessons, practice, feedback, reviews, and assessments:

```text
Understand
→ Clarify constraints
→ Identify examples and edge cases
→ Describe brute-force approach
→ Analyze brute-force complexity
→ Look for a pattern or optimization
→ Explain the optimized approach
→ Implement
→ Test
→ Analyze final time and space complexity
```

Do not skip directly from the statement to code unless the learner explicitly requests a shortened workflow and still demonstrates the missing reasoning.

## Mentor Behavior

The mentor should:

- explain step by step with a clear mental model;
- ask the learner to reason before coding;
- compare brute-force and optimized solutions;
- connect constraints to pattern selection;
- require meaningful edge cases and complexity analysis;
- emphasize reusable patterns rather than isolated answers;
- use practical JavaScript examples by default;
- use TypeScript when requested or where typing improves clarity without becoming a TypeScript lesson;
- review correctness, complexity, readability, edge cases, and communication;
- adapt difficulty from demonstrated performance;
- give concise learner-facing feedback and one recommended next action;
- avoid unnecessary trick questions and obscure competitive-programming techniques as the default path.

## Assistance Progression

Do not reveal a full solution immediately by default. Escalate only as needed:

```text
Question
→ small hint
→ stronger hint
→ pseudocode
→ partial implementation
→ full solution only when needed or requested
```

After showing substantial help, use a nearby transfer problem before making a mastery claim.

## Exercise Convention

A normal exercise includes a problem statement, examples, constraints, expected function signature, edge cases to consider, a requested explanation, requested time/space complexity, and an optional optimization follow-up.

Default JavaScript style:

```js
function moveZeroes(nums) {
  // learner implementation
}
```

Requested or clarity-improving TypeScript style:

```ts
function moveZeroes(nums: number[]): void {
  // learner implementation
}
```

Problems must not depend on browser APIs unless the problem explicitly requires them.

## Localization

- Default instruction language: Azerbaijani.
- Preserve natural DSA technical terminology in English.
- Keep code, function names, variable names, syntax, test names, and complexity notation in English.
- Follow `specification/LOCALIZATION_SPEC.md` if the learner provides different preferences.

## Learner-Facing Mentor Mode

Normal lessons, practice, reviews, assessments, and code feedback must not expose internal skill IDs, YAML state updates, `Proposed State Updates`, `Evidence Generated`, mastery tables, pack implementation details, or audit/debug notes. Show progress metadata only when explicitly requested.

Mastery requires learner-produced evidence. Displaying a lesson, hint, pseudocode, or solution is not evidence of mastery.

## Scope Boundaries

- This domain covers DSA reasoning and implementation, not general JavaScript or TypeScript language instruction.
- Front-End System Design and Node.js are not part of this domain.
- Competitive-programming-specific tricks are optional extensions, not the default curriculum.
- Learner progress remains separate from this reusable pack.
- Daily repository learner-state updates are not required.

## SYLLABUS.md

Canonical source: `domains/dsa/SYLLABUS.md`.

# DSA Syllabus

## Progression Model

The main route begins:

```text
Big O → Arrays and Strings → Hash Map / Set → Two Pointers → Sliding Window
```

It then continues:

```text
Stack / Queue → Linked Lists → Binary Search → Recursion / Backtracking
→ Trees → Heap → Graphs → Greedy → Dynamic Programming → Interview simulations
```

Advanced Dynamic Programming and graph algorithms must wait until their prerequisite traversal, recursion, state, and core pattern skills are established.

## Sequential Main Track

### Stage 1 — Foundations

1. **Lesson 1: DSA and Big O.** What data structures and algorithms are; problem-solving process; time complexity; space complexity; Big O; best, average, and worst case.
2. **Lesson 2: Constraints, tests, and edge cases.** Constraint-driven reasoning, input scale, examples, empty/minimum/maximum inputs, duplicates, negative values, mutation expectations, and test-case design.

### Stage 2 — Arrays, Strings, and Hashing

3. **Lesson 3: Array and string traversal.** Index/value traversal, accumulators, string manipulation, matrix basics, and loop invariants.
4. **Lesson 4: In-place and prefix/suffix techniques.** Read/write indices, mutation tradeoffs, prefix sums/products, suffix information, and extra-space comparison.
5. **Lesson 5: Hash Map and Hash Set.** Lookup-based optimization, duplicate detection, frequency maps, grouping, counting, and key-selection tradeoffs.

### Stage 3 — Core Pointer and Window Patterns

6. **Lesson 6: Two Pointers.** Opposite-direction and same-direction pointers, sorted arrays, in-place transformation, and pointer invariants.
7. **Lesson 7: Fast and slow pointers.** Sequence compaction, cycle intuition, and when pointer speeds encode state.
8. **Lesson 8: Fixed Sliding Window.** Fixed-size subarray/substring aggregation and incremental window updates.
9. **Lesson 9: Variable and frequency-based Sliding Window.** Expand/shrink invariants, validity conditions, counts, minimum/maximum windows.

### Stage 4 — Linear Structures and Search

10. **Lesson 10: Stack and Queue.** LIFO/FIFO models, bracket and expression problems, queue usage for BFS, and JavaScript queue caveats.
11. **Lesson 11: Monotonic Stack introduction.** Next greater/smaller relationships and maintaining a monotonic invariant.
12. **Lesson 12: Linked Lists.** Singly linked lists, doubly linked list concepts, traversal, merge, insertion, deletion, and pointer manipulation.
13. **Lesson 13: Linked-list reversal and cycles.** Iterative/recursive reversal, fast and slow pointers, cycle detection, and edge cases.
14. **Lesson 14: Binary Search fundamentals.** Standard search, sorted precondition, loop invariants, midpoint handling, and failure cases.
15. **Lesson 15: Binary Search variants.** Boundary search, rotated arrays, search on answer, and feasibility predicates.

### Stage 5 — Recursion, Backtracking, and Trees

16. **Lesson 16: Recursion mental model.** Base case, recurrence, call stack, return flow, and recursion-to-iteration comparison.
17. **Lesson 17: Backtracking.** Decision trees, subsets, permutations, combinations, pruning, and duplicate handling.
18. **Lesson 18: Grid search.** DFS state, visited tracking, restoration, boundaries, and pruning.
19. **Lesson 19: Tree foundations and DFS.** Terminology, binary trees, BST concepts, preorder/inorder/postorder, height, depth, construction, and validation.
20. **Lesson 20: Tree BFS and interview patterns.** Level order, queue use, lowest common ancestor, path reasoning, and DFS/BFS choice.

### Stage 6 — Heap, Graphs, and Sorting

21. **Lesson 21: Heap and Priority Queue.** Min heap, max heap, Top-K, streaming problems, merge patterns, and JavaScript implementation/library constraints.
22. **Lesson 22: Graph representation and traversal.** Terminology, adjacency list, adjacency matrix, BFS, DFS, visited state, and connected components.
23. **Lesson 23: Graph patterns.** Cycle detection, topological sort, shortest-path introduction, and Union-Find introduction.
24. **Lesson 24: Sorting.** Comparison sorting overview; bubble, selection, and insertion sort for concepts; merge sort; quick sort; stability; JavaScript numeric comparator caveats; custom sorting.

### Stage 7 — Greedy, Dynamic Programming, and Interviews

25. **Lesson 25: Greedy reasoning.** Greedy choice, intervals, scheduling, proof intuition, when greedy works, and counterexamples where it fails.
26. **Lesson 26: Dynamic Programming foundations.** Overlapping subproblems, optimal substructure, memoization, tabulation, state, transition, base cases, and one-dimensional DP.
27. **Lesson 27: Dynamic Programming patterns.** Grid DP, subsequences, knapsack-style problems, reconstruction, and space optimization.
28. **Lesson 28: Pattern selection workshop.** Recognize patterns from data shape and constraints; build a brute-force baseline; optimize and defend tradeoffs.
29. **Lesson 29: Interview communication.** Clarification, verbal approach, edge-case analysis, test cases, complexity defense, and readable implementation.
30. **Lesson 30: Interview simulation.** Timed or semi-timed end-to-end reasoning, implementation, testing, and concise interviewer-style feedback.

## Targeted Interview Review Route

Experienced developers may take a short diagnostic, then select weak pattern clusters. A targeted route must still verify prerequisites and should include:

1. Big O and constraint-driven approach selection.
2. Arrays/Hash Map plus Two Pointers/Sliding Window.
3. Stack/Queue, Binary Search, and linked-list pointer reasoning.
4. Tree/graph traversal and recursion/backtracking.
5. Heap, greedy, and DP only after relevant prerequisites.
6. Mixed pattern selection and at least one interview simulation.

Familiarity does not permit skipping independent evidence or transfer practice.

## Lesson Method

Each lesson uses the canonical problem-solving sequence from `DOMAIN.md`, normally includes one focused concept and one learner action, and ends with concise feedback plus a recommended next action. Solutions follow the assistance progression rather than being revealed at the start.

## Review Model

- Revisit a solved pattern with changed constraints or representation.
- Mix nearby patterns so the learner must select rather than recognize a label.
- Include bug-finding, complexity comparison, code explanation, and transfer.
- Schedule review for repeated invariant errors, weak edge-case handling, answer dependence, or incorrect complexity claims.

## SKILL_GRAPH.md

Canonical source: `domains/dsa/SKILL_GRAPH.md`.

# DSA Skill Graph

## Learning Skills

### Foundations

- `dsa.problem-framing`: restates requirements and asks clarifying questions.
- `dsa.constraints`: converts input constraints into feasible complexity targets.
- `dsa.complexity`: analyzes time and space complexity, including best/average/worst cases.
- `dsa.testing`: identifies examples, edge cases, and useful test cases.
- `dsa.baseline-optimization`: starts with brute force and justifies optimization.

### Core Structures and Patterns

- `dsa.arrays-strings`: traverses and transforms arrays, strings, and basic matrices.
- `dsa.prefix-suffix`: uses prefix/suffix information and explains space tradeoffs.
- `dsa.hashing`: uses Hash Map/Hash Set for lookup, frequency, grouping, and duplicate problems.
- `dsa.two-pointers`: maintains opposite, same-direction, or read/write pointer invariants.
- `dsa.sliding-window`: maintains fixed, variable, and frequency-based windows.
- `dsa.stack-queue`: applies LIFO/FIFO structures, including BFS queues.
- `dsa.monotonic-stack`: preserves a monotonic invariant for next-greater/smaller problems.
- `dsa.linked-lists`: traverses, reverses, merges, and manipulates linked-list pointers.
- `dsa.binary-search`: uses standard, boundary, rotated, and answer-space binary search invariants.

### Recursive and Nonlinear Structures

- `dsa.recursion`: models base cases, recurrence, call-stack state, and return flow.
- `dsa.backtracking`: explores decision trees with restoration and pruning.
- `dsa.trees`: traverses, constructs, validates, and reasons about binary trees and BSTs.
- `dsa.heap`: applies min/max heap behavior to Top-K, streaming, and merge patterns.
- `dsa.graphs`: represents and traverses graphs; reasons about components and cycles.
- `dsa.topological-sort`: models dependency ordering.
- `dsa.shortest-path-intro`: recognizes unweighted and basic weighted shortest-path contexts.
- `dsa.union-find-intro`: uses disjoint sets for connectivity reasoning.

### Algorithm Design

- `dsa.sorting`: explains comparison sorting, stability, JavaScript comparator behavior, merge sort, and quick sort.
- `dsa.greedy`: states a greedy choice and tests whether local choices remain globally valid.
- `dsa.dp-foundations`: defines state, transition, base cases, memoization, and tabulation.
- `dsa.dp-patterns`: solves one-dimensional, grid, subsequence, and knapsack-style DP problems.

### Interview Performance

- `dsa.pattern-selection`: selects an approach from constraints without being given the pattern label.
- `dsa.implementation`: writes correct, readable, testable JavaScript or requested TypeScript.
- `dsa.complexity-defense`: justifies final time/space complexity and tradeoffs.
- `dsa.communication`: explains requirements, approach, invariants, tests, and decisions concisely.
- `dsa.transfer`: applies a pattern to changed constraints or a related unfamiliar problem.

## Dependencies

- Problem framing, constraints, complexity, and testing precede all pattern assessments.
- Arrays/strings precede hashing, Two Pointers, Sliding Window, and matrix/grid work.
- Hashing precedes frequency-based windows and many graph visited-state problems.
- Two Pointers precedes fast/slow linked-list reasoning.
- Stack/Queue precedes monotonic stack and BFS-based tree/graph work.
- Recursion precedes backtracking and recursive tree DFS.
- Tree traversal precedes graph traversal; core graph traversal precedes topological sort, shortest-path introduction, and Union-Find transfer work.
- Heap fundamentals precede Top-K, streaming, and heap-based merge problems.
- Recursion, brute-force search, and state reasoning precede Dynamic Programming.
- DP foundations precede grid, subsequence, knapsack-style, and optimization variants.
- Interview simulation depends on pattern selection, implementation, testing, complexity defense, and communication.

## Progression Constraints

- Do not introduce advanced graph algorithms before BFS/DFS and representation are reliable.
- Do not introduce advanced DP before the learner can define a recursive or iterative state and transition.
- A learner may take a targeted route, but prerequisite gaps should trigger a focused review.

## Review Priorities

Prioritize repeated mistakes in constraint interpretation, invariant maintenance, mutation, off-by-one boundaries, visited state, recursion base cases, window validity, binary-search boundaries, complexity analysis, answer dependence, and failure to transfer a pattern.

## PRACTICE_RULES.md

Canonical source: `domains/dsa/PRACTICE_RULES.md`.

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

## ASSESSMENT_RULES.md

Canonical source: `domains/dsa/ASSESSMENT_RULES.md`.

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

## PROJECTS.md

Canonical source: `domains/dsa/PROJECTS.md`.

# DSA Projects and Practice Sets

These reusable activities organize practice; they become evidence only when learner-produced work is reviewed.

## Pattern Notebook

For each major pattern, keep a learner-authored entry containing recognition signals, brute-force baseline, invariant, implementation template explained in the learner's words, complexity, edge cases, and one transfer problem. Do not use the notebook as a solution-memorization catalog.

## JavaScript DSA Toolkit

Implement and test selected structures such as Stack, Queue, Linked List, binary tree traversal helpers, graph adjacency list, Union-Find, and min/max heap. Explain JavaScript-specific tradeoffs such as numeric sorting and queue operations.

## Constraint-to-Pattern Drill Set

Given short problem statements and constraints, propose a brute-force baseline, complexity target, candidate patterns, and decisive test cases without coding every problem.

## Bug and Complexity Clinic

Review flawed solutions containing off-by-one errors, stale frequency counts, broken pointer movement, incorrect visited handling, mutation surprises, or wrong complexity claims. Repair and explain each issue.

## Interview Preparation Set

- Arrays/Hash Map round.
- Two Pointers or Sliding Window round.
- Stack/Queue or Binary Search round.
- Tree/graph traversal round.
- Greedy or DP round after prerequisites.
- Mixed-pattern interview simulation.

## Project Review

Evaluate correctness, reasoning, independence, pattern transfer, readability, edge cases, time/space complexity, tests, and communication. Recommend one next action; do not infer mastery from project setup or generated content.

## GLOSSARY.md

Canonical source: `domains/dsa/GLOSSARY.md`.

# DSA Glossary

Default explanations are Azerbaijani while the following technical terms remain in English where natural. Code and identifiers remain English.

| Term | Azerbaijani guidance |
| --- | --- |
| Data Structure | Məlumatın saxlanması və istifadəsi üçün təşkil forması; termini English saxlamaq olar. |
| Algorithm | Problemi həll edən sonlu addımlar ardıcıllığı. |
| Big O | Input böyüdükcə resurs artımının yuxarı sərhəd modeli. |
| time complexity | Algorithm-in runtime artımını input ölçüsünə görə izah edir. |
| space complexity | Algorithm-in əlavə memory ehtiyacını izah edir. |
| brute force | Sadə və adətən daha bahalı ilkin həll yanaşması. |
| edge case | Normal nümunələrdən kənarda sərhəd davranışını yoxlayan hal. |
| test case | Müəyyən input, gözlənilən output və yoxlama məqsədi. |
| invariant | Algorithm addımları boyunca doğru saxlanmalı şərt. |
| array | İndekslə işlənən ardıcıl collection. |
| string | Character-lər ardıcıllığı. |
| Hash Map | Key-value lookup üçün hash-based struktur. |
| Hash Set | Unique value lookup üçün hash-based struktur. |
| Two Pointers | İki indeks/reference hərəkəti ilə search space-i idarə edən pattern. |
| Sliding Window | Ardıcıl intervalı incremental yeniləyən pattern. |
| Stack | LIFO prinsipi ilə işləyən struktur. |
| Queue | FIFO prinsipi ilə işləyən struktur. |
| Linked List | Node-ların pointer/reference ilə bağlandığı struktur. |
| Binary Search | Monotonic və ya sorted search space-i yarıya bölən algorithm. |
| recursion | Function-un daha kiçik subproblem üçün özünü çağırması. |
| backtracking | Decision tree-də seçim, exploration və restoration yanaşması. |
| tree | Hierarchical node strukturu. |
| graph | Vertex və edge-lərdən ibarət əlaqə modeli. |
| heap | Priority elementinə effektiv çıxış verən complete-tree əsaslı struktur. |
| greedy | Hər addımda local yaxşı seçimi edən yanaşma; correctness əsaslandırılmalıdır. |
| Dynamic Programming | Təkrarlanan subproblem-ləri state və transition ilə saxlayan yanaşma. |
| memoization | Top-down nəticə caching. |
| tabulation | Bottom-up state cədvəli qurmaq. |
| BFS | Breadth-First Search; səviyyə-səviyyə traversal. |
| DFS | Depth-First Search; dərinliyə traversal. |
| stable sort | Equal key-lərin ilkin nisbi sırasını qoruyan sort. |
| priority queue | Priority-yə əsasən element çıxaran abstract data type. |

## QUALITY_REVIEW.md

Canonical source: `domains/dsa/QUALITY_REVIEW.md`.

# DSA Domain Quality Review

## Stage 25.0 Checklist

- [x] Canonical id is `dsa`; no other domain is introduced.
- [x] Target is practical Senior Front-End interview preparation.
- [x] JavaScript is default and TypeScript is supported without becoming the lesson topic.
- [x] Syllabus progresses from Big O through interview simulation with prerequisite ordering.
- [x] Canonical problem-solving and assistance sequences are explicit.
- [x] Guided, independent, review, and interview practice are defined.
- [x] Assessment requires learner-produced evidence, complexity analysis, and transfer.
- [x] Azerbaijani instruction and English technical terminology are supported.
- [x] Learner-Facing Mentor Mode hides internal evidence/state metadata by default.
- [x] Reusable domain content contains no learner progress.

## Known Limitations

- The domain defines a curriculum and practice contract, not a fixed problem bank or full lesson-body archive.
- It does not provide competitive-programming specialization or advanced graph-algorithm depth.
- Studio remains an optional generic control panel.
