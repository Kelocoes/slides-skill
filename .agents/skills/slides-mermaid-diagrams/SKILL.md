---
name: slides-mermaid-diagrams
description: Workflow para generar diagramas Mermaid inline directamente en slides HTML de la Universidad Icesi, sin CLI externo ni conversión a PNG/PDF.
---

# Skill: `slides-mermaid-diagrams` (Mermaid.js Inline)

Este workflow explica cómo usar **Mermaid.js directamente dentro de los slides HTML** de la Universidad Icesi. No se requieren herramientas CLI (`mmdc`), ni conversión a PNG/PDF.

---

### Sección 1: Cómo funciona Mermaid inline

Mermaid.js se carga desde CDN y procesa todos los `<div class="mermaid">` automáticamente al cargar la página. El helper `icesi.mermaid(code)` genera este bloque:

```javascript
// En el contenido de cualquier slide:
icesi.slideStandard(
  'Flujo de Autenticación',
  icesi.mermaid(`
    sequenceDiagram
      actor Cliente
      participant API
      participant DB
      Cliente->>API: POST /login
      API->>DB: SELECT usuario
      DB-->>API: datos
      API-->>Cliente: JWT Token
  `)
)
```

El resultado HTML que se inserta en el slide:
```html
<div class="mermaid">
  sequenceDiagram
    actor Cliente
    ...
</div>
```

Mermaid convierte este bloque en un SVG renderizado con el tema de colores Icesi.

---

### Sección 2: Inicialización con Tema Icesi

La inicialización de Mermaid ocurre automáticamente dentro de `icesi.init()`. El tema usa los colores institucionales:

```javascript
// Esto se ejecuta dentro de icesi.init() — NO necesitas llamarlo manualmente:
mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  themeVariables: {
    primaryColor:     '#5454E9',  // icesiblue — nodos primarios
    secondaryColor:   '#865CF0',  // icesipurple — nodos secundarios
    tertiaryColor:    '#4CB979',  // icesigreen — nodos terciarios
    primaryTextColor: '#FFFFFF',
    lineColor:        '#393939',  // icesidark
  },
  fontFamily: "'Plus Jakarta Sans', sans-serif",
});
```

Si necesitas override de colores por diagrama, usa directivas `%%{init}%%`:

```
%%{init: {'theme': 'base', 'themeVariables': {
  'primaryColor': '#E9683B',
  'primaryTextColor': '#fff'
}}}%%
graph TD ...
```

---

### Sección 3: Tipos de Diagramas y Ejemplos

#### A. Diagrama de Flujo (Flowchart)

```javascript
icesi.slideStandard(
  'Flujo de Petición HTTP',
  icesi.mermaid(`
    %%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#5454E9', 'primaryTextColor': '#fff', 'lineColor': '#393939'}}}%%
    graph TD
      A["Cliente"] -->|"Petición HTTP"| B{"API Gateway"}
      B -->|"Ruta /users"| C["Servicio Usuarios"]
      B -->|"Ruta /data"| D["Servicio Datos"]
      C --> E[("PostgreSQL")]
      D --> F[("MongoDB")]
      classDef blue fill:#5454E9,stroke:none,color:#fff
      classDef green fill:#4CB979,stroke:none,color:#fff
      classDef purple fill:#865CF0,stroke:none,color:#fff
      class A,B blue
      class C,D purple
      class E,F green
  `)
)
```

#### B. Diagrama de Secuencia

```javascript
icesi.slideTwoCols(
  'Ciclo de Autenticación JWT',
  `<ul>
    <li>POST /login envía credenciales</li>
    <li>El servidor valida contra la BD</li>
    <li>Se retorna un JWT firmado</li>
    <li>El cliente adjunta el token en cada request</li>
  </ul>`,
  icesi.mermaid(`
    sequenceDiagram
      autonumber
      actor Cliente
      participant API
      participant DB
      Cliente->>API: POST /login
      API->>DB: SELECT usuario
      DB-->>API: datos
      API-->>Cliente: JWT Token
      Cliente->>API: GET /perfil + JWT
      API-->>Cliente: Datos protegidos
  `)
)
```

