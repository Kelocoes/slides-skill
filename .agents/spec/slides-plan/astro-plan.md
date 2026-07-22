# Slide Specification Plan: Astro Framework

## Destination & Objectives
- **Target Audience**: Undergraduate Computer Science / Software Engineering Students (Universidad Icesi)
- **Target Slide Count**: 32 slides
- **Output Files**:
  - Primary Deliverable: `slides/astro/astro.pdf`
  - HTML Canvas Medium: `slides/astro/astro.html`

## Decisions & Scope Boundary
- **In-Scope Key Concepts**:
  - Modern Web performance problems & JS Bloat
  - Islands Architecture & Zero JS by default
  - Client directives (`client:load`, `client:idle`, `client:visible`, `client:media`, `client:only`)
  - `.astro` Component Anatomy (Frontmatter script, HTML template, Scoped CSS)
  - UI Interoperability (React, Vue, Svelte, Solid in one project)
  - File-based routing, dynamic routes (`getStaticPaths`), API endpoints
  - View Transitions API (`<ClientRouter />`)
  - Content Collections & Zod schema type-safety
  - Rendering Modes (SSG, SSR, Hybrid)
  - Asset optimization (`<Image />`), Middleware (`src/middleware.ts`)
  - Strategic comparison (Astro vs Next.js vs Vite SPA)
- **Out-of-Scope**:
  - Complex custom Vite plugin internals
  - Legacy Astro v1/v2 API versions

## Shared Assets & Visual Architecture
- **Shared Assets Registry**:
  - `slides/shared/islands-architecture.svg` (Compiled via `mermaid-cli`, registered in `registry.json`)
- **Topic Assets (`slides/astro/assets/`)**:
  - `hydration-comparison.svg`
  - `astro-component-anatomy.svg`
  - `content-collections-pipeline.svg`
  - `rendering-modes.svg`
  - `astro-routing-flow.svg`
  - `framework-integrations.svg`

## Pedagogical Critique (Internal QA Pass)
- **Self-contained completeness**: Every slide provides actionable explanations, standalone code blocks, or SVG visual diagrams. Zero external lab/workshop redirects.
- **Visual anchors**: All 6 major technical modules feature dedicated static SVG graphics or custom icon grids.
- **Density control**: Concepts with multiple directives (`client:*`) use progressive frames across separate slides to maintain clean readability.

---

## Slide-by-Slide Map (1..32)

### Module 1: Introducción y Contexto del Desarrollo Web Moderno
- **Slide 1**: Title Cover
  - **Layout**: `icesi.titleSlideA("Astro Framework: Arquitectura Web Moderna", "Desarrollo Web de Alto Rendimiento y Zero-JS Core <span class=\"slide-footer-tag\">Facultad de Ingeniería — Universidad Icesi</span>")`
- **Slide 2**: Module 1 Divider
  - **Layout**: `icesi.sectionSlideEBlue("Módulo 1: El Dilema Web Moderno", "<small style=\"font-size:0.5em;\">Evolución de las SPAs y la sobrecarga de JavaScript</small>")`
- **Slide 3**: El Problema del JS Bloat
  - **Layout**: `icesi.slideSidebarLeftBlue("El Problema del JS Bloat en la Web Moderna", content, sidebarVisual)`
  - **Visual**: Icon list sidebar (4 items: JS masivo al cliente, FCP/TTI lentos, Rehidratación pesada, Penalización SEO).
- **Slide 4**: SPAs vs MPAs Tradicionales
  - **Layout**: `icesi.slideTwoCols("SPAs Monolíticas vs MPAs Tradicionales", col1, col2)`
- **Slide 5**: ¿Qué es Astro Framework?
  - **Layout**: `icesi.slideStandard("¿Qué es Astro Framework?", content)`
  - **Visual**: Includes SVG `slides/astro/assets/hydration-comparison.svg`.

### Module 2: Arquitectura de Islas & Directivas de Cliente
- **Slide 6**: Module 2 Divider
  - **Layout**: `icesi.sectionSlideEGreen("Módulo 2: Islands Architecture", "<small style=\"font-size:0.5em;\">Aislamiento de interactividad y Zero JS por defecto</small>")`
- **Slide 7**: Concepto de Islas de Interactividad
  - **Layout**: `icesi.slideStandard("Islas de Interactividad (Jason Miller / Astro)", content)`
  - **Visual**: Includes SVG `slides/shared/islands-architecture.svg`.
- **Slide 8**: Ventajas Clave de la Arquitectura de Islas
  - **Layout**: `icesi.slideFourCards("Ventajas Clave de las Islas", c1t, c1b, c2t, c2b, c3t, c3b, c4t, c4b)`
- **Slide 9**: Section Divider - Directivas de Cliente
  - **Layout**: `icesi.sectionSlideEOrange("Directivas de Cliente (client:*)", "<small style=\"font-size:0.5em;\">Estrategias de hidratación bajo demanda</small>")`
- **Slide 10**: Frame 1 - Carga Inmediata e Inactiva (`client:load`, `client:idle`)
  - **Layout**: `icesi.slideTwoCols("Hidratación Bajo Demanda (Parte 1)", col1, col2)`
