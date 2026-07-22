# Slide Specification Plan: React (Fundamentals 2024+)

## Destination & Objectives
- **Target Audience**: Students of Systems Engineering / Web Development at Universidad Icesi.
- **Target Slide Count**: 23 slides.
- **Output Files**:
  - Primary Deliverable: `slides/react-v2/react-v2.pdf`
  - HTML Canvas Medium: `slides/react-v2/react-v2.html`
  - Asset Directory: `slides/react-v2/assets/`

## Decisions & Scope Boundary
- **In-Scope Key Concepts**:
  - Imperative vs Declarative UI paradigms.
  - Virtual DOM, Fiber Engine & Reconciliation process.
  - JSX syntax, compilation, and React 19 compiler concepts.
  - Component Tree, Props contracts, and Unidirectional Data Flow (Props Down, Events Up).
  - State management (`useState`), Immutability principles.
  - Side effects (`useEffect`), dependency arrays, cleanup functions.
  - Performance & Ref optimization (`useMemo`, `useCallback`, `useRef`).
  - Client-Side Routing with React Router v6+ (BrowserRouter, Routes, Route, Outlet, useParams, useNavigate).
  - Global State Management: Context API + custom hooks vs Lightweight Zustand Stores.
  - Production Best Practices & Architectural Refactoring Case Study (Progressive Frames).
- **Out-of-Scope**:
  - Legacy Class Components (`componentDidMount`, `setState`).
  - Redux Boilerplate (kept to modern lightweight alternatives like Zustand/Context).
  - Full-stack SSR frameworks like Next.js App Router (focused on SPA & React Core principles).

## Pedagogical Critique (Internal QA Pass)
- **Pedagogical Requirement Verification**:
  - Complex Topic 1: **Virtual DOM & Fiber Engine** -> Diagram `vdom-reconciliation.svg` in Slide 5.
  - Complex Topic 2: **Unidirectional Data Flow** -> Diagram `data-flow.svg` in Slide 9.
  - Complex Topic 3: **React Router Navigation & Outlet** -> Diagram `react-router-flow.svg` in Slide 14.
  - Complex Topic 4: **Global State Management (Context & Zustand)** -> Diagram `global-state-flow.svg` in Slide 17.
- **Self-Contained Completeness**: All 23 slides contain explicit explanations, runnable JS/JSX code snippets, or architecture diagrams. Zero external links/workshops.
- **Visual & Icon Integrity**: 100% inline SVG icons. Zero emojis.

---

## Slide-by-Slide Map (1..23)

### Slide 1: Portada Principal
- **Title**: `React Fundamentals (2024+)`
- **Subtitle**: `Arquitectura Declarativa, Componentes, Hooks y Gestión de Estado Moderno <span class="slide-footer-tag">Universidad Icesi · Depto. IESI</span>`
- **Layout Function**: `icesi.titleSlideA(...)`
- **Self-Contained Check**: ✅

### Slide 2: Evolución de las Interfaces Web
- **Title**: `Evolución Web: Paradigma Imperativo vs Declarativo`
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Content**:
  - Col 1 (Imperativo DOM Directo): Manipulación manual (`document.getElementById`), alta propensión a bugs de sincronización, acoplamiento alto entre estado y vista.
  - Col 2 (Declarativo React): Definición de la UI en función del estado (`UI = f(State)`), re-renderizado reactivo gestionado por el motor de React.
- **Self-Contained Check**: ✅

### Slide 3: Pilares Fundamentales de React
- **Title**: `Pilares Arquitectónicos de React`
- **Layout Function**: `icesi.slideFourCards(...)`
- **Content**:
  - Card 1: Componentes Encapsulados (Unidades independientes de UI con lógica y estilos).
  - Card 2: Sintaxis JSX (Extensión declarativa que combina marcado estructurado con expresiones JS).
  - Card 3: Flujo Unidireccional (Datos descienden mediante Props, eventos ascienden mediante callbacks).
  - Card 4: Virtual DOM Engine (Representación en memoria para diffing eficiente sin repintado masivo).
- **Self-Contained Check**: ✅

### Slide 4: Sección Virtual DOM
- **Title**: `Módulo 1: Virtual DOM y Fiber Engine`
- **Content**: `Representación en memoria, algoritmo de reconciliación y renderizado eficiente`
- **Layout Function**: `icesi.sectionSlideEBlue(...)`
- **Self-Contained Check**: ✅

