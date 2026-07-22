# Slide Specification Plan: NestJS Architecture & Ecosystem

## Destination & Objectives
- **Target Audience**: Estudiantes de Ingeniería de Software y Desarrolladores Full-Stack (Node.js/TypeScript).
- **Pedagogical Goal**: Proporcionar una visión integral de NestJS desde la arquitectura modular y la inyección de dependencias hasta el Request Lifecycle completo (Pipes, Guards, Interceptors, Filters), persistencia, testing y microservicios.
- **Target Slide Count**: 30
- **Output Files**:
  - Primary Deliverable: `slides/nestjs/nestjs.pdf`
  - HTML Canvas Medium: `slides/nestjs/nestjs.html`

---

## Decisions & Scope Boundary
- **In-Scope Key Concepts**:
  - **Core**: CLI, TypeScript foundation, Modules (`@Module`), Controllers (`@Controller`), Providers (`@Injectable`), IoC Container & Dependency Injection, Custom Providers (`useClass`, `useValue`, `useFactory`).
  - **Request Lifecycle**: Order of execution (Middleware -> Guards -> Interceptors -> Pipes -> Controller -> Interceptors -> Exception Filters), DTOs & Validation (`class-validator`), Custom Decorators.
  - **Enterprise & Production**: Database integration (TypeORM / Prisma), Configuration Management (`ConfigModule`), Unit & Integration Testing (Jest, Supertest), OpenAPI / Swagger, Microservices overview (TCP/NATS/RabbitMQ), Production best practices.
- **Out-of-Scope**: Deep internal V8 runtime tuning, low-level C++ Node.js bindings, manual legacy Express middleware without Nest wrappers.

---

## Visual & Layout Strategy
- **Mermaid Diagrams**:
  - Slide 5: Diagrama de la Arquitectura de Módulos (RootModule -> FeatureModules -> Providers).
  - Slide 12: Diagrama de Secuencia del Request Lifecycle completo en NestJS.
  - Slide 17: Flujo de Transformación y Validación de DTOs con Pipes.
  - Slide 27: Arquitectura de Comunicación por Microservicios (TCP / Event-Driven).
- **4-Card Grids (`icesi.slideFourCards`)**:
  - Slide 8: Principios clave de Inyección de Dependencias.
  - Slide 14: Tipos de Guards y Casos de Uso.
  - Slide 19: Tipos de Capas en Exception Filters.
  - Slide 22: Estrategias de Persistencia de Datos.
  - Slide 28: 4 Pilares de Buenas Prácticas en Producción.
- **Sidebars (`icesi.slideSidebarLeft*`)**:
  - Slide 2: Ventajas clave de NestJS (Sidebar con íconos).
  - Slide 5: Diagrama Mermaid de Arquitectura de Módulos en Sidebar.
  - Slide 12: Diagrama Mermaid del Request Lifecycle en Sidebar.
  - Slide 17: Diagrama Mermaid de Pipelines de Validación en Sidebar.
  - Slide 26: Beneficios de Swagger / OpenAPI (Sidebar con íconos).
  - Slide 27: Diagrama Mermaid de Microservicios en Sidebar.

---

## Slide-by-Slide Map (1..30)

### Bloque 1: Core & Architecture (Slides 1 – 10)

#### Slide 1: Portada Principal
- **Layout Function**: `icesi.titleSlideA()`
- **Parameters**:
  - Title: `"NestJS Architecture & Enterprise Development"`
  - Subtitle: `"Construyendo Aplicaciones Escalables y Mantenibles en Node.js"`
  - Tag: `"Facultad de Ingeniería — Universidad Icesi"`

