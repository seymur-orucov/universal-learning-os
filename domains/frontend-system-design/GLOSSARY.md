# Front-End System Design Glossary

Default explanations are Azerbaijani while technical terms remain English where natural.

| Term | Azerbaijani guidance |
| --- | --- |
| functional requirements | Sistemin istifadəçi üçün nə etməli olduğunu təsvir edir. |
| non-functional requirements | Performance, reliability, security, accessibility və digər keyfiyyət gözləntiləri. |
| architecture boundary | Məsuliyyət, ownership və dəyişiklik sərhədi. |
| trade-off | Bir fayda üçün qəbul edilən cost və risk balansı. |
| state ownership | State-in canonical olaraq harada yaşadığını və kim tərəfindən dəyişdirildiyini göstərir. |
| server state | Serverdən gələn, freshness və synchronization tələb edən data. |
| source of truth | Müəyyən məlumat üçün canonical mənbə. |
| SPA / MPA | Single-Page Application və Multi-Page Application rendering/navigation modelləri. |
| SSR / SSG / ISR | Server-Side Rendering, Static Site Generation və Incremental Static Regeneration. |
| hydration | Server-rendered markup-a client-side behavior qoşulması. |
| micro-frontend | Frontend-in ayrı ownership və delivery sərhədlərinə bölünməsi yanaşması. |
| BFF | Backend for Frontend; client ehtiyaclarına uyğun API orchestration sərhədi. |
| cache invalidation | Köhnəlmiş cache entry-lərin nə vaxt və necə yenilənməsi. |
| stale-while-revalidate | Köhnə cavabı dərhal göstərib arxa planda yeniləmə strategiyası. |
| Core Web Vitals | Real user experience üçün əsas web performance göstəriciləri. |
| graceful degradation | Asılılıq və ya funksiya itkisində əsas user journey-ni qorumaq. |
| error boundary | UI subtree daxilində rendering xətasını tutub fallback göstərən sərhəd. |
| observability | Logs, errors, metrics, traces/correlation və user signals ilə sistem davranışını anlamaq. |
| accessibility | Müxtəlif qabiliyyətli istifadəçilər üçün məhsulun işlək və anlaşılır olması. |
| authentication / authorization | Kimliyi yoxlama və hansı əmələ icazə verildiyini müəyyənləşdirmə. |
| design system | Tokens, components, patterns, documentation və governance platforması. |
| ADR / RFC | Architecture Decision Record və Request for Comments qərar/razılaşma artefaktları. |
| feature flag | Funksiyanı deploy-dan ayrı idarə edən runtime/configuration control. |
| failure mode | Sistemin hansı şəkildə uğursuz ola biləcəyinin konkret təsviri. |
| bottleneck | Capacity, latency, delivery və ya team flow-u məhdudlaşdıran hissə. |
| rollback | Uğursuz release-dən əvvəlki işlək versiyaya qayıtma. |
