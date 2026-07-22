# Slide Specification Plan: Modern Angular (Angular 18/19)

## Destination & Objectives
- **Target Audience**: Students of Computer Science, Systems Engineering, and Web Software Architecture at Universidad Icesi.
- **Target Slide Count**: 27 slides (including 3 progressive logical frames and 3 static Mermaid SVG diagrams).
- **Output Files**:
  - Primary Deliverable: `slides/angular/angular.pdf`
  - HTML Canvas Medium: `slides/angular/angular.html`

## Decisions & Scope Boundary
- **In-Scope Key Concepts**:
  - Architecture of Angular Applications (Component Tree, Dependency Injection, Services, Router).
  - Standalone Components Architecture (`standalone: true`, `imports`).
  - Modern Built-in Control Flow (`@if`, `@else`, `@for`, `@switch`).
  - Fine-grained Reactivity with **Signals** (`signal()`, `computed()`, `effect()`).
  - Dependency Injection (DI) & Functional Injection with `inject()`.
  - Service-with-Signals State Pattern & RxJS Interoperability (`toSignal`, `toObservable`).
  - Angular Router & Functional Route Guards.
  - Typed Reactive Forms (`FormGroup`, `FormControl`, `Validators`).
  - Step-by-Step Progressive Logical Frames: Building a Live Angular Feature.
- **Out-of-Scope**: Legacy `NgModule` boilerplate, Angular 2-15 legacy patterns, SSR/Hydration internal compiler primitives (mentioned only in best practices context), external labs/workshops.

## Pedagogical Critique (Internal QA Pass)
- **Self-Contained Evaluation**: All slides are 100% self-contained with explicit code snippets, diagrams, or card matrices. No slides redirect to external labs or workshops.
- **Visual Diagram Strategy**: Mermaid diagrams are compiled upfront to static `.svg` vector files (`architecture.svg`, `signals-flow.svg`, `di-tree.svg`) via `@mermaid-js/mermaid-cli` with `-b transparent` to ensure crisp rendering and PDF export compatibility.
- **Icon Strategy**: Zero emojis. All icons are embedded semantic inline SVGs conforming to `slides-iconification`.
- **Progressive Reveal**: Logical frames (Slides 24, 25, 26) are implemented as full duplicated slides with progressive code features added per frame.

---

## Slide-by-Slide Map (1..27)

### Slide 1: Cover
- **Title**: `Angular: Framework Empresarial Moderno`
- **Subtitle**: `Arquitectura Web, Reactividad con Signals & Standalone Components`
- **Layout Function**: `icesi.titleSlideA('Angular: Framework Empresarial Moderno', 'Arquitectura Web, Reactividad con Signals & Standalone Components <br><span class="slide-footer-tag">Facultad de Ingeniería — Universidad Icesi</span>')`
- **Self-Contained Check**: ✅

### Slide 2: Section 1 Divider
- **Title**: `01. Fundamentos & Arquitectura Web`
- **Layout Function**: `icesi.sectionSlideC('01. Fundamentos & Arquitectura Web')`
- **Self-Contained Check**: ✅

### Slide 3: ¿Qué es Angular?
- **Layout Function**: `icesi.slideSidebarLeftBlue(title, content, sidebarVisual)`
- **Title**: `¿Qué es Angular?`
- **Content**: Overview of Angular as an enterprise-grade TypeScript web application framework. Batteries-included approach: Router, HTTP Client, Forms, Signals, Testing.
- **Sidebar Visual**: `{ type: 'icons', items: [...] }` with inline SVGs for TypeScript, Reactive Core, Enterprise Architecture, Modular Tooling.
- **Self-Contained Check**: ✅

### Slide 4: Evolución & Paradigma Angular
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Title**: `Evolución del Paradigma Angular`
- **Col 1**: Legacy Angular (v2-v15): `NgModules`, `Zone.js` change detection overhead, heavy decorators, RxJS mandatory everywhere.
- **Col 2**: Modern Angular (v17-v19+): Standalone Architecture (`standalone: true`), Fine-grained Signals, Built-in `@if`/`@for` Control Flow, Functional `inject()`.
- **Self-Contained Check**: ✅

### Slide 5: Diagrama de Arquitectura Global
- **Layout Function**: `icesi.sectionSlideEBlue(title, content)`
- **Title**: `Arquitectura Global de una Aplicación Angular`
- **Content**: Embedded static SVG compiled from `slides/angular/assets/architecture.mmd` showing user interaction, Standalone Components, Signal State, Service DI, and HTTP Backend.
- **Self-Contained Check**: ✅

### Slide 6: Section 2 Divider
- **Title**: `02. Standalone Components & Templating`
- **Layout Function**: `icesi.sectionSlideC('02. Standalone Components & Templating')`
- **Self-Contained Check**: ✅

