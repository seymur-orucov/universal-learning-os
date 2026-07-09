# SQL/PostgreSQL Glossary and Projects

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: domains/sql-postgresql/GLOSSARY.md

# SQL/PostgreSQL Glossary

## Glossary Overview

This glossary supports the SQL/PostgreSQL domain pack by preserving important technical terms in English while providing concise Azerbaijani explanations for the initial project preference.

The glossary follows `specification/LOCALIZATION_SPEC.md`. It is domain terminology guidance, not lesson content, learner state, or a translation mandate.

## Glossary Conventions

- Technical terms SHOULD remain in English.
- Azerbaijani explanations SHOULD clarify meaning without replacing SQL syntax terms with unnatural translations.
- Azerbaijani instruction with English technical terms is a project preference, not a global framework default.
- Related learning skills reference `domains/sql-postgresql/SKILL_GRAPH.md`.

## Core Relational Terms

### `SQL`

- Terminology language: English
- Azerbaijani explanation: Relational verilənlər bazası ilə sorğu yazmaq və məlumatı idarə etmək üçün istifadə olunan dil.
- Usage note: `SQL` termini saxlanılır; onu süni şəkildə tərcümə etmək lazım deyil.
- Related learning skills:
  - `sql-postgresql.sql-statement-anatomy`

### `PostgreSQL`

- Terminology language: English
- Azerbaijani explanation: Güclü, açıq mənbəli relational database sistemi.
- Usage note: PostgreSQL həm SQL standartını, həm də özünə məxsus xüsusiyyətləri dəstəkləyir.
- Related learning skills:
  - `sql-postgresql.postgresql-tooling-concepts`

### `database`

- Terminology language: English
- Azerbaijani explanation: Strukturlaşdırılmış məlumatların saxlandığı və idarə edildiyi sistem və ya məntiqi konteyner.
- Usage note: İzahda "verilənlər bazası" deyilə bilər, amma texniki term kimi `database` saxlanıla bilər.
- Related learning skills:
  - `sql-postgresql.relational-model`

### `schema`

- Terminology language: English
- Azerbaijani explanation: Database daxilində obyektləri məntiqi qruplaşdıran ad sahəsi və ya struktur təsviri.
- Usage note: PostgreSQL-də `schema` obyektləri təşkil etmək üçün ayrıca məna daşıyır.
- Related learning skills:
  - `sql-postgresql.ddl-basics`

### `table`

- Terminology language: English
- Azerbaijani explanation: Məlumatların rows və columns şəklində saxlandığı əsas relational struktur.
- Usage note: `table` termini dərslərdə English saxlanmalıdır.
- Related learning skills:
  - `sql-postgresql.table-row-column-concepts`

### `row`

- Terminology language: English
- Azerbaijani explanation: Table daxilində bir konkret qeydi ifadə edən məlumat sətri.
- Usage note: `row` çox vaxt bir entity instance kimi düşünülür.
- Related learning skills:
  - `sql-postgresql.table-row-column-concepts`

### `column`

- Terminology language: English
- Azerbaijani explanation: Table daxilində müəyyən atributu və ya məlumat sahəsini saxlayan struktur elementi.
- Usage note: `column` data type və constraint ilə birlikdə müəyyən edilir.
- Related learning skills:
  - `sql-postgresql.table-row-column-concepts`

### `value`

- Terminology language: English
- Azerbaijani explanation: Row və column kəsişməsində saxlanan konkret məlumat.
- Usage note: `NULL` dəyər deyil, xüsusi unknown və ya missing halıdır.
- Related learning skills:
  - `sql-postgresql.table-row-column-concepts`

### `primary key`

- Terminology language: English
- Azerbaijani explanation: Table daxilində hər row-u unikal tanıdan key.
- Usage note: `primary key` həm uniqueness, həm də `NOT NULL` semantikası verir.
- Related learning skills:
  - `sql-postgresql.keys-concepts`

### `foreign key`

- Terminology language: English
- Azerbaijani explanation: Bir table-dakı dəyəri başqa table-dakı referenced key ilə əlaqələndirən constraint.
- Usage note: `foreign key` relationship integrity üçün istifadə olunur.
- Related learning skills:
  - `sql-postgresql.keys-concepts`
  - `sql-postgresql.relationship-reasoning`

### `constraint`

