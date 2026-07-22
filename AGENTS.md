# Agent Instructions (AGENTS.md)

This repository contains the HTML/Reveal.js institutional slide template for Universidad Icesi, migrated from the original LaTeX/Beamer system.

---

## 🤖 Repository Guide for Agents

Any agent working on this presentation must strictly follow the control guidelines located in the `.agents/` directory:

### 1. Context and Memory
Review slide classification and design decisions at:
- 💾 **[.agents/memory.md](.agents/memory.md)**: Details the intended layout usage of the 19 project slides and the history of technical changes.

### 2. Consistency and Formatting Rules
Review exact dimensions, brand colors, and safe bounding boxes (in CSS pixels) to prevent text overlaps at:
- 📐 **[.agents/formatting_rules.md](.agents/formatting_rules.md)**: Manual detailing safe text bounding boxes for each slide layout in CSS/px units.

### 3. Composition Skills
Review the interactive guide to composing new slides using `dist/main.js` component functions at:
- 🛠️ **[.agents/skills/generate-slides/SKILL.md](.agents/skills/generate-slides/SKILL.md)**: Guidelines on structured HTML frame composition and content flow using Reveal.js.

---

## 🚀 General Production Guidelines

1. **Exclusive Use of Component Library**:
   - Every slide in [main.html](main.html) or `slides/<tema>/<tema>.html` must use the functions defined in `dist/main.js` (`icesi.titleSlideA()`, `icesi.slideStandard()`, etc.) or the CSS classes from `dist/main.css` directly.
   - **Do not write ad-hoc inline styles directly on slide HTML**. Any new visual component must be added to `src/components/` and bundled to `dist/` before being used in a presentation file.
2. **Typography and Images**:
   - Primary typeface: **Plus Jakarta Sans** (loaded locally via `@font-face` in `dist/main.css` from `resources/fonts/`).
   - SVG logos and graphics are used directly as `<img>` tags referencing files in `resources/logos/` and `resources/patterns/`. No Inkscape or PDF conversion required.
   - Slide assets per theme (diagrams, icons) are stored in `slides/<tema>/assets/`.
3. **Reveal.js Initialization**:
   - Every presentation HTML must load Reveal.js from CDN and call `icesi.init()` after populating the slides.
   - Mermaid.js must also be loaded from CDN before `dist/main.js` is called.
   - For presentations in subdirectories (`slides/<tema>/`), call `icesi.setBasePath('../../')` before building slides.
4. **Viewing and Exporting**:
   - Open the `.html` file directly in Chrome or Edge using a local server:
     ```powershell
     # From the project root:
     npx -y http-server . -p 8080
     # Then open: http://localhost:8080/main.html
     ```
   - For PDF export, append `?print-pdf` to the URL and use Chrome's Print → Save as PDF (no margins, background graphics enabled).
   - All build artifacts and screenshots go to `slides/<tema>/build/`.
   - **LaTeX files (`.tex`, `.sty`) are legacy and no longer the source of truth.** They are preserved for historical reference only.