### Slide 5: Virtual DOM & Reconciliation Engine (Diagrama SVG)
- **Title**: `Reconciliación y Fiber Tree`
- **Layout Function**: `icesi.slideSidebarLeftBlue(...)`
- **Content**: Explicación detallada del ciclo Render-Diffing-Commit.
- **Sidebar Visual**: `{ type: 'graphic', html: vdomSvg }` (SVG derivado de `vdom-reconciliation.mmd`).
- **Self-Contained Check**: ✅

### Slide 6: JSX y el Proceso de Transpilación
- **Title**: `JSX: JavaScript XML & React 18/19 Compiler`
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Content**:
  - Col 1: Sintaxis JSX escrita por el desarrollador vs salida transpilada por Babel (`jsx-runtime` / `React.createElement`).
  - Col 2: Reglas estrictas de JSX (Elemento raíz único, cierre de etiquetas, camelCase en atributos HTML como `className`, `htmlFor`).
- **Self-Contained Check**: ✅

### Slide 7: Componentes Funcionales y Props
- **Title**: `Arquitectura de Componentes y Contrato de Props`
- **Layout Function**: `icesi.slideThreeCols(...)`
- **Content**:
  - Col 1: Definición de Componentes (Funciones puras que retornan JSX).
  - Col 2: Inmutabilidad de Props (Parámetros de entrada de solo lectura).
  - Col 3: Prop Types & Desestructuración (Valores por defecto y tipado limpio).
- **Self-Contained Check**: ✅

### Slide 8: Sección Flujo de Datos
- **Title**: `Módulo 2: Flujo de Datos y Estado Local`
- **Content**: `Comunicación entre componentes, inmutabilidad y Hooks reactivos`
- **Layout Function**: `icesi.sectionSlideEOrange(...)`
- **Self-Contained Check**: ✅

### Slide 9: Flujo de Datos Unidireccional (Diagrama SVG)
- **Title**: `Flujo de Datos Unidireccional`
- **Layout Function**: `icesi.slideSidebarLeftOrange(...)`
- **Content**: Regla de oro de React: Props Down (de padre a hijo) y Events Up (callbacks ejecutados en el padre).
- **Sidebar Visual**: `{ type: 'graphic', html: dataFlowSvg }` (SVG derivado de `data-flow.mmd`).
- **Self-Contained Check**: ✅

### Slide 10: Estado Local con useState e Inmutabilidad
- **Title**: `Gestión de Estado Local: useState & Inmutabilidad`
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Content**:
  - Col 1: `useState` hook, sintaxis de desestructuración `[state, setState]`, función actualizadora funcional `setState(prev => ...)`.
  - Col 2: Inmutabilidad estricta en Arrays y Objetos (`spread operator`, `map`, `filter`). Por qué nunca mutar `state.push()`.
- **Self-Contained Check**: ✅

### Slide 11: Ciclo de Vida y useEffect
- **Title**: `Efectos Secundarios con useEffect`
- **Layout Function**: `icesi.slideFourCards(...)`
- **Content**:
  - Card 1: Fases del Efecto (Mount, Update, Unmount).
  - Card 2: Matriz de Dependencias `[]` (Sin array, array vacío, array con dependencias).
  - Card 3: Cleanup Function (Cancelación de suscripciones, timers y sockets).
  - Card 4: Reglas de Hooks (Llamada solo en nivel superior, nunca dentro de `if` o bucles).
- **Self-Contained Check**: ✅

### Slide 12: Hooks de Rendimiento y Referencias
- **Title**: `Optimización: useMemo, useCallback y useRef`
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Content**:
  - Col 1: `useMemo` (memoización de valores calculados costosos) y `useCallback` (memoización de referencias de funciones).
  - Col 2: `useRef` (persistencia de valores sin re-renderizado y acceso directo a elementos del DOM real).
- **Self-Contained Check**: ✅

### Slide 13: Sección React Router
- **Title**: `Módulo 3: Enrutamiento SPA con React Router v6+`
- **Content**: `Navegación del lado del cliente, rutas anidadas y layouts compartidos`
- **Layout Function**: `icesi.sectionSlideEYellow(...)`
- **Self-Contained Check**: ✅

### Slide 14: Arquitectura de React Router (Diagrama SVG)
- **Title**: `Enrutamiento Cliente y Composición de Rutas`
- **Layout Function**: `icesi.slideSidebarLeftPurple(...)`
- **Content**: Funcionamiento de `BrowserRouter`, coincidencia de URLs y renderizado dinámico con `<Outlet />`.
- **Sidebar Visual**: `{ type: 'graphic', html: routerSvg }` (SVG derivado de `react-router-flow.mmd`).
- **Self-Contained Check**: ✅

