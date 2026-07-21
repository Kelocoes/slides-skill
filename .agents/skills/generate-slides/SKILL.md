---
name: generate-slides
description: Beamer Layout Library and Slide Generation skill for Universidad Icesi slide template composition workflow.
---

# Skill: `generate-slides` (Beamer Layout Library and Slide Generation)

This skill defines the slide layout library for Universidad Icesi and provides a step-by-step composition workflow for autonomous agents to dynamically build brand-compliant, information-dense, visually rich slides based on user requirements.

---

## 📂 Layout Library Structure

```
skill-slides/
├── icesibeamer.sty            # Master stylesheet with all macros
├── resources/
│   ├── fonts/                 # Plus Jakarta Sans TTF files
│   ├── logos/                 # ICESI positive and negative PDFs + SVGs
│   └── patterns/              # Stripe pattern PDF + custom SVG/PDF diagrams
└── slides/<topic>/
    ├── <topic>.tex            # Main presentation file
    └── build/                 # Output: .pdf + .aux + page-NN.png previews
```

The consolidated stylesheet [icesibeamer.sty](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/icesibeamer.sty) contains all macro declarations.

---

## 🎨 Brand Color Reference

| Macro Name | Hex | Usage |
|---|---|---|
| `icesiblue` | `#5454E9` | Primary titles, accents, main nodes |
| `icesipurple` | `#865CF0` | Secondary sections, sidebar purple |
| `icesigreen` | `#4CB979` | Success states, checkmarks |
| `icesiyellow` | `#E4EB60` | Highlights, subtitles on dark bg |
| `icesiorange` | `#E9683B` | Warnings, sidebar orange, errors |
| `icesidark` | `#393939` | Body text, dark backgrounds |

---

## 📐 Available Slide Layout Macros

### Category 1 — Title / Cover Slides (Portadas)
| Macro | Args | Use case |
|---|---|---|
| `\titleSlideA{title}{subtitle}` | 2 | Blue bg, white title box, yellow subtitle box |
| `\titleSlideB{title}{subtitle}{footer}` | 3 | White bg, green bar, right-aligned text |
| `\titleSlideC{title}{subtitle}` | 2 | Blue bottom block + stripe pattern |
| `\titleSlideD{title}{subtitle}{badge}` | 3 | Split blue/purple, yellow badge |
| `\titleSlideE{title}{subtitle}` | 2 | White bg, blue + purple boxes |
| `\titleSlideF{title}{subtitle}` | 2 | Full-width blue top half + orange accent |

### Category 2 — Section Dividers
| Macro | Args | Use case |
|---|---|---|
| `\sectionSlideA{title}` | 1 | Minimal, blue bar bottom |
| `\sectionSlideB{title}{image-path}` | 2 | Orange bar, optional right image |
| `\sectionSlideC{title}` | 1 | Blue bg, white box, green accent |
| `\sectionSlideE{title}` | 1 | White bg, blue title |
| `\sectionSlideEBlue{title}` | 1 | Blue bg, white title |
| `\sectionSlideEGreen{title}` | 1 | Green bg, white title |
| `\sectionSlideEYellow{title}` | 1 | Yellow bg, dark title |
| `\sectionSlideEOrange{title}` | 1 | Orange bg, white title |

### Category 3 — Sidebar Slides (Content + Graphic)
| Macro | Args | Use case |
|---|---|---|
| `\slideSidebarLeftOrange{title}{content}{image-path}` | 3 | Orange sidebar + graphic zone |
| `\slideSidebarLeftBlue{title}{content}{image-path}` | 3 | Blue sidebar + graphic zone |
| `\slideSidebarLeftPurple{title}{content}{image-path}` | 3 | Purple sidebar + graphic zone |

> **Image param**: Pass path to a PDF/PNG that fits inside the sidebar zone (max 9.5cm × 9.5cm). Pass `{}` for no image.

### Category 4 — Decorative / Banner Slides
| Macro | Args | Use case |
|---|---|---|
| `\slideStripeTopLeft{title}{content}` | 2 | Blue top bar + green left stripe, text right |
| `\slideStripeTopRight{title}{content}` | 2 | Blue top bar + green right stripe, text left |