### Slide 7: Anatomía de un Standalone Component
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Title**: `Anatomía de un Standalone Component`
- **Col 1**: Explanation of `@Component({ standalone: true, selector, imports, templateUrl, styleUrl })`.
- **Col 2**: Complete TypeScript code snippet of `UserProfileComponent` with `imports: [CommonModule, UserBadgeComponent]`.
- **Self-Contained Check**: ✅

### Slide 8: Nuevo Control Flow (`@if`, `@for`, `@switch`)
- **Layout Function**: `icesi.slideSidebarLeftOrange(title, content, sidebarVisual)`
- **Title**: `Nuevo Control Flow Syntax`
- **Content**: Comparison between legacy `*ngIf` / `*ngFor` (requiring `NgIf` module imports) vs native compiler syntax `@if (user) { ... } @else { ... }` and `@for (item of items; track item.id) { ... } @empty { ... }`.
- **Sidebar Visual**: `{ type: 'icons', items: [...] }` highlighting Performance, Type Narrowing, Zero Imports, Track Requirement.
- **Self-Contained Check**: ✅

### Slide 9: Matrix de Data Binding
- **Layout Function**: `icesi.slideFourCards(title, c1t, c1b, c2t, c2b, c3t, c3b, c4t, c4b)`
- **Title**: `Matriz de Data Binding en Angular`
- **Card 1**: Interpolation `{{ expr }}` — DOM string render.
- **Card 2**: Property Binding `[property]="value"` — Component to DOM property flow.
- **Card 3**: Event Binding `(event)="handler($event)"` — DOM event to Component method.
- **Card 4**: Two-Way Binding `[(ngModel)]="state"` — Synchronous bi-directional data channel.
- **Self-Contained Check**: ✅

### Slide 10: Section 3 Divider
- **Title**: `03. Reactividad Moderna: Signals`
- **Layout Function**: `icesi.sectionSlideC('03. Reactividad Moderna: Signals')`
- **Self-Contained Check**: ✅

### Slide 11: ¿Qué son los Signals?
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Title**: `Concepto & Primitivas de Signals`
- **Col 1**: What is a Signal? A getter wrapper holding a reactive value that notifies consumers when mutated. Eliminates Zone.js dirty checking.
- **Col 2**: The 3 Primitives: `signal(val)` (writable), `computed(() => fn)` (read-only derived state), `effect(() => fn)` (side effects execution).
- **Self-Contained Check**: ✅

### Slide 12: Diagrama de Flujo de Datos Reactivo
- **Layout Function**: `icesi.sectionSlideEGreen(title, content)`
- **Title**: `Flujo de Reactividad Fina con Signals`
- **Content**: Embedded static SVG compiled from `slides/angular/assets/signals-flow.mmd` illustrating Signal update propagation to Computed Signals and UI DOM updates without re-rendering parent trees.
- **Self-Contained Check**: ✅

### Slide 13: Código Práctico: Signals en Acción
- **Layout Function**: `icesi.slideStandard(title, content)`
- **Title**: `Código Práctico: State Management con Signals`
- **Content**: Real TypeScript code demonstrating `count = signal(0)`, `doubleCount = computed(() => this.count() * 2)`, `updateCount()`, and `effect()`.
- **Self-Contained Check**: ✅

### Slide 14: Section 4 Divider
- **Title**: `04. Dependency Injection (DI) & Servicios`
- **Layout Function**: `icesi.sectionSlideC('04. Dependency Injection & Servicios')`
- **Self-Contained Check**: ✅

### Slide 15: El Motor de Inyección de Dependencias
- **Layout Function**: `icesi.slideSidebarLeftPurple(title, content, sidebarVisual)`
- **Title**: `Motor Hierárquico de Inyección (DI)`
- **Content**: Explanation of `@Injectable({ providedIn: 'root' })`, Singleton instances, and component-level providers.
- **Sidebar Visual**: `{ type: 'graphic', html: [embedded static SVG from di-tree.mmd] }`.
- **Self-Contained Check**: ✅

### Slide 16: Constructor DI vs. Función `inject()`
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Title**: `Inyección Tradicional vs. `inject()``
- **Col 1**: Legacy Constructor Injection: `constructor(private userService: UserService, private http: HttpClient) {}`.
- **Col 2**: Modern Functional Injection: `private userService = inject(UserService); private http = inject(HttpClient);`. Enables functional guards, custom helpers, and cleaner composition.
- **Self-Contained Check**: ✅

### Slide 17: Section 5 Divider
- **Title**: `05. Estado, Servicios & RxJS Integration`
- **Layout Function**: `icesi.sectionSlideC('05. Estado, Servicios & RxJS Integration')`
- **Self-Contained Check**: ✅

