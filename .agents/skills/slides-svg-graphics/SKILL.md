---
name: slides-svg-graphics
description: Guidelines and workflow to generate brand-compliant vector graphics, flowcharts, and SVG illustrations for Universidad Icesi HTML/Reveal.js presentations. SVGs are used directly without PDF conversion.
---

# Skill: `slides-svg-graphics` (Gráficos SVG en HTML)

Esta skill establece las directrices para crear, exportar y embeber gráficos vectoriales, diagramas lógicos e ilustraciones SVG personalizadas en las diapositivas HTML de la Universidad Icesi. A diferencia del flujo LaTeX, **los SVGs se usan directamente como `<img>` sin ninguna conversión a PDF**.

---

## 🎨 1. Tokens de Color Institucional para Diagramas

Todos los diagramas y SVGs personalizados deben usar estrictamente el esquema de colores institucional:

| Rol / Elemento | Hex | Token |
| :--- | :--- | :--- |
| **Primary / Accent Nodes** | `#5454E9` | `icesiblue` |
| **Secondary Processes** | `#865CF0` | `icesipurple` |
| **Success / Data / Paths** | `#4CB979` | `icesigreen` |
| **Warning / Highlight** | `#E4EB60` | `icesiyellow` |
| **Error / Critical** | `#E9683B` | `icesiorange` |
| **Dark Borders / Texts** | `#393939` | `icesidark` |

> **Regla**: Usar siempre `fill="transparent"` o `fill="none"` como fondo del `<svg>` raíz para que el diagrama se integre limpiamente sobre cualquier fondo de slide (sidebar de color, zona blanca, etc.).

---

## 🛠️ 2. Especificaciones de Diseño SVG

### 2.1 Nomenclatura y Almacenamiento
- Guardar todos los SVGs de cada tema en `slides/<tema>/assets/`
- Usar nombres en snake_case: `event_loop_diagram.svg`, `node_architecture.svg`
- Recursos globales de plantilla (patrón de rayas, etc.): `resources/patterns/`
- **No convertir a PDF**: el SVG se usa directamente en HTML

### 2.2 Template de Estructura SVG
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 WIDTH HEIGHT">
  <defs>
    <!-- Gradients, filters, markers van aquí -->
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#00000022"/>
    </filter>
    <!-- Arrow marker para diagramas -->
    <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#5454E9"/>
    </marker>
  </defs>
  <!-- Elementos del diagrama... -->
</svg>
```

### 2.3 Estilos de Elementos Recomendados

**Nodo rectángulo redondeado (primario)**:
```xml
<rect x="10" y="10" width="160" height="50" rx="12" ry="12"
  fill="#5454E9" stroke="none" filter="url(#shadow)"/>
<text x="90" y="40" text-anchor="middle" dominant-baseline="middle"
  fill="white" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="bold">
  Texto del Nodo
</text>
```

**Flecha de flujo entre nodos**:
```xml
<line x1="170" y1="35" x2="220" y2="35"
  stroke="#5454E9" stroke-width="2" marker-end="url(#arrow)"/>
```

**Nodo circular (para diagramas cíclicos)**:
```xml
<circle cx="200" cy="200" r="40" fill="#4CB979" stroke="white" stroke-width="3"/>
<text x="200" y="200" text-anchor="middle" dominant-baseline="middle"
  fill="white" font-size="12" font-weight="bold">PHASE</text>
```

---

## 📊 3. Tipos de Diagramas y Cuándo Usarlos

### Tipo A: Diagrama de Fases Circular
**Usar para**: Fases del Event Loop, ciclos de vida, procesos recurrentes.
- Fases como arcos coloreados o círculos equidistantes alrededor de un nodo central
- Centro: `icesiblue` con nombre del proceso en blanco
- Flechas en sentido horario con `stroke-width="2"` consistente
- **viewBox recomendado**: `0 0 400 400`

### Tipo B: Stack de Arquitectura por Capas
**Usar para**: Stacks tecnológicos, arquitectura de sistemas, capas de dependencia.
- Rectángulos horizontales apilados verticalmente (top=mayor abstracción)
- Gradiente de colores: `icesiyellow` → `icesiblue` → `icesipurple` → `icesigreen` → `icesidark`
- **viewBox recomendado**: `0 0 500 320`

### Tipo C: Evolución Lineal / Timeline
**Usar para**: Evolución tecnológica, historial de versiones, progresión de APIs.
- Tres o cuatro cajas conectadas con flechas izquierda-derecha
- Cada caja: color distinto, año/versión abajo, nombre arriba
- **viewBox recomendado**: `0 0 500 180`

### Tipo D: Tabla Comparativa / Matriz
**Usar para**: Node.js vs Python, Sync vs Async, SQL vs NoSQL.
- Grid con fila de encabezado y filas de características
- Checkmark (✓ `#4CB979`) o X (✗ `#E9683B`) en celdas
- **viewBox recomendado**: `0 0 600 380`

