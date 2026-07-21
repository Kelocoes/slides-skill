---
name: generate-slides
description: Beamer Layout Library and Slide Generation skill — Universidad Icesi slide template composition workflow using Reveal.js + HTML + CSS + Mermaid.js.
---

# Skill: `generate-slides` (HTML Component Library — Reveal.js)

Esta skill define la biblioteca de layouts para las presentaciones de la Universidad Icesi y provee el workflow de composición para que agentes autónomos construyan slides HTML visualmente ricos, alineados a la marca institucional, usando el sistema **Reveal.js + icesibeamer.css + icesibeamer.js**.

---

## 📂 Estructura del Proyecto

```
skill-slides/
├── icesibeamer.css            # Master stylesheet (≡ icesibeamer.sty en LaTeX)
├── icesibeamer.js             # Component library (≡ macros \titleSlideA, etc.)
├── resources/
│   ├── fonts/                 # Plus Jakarta Sans TTF
│   ├── logos/                 # ICESI logos en SVG (positivo y negativo)
│   └── patterns/              # icesi_stripe_pattern.svg y otros SVGs globales
└── slides/<tema>/
    ├── <tema>.html            # Archivo de presentación (≡ <tema>.tex)
    └── assets/                # Diagramas, iconos e imágenes del tema
```

---

## 🎨 Paleta de Color Institucional

| Variable CSS | Hex | Uso |
|---|---|---|
| `--icesi-blue`   | `#5454E9` | Títulos primarios, accents, fondo portadas |
| `--icesi-purple` | `#865CF0` | Secciones secundarias, sidebar morado |
| `--icesi-green`  | `#4CB979` | Estado de éxito, acento de franja |
| `--icesi-yellow` | `#E4EB60` | Highlights, cajas de subtítulo |
| `--icesi-orange` | `#E9683B` | Alertas, sidebar naranja |
| `--icesi-dark`   | `#393939` | Texto del cuerpo |

---

## 📐 Biblioteca de Layouts Disponibles

### Categoría 1 — Portadas (Title Slides)

| Función JS | Args | Caso de uso |
|---|---|---|
| `icesi.titleSlideA(title, subtitle)` | 2 | Fondo azul, caja blanca, caja amarilla |
| `icesi.titleSlideB(title, subtitle, footer)` | 3 | Fondo blanco, barra verde, texto derecha |
| `icesi.titleSlideC(title, subtitle)` | 2 | Bloque azul abajo + patrón rayas |
| `icesi.titleSlideD(title, subtitle, badge)` | 3 | Split azul/morado, badge amarillo |
| `icesi.titleSlideE(title, subtitle)` | 2 | Fondo blanco, caja azul + morada |
| `icesi.titleSlideF(title, subtitle)` | 2 | Bloque azul top + naranja, logo abajo |

### Categoría 2 — Divisores de Sección

| Función JS | Args | Caso de uso |
|---|---|---|
| `icesi.sectionSlideA(title)` | 1 | Minimal, barra azul inferior |
| `icesi.sectionSlideB(title, imagePath)` | 2 | Barra naranja, imagen en panel derecho |
| `icesi.sectionSlideC(title)` | 1 | Fondo azul, caja blanca, acento verde |
| `icesi.sectionSlideE(title)` | 1 | Fondo blanco, título azul |
| `icesi.sectionSlideEBlue(title)` | 1 | Fondo azul, título blanco |
| `icesi.sectionSlideEGreen(title)` | 1 | Fondo verde, título blanco |
| `icesi.sectionSlideEYellow(title)` | 1 | Fondo amarillo, título oscuro |
| `icesi.sectionSlideEOrange(title)` | 1 | Fondo naranja, título blanco |

### Categoría 3 — Sidebar Slides

| Función JS | Args | Caso de uso |
|---|---|---|
| `icesi.slideSidebarLeftOrange(title, content, imagePath)` | 3 | Sidebar naranja + zona de gráfico |
| `icesi.slideSidebarLeftBlue(title, content, imagePath)` | 3 | Sidebar azul + zona de gráfico |
| `icesi.slideSidebarLeftPurple(title, content, imagePath)` | 3 | Sidebar morado + zona de gráfico |

> **Parámetro `imagePath`**: Ruta a SVG/PNG para el panel lateral. Pasa `''` si no hay imagen.

### Categoría 4 — Decorativos / Banner

| Función JS | Args | Caso de uso |
|---|---|---|
| `icesi.slideStripeTopLeft(title, content)` | 2 | Franja azul top + acento verde izquierda |
| `icesi.slideStripeTopRight(title, content)` | 2 | Franja azul top + acento verde derecha |

### Categoría 5 — Slides de Contenido

