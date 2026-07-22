# Slide Specification Plan: Spring Security Architecture & Authentication Flow

## Destination & Objectives
- **Target Audience**: Estudiantes de Ingeniería de Software y Desarrolladores Backend Java/Spring Boot.
- **Pedagogical Goal**: Proporcionar una comprensión profunda y práctica de la arquitectura de Spring Security 6+, su cadena de filtros Servlet (`SecurityFilterChain`), el flujo interno de autenticación (`AuthenticationManager`, `UserDetailsService`), el hashing seguro de contraseñas (`BCryptPasswordEncoder`) y la implementación paso a paso de una arquitectura Stateless con JWT.
- **Target Slide Count**: 30
- **Output Files**:
  - Primary Deliverable: `slides/spring-security/spring-security.pdf`
  - HTML Canvas Medium: `slides/spring-security/spring-security.html`

---

## Decisions & Scope Boundary
- **In-Scope Key Concepts**:
  - **Spring Security 6+**: Configuración moderna basada en el Bean `SecurityFilterChain` (sin `WebSecurityConfigurerAdapter` deprecado).
  - **Servlet Filter Chain**: `DelegatingFilterProxy`, `FilterChainProxy`, `SecurityFilterChain`.
  - **Autenticación Interna**: `Authentication`, `SecurityContextHolder` (`ThreadLocal`), `AuthenticationManager`, `ProviderManager`, `AuthenticationProvider`.
  - **Persistencia de Usuarios & Encriptación**: `UserDetailsService`, `UserDetails`, `PasswordEncoder`, `BCryptPasswordEncoder`, Salting & Work Factor.
  - **Implementación JWT**: Paso a paso con `OncePerRequestFilter`, `JwtUtils`, `SecurityFilterChain` Stateless y endpoint `/api/auth/login`.
- **Out-of-Scope**: Spring Security OAuth2 Server / SAML 2.0 empresarial complejo (se enfoca 100% en el motor core de autenticación y JWT).

---

## Visual & Layout Strategy
- **Gráficos Vectoriales SVG Personalizados (`slides-svg-graphics`)**:
  - Slide 3: Arquitectura de la Cadena de Filtros Servlet (`DelegatingFilterProxy` -> `FilterChainProxy` -> `SecurityFilterChain`).
  - Slide 10: Diagrama del Flujo Interno de Autenticación (`HttpServletRequest` -> `AuthenticationFilter` -> `AuthenticationManager` -> `SecurityContext`).
  - Slide 18: Arquitectura de Carga de Usuarios (`UserDetailsService` -> `UserRepository` -> `UserDetails`).
- **Prohibición de Emojis**: Todos los íconos utilizan SVGs vectoriales semánticos (`slides-iconification`).
- **Contenido Autocontenido**: Cero redirecciones a talleres o ejercicios externos.

---

## Pedagogical Critique (Internal QA Pass)
- **Self-Contained Content**: ✅ Las 30 diapositivas son 100% autocontenidas con ejemplos de código completos y diagramas de arquitectura.
- **Function Signatures**: ✅ `sectionSlideC(title)` y `sectionSlideA(title)` reciben exactamente 1 argumento.

---

## Slide-by-Slide Map (1..30)

### Bloque 1: Arquitectura Fundamental & Security Filter Chain (Slides 1 – 8)

#### Slide 1: Portada Principal
- **Layout Function**: `icesi.titleSlideA()`
- **Title**: `"Spring Security Architecture &<br>Authentication Flow"`
- **Subtitle**: `"Arquitectura de Filtros, IoC Container e Implementación Stateless JWT<span class=\"slide-footer-tag\">Facultad de Ingeniería — Universidad Icesi</span>"`