### Slide 15: Rutas Anidadas y Hooks de Navegación
- **Title**: `Rutas Anidadas, Parámetros y Navegación Programática`
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Content**:
  - Col 1: Estructura de Rutas Anidadas (`/dashboard/analytics`) y la etiqueta `<Outlet />`.
  - Col 2: Hooks de React Router: `useParams()` para extraer IDs URL y `useNavigate()` para redirecciones por software.
- **Self-Contained Check**: ✅

### Slide 16: Sección Estado Global
- **Title**: `Módulo 4: Arquitectura de Estado Global`
- **Content**: `Evitando Prop Drilling: Context API vs Zustand Store`
- **Layout Function**: `icesi.sectionSlideEGreen(...)`
- **Self-Contained Check**: ✅

### Slide 17: Context API vs Zustand (Diagrama SVG)
- **Title**: `Estrategias de Estado Global`
- **Layout Function**: `icesi.slideSidebarLeftBlue(...)`
- **Content**: Comparación entre la inyección de contexto nativa y el patrón de tienda desacoplada con Zustand.
- **Sidebar Visual**: `{ type: 'graphic', html: globalStateSvg }` (SVG derivado de `global-state-flow.mmd`).
- **Self-Contained Check**: ✅

### Slide 18: Context API y Custom Provider Pattern
- **Title**: `Implementación de Context API & Custom Hooks`
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Content**:
  - Col 1: Creación de Contexto (`createContext`), Provider personalizado con estado local encapsulado.
  - Col 2: Exposición segura con un Custom Hook (ej. `useAuth()`) con validación de envoltorio Provider.
- **Self-Contained Check**: ✅

### Slide 19: Zustand: Estado Global Ligero sin Boilerplate
- **Title**: `Estado Global Moderno con Zustand`
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Content**:
  - Col 1: Definición de Store (`create()`), acciones inline, mutaciones atómicas sin Providers ni reducers complejos.
  - Col 2: Selector Subscriptions (renderizado ultra-optimizado suscribiéndose solo a rebanadas del estado).
- **Self-Contained Check**: ✅

### Slide 20: Buenas Prácticas y Reglas de Producción
- **Title**: `Patrones y Buenas Prácticas 2024+`
- **Layout Function**: `icesi.slideFourCards(...)`
- **Content**:
  - Card 1: Cohesión de Componentes (Ficheros pequeños, Single Responsibility Principle).
  - Card 2: Custom Hooks Abstraction (Separar la lógica de negocio del renderizado JSX).
  - Card 3: Derivar Estado (Evitar duplicar variables calculables en `useState`).
  - Card 4: Formateo y Clean Code (Nombres semánticos, componentes puros sin side-effects en render).
- **Self-Contained Check**: ✅

### Slide 21: Caso de Estudio: Refactorización (Frame 1/2)
- **Title**: `Caso de Estudio: Refactorización a React Limpio (1/2)`
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Content**:
  - Col 1: Antipatrón Monolítico (Componente gigante con `fetch`, estado mutante, props ineficientes).
  - Col 2: Lista de Errores detectados en la auditoría de código.
- **Self-Contained Check**: ✅

### Slide 22: Caso de Estudio: Refactorización (Frame 2/2)
- **Title**: `Caso de Estudio: Refactorización a React Limpio (2/2)`
- **Layout Function**: `icesi.slideTwoCols(...)`
- **Content**:
  - Col 1: Solución Modular (Custom Hook `useProducts`, subcomponentes atómicos `ProductCard`, `ProductList`).
  - Col 2: Ventajas obtenidas: Testabilidad unitaria, reusabilidad y cero re-renders innecesarios.
- **Self-Contained Check**: ✅

### Slide 23: Cierre y Resumen
- **Title**: `Resumen y Conclusiones del Curso`
- **Layout Function**: `icesi.sectionSlideC(...)`
- **Content**: `React Fundamentals (2024+) — Universidad Icesi`
- **Self-Contained Check**: ✅

---

## Handoff & Execution
1. Create `.mmd` files in `slides/react-v2/assets/`.
2. Run `mermaid-cli` to build static transparent `.svg` files.
3. Generate `slides/react-v2/react-v2.html` incorporating all content, SVG inline graphics, and `dist/main.js` catalog function calls.
4. Export presentation to `slides/react-v2/react-v2.pdf` using `decktape`.