- Terminology language: English
- Azerbaijani explanation: Database səviyyəsində məlumatın qəbul edilən qaydasını məhdudlaşdıran şərt.
- Usage note: `constraint` application logic-i tam əvəz etmir, amma data integrity üçün əsasdır.
- Related learning skills:
  - `sql-postgresql.constraints-ddl`

## Query Terms

### `SELECT`

- Terminology language: English
- Azerbaijani explanation: Database-dən məlumat oxumaq və nəticə sütunlarını seçmək üçün istifadə olunan SQL statement.
- Usage note: `SELECT` SQL syntax termini kimi tərcümə olunmamalıdır.
- Related learning skills:
  - `sql-postgresql.select-basics`

### `FROM`

- Terminology language: English
- Azerbaijani explanation: Query-nin məlumatı hansı table və ya source-dan oxuduğunu bildirən clause.
- Usage note: `FROM` çox vaxt join və subquery mənbələrini də ehtiva edir.
- Related learning skills:
  - `sql-postgresql.sql-statement-anatomy`

### `WHERE`

- Terminology language: English
- Azerbaijani explanation: Rows-u şərtə görə filter etmək üçün istifadə olunan clause.
- Usage note: `WHERE` aggregate nəticələrini deyil, grouping-dən əvvəlki rows-u filter edir.
- Related learning skills:
  - `sql-postgresql.where-comparison-boolean`

### `AND`

- Terminology language: English
- Azerbaijani explanation: Bir neçə boolean şərtin hamısının doğru olmasını tələb edən operator.
- Usage note: Parentheses istifadə edilmədikdə operator precedence səhvləri yarana bilər.
- Related learning skills:
  - `sql-postgresql.where-comparison-boolean`

### `OR`

- Terminology language: English
- Azerbaijani explanation: Şərtlərdən ən azı birinin doğru olmasını tələb edən boolean operator.
- Usage note: `OR` çox vaxt yanlış filter məntiqi yaradır; parentheses ilə niyyət aydınlaşdırılmalıdır.
- Related learning skills:
  - `sql-postgresql.where-comparison-boolean`

### `NOT`

- Terminology language: English
- Azerbaijani explanation: Boolean şərtin nəticəsini əksinə çevirən operator.
- Usage note: `NULL` ilə birlikdə işlədikdə nəticə gözlənilməz görünə bilər.
- Related learning skills:
  - `sql-postgresql.where-comparison-boolean`
  - `sql-postgresql.null-semantics`

### `IN`

- Terminology language: English
- Azerbaijani explanation: Dəyərin verilmiş siyahıda və ya subquery nəticəsində olub-olmadığını yoxlayan operator.
- Usage note: Kiçik sabit siyahılar və subquery-lər üçün istifadə oluna bilər.
- Related learning skills:
  - `sql-postgresql.in-between-predicates`
  - `sql-postgresql.in-exists-subqueries`

### `NOT IN`

- Terminology language: English
- Azerbaijani explanation: Dəyərin verilmiş siyahıda olmamasını yoxlayan operator.
- Usage note: `NULL` olan nəticələrlə `NOT IN` təhlükəli ola bilər.
- Related learning skills:
  - `sql-postgresql.in-between-predicates`
  - `sql-postgresql.null-semantics`

### `BETWEEN`

- Terminology language: English
- Azerbaijani explanation: Dəyərin iki sərhəd arasında olub-olmadığını yoxlayan operator.
- Usage note: SQL-də `BETWEEN` sərhədləri daxil edir.
- Related learning skills:
  - `sql-postgresql.in-between-predicates`

### `LIKE`

- Terminology language: English
- Azerbaijani explanation: Mətn pattern-i ilə uyğunluğu yoxlayan operator.
- Usage note: PostgreSQL-də `LIKE` case-sensitive ola bilər.
- Related learning skills:
  - `sql-postgresql.like-ilike-patterns`

### `ILIKE`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-də case-insensitive mətn pattern uyğunluğu üçün istifadə olunan operator.
- Usage note: `ILIKE` PostgreSQL-specific rahatlıqdır.
- Related learning skills:
  - `sql-postgresql.like-ilike-patterns`

### `NULL`

- Terminology language: English
- Azerbaijani explanation: Dəyərin unknown, missing və ya tətbiq olunmayan olduğunu bildirən xüsusi SQL halı.
- Usage note: `NULL` adi value kimi `=` ilə yoxlanmır.
- Related learning skills:
  - `sql-postgresql.null-semantics`