| Función JS | Args | Caso de uso |
|---|---|---|
| `icesi.slideStandard(title, content)` | 2 | Header logo + área de contenido libre |
| `icesi.slideTwoCols(title, col1, col2)` | 3 | Dos columnas iguales |
| `icesi.slideThreeCols(title, col1, col2, col3)` | 4 | Tres columnas iguales |
| `icesi.slideFourCards(title, c1t,c1, c2t,c2, c3t,c3, c4t,c4)` | 9 | Grid de cuatro tarjetas coloreadas |

---

## 🛠️ Helpers de Contenido

```javascript
// Diagrama Mermaid inline (sin mmdc CLI, sin exportar a PNG)
icesi.mermaid(`
  graph TD
    A[Cliente] --> B{API}
    B --> C[BD]
`)

// Bloque Markdown (procesado por Reveal.js plugin)
icesi.markdown(`
  - Punto 1 con **negrita**
  - Punto 2
`)

// Bloque de código con resaltado de sintaxis
icesi.codeBlock(`
  const express = require('express')
  const app = express()
`, 'javascript')
```

---

## 🚨 Reglas Críticas de Layout

### Regla 1 — Títulos sin Hyphenation
Los títulos usan `hyphens: none` en CSS (equivalente al `\hyphenpenalty=10000` de LaTeX). Para títulos largos usa `<br>` explícito:

```javascript
icesi.titleSlideA(
  'Node.js:<br>Servidores JavaScript',
  'Subtítulo aquí'
)
```

### Regla 2 — Imagen en Sidebar
La zona de imagen en los sidebars es `359×359px`. Usa SVG o PNG con fondo transparente:

```javascript
icesi.slideSidebarLeftBlue(
  'Arquitectura Node.js',
  `<ul>
    <li>Motor V8 de Google Chrome</li>
    <li>Event Loop no bloqueante</li>
  </ul>`,
  'slides/nodejs/assets/node_architecture.svg'
)
```

### Regla 3 — Tarjetas con Título Personalizable
En `slideFourCards`, cada tarjeta acepta título y contenido separados:

```javascript
icesi.slideFourCards(
  'APIs Nativas de Node.js',
  'HTTP/HTTPS', '<p>Módulo para servidores</p>',
  'File System', '<p>Lectura y escritura de archivos</p>',
  'Events', '<p>EventEmitter y listeners</p>',
  'Stream', '<p>Flujos de datos eficientes</p>'
)
```

### Regla 4 — Densidad de Contenido
- **Nunca dejar más del 40% vacío**: Si el contenido es escaso, añade un diagrama Mermaid o imagen.
- **Slides estándar**: 4–6 bullet points O una combinación diagrama + 2–3 puntos.
- **Columnas**: Cada columna debe tener mínimo 2 ítems.

### Regla 5 — Divisores de Sección
Insertar un `sectionSlide*` cada 3–4 slides de contenido para dar estructura visual y respiración al flujo.

### Regla 6 — Integración con Diagramas SVG
Cuando un slide describe un sistema o flujo, SIEMPRE acompañarlo de un diagrama:

```javascript
// Con sidebar — el diagrama va en el panel izquierdo
icesi.slideSidebarLeftBlue(
  'Event Loop de Node.js',
  `<ul><li>Single-threaded</li><li>Non-blocking I/O</li></ul>`,
  'slides/nodejs/assets/event_loop.svg'
)

// Con dos columnas — el diagrama va en col2
icesi.slideTwoCols(
  'Comparativa de Rendimiento',
  `<ul><li>Node.js: alta concurrencia</li></ul>`,
  `<img src="slides/nodejs/assets/benchmark.svg" style="width:100%;height:auto;">`
)

// Con Mermaid inline — directamente en el contenido
icesi.slideStandard(
  'Flujo de Petición HTTP',
  icesi.mermaid(`
    sequenceDiagram
      actor Cliente
      participant API
      participant DB
      Cliente->>API: GET /datos
      API->>DB: SELECT *
      DB-->>API: rows
      API-->>Cliente: JSON
  `)
)
```

---

## 🚀 Workflow de Composición

### Paso 1 — Crear el archivo HTML de la presentación

```html
<!-- slides/<tema>/<tema>.html -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Presentación — Universidad Icesi</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/reveal.css">
  <link rel="stylesheet" href="../../icesibeamer.css">
</head>
<body>
<div class="reveal">
  <div class="slides" id="icesi-slides"></div>
</div>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/reveal.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/plugin/markdown/markdown.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/plugin/highlight/highlight.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"></script>
<script src="../../icesibeamer.js"></script>
<script>
  // Ajustar rutas de logos para subdirectorio
  icesi.setBasePath('../../');

  const slides = [
    icesi.titleSlideA('Mi Tema', 'Subtítulo del curso'),
    // ... más slides
  ];
  document.getElementById('icesi-slides').innerHTML = slides.join('\n');
  icesi.init();
</script>
</body>
</html>
```

