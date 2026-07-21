---
name: slides-svg-graphics
description: Guidelines and compilation workflow to generate brand-compliant vector graphics, flowcharts, and SVG icons for Universidad Icesi presentations.
---

# Skill: `slides-svg-graphics` (Graphics and Iconification for Slides)

This skill establishes the guidelines to build, export, and embed stunning vector graphics, logical diagrams, and custom SVG illustrations in Universidad Icesi slide presentations.

---

## 🎨 1. Official Brand Color Tokens for Diagrams

All diagrams and custom SVGs must strictly use the official institutional color scheme:

| Role / Element | Hex Color | Named Token |
| :--- | :--- | :--- |
| **Primary / Accent Nodes** | `#5454E9` | `icesiblue` |
| **Secondary Processes** | `#865CF0` | `icesipurple` |
| **Success / Data / Paths** | `#4CB979` | `icesigreen` |
| **Warning / Highlight** | `#E4EB60` | `icesiyellow` |
| **Error / Critical** | `#E9683B` | `icesiorange` |
| **Dark Borders / Texts** | `#393939` | `icesidark` |

> **Rule**: Always use `fill="transparent"` as the SVG root background so the diagram integrates cleanly on any slide background (blue sidebar, white content area, etc.).

---

## 🛠️ 2. SVG Design Specifications

### 2.1 File Naming and Storage
- Save all generated SVGs under `resources/patterns/`
- Use snake_case filenames: `event_loop_diagram.svg`, `node_architecture.svg`
- After SVG creation, convert to PDF for maximum LaTeX rendering quality (see §3)

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

**Rounded rectangle node (primary)**:
```xml
<rect x="10" y="10" width="160" height="50" rx="12" ry="12"
  fill="#5454E9" stroke="none" filter="url(#shadow)"/>
<text x="90" y="40" text-anchor="middle" dominant-baseline="middle"
  fill="white" font-family="sans-serif" font-size="14" font-weight="bold">
  Texto del Nodo
</text>
```

**Flow arrow between nodes**:
```xml
<line x1="170" y1="35" x2="220" y2="35"
  stroke="#5454E9" stroke-width="2" marker-end="url(#arrow)"/>
```

**Circular phase node (for cyclic diagrams)**:
```xml
<circle cx="200" cy="200" r="40" fill="#4CB979" stroke="white" stroke-width="3"/>
<text x="200" y="200" text-anchor="middle" dominant-baseline="middle"
  fill="white" font-size="12" font-weight="bold">PHASE</text>
```

---

## 📊 3. Diagram Types and When to Use Them

### Type A: Circular Phase Diagram
**Use for**: Event Loop phases, lifecycle cycles, recurring processes.
- Draw phases as colored arc segments or equidistant circles around a center node
- Use distinct colors for each phase (rotate through brand colors)
- Center: `icesiblue` circle with "NODE.JS" or process name in white
- Arrows follow clockwise direction with consistent `stroke-width="2"`

**Recommended viewBox**: `0 0 400 400`

### Type B: Layered Architecture Stack
**Use for**: Technology stacks, system architecture, dependency layers.
- Draw horizontal rectangles stacked vertically, top=highest abstraction
- Use gradient from `icesiyellow` (top/app layer) → `icesiblue` → `icesipurple` → `icesigreen` → `icesidark` (bottom/OS)
- Bidirectional arrows `⟺` between adjacent layers
- Include short descriptive text in each layer

**Recommended viewBox**: `0 0 500 320`

### Type C: Linear Evolution / Timeline
**Use for**: Technology evolution, version history, API progression (Callbacks → Promises → Async/Await).
- Three or four boxes connected by arrows left-to-right
- Each box: distinct fill color, year/version below, name above
- Use `icesiblue`, `icesipurple`, `icesigreen`, `icesiorange` in sequence
- Optional "evolution arrow" spanning the full width below

**Recommended viewBox**: `0 0 500 180`

### Type D: Comparison Table / Matrix
**Use for**: Node.js vs Python vs Java, Sync vs Async, SQL vs NoSQL comparisons.
- Grid with header row and feature rows
- Each column has a distinct header color
- Checkmark (✓ `#4CB979`) or X (✗ `#E9683B`) in cells
- Alternating row backgrounds: `#F8F9FF` / `white`

**Recommended viewBox**: `0 0 600 380`

