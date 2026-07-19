---
type: lesson-note
title: "SQL Joins"
date: 2026-07-14
domain: SQL/PostgreSQL
lesson: 3
mastery: not-assessed
status: in-progress
tags:
  - plos
  - lesson
  - sql-postgresql
---

# SQL Joins

## Məqsəd

`INNER JOIN` nəticəsində yalnız match olan rows-un qalmasını anlamaq.

```sql
SELECT customers.name, orders.total
FROM customers
INNER JOIN orders ON orders.customer_id = customers.id;
```

> [!warning] Unfinished lesson
> Guided practice hələ tamamlanmayıb; note completion və mastery iddiası etmir.

## Next step

Verilmiş sample rows üçün query nəticəsini learner özü proqnozlaşdırmalıdır.