- **Slide 11**: Frame 2 - Visibilidad y Media Queries (`client:visible`, `client:media`)
  - **Layout**: `icesi.slideTwoCols("Hidratación Bajo Demanda (Parte 2)", col1, col2)`
- **Slide 12**: Frame 3 - Solo Cliente (`client:only`)
  - **Layout**: `icesi.slideTwoCols("Hidratación Bajo Demanda (Parte 3)", col1, col2)`

### Module 3: Sintaxis y Componentes de Astro (.astro)
- **Slide 13**: Module 3 Divider
  - **Layout**: `icesi.sectionSlideEYellow("Módulo 3: Componentes .astro", "<small style=\"font-size:0.5em;\">Anatomía, Component Script y Scoped CSS</small>")`
- **Slide 14**: Anatomía de un Componente `.astro`
  - **Layout**: `icesi.slideTwoCols("Anatomía de un Componente .astro", col1, col2)`
  - **Visual**: Includes SVG `slides/astro/assets/astro-component-anatomy.svg`.
- **Slide 15**: Código y Props en Componentes Astro
  - **Layout**: `icesi.slideStandard("Component Script y Props en TypeScript", content)`
- **Slide 16**: Scoped CSS & Tailwind CSS Integration
  - **Layout**: `icesi.slideSidebarLeftPurple("Estilos Aislados & Tailwind Integration", content, sidebarVisual)`
- **Slide 17**: Interoperabilidad UI (BYOF - Bring Your Own Framework)
  - **Layout**: `icesi.slideFourCards("Soporte Multi-Framework (BYOF)", c1t, c1b, c2t, c2b, c3t, c3b, c4t, c4b)`

### Module 4: Enrutamiento y Navegación
- **Slide 18**: Module 4 Divider
  - **Layout**: `icesi.sectionSlideEBlue("Módulo 4: Enrutamiento y Navegación", "<small style=\"font-size:0.5em;\">File-based routing, Dynamic Paths & API Endpoints</small>")`
- **Slide 19**: Rutas Estáticas, Dinámicas y API Endpoints
  - **Layout**: `icesi.slideTwoCols("Sistema de Rutas en src/pages/", col1, col2)`
  - **Visual**: Includes SVG `slides/astro/assets/astro-routing-flow.svg`.
- **Slide 20**: Rutas Dinámicas con `getStaticPaths()`
  - **Layout**: `icesi.slideStandard("Rutas Dinámicas y Generación Estática", content)`
- **Slide 21**: View Transitions Engine (`<ClientRouter />`)
  - **Layout**: `icesi.slideSidebarLeftOrange("Navegación Fluida con View Transitions", content, sidebarVisual)`

### Module 5: Content Collections y Rendimiento
- **Slide 22**: Module 5 Divider
  - **Layout**: `icesi.sectionSlideEGreen("Módulo 5: Content Collections & Datos", "<small style=\"font-size:0.5em;\">Markdown, MDX y Type-Safety con Zod</small>")`
- **Slide 23**: Content Collections Architecture
  - **Layout**: `icesi.slideStandard("Content Collections Pipeline", content)`
  - **Visual**: Includes SVG `slides/astro/assets/content-collections-pipeline.svg`.
- **Slide 24**: Validation Schemas con Zod y `getCollection()`
  - **Layout**: `icesi.slideTwoCols("Type-Safe Data: Zod + getCollection()", col1, col2)`
- **Slide 25**: Modos de Renderizado (SSG, SSR, Híbrido)
  - **Layout**: `icesi.slideStandard("Modos de Renderizado en Astro", content)`
  - **Visual**: Includes SVG `slides/astro/assets/rendering-modes.svg`.
- **Slide 26**: Optimización Automática de Activos
  - **Layout**: `icesi.slideFourCards("Optimización Automática de Activos", c1t, c1b, c2t, c2b, c3t, c3b, c4t, c4b)`

### Module 6: Integraciones y Ecosistema Enterprise
- **Slide 27**: Module 6 Divider
  - **Layout**: `icesi.sectionSlideEOrange("Módulo 6: Integraciones y Middleware", "<small style=\"font-size:0.5em;\">Ecosistema @astrojs/* y Middleware Stack</small>")`
- **Slide 28**: Integraciones Oficiales (@astrojs/*)
  - **Layout**: `icesi.slideStandard("Integraciones Oficiales y CLI", content)`
  - **Visual**: Includes SVG `slides/astro/assets/framework-integrations.svg`.
- **Slide 29**: Middleware Engine (`src/middleware.ts`)
  - **Layout**: `icesi.slideSidebarLeftBlue("Astro Middleware & Intercepción", content, sidebarVisual)`
- **Slide 30**: Casos de Uso Ideales vs No Ideales
  - **Layout**: `icesi.slideFourCards("¿Cuándo Elegir Astro?", c1t, c1b, c2t, c2b, c3t, c3b, c4t, c4b)`

### Module 7: Comparativa y Resumen Final
- **Slide 31**: Comparativa: Astro vs Next.js vs SPA Tradicional
  - **Layout**: `icesi.slideThreeCols("Comparativa de Frameworks Web", col1, col2, col3)`
- **Slide 32**: Resumen Pedagógico y Conclusiones
  - **Layout**: `icesi.slideStripeTopLeft("Resumen Pedagógico & Próximos Pasos", content)`
