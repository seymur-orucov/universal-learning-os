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
