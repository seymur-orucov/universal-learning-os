# Git Glossary and Projects

This generated standard pack file is derived from canonical repository sources. It is reusable project context and does not contain learner-specific progress.

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

## Source: domains/git/PROJECTS.md

# Git Projects and Scenario Library

## Shared Project Contract

Every project defines a disposable or clearly controlled repository environment, starting graph/state, intended outcomes, safety boundaries, learner artifacts, verification commands, and evidence requirements. Milestones move from guided setup to independent execution and design defense. Existing important repositories are never used for destructive practice.

## Project 1 — Personal Repository Foundations

### Scenario

Create and maintain a small documentation or code repository while demonstrating that the working tree, index, commits, and refs are understood as separate state.

### Prerequisites

Lessons 1–12; `git.state-model`, `git.local-lifecycle`, `git.history-inspection`.

### Milestones

1. Configure repository-local identity intentionally and initialize the repository.
2. Plan and create at least four meaningful, atomic commits with useful messages.
3. Add an appropriate `.gitignore` and `.gitattributes`; explain why already tracked files behave differently.
4. Inspect staged and unstaged patches, split a mixed change with partial staging, and verify a clean final state.
5. Restore one accidental working-tree edit safely without using a hard reset.
6. Create an annotated baseline tag and show its relationship to the commit.

### Expected Learner Artifacts

Repository, commit graph, selected `status`/`diff`/`show` evidence, commit rationale, ignore/attributes explanation, and restoration note.

### Evidence Requirements

The learner must narrate state transitions and explain why each verification proves the intended result. A repository created by copying commands is insufficient.

### Common Failure Modes

One giant commit; committing generated/secrets content; confusing staged with tracked; ignoring an already tracked file; destructive restoration; tag/branch confusion; unverified final state.

### Extension Challenges

Use `git add -p` to split one file's unrelated changes; diagnose a line-ending or executable-bit diff; create a useful log alias and document its scope.

### Completion Criteria

Correct clean repository, reviewable history, accurate state explanation, safe restoration, useful annotated tag, and independent verification.

## Project 2 — Branch and Conflict Lab

### Scenario

Use a disposable repository to create linear and divergent development, demonstrate both merge forms, resolve conflicts, and explain the resulting DAG.

### Prerequisites

Project 1; Lessons 13–23; graph, merge, and conflict skills.

### Milestones

1. Draw the intended starting graph and create branches from specified commits.
2. Demonstrate a fast-forward merge and explain pointer movement.
3. Create divergence and perform a three-way merge with an intentional merge commit.
4. Resolve a content conflict and one modify/delete or rename-related conflict.
5. Inject a semantic conflict that merges cleanly; catch it with a test or explicit validation.
6. Create a commit in detached `HEAD`, preserve it with a branch, and explain the recovery.
7. Clean up merged branches only after proving commit reachability.

### Expected Learner Artifacts

Before/after graphs, repository history, conflict-resolution journal, validation output, reachability explanation, and branch-cleanup record.

### Evidence Requirements

Accurate base/side reasoning, intentional final tree, valid graph predictions, operation-specific continue/abort knowledge, and semantic validation.

### Common Failure Modes

Saying branches are file copies; deleting a branch without checking work; treating marker removal as resolution; confusing ours/theirs across rebase; incorrect parent/topology explanation.

### Extension Challenges

Recreate one conflict under rebase and compare repeated resolution behavior; compare default, `--ff-only`, and `--no-ff` outcomes.

### Completion Criteria

Both merge forms and both conflict classes are correct, tested, graphically explained, and cleaned up without losing reachable work.

## Project 3 — Team Collaboration Simulation

### Scenario

Simulate a provider-neutral team with a local bare remote, two contributor clones, feature branches, review feedback, protected-branch policy, and an explicit merge-strategy decision.

### Prerequisites

Project 2; Lessons 24–30 and 58–61; remote/review skills.

### Milestones

