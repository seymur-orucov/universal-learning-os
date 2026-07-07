# SQL/PostgreSQL Glossary and Projects

## Localization Use

Keep SQL/PostgreSQL technical terms in English. Provide Azerbaijani explanations during teaching when helpful. Do not replace SQL syntax terms with unnatural translations.

## Core Glossary

- `SQL`: relational data ilə işləmək üçün sorğu dili.
- `PostgreSQL`: SQL əsaslı açıq mənbəli relational database sistemi.
- `database`: əlaqəli məlumatların saxlandığı sistemli konteyner.
- `schema`: database içində obyektləri qruplaşdıran namespace.
- `table`: row və column-lardan ibarət struktur.
- `row`: table daxilində bir record.
- `column`: row daxilində müəyyən field.
- `primary key`: row-u unikal tanıdan key.
- `foreign key`: başqa table-dakı row-a istinad edən key.
- `constraint`: data qaydasını məcbur edən məhdudiyyət.
- `SELECT`: məlumat oxumaq üçün query əmri.
- `FROM`: məlumatın hansı table-dan gəldiyini göstərir.
- `WHERE`: row səviyyəsində filter tətbiq edir.
- `JOIN`, `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`: table-ları relationship əsasında birləşdirir.
- `GROUP BY`: row-ları qruplaşdırır.
- `HAVING`: aggregate nəticələrə filter tətbiq edir.
- `subquery`: başqa query daxilində işləyən query.
- `CTE`: query-ni oxunaqlı mərhələlərə bölən `WITH` strukturu.
- `UNION`, `INTERSECT`, `EXCEPT`: set operations.
- `DDL`: database strukturunu dəyişən əmrlər.
- `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`: table yaratmaq, dəyişmək, silmək.
- `index`: axtarışı sürətləndirə bilən data structure.
- `B-tree index`: PostgreSQL-də ən ümumi index tipi.
- `composite index`: bir neçə column üzərində index.
- `selectivity`: filter-in nə qədər seçici olduğunu göstərən anlayış.
- `EXPLAIN`: query planını göstərir.
- `EXPLAIN ANALYZE`: query planını real icra statistikası ilə göstərir.
- `sequential scan`: table-ın ardıcıl oxunması.
- `index scan`: index vasitəsilə oxuma.
- `transaction`: birlikdə tamamlanan və ya geri qaytarılan əməliyyatlar qrupu.
- `COMMIT`: transaction dəyişikliklərini təsdiqləyir.
- `ROLLBACK`: transaction dəyişikliklərini geri qaytarır.
- `isolation level`: transaction-ların bir-birini necə görməsini müəyyən edir.
- `lock`: eyni data üzərində paralel dəyişiklikləri idarə edir.
- `MVCC`: PostgreSQL-in concurrency üçün version-based mexanizmi.
- `window function`: row kontekstini saxlayaraq qrup üzərində hesablayır.
- `JSONB`: PostgreSQL-in binary JSON storage formatı.
- `materialized view`: saxlanmış query nəticəsi.

## Project Categories

### `sql-postgresql.project.northwind-query-practice`

Purpose: realistic query practice using Northwind-style tables. Evidence value comes from reviewed queries and explanations, not from completing a checklist.

### `sql-postgresql.project.schema-design-mini`

Purpose: design a small relational schema with keys, constraints, and relationships. Evidence value requires reviewed artifact and explanation.

### `sql-postgresql.project.reporting-aggregation`

Purpose: create reporting queries using joins, grouping, and aggregates. Evidence value requires correct results and explanation of aggregation behavior.

### `sql-postgresql.project.indexing-performance-investigation`

Purpose: interpret query plans and reason about indexes. Evidence value requires reviewed `EXPLAIN` or `EXPLAIN ANALYZE` interpretation.

### `sql-postgresql.project.transaction-behavior-exploration`

Purpose: explore transactions, rollback, isolation, locks, and MVCC conceptually. Evidence value requires explanation or reviewed experiment summary.

### `sql-postgresql.project.interview-explanation-portfolio`

Purpose: prepare explanations for query behavior, debugging, schema design, performance, and tradeoffs.

## Project Evidence Rules

Artifact existence alone MUST NOT imply mastery. Reviewed artifacts MAY support evidence. Project work MAY support M5 or M6 only when transfer, explanation, review quality, and defense are sufficient.