### `IS NULL`

- Terminology language: English
- Azerbaijani explanation: Dəyərin `NULL` olub-olmadığını yoxlamaq üçün istifadə olunan predicate.
- Usage note: `column = NULL` yerinə `column IS NULL` istifadə olunur.
- Related learning skills:
  - `sql-postgresql.null-semantics`

### `ORDER BY`

- Terminology language: English
- Azerbaijani explanation: Query nəticələrini müəyyən column və ya expression üzrə sıralayan clause.
- Usage note: Stabil və gözlənilən nəticə üçün pagination ilə birlikdə vacibdir.
- Related learning skills:
  - `sql-postgresql.order-by`

### `LIMIT`

- Terminology language: English
- Azerbaijani explanation: Query nəticəsində qaytarılan row sayını məhdudlaşdıran clause.
- Usage note: `ORDER BY` olmadan `LIMIT` deterministik nəticə verməyə bilər.
- Related learning skills:
  - `sql-postgresql.limit-offset`

### `OFFSET`

- Terminology language: English
- Azerbaijani explanation: Query nəticəsində başlanğıcdan neçə row-un buraxılacağını bildirən clause.
- Usage note: Böyük `OFFSET` dəyərləri performans problemi yarada bilər.
- Related learning skills:
  - `sql-postgresql.limit-offset`

### `DISTINCT`

- Terminology language: English
- Azerbaijani explanation: Nəticədən duplicate rows-u çıxarmaq üçün istifadə olunan keyword.
- Usage note: `DISTINCT` join səhvini gizlətmək üçün avtomatik həll kimi istifadə edilməməlidir.
- Related learning skills:
  - `sql-postgresql.distinct-results`
  - `sql-postgresql.join-conditions-duplicates`

## Join and Relationship Terms

### `JOIN`

- Terminology language: English
- Azerbaijani explanation: Əlaqəli table-lardan rows-u birləşdirmək üçün istifadə olunan SQL əməliyyatı.
- Usage note: `JOIN` nəticəsi relationship və join condition-dan asılıdır.
- Related learning skills:
  - `sql-postgresql.relationship-reasoning`

### `INNER JOIN`

- Terminology language: English
- Azerbaijani explanation: Yalnız hər iki tərəfdə uyğun row olan nəticələri qaytaran join növü.
- Usage note: Uyğunluq tapılmayan rows nəticədən çıxır.
- Related learning skills:
  - `sql-postgresql.inner-join`

### `LEFT JOIN`

- Terminology language: English
- Azerbaijani explanation: Sol table-dakı bütün rows-u saxlayan və sağ tərəfdə uyğunluq yoxdursa `NULL` qaytaran join növü.
- Usage note: `WHERE` şərti səhv yazılarsa `LEFT JOIN` praktik olaraq `INNER JOIN` kimi davrana bilər.
- Related learning skills:
  - `sql-postgresql.left-join`

### `RIGHT JOIN`

- Terminology language: English
- Azerbaijani explanation: Sağ table-dakı bütün rows-u saxlayan outer join növü.
- Usage note: Çox hallarda query readability üçün `LEFT JOIN` ilə yenidən yazıla bilər.
- Related learning skills:
  - `sql-postgresql.outer-joins-concepts`

### `FULL JOIN`

- Terminology language: English
- Azerbaijani explanation: Hər iki tərəfdən uyğun gələn və gəlməyən rows-u saxlayan outer join növü.
- Usage note: Data reconciliation və comparison ssenarilərində faydalı ola bilər.
- Related learning skills:
  - `sql-postgresql.outer-joins-concepts`

### `many-to-many`

- Terminology language: English
- Azerbaijani explanation: Bir tərəfdəki çoxlu row-un digər tərəfdəki çoxlu row ilə əlaqəli ola bildiyi relationship.
- Usage note: Adətən junction table ilə modelləşdirilir.
- Related learning skills:
  - `sql-postgresql.many-to-many-relationships`

## Aggregation Terms

### `aggregate function`

- Terminology language: English
- Azerbaijani explanation: Bir neçə row üzərində hesablamalar aparıb summary nəticə qaytaran function.
- Usage note: `COUNT`, `SUM`, və `AVG` tipik aggregate function nümunələridir.
- Related learning skills:
  - `sql-postgresql.aggregate-functions`

### `COUNT`

