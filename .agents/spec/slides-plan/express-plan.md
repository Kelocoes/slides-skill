# Slide Specification Plan: Express.js Framework Web para Node.js

## Destination & Objectives
- **Target Audience**: Estudiantes Universitarios de Ingeniería de Sistemas / Desarrollo Web Backend.
- **Target Slide Count**: 28
- **Output Files**:
  - Primary Deliverable: `slides/express/express.pdf`
  - HTML Canvas Medium: `slides/express/express.html`

## Decisions & Scope Boundary
- **In-Scope Key Concepts**: 
  - HTTP Server nativo vs. Abstracción Express.js
  - Request (`req`) y Response (`res`)
  - Rutas y Parámetros (`req.params`, `req.query`, `req.body`)
  - Middleware Pattern & Chain of Responsibility (`next()`)
  - Modularización con `express.Router()`
  - Manejo de Errores Asíncronos y Middleware de 4 parámetros
  - Arquitectura en Capas (Routes -> Controllers -> Services -> Models)
  - Stack de Seguridad (Helmet, CORS, Rate Limiter, Data Validation)
- **Out-of-Scope**: SSR con plantillas Pug/EJS (enfoque 100% en APIs REST JSON modernas), WebSockets (mantenido para clase separada).

## Pedagogical Critique (Internal QA Pass)
- **Self-contained content**: Todas las diapositivas proporcionan conceptos, código ejecutable y diagramas explicativos de manera autónoma. Sin redirecciones a talleres externos.
- **Graphic strategy choice**: Todos los diagramas complejos precompilados a SVG estático mediante `mermaid-cli` e inyectados como elementos vectoriales transparentes para garantizar renderizado perfecto en el PDF exportado con Decktape.

## Slide-by-Slide Map (1..28)

1. **Slide 1**: Title Slide A
   - `icesi.titleSlideA('Express.js Framework Web', 'Desarrollo Web Backend Rápido y Minimalista con Node.js <br><span class="slide-footer-tag">Universidad Icesi · Ingeniería de Sistemas</span>')`

2. **Slide 2**: Introducción & Ecosistema Node.js
   - `icesi.sectionSlideC('01 / INTRODUCCIÓN Y ECOSISTEMA')`

3. **Slide 3**: ¿Qué es Express.js?
   - `icesi.slideTwoCols('¿Qué es Express.js?', ...)`
   - Col 1: Definición y filosofía unopinionated
   - Col 2: Características clave (Rápido, Ligero, Ecosistema de Middlewares)

4. **Slide 4**: Node.js Nativo vs. Express.js
   - `icesi.slideTwoCols('Node.js Nativo vs. Express.js', ...)`
   - Col 1: Ejemplo nativo con `http.createServer` (verboso, parseo manual)
   - Col 2: Ejemplo Express con `app.get()` (declarativo, limpio)

5. **Slide 5**: Ciclo de Vida de una Petición HTTP
   - `icesi.slideSidebarLeftBlue('Ciclo de Vida HTTP', ..., { type: 'graphic', html: svgHttpLifecycle })`
   - Content: Flujo completo desde el cliente hasta la respuesta JSON.

6. **Slide 6**: Anatomía de la Aplicación
   - `icesi.sectionSlideC('02 / ANATOMÍA DE LA APLICACIÓN')`

7. **Slide 7**: Instancia Principal de Express
   - `icesi.slideStandard('La Instancia Principal: express()', ...)`
   - Content: Inicialización del servidor, configuración de puertos y `app.listen()`.

8. **Slide 8**: El Objeto Request (`req`)
   - `icesi.slideFourCards('El Objeto Request (req)', ...)`
   - Cards: Headers & IP, Route Params (`req.params`), Query Strings (`req.query`), Request Body (`req.body`).

9. **Slide 9**: El Objeto Response (`res`)
   - `icesi.slideFourCards('El Objeto Response (res)', ...)`
   - Cards: `res.json()`, `res.status()`, `res.send()`, `res.redirect()`.

10. **Slide 10**: Verbos HTTP y Rutas REST
    - `icesi.slideThreeCols('Verbos HTTP y Rutas REST', ...)`
    - Col 1: Lectura (GET)
    - Col 2: Escritura (POST, PUT, PATCH)
    - Col 3: Eliminación (DELETE)

11. **Slide 11**: El Patrón Middleware
    - `icesi.sectionSlideC('03 / EL PATRÓN MIDDLEWARE')`