#### Slide 2: ¿Qué es Spring Security y por qué usarlo?
- **Layout Function**: `icesi.slideSidebarLeftBlue()`
- **Title**: `"¿Qué es Spring Security?"`
- **Content**: Explicación de Spring Security como el estándar de facto para autenticación, autorización y protección contra vulnerabilidades en el ecosistema Spring.
- **Sidebar Visual**: `{ type: 'icons', items: [{icon: '<svg>...', label: 'Autenticación Declarativa'}, {icon: '<svg>...', label: 'Protección CSRF/XSS'}, {icon: '<svg>...', label: 'Integración Spring Boot'}, {icon: '<svg>...', label: 'Stateless JWT'}] }`

#### Slide 3: El Modelo de Filtros Servlet
- **Layout Function**: `icesi.slideSidebarLeftPurple()`
- **Title**: `"El Modelo de Filtros Servlet"`
- **Content**: Explicación de cómo Spring Security intercepta las peticiones HTTP antes de que lleguen a los controladores de Spring MVC utilizando filtros Servlet.
- **Sidebar Visual**: `{ type: 'graphic', html: '<svg viewBox="0 0 380 320">...</svg>' }` *(SVG: Servlet Filter Chain Pipeline)*

#### Slide 4: DelegatingFilterProxy & FilterChainProxy
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"DelegatingFilterProxy & FilterChainProxy"`
- **Col 1**: `DelegatingFilterProxy`: Filtro Servlet estándar registrado en el contenedor Web que delega la ejecución a Spring Beans.
- **Col 2**: `FilterChainProxy`: Bean especial de Spring Security que gestiona múltiples `SecurityFilterChain`.

#### Slide 5: Configuración Moderna de SecurityFilterChain
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Configuración de SecurityFilterChain"`
- **Col 1**: Explicación del enfoque moderno en Spring Security 6+ declarando el Bean `SecurityFilterChain`.
- **Col 2**: Snippet de código con `http.authorizeHttpRequests()` y `requestMatchers()`.

#### Slide 6: Filtros Integrados Clave
- **Layout Function**: `icesi.slideFourCards()`
- **Title**: `"Filtros Integrados en la Cadena"`
- **Card 1**: `"UsernamePasswordAuthenticationFilter"` - Intercepta formularios de login estándar.
- **Card 2**: `"BearerTokenAuthenticationFilter"` - Decodifica tokens Bearer en peticiones OAuth2/JWT.
- **Card 3**: `"CorsFilter"` - Maneja pre-flights HTTP e inspección de orígenes permitidos.
- **Card 4**: `"CsrfFilter"` - Protege contra ataques de falsificación de peticiones en sitio cruzado.

#### Slide 7: Desactivar Defaults para APIs Stateless
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Configuración Stateless para APIs REST"`
- **Col 1**: Por qué las APIs REST con JWT no requieren CSRF ni sesiones de servidor.
- **Col 2**: Snippet con `csrf.disable()` y `sessionCreationPolicy(SessionCreationPolicy.STATELESS)`.

#### Slide 8: Síntesis del Bloque 1
- **Layout Function**: `icesi.slideThreeCols()`
- **Title**: `"Síntesis: Arquitectura de Filtros"`
- **Col 1**: DelegatingFilterProxy & FilterChainProxy.
- **Col 2**: Bean `SecurityFilterChain`.
- **Col 3**: Configuración Stateless & CSRF.

---

### Bloque 2: Flujo Interno de Autenticación & AuthenticationManager (Slides 9 – 16)

#### Slide 9: Divisor de Sección 2
- **Layout Function**: `icesi.sectionSlideC()`
- **Title**: `"Flujo Interno de Autenticación & AuthenticationManager"`

#### Slide 10: El Flujo Interno de Autenticación
- **Layout Function**: `icesi.slideSidebarLeftOrange()`
- **Title**: `"Flujo Interno de Autenticación"`
- **Content**: Explicación del recorrido desde que entra el `HttpServletRequest` hasta que se establece el usuario autenticado en el contexto.
- **Sidebar Visual**: `{ type: 'graphic', html: '<svg viewBox="0 0 380 320">...</svg>' }` *(SVG: Authentication Flow Diagram)*