### Slide 18: Patrón Service-with-Signals
- **Layout Function**: `icesi.slideFourCards(title, c1t, c1b, c2t, c2b, c3t, c3b, c4t, c4b)`
- **Title**: `Patrón Arquitectónico: Service-with-Signals`
- **Card 1**: Private Writable Signal `#state = signal<State>(initialState)`.
- **Card 2**: Exposed Readonly Signals `user = computed(() => this.#state().user)`.
- **Card 3**: Action Methods `loadUser(id)` updating state via `.update()`.
- **Card 4**: Encapsulation & Testability without external Redux libraries.
- **Self-Contained Check**: ✅

### Slide 19: RxJS + Signals Interoperabilidad
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Title**: `Interoperabilidad: RxJS & Signals`
- **Col 1**: When to use RxJS: Asynchronous event streams, HTTP retries, WebSockets, debouncing inputs (`pipe(debounceTime(300))`).
- **Col 2**: RxJS Interop helpers: `toSignal(http.get<User>(url))` convert Observables to Signals safely, and `toObservable(signal)` convert Signals to Observables.
- **Self-Contained Check**: ✅

### Slide 20: Section 6 Divider
- **Title**: `06. Routing & Formularios`
- **Layout Function**: `icesi.sectionSlideC('06. Routing & Formularios')`
- **Self-Contained Check**: ✅

### Slide 21: Angular Router & Functional Guards
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Title**: `Router Angular & Functional Guards`
- **Col 1**: Route Configuration: `provideRouter(routes)` with lazy loading `loadComponent: () => import(...)`.
- **Col 2**: Functional Guard: `export const authGuard: CanActivateFn = (route, state) => inject(AuthService).isLoggedIn() ? true : inject(Router).createUrlTree(['/login']);`.
- **Self-Contained Check**: ✅

### Slide 22: Formularios Reactivos Type-Safe
- **Layout Function**: `icesi.slideTwoCols(title, col1, col2)`
- **Title**: `Formularios Reactivos Type-Safe`
- **Col 1**: `FormBuilder` and strongly typed `FormGroup<{ email: FormControl<string> }>`.
- **Col 2**: Code example showing form creation, validation status, `Validators.required`, `Validators.email`, and form submission handling.
- **Self-Contained Check**: ✅

### Slide 23: Section 7 Divider
- **Title**: `07. Paso a Paso: Evolución de un Componente`
- **Layout Function**: `icesi.sectionSlideC('07. Paso a Paso: Evolución de un Componente')`
- **Self-Contained Check**: ✅

### Slide 24: Frame 1 — Componente Básico sin Estado
- **Layout Function**: `icesi.slideSidebarLeftOrange(title, content, sidebarVisual)`
- **Title**: `Paso 1: Estructura del Componente`
- **Content**: Standalone Component template & static properties. Initial code shell.
- **Sidebar Visual**: `{ type: 'icons', items: [...] }` marking Step 1: Base Template & Component Metadata.
- **Self-Contained Check**: ✅

### Slide 25: Frame 2 — Integrando Signals & Interacción
- **Layout Function**: `icesi.slideSidebarLeftOrange(title, content, sidebarVisual)`
- **Title**: `Paso 2: Añadiendo Signals & Estado`
- **Content**: Expanding the component code with `signal()`, `computed()`, and `@if` template interaction.
- **Sidebar Visual**: `{ type: 'icons', items: [...] }` marking Step 2: Reactive State & Event Handlers.
- **Self-Contained Check**: ✅

### Slide 26: Frame 3 — Conexión con Servicio DI & HTTP
- **Layout Function**: `icesi.slideSidebarLeftOrange(title, content, sidebarVisual)`
- **Title**: `Paso 3: Integración de Servicio DI & Async`
- **Content**: Full component complete code: injecting `CourseService` via `inject()`, fetching data with `toSignal()`, rendering `@for` loop with track.
- **Sidebar Visual**: `{ type: 'icons', items: [...] }` marking Step 3: Full DI Service & Async Data Pipeline.
- **Self-Contained Check**: ✅

### Slide 27: Buenas Prácticas & Ecosistema
- **Layout Function**: `icesi.slideFourCards(title, c1t, c1b, c2t, c2b, c3t, c3b, c4t, c4b)`
- **Title**: `Buenas Prácticas en Angular Moderno`
- **Card 1**: Standalone First — Zero `NgModule` overhead.
- **Card 2**: Signals First — Fine-grained reactivity over global Zone.js.
- **Card 3**: Functional Injection — Use `inject()` for guards, interceptors, and components.
- **Card 4**: Strict Type Checking — Enable strict template checking & strict null checks.
- **Self-Contained Check**: ✅

---

## Handoff & Execution
1. Create asset directory `slides/angular/assets/`.
2. Generate Mermaid `.mmd` files for Architecture (`architecture.mmd`), Signals Flow (`signals-flow.mmd`), and DI Tree (`di-tree.mmd`).
3. Compile `.mmd` files to transparent static `.svg` files via `@mermaid-js/mermaid-cli`.
4. Assemble presentation HTML in `slides/angular/angular.html`.
5. Export PDF deck to `slides/angular/angular.pdf` via Decktape.