- Terminology language: English
- Azerbaijani explanation: Rows və ya non-NULL values sayını hesablamaq üçün istifadə olunan aggregate function.
- Usage note: `COUNT(*)` və `COUNT(column)` fərqli `NULL` davranışına malikdir.
- Related learning skills:
  - `sql-postgresql.aggregate-functions`

### `SUM`

- Terminology language: English
- Azerbaijani explanation: Numeric values cəmini hesablamaq üçün istifadə olunan aggregate function.
- Usage note: Grouping səviyyəsi düzgün deyilsə nəticə şişə bilər.
- Related learning skills:
  - `sql-postgresql.aggregate-functions`
  - `sql-postgresql.grouping-with-joins`

### `AVG`

- Terminology language: English
- Azerbaijani explanation: Numeric values orta dəyərini hesablamaq üçün istifadə olunan aggregate function.
- Usage note: `NULL` values hesablamada nəzərə alınmır.
- Related learning skills:
  - `sql-postgresql.aggregate-functions`

### `GROUP BY`

- Terminology language: English
- Azerbaijani explanation: Rows-u müəyyən column və ya expression üzrə qruplaşdıran clause.
- Usage note: Aggregate olmayan selected columns adətən `GROUP BY` daxilində olmalıdır.
- Related learning skills:
  - `sql-postgresql.group-by`

### `HAVING`

- Terminology language: English
- Azerbaijani explanation: Grouped və aggregate nəticələri filter etmək üçün istifadə olunan clause.
- Usage note: Row-level filter üçün `WHERE`, group-level filter üçün `HAVING` seçilir.
- Related learning skills:
  - `sql-postgresql.having`

## Subquery and CTE Terms

### `subquery`

- Terminology language: English
- Azerbaijani explanation: Başqa query daxilində istifadə olunan query.
- Usage note: Subquery scalar, list, table-like və ya correlated formada ola bilər.
- Related learning skills:
  - `sql-postgresql.scalar-subqueries`
  - `sql-postgresql.in-exists-subqueries`

### `correlated subquery`

- Terminology language: English
- Azerbaijani explanation: Outer query-dən dəyər istifadə edən subquery.
- Usage note: Hər row üçün yenidən qiymətləndirmə semantikası ola bilər.
- Related learning skills:
  - `sql-postgresql.correlated-subqueries-concepts`

### `CTE`

- Terminology language: English
- Azerbaijani explanation: `WITH` clause ilə adlandırılan müvəqqəti query hissəsi.
- Usage note: CTE query decomposition və readability üçün faydalıdır.
- Related learning skills:
  - `sql-postgresql.ctes`

### `UNION`

- Terminology language: English
- Azerbaijani explanation: İki query nəticəsini birləşdirən set operation.
- Usage note: `UNION` duplicate rows-u silir; `UNION ALL` saxlayır.
- Related learning skills:
  - `sql-postgresql.set-operations`

### `INTERSECT`

- Terminology language: English
- Azerbaijani explanation: İki query nəticəsində ortaq olan rows-u qaytaran set operation.
- Usage note: Column sayı və uyğun data type-lar uyğun olmalıdır.
- Related learning skills:
  - `sql-postgresql.set-operations`

### `EXCEPT`

- Terminology language: English
- Azerbaijani explanation: Birinci query nəticəsində olub ikinci query nəticəsində olmayan rows-u qaytaran set operation.
- Usage note: Difference məntiqini ifadə etmək üçün istifadə olunur.
- Related learning skills:
  - `sql-postgresql.set-operations`

## Schema and Constraint Terms

### `DDL`

- Terminology language: English
- Azerbaijani explanation: Database obyektlərini yaratmaq, dəyişmək və silmək üçün istifadə olunan SQL hissəsi.
- Usage note: `CREATE TABLE`, `ALTER TABLE`, və `DROP TABLE` DDL nümunələridir.
- Related learning skills:
  - `sql-postgresql.ddl-basics`

### `CREATE TABLE`

- Terminology language: English
- Azerbaijani explanation: Yeni table yaratmaq üçün istifadə olunan DDL statement.
- Usage note: Columns, data types, keys və constraints burada müəyyən edilə bilər.
- Related learning skills:
  - `sql-postgresql.ddl-basics`

### `ALTER TABLE`

- Terminology language: English
- Azerbaijani explanation: Mövcud table strukturunu dəyişmək üçün istifadə olunan DDL statement.
- Usage note: Production mühitində migration strategiyası ilə birlikdə düşünülməlidir.
- Related learning skills:
  - `sql-postgresql.schema-migrations-concepts`

