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

## Source: domains/git/DOMAIN.md

# Git Domain

## Identity

- Domain id: `git`
- Domain title: Git
- Domain version: `1.0.0`
- Stage introduced: `30.0`
- Default instruction language: Azerbaijani
- Terminology language: English for Git commands, flags, object names, refs, file names, and established technical terms
- Framework compatibility: the contracts in `specification/DOMAIN_PACK_SPEC.md`, `specification/LOCALIZATION_SPEC.md`, and `specification/LEARNING_LIFECYCLE.md`

## Purpose

Develop durable Git competence from first repository actions through advanced collaboration, recovery, investigation, internals, large-repository operation, and team workflow governance. Git is taught as a distributed version-control system whose commits and refs form a history graph. Command syntax is always connected to the state it reads or changes.

The canonical subject is Git. GitHub, GitLab, Azure DevOps, Bitbucket, pull requests, and merge requests are provider-neutral collaboration contexts, not separate domains and not substitutes for Git's model.

## Target Audience

- Beginners with little or no Git experience.
- Developers who use common commands but cannot reliably explain the working tree, index, `HEAD`, refs, remotes, or commit DAG.
- Experienced engineers who need safer conflict, rebase, undo, recovery, release, debugging, or large-repository skills.
- Senior Engineers, Leads, and Team Leads who define branching, review, release, repository-security, and incident-response policies.

Command memorization alone is not competence. The learner must predict state and graph changes, produce correct repository outcomes, and explain risks and trade-offs.

## Domain Goals

1. Build a precise mental model of the working tree, staging area/index, local object database, commits, branches, tags, `HEAD`, refs, remote-tracking branches, remotes, and the commit DAG.
2. Make everyday repository work deliberate: inspect first, select the state transition, execute it, then verify the result.
3. Reason about ancestry, reachability, fast-forward and three-way merge, rebase identity changes, cherry-pick, reset, revert, and reflog recovery using small graphs.
4. Collaborate safely across remotes while treating `origin` as a convention and `git pull` as fetch plus integration.
5. Resolve and validate textual and semantic conflicts rather than treating marker removal as completion.
6. Distinguish reversible correction from destructive cleanup, and local history from published/shared history.
7. Recover from common mistakes, damaged refs, interrupted operations, and force-push incidents.
8. Design contextual team workflows, release policies, automation, and repository governance with explicit revisit conditions.
9. Investigate regressions and history responsibly with `log`, `show`, `diff`, `blame`, and `bisect`.
10. Use practical internals to explain why Git behaves as it does without turning the track into Git implementation development.

## Expected Outcomes

A successful learner can:

- draw or interpret a repository-state model and a commit graph;
- predict which state a command reads and mutates before running it;
- create reviewable commits and use branches, tags, and remotes accurately;
- distinguish local branches, remote-tracking branches, and server-side refs;
- select merge, rebase, cherry-pick, reset, restore, or revert with a defensible safety rationale;
- resolve conflicts, validate the integrated result, and detect semantic conflicts Git cannot report;
- use reflogs and reachability reasoning to recover lost-looking work when it still exists;
- respond correctly to published-history damage and credential exposure;
- perform regression investigations and explain the limitations of history tools;
- compare branching, merge, release, monorepo, LFS, submodule, and automation strategies in context;
- write and defend repository contribution, review, release, hotfix, force-push, and recovery policies.

## Supported Tracks

### `git-foundations`

Beginner mental model and everyday local Git: version-control purpose, installation, identity, initialization and clone, repository states, staging, commits, inspection, file operations, branches, graphs, merging, introductory conflicts, and safe correction.

### `git-collaboration`

Branches, remotes, fetch/pull/push composition, upstream tracking, forks, review iteration, conflict resolution, protected branches, release tags, team synchronization, and collaboration workflow choices.

### `git-advanced`

Rebase and history editing, reflog recovery, stash, worktrees, cherry-pick, debugging, internals, configuration, hooks, signing, performance, large repositories, monorepos, submodules, LFS, automation, and incident response.

### `git-leadership`