#### Slide 2: Visión General de NestJS y Filosofía
- **Layout Function**: `icesi.slideSidebarLeftBlue()`
- **Parameters**:
  - Title: `"¿Qué es NestJS?"`
  - Subtitle: `"El Framework Progresivo de Node.js"`
  - Sidebar Visual: `{ type: 'icons', items: [{icon:'⚡', label:'TypeScript First'}, {icon:'🧱', label:'Arquitectura Modular'}, {icon:'🔌', label:'Inyección de Dependencias'}, {icon:'🌐', label:'Backend Agnóstico'}] }`
  - Content: Explicación de cómo NestJS combina OOP, FP y FRP sobre Express/Fastify para eliminar el "código espagueti" en aplicaciones de Node.js.

#### Slide 3: Divisor de Sección 1 — Core & Inyección de Dependencias
- **Layout Function**: `icesi.sectionSlideA()`
- **Parameters**:
  - Number: `"01"`
  - Title: `"Core & Dependency Injection"`
  - Subtitle: `"Módulos, Controladores, Proveedores y el Contenedor IoC"`

#### Slide 4: Estructura Estándar de un Proyecto NestJS
- **Layout Function**: `icesi.slideTwoCols()`
- **Parameters**:
  - Title: `"Anatomía de un Proyecto NestJS"`
  - Subtitle: `"Organización y Convenciones del CLI"`
  - Col 1: Árbol de archivos (`main.ts`, `app.module.ts`, `app.controller.ts`, `app.service.ts`).
  - Col 2: Rol del archivo `main.ts` y la función `NestFactory.create()`.

#### Slide 5: Arquitectura Basada en Módulos (`@Module`)
- **Layout Function**: `icesi.slideSidebarLeftOrange()`
- **Parameters**:
  - Title: `"Módulos: Los Bloques de Construcción"`
  - Subtitle: `"Organización de Dominio en NestJS"`
  - Sidebar Visual: `{ type: 'mermaid', code: 'graph TD\n  Root[AppModule] --> Auth[AuthModule]\n  Root --> Users[UsersModule]\n  Users --> DB[(DatabaseModule)]\n  Auth --> Users' }`
  - Content: Explicación de metadata en `@Module()`: `imports`, `controllers`, `providers`, `exports`.

#### Slide 6: Controladores (`@Controller`) y Manejo de Rutas
- **Layout Function**: `icesi.slideTwoCols()`
- **Parameters**:
  - Title: `"Controladores: Capa de Entrada HTTP"`
  - Subtitle: `"Mapeo de Peticiones y Parámetros"`
  - Col 1: Decoradores HTTP (`@Get`, `@Post`, `@Put`, `@Delete`, `@Body`, `@Param`, `@Query`).
  - Col 2: Code Snippet de `UsersController` demostrando decoradores de parámetros.

#### Slide 7: Proveedores y Servicios (`@Injectable`)
- **Layout Function**: `icesi.slideStripeTopLeft()`
- **Parameters**:
  - Title: `"Proveedores y Lógica de Negocio"`
  - Subtitle: `"El Decorador @Injectable()"`
  - Content: Concepto de Provider en Nest.js, encapsulamiento de reglas de negocio, ciclo de vida de los servicios e inyección a través del constructor.

#### Slide 8: Inversión de Control (IoC) e Inyección de Dependencias
- **Layout Function**: `icesi.slideFourCards()`
- **Parameters**:
  - Title: `"El Contenedor IoC de NestJS"`
  - Subtitle: `"Beneficios de la Inyección de Dependencias"`
  - Cards:
    - Card 1: `"Desacoplamiento"` (Interfaces y contratos sobre implementations concretas).
    - Card 2: `"Testabilidad"` (Fácil sustitución por Mocks y Stubs en pruebas).
    - Card 3: `"Reusabilidad"` (Compartición transparente entre módulos vía exports).
    - Card 4: `"Gestión de Vida"` (Singletons por defecto, Scopes por petición si se requiere).

#### Slide 9: Custom Providers (useClass, useValue, useFactory)
- **Layout Function**: `icesi.slideTwoCols()`
- **Parameters**:
  - Title: `"Proveedores Personalizados"`
  - Subtitle: `"Estrategias de Inyección Avanzadas"`
  - Col 1: Sintaxis y casos de uso para `useValue` (configuración/constantes) y `useClass` (polimorfismo).
  - Col 2: Sintaxis de `useFactory` e inyección condicional asíncrona.

