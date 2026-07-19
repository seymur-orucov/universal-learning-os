---
type: lesson-note
title: "Sliding Window"
date: 2026-07-14
domain: Data Structures and Algorithms
lesson: 5
mastery: working
status: completed
tags:
  - plos
  - lesson
  - dsa
---

# Sliding Window

## Məqsəd

Fixed-size contiguous subarray cəmini təkrar hesablamadan yeniləmək.

| Approach | Time | Space |
| --- | --- | --- |
| Hər window-u yenidən toplamaq | `O(nk)` | `O(1)` |
| Sliding window | `O(n)` | `O(1)` |

```javascript
function maxWindowSum(values, k) {
  let sum = values.slice(0, k).reduce((total, value) => total + value, 0);
  let best = sum;
  for (let right = k; right < values.length; right += 1) {
    sum += values[right] - values[right - k];
    best = Math.max(best, sum);
  }
  return best;
}
```

## Existing assessment result

Prior assessment recorded mastery as `working` after the learner explained the invariant, implemented the update, and tested an all-negative case. This note preserves that existing result.

## Recall questions

1. Window irəli gedəndə hansı iki element cəmə təsir edir?
2. Optimized time complexity nədir?

## Recall answers

1. Yeni sağ element əlavə olunur, köhnə sol element çıxılır.
2. `O(n)`.