### Type E: Flowchart / Decision Tree
**Use for**: Request-Response cycles, async execution flow, middleware pipeline.
- Diamond shapes for decisions, rectangles for processes, ovals for start/end
- Colors: decisions=`icesiyellow`+dark text, processes=`icesiblue`+white text, endpoints=`icesidark`+white
- Arrow labels on conditional branches ("Sí" / "No", "resolve" / "reject")

**Recommended viewBox**: `0 0 500 400`

---

## 🔄 4. Tooling and Compilation Pipeline

### Option A: Direct SVG (Recommended for custom diagrams)
1. Write the SVG file manually or with the agent's code generation
2. Save to `resources/patterns/diagram_name.svg`
3. Convert SVG → PDF using one of:
   ```powershell
   # Option 1: rsvg-convert (if available)
   rsvg-convert -f pdf -o resources/patterns/diagram_name.pdf resources/patterns/diagram_name.svg

   # Option 2: Inkscape CLI (if available)
   inkscape --export-type=pdf --export-filename=resources/patterns/diagram_name.pdf resources/patterns/diagram_name.svg

   # Option 3: Use ImageMagick for PNG fallback
   magick convert -density 300 resources/patterns/diagram_name.svg resources/patterns/diagram_name.png
   ```
4. Embed in LaTeX using the PDF path

### Option B: Mermaid CLI (for flowcharts/sequence diagrams)
1. Write a `.mmd` file with the diagram definition
2. Compile:
   ```bash
   npx -y @mermaid-js/mermaid-cli -i resources/patterns/diagram.mmd -o resources/patterns/diagram.pdf --backgroundColor transparent
   ```

### Option C: PNG Fallback (when PDF conversion unavailable)
Use `\includegraphics` with PNG (300 DPI minimum). Note: PNG on colored backgrounds requires truly transparent PNG (alpha channel). Always check with `page-NN.png` preview.

---

## 🖼️ 5. LaTeX Embedding Patterns

### In Sidebar Slides (Zone: left colored panel)
```latex
\slideSidebarLeftBlue{Título del Slide}{
    Contenido textual aquí...
    \begin{itemize}
        \item Punto 1
        \item Punto 2
    \end{itemize}
}{resources/patterns/event_loop_diagram.pdf}
```

### In Two-Column Slides (Zone: right column)
```latex
\slideTwoCols{Título del Slide}{
    \textbf{Explicación}
    \begin{itemize}
        \item Concepto 1
        \item Concepto 2
    \end{itemize}
}{
    \vspace{0.5cm}
    \includegraphics[width=\textwidth, keepaspectratio]{resources/patterns/node_architecture.pdf}
}
```

### In Stripe Slides (Zone: open content area)
```latex
\slideStripeTopLeft{Arquitectura Node.js}{
    \begin{columns}[T]
        \begin{column}{0.48\textwidth}
            \begin{itemize}
                \item Punto 1
            \end{itemize}
        \end{column}
        \begin{column}{0.48\textwidth}
            \includegraphics[width=\textwidth, keepaspectratio]{resources/patterns/diagram.pdf}
        \end{column}
    \end{columns}
}
```

---

## 📐 6. Bounding Box Constraints per Layout

| Layout Macro | Graphic Zone Width | Graphic Zone Height | Notes |
|---|---|---|---|
| `\slideSidebarLeft*` | 9.5cm | 9.5cm | Centered in sidebar, transparent bg needed |
| `\slideTwoCols` col2 | ~14cm (50% of slide) | 10cm max | Use `keepaspectratio` |
| `\slideStripeTopLeft/Right` open zone | 16cm | 11cm | Combine with mini-columns inside |
| `\slideStandard` full content | 28cm | 10cm | Place inline with `\includegraphics` |
| `\slideFourCards` per card | 5cm | 3cm | Only micro-icons, keep minimal |

---

## ✅ 7. Pre-flight SVG Quality Checklist

Before embedding any SVG/PDF in a slide, verify:
- [ ] Transparent background (`fill="none"` or `fill="transparent"` on root `<svg>`)
- [ ] All text legible at target scale (min font-size 11px in SVG coords for sidebar, 13px for full-width)
- [ ] Color contrast passes: dark text on light fill, white text on dark fill
- [ ] No clipping: all elements within the declared `viewBox`
- [ ] Arrows have visible arrowhead markers
- [ ] File is saved as `.svg` in `resources/patterns/` 
- [ ] Companion `.pdf` version generated for LaTeX embedding
- [ ] Verified via `page-NN.png` preview after compilation