#### Slide 10: Taller Práctico #1 — CRUD Modular
- **Layout Function**: `icesi.titleSlideF()`
- **Parameters**:
  - Title: `"Taller Práctico 01"`
  - Subtitle: `"Construcción de un Módulo de Productos con Nest CLI"`
  - Tag: `"Hands-On Exercise"`

---

### Bloque 2: Request Lifecycle & Enhancers (Slides 11 – 20)

#### Slide 11: Divisor de Sección 2 — Request Lifecycle & Enhancers
- **Layout Function**: `icesi.sectionSlideC()`
- **Parameters**:
  - Section: `"02"`
  - Title: `"Request Lifecycle & Enhancers"`
  - Subtitle: `"Middleware, Guards, Interceptors, Pipes y Exception Filters"`

#### Slide 12: Diagrama del Request Lifecycle
- **Layout Function**: `icesi.slideSidebarLeftPurple()`
- **Parameters**:
  - Title: `"Ciclo de Vida de una Petición"`
  - Subtitle: `"El Pipeline de Ejecución Ordenado"`
  - Sidebar Visual: `{ type: 'mermaid', code: 'graph TD\n  Req[Incoming Req] --> MW[Middleware]\n  MW --> Guard[Guards]\n  Guard --> InterB[Interceptors Pre]\n  InterB --> Pipe[Pipes]\n  Pipe --> Ctrl[Controller]\n  Ctrl --> InterA[Interceptors Post]\n  InterA --> Filter[Exception Filters]\n  Filter --> Res[Response]' }`
  - Content: Explicación detallada del orden estricto de ejecución en NestJS y por qué el orden es vital para la seguridad y rendimiento.

#### Slide 13: Middleware: Intercepción a Nivel de HTTP
- **Layout Function**: `icesi.slideStripeTopLeft()`
- **Parameters**:
  - Title: `"Middleware en NestJS"`
  - Subtitle: `"Procesamiento de Bajo Nivel"`
  - Content: Equivalencia con Express middleware, acceso a `req`, `res`, `next()`, registro en `configure(consumer: MiddlewareConsumer)`.

#### Slide 14: Guards: Autenticación y Autorización
- **Layout Function**: `icesi.slideFourCards()`
- **Parameters**:
  - Title: `"Guards: Protección de Rutas"`
  - Subtitle: `"Determinación de Acceso con CanActivate"`
  - Cards:
    - Card 1: `"CanActivate Interface"` (Retorna boolean o Promise<boolean>).
    - Card 2: `"ExecutionContext"` (Acceso al contexto de la petición HTTP/RPC/WS).
    - Card 3: `"JWT Auth Guard"` (Verificación de tokens en encabezados).
    - Card 4: `"Role-Based Guard"` (Restricción por roles de usuario).

#### Slide 15: Implementación de Guards y Metadatos
- **Layout Function**: `icesi.slideTwoCols()`
- **Parameters**:
  - Title: `"Guards con Custom Decorators"`
  - Subtitle: `"Uso de Reflector y @SetMetadata"`
  - Col 1: Creación de decoradores personalizados (`@Roles('admin')`).
  - Col 2: Lectura de metadatos en el Guard usando `Reflector.getAllAndOverride()`.

#### Slide 16: Interceptors: Cross-Cutting Concerns
- **Layout Function**: `icesi.slideStripeTopRight()`
- **Parameters**:
  - Title: `"Interceptors: Aspect-Oriented Programming"`
  - Subtitle: `"Envolviendo la Ejecución con RxJS"`
  - Content: Interfaz `NestInterceptor`, método `intercept()`, transformación de respuestas (`map`), logging, caché y manejo de timeouts con operadores RxJS.