Branching and merge strategy, release governance, repository standards, permissions and protection, CI enforcement, emergency bypass, hotfixes, force-push and secret incidents, monorepo policy, workflow migration, and design defense.

Tracks reuse ordered lessons from `SYLLABUS.md`; they do not duplicate canonical lesson content. Targeted entry is allowed only after prerequisite evidence or a bounded diagnostic.

## Teaching Policy

Normal `START_LESSON` delivery inherits the teaching-first lifecycle and progresses across turns through concept and mental model, concrete example, command demonstration, guided understanding check, guided practice, feedback and correction, independent practice, then closure and one next action. A normal mentor response requests one clear learner action unless the learner explicitly asks for a worksheet, challenge, assessment, or practice-only session.

Small ASCII or Mermaid graphs should be used when positions, ancestry, reachability, or a transformation are easier to see than describe. Exercises must not depend on commands, terminology, or graph concepts that have not been taught.

## Safety Policy

Before `reset --hard`, `clean`, force push, interactive rebase, branch/tag deletion, or any published-history rewrite, the mentor must:

1. state what can be lost or disrupted;
2. identify whether the affected history is local or shared;
3. show a safer inspection, backup-ref, revert, restore, or non-destructive alternative when one exists;
4. explain realistic recovery and its limits;
5. require a disposable repository or clearly simulated environment for destructive practice.

Prefer `--force-with-lease` to unexplained `--force`, while explaining that the lease can still be wrong when local remote-tracking knowledge is stale or policy forbids rewrites. Never present a destructive command as a context-free default.

Credential exposure is a security incident: revoke or rotate the credential first, then coordinate history cleanup when required. A later deletion or a local rewrite alone does not make an exposed secret safe.

## Localization Policy

Generated Git packs teach in Azerbaijani by default. Preserve technically natural English terms such as `commit`, `branch`, `merge`, `rebase`, `remote`, `working tree`, `staging area`, `index`, `HEAD`, `ref`, `reflog`, `fast-forward`, `upstream`, `cherry-pick`, `bisect`, `worktree`, and `submodule`. Explain unfamiliar terms clearly in Azerbaijani rather than replacing them with awkward literal translations. All command examples must remain valid shell commands.

## Prerequisites

- Basic command-line navigation and file editing are helpful but may be taught just in time.
- A disposable local directory is required for hands-on destructive or recovery labs.
- Collaboration labs may use local bare repositories to simulate a provider-neutral remote.
- Advanced workflow or governance lessons require foundations in repository state, commits, refs, graphs, branches, merges, and remotes.

## Non-Goals

- Teaching one hosting provider as the canonical subject.
- Building a Git GUI, terminal emulator, repository host, or provider API integration.
- Treating one branching strategy, merge policy, GitFlow, rebase, submodule, or Git LFS choice as universally best.
- Replacing security incident response with history rewriting.
- Teaching Git's source-code implementation or every plumbing command.
- Storing learner-specific progress, evidence, goals, or session history in the domain pack.

## Canonical Relationships

- `SYLLABUS.md` owns progressive lesson ordering and prerequisite flow.
- `SKILL_GRAPH.md` owns stable learning-skill ids, dependencies, evidence expectations, and lesson mappings.
- `PRACTICE_RULES.md` owns Git-specific practice formats, safety boundaries, deliverables, and verification.
- `ASSESSMENT_RULES.md` owns Git-specific evidence and evaluation criteria without weakening the framework mastery contract.
- `PROJECTS.md` owns progressive projects and the reusable scenario library.
- `GLOSSARY.md` owns Azerbaijani explanations for preserved English terminology and confused-term distinctions.
- `QUALITY_REVIEW.md` owns the Git-specific content and generated-pack quality gate.

Framework lifecycle, state, localization, and mastery rules remain canonical in their specifications and core models; this domain cross-references rather than copies those contracts.

## Source: domains/git/GLOSSARY.md

# Git Glossary

## İstifadə Qaydası

Terminlərin canonical English forması saxlanılır; izah Azerbaijani dilində verilir. Komandalar, flag-lər, ref adları və fayl yolları tərcümə edilmir. “A versus B” qeydləri tez-tez qarışdırılan anlayışların sərhədini göstərir.