### `DROP TABLE`

- Terminology language: English
- Azerbaijani explanation: Table-i silmək üçün istifadə olunan DDL statement.
- Usage note: Data itkisi yarada biləcəyi üçün ehtiyatla istifadə olunur.
- Related learning skills:
  - `sql-postgresql.ddl-basics`

### `data type`

- Terminology language: English
- Azerbaijani explanation: Column-da saxlanıla bilən value növünü müəyyən edən qayda.
- Usage note: PostgreSQL zəngin data type dəstəyi verir.
- Related learning skills:
  - `sql-postgresql.postgresql-data-types`

## Transaction and Concurrency Terms

### `transaction`

- Terminology language: English
- Azerbaijani explanation: Bir və ya bir neçə database əməliyyatını vahid iş vahidi kimi idarə edən mexanizm.
- Usage note: Transaction uğurla bitərsə `COMMIT`, ləğv edilərsə `ROLLBACK` istifadə olunur.
- Related learning skills:
  - `sql-postgresql.transaction-concepts`

### `COMMIT`

- Terminology language: English
- Azerbaijani explanation: Transaction daxilindəki dəyişiklikləri qalıcı edən statement.
- Usage note: `COMMIT` sonrası dəyişikliklər normal halda geri alınmır.
- Related learning skills:
  - `sql-postgresql.commit-rollback`

### `ROLLBACK`

- Terminology language: English
- Azerbaijani explanation: Transaction daxilindəki dəyişiklikləri ləğv edən statement.
- Usage note: Səhv və ya imtina halında data consistency qorumağa kömək edir.
- Related learning skills:
  - `sql-postgresql.commit-rollback`

### `isolation level`

- Terminology language: English
- Azerbaijani explanation: Concurrent transactions bir-birinin dəyişikliklərini necə görə bildiyini müəyyən edən qayda səviyyəsi.
- Usage note: Isolation səviyyəsi correctness və concurrency tradeoff-larına təsir edir.
- Related learning skills:
  - `sql-postgresql.isolation-levels-concepts`

### `lock`

- Terminology language: English
- Azerbaijani explanation: Concurrent access zamanı data və obyektlər üzərində koordinasiya üçün istifadə olunan mexanizm.
- Usage note: Lock-lar blocking və deadlock kimi davranışlara səbəb ola bilər.
- Related learning skills:
  - `sql-postgresql.locking-basics`

### `MVCC`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-də concurrent oxuma və yazma əməliyyatlarını versioning ilə idarə edən yanaşma.
- Usage note: MVCC oxucular və yazıçılar arasındakı bloklanmanı azaltmağa kömək edir.
- Related learning skills:
  - `sql-postgresql.mvcc-basics`

## Indexing and Performance Terms

### `index`

- Terminology language: English
- Azerbaijani explanation: Query axtarışını sürətləndirə bilən əlavə database strukturu.
- Usage note: Index read performansına kömək edə bilər, amma write overhead yarada bilər.
- Related learning skills:
  - `sql-postgresql.index-concepts-btree`

### `B-tree index`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-də ən yayğın index növü və bir çox comparison query üçün standart seçim.
- Usage note: Equality və range axtarışlarında tez-tez istifadə olunur.
- Related learning skills:
  - `sql-postgresql.index-concepts-btree`

### `composite index`

- Terminology language: English
- Azerbaijani explanation: Birdən çox column üzərində yaradılan index.
- Usage note: Column order query pattern-ləri üçün vacibdir.
- Related learning skills:
  - `sql-postgresql.composite-indexes`

### `selectivity`

- Terminology language: English
- Azerbaijani explanation: Predicate-in data içindən nə qədər az və ya çox row seçdiyini ifadə edən anlayış.
- Usage note: Yüksək selectivity index faydasını artıra bilər.
- Related learning skills:
  - `sql-postgresql.index-selectivity`

### `EXPLAIN`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-in query üçün planlaşdırdığı execution plan-ı göstərən command.
- Usage note: `EXPLAIN` query-ni icra etmədən planı göstərir.
- Related learning skills:
  - `sql-postgresql.explain-basics`

### `EXPLAIN ANALYZE`

