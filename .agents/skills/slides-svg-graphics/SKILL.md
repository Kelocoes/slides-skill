---
name: slides-svg-graphics
description: Guidelines and workflow to generate brand-compliant vector graphics, flowcharts, and SVG illustrations for Universidad Icesi HTML/Reveal.js presentations. SVGs are used directly without PDF conversion.
---

# Skill: `slides-svg-graphics` (SVG Graphics in HTML)

This skill establishes the guidelines to create, export, and embed vector graphics, logical diagrams, and custom SVG illustrations in Universidad Icesi HTML slides. Unlike the LaTeX workflow, **SVGs are used directly via `<img>` tags without any PDF conversion**.

---

## 🎨 1. Institutional Color Tokens for Diagrams

All diagrams and custom SVGs must strictly adhere to the institutional color scheme:

| Role / Element | Hex | Token |
| :--- | :--- | :--- |
| **Primary / Accent Nodes** | `#5454E9` | `icesiblue` |
| **Secondary Processes** | `#865CF0` | `icesipurple` |
| **Success / Data / Paths** | `#4CB979` | `icesigreen` |
| **Warning / Highlight** | `#E4EB60` | `icesiyellow` |
| **Error / Critical** | `#E9683B` | `icesiorange` |
| **Dark Borders / Texts** | `#393939` | `icesidark` |

> **Rule**: Always use `fill="transparent"` or `fill="none"` as the background of the root `<svg>` to integrate the diagram cleanly on any slide background (colored sidebars, white body, etc.).

---

## 🛠️ 2. SVG Design Specifications

### 2.1 File Naming & Storage
- Save all SVGs for each topic under `slides/<topic>/assets/`
- Use snake_case file names: `event_loop_diagram.svg`, `node_architecture.svg`
- Template global assets (stripe pattern, etc.): `resources/patterns/`
- **Do not convert to PDF**: SVGs are used directly in HTML.

### 2.2 SVG Structure Template
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 WIDTH HEIGHT">
  <defs>
    <!-- Gradients, filters, markers go here -->
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#00000022"/>
    </filter>
    <!-- Arrow marker for diagrams -->
    <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#5454E9"/>
    </marker>
  </defs>
  <!-- Diagram elements... -->
</svg>
```

### 2.3 Recommended Element Styles

**Rounded Rectangle Node (Primary)**:
```xml
<rect x="10" y="10" width="160" height="50" rx="12" ry="12"
  fill="#5454E9" stroke="none" filter="url(#shadow)"/>
<text x="90" y="40" text-anchor="middle" dominant-baseline="middle"
  fill="white" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="bold">
  Node Text
</text>
```

**Flow Arrow between Nodes**:
```xml
<line x1="170" y1="35" x2="220" y2="35"
  stroke="#5454E9" stroke-width="2" marker-end="url(#arrow)"/>
```

**Circular Node (for cyclic/loop diagrams)**:
```xml
<circle cx="200" cy="200" r="40" fill="#4CB979" stroke="white" stroke-width="3"/>
<text x="200" y="200" text-anchor="middle" dominant-baseline="middle"
  fill="white" font-size="12" font-weight="bold">PHASE</text>
```

---

## 📊 3. Diagram Types and When to Use Them

### Type A: Circular Phase Diagram
**Use for**: Event Loop phases, lifecycles, and recurring/cyclic processes.
- Phases as colored arcs or equidistant circles around a central core node.
- Center: `icesiblue` with process name in white.
- Arrows in clockwise direction with a consistent `stroke-width="2"`.
- **Recommended viewBox**: `0 0 400 400`

### Type B: Layered Architecture Stack
**Use for**: Tech stacks, system architectures, and dependency layers.
- Horizontal rectangles stacked vertically (top layer = highest abstraction).
- Color gradient: `icesiyellow` → `icesiblue` → `icesipurple` → `icesigreen` → `icesidark`.
- **Recommended viewBox**: `0 0 500 320`

### Type C: Linear Evolution / Timeline
**Use for**: Tech progression, version history, and API roadmap timelines.
- Three or four boxes connected with left-to-right arrows.
- Each box: different color, year/version at bottom, name at top.
- **Recommended viewBox**: `0 0 500 180`

### Type D: Comparison Table / Matrix
**Use for**: Node.js vs Python, Sync vs Async, SQL vs NoSQL.
- Grid with header row and feature rows.
- Checkmark (✓ `#4CB979`) or X (✗ `#E9683B`) in cells.
- **Recommended viewBox**: `0 0 600 380`

