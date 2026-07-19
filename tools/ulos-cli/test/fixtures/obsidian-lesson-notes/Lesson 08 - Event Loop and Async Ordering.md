---
type: lesson-note
title: "Event Loop and Async Ordering"
date: 2026-07-14
domain: Node.js
track: "Runtime Foundations"
lesson: 8
mastery: not-assessed
status: completed
tags:
  - plos
  - lesson
  - nodejs
---

# Event Loop and Async Ordering

## Məqsəd

Synchronous code, microtask queue və timer callback sırasını izah etmək.

```javascript
console.log("sync");
Promise.resolve().then(() => console.log("microtask"));
setTimeout(() => console.log("timer"), 0);
```

Expected order: `sync`, `microtask`, `timer`.

> [!tip] Mental model
> Cari call stack bitdikdən sonra microtasks işlənir; timer callback növbəti uyğun event-loop phase-də işləyir.

## Learner work

Learner output sırasını düzgün proqnozlaşdırdı və Promise callback-in timer-dən əvvəl gəlməsini microtask queue ilə əsaslandırdı.

## Recall questions

1. Microtasks nə vaxt drain olunur?
2. Sıfır millisecond timer dərhal işləyirmi?

## Recall answers

1. Cari synchronous stack bitəndən sonra.
2. Xeyr; callback uyğun phase üçün növbəyə düşür.
