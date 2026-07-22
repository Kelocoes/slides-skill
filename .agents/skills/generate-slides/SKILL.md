---
name: generate-slides
description: Beamer Layout Library and Slide Generation skill — Universidad Icesi slide template composition workflow using Reveal.js + HTML + CSS + Mermaid.js.
---

# Skill: `generate-slides` (HTML Component Library — Reveal.js)

This skill defines the layout library for Universidad Icesi slide presentations and provides the composition workflow for autonomous agents to build visually rich, brand-aligned HTML slides using the **Reveal.js + dist/main.css + dist/main.js** system.

---

## 📂 Project Structure

```
skill-slides/
├── dist/
│   ├── main.css               # Bundled master stylesheet
│   └── main.js                # Bundled component library
├── src/                       # Modular source code
│   ├── components/            # Slide layout components (JS & CSS)
│   ├── utils/                 # Utility files (core, helpers, init)
│   ├── main.js                # JS bundle entrypoint
│   └── main.css               # CSS bundle entrypoint
├── resources/
│   ├── fonts/                 # Plus Jakarta Sans TTF
│   ├── logos/                 # ICESI logos in SVG (positive and negative)
│   └── patterns/              # Stripe pattern and other global SVGs
└── slides/<topic>/
    ├── <topic>.html           # Presentation HTML file (≡ <topic>.tex)
    └── assets/                # Presentation-specific diagrams, icons, and images
```

---

## 🎨 Institutional Color Palette

| CSS Variable | Hex | Usage |
|---|---|---|
| `--icesi-blue`   | `#5454E9` | Primary titles, accents, cover slide background |
| `--icesi-purple` | `#865CF0` | Secondary sections, purple sidebar |
| `--icesi-green`  | `#4CB979` | Success state, green stripe accents |
| `--icesi-yellow` | `#E4EB60` | Highlights, cover slide subtitle boxes |
| `--icesi-orange` | `#E9683B` | Alerts, orange sidebar |
| `--icesi-dark`   | `#393939` | Body text color |

---

## 📐 Available Layouts Library

### Category 1 — Cover Slides (Title Slides)

| JS Function | Args | Use Case |
|---|---|---|
| `icesi.titleSlideA(title, subtitle)` | 2 | Blue background, white title box, yellow subtitle box |
| `icesi.titleSlideB(title, subtitle, footer)` | 3 | White background, green bottom bar, right-aligned text |
| `icesi.titleSlideC(title, subtitle)` | 2 | Blue bottom block with stripe patterns |
| `icesi.titleSlideD(title, subtitle, badge)` | 3 | Split blue/purple blocks, yellow badge |
| `icesi.titleSlideE(title, subtitle)` | 2 | White background, overlaid blue/purple boxes |
| `icesi.titleSlideF(title, subtitle)` | 2 | Top blue & orange block layout, bottom logo |

### Category 2 — Section Dividers

| JS Function | Args | Use Case |
|---|---|---|
| `icesi.sectionSlideA(title)` | 1 | Minimalist, blue bottom accent bar |
| `icesi.sectionSlideB(title, imagePath)` | 2 | Orange bottom bar, image in right panel |
| `icesi.sectionSlideC(title)` | 1 | Blue background, white text container, green accent |
| `icesi.sectionSlideE(title)` | 1 | White background, blue title |
| `icesi.sectionSlideEBlue(title)` | 1 | Blue background, white title |
| `icesi.sectionSlideEGreen(title)` | 1 | Green background, white title |
| `icesi.sectionSlideEYellow(title)` | 1 | Yellow background, dark title |
| `icesi.sectionSlideEOrange(title)` | 1 | Orange background, white title |

### Category 3 — Sidebar Slides

| JS Function | Args | Use Case |
|---|---|---|
| `icesi.slideSidebarLeftOrange(title, content, imagePath)` | 3 | Orange sidebar + graphics zone |
| `icesi.slideSidebarLeftBlue(title, content, imagePath)` | 3 | Blue sidebar + graphics zone |
| `icesi.slideSidebarLeftPurple(title, content, imagePath)` | 3 | Purple sidebar + graphics zone |

> **Parameter `imagePath`**: Path to SVG or PNG graphic for the sidebar panel. Pass `''` if no graphic is needed.

### Category 4 — Banner / Stripe Layouts

| JS Function | Args | Use Case |
|---|---|---|
| `icesi.slideStripeTopLeft(title, content)` | 2 | Top blue banner + green stripe accent on left |
| `icesi.slideStripeTopRight(title, content)` | 2 | Top blue banner + green stripe accent on right |

