# Slide Specification Plan: Dart Programming Language & Architecture

## Destination & Objectives
- **Target Audience**: Estudiantes de Ingeniería de Software y Desarrolladores con conocimientos previos de programación (Java, C#, JavaScript/TypeScript) que aprenden Dart.
- **Pedagogical Goal**: Proporcionar una visión completa y rigurosa del lenguaje Dart y sus conceptos fundamentales de Lenguajes de Programación (Compilación JIT/AOT, Sound Null Safety, POO, y Concurrencia con Isolates) a través de **revelación progresiva** (construcción acumulativa paso a paso).
- **Target Slide Count**: 50
- **Output Files**:
  - Primary Deliverable: `slides/dart/dart.pdf`
  - HTML Canvas Medium: `slides/dart/dart.html`

---

## Decisions & Scope Boundary
- **In-Scope Key Concepts**:
  - **Teoría de Lenguajes (30%)**: Compilación JIT vs AOT, Dart VM vs Dart Web, sistema de tipos Sound (fuerte y seguro), Garbage Collection y concurrencia por paso de mensajes (Isolates vs Threads).
  - **Sintaxis & Null Safety (70%)**: Inferencias con `var`, inmutabilidad (`final` vs `const`), Sound Null Safety (`String` vs `String?`), operadores nulos (`?.`, `??`, `??=`, `!`), POO tradicional (clases, constructores nombrados, herencia, interfaces implícitas, mixins), y asincronía (`Future`, `Stream`, `Isolate`).
- **Out-of-Scope**: Widgets o UI de Flutter especificos (el foco es 100% en Dart como lenguaje de programación).

---

## Visual & Layout Strategy
- **Gráficos Vectoriales SVG Personalizados (`slides-svg-graphics`)**:
  - Slide 3: Diagrama de la Arquitectura del compilador JIT (Dart VM) vs AOT (Código Nativo).
  - Slide 14: Jerarquía del Sistema de Tipos Sound Null Safety (`Object?` vs `Object`).
  - Slide 33: Diagrama del Event Loop y la Cola de Microtasks / Eventos.
  - Slide 41: Arquitectura de Concurrencia por Isolates (Memoria separada e Isolate Ports).
- **Revelación Progresiva (Progressive Disclosure)**:
  - Las secuencias acumulativas utilizan el panel lateral constante (`slideSidebarLeft*`) con un gráfico SVG mientras la zona de contenido derecha acumula tarjetas/pasos.
- **Diapositivas de Síntesis al final de cada Bloque**:
  - Slides 10, 22, 32, 42, 50 utilizan `icesi.slideThreeCols` o `icesi.slideFourCards` para estructurar la síntesis del bloque.
- **Prohibición de Emojis**: Todos los íconos utilizan SVGs vectoriales semánticos (`slides-iconification`).

---

## Pedagogical Critique (Internal QA Pass)
- **Self-Contained Content**: ✅ Las 50 diapositivas son 100% autocontenidas en la presentación. Cero redirecciones a talleres o ejercicios externos.
- **Progressive Build Check**: ✅ Las secuencias de revelación progresiva avanzan un concepto por diapositiva manteniendo la coherencia visual.
- **Function Signatures**: ✅ `sectionSlideC(title)` y `sectionSlideA(title)` reciben exactamente 1 argumento.

---

## Slide-by-Slide Map (1..50)

### Bloque 1: Introducción, Historia y Compilación JIT vs AOT (Slides 1 – 10)

#### Slide 1: Portada Principal
- **Layout Function**: `icesi.titleSlideA()`
- **Title**: `"Dart Programming Language:<br>Architecture & Core Concepts"`
- **Subtitle**: `"De los Fundamentos de Lenguajes a la Concurrencia con Isolates<span class=\"slide-footer-tag\">Facultad de Ingeniería — Universidad Icesi</span>"`

#### Slide 2: ¿Qué es Dart y por qué fue creado?
- **Layout Function**: `icesi.slideSidebarLeftBlue()`
- **Title**: `"Visión General de Dart"`
- **Content**: Explicación de Dart como un lenguaje optimizado para cliente, desarrollado por Google, diseñado para UI rápida y multiplataforma.
- **Sidebar Visual**: `{ type: 'icons', items: [{icon: '<svg>...', label: 'Multiplataforma'}, {icon: '<svg>...', label: 'Sound Null Safety'}, {icon: '<svg>...', label: 'JIT + AOT'}, {icon: '<svg>...', label: 'Garbage Collected'}] }`

#### Slide 3: Arquitectura de Compilación Dual (JIT vs AOT)
- **Layout Function**: `icesi.slideSidebarLeftPurple()`
- **Title**: `"Compilación Dual: JIT y AOT"`
- **Content**: Explicación de cómo Dart combina dos modos de compilación para maximizar la productividad y el rendimiento.
- **Sidebar Visual**: `{ type: 'graphic', html: '<svg viewBox="0 0 380 320">...</svg>' }` *(SVG: Pipeline JIT vs AOT)*

#### Slide 4: Modo JIT (Just-In-Time) — Revelación Progresiva 1/2
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Compilación JIT (Just-In-Time)"`
- **Col 1**: Definición de JIT, ejecución en la Dart VM con compilación en tiempo de ejecución.
- **Col 2**: Beneficio clave: **Stateful Hot Reload** para ciclo de desarrollo ultrarrápido.

#### Slide 5: Modo AOT (Ahead-Of-Time) — Revelación Progresiva 2/2
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Compilación AOT (Ahead-Of-Time)"`
- **Col 1**: Compilación previa a código máquina nativo (ARM64 / x64).
- **Col 2**: Beneficio clave: Inicio instantáneo en producción y rendimiento predecible sin pausa de compilación.

#### Slide 6: Dart VM vs. Dart Web (JS / WASM)
- **Layout Function**: `icesi.slideFourCards()`
- **Title**: `"Dart en Diferentes Targets"`
- **Card 1**: `"Dart VM (JIT)"` - Desarrollo interactivo en desktop/móvil.
- **Card 2**: `"Dart AOT"` - Binarios nativos para iOS, Android, Windows, macOS, Linux.
- **Card 3**: `"dart2js"` - Transpilación a JavaScript optimizado para navegadores.
- **Card 4**: `"Dart WebAssembly"` - Compilación a Wasm para ejecución nativa en la web.

#### Slide 7: Anatomía del 'Hello World' y Punto de Entrada
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Punto de Entrada: main()"`
- **Col 1**: Explicación de la función `void main()` como punto de entrada obligatorio del programa.
- **Col 2**: Snippet de código con `main(List<String> args)` y `print()`.

#### Slide 8: Declaración de Variables: var vs Tipado Explícito — Progresivo 1/2
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Variables: Inferencias con var"`
- **Col 1**: Uso de `var` con inferencia estática de tipo en tiempo de compilación.
- **Col 2**: Code snippet mostrando cómo `var name = 'Dart';` asigna el tipo `String` de forma inmutable.

#### Slide 9: Inmutabilidad: final vs const — Progresivo 2/2
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Inmutabilidad: final vs const"`
- **Col 1**: `final`: Valor asignado una sola vez en tiempo de ejecución.
- **Col 2**: `const`: Constante estricta en tiempo de compilación (valores canónicos en memoria).

#### Slide 10: Síntesis del Bloque 1
- **Layout Function**: `icesi.slideThreeCols()`
- **Title**: `"Síntesis: Introducción y Compilación"`
- **Col 1**: JIT vs AOT.
- **Col 2**: Target Platforms (VM, Native, Web).
- **Col 3**: Asignación de Variables & Inmutabilidad.

---

### Bloque 2: Sistema de Tipos y Sound Null Safety (Slides 11 – 22)

#### Slide 11: Divisor de Sección 2
- **Layout Function**: `icesi.sectionSlideC()`
- **Title**: `"Sistema de Tipos y Sound Null Safety"`

#### Slide 12: El Problema de Null en Lenguajes Tradicionales — Progresivo 1/4
- **Layout Function**: `icesi.slideSidebarLeftOrange()`
- **Title**: `"El Problema del NullPointer (Billion-Dollar Mistake)"`
- **Content**: Explicación del riesgo de valores nulos en tiempo de ejecución en lenguajes como Java, C o JS tradicional.
- **Sidebar Visual**: `{ type: 'icons', items: [{icon: '<svg>...', label: 'NullPointer Exception'}, {icon: '<svg>...', label: 'Runtime Crashes'}] }`

#### Slide 13: La Filosofía de Sound Null Safety — Progresivo 2/4
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"La Filosofía Sound Null Safety"`
- **Col 1**: Los tipos son no-nulos por defecto (`Non-Nullable by Default`).
- **Col 2**: El compilador garantiza que una variable no-nula NUNCA contendrá `null` en ejecución.

#### Slide 14: Jerarquía de Tipos en Dart — Progresivo 3/4
- **Layout Function**: `icesi.slideSidebarLeftBlue()`
- **Title**: `"Jerarquía de Tipos: String vs String?"`
- **Content**: Explicación de cómo la jerarquía de tipos se divide en tipos anulables (`Nullable`) y no-anulables (`Non-Nullable`).
- **Sidebar Visual**: `{ type: 'graphic', html: '<svg viewBox="0 0 380 320">...</svg>' }` *(SVG: Type Hierarchy Tree)*

#### Slide 15: Operadores Nulos: ?. y ?? — Progresivo 4/4
- **Layout Function**: `icesi.slideFourCards()`
- **Title**: `"Operadores de Nulabilidad"`
- **Card 1**: `"Null-Aware Call (?.)"` - Acceso seguro a propiedades (`user?.name`).
- **Card 2**: `"Null-Coalescing (??)"` - Valor por defecto si es nulo (`name ?? 'Invitado'`).
- **Card 3**: `"Null-Assignment (??=)"` - Asignación condicional (`config ??= Default()`).
- **Card 4**: `"Null Assertion (!)"` - Casteo forzado a no-nulo (usar con precaución).

#### Slide 16: Tipos Primitivos en Dart
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Tipos Primitivos"`
- **Col 1**: Números (`int`, `double`, clase base `num`).
- **Col 2**: Cadenas y Booleanos (`String` con interpolación `${}`, `bool`).

#### Slide 17: Colecciones en Dart: Lists — Progresivo 1/3
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Colecciones: List<T>"`
- **Col 1**: Listas ordenadas e indexadas basadas en genericos.
- **Col 2**: Snippet con sintaxis de literales `[1, 2, 3]` y spread operator `...list`.

#### Slide 18: Colecciones en Dart: Sets — Progresivo 2/3
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Colecciones: Set<T>"`
- **Col 1**: Colección no ordenada de elementos únicos.
- **Col 2**: Operaciones de conjuntos (intersección, unión, diferencia).

#### Slide 19: Colecciones en Dart: Maps — Progresivo 3/3
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Colecciones: Map<K, V>"`
- **Col 1**: Pares clave-valor tipados.
- **Col 2**: Literales `{ 'key': 'value' }` e inspección de claves de forma segura.

#### Slide 20: Control Flow Operadores Avanzados
- **Layout Function**: `icesi.slideStripeTopLeft()`
- **Title**: `"Collection if y Collection for"`
- **Content**: Uso de estructuras de control dentro de literales de colecciones (`[if (isAdmin) 'AdminPanel', for (var i in items) i]`).

#### Slide 21: Funciones de Primera Clase y Parámetros Nombrados
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Funciones en Dart"`
- **Col 1**: Parámetros posicionales opcionales `[int age]`.
- **Col 2**: Parámetros nombrados `{required String name, int? age}`.

#### Slide 22: Síntesis del Bloque 2
- **Layout Function**: `icesi.slideThreeCols()`
- **Title**: `"Síntesis: Sistema de Tipos y Colecciones"`
- **Col 1**: Sound Null Safety & Operadores.
- **Col 2**: Colecciones (List, Set, Map).
- **Col 3**: Collection Operators & Funciones.

---

### Bloque 3: Programación Orientada a Objetos (Slides 23 – 32)

#### Slide 23: Divisor de Sección 3
- **Layout Function**: `icesi.sectionSlideC()`
- **Title**: `"Programación Orientada a Objetos en Dart"`

#### Slide 24: Clases y Atributos — Progresivo 1/5
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Declaración de Clases"`
- **Col 1**: Concepto de clase en Dart (todo objeto es una instancia de una clase).
- **Col 2**: Atributos con inicialización obligatoria o `late`.

#### Slide 25: Constructores y Sintaxis Corta — Progresivo 2/5
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Constructores e Inicializadores"`
- **Col 1**: Constructor por defecto con sintaxis concisa `Person(this.name, this.age);`.
- **Col 2**: Inicializador de lista para atributos `final`.

#### Slide 26: Constructores Nombrados (Named Constructors) — Progresivo 3/5
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Constructores Nombrados"`
- **Col 1**: Permite múltiples constructores con nombres semánticos (`User.guest()`, `User.fromJson()`).
- **Col 2**: Code snippet de deserialización JSON limpia.

#### Slide 27: Encapsulamiento y Miembros Privados — Progresivo 4/5
- **Layout Function**: `icesi.slideStripeTopLeft()`
- **Title**: `"Encapsulamiento a Nivel de Librería"`
- **Content**: En Dart no existen palabras clave `private` o `protected`. El prefijo guion bajo (`_fieldName`) priva el acceso a nivel de archivo/librería.

#### Slide 28: Getters y Setters Personalizados — Progresivo 5/5
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Getters y Setters"`
- **Col 1**: Sintaxis limpia `get` y `set` sin alterar la interfaz de acceso a la propiedad.
- **Col 2**: Snippet de cálculo de propiedad derivada `double get area => width * height;`.

#### Slide 29: Herencia y Clases Abstractas
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Herencia con extends y abstract class"`
- **Col 1**: Herencia simple con `extends` y llamadas a `super()`.
- **Col 2**: Clases abstractas (`abstract class`) que definen contratos sin instancia directa.

#### Slide 30: Interfaces Implícitas (Implicit Interfaces)
- **Layout Function**: `icesi.slideStripeTopRight()`
- **Title**: `"Interfaces Implícitas (implements)"`
- **Content**: En Dart no existe la palabra `interface`. **Toda clase define implícitamente una interfaz** que puede ser implementada con `implements`.

#### Slide 31: Reutilización de Código con Mixins (with)
- **Layout Function**: `icesi.slideSidebarLeftOrange()`
- **Title**: `"Mixins: Reutilización de Código sin Herencia Múltiple"`
- **Content**: Uso de la palabra clave `mixin` y la cláusula `with` para inyectar comportamiento a múltiples clases desvinculadas jerárquicamente.
- **Sidebar Visual**: `{ type: 'icons', items: [{icon: '<svg>...', label: 'mixin Logger'}, {icon: '<svg>...', label: 'mixin Validator'}, {icon: '<svg>...', label: 'cláusula with'}] }`

#### Slide 32: Síntesis del Bloque 3
- **Layout Function**: `icesi.slideThreeCols()`
- **Title**: `"Síntesis: Programación Orientada a Objetos"`
- **Col 1**: Clases & Named Constructors.
- **Col 2**: Encapsulamiento & Getters/Setters.
- **Col 3**: Herencia, Interfaces & Mixins.

---

### Bloque 4: Programación Asíncrona, Event Loop e Isolates (Slides 33 – 42)

#### Slide 33: Divisor de Sección 4
- **Layout Function**: `icesi.sectionSlideC()`
- **Title**: `"Asincronía y Concurrencia en Dart"`

#### Slide 34: El Modelo de Ejecución Single-Threaded — Progresivo 1/4
- **Layout Function**: `icesi.slideSidebarLeftBlue()`
- **Title**: `"El Modelo Single-Threaded y el Event Loop"`
- **Content**: Dart ejecuta el código en un solo hilo impulsado por un **Event Loop** que procesa eventos y micro-tareas en orden estricto.
- **Sidebar Visual**: `{ type: 'graphic', html: '<svg viewBox="0 0 380 320">...</svg>' }` *(SVG: Event Loop Cycle)*

#### Slide 35: Futures: Representación de Operaciones Asíncronas — Progresivo 2/4
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Futures: Computaciones Futuras"`
- **Col 1**: Un `Future<T>` representa un valor que estará disponible en el futuro (equivalente a Promise en JS).
- **Col 2**: Estados del Future: Uncompleted vs. Completed (with value / with error).

#### Slide 36: Sintaxis async y await
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Programación Asíncrona con async / await"`
- **Col 1**: Marcado de funciones con `async` para retornar automáticamente un `Future`.
- **Col 2**: Suspensión no bloqueante de la ejecución con `await`.

#### Slide 37: Manejo de Errores Asíncronos con try-catch
- **Layout Function**: `icesi.slideStripeTopLeft()`
- **Title**: `"Control de Errores en Futures"`
- **Content**: Uso de bloques `try-catch-finally` dentro de funciones `async` o el método `.catchError()` para capturar excepciones asíncronas de forma limpia.

#### Slide 38: Streams: Flujos Múltiples de Datos Asíncronos — Progresivo 3/4
- **Layout Function**: `icesi.slideSidebarLeftPurple()`
- **Title**: `"Streams: Flujos Continuos de Datos"`
- **Content**: Un `Stream<T>` es una secuencia asíncrona de eventos a lo largo del tiempo (como clics, eventos WebSockets o lecturas de archivos).
- **Sidebar Visual**: `{ type: 'icons', items: [{icon: '<svg>...', label: 'Single-Subscription'}, {icon: '<svg>...', label: 'Broadcast Stream'}, {icon: '<svg>...', label: 'await for'}, {icon: '<svg>...', label: 'StreamController'}] }`

#### Slide 39: Generadores Asíncronos con async* y yield
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Generadores Asíncronos (async*)"`
- **Col 1**: Uso de `async*` para declarar funciones que emiten valores en un Stream.
- **Col 2**: La palabra clave `yield` para emitir cada valor individualmente.

#### Slide 40: Concurrencia Real: Isolates vs. Threads — Progresivo 4/4
- **Layout Function**: `icesi.slideSidebarLeftOrange()`
- **Title**: `"Concurrencia Real: Isolates"`
- **Content**: A diferencia de los threads tradicionales con memoria compartida, cada **Isolate** tiene su propia memoria aislada y se comunica exclusivamente por paso de mensajes.
- **Sidebar Visual**: `{ type: 'graphic', html: '<svg viewBox="0 0 380 320">...</svg>' }` *(SVG: Isolates & SendPort/ReceivePort)*

#### Slide 41: Comunicación entre Isolates con SendPort y ReceivePort
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Paso de Mensajes entre Isolates"`
- **Col 1**: `ReceivePort`: Canal de recepción de mensajes en el Isolate principal.
- **Col 2**: `Isolate.spawn()` o `Isolate.run()` para ejecutar tareas CPU-bound pesadas sin congelar la UI.

#### Slide 42: Síntesis del Bloque 4
- **Layout Function**: `icesi.slideThreeCols()`
- **Title**: `"Síntesis: Asincronía y Concurrencia"`
- **Col 1**: Event Loop & Futures (`async`/`await`).
- **Col 2**: Streams & Generadores (`async*`/`yield`).
- **Col 3**: Isolates & Concurrencia sin Memoria Compartida.

---

### Bloque 5: Ecosistema, Buenas Prácticas y Relación con Flutter (Slides 43 – 50)

#### Slide 43: Divisor de Sección 5
- **Layout Function**: `icesi.sectionSlideC()`
- **Title**: `"Ecosistema, Buenas Prácticas y Flutter"`

#### Slide 44: Gestor de Paquetes pub.dev y pubspec.yaml
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Gestión de Dependencias: pubspec.yaml"`
- **Col 1**: Archivo de configuración `pubspec.yaml` para declarar dependencias y versiones semantic-versioning.
- **Col 2**: Comando `dart pub get` y repositorio oficial `pub.dev`.

#### Slide 45: Linter y Reglas de Estilo Oficiales (analysis_options.yaml)
- **Layout Function**: `icesi.slideStripeTopLeft()`
- **Title**: `"Análisis Estático y Reglas de Linter"`
- **Content**: Uso del linter oficial de Dart (`package:lints`) configurado en `analysis_options.yaml` para garantizar un estilo de código consistente a través de `dart analyze` y `dart format`.

#### Slide 46: Extension Methods: Extendiendo Tipos Existentes
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Extension Methods"`
- **Col 1**: Permite añadir nuevos métodos a clases existentes (incluso primitivos como `String` o `int`) sin modificar su código fuente.
- **Col 2**: Snippet útil `extension StringUtils on String { bool get isEmail => ... }`.

#### Slide 47: Generics Avanzados y Bounded Type Parameters
- **Layout Function**: `icesi.slideTwoCols()`
- **Title**: `"Generics y Restricciones"`
- **Col 1**: Uso de `class Stack<T>` para código reutilizable y tipo-seguro.
- **Col 2**: Restricciones de tipo mediante `class NumericRepo<T extends num>`.

#### Slide 48: ¿Por qué Flutter eligió Dart?
- **Layout Function**: `icesi.slideFourCards()`
- **Title**: `"¿Por qué Flutter usa Dart?"`
- **Card 1**: `"JIT Hot Reload"` - Ciclo de iteración instantáneo en desarrollo.
- **Card 2**: `"AOT Native"` - Rendimiento nativo de 60/120 FPS sin puentes JavaScript.
- **Card 3**: `"Single-Threaded Event Loop"` - Layout y renderizado predecibles sin bloqueos por locks.
- **Card 4**: `"Declarative Composition"` - Objetos ligeros y rápido Garbage Collection de vida corta.

#### Slide 49: Resumen de Buenas Prácticas de Codificación
- **Layout Function**: `icesi.slideFourCards()`
- **Title**: `"Pilares de Código Limpio en Dart"`
- **Card 1**: `"Null Safety"` - Evitar el operador `!` y preferir manejo explícito de nulos.
- **Card 2**: `"Inmutabilidad"` - Usar `final` y `const` en todas las declaraciones posibles.
- **Card 3**: `"Lint Rules"` - Mantener análisis estático estricto en cero advertencias.
- **Card 4**: `"Asincronía Limpia"` - Usar `async/await` en lugar de encadenamiento excesivo de `.then()`.

#### Slide 50: Cierre y Recapitulación General
- **Layout Function**: `icesi.sectionSlideEGreen()`
- **Title**: `"¡Gracias!"`
- **Subtitle**: `"Dart Language & Architecture | Universidad Icesi"`

---

## Handoff & Execution
Run `/implement-slides .agents/spec/slides-plan/dart-plan.md` to generate the presentation slides and compile the final PDF file under `slides/dart/dart.pdf`.