- Terminology language: English
- Azerbaijani explanation: Query-ni icra edib real execution plan və timing məlumatlarını göstərən command.
- Usage note: Data dəyişdirən query-lərlə ehtiyatla istifadə olunmalıdır.
- Related learning skills:
  - `sql-postgresql.explain-analyze-basics`

### `sequential scan`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-in table rows-u ardıcıl oxuduğu scan növü.
- Usage note: Kiçik table-lar və ya çox row qaytaran query-lər üçün normal ola bilər.
- Related learning skills:
  - `sql-postgresql.scan-types-optimization-basics`

### `index scan`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-in index istifadə edərək uyğun rows-u tapdığı scan növü.
- Usage note: Index scan həmişə sequential scan-dan yaxşı deyil; context vacibdir.
- Related learning skills:
  - `sql-postgresql.scan-types-optimization-basics`

## Advanced PostgreSQL Terms

### `window function`

- Terminology language: English
- Azerbaijani explanation: Rows qrupunu collapse etmədən həmin qrup üzərində hesablamalar aparan function.
- Usage note: Ranking, running totals və partition-based calculations üçün faydalıdır.
- Related learning skills:
  - `sql-postgresql.window-functions-basics`

### `JSONB`

- Terminology language: English
- Azerbaijani explanation: PostgreSQL-də binary formatda saxlanan JSON data type.
- Usage note: Flexible data üçün faydalıdır, amma relational model-i avtomatik əvəz etmir.
- Related learning skills:
  - `sql-postgresql.json-jsonb-basics`

### `materialized view`

- Terminology language: English
- Azerbaijani explanation: Query nəticəsini saxlayan və refresh edilə bilən view növü.
- Usage note: Reporting və expensive query-lər üçün faydalı ola bilər.
- Related learning skills:
  - `sql-postgresql.materialized-views-concepts`

## Usage Notes

- Glossary entries SHOULD support lesson explanations, practice feedback, project review, and interview explanations.
- Glossary entries MUST NOT replace evidence, mastery, or learner state semantics.
- Future lessons MAY include Azerbaijani explanations while preserving English SQL/PostgreSQL technical terms.
- Missing glossary examples SHOULD be handled as authoring gaps, not silently invented during assessment.

## OPEN QUESTION

- Which glossary terms need concrete examples before the first authored lesson?
- Should future glossary entries include pronunciation or common Azerbaijani paraphrases?
- Should syntax keywords and conceptual terms be separated into different glossary indexes?

## Source: domains/sql-postgresql/PROJECTS.md

# SQL/PostgreSQL Project Guidance

## Projects Overview

This file defines reusable project guidance for the SQL/PostgreSQL domain pack. It provides project categories, evidence expectations, and review criteria for future project-based practice, not full project task files.

Project guidance SHOULD be used with `domains/sql-postgresql/SYLLABUS.md`, `domains/sql-postgresql/SKILL_GRAPH.md`, `domains/sql-postgresql/PRACTICE_RULES.md`, and `domains/sql-postgresql/ASSESSMENT_RULES.md`.

## Project Principles

- Projects MUST be reusable domain pack content, not learner state.
- Projects MUST NOT record learner progress, mastery, or personal artifacts.
- Project categories SHOULD reference learning skills from `domains/sql-postgresql/SKILL_GRAPH.md`.
- Project guidance SHOULD support realistic SQL/PostgreSQL work without creating a complete exercise bank.
- Project output SHOULD follow `templates/session/PROJECT_OUTPUT_TEMPLATE.md` when used in a session.
- Project review MUST preserve evidence requirements from `core/mastery-model/EVIDENCE_REQUIREMENTS.md`.

## Project Difficulty Guidance

- P1: Guided mini artifact; learner produces a small artifact with scaffolded requirements.
- P2: Independent focused artifact; learner completes a narrow artifact with minimal hints.
- P3: Integrated realistic artifact; learner combines multiple learning skills in a realistic context.
- P4: Reviewed portfolio artifact; learner produces an artifact suitable for structured review and revision.
- P5: Defended project artifact; learner explains and defends design, query, or performance choices under follow-up questioning.

Project difficulty is not learner mastery. Mastery MUST be recorded only in learner state when evidence or explicit user instruction supports it.

## Project Categories

### Northwind Query Practice Project