1. Create a bare remote and two clones; identify server refs, local branches, and remote-tracking branches.
2. Configure upstream tracking and complete feature work with reviewable commits.
3. Produce remote divergence, fetch without integration, inspect ahead/behind, then choose merge, rebase, or `--ff-only` deliberately.
4. Respond to simulated review feedback without hiding the review trail unintentionally.
5. Demonstrate a non-fast-forward push rejection and repair it without blind `pull` or force.
6. Write provider-neutral contributor guidance for branch names, commit quality, reviews, checks, stale branches, and branch cleanup.
7. Propose protected-branch and required-status-check policy, including emergency bypass governance.

### Expected Learner Artifacts

Remote simulation, ref diagrams, command/output journal, review history, `CONTRIBUTING`-style guidance, and branch-protection decision record.

### Evidence Requirements

Precise remote terminology, fetch/pull composition, justified integration, collaboration safety, review responsiveness, and enforceability analysis.

### Common Failure Modes

Calling `origin` special; treating remote-tracking refs as live/writable branches; blind pull; unnecessary force; provider-specific rules presented as Git facts; local hooks claimed as sufficient enforcement.

### Extension Challenges

Add a fork-style second remote named `upstream`; synchronize a stale long-running branch; compare squash, merge commit, and rebase merge for the same review.

### Completion Criteria

Two-clone workflow succeeds, every ref is explained, divergence is repaired safely, and team guidance has explicit trade-offs and enforcement boundaries.

## Project 4 — Release and Recovery Scenario

### Scenario

Operate a simulated release, then handle a production regression plus multiple local-history mistakes without sacrificing traceability or safety.

### Prerequisites

Projects 1–3; Lessons 31–52; safe undo, recovery, rebase, release, and investigation skills.

### Milestones

1. Create a release commit and annotated tag with release notes and a graph.
2. Use a deterministic failing test and `git bisect` to identify the regression-introducing commit; verify the finding.
3. Decide between revert, roll-forward fix, release-branch hotfix, or cherry-pick and defend the traceability costs.
4. Recover a commit created on the wrong branch without duplicating or losing intended work.
5. Recover a deleted branch or commit lost after reset using reflog/reachability reasoning and a preservation ref.
6. Abort and recover from a failed rebase, then complete an unpublished history cleanup if still justified.
7. Respond to a simulated bad merge or incorrect pushed commit with a local/shared-history-aware plan.
8. Produce release documentation and a recovery runbook with limitations.

### Expected Learner Artifacts

Release graph/tags, bisect log, regression decision, recovered refs/commits, corrected history, validation output, release notes, and recovery runbook.

### Evidence Requirements

Correct final repository plus pre-operation predictions, safety analysis, verified investigation, recovery path, publication awareness, and explanation of alternatives.

### Common Failure Modes

Moving a published tag silently; hard reset as first response; reflog treated as permanent backup; rebase claimed superior; cherry-pick duplication ignored; incorrect merge revert; failure to test recovered history.

### Extension Challenges

Simulate accidental force push between two clones and coordinate restoration; recover a dropped stash entry if still discoverable; use a worktree for an urgent hotfix.

### Completion Criteria

Release remains traceable, regression response is justified, lost-looking work is recovered where possible, and the runbook states real recovery limits.

## Project 5 — Repository Governance Capstone

### Scenario

Design and defend a complete Git workflow for a realistic engineering organization. The supplied context must include team topology, repository layout, release frequency, CI maturity, review obligations, rollback needs, compliance constraints, binary/large-file needs, and incident history.

### Prerequisites

Projects 1–4; leadership track; independent evidence for collaboration, release, recovery, automation, security, and workflow strategy.

### Milestones