### Category 5 — Standard Content Slides

| JS Function | Args | Use Case |
|---|---|---|
| `icesi.slideStandard(title, content)` | 2 | Header logo + free content area |
| `icesi.slideTwoCols(title, col1, col2)` | 3 | Two equal content columns |
| `icesi.slideThreeCols(title, col1, col2, col3)` | 4 | Three equal content columns |
| `icesi.slideFourCards(title, c1t, c1, c2t, c2, c3t, c3, c4t, c4)` | 9 | Four-card grid with custom titles and content |

---

## 🛠️ Content Helpers

```javascript
// Inline Mermaid diagram (renders without mmdc CLI or pre-compiling PNGs)
icesi.mermaid(`
  graph TD
    A[Client] --> B{API}
    B --> C[DB]
`)

// Markdown block (processed by Reveal.js markdown plugin)
icesi.markdown(`
  - Point 1 with **bold** text
  - Point 2
`)

// Code block with syntax highlighting
icesi.codeBlock(`
  const express = require('express')
  const app = express()
`, 'javascript')
```

---

## 🚨 Critical Layout Rules

### Rule 1 — No Hyphenation in Titles
Titles use `hyphens: none` in CSS. For long titles, use explicit `<br>` breaks to control flow:

```javascript
icesi.titleSlideA(
  'Node.js:<br>JavaScript Servers',
  'Subtitle here'
)
```

### Rule 2 — Sidebar Graphics
The image zone inside the sidebars is exactly `359×359px`. Use transparent SVGs or PNGs for best layout fitting:

```javascript
icesi.slideSidebarLeftBlue(
  'Node.js Architecture',
  `<ul>
    <li>Google Chrome V8 Engine</li>
    <li>Non-blocking Event Loop</li>
  </ul>`,
  'slides/nodejs/assets/nodejs_architecture.svg'
)
```

### Rule 3 — Customized Four Cards
In `slideFourCards`, each card accepts a separate title and body block:

```javascript
icesi.slideFourCards(
  'Native Node.js APIs',
  'HTTP/HTTPS', '<p>Module for web servers</p>',
  'File System', '<p>Read and write files</p>',
  'Events', '<p>EventEmitter and listeners</p>',
  'Stream', '<p>Efficient data flows</p>'
)
```

### Rule 4 — Content Density
- **Never leave more than 40% of standard slides empty**: If content is sparse, add an inline Mermaid diagram or a supporting SVG illustration.
- **Standard slides**: Aim for 4–6 bullet points, OR a combination of a diagram and 2–3 bullet points.
- **Columns**: Each column should contain at least 2 items.

### Rule 5 — Section Dividers
Insert a `sectionSlide*` divider slide every 3–4 content slides to structuralize the presentation flow and give breathing space.

### Rule 6 — SVG Graphics Integration
Whenever a slide describes a system flow or architecture, ALWAYS accompany it with a clean vector diagram:

```javascript
// With sidebar — diagram fits inside the left panel
icesi.slideSidebarLeftBlue(
  'Node.js Event Loop',
  `<ul><li>Single-threaded</li><li>Non-blocking I/O</li></ul>`,
  'slides/nodejs/assets/event_loop_diagram.svg'
)

// With two columns — diagram goes into the second column
icesi.slideTwoCols(
  'Performance Benchmark',
  `<ul><li>Node.js handles high concurrency</li></ul>`,
  `<img src="slides/nodejs/assets/benchmark.svg" style="width:100%;height:auto;">`
)

// With inline Mermaid — goes directly inside the body content
icesi.slideStandard(
  'HTTP Request Cycle',
  icesi.mermaid(`
    sequenceDiagram
      actor Client
      participant API
      participant DB
      Client->>API: GET /data
      API->>DB: SELECT *
      DB-->>API: rows
      API-->>Client: JSON
  `)
)
```

---

## 🚀 Composition Workflow

### Step 1 — Create the presentation HTML file

```html
<!-- slides/<topic>/<topic>.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Presentation Title — Universidad Icesi</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/reveal.css">
  <link rel="stylesheet" href="../../dist/main.css">
</head>
<body>
<div class="reveal">
  <div class="slides" id="icesi-slides"></div>
</div>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/dist/reveal.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/plugin/markdown/markdown.js"></script>
<script src="https://cdn.jsdelivr.net/npm/reveal.js@5.1.0/plugin/highlight/highlight.js"></script>
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
  window.mermaid = mermaid;
</script>
<script src="../../dist/main.js"></script>
<script type="module">
  // Configure relative base path for assets and logos
  icesi.setBasePath('../../');

  const slides = [
    icesi.titleSlideA('My Topic', 'Course Subtitle'),
    // ... more slides
  ];
  document.getElementById('icesi-slides').innerHTML = slides.join('\n');
  icesi.init();
</script>
</body>
</html>
```

