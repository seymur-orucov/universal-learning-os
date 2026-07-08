# JavaScript Glossary

This glossary supports Azerbaijani learner-facing explanations while preserving JavaScript terms in English where natural.

| Term | Guidance |
| --- | --- |
| `var` | Function-scoped variable declaration; hoisting behavior should be explained carefully. |
| `let` | Block-scoped variable declaration for reassignment. |
| `const` | Block-scoped binding that cannot be reassigned; object contents may still mutate. |
| primitive | `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint` kimi sadə value növləri. |
| reference type | Object, array və function kimi reference ilə işləyən dəyərlər. |
| coercion | JavaScript-in value type-larını avtomatik çevirməsi. |
| execution context | Kodun icra olunduğu environment və runtime məlumatları. |
| call stack | Function çağırışlarının runtime stack-i. |
| scope chain | Variable lookup üçün scope-lar ardıcıllığı. |
| lexical environment | Lexical scope daxilində identifier binding-lərini saxlayan model. |
| hoisting | Declaration-ların execution əvvəlində qeydiyyata alınması davranışı. |
| closure | Function-un öz lexical environment məlumatını saxlaması. |
| `this` | Çağırılma formasından asılı context dəyəri. |
| arrow function | Öz `this` binding-i olmayan function sintaksisi. |
| prototype | Object-lər arasında property/method lookup üçün delegation mexanizmi. |
| prototypal inheritance | Object-lərin prototype chain vasitəsilə davranış paylaşması. |
| property descriptor | Property-nin `writable`, `enumerable`, `configurable`, getter/setter metadata-sı. |
| mutability | Dəyərin və ya obyektin dəyişdirilə bilməsi. |
| shallow copy | Yalnız birinci səviyyənin kopyalanması. |
| deep copy | Nested strukturun da ayrıca kopyalanması. |
| structured cloning | Browser/runtime structured clone algorithm ilə kopyalama. |
| callback | Sonra çağırılmaq üçün başqa function-a verilən function. |
| `Promise` | Async nəticəni təmsil edən obyekt. |
| `async/await` | Promise əsaslı async kodu daha oxunaqlı yazmaq sintaksisi. |
| microtask | Promise callback-ləri kimi yüksək prioritet async queue işi. |
| macrotask | Timer və event kimi task queue işi. |
| event loop | Call stack, microtask queue və task queue arasında koordinasiya mexanizmi. |
| `fetch` | HTTP request üçün Web API. |
| `AbortController` | Async request və operation cancellation üçün Web API. |
| ES module | `import` və `export` ilə ayrılmış JavaScript module sistemi. |
| iterator | Ardıcıllıq üzrə next value verən protocol. |
| generator | `function*` ilə iterator yaradan function. |
| `Map` | Key-value collection; object-dən fərqli key imkanları verir. |
| `Set` | Unique value collection. |
| `WeakMap` | Weak object key-lərlə memory-friendly association. |
| `WeakSet` | Weak object reference-lərdən ibarət collection. |
| symbol | Unique primitive identifier. |
| event delegation | Parent element üzərində event handling ilə child event-ləri idarə etmək pattern-i. |
| debounce | Ardıcıl çağırışları gecikdirib son çağırışı icra etmək pattern-i. |
| throttle | Müəyyən intervalda maksimum bir dəfə icra etmək pattern-i. |
| garbage collection | İstifadəsiz memory-nin runtime tərəfindən təmizlənməsi. |
| reflow/repaint | Browser rendering zamanı layout və paint yenilənmələri. |
| XSS | Unsafe input/DOM handling nəticəsində script injection riski. |
| CSRF | İstifadəçinin session-ından icazəsiz request göndərilməsi riski. |
