# Slide Specification Plan: Next.js App Router

## Destination & Objectives
- **Target Audience**: Undergraduate Computer Science / Software Engineering Students (Universidad Icesi)
- **Target Slide Count**: 25 slides (expanded +20% for deep pedagogical clarity)
- **Output Files**:
  - Primary Deliverable: `slides/nextjs/nextjs.pdf`
  - HTML Canvas Medium: `slides/nextjs/nextjs.html`

## Decisions & Scope Boundary
- **In-Scope Key Concepts**:
  - Evolution from Pages Router to App Router
  - React Server Components (RSC) vs Client Components (RCC)
  - Rendering strategies (SSR, CSR, SSG, ISR)
  - Directory structure & file conventions (`page`, `layout`, `loading`, `error`, `route`)
  - Nested Layouts, Templates, and Route Groups
  - Dynamic routing & `generateStaticParams`
  - Extended `fetch` API, caching modes, and on-demand revalidation
  - Server Actions (`'use server'`), forms, and progressive enhancement
  - Built-in optimizations (`next/image`, `next/font`, Metadata API)
  - Edge Middleware & Auth patterns
- **Out-of-Scope**: Legacy `getServerSideProps` / `getStaticProps` deep dives (mentioned only as historical context).

## Shared Assets Registered
- `slides/shared/server-components.png`: Mermaid architecture diagram for React Server Components.
- `slides/shared/ssr-vs-csr.png`: Mermaid sequence diagram for SSR request flow and client hydration.

## Slide-by-Slide Map (1..25)

1. **Slide 1**: Title Cover
   - Layout: `icesi.titleSlideA("Next.js App Router", "Arquitectura Moderna de Aplicaciones Web Fullstack en React <br><span class=\"slide-footer-tag\">Facultad de Ingeniería — Universidad Icesi</span>")`
2. **Slide 2**: Evolution of React Web
   - Layout: `icesi.slideFourCards("La Evolución de la Web en React", ...)`
3. **Slide 3**: Section 1 Divider
   - Layout: `icesi.sectionSlideC("1. Componentes: Server vs Client")`
4. **Slide 4**: RSC vs RCC Fundamentals
   - Layout: `icesi.slideTwoCols("Server Components (RSC) vs Client Components (RCC)", ...)`
5. **Slide 5**: RSC Execution Flow
   - Layout: `icesi.slideSidebarLeftBlue("Flujo de Ejecución de React Server Components", content, sidebarVisual)`
   - Visual: Registered shared image `../shared/server-components.png`
6. **Slide 6**: Decision Matrix RSC vs RCC
   - Layout: `icesi.slideFourCards("Matriz de Decisiones: RSC vs RCC", ...)`
7. **Slide 7**: Section 2 Divider
   - Layout: `icesi.sectionSlideEBlue("2. Estrategias de Rendering en App Router", "SSR, CSR, SSG e ISR unificados")`
8. **Slide 8**: SSR vs CSR Lifecycle Flow
   - Layout: `icesi.slideSidebarLeftPurple("Ciclo de Vida del Rendering: SSR vs CSR", content, sidebarVisual)`
   - Visual: Registered shared image `../shared/ssr-vs-csr.png`
9. **Slide 9**: SSG and ISR Strategies
   - Layout: `icesi.slideTwoCols("Generación Estática (SSG) e ISR", ...)`
10. **Slide 10**: Section 3 Divider
    - Layout: `icesi.sectionSlideC("3. Enrutamiento Basado en Archivos (App Directory)")`
11. **Slide 11**: Special File Conventions in app/
    - Layout: `icesi.slideStandard("Convención de Archivos Especiales en app/", ...)`
12. **Slide 12**: Nested Layouts vs Templates
    - Layout: `icesi.slideTwoCols("Layouts Anidados vs Templates", ...)`
13. **Slide 13**: Route Groups & Private Files
    - Layout: `icesi.slideTwoCols("Grupos de Rutas () y Archivos Privados _", ...)`
14. **Slide 14**: Dynamic Routing & generateStaticParams
    - Layout: `icesi.slideStandard("Parámetros Dinámicos y generateStaticParams", ...)`
15. **Slide 15**: Section 4 Divider
    - Layout: `icesi.sectionSlideEGreen("4. Obtención y Caché de Datos (Data Fetching)", "La extensión nativa de fetch en Next.js")`
16. **Slide 16**: Caching Modes in fetch()
    - Layout: `icesi.slideThreeCols("Niveles de Caché en Data Fetching", ...)`
17. **Slide 17**: On-Demand Revalidation
    - Layout: `icesi.slideTwoCols("Revalidación Bajo Demanda (On-Demand)", ...)`
18. **Slide 18**: Section 5 Divider
    - Layout: `icesi.sectionSlideEOrange("5. Server Actions y Mutaciones", "Eliminando las APIs boilerplate en formularios")`
19. **Slide 19**: Server Actions Paradigm
    - Layout: `icesi.slideSidebarLeftOrange("Mutación de Datos con Server Actions", content, sidebarVisual)`
    - Visual: Icon list with inline SVGs (no emojis)
20. **Slide 20**: Progressive Enhancement & Optimistic Updates
    - Layout: `icesi.slideTwoCols("Mejora Progresiva y Hook useOptimistic", ...)`
21. **Slide 21**: Section 6 Divider
    - Layout: `icesi.sectionSlideC("6. Optimización y Producción")`
22. **Slide 22**: Automatic Performance Optimizations
    - Layout: `icesi.slideFourCards("Optimizaciones Automáticas de Next.js", ...)`
23. **Slide 23**: Middleware & Edge Security
    - Layout: `icesi.slideSidebarLeftBlue("Middleware en Edge Runtime", content, sidebarVisual)`
    - Visual: Icon list with inline SVGs
24. **Slide 24**: Architecture Summary & Best Practices
    - Layout: `icesi.slideStripeTopLeft("Resumen: Buenas Prácticas en App Router", ...)`
25. **Slide 25**: Closing & Next Steps
    - Layout: `icesi.titleSlideF("¡Gracias!", "Construye tu primera app con npx create-next-app@latest<br><span class=\"slide-footer-tag\">Universidad Icesi — Departamento de TIC</span>")`
