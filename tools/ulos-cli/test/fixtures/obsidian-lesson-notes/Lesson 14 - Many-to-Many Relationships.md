---
type: lesson-note
title: "Many-to-Many Relationships"
date: 2026-07-14
domain: SQL/PostgreSQL
module: "Relational Modeling"
lesson: 14
mastery: not-assessed
status: completed
tags:
  - plos
  - lesson
  - sql-postgresql
---

# Many-to-Many Relationships

## Məqsəd

`students` və `courses` arasındakı many-to-many əlaqəni `enrollments` bridge table ilə modelləşdirmək.

## Model

| Table | Məsuliyyət |
| --- | --- |
| `students` | Student identity |
| `courses` | Course identity |
| `enrollments` | Hər student-course əlaqəsi |

```sql
CREATE TABLE enrollments (
  student_id bigint REFERENCES students(id),
  course_id bigint REFERENCES courses(id),
  enrolled_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (student_id, course_id)
);
```

## Observed correction

Learner əvvəlcə `course_ids` array təklif etdi. Correction: əlaqənin öz atributlarını və referential integrity-ni qorumaq üçün bridge table istifadə edildi.

## Recall questions

1. Composite primary key hansı duplicate-i dayandırır?
2. `enrolled_at` hansı table-a aiddir?

## Recall answers

1. Eyni student-course cütünün təkrarını.
2. `enrollments` table-a.