1. Clarify context, assumptions, constraints, risks, and non-goals.
2. Compare short-lived branches/trunk-based development with at least one other credible workflow; include GitHub Flow, GitLab Flow, GitFlow, release/environment branches only when context makes them relevant.
3. Define branch naming/lifecycle, atomic commit guidance, optional Conventional Commits position, and stale-branch policy.
4. Choose merge commit, squash merge, rebase merge, or a contextual combination and explain traceability/debugging consequences.
5. Define CI checks, review ownership, branch protection, permissions, signed commit/tag position, hook responsibilities, and emergency bypass.
6. Design release, tag, hotfix, rollback/roll-forward, changelog, and release-automation flows.
7. Define force-push, bad-merge, lost-commit, accidental branch deletion, suspicious-history, and secret-exposure playbooks.
8. Address monorepo versus multi-repository choice, atomic cross-project changes, CI selection, release coordination, binaries/LFS, generated artifacts, submodules/subtree, worktrees, and performance.
9. Run a tabletop incident and revise the design after a new compliance, scale, or release-frequency constraint.
10. Record revisit triggers, migration steps, success indicators, and owners.

### Expected Learner Artifacts

Context brief, graph examples, workflow decision record, contribution policy, merge/release/hotfix rules, CI/protection matrix, permissions model, incident/recovery playbook, repository-scale decision, tabletop report, and concise oral/written defense.

### Evidence Requirements

Recommendations must trace to context; alternatives and risks must be honest; policies must distinguish Git from hosting controls; incident steps must be technically recoverable; security response must rotate credentials; and changed constraints must produce a coherent revision.

### Common Failure Modes

Universal GitFlow or trunk claims; provider lock-in; clean history valued above truth; force push without lease/policy; local hooks as sole enforcement; no emergency governance; secret rewrite without rotation; submodule/LFS defaults; monorepo policy without release/CI ownership; no revisit conditions.

### Extension Challenges

Design a migration from an existing workflow without stopping delivery; add regulated release evidence; handle multiple release trains; define a repository backup/mirror recovery exercise.

### Completion Criteria

The complete workflow is internally consistent, safe, enforceable, provider-neutral, adaptable, incident-ready, and defended under follow-up questions.

## Reusable Scenario Library

Each scenario must instantiate the shared practice contract and use a disposable repository or simulation.

| Scenario | Core question | Required evidence |
| --- | --- | --- |
| Commit on the wrong branch | Move or replay intent without losing unrelated work | Before/after graph, command choice, verification |
| Accidental detached `HEAD` | Preserve new commits before switching away | `HEAD` explanation, recovery branch, reachability proof |
| Deleted local branch | Determine whether its tip remains recoverable | Reflog/graph inspection, preservation ref, limitation note |
| Lost commit after reset | Reconstruct ref movement and restore safely | Reflog entry, recovered graph, state verification |
| Bad merge commit | Choose revert-mainline, repair commit, or coordinated rewrite | Parent reasoning, local/shared status, tests |
| Rebase conflict | Resolve repeated replay context or abort safely | Old/new graph, conflict journal, identity map |
| Accidental force push | Contain, find authoritative tip, coordinate restoration | Multi-clone evidence, restoration plan, prevention action |
| Remote branch divergence | Fetch, inspect, then choose integration | Ref diagram, ahead/behind ranges, defended commands |
| Stale long-running feature | Reduce integration risk without hiding costs | Merge/rebase comparison, tests, review plan |
| Urgent production hotfix | Balance speed, traceability, release branches, and follow-up | Release graph, approval/CI path, rollback plan |
| Secret committed to history | Contain exposure before cleanup | Revocation/rotation, exposure assessment, coordinated rewrite concept |
| Merge strategy disagreement | Decide from context rather than preference | Options matrix, costs/risks, revisit conditions |
| Large binary added | Remove current impact and prevent recurrence; assess historical cleanup | Size evidence, LFS/tracking trade-off, migration plan |
| Monorepo release coordination | Preserve atomicity and independent release needs | Ownership/CI/release policy and failure handling |
| Regression with `bisect` | Find a candidate using a reliable predicate | Bisect log, verification, limitations, regression test |

Scenario variants should alter publication status, CI maturity, team size, compliance, reflog age, clone availability, or repository scale so memorized recipes do not pass as transferable competence.
