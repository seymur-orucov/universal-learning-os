# Data Structures and Algorithms Skill Graph

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/dsa/SKILL_GRAPH.md

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
