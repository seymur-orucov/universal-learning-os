---
type: lesson-note
title: "State Ownership and Data Flow"
date: 2026-07-14
domain: Front-End System Design
module: "Architecture Boundaries"
lesson: 9
mastery: not-assessed
status: completed
tags:
  - plos
  - lesson
  - frontend-system-design
---

# State Ownership and Data Flow

## Məqsəd

Server state, URL state və local UI state üçün aydın owner seçmək və data flow-u əsaslandırmaq.

> [!info] Decision rule
> State-i ən çox istifadə edən component-ə deyil, onun lifecycle və consistency məsuliyyətinə sahib boundary-yə yerləşdir.

| State | Owner | Səbəb |
| --- | --- | --- |
| Search filters | URL | Shareable və back/forward ilə uyğun |
| API results | Query cache | Server freshness və deduplication |
| Open tooltip | Component | Qısaömürlü local UI behavior |

## Design correction

Learner bütün state-i global store-a yerləşdirmişdi. Correction: ownership lifecycle, sharing və synchronization tələblərinə görə bölündü.

## Related concepts

- [[State Ownership]]
- [[Unidirectional Data Flow]]

## Recall questions

1. Shareable filter state üçün URL niyə uyğundur?
2. Tooltip state niyə global store tələb etmir?

## Recall answers

1. Link paylaşma və browser navigation semantics qorunur.
2. Onun lifecycle-ı local və qısaömürlüdür.
