# Project Memory and Context: Universidad Icesi Slide Presentation

This file preserves the memory of the presentation slide states, their structure, and the recommended layout contexts of use for any autonomous agent continuing work in this repository.

---

## 🎯 Slide Classification and Intended Contexts of Use (19 Slides in `main.html`)

The main presentation file [main.html](../main.html) (and per-topic files in `slides/<tema>/<tema>.html`) consists of 19 slides designed and approved under the following specific contexts:

### 1. Title Slides (Presentation Openings)
*   **Slide 1 (Primary Cover - `icesi.titleSlideA()`)**:
    *   *Context*: Standard, formal presentation or course opening. Full blue background with a white title box and a yellow subtitle box.
*   **Slide 2 (Academic Cover - `icesi.titleSlideB()`)**:
    *   *Context*: Academic papers, graduations, or conferences where authors, dates, or faculty names need to be explicitly displayed.
*   **Slide 3 (Institutional Cover - `icesi.titleSlideC()`)**:
    *   *Context*: Highly formal rectorate reports, institutional planning, or directorship presentations with custom institutional SVG branding patterns.
*   **Slide 4 (Creative/Workshop Cover - `icesi.titleSlideD()`)**:
    *   *Context*: Innovation pitches, design classes, or interactive workshops using a dynamic split blue/purple block layout.
*   **Slide 5 (Minimal Executive Cover - `icesi.titleSlideE()`)**:
    *   *Context*: Quick executive summaries, corporate-style clean presentations on a white background.
*   **Slide 6 (Lab/Workshop Separator - `icesi.titleSlideF()`)**:
    *   *Context*: Chapter breaks separating theoretical blocks from practical exercises, labs, or live-coding tasks.

### 2. Section Dividers (Chapter Transitions)
*   **Slide 7 (Standard Section Divider - `icesi.sectionSlideA()`)**:
    *   *Context*: Standard transition between theoretical sections using a bottom blue block layout.
*   **Slide 8 (Visual Transition Divider - `icesi.sectionSlideB()`)**:
    *   *Context*: Section introduction that benefits from a thematic supporting photograph on the right side.
*   **Slide 9 (Major Chapter Divider - `icesi.sectionSlideC()`)**:
    *   *Context*: Major milestones or syllabus breaks (e.g., transitioning between main modules in a course).
*   **Slide 10 (Minimal White Transition - `icesi.sectionSlideE()`)**:
    *   *Context*: Rapid, clean, and silent transitions on a white background.
*   **Slides 11 to 14 (Rapid Colored Dividers)**:
    *   *Context*: Sequences of rapid transitions representing subtopics or short milestones within a single module:
        *   Slide 11 (`icesi.sectionSlideEBlue()`) - Blue Background.
        *   Slide 12 (`icesi.sectionSlideEGreen()`) - Green Background.
        *   Slide 13 (`icesi.sectionSlideEYellow()`) - Yellow Background.
        *   Slide 14 (`icesi.sectionSlideEOrange()`) - Orange Background.

### 3. Transitions with Vertical Sidebar Emphasis
*   **Slides 15 to 17 (Left Sidebar Transitions)**:
    *   *Context*: Slides designed for conceptual focus, definitions, vocabulary introduction, or quoting authors. The left sidebar segments the view for emphasis.
        *   Slide 15 (`icesi.slideSidebarLeftOrange()`) - Orange sidebar.
        *   Slide 16 (`icesi.slideSidebarLeftBlue()`) - Blue sidebar.
        *   Slide 17 (`icesi.slideSidebarLeftPurple()`) - Purple sidebar.

### 4. Content Slides (Bullet Points and Layouts)
*   **Slide 18 (Left-Aligned Accent Stripe Content - `icesi.slideStripeTopLeft()`)**:
    *   *Context*: Detailed conceptual exposition with a prominent left-aligned green accent.
*   **Slide 19 (Right-Aligned Accent Stripe Content - `icesi.slideStripeTopRight()`)**:
    *   *Context*: Balanced presentation slide matching the style of Slide 18 but with a right-aligned green accent stripe.