- Project id: `sql-postgresql.project.northwind-query-practice`
- Title: Northwind Query Practice Project
- Purpose: Practice realistic business-style querying, joins, filtering, aggregation, and result explanation.
- Suggested stage range: Stage 3 through Stage 5, with deeper use in Stage 11.
- Related learning skills:
  - `sql-postgresql.inner-join`
  - `sql-postgresql.left-join`
  - `sql-postgresql.join-conditions-duplicates`
  - `sql-postgresql.grouping-with-joins`
  - `sql-postgresql.reporting-queries-basic`
  - `sql-postgresql.query-behavior-explanation`
- Expected artifacts: query set, result notes, assumptions, and short explanations of query behavior.
- Review criteria: correctness of result logic, join path clarity, aggregate correctness, independence, and explanation quality.
- Evidence value: reviewed queries MAY support evidence for M4 or M5 when the learner applies concepts to realistic requirements.
- Non-goals: this category does not define a Northwind exercise bank, import process, or complete reporting curriculum.

### Schema Design Mini Project

- Project id: `sql-postgresql.project.schema-design-mini`
- Title: Schema Design Mini Project
- Purpose: Practice turning requirements into tables, relationships, keys, constraints, and normalization decisions.
- Suggested stage range: Stage 6 through Stage 7, with revision in Stage 11.
- Related learning skills:
  - `sql-postgresql.entity-modeling`
  - `sql-postgresql.normalization-basics`
  - `sql-postgresql.normal-forms-1nf-2nf-3nf`
  - `sql-postgresql.erd-reasoning`
  - `sql-postgresql.constraints-ddl`
  - `sql-postgresql.schema-refactoring-basics`
- Expected artifacts: ERD sketch, table list, key choices, constraint notes, and optional draft DDL.
- Review criteria: entity boundaries, relationship correctness, constraint fit, normalization reasoning, and tradeoff explanation.
- Evidence value: reviewed designs MAY support evidence for schema modeling and transfer when assumptions are explicit.
- Non-goals: this category does not create a production schema, migration plan, or backend application.

### Reporting and Aggregation Project

- Project id: `sql-postgresql.project.reporting-aggregation`
- Title: Reporting and Aggregation Project
- Purpose: Practice summary queries, grouped reports, aggregate filtering, and readable query decomposition.
- Suggested stage range: Stage 4 through Stage 5, with portfolio use in Stage 11.
- Related learning skills:
  - `sql-postgresql.aggregate-functions`
  - `sql-postgresql.group-by`
  - `sql-postgresql.having`
  - `sql-postgresql.aggregate-filtering`
  - `sql-postgresql.grouping-with-joins`
  - `sql-postgresql.ctes`
  - `sql-postgresql.query-decomposition-readability`
- Expected artifacts: report queries, expected result descriptions, grouping assumptions, and explanation notes.
- Review criteria: aggregate correctness, grouping level, `WHERE` versus `HAVING` use, readability, and transfer to changed requirements.
- Evidence value: reviewed reports MAY support evidence for M4 or M5 when the learner handles realistic reporting changes.
- Non-goals: this category does not create dashboard tooling, BI integrations, or a full report catalog.

### Indexing and Performance Investigation

- Project id: `sql-postgresql.project.indexing-performance-investigation`
- Title: Indexing and Performance Investigation
- Purpose: Practice reading query plans, reasoning about scan choices, and explaining index tradeoffs.
- Suggested stage range: Stage 9 through Stage 11.
- Related learning skills:
  - `sql-postgresql.index-concepts-btree`
  - `sql-postgresql.composite-indexes`
  - `sql-postgresql.index-selectivity`
  - `sql-postgresql.explain-basics`
  - `sql-postgresql.explain-analyze-basics`
  - `sql-postgresql.scan-types-optimization-basics`
  - `sql-postgresql.performance-reasoning`
- Expected artifacts: query plan notes, index hypothesis, before/after observations when available, and correctness-preservation notes.
- Review criteria: plan interpretation, selectivity reasoning, index choice justification, avoidance of over-indexing, and preserved query semantics.
- Evidence value: reviewed investigations MAY support evidence for performance reasoning and M5 transfer.
- Non-goals: this category does not create production tuning advice, benchmarking infrastructure, or operational DBA procedures.

### Transaction Behavior Exploration

- Project id: `sql-postgresql.project.transaction-behavior-exploration`
- Title: Transaction Behavior Exploration
- Purpose: Practice reasoning about transaction boundaries, rollback behavior, isolation, locks, and MVCC concepts.
- Suggested stage range: Stage 8 through Stage 11.
- Related learning skills:
  - `sql-postgresql.transaction-concepts`
  - `sql-postgresql.commit-rollback`
  - `sql-postgresql.isolation-levels-concepts`
  - `sql-postgresql.locking-basics`
  - `sql-postgresql.mvcc-basics`
  - `sql-postgresql.concurrency-anomalies`