12. **Slide 12**: ¿Qué es un Middleware?
    - `icesi.slideStandard('¿Qué es un Middleware?', ...)`
    - Content: Firma `(req, res, next)`, inspección, modificación y control de flujo.

13. **Slide 13**: Cadena de Responsabilidad (Middleware Pipeline)
    - `icesi.slideSidebarLeftOrange('Cadena de Middleware', ..., { type: 'graphic', html: svgMiddlewareFlow })`
    - Content: Reutilizando `slides/shared/middleware-flow.svg` del registry compartido.

14. **Slide 14**: Frame 1 de 3: Ejecución de Middleware paso 1
    - `icesi.slideStandard('Paso 1: Petición Entrante & Autenticación', ...)`
    - Content: Frame progresivo mostrando el primer middleware capturando el token JWT.

15. **Slide 15**: Frame 2 de 3: Ejecución de Middleware paso 2
    - `icesi.slideStandard('Paso 2: Logging & Transformación', ...)`
    - Content: Frame progresivo mostrando el registro de auditoría y paso con `next()`.

16. **Slide 16**: Frame 3 de 3: Ejecución de Middleware paso 3
    - `icesi.slideStandard('Paso 3: Controlador Final & Respuesta', ...)`
    - Content: Frame progresivo mostrando la ejecución de la respuesta JSON final.

17. **Slide 17**: Clasificación de Middlewares
    - `icesi.slideFourCards('Clasificación de Middlewares', ...)`
    - Cards: Application-level (`app.use`), Router-level (`router.use`), Built-in (`express.json`), Third-party (`cors`, `morgan`).

18. **Slide 18**: Enrutamiento Modular con Express Router
    - `icesi.sectionSlideC('04 / ENRUTAMIENTO MODULAR')`

19. **Slide 19**: Estructura de Express Router
    - `icesi.slideSidebarLeftPurple('Express Router Modular', ..., { type: 'graphic', html: svgRouterStructure })`
    - Content: Organización jerárquica de sub-rutas por recurso.

20. **Slide 20**: Extracción de Datos: Params vs Query
    - `icesi.slideTwoCols('Parámetros de Ruta vs. Query Strings', ...)`
    - Col 1: Route Params (`/users/:id`) para identificadores de recursos.
    - Col 2: Query Strings (`/users?role=admin`) para filtrado y paginación.

21. **Slide 21**: Manejo de Errores y Excepciones
    - `icesi.sectionSlideC('05 / MANEJO DE ERRORES')`

22. **Slide 22**: Flujo de Propagación de Errores
    - `icesi.slideSidebarLeftOrange('Propagación de Errores', ..., { type: 'graphic', html: svgErrorPropagation })`
    - Content: Captura de excepciones y salto directo al Error Handler.

23. **Slide 23**: Middleware Global de Manejo de Errores
    - `icesi.slideStandard('Middleware de Errores (4 Parámetros)', ...)`
    - Content: Firma obligatoria `(err, req, res, next)` para evitar fuga de stack traces en producción.

24. **Slide 24**: Manejo de Operaciones Asíncronas
    - `icesi.slideTwoCols('Manejo de Errores Asíncronos', ...)`
    - Col 1: `try/catch` manual con `next(err)`.
    - Col 2: Wrapper funcional `express-async-handler` o manejo nativo en Express 5.

25. **Slide 25**: Arquitectura en Capas & Seguridad
    - `icesi.sectionSlideC('06 / ARQUITECTURA Y SEGURIDAD')`

26. **Slide 26**: Arquitectura por Capas en APIs REST
    - `icesi.slideSidebarLeftBlue('Arquitectura en Capas', ..., { type: 'graphic', html: svgLayeredArchitecture })`
    - Content: Separación limpia entre Rutas, Controladores, Servicios y Acceso a Datos.

27. **Slide 27**: Stack de Seguridad y Protección
    - `icesi.slideSidebarLeftOrange('Stack de Seguridad Web', ..., { type: 'graphic', html: svgSecurityStack })`
    - Content: Defensa en profundidad con Helmet, CORS, Rate Limit y Validación de Esquemas.

28. **Slide 28**: Resumen & Cierre
    - `icesi.sectionSlideEBlue('Resumen de Express.js<br><small style="font-size:0.5em; opacity:0.8;">Construyendo APIs sólidas y escalables en Node.js</small>', '')`
