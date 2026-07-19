# Localization Context

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

## Source: specification/LOCALIZATION_SPEC.md

# Localization Specification

## Purpose

Define framework-level policy for instructional language and terminology language.

## Scope

This specification governs user-facing teaching text, domain terminology preservation, learner language preferences, and domain-pack terminology guidance.

## Non-Goals

- It does not hardcode one global framework language.
- It does not define concrete YAML fields or schemas.
- It does not translate domain content.
- It does not define locale-specific UI behavior.

## Core Concepts

- Instruction Language: the language used for explanations, feedback, lesson flow, and user-facing teaching text.
- Terminology Language: the preferred language for domain-specific technical terms.
- Term Preservation: the rule that important domain terms may remain untranslated when terminology language differs from instruction language.
- Glossary Mapping: optional domain-pack mapping between original terms, translated explanations, examples, and usage notes.
- Learner Language Preference: learner-specific language configuration, later stored in learner profile or learner state.
- Domain Language Policy: domain-pack-specific guidance for how terminology should be presented.

## Normative Requirements

- The framework MUST support separate instruction language and terminology language preferences.
- User-facing teaching output SHOULD follow the learner's instruction language when available.
- Domain-specific technical terms SHOULD remain in the terminology language when the learner preference requires it.
- When instruction language and terminology language differ, explanations MAY include a short clarification in the instruction language, but MUST NOT replace important technical terms with unnatural translations.
- Domain packs SHOULD provide glossary guidance for important terms when terminology preservation matters.
- Commands that produce lessons, practice, reviews, assessments, interviews, or progress reports SHOULD respect localization preferences.
- Localization preferences MUST NOT change evidence, mastery, or state semantics.
- If language preferences are missing, commands SHOULD use the project or user-provided language context.

## Example Preference

A learner or project MAY request Azerbaijani as the instruction language and English as the terminology language. In that case, explanations and feedback should be in Azerbaijani while important technical terms remain in English when natural and domain-appropriate.

## Relationships

- Learner preference storage is described conceptually in `specification/STATE_SPEC.md`.
- Domain glossary guidance belongs to domain packs governed by `specification/DOMAIN_PACK_SPEC.md`.
- User-facing command behavior is governed by `specification/COMMAND_SPEC.md`.
- Lesson structure is defined in `core/learning-engine/LESSON_STRUCTURE.md`.

## OPEN QUESTION

- Should language preferences use BCP 47 language tags once schemas exist?
- Should terminology language support multiple preferred languages ordered by priority?
- Where should project-level language defaults be stored before application configuration exists?

## Source: domains/sql-postgresql/DOMAIN.md

# SQL and PostgreSQL

## Domain Identity

- Domain id: `sql-postgresql`
- Domain title: `SQL and PostgreSQL`
- Domain version: `0.1.0-draft`

## Target Audience

- Learners who want to become productive with SQL and PostgreSQL.
- Software engineers who need practical database skills.
- Learners progressing from beginner to advanced database topics.

## Domain Goals

- Understand relational database fundamentals.
- Write correct SQL queries.
- Work confidently with PostgreSQL.
- Reason about schema design, constraints, joins, aggregation, subqueries, transactions, indexing, and performance.
- Practice with realistic datasets such as Northwind where appropriate.

## Expected Outcomes

- Learner can write and explain SQL queries.
- Learner can design basic relational schemas.
- Learner can use PostgreSQL-specific features at an appropriate level.
- Learner can reason about query behavior and performance.
- Learner can apply concepts in exercises, projects, and interview-style explanations.

## Supported Tracks

- `sql-postgresql.main`: beginner-to-advanced SQL/PostgreSQL track.
- `sql-postgresql.practice`: focused practice and review track.
- `sql-postgresql.interview`: interview and explanation track.

## Localization Policy

- Instruction language MAY be Azerbaijani for the initial project preference.
- Terminology language MAY be English.
- Important technical terms such as `SELECT`, `WHERE`, `JOIN`, `primary key`, `foreign key`, `index`, `transaction`, `EXPLAIN ANALYZE`, and `MVCC` SHOULD remain in English unless `domains/sql-postgresql/GLOSSARY.md` says otherwise.
- Localization behavior MUST follow `specification/LOCALIZATION_SPEC.md`.

## Prerequisites

- Basic computer literacy.
- No prior SQL knowledge required for the main beginner track.
- Programming experience is useful but not required.

## Non-Goals

- This domain is not a full DBA certification program at draft stage.
- It does not replace official PostgreSQL documentation.
- It does not contain learner-specific progress.
- It does not teach backend application frameworks directly.

## Relationships

- Draft syllabus skeleton: `domains/sql-postgresql/SYLLABUS.md`.
- Initial learning skill graph skeleton: `domains/sql-postgresql/SKILL_GRAPH.md`.
- Practice guidance: `domains/sql-postgresql/PRACTICE_RULES.md`.
- Assessment mapping: `domains/sql-postgresql/ASSESSMENT_RULES.md`.
- Project placeholders: `domains/sql-postgresql/PROJECTS.md`.
- Glossary guidance: `domains/sql-postgresql/GLOSSARY.md`.
- Domain pack contract: `specification/DOMAIN_PACK_SPEC.md`.

## OPEN QUESTION

- Which PostgreSQL version should this draft domain pack target first?
- Should Northwind be the default practice dataset or one of several supported datasets?

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