### Paso 2 — Ver en el navegador
Abrir `slides/<tema>/<tema>.html` en Chrome o Edge. **No requiere compilación.**

> **IMPORTANTE**: Por restricciones de CORS en recursos locales (fuentes, logos), usar un servidor local:
> ```powershell
> # Desde la raíz del proyecto:
> npx -y http-server . -p 8080
> # Luego abrir: http://localhost:8080/slides/<tema>/<tema>.html
> ```

### Paso 3 — Exportar a PDF (opcional)
```powershell
# Con puppeteer (método más fiel):
npx -y puppeteer-pdf http://localhost:8080/slides/<tema>/<tema>.html?print-pdf slides/<tema>/build/<tema>.pdf

# O desde Chrome: Ctrl+P → Guardar como PDF → Sin márgenes
```

### Paso 4 — Capturas PNG para QA visual
```powershell
# Captura de cada slide como PNG para revisión:
npx -y puppeteer-screenshots http://localhost:8080/slides/<tema>/<tema>.html slides/<tema>/build/
```

### Paso 5 — QA Visual Checklist
- [ ] **Portadas**: Título visible, sin overflow, sin hyphenation indeseada.
- [ ] **Divisores de sección**: Título completo, sin truncación.
- [ ] **Slides estándar**: Texto inicia debajo del header (> 240px), no se solapa con logo.
- [ ] **Sidebar slides**: Imagen visible y proporcionada dentro del panel de color.
- [ ] **Tarjetas**: 4 tarjetas completas, texto no truncado, bordes visibles.
- [ ] **Dos/Tres columnas**: Columnas equilibradas, sin desbordamiento.
- [ ] **Stripe slides**: Título en barra verde legible, contenido en zona blanca.
- [ ] **Diagramas Mermaid**: Renderizan correctamente, colores institucionales visibles.

---

## 📋 Template de Presentación — 25 Slides

```javascript
// Estructura recomendada para un módulo técnico completo

// PORTADA (1)
icesi.titleSlideA('Tema: [Tecnología]', 'Nombre del curso • Fecha'),

// BLOQUE 1: Introducción (4 slides)
icesi.slideStandard('¿Qué es [Tecnología]?', `<ul>...</ul>`),
icesi.slideSidebarLeftBlue('Historia y Origen', `...`, 'assets/timeline.svg'),
icesi.slideTwoCols('Características Clave', `<ul>...</ul>`, `<ul>...</ul>`),
icesi.sectionSlideA('Instalación y Configuración'),

// BLOQUE 2: Instalación (3 slides)
icesi.slideStripeTopLeft('Requisitos del Sistema', `<ul>...</ul>`),
icesi.slideStandard('Verificación', icesi.codeBlock('node --version\nnpm --version', 'bash')),
icesi.slideSidebarLeftOrange('Estructura del Proyecto', `...`, 'assets/folder.svg'),

// BLOQUE 3: Conceptos Centrales (5 slides)
icesi.sectionSlideEBlue('Arquitectura y Event Loop'),
icesi.slideSidebarLeftBlue('Event Loop', `...`, 'assets/event_loop.svg'),
icesi.slideTwoCols('Single Thread vs Multi-Thread', `...`, `...`),
icesi.slideThreeCols('Fases del Event Loop', `...`, `...`, `...`),
icesi.slideFourCards('APIs Nativas Clave', 'HTTP','...', 'fs','...', 'Events','...', 'Stream','...'),

// BLOQUE 4: Async (4 slides)
icesi.sectionSlideEPurple('Async en la Práctica'),
icesi.slideSidebarLeftPurple('Callbacks', `...`, 'assets/callback_hell.svg'),
icesi.slideTwoCols('Promises vs Async/Await', `...`, `...`),
icesi.slideStripeTopRight('Ejemplo Completo', icesi.codeBlock('...', 'js')),

// CIERRE (2 slides)
icesi.slideStandard('Recursos y Próximos Pasos', `<ul>...</ul>`),
icesi.titleSlideF('¡Gracias!', '¿Preguntas?'),
```

---

## 🔗 Integración con Skills Hermanas

- **`slides-mermaid-diagrams`**: Usar `icesi.mermaid(code)` para diagramas inline sin CLI
- **`slides-iconification`**: Usar SVGs directamente con `<img src="...">` en el contenido
- **`slides-svg-graphics`**: Emb usar `<img>` apuntando a SVGs en `slides/<tema>/assets/`

### Convención de rutas de assets:
- Assets de cada tema: `slides/<tema>/assets/`
- Recursos globales de plantilla: `resources/patterns/`, `resources/logos/`
- **Nunca** mezclar assets de tema con recursos globales