### Step 2 — View in the Browser
Open `slides/<topic>/<topic>.html` in Chrome or Edge. Due to local CORS restrictions (fonts, logo loading), you must use a local HTTP server:
```powershell
# From the project root directory:
npx -y http-server . -p 8080
# Then open: http://localhost:8080/slides/<topic>/<topic>.html
```

### Step 3 — Export to PDF (Optional)
```powershell
# Using puppeteer-pdf:
npx -y puppeteer-pdf http://localhost:8080/slides/<topic>/<topic>.html?print-pdf slides/<topic>/build/<topic>.pdf

# Or from Chrome: Ctrl+P → Save as PDF → Margins: None → Background graphics: Enabled
```

### Step 4 — Generate PNG Screenshots for Visual QA
```powershell
# Take screenshots of every slide:
npx -y puppeteer-screenshots http://localhost:8080/slides/<topic>/<topic>.html slides/<topic>/build/
```

### Step 5 — Visual QA Checklist
- [ ] **Covers**: Title readable, no overlaps, no unwanted hyphenations.
- [ ] **Section Dividers**: Full title fits, zero clipping.
- [ ] **Standard Slides**: Body text starts below header (> 240px), no overlap with logo.
- [ ] **Sidebar Slides**: Sidebar graphic is rendered with correct proportions.
- [ ] **Cards**: All 4 cards render completely, text fits inside blocks.
- [ ] **Two/Three Columns**: Columns are visually balanced without horizontal overflows.
- [ ] **Stripe Slides**: Title fits in top banner, content is positioned correctly in the white space below `268px`.
- [ ] **Mermaid Diagrams**: Renders correctly using the institutional color theme variables.

---

## 📋 Recommended Presentation Blueprint — 25 Slides

```javascript
// Recommended layout flow for a complete engineering/technical presentation module

// COVER (1)
icesi.titleSlideA('Topic: [Technology]', 'Course Name • Date'),

// BLOCK 1: Introduction (4 slides)
icesi.slideStandard('What is [Technology]?', `<ul>...</ul>`),
icesi.slideSidebarLeftBlue('History and Origins', `...`, 'assets/timeline.svg'),
icesi.slideTwoCols('Key Characteristics', `<ul>...</ul>`, `<ul>...</ul>`),
icesi.sectionSlideA('Installation & Setup'),

// BLOCK 2: Setup (3 slides)
icesi.slideStripeTopLeft('System Requirements', `<ul>...</ul>`),
icesi.slideStandard('Verification', icesi.codeBlock('node --version\nnpm --version', 'bash')),
icesi.slideSidebarLeftOrange('Project Folder Structure', `...`, 'assets/folder.svg'),

// BLOCK 3: Core Concepts (5 slides)
icesi.sectionSlideEBlue('Architecture & Event Loop'),
icesi.slideSidebarLeftBlue('Event Loop', `...`, 'assets/event_loop_diagram.svg'),
icesi.slideTwoCols('Single Thread vs Multi-Thread', `...`, `...`),
icesi.slideThreeCols('Event Loop Phases', `...`, `...`, `...`),
icesi.slideFourCards('Core Native APIs', 'HTTP','...', 'fs','...', 'Events','...', 'Stream','...'),

// BLOCK 4: Asynchronous Code (4 slides)
icesi.sectionSlideEGreen('Asynchronous Patterns'),
icesi.slideSidebarLeftPurple('Callbacks & Hell', `...`, 'assets/callback.svg'),
icesi.slideTwoCols('Promises vs Async/Await', `...`, `...`),
icesi.slideStripeTopRight('Full Example', icesi.codeBlock('...', 'js')),

// WRAP-UP (2 slides)
icesi.slideStandard('Resources & Next Steps', `<ul>...</ul>`),
icesi.titleSlideA('Questions & Answers', 'Official Docs • Community Chat'),
```

---

## 🔗 Sister Skills Integration

- **`slides-mermaid-diagrams`**: Use `icesi.mermaid(code)` to write inline charts.
- **`slides-iconification`**: Add simple SVG icons inside content parameters.
- **`slides-svg-graphics`**: Reference custom SVGs placed under `slides/<topic>/assets/`.