| Term | Azerbaijani explanation | Distinction or example |
| --- | --- | --- |
| Git | Dəyişiklikləri content-addressed obyektlər, commit-lər və ref-lər vasitəsilə idarə edən distributed version-control system. | GitHub hosting və collaboration platform-dur; Git-in özü deyil. Git internet olmadan local history ilə işləyə bilər. |
| repository | Git object database, ref-lər, configuration və adətən working tree-ni birləşdirən history mühiti. | Clone yalnız faylların surəti deyil; adətən tam local repository-dir. |
| working tree | Hazırda diskdə gördüyümüz checkout edilmiş fayl və qovluqlar. | Staging area deyil. `git diff` default olaraq working tree ilə index arasındakı dəyişiklikləri göstərir. |
| staging area / index | Növbəti commit snapshot-u üçün seçilmiş fayl vəziyyətini saxlayan Git strukturu. | İki ad eyni əsas anlayışı bildirir. `git diff --staged` index ilə `HEAD` commit-i müqayisə edir. |
| object database | Blob, tree, commit və annotated tag object-lərinin hash ilə saxlandığı `.git/objects` məntiqi sahəsi. | Ref database deyil; branch adı object-in özü deyil. |
| snapshot | Müəyyən anda project tree-sinin Git tərəfindən modelləşdirilən vəziyyəti. | Git diff göstərə bilər, amma əsas commit modeli yalnız “patch siyahısı” deyil. |
| tracked | Git-in index/history vasitəsilə tanıdığı path. | Tracked olmaq staged olmaq demək deyil; tracked fayl modified, staged və ya unchanged ola bilər. |
| untracked | Working tree-də olub index/history-də hələ qeyd edilməyən path. | `.gitignore` untracked path-in default görünüşünü və seçilməsini dəyişə bilər; artıq tracked faylı avtomatik untrack etmir. |
| modified | Tracked faylın working tree versiyasının index və ya commit vəziyyətindən fərqli olması. | Modified dəyişiklik hələ staged olmaya bilər. |
| staged | Index-də növbəti commit üçün seçilmiş vəziyyət. | Eyni faylda bəzi hunks staged, digərləri unstaged ola bilər. |
| commit | Tree snapshot-u, parent link-ləri, author/committer metadata-sı və message saxlayan immutable Git object-i. | Branch commit deyil; branch commit-ə yönələn movable ref-dir. Commit dəyişdiriləndə eyni commit “edit” olunmur, yeni identity yaranır. |
| commit hash / object id | Object məzmunundan hesablanan identifier. | Rebase, amend və cherry-pick metadata/parent/content kontekstinə görə yeni commit id yaradır. |
| DAG | Directed acyclic graph; commit-lərin parent istiqamətli, cycle olmayan history graph-ı. | Tarix sırası ancestry ilə eyni deyil; graph parent əlaqəsi əsasdır. |
| parent | Commit-in əvvəlki history node-na link-i. Merge commit-in birdən çox parent-i ola bilər. | First parent adətən merge edilən əsas xətti izləmək üçün istifadə olunur, amma bütün history-ni göstərmir. |
| ancestor / descendant | Parent link-ləri ilə daha əvvəlki və ya ondan törəyən commit əlaqəsi. | Timestamp ancestry sübut etmir. |
| reachability | Ref və ya seçilmiş commit-dən parent link-ləri ilə hansı object/commit-lərə çatmağın mümkün olması. | Unreachable dərhal permanently deleted demək deyil; reflog və object retention müddəti bərpa imkanı verə bilər. |
| ref | Commit və ya başqa object id-sinə yönələn adlı pointer, məsələn branch və tag ref-i. | Ref object məzmununu daşımır; adı hərəkət edə bilər. |
| branch | Adətən yeni commit yarandıqca irəliləyən `refs/heads/*` local ref-i. | Ayrı fayl surəti deyil. Branch silinməsi reachable commit-ləri dərhal silmir. |
| local branch | Cari repository-də `refs/heads/*` altında olan və checkout edilə bilən branch ref-i. | Remote-tracking branch-dən fərqlidir və push etmədən server branch-ını dəyişmir. |
| remote-tracking branch | Son fetch zamanı remote ref barədə local müşahidəni saxlayan `refs/remotes/<remote>/*` ref-i. | Writable working branch deyil və serverin canlı vəziyyəti deyil; `git fetch` ilə yenilənir. |
| server-side branch | Remote repository-də olan `refs/heads/*` ref-i. | Local `origin/main` onun son müşahidə edilmiş vəziyyətidir, özü deyil. |
| `HEAD` | Hazırda checkout edilmiş branch-a symbolic ref və ya detached halda birbaşa commit göstəricisi. | `HEAD` current branch ilə eyni anlayış deyil; detached `HEAD` zamanı current branch yoxdur. |
| symbolic ref | Başqa ref-in adını saxlayan ref. | Normal halda `HEAD` məsələn `refs/heads/main`-ə işarə edir. |
| detached `HEAD` | `HEAD`-in branch adı əvəzinə birbaşa commit-ə yönəldiyi vəziyyət. | Burada commit yaratmaq mümkündür; switch etməzdən əvvəl branch/ref yaradaraq işi qorumaq lazımdır. |
| tag | Adətən release və ya mühüm nöqtəni göstərən ref. Lightweight tag birbaşa object-ə, annotated tag isə tag object-i vasitəsilə yönəlir. | Branch kimi yeni commit-lərlə avtomatik irəliləmir. Published tag-i hərəkət etdirmək koordinasiya tələb edir. |
| lightweight tag | Birbaşa object id-sinə yönələn sadə tag ref-i. | Annotated tag message, tagger və optional signature daşıyan ayrıca object yaradır. |
| remote | Başqa repository üçün konfiqurasiya edilmiş ad və fetch/push URL/refspec əlaqəsi. | Remote server demək məcburiyyətində deyil; local bare repository də remote ola bilər. |
| `origin` | Clone zamanı default verilən conventional remote adı. | Git keyword-ü və mandatory ad deyil; dəyişdirilə və ya ümumiyyətlə istifadə edilməyə bilər. |
| `upstream` | Kontekstdən asılı conventional addır: remote adı və ya branch-in izlədiyi branch ola bilər. | `origin` versus `upstream` universal rollar deyil; configuration yoxlanılmalıdır. |
| clone | Başqa repository-dən yeni local repository və working tree yaratmaq əməliyyatı. | Fork provider-side repository copy-sidir; clone local əməliyyatdır. |
| fork | Hosting provider-də başqa repository əsasında ayrıca server-side repository yaratma collaboration modeli. | Git-in core object/command anlayışı deyil; fork-u ayrıca clone etmək olar. |
| fetch | Remote-dan object və ref məlumatını alıb remote-tracking ref-ləri yeniləyən, current branch-i avtomatik integrate etməyən əməliyyat. | `pull` adətən fetch + merge və ya fetch + rebase-dir. Əvvəl fetch edib inspect etmək daha aydın ola bilər. |
| pull | Remote dəyişikliklərini fetch edib seçilmiş üsulla current branch-ə integrate edən composite əməliyyat. | “Magical sync” deyil. Merge/rebase/ff-only davranışı explicit və ya config-dən asılıdır. |
| push | Local object/ref nəticəsini remote ref update tələbi kimi göndərən əməliyyat. | Fetch-in tərsi kimi düşünmək natamamdır; server policy və fast-forward yoxlamaları update-i rədd edə bilər. |
| upstream tracking branch | Local branch üçün default remote və merge target əlaqəsi. | Remote-tracking ref-lə əlaqəlidir, amma eyni anlayış deyil; `git branch -vv` ilə inspect etmək olar. |
| ahead / behind | İki tip arasında yalnız bir tərəfdən reachable olan commit sayları. | File diff ölçüsü deyil və fetch edilməmiş server state-ni bilmir. |
| merge base | İki commit üçün integration zamanı istifadə edilən uyğun common ancestor. | Three-way merge base tree-ni iki tip tree ilə müqayisə edir. |
| fast-forward | Target branch tip-i digər tip-in ancestor-u olduqda yeni merge commit yaratmadan ref-in irəli çəkilməsi. | Three-way merge divergence olduqda base və iki tip ilə nəticə yaradır və adətən merge commit edir. |
| three-way merge | Merge base, current tip və other tip tree-lərindən integration nəticəsi hesablayan merge. | Fast-forward sadəcə pointer movement ola bilər; three-way merge yeni merge commit yarada bilər. |
| merge commit | İki və ya daha çox parent-i olan commit. | “Bütün dəyişiklikləri özündə ayrıca saxlayan qutu” deyil; tree snapshot və parent əlaqələri saxlayır. |
| merge conflict | Git-in seçilmiş integration zamanı final content barədə avtomatik qərar verə bilmədiyi hal. | Semantic conflict Git marker yaratmadan davranışı poza bilər; test və review lazımdır. |
| conflict marker | `<<<<<<<`, `=======`, `>>>>>>>` ilə göstərilən unresolved content hissəsi. | Marker-i silmək təkbaşına düzgün resolution sübutu deyil. |
| rebase | Seçilmiş commit dəyişikliklərini yeni base üzərinə replay edib yeni commit identity-ləri yaradan history transformation. | Merge mövcud commit-ləri yeni merge commit ilə əlaqələndirə bilər; rebase universal üstün deyil. |
| interactive rebase | Commit-ləri reorder, reword, squash, fixup, edit və ya drop etmək üçün idarə olunan local history rewrite. | Published/shared history-də downstream disruption yarada bilər; recovery və koordinasiya tələb edir. |
| reset | Cari ref və seçilmiş mode-a görə index/working tree-ni başqa commit vəziyyətinə yönəldən əməliyyat. | Revert yeni inverse commit yaradır; published history üçün çox vaxt daha təhlükəsizdir. |
| soft / mixed / hard reset | `--soft` ref-i dəyişib index/working tree-ni saxlayır; mixed index-i də reset edir; `--hard` working tree-ni də uyğunlaşdıraraq dəyişiklik itirə bilər. | Mode seçimi intended state və safety boundary ilə əsaslandırılmalıdır. |
| revert | Seçilmiş commit effektinin əksini yeni commit kimi yazan əməliyyat. | History-ni geri hərəkət etdirmir; shared history-də traceable correction verir. |
| restore | Working tree və ya `--staged` ilə index path-lərini seçilmiş source-dan bərpa etməyə yönələn command. | Reset ref/index/history sərhədlərinə də təsir edə bilər; restore daha path/state-focused-dur. |
| reflog | Local ref və `HEAD` hərəkətlərinin repository-local log-u. | Remote backup və daimi arxiv deyil; expire/prune ola bilər və başqa clone-da eyni olmaya bilər. |
| unreachable | Cari ref-lərdən parent traversal ilə çatılmayan object/commit. | Permanently deleted deyil, amma reflog expiry və garbage collection sonrası itə bilər. |
| cherry-pick | Bir commit-in dəyişikliyini current tip üzərinə yeni commit kimi tətbiq etmək. | Original commit identity-ni daşımır; duplicate patch və traceability riski yarada bilər. |
| patch identity | Commit identity-dən fərqli olaraq dəyişiklik məzmununun ekvivalentliyini təsvir edən fikir. | Eyni change merge/rebase/cherry-pick nəticəsində fərqli commit id-lərlə görünə bilər. |
| stash | Working tree/index dəyişikliklərini müvəqqəti Git-managed commit-like state kimi saxlayan mexanizm. | Branch əvəzi və ya təhlükəsiz daimi backup deyil. `apply` entry-ni saxlayır, `pop` uğurlu tətbiqdən sonra silməyə çalışır. |
| worktree | Eyni repository object database-i ilə əlaqəli əlavə working tree və branch checkout-u. | Ayrı clone deyil; parallel hotfix/review işi üçün istifadə oluna bilər. |
| blame | Hər line üçün seçilmiş history provenance məlumatını göstərən investigation aləti. | İnsan günahlandırmaq üçün deyil; rename, move, squash və context limitləri var. |
| bisect | Known-good və known-bad sərhədlər arasında binary search ilə candidate regression commit tapan workflow. | Etibarlı test predicate tələb edir; tapılan commit root cause-u avtomatik sübut etmir. |
| blob | Fayl content-ni saxlayan Git object-i; filename saxlamır. | Filename və directory əlaqəsi tree object-dədir. |
| tree | Path adlarını blob və alt-tree object-lərinə bağlayan directory snapshot object-i. | Commit müəyyən tree object-inə yönəlir. |
| packfile | Bir çox object-i delta/compression ilə səmərəli saxlayan Git storage formatı. | Loose object ayrıca fayl kimi saxlanıla bilər; `gc` storage-i yenidən təşkil edə bilər. |
| garbage collection | Object storage-ni pack edən və uyğun şərtlərdə artıq qorunmayan object-ləri prune edə bilən maintenance. | Reflog-u daimi backup saymamağın səbəblərindən biridir. |
| porcelain / plumbing | Porcelain user-facing workflow command-ləri; plumbing aşağı səviyyəli object/ref əməliyyatlarıdır. | Internals dərsində plumbing inspect üçün istifadə olunur, gündəlik işi lazımsız çətinləşdirmək üçün deyil. |
| hook | Müəyyən Git event-i ətrafında local script icra mexanizmi. | Client-side hook bypass və paylaşma problemlərinə görə tək policy enforcement ola bilməz; server/CI control ilə tamamlanmalıdır. |
| signed commit / tag | Cryptographic signature ilə origin/integrity verification məlumatı daşıyan commit və ya tag. | Signature kodun təhlükəsiz, müəllifin səlahiyyətli və ya change-in doğru olduğunu avtomatik sübut etmir. |
| protected branch | Hosting/server policy ilə ref update, review və check şərtləri qoyulan branch. | Git core branch xüsusiyyəti deyil; provider/server enforcement context-dir. |
| force push | Remote ref-i non-fast-forward update etməyə çalışan push. | `--force-with-lease` gözlənilən remote tip-i qorumağa çalışır, amma stale knowledge/policy problemlərini tam aradan qaldırmır. |
| shallow clone | Məhdud history depth ilə yaradılan clone. | Tam ancestry, merge-base və bəzi investigation/release işlərini məhdudlaşdıra bilər. |
| partial clone | Bəzi object-ləri ehtiyac olduqda almaq üçün promisor remote modelindən istifadə edən clone. | Sparse checkout yalnız working tree path seçimini daraldır; eyni şey deyil. |
| sparse checkout | Working tree-də repository path-lərinin yalnız seçilmiş hissəsini materialize etmə üsulu. | History/object transfer ölçüsünü təkbaşına tam həll etmir. |
| Git LFS | Böyük file content-ni xarici LFS storage-da saxlayıb Git history-də pointer file istifadə edən extension. | Server/quota/migration dependency-si var; bütün repository-lər üçün default deyil. |
| submodule | Başqa repository-nin konkret commit-inə pointer saxlayan repository əlaqəsi. | Parent repository child history-ni daxil etmir; clone/update/release coordination əlavə mürəkkəblik yaradır. |
| subtree | Başqa project history/content-ni parent repository daxilində idarə etmə yanaşması. | Submodule-dan fərqli trade-off-ları var; sync və history ölçüsü qiymətləndirilməlidir. |
| monorepo | Bir neçə project/package-in bir repository-də idarə edilməsi. | Multi-repository universal alternativ deyil; ownership, CI, release, permissions və scale trade-off-ları var. |

## Critical Confusion Checks

- Git ≠ GitHub.
- working tree ≠ staging area/index.
- commit ≠ branch.
- local branch ≠ remote-tracking branch ≠ server-side branch.
- `fetch` ≠ `pull`.
- merge ≠ rebase.
- reset ≠ revert; restore ≠ reset.
- `HEAD` ≠ həmişə current branch.
- tag ≠ branch.
- `origin` və `upstream` konvensiyadır, xüsusi məcburi rollar deyil.
- fast-forward ≠ three-way merge.
- fork ≠ clone.
- tracked ≠ staged.
- unreachable ≠ permanently deleted.
- merge conflict ≠ semantic conflict.