#### Slide 11: La Interfaz Authentication & SecurityContext
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"La Interfaz Authentication"`
- **Col 1**: Representa el token de un intento de autenticación o del usuario autenticado.
- **Col 2**: Componentes: `Principal` (usuario), `Credentials` (contraseña/token), `Authorities` (roles/permisos).

#### Slide 12: SecurityContextHolder & ThreadLocal Storage
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"SecurityContextHolder & ThreadLocal"`
- **Col 1**: `SecurityContextHolder` almacena el `SecurityContext` actual mediante una estrategia `ThreadLocal`.
- **Col 2**: Snippet de código para acceder al usuario autenticado en cualquier Service o Controller: `SecurityContextHolder.getContext().getAuthentication()`.

#### Slide 13: AuthenticationManager & ProviderManager
- **Layout Function**: `icesi.slideFourCards()`
- **Title**: `"AuthenticationManager y ProviderManager"`
- **Card 1**: `"AuthenticationManager"` - Interfaz principal con el método `authenticate(Authentication)`.
- **Card 2**: `"ProviderManager"` - Implementación por defecto que delega a una lista de `AuthenticationProvider`.
- **Card 3**: `"DaoAuthenticationProvider"` - Procesa credenciales consultando un `UserDetailsService`.
- **Card 4**: `"JwtAuthenticationProvider"` - Valida firmas de tokens JWT.

#### Slide 14: AuthenticationProvider Customizado
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"AuthenticationProvider Personalizado"`
- **Col 1**: Cuándo implementar un proveedor propio (autenticación biométrica, LDAP especial, sistemas legacy).
- **Col 2**: Snippet con los métodos `authenticate()` y `supports()`.

#### Slide 15: Autenticación JWT vs. Session-Based
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Sesiones HTTP vs. Tokens JWT"`
- **Col 1**: **Session-Based:** Estado almacenado en memoria del servidor con Cookie `JSESSIONID`. Dificulta el escalamiento horizontal.
- **Col 2**: **Stateless JWT:** Token firmado autofrenante enviado en el header `Authorization`. Escalamiento horizontal infinito.

#### Slide 16: Síntesis del Bloque 2
- **Layout Function**: `icesi.slideThreeCols()`
- **Title**: `"Síntesis: Autenticación y Contexto"`
- **Col 1**: `Authentication` & `SecurityContext`.
- **Col 2**: `SecurityContextHolder` (`ThreadLocal`).
- **Col 3**: `AuthenticationManager` & `ProviderManager`.

---

### Bloque 3: UserDetailsService & Password Encoding (Slides 17 – 23)

#### Slide 17: Divisor de Sección 3
- **Layout Function**: `icesi.sectionSlideC()`
- **Title**: `"UserDetailsService, UserDetails & Password Encoding"`

#### Slide 18: La Interfaz UserDetailsService
- **Layout Function**: `icesi.slideSidebarLeftBlue()`
- **Title**: `"La Interfaz UserDetailsService"`
- **Content**: Es el contrato central que Spring Security utiliza para cargar los datos del usuario desde la base de datos a partir de su username.
- **Sidebar Visual**: `{ type: 'graphic', html: '<svg viewBox="0 0 380 320">...</svg>' }` *(SVG: UserDetailsService Architecture)*

#### Slide 19: CustomUserDetailsService con JPA
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"CustomUserDetailsService con JPA"`
- **Col 1**: Implementación del método `loadUserByUsername(String username)`.
- **Col 2**: Snippet consultando `UserRepository` y retornando una instancia de `UserDetails`.

#### Slide 20: La Interfaz UserDetails & GrantedAuthorities
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"La Interfaz UserDetails"`
- **Col 1**: Encapsula los datos del usuario requeridos por Spring Security.
- **Col 2**: Métodos: `getAuthorities()`, `getPassword()`, `getUsername()`, `isAccountNonExpired()`, `isAccountNonLocked()`, `isEnabled()`.