### Type E: Flowchart / Decision Tree
**Use for**: Request-response cycles, async execution paths, and middleware pipelines.
- Diamonds for decisions, rectangles for processes, ovals for start/end.
- **Recommended viewBox**: `0 0 500 400`

---

## 🔄 4. Creation Pipeline (No CLI Conversion)

### Simplified workflow:

1. **Write the SVG** markup (manually or with agent assistance).
2. **Save to** `slides/<topic>/assets/<diagram_name>.svg`.
3. **Embed directly** in the HTML slide using `<img>` tags.

```html
<!-- Example: diagram in slideTwoCols -->
icesi.slideTwoCols(
  'System Architecture',
  `<ul>
    <li>Client makes HTTP requests</li>
    <li>API Gateway routes calls</li>
    <li>Each service has its own DB</li>
  </ul>`,
  `<img src="slides/nodejs/assets/microservices_architecture.svg"
        style="width:100%; height:auto; display:block;"
        alt="Microservices Architecture">`
)
```

> **Why you do not need PDF conversion:**
> In LaTeX, SVGs had to be converted to PDF because XeLaTeX cannot render SVG directly. In HTML, the browser renders vector SVGs natively.

---

## 🖼️ 5. HTML Embedding Patterns

### In Sidebar Slides (zone: colored sidebar panel)
```javascript
icesi.slideSidebarLeftBlue(
  'Node.js Event Loop',
  `<ul>
    <li>Single-threaded, non-blocking</li>
    <li>libuv handles I/O operations</li>
    <li>Callbacks execute in order</li>
  </ul>`,
  'slides/nodejs/assets/event_loop_diagram.svg'  // Size is handled by CSS: 359×359px
)
```

### In Two-Column Slides (zone: right column)
```javascript
icesi.slideTwoCols(
  'Node.js vs Python Comparison',
  `<ul>
    <li>Node.js: High I/O concurrency</li>
    <li>Python: Better for ML/Data Science</li>
  </ul>`,
  `<img src="slides/nodejs/assets/comparison_table.svg"
        style="width:100%; height:auto;"
        alt="Comparison Table Node.js vs Python">`
)
```

### In Stripe Slides (zone: open content area)
```javascript
icesi.slideStripeTopLeft(
  'Node.js Architecture Stack',
  `<div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; align-items:start;">
    <ul>
      <li>Google Chrome V8 Engine</li>
      <li>libuv for async I/O</li>
    </ul>
    <img src="slides/nodejs/assets/node_architecture.svg"
         style="width:100%; height:auto;" alt="Architecture">
  </div>`
)
```

### In Standard Slides (full content width)
```javascript
icesi.slideStandard(
  'Event Loop Phases',
  `<img src="slides/nodejs/assets/event_loop_phases.svg"
        style="width:80%; height:auto; display:block; margin:0 auto;"
        alt="Event Loop Phases">`
)
```

---

## 📐 6. Graphic Zone Limits per Layout

| Layout | Available Image Zone | Notes |
|---|---|---|
| `slideSidebarLeft*` (imagePath parameter) | 359×359px | Sized automatically by CSS |
| `slideTwoCols` col2 | ~570px wide, 460px high | `width:100%; height:auto` |
| `slideStripeTopLeft/Right` (content) | 1218px wide, 430px high | Combine with mini-grid if necessary |
| `slideStandard` (content) | 1218px wide, 460px high | `width:80%; margin:auto` to center |
| `slideFourCards` per card | ~270px wide, 320px high | Keep minimal, micro-icons only |

---

## ✅ 7. SVG Quality Control Checklist

Before embedding any SVG, verify:
- [ ] Transparent background (`fill="none"` or `fill="transparent"` on root `<svg>`)
- [ ] `viewBox` declared explicitly (enables scaling without distortion)
- [ ] Text readable at target size: minimum `font-size="13"` for columns, `font-size="11"` for sidebar
- [ ] Correct color contrast: dark text on light backgrounds, white text on dark backgrounds
- [ ] No clipping: all elements fit inside the declared `viewBox` boundary
- [ ] Arrows with `marker-end="url(#arrow)"` visible
- [ ] File saved as `.svg` under `slides/<topic>/assets/`
- [ ] **No PDF companion required** — SVG is used directly
- [ ] Visually verified in the browser at 1280×720px