### Category 5 — Content Slides
| Macro | Args | Use case |
|---|---|---|
| `\slideStandard{title}{content}` | 2 | Logo header + free-form content area |
| `\slideTwoCols{title}{col1}{col2}` | 3 | Two equal columns |
| `\slideThreeCols{title}{col1}{col2}{col3}` | 4 | Three equal columns |
| `\slideFourCards{title}{card1}{card2}{card3}{card4}` | 5 | Four colored tcolorbox cards |

---

## 🚨 Critical Layout Rules

### Rule 1 — Prevent Text Overflow in Titles
Titles in macros like `\titleSlideA` use a fixed-width box. Long titles MUST use manual line breaks `\\` to avoid overflow or word-wrapping:
```latex
\titleSlideA{Node.js:\\Servidores JavaScript}{Subtitle here}
```
Always add `\hyphenpenalty=10000\exhyphenpenalty=10000` in custom TikZ nodes to prevent automatic hyphenation (e.g., avoid "Ja-vascript" splits).

### Rule 2 — Sidebar Image Sizing
The sidebar image zone is 9.5cm × 9.5cm. Images must have a transparent or solid background that contrasts with the sidebar color. Use `keepaspectratio` to avoid distortion. SVGs must be pre-converted to PDF using:
```bash
npx -y @mermaid-js/mermaid-cli -i diagram.mmd -o diagram.pdf
```
Or for SVG→PDF conversion (Inkscape or rsvg-convert):
```bash
rsvg-convert -f pdf -o diagram.pdf diagram.svg
```

### Rule 3 — Card Title Personalization
`\slideFourCards` card titles ("Card 1", "Card 2"...) are HARDCODED in the macro. For custom card titles, use `\slideTwoCols` or `\slideThreeCols` with `tcolorbox` environments inside each column, OR modify `\slideFourCards` in `icesibeamer.sty` to accept custom headers.

### Rule 4 — Content Density
Every slide must feel visually balanced. Follow these density guidelines:
- **Never leave more than 40% of a slide empty**. If content is sparse, consider adding an SVG diagram (see `slides-svg-graphics` skill), a code snippet block, or use a sidebar layout with a graphic.
- **Standard slides**: Aim for 4–6 bullet points OR equivalent visual richness (diagram + 2–3 points).
- **Three/Two-col slides**: Each column must have 2+ items. If one column would be empty, collapse to fewer columns.
- **StripeTopLeft/Right slides**: The zone to the right/left of the title bar must be filled with at least a diagram or visual element.

### Rule 5 — Spacing Anchor
All Category 5 macros use `\mbox{}\vspace*{5.6cm}` to anchor text below the header zone. Do NOT modify this spacing per-slide — it is controlled globally in `icesibeamer.sty`.

### Rule 6 — Section Dividers Every 3–4 Content Slides
Structure the presentation with section dividers (`sectionSlide*`) every 3–4 content slides to provide visual breathing room and mark topic transitions.

### Rule 7 — SVG Diagram Integration
When a slide describes a system, architecture, or process flow, ALWAYS pair it with a diagram from the `slides-svg-graphics` skill. Use:
- `\slideSidebarLeft*` for diagrams that explain the topic on the left sidebar
- `\slideTwoCols` where col2 is `\includegraphics[width=\textwidth, keepaspectratio]{path/to/diagram.pdf}`
- `\slideStripeTopLeft/Right` paired with a diagram in the open zone

---

## 🚀 Compilation and Verification Workflow

When generating or modifying slides, execute the following pipeline:

### Step 1 — Compile 3 Times (XeLaTeX)
```bash
xelatex -interaction=nonstopmode -output-directory=slides/<topic>/build slides/<topic>/<topic>.tex
xelatex -interaction=nonstopmode -output-directory=slides/<topic>/build slides/<topic>/<topic>.tex
xelatex -interaction=nonstopmode -output-directory=slides/<topic>/build slides/<topic>/<topic>.tex
```