#### Slide 17: Pipes: Transformación y Validación
- **Layout Function**: `icesi.slideSidebarLeftBlue()`
- **Parameters**:
  - Title: `"Pipes: Validación y Transformación"`
  - Subtitle: `"Garantizando la Integridad de los Datos"`
  - Sidebar Visual: `{ type: 'mermaid', code: 'graph LR\n  Input[Raw Payload] --> Pipe{Pipe Transform} -->|Valid| Handler[Route Handler]\n  Pipe -->|Invalid| Err[400 Bad Request]' }`
  - Content: Rol de `PipeTransform`, Pipes integrados (`ValidationPipe`, `ParseIntPipe`, `ParseUUIDPipe`).

#### Slide 18: Custom Pipes y DTO Validation
- **Layout Function**: `icesi.slideTwoCols()`
- **Parameters**:
  - Title: `"Validación Automática con DTOs"`
  - Subtitle: `"Uso de class-validator y class-transformer"`
  - Col 1: Definición del DTO con decoradores (`@IsString()`, `@IsEmail()`, `@IsInt()`).
  - Col 2: Configuración global de `ValidationPipe({ whitelist: true, transform: true })`.

#### Slide 19: Exception Filters: Control Centralizado de Errores
- **Layout Function**: `icesi.slideFourCards()`
- **Parameters**:
  - Title: `"Exception Filters"`
  - Subtitle: `"Normalización de Respuestas de Error"`
  - Cards:
    - Card 1: `"HttpException"` (Clase base para errores estándar HTTP).
    - Card 2: `"Built-in Filters"` (Mapeo automático de errores no capturados).
    - Card 3: `"Custom Filters"` (Decorador `@Catch()` e interfaz `ExceptionFilter`).
    - Card 4: `"Global Binding"` (Registro en `app.useGlobalFilters()`).

#### Slide 20: Taller Práctico #2 — Seguridad y Validation Pipeline
- **Layout Function**: `icesi.titleSlideF()`
- **Parameters**:
  - Title: `"Taller Práctico 02"`
  - Subtitle: `"Implementación de JWT Guard + DTO Validation Pipeline"`
  - Tag: `"Hands-On Security Lab"`

---

### Bloque 3: Persistencia, Testing & Microservicios (Slides 21 – 30)

#### Slide 21: Divisor de Sección 3 — Persistencia, Testing y Producción
- **Layout Function**: `icesi.sectionSlideEBlue()`
- **Parameters**:
  - Section: `"03"`
  - Title: `"Persistencia, Testing & Microservicios"`
  - Subtitle: `"Construyendo Soluciones Enterprise Listas para Producción"`

#### Slide 22: Integración de Base de Datos (TypeORM & Prisma)
- **Layout Function**: `icesi.slideFourCards()`
- **Parameters**:
  - Title: `"Persistencia de Datos en NestJS"`
  - Subtitle: `"Integración con ORMs Populares"`
  - Cards:
    - Card 1: `"TypeORM Module"` (Mapeo por Entidades y Repositorios).
    - Card 2: `"Prisma Service"` (Cliente tipado con Schema-Driven Design).
    - Card 3: `"Mongoose / MongoDB"` (Soporte NoSQL mediante `@nestjs/mongoose`).
    - Card 4: `"Transacciones"` (Manejo seguro de transacciones en servicios).

#### Slide 23: Configuración y Manejo de Entorno
- **Layout Function**: `icesi.slideStripeTopLeft()`
- **Parameters**:
  - Title: `"Gestión de Configuración (`ConfigModule`)"`
  - Subtitle: `"Manejo de Variables de Entorno"`
  - Content: Uso de `@nestjs/config`, validación de esquema `.env` con Joi o Zod, inyección de `ConfigService` fuertemente tipado.