#### Slide 21: PasswordEncoder & BCryptPasswordEncoder
- **Layout Function**: `icesi.slideSidebarLeftOrange()`
- **Title**: `"PasswordEncoder y Encriptación"`
- **Content**: Spring Security exige encriptar las contraseñas. **Nunca** deben guardarse en texto plano.
- **Sidebar Visual**: `{ type: 'icons', items: [{icon: '<svg>...', label: 'BCryptPasswordEncoder'}, {icon: '<svg>...', label: 'Salt Aleatorio'}, {icon: '<svg>...', label: 'Work Factor (Cost=10)'}, {icon: '<svg>...', label: 'Unidirectional Hashing'}] }`

#### Slide 22: Algoritmos de Hashing, Salting y Work Factor
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Salting y Work Factor en BCrypt"`
- **Col 1**: **Salting:** Añade una cadena aleatoria única a cada contraseña para anular tablas Rainbow.
- **Col 2**: **Work Factor:** Define la lentitud intencional del cómputo para frenar ataques de fuerza bruta.

#### Slide 23: Síntesis del Bloque 3
- **Layout Function**: `icesi.slideThreeCols()`
- **Title**: `"Síntesis: Usuarios y Encriptación"`
- **Col 1**: `UserDetailsService` & JPA.
- **Col 2**: `UserDetails` & GrantedAuthorities.
- **Col 3**: `PasswordEncoder` & BCrypt Salting.

---

### Bloque 4: Paso a Paso: Implementación JWT Completa (Slides 24 – 30)

#### Slide 24: Divisor de Sección 4
- **Layout Function**: `icesi.sectionSlideC()`
- **Title**: `"Paso a Paso: Implementación JWT Completa"`

#### Slide 25: Paso 1: Configurar SecurityFilterChain Stateless
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Paso 1: SecurityFilterChain Stateless"`
- **Col 1**: Explicación de la configuración de deshabilitación de CSRF y política Stateless.
- **Col 2**: Snippet con `.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)`.

#### Slide 26: Paso 2: Crear JwtAuthenticationFilter
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Paso 2: JwtAuthenticationFilter"`
- **Col 1**: Creación de un filtro heredando de `OncePerRequestFilter`.
- **Col 2**: Snippet extrayendo el header `Authorization: Bearer <token>`, validándolo y seteando la autenticación en el `SecurityContextHolder`.

#### Slide 27: Paso 3: Componente JwtUtils
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Paso 3: Componente JwtUtils"`
- **Col 1**: Clase `@Component` para operaciones criptográficas sobre tokens JWT.
- **Col 2**: Snippet con `generateToken()`, `validateToken()` y `getUsernameFromToken()`.

#### Slide 28: Paso 4: Endpoint /api/auth/login
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Paso 4: Endpoint de Autenticación"`
- **Col 1**: Inyección de `AuthenticationManager` en el REST Controller.
- **Col 2**: Snippet procesando las credenciales y retornando `ResponseEntity.ok(new JwtResponse(token))`.

#### Slide 29: Buenas Prácticas de Seguridad en Producción
- **Layout Function**: `icesi.slideFourCards()`
- **Title**: `"Buenas Prácticas para Producción"`
- **Card 1**: `"Secret Key Segura"` - Guardar la clave en variables de entorno / Vault (mínimo 256 bits).
- **Card 2**: `"Expiración Corta"` - Tokens de acceso con vida útil corta (15-30 mins) + Refresh Tokens.
- **Card 3**: `"HTTPS Obligatorio"` - Encriptar el canal de transporte para proteger headers `Authorization`.
- **Card 4**: `"Rate Limiting"` - Proteger endpoints `/api/auth/login` contra ataques de fuerza bruta.

#### Slide 30: Cierre y Preguntas
- **Layout Function**: `icesi.sectionSlideEGreen()`
- **Title**: `"¡Muchas Gracias!"`
- **Subtitle**: `"Spring Security Architecture & JWT | Universidad Icesi"`

---

## Handoff & Execution
Run `/implement-slides .agents/spec/slides-plan/spring-security-plan.md` to generate the presentation slides and compile the final PDF file under `slides/spring-security/spring-security.pdf`.