### Step 2 — Export to PNG for Visual Audit
```bash
pdftoppm -png -r 150 slides/<topic>/build/<topic>.pdf slides/<topic>/build/page
```

### Step 3 — Visual QA Checklist
After generating PNGs, view each one and verify:
- [ ] **Cover slide**: No word-splits in the title. Subtitle visible and not truncated.
- [ ] **Section dividers**: Title text fully visible, no overflow to the right.
- [ ] **Standard content slides**: Text begins well below the logo (min 3cm gap). No overlap with header.
- [ ] **Sidebar slides**: Image is visible and correctly proportioned inside the sidebar color zone.
- [ ] **Cards**: All 4 cards fully visible, text not truncated, card borders clearly visible.
- [ ] **Three/Two cols**: Columns balanced, no content cut at slide bottom.
- [ ] **Stripe slides**: Title in the colored band is readable. Content in the white area does not invade the stripe.
- [ ] **No empty slides**: Every slide has adequate information density (< 40% blank space).

---

## 📋 Recommended 25-Slide Structure Template

Use this structure as a baseline for a comprehensive technical module:

```
PORTADA (1)
├── 01. titleSlideA/F — Title + Subtitle + Course context

BLOQUE 1: Introducción (4 slides)
├── 02. slideStandard — ¿Qué es [tecnología]? (definition + 4 bullets)
├── 03. slideSidebarLeft* — Historia y Origen (timeline + diagram)
├── 04. slideTwoCols — Características clave (left: technical, right: ecosystem)
├── 05. sectionSlide* — Divider: "Instalación y Configuración"

BLOQUE 2: Instalación (3 slides)
├── 06. slideStripeTopLeft — Requisitos del sistema + pasos
├── 07. slideStandard — Verificación de instalación + comandos
├── 08. slideSidebarLeft* — Estructura de un proyecto nuevo

BLOQUE 3: Conceptos Centrales (5 slides)
├── 09. sectionSlide* — Divider: "Arquitectura y Event Loop"
├── 10. slideSidebarLeft* — Event Loop (con diagrama SVG)
├── 11. slideTwoCols — Single Thread vs Multi-Thread
├── 12. slideThreeCols — Fases del Event Loop detalladas
├── 13. slideFourCards — APIs y Módulos nativos clave

BLOQUE 4: Programación Asíncrona (4 slides)
├── 14. sectionSlide* — Divider: "Async en la Práctica"
├── 15. slideSidebarLeft* — Callbacks y el Callback Hell (diagrama)
├── 16. slideTwoCols — Promises vs Async/Await
├── 17. slideStripeTopRight — Ejemplo completo Async/Await

BLOQUE 5: Ecosistema NPM (3 slides)
├── 18. sectionSlide* — Divider: "NPM y el Ecosistema"
├── 19. slideStandard — NPM: comandos esenciales
├── 20. slideFourCards — Librerías populares del ecosistema

BLOQUE 6: Comparativas y Casos de Uso (3 slides)
├── 21. sectionSlide* — Divider: "Node.js vs Otros"
├── 22. slideSidebarLeft* — Comparativa con Python/Java (tabla SVG)
├── 23. slideTwoCols — Cuándo SÍ / Cuándo NO usar Node.js

CIERRE (2 slides)
├── 24. slideStandard — Recursos y Próximos Pasos
├── 25. titleSlide* — Slide de cierre / Preguntas
```

---

## 🔗 Integración con Skills Hermanas

Esta sección explica cómo esta skill se coordina con las otras dos:
- `slides-mermaid-diagrams`: Para insertar diagramas de flujo, arquitectura y secuencia como imágenes en slides
- `slides-iconification`: Para insertar iconos SVG dentro de cards, columnas o sidebars

Reglas claras sobre la convención de rutas de assets:
- Los assets de cada tema (imágenes, SVGs, PNGs) deben guardarse en `slides/<tema>/assets/`
- NUNCA en `resources/patterns/` (esa carpeta es solo para recursos globales de la plantilla: el patrón de rayas, etc.)
- Las rutas en el `.tex` deben ser relativas al directorio raíz del proyecto (donde se ejecuta xelatex)