---

## 💾 Summary of Technical Design Decisions (Project Log)

1.  **Native SVG Loading (No conversion required)**: Brand logos and pattern SVGs are used directly via `<img src="...">` tags referencing files in `resources/logos/` and `resources/patterns/`. The browser renders SVG natively for perfect vector sharpness.
2.  **Top Banner Height Fix on Striped Slides**: Stripe accent slides (`icesi.slideStripeTopLeft()` and `icesi.slideStripeTopRight()`) use the CSS class `.blue-banner` with `height:158px` (equivalent to 4.18cm in the original LaTeX). Content is positioned with `top:268px` in `.slide-content` to ensure all text renders consistently below the header bars.
3.  **Reveal.js Canvas**: The system uses Reveal.js with `width=1280, height=720` (16:9 ratio). All elements within each `<section class="slide">` use `position:absolute` with pixel values derived from the original TikZ coordinates at the scale of **1cm = 37.8px** (1280px / 33.86cm).
4.  **React-like ES6 modular folder structure and compilation (`src/` folder)**:
    - The stylesheet and layout engine scripts were split into React-like clean ESM modules under `src/components/` and `src/utils/` (with entry points `src/main.js` and `src/main.css`).
    - The bundle process was migrated to `esbuild` (defined in `package.json`). Run `npm run build` to generate the compiled bundles `dist/main.css` and `dist/main.js`.
5.  **Negative Contrast Logos**:
    - Created [ICESI_logo_prin_descriptor_WHITE.svg](../resources/logos/ICESI_logo_prin_descriptor_WHITE.svg) with pure white fills (`#ffffff`) to ensure contrast on dark backgrounds (blue, green, orange, purple).
    - Overridable logo functions (`_logoNegFn()`, `_logoPosF()`) render correct files depending on background theme.
6.  **Page Number Collision Resolution**:
    - Renamed `.slide-number` class to `.icesi-slide-number` in [src/utils/core.js](../src/utils/core.js) and [src/components/base.css](../src/components/base.css) to prevent Reveal.js from applying its native grey background block.
    - Explicitly set `left: auto` / `right: auto` to prevent horizontal line stretching.
7.  **Mermaid v11 (ESM) & Scope Shadowing Resolution**:
    - Loaded Mermaid v11 from CDN ES Modules in presentation HTML.
    - Resolved scope shadowing bug by referencing `window.mermaid.initialize()` instead of `mermaid.initialize()` inside `icesi.init()` (since the local helper function `mermaid(code)` shadowed the global space).
8.  **Cards Layout Safe Margins**:
    - Set `margin: 0` for `.slide-header h2` titles to prevent default vertical displacement.
    - Moved the cards grid down by 30px (`top: 256px` for background, `top: 276px` for cards grid) to establish a safe margin of 54px and prevent title overlaps in `.four-cards` layout.
9.  **Node.js Presentation Migration**:
    - Successfully compiled 25 HTML/Reveal.js slides in [slides/nodejs-html/nodejs-html.html](../slides/nodejs-html/nodejs-html.html) utilizing SVG assets.
    - Saved captured QA screenshots inside [slides/nodejs-html/build/](../slides/nodejs-html/build/).
10. **`implement-slides` Skill & Formatting Rules Evolution (Visual QA Agent Loop)**:
    - Updated [.agents/skills/implement-slides/SKILL.md](.agents/skills/implement-slides/SKILL.md) to formalize a mandatory 4-step QA loop: `Implement -> Launch Local Server -> Capture PNG Screenshots via Playwright/Puppeteer -> Multimodal Visual Analysis & Code Refinement`.
    - Enhanced [.agents/formatting_rules.md](.agents/formatting_rules.md) with strict contrast guidelines (high-contrast node fills on dark backgrounds), title character line limits (2 lines for cover titles, 1 line for content headers), and explicit safe margins across all template layouts.
