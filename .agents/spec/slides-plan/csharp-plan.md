# Slide Specification Plan: C# Fundamentals (.NET Core / .NET 8)

## Destination & Objectives
- **Target Audience**: Undergraduate Students of Computer Science, Systems Engineering, and Software Architecture at Universidad Icesi.
- **Target Slide Count**: 25 slides.
- **Output Files**:
  - Primary Deliverable: `slides/csharp/csharp.pdf`
  - HTML Canvas Medium: `slides/csharp/csharp.html`

## Decisions & Scope Boundary
- **In-Scope Key Concepts**:
  - .NET 8 Ecosystem & CLR Execution Model (Roslyn -> CIL -> CLR JIT -> Native Code).
  - Type System: Value Types vs Reference Types, Stack vs Heap, `struct`, `class`, `record`.
  - Nullable Reference Types (`string?`) and Null-safety operators (`?.`, `??`, `!`).
  - Memory Management & Garbage Collection (Generations Gen0/Gen1/Gen2/LOH, `IDisposable`, `using`).
  - Modern C# Syntactic Features (Top-level statements, Primary Constructors, Pattern Matching, Collection expressions `[1, 2, 3]`).
  - LINQ Fundamentals (Method syntax, deferred execution, `Where`, `Select`, `GroupBy`).
  - Asynchronous Programming (`async`, `await`, `Task`, `Task<T>`, non-blocking I/O).
  - Progressive Code Frames (3-step building of an async C# processing feature).
- **Out-of-Scope**: Legacy .NET Framework (pre-Core), WinForms/WPF, advanced unsafe code pointers, deep IL bytecode manipulation, external workshops/labs.

## Pedagogical Critique (Internal QA Pass)
- **Self-Contained Evaluation**: All 25 slides are 100% self-contained with code snippets, diagrams, or card grids. Zero redirects to external labs/workshops.
- **Visual Diagram Strategy**: Raw SVG diagram created at `slides/shared/dotnet-clr-execution-model.svg` illustrating C# Source -> Roslyn Compiler -> CIL / Bytecode -> CLR JIT -> Native Code. Registered in `slides/shared/registry.json`.
- **Icon Strategy**: Zero emojis. All bullet points (`<ul>`, `<ol>`, `<li>`) strictly use `${icesi.icons.check}`, `${icesi.icons.cpu}`, `${icesi.icons.code}`, `${icesi.icons.gear}`, `${icesi.icons.memory}`, `${icesi.icons.shield}`, `${icesi.icons.terminal}`, etc., from `dist/main.js`.
- **Styling Strategy**: Native CSS classes only (`badge-blue`, `code-box`, `img-container`, `icon-list`, `text-blue`, etc.). Zero inline `<style>` tags inserted in HTML.
- **Chunking & Density**: Max 2 short paragraphs or clean lists/cards per slide. Progressive code evolution split across 3 distinct frame slides.

---

## Slide-by-Slide Map (1..25)

### Slide 1: Cover
- **Title**: `C# Fundamentals & .NET 8`
- **Subtitle**: `Lenguaje Moderno, CLR & Desarrollo Plataforma Unificada`
- **Layout Function**: `icesi.titleSlideA('C# Fundamentals & .NET 8', 'Lenguaje Moderno, CLR & Desarrollo Plataforma Unificada <br><span class="slide-footer-tag">Facultad de Ingeniería — Universidad Icesi</span>')`
- **Self-Contained Check**: ✅

### Slide 2: Section 1 Divider
- **Title**: `01. Plataforma & Modelo de Ejecución`
- **Layout Function**: `icesi.sectionSlideC('01. Plataforma & Modelo de Ejecución')`
- **Self-Contained Check**: ✅

### Slide 3: El Ecosistema C# / .NET 8
- **Title**: `El Ecosistema C# / .NET 8`
- **Layout Function**: `icesi.slideSidebarLeftBlue(title, content, sidebarVisual)`
- **Content**: Overview of C# as a modern, multi-paradigm language running on .NET 8 runtime.
- **Sidebar Visual**: `{ type: 'icons', items: [...] }` with inline SVGs for Multi-platform, High Performance, Type Safe, Open Source.
- **Self-Contained Check**: ✅

### Slide 4: Evolución del Runtime de .NET
- **Title**: `Evolución del Runtime de .NET`
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Col 1**: Legacy .NET Framework (Windows-only, monolithic).
- **Col 2**: Modern .NET 8 (Cross-platform, JIT optimized, Native AOT).
- **Self-Contained Check**: ✅

### Slide 5: Diagrama CLR Execution Model
- **Title**: `.NET Execution Model (CLR & JIT)`
- **Layout Function**: `icesi.sectionSlideEBlue(title, content)`
- **Content**: `<div class="img-container"><img src="../../slides/shared/dotnet-clr-execution-model.svg" style="max-height:420px; width:auto;" alt="CLR Execution Model"></div>`
- **Self-Contained Check**: ✅

### Slide 6: Section 2 Divider
- **Title**: `02. Sistema de Tipos & Memoria`
- **Layout Function**: `icesi.sectionSlideC('02. Sistema de Tipos & Memoria')`
- **Self-Contained Check**: ✅

### Slide 7: Value Types vs Reference Types
- **Title**: `Value Types vs Reference Types`
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Col 1**: Value Types (Stack allocation, copy-by-value, struct/enum).
- **Col 2**: Reference Types (Heap allocation, copy-by-reference, class/record/interface).
- **Self-Contained Check**: ✅

### Slide 8: Structs, Classes & Records
- **Title**: `Estructuración de Datos`
- **Layout Function**: `icesi.slideThreeCols(title, col1, col2, col3)`
- **Col 1**: `class` (mutable by default, reference identity).
- **Col 2**: `struct` (lightweight value type, stack allocated).
- **Col 3**: `record` (immutable data container, value-based equality, `with` expressions).
- **Self-Contained Check**: ✅

### Slide 9: Seguridad de Nulos (NRT)
- **Title**: `Seguridad de Nulos (Nullable Reference Types)`
- **Layout Function**: `icesi.slideSidebarLeftOrange(title, content, sidebarVisual)`
- **Content**: Eliminating NullReferenceException with NRT enabled by default in .NET 8.
- **Sidebar Visual**: `{ type: 'icons', items: [...] }` highlighting Null-Safety, Compiler Warning, Safe Navigation `?.`, Null-Coalescing `??`.
- **Self-Contained Check**: ✅

### Slide 10: Memory Management & Garbage Collection
- **Title**: `Garbage Collection (GC) & Recursos`
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Col 1**: Generational GC (Gen 0, Gen 1, Gen 2, LOH). Automatic heap collection.
- **Col 2**: Deterministic cleanup with `IDisposable` and `using var` statement.
- **Self-Contained Check**: ✅

### Slide 11: Section 3 Divider
- **Title**: `03. Sintaxis Moderna & C# 12`
- **Layout Function**: `icesi.sectionSlideC('03. Sintaxis Moderna & C# 12')`
- **Self-Contained Check**: ✅

### Slide 12: Matriz de Innovaciones Sintácticas
- **Title**: `Innovaciones Sintácticas C# 10-12`
- **Layout Function**: `icesi.slideFourCards(title, c1t, c1b, c2t, c2b, c3t, c3b, c4t, c4b)`
- **Card 1**: `Top-Level Statements` — Boilerplate-free execution entry points.
- **Card 2**: `Primary Constructors` — Concise inline parameter declarations for classes/structs.
- **Card 3**: `Pattern Matching` — Switch expressions and pattern guards.
- **Card 4**: `Collection Expressions` — Unified syntax `[1, 2, 3]` for collections and spans.
- **Self-Contained Check**: ✅

### Slide 13: Primary Constructors & Top-Level Statements
- **Title**: `Sintaxis Concisa & Constructors`
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Col 1**: Concepts behind Primary Constructors and Top-Level Statements.
- **Col 2**: Code snippet in `code-box`.
- **Self-Contained Check**: ✅

### Slide 14: Pattern Matching & Switch Expressions
- **Title**: `Pattern Matching & Switch Expressions`
- **Layout Function**: `icesi.slideSidebarLeftPurple(title, content, sidebarVisual)`
- **Content**: Expressive pattern matching using property patterns, positional patterns, and switch expressions.
- **Sidebar Visual**: `{ type: 'icons', items: [...] }` detailing Type Guards, Property Pattern, Relational Pattern, Switch Expressions.
- **Self-Contained Check**: ✅

### Slide 15: Consultas Declarativas con LINQ
- **Title**: `Consultas Declarativas con LINQ`
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Col 1**: LINQ architecture over `IEnumerable<T>`. Deferred execution benefits.
- **Col 2**: Code snippet showcasing `Where`, `Select`, `OrderBy`, and `GroupBy`.
- **Self-Contained Check**: ✅

### Slide 16: Section 4 Divider
- **Title**: `04. Programación Asíncrona`
- **Layout Function**: `icesi.sectionSlideC('04. Programación Asíncrona')`
- **Self-Contained Check**: ✅

### Slide 17: Modelo Asíncrono no Bloqueante
- **Title**: `Modelo Asíncrono en .NET`
- **Layout Function**: `icesi.slideSidebarLeftBlue(title, content, sidebarVisual)`
- **Content**: Non-blocking I/O execution model to maximize throughput in server and UI apps.
- **Sidebar Visual**: `{ type: 'icons', items: [...] }` showing ThreadPool Efficiency, Non-blocking I/O, Task State Machine, High Scalability.
- **Self-Contained Check**: ✅

### Slide 18: Primitivas `Task` y `await`
- **Title**: `Primitivas `Task` y `await``
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Col 1**: Conceptual breakdown of `Task`, `Task<T>`, `async`, `await` keyword mechanics, and exception propagation.
- **Col 2**: Code snippet showing `async Task<User>` fetch with exception handling.
- **Self-Contained Check**: ✅

### Slide 19: Section 5 Divider
- **Title**: `05. Construcción Progresiva`
- **Layout Function**: `icesi.sectionSlideC('05. Construcción Progresiva')`
- **Self-Contained Check**: ✅

### Slide 20: Frame 1 — Modelo de Dominio con Records
- **Title**: `Construcción Progresiva: Paso 1`
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Col 1**: Building immutable domain entities using `record` and Nullable Reference Types.
- **Col 2**: Code Frame 1 in `code-box`.
- **Self-Contained Check**: ✅

### Slide 21: Frame 2 — Procesamiento Declarativo LINQ
- **Title**: `Construcción Progresiva: Paso 2`
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Col 1**: Adding functional LINQ query processing and Pattern Matching filters.
- **Col 2**: Code Frame 2 in `code-box`.
- **Self-Contained Check**: ✅

### Slide 22: Frame 3 — Integración Asíncrona Completa
- **Title**: `Construcción Progresiva: Paso 3`
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Col 1**: Wrapping in an async pipeline with `HttpClient`, `CancellationToken`, and deterministic resource disposal (`using var`).
- **Col 2**: Code Frame 3 in `code-box`.
- **Self-Contained Check**: ✅

### Slide 23: Section 6 Divider
- **Title**: `06. Buenas Prácticas en .NET 8`
- **Layout Function**: `icesi.sectionSlideC('06. Buenas Prácticas en .NET 8')`
- **Self-Contained Check**: ✅

### Slide 24: Buenas Prácticas & Performance
- **Title**: `Buenas Prácticas en C# / .NET 8`
- **Layout Function**: `icesi.slideFourCards(title, c1t, c1b, c2t, c2b, c3t, c3b, c4t, c4b)`
- **Card 1**: `Immutability First` — Prefer `record`, `readonly struct`, and `init` properties.
- **Card 2**: `Async All the Way` — Never use `.Result` or `.Wait()`. Always await tasks.
- **Card 3**: `Resource Cleanup` — Always use `using var` for `IDisposable` resources.
- **Card 4**: `Memory & Allocations` — Leverage `Span<T>` and `Memory<T>` for zero-allocation parsing.
- **Self-Contained Check**: ✅

### Slide 25: Resumen & Cierre
- **Title**: `¡Gracias! ¿Preguntas?`
- **Layout Function**: `icesi.sectionSlideEBlue(title, content)`
- **Content**: Summary recap of key C# / .NET 8 fundamental concepts.
- **Self-Contained Check**: ✅