### Tipo E: Flowchart / Árbol de Decisión
**Usar para**: Ciclos Request-Response, flujo de ejecución async, pipeline de middleware.
- Rombos para decisiones, rectángulos para procesos, óvalos para inicio/fin
- **viewBox recomendado**: `0 0 500 400`

---

## 🔄 4. Pipeline de Creación (Sin CLI de conversión)

### Flujo simplificado (sin Inkscape, sin rsvg-convert):

1. **Escribir el SVG** manualmente o con asistencia del agente
2. **Guardar en** `slides/<tema>/assets/<nombre_diagrama>.svg`
3. **Embeber directamente** en el slide HTML con `<img>`

```html
<!-- Ejemplo: diagrama en slideTwoCols -->
icesi.slideTwoCols(
  'Arquitectura del Sistema',
  `<ul>
    <li>Cliente realiza peticiones HTTP</li>
    <li>API Gateway enruta las solicitudes</li>
    <li>Cada servicio tiene su propia BD</li>
  </ul>`,
  `<img src="slides/nodejs/assets/microservices_architecture.svg"
        style="width:100%; height:auto; display:block;"
        alt="Arquitectura de Microservicios">`
)
```

> **¿Por qué no necesitas convertir a PDF?**
> En LaTeX, los SVGs debían convertirse a PDF porque XeLaTeX no puede renderizar SVG directamente. En HTML, el navegador renderiza SVG nativo sin intermediarios.

---

## 🖼️ 5. Patrones de Embedding en HTML

### En Sidebar Slides (zona: panel lateral colorido)
```javascript
icesi.slideSidebarLeftBlue(
  'Event Loop de Node.js',
  `<ul>
    <li>Single-threaded, non-blocking</li>
    <li>libuv gestiona operaciones I/O</li>
    <li>Callbacks se ejecutan en orden</li>
  </ul>`,
  'slides/nodejs/assets/event_loop_diagram.svg'  // El CSS maneja el tamaño: 359×359px
)
```

### En Two-Column Slides (zona: columna derecha)
```javascript
icesi.slideTwoCols(
  'Comparativa Node.js vs Python',
  `<ul>
    <li>Node.js: alta concurrencia I/O</li>
    <li>Python: mejor para ML/Data Science</li>
  </ul>`,
  `<img src="slides/nodejs/assets/comparison_table.svg"
        style="width:100%; height:auto;"
        alt="Tabla comparativa Node.js vs Python">`
)
```

### En Stripe Slides (zona: área de contenido abierta)
```javascript
icesi.slideStripeTopLeft(
  'Arquitectura Node.js',
  `<div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; align-items:start;">
    <ul>
      <li>Motor V8 de Google</li>
      <li>libuv para I/O asíncrono</li>
    </ul>
    <img src="slides/nodejs/assets/node_architecture.svg"
         style="width:100%; height:auto;" alt="Arquitectura">
  </div>`
)
```

### En Standard Slides (ancho completo)
```javascript
icesi.slideStandard(
  'Fases del Event Loop',
  `<img src="slides/nodejs/assets/event_loop_phases.svg"
        style="width:80%; height:auto; display:block; margin:0 auto;"
        alt="Fases del Event Loop de Node.js">`
)
```

---

## 📐 6. Restricciones de Zona Gráfica por Layout

| Layout | Zona de imagen disponible | Notas |
|---|---|---|
| `slideSidebarLeft*` (parámetro imagePath) | 359×359px | CSS maneja el tamaño automáticamente |
| `slideTwoCols` col2 | ~570px ancho, 460px alto | `width:100%; height:auto` |
| `slideStripeTopLeft/Right` (content) | 1218px ancho, 430px alto | Combinar con mini-grid si es necesario |
| `slideStandard` (content) | 1218px ancho, 460px alto | `width:80%; margin:auto` para centrar |
| `slideFourCards` por card | ~270px ancho, 320px alto | Solo micro-iconos, mantener minimal |

---

## ✅ 7. Checklist de Calidad SVG

Antes de embeber cualquier SVG en un slide, verificar:
- [ ] Fondo transparente (`fill="none"` o `fill="transparent"` en el `<svg>` raíz)
- [ ] `viewBox` declarado explícitamente (permite escalar sin distorsión)
- [ ] Todo texto legible al tamaño objetivo: mínimo `font-size="13"` para columnas, `font-size="11"` para sidebar
- [ ] Contraste de color correcto: texto oscuro en relleno claro, texto blanco en relleno oscuro
- [ ] Sin recorte: todos los elementos dentro del `viewBox` declarado
- [ ] Flechas con `marker-end="url(#arrow)"` visibles
- [ ] Archivo guardado como `.svg` en `slides/<tema>/assets/`
- [ ] **No se requiere PDF companion** — el SVG se usa directamente
- [ ] Verificar visualmente en el navegador al 1280×720px (abrir la presentación y navegar al slide)