- Expected artifacts: scenario notes, predicted outcomes, observed behavior when available, and explanation of transaction effects.
- Review criteria: accuracy of transaction reasoning, distinction between conceptual and observed behavior, and explanation of concurrency tradeoffs.
- Evidence value: reviewed scenario explanations MAY support evidence for transaction and concurrency learning skills.
- Non-goals: this category does not create a concurrency lab harness, incident response guide, or full database internals course.

### Interview Explanation Portfolio

- Project id: `sql-postgresql.project.interview-explanation-portfolio`
- Title: Interview Explanation Portfolio
- Purpose: Build reviewed explanations for common SQL/PostgreSQL topics, tradeoffs, and follow-up questions.
- Suggested stage range: Stage 12, with selected entries after each major stage.
- Related learning skills:
  - `sql-postgresql.query-behavior-explanation`
  - `sql-postgresql.interview-explanation`
  - `sql-postgresql.performance-reasoning`
  - `sql-postgresql.project-application`
  - `sql-postgresql.documentation-reading`
- Expected artifacts: explanation notes, question-and-answer summaries, follow-up responses, and reviewed weak-area notes.
- Review criteria: correctness, independence, explanation quality, transfer ability, consistency, and defense under follow-up.
- Evidence value: reviewed explanations MAY support M6 recommendations when the learner defends choices accurately.
- Non-goals: this category does not create a complete interview question bank or certify job readiness.

## Project Evidence Rules

- Artifact existence alone MUST NOT imply mastery.
- Reviewed artifacts MAY support evidence when the review identifies related learning skills and limitations.
- Project work MAY support M5 or M6 only when transfer, explanation, and review quality are sufficient.
- Project progress belongs in learner state, not this domain pack.
- Project sessions MAY propose learner state updates but MUST NOT silently apply them.
- Missing review evidence MUST be reported honestly.

## Project Review Criteria

Project review SHOULD consider:

- Correctness: whether queries, schemas, or explanations satisfy the stated requirement.
- Independence: how much support the learner needed.
- Explanation quality: whether the learner can explain choices and behavior.
- Transfer ability: whether the learner can adapt the work to changed requirements.
- Consistency: whether recurring mistakes remain unresolved.
- Evidence quality: whether artifacts and review notes are specific enough to support learner state updates.

## Project-to-Syllabus Mapping

- Stage 3 joins: Northwind Query Practice Project SHOULD reinforce joins, relationship reasoning, and duplicate-row diagnosis.
- Stage 4 aggregation: Reporting and Aggregation Project SHOULD reinforce grouped reports and aggregate filtering.
- Stage 6 schema design: Schema Design Mini Project SHOULD reinforce entity modeling, normalization, and ERD reasoning.
- Stage 8 transactions: Transaction Behavior Exploration SHOULD reinforce transaction and concurrency concepts.
- Stage 9 performance: Indexing and Performance Investigation SHOULD reinforce `EXPLAIN`, `EXPLAIN ANALYZE`, scan types, and index reasoning.
- Stage 11 projects: all project categories MAY be used as integrated project milestones.
- Stage 12 interview readiness: Interview Explanation Portfolio SHOULD convert project and assessment evidence into defended explanations.

## Dataset Guidance

- Small synthetic schemas MAY be used for tightly scoped early project milestones.
- Northwind MAY be used for realistic query, join, and reporting practice.
- Project-specific schemas MAY be used for schema design, transaction, and performance investigation work.
- No dataset SHOULD be mandatory for every project category.
- This file does not create Northwind tasks, import scripts, or dataset-specific exercises.

## Localization Notes

- SQL/PostgreSQL technical terms SHOULD remain in English.
- Project guidance and feedback MAY be delivered in Azerbaijani when learner or project preferences require it.
- Azerbaijani instruction with English technical terms is a project preference, not a global framework default.
- Localization behavior SHOULD follow `specification/LOCALIZATION_SPEC.md`.

## OPEN QUESTION

- Which project category should become the first fully specified pilot project?
- Should M5 in this domain usually require at least one reviewed project artifact?
- What minimal artifact metadata should future project task files require?