#### C. Diagrama de Arquitectura (Subgraphs)

```javascript
icesi.slideSidebarLeftBlue(
  'Arquitectura Node.js',
  `<ul>
    <li>Motor V8 ejecuta JavaScript</li>
    <li>libuv gestiona I/O asíncrono</li>
    <li>El Event Loop coordina callbacks</li>
  </ul>`,
  '' // sin imagen en sidebar, usamos el diagrama inline
)

// O con el diagrama en la segunda columna:
icesi.slideTwoCols(
  'Capas de la Plataforma',
  `<ul>
    <li>Aplicación JS (tu código)</li>
    <li>Node.js APIs (http, fs, stream)</li>
    <li>Motor V8 + libuv</li>
    <li>Sistema Operativo</li>
  </ul>`,
  icesi.mermaid(`
    graph TB
      subgraph App ["Tu Aplicación"]
        JS["JavaScript"]
      end
      subgraph Node ["Node.js Runtime"]
        V8["Motor V8"]
        libuv["libuv"]
        APIs["Node APIs"]
      end
      subgraph OS ["Sistema Operativo"]
        IO["I/O, Network, Timers"]
      end
      JS --> APIs
      APIs --> V8
      APIs --> libuv
      libuv --> IO
  `)
)
```

#### D. Diagrama de Estado / Ciclo de Vida

```javascript
icesi.slideStripeTopLeft(
  'Ciclo de Vida de una Promise',
  icesi.mermaid(`
    stateDiagram-v2
      [*] --> Pending
      Pending --> Fulfilled : resolve()
      Pending --> Rejected  : reject()
      Fulfilled --> [*]
      Rejected  --> [*]
  `)
)
```

#### E. Diagrama de Clases / ER

```javascript
icesi.slideStandard(
  'Modelo de Datos',
  icesi.mermaid(`
    erDiagram
      USUARIO ||--o{ PEDIDO : "realiza"
      PEDIDO ||--|{ ITEM : "contiene"
      ITEM }|--|| PRODUCTO : "es un"
  `)
)
```

---

### Sección 4: Integración por Tipo de Slide

#### En `slideStandard` (diagrama ocupa todo el ancho):
```javascript
icesi.slideStandard('Título', icesi.mermaid(`graph LR\n  A --> B --> C`))
```

#### En `slideTwoCols` (diagrama en col2, texto en col1):
```javascript
icesi.slideTwoCols(
  'Título',
  `<ul><li>Punto 1</li></ul>`,
  icesi.mermaid(`graph TD\n  A --> B`)
)
```

#### En `slideSidebarLeft*` (diagrama en el contenido derecho):
```javascript
icesi.slideSidebarLeftBlue(
  'Título',
  icesi.mermaid(`graph LR\n  A --> B`) + `<p>Descripción adicional</p>`,
  '' // sin imagen de sidebar
)
```

#### En `slideStripeTopLeft/Right` (diagrama en zona de contenido):
```javascript
icesi.slideStripeTopLeft(
  'Título en Barra Verde',
  icesi.mermaid(`graph TD\n  A --> B --> C`)
)
```

---

### Sección 5: Reglas de Calidad Visual

- **Fondo transparente**: Mermaid.js usa SVG con fondo transparente por defecto. ✅
- **Escala**: Los SVGs de Mermaid tienen `max-width:100%; height:auto` en `icesibeamer.css`. ✅
- **Texto legible**: Usa `font-size` mínimo de 14px en variables de Mermaid para que sea legible al 1280×720px.
- **Simplicidad**: Máximo 8-10 nodos por diagrama en slides. Si el diagrama es más complejo, dividirlo en dos slides.
- **Colores**: Usar `classDef` para aplicar colores de marca a nodos específicos en diagramas complejos.
- **Sin mmdc CLI**: NO exportar a PNG/PDF para esta presentación. Mermaid renderiza directamente en el navegador.