11. **NestJS QA Feedback — System-Wide Improvements (July 2026)**:
    - Analyzed [slides/nestjs/nestjs.pdf](../slides/nestjs/nestjs.pdf) and identified 9 categories of recurring visual problems. Implemented the following fixes across the component library:
    - **`src/components/title-slides.css` (titleSlideA)**:
        - Title box now uses `font-size: clamp(34px, 4.2vw, 54px)` — scales from 34px to 54px automatically. No more text cut off for long titles.
        - Title box moved to `top: 200px` with `min-height/max-height` and `display:flex` so content never overflows the white box.
        - Subtitle box (`--icesi-yellow`) widened to 640px, uses `min/max-height` and `display:flex` to prevent text escape.
        - Added `.slide-footer-tag` class: renders faculty/institution labels as a blue badge with white text inside the yellow box. Fixes "Engineering Faculty — Universidad Icesi" appearing in black on blue background.
    - **`src/components/section-slides.css` (sectionSlideE)**:
        - Section title now uses `font-size: clamp(36px, 4.4vw, 57px)` and `top: 340px` (60px higher) to accommodate 2-line titles with `<small>` subtitle tags. Fixes "Injection" being cut off.
    - **`src/components/content-slides.css`**:
        - `.cards-bg` (semi-transparent gray tint) **disabled** with `display:none` — was visually confusing (looked like a rendering artifact).
        - Card hierarchy inverted to correct order: `.card-header` = 14px uppercase label (smallest), `.card-body` = 17px body (larger). This restores correct visual hierarchy.
        - Added **global table styles** (`.slide-content table`, `.col table`) with `width:100%; max-width:100%; box-sizing:border-box` to prevent tables from touching slide edges.
        - Added **`.items-evenly`** layout: flex column with `justify-content:space-evenly` for distributing icon+label rows across full available height.
        - Added **`.icon-grid-2`** and **`.icon-grid-3`** CSS grid layouts for 2 and 3-column icon card grids.
        - Added **`.icon-card`** / **`.icon-symbol`** / **`.icon-body`** component pattern for icon+text cards with color variants.
    - **`src/components/base.css`**:
        - Added `--icesi-gray-1` and `--icesi-gray-2` CSS variable aliases (with hyphens).
        - Added **Mermaid dark-background contrast fix** — automatically applies `background: rgba(255,255,255,0.90)` + `border-radius: 10px` + `padding: 12px` to `.mermaid svg` inside all dark slide variants (`section-e bg-blue/green/orange`, `title-a`, `section-c`).
        - Added **sidebar Mermaid panel contrast** — `.slide.sidebar-left .sidebar .mermaid` has a light container background when diagram is placed inside colored sidebar.
        - Added **global typography hierarchy** rules enforced via CSS: `h3 = 22px/blue`, `h4 = 17px/dark`, `li/p = 19px` inside all content areas. This prevents card body text from appearing larger than section titles.
    - **`src/components/sidebar-slides.js`**:
        - Extended `_sidebarLeft()` to accept `sidebarVisual` as an object with 4 new types:
          1. `{ type: 'graphic', html }` → SVG inside `.sidebar-graphic` container
          2. `{ type: 'mermaid', code }` → Mermaid diagram with automatic contrast container
          3. `{ type: 'icons', items: [{icon, label}] }` → Icon list evenly distributed in `.sidebar-icons`
          4. Legacy string path still supported for backward compatibility.
    - **`src/components/sidebar-slides.css`**:
        - Added `.sidebar-graphic` container (429×540px, flex-centered, below logo).
        - Added `.sidebar .mermaid` with `background:rgba(255,255,255,0.92)` force-contrast container.
        - Added `.sidebar-icons` / `.icon-item` / `.icon-mark` / `.icon-label` styles for icon list in sidebar.
        - Extended `.sidebar-content` width from 700px to 720px and added `max-height: 400px`.
        - `.sidebar-title h2` now uses `font-size: clamp(28px, 3vw, 38px)` for long titles.
    - **[`.agents/formatting_rules.md`](./formatting_rules.md)**:
        - Complete rewrite incorporating all new rules: fluid typography, sidebar visual types, Mermaid contrast, card hierarchy, table margins, icon grid layouts, density rules, and expanded QA checklist.