#### Slide 24: Testing Unitario con Jest
- **Layout Function**: `icesi.slideTwoCols()`
- **Parameters**:
  - Title: `"Pruebas Unitarias en NestJS"`
  - Subtitle: `"Uso de Test.createTestingModule()"`
  - Col 1: Configuración de módulo de prueba aislado e inyección de mocks.
  - Col 2: Code Snippet de prueba de un `UsersService` mockeando el repositorio.

#### Slide 25: Testing de Integración (E2E)
- **Layout Function**: `icesi.slideStripeTopRight()`
- **Parameters**:
  - Title: `"Pruebas E2E (End-to-End)"`
  - Subtitle: `"Simulación de Peticiones Reales con Supertest"`
  - Content: Estructura del directorio `test/`, inicialización de `INestApplication`, ejecución de peticiones HTTP con `supertest` y aserciones de código de estado.

#### Slide 26: Documentación Automática con OpenAPI / Swagger
- **Layout Function**: `icesi.slideSidebarLeftOrange()`
- **Parameters**:
  - Title: `"Documentación de APIs con Swagger"`
  - Subtitle: `"Especificación OpenAPI Automática"`
  - Sidebar Visual: `{ type: 'icons', items: [{icon:'📜', label:'OpenAPI 3.0'}, {icon:'🏷️', label:'@ApiTags'}, {icon:'📥', label:'@ApiBody'}, {icon:'📤', label:'@ApiResponse'}] }`
  - Content: Integración del paquete `@nestjs/swagger`, configuración del `DocumentBuilder` en `main.ts` y decoradores para esquemas de DTOs.

#### Slide 27: Introducción a Microservicios y Arquitectura Event-Driven
- **Layout Function**: `icesi.slideSidebarLeftPurple()`
- **Parameters**:
  - Title: `"Microservicios en NestJS"`
  - Subtitle: `"Comunicación Asíncrona y Transportes"`
  - Sidebar Visual: `{ type: 'mermaid', code: 'graph LR\n  Client[HTTP Gateway] -->|TCP / NATS| ServiceA[Auth Microservice]\n  Client -->|RabbitMQ| ServiceB[Order Microservice]' }`
  - Content: Transición de HTTP a transportes de microservicios (TCP, Redis, NATS, RabbitMQ, Kafka), patrones `@MessagePattern()` y `@EventPattern()`.

#### Slide 28: Mejores Prácticas y Patrones en Producción
- **Layout Function**: `icesi.slideFourCards()`
- **Parameters**:
  - Title: `"Buenas Prácticas para Producción"`
  - Subtitle: `"Arquitectura Robusta y Mantenible"`
  - Cards:
    - Card 1: `"Strict DTO Typing"` (Interfaces claras y validación en fronteras).
    - Card 2: `"Graceful Shutdown"` (Habilitación de `app.enableShutdownHooks()`).
    - Card 3: `"Rate Limiting"` (Protección con `@nestjs/throttler`).
    - Card 4: `"Logging Centralizado"` (Uso de `LoggerService` estructurado).

#### Slide 29: Resumen y Hoja de Ruta de Aprendizaje
- **Layout Function**: `icesi.slideThreeCols()`
- **Parameters**:
  - Title: `"Resumen y Próximos Pasos"`
  - Subtitle: `"El Camino Hacia NestJS Expert"`
  - Col 1: Core Fundamentals (Modules, DI, Controllers, Providers).
  - Col 2: Request Lifecycle (Pipes, Guards, Interceptors, Filters).
  - Col 3: Advanced Ecosystem (GraphQL, Microservices, CQRS, WebSockets).

#### Slide 30: Cierre y Preguntas
- **Layout Function**: `icesi.sectionSlideEGreen()`
- **Parameters**:
  - Section: `"✓"`
  - Title: `"¡Gracias!"`
  - Subtitle: `"¿Preguntas o comentarios sobre NestJS? | Universidad Icesi"`

---

## Handoff & Execution
Run `/implement-slides .agents/spec/slides-plan/nestjs-plan.md` to generate the presentation slides and compile the final PDF file under `slides/nestjs/nestjs.pdf`.
