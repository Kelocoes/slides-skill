# Project Memory and Context: Universidad Icesi Slide Presentation

This file preserves the memory of the presentation slide states, their structure, and the recommended layout contexts of use for any autonomous agent continuing work in this repository.

---

## 🎯 Slide Classification and Intended Contexts of Use (19 Slides in `main.html`)

The main presentation file [main.html](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/main.html) (and per-topic files in `slides/<tema>/<tema>.html`) consists of 19 slides designed and approved under the following specific contexts:

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
4.  **Modular Refactoring (`src/` folder)**:
    - The stylesheet and layout engine scripts were split into clean modules under `src/css/` and `src/js/` (categorized by base style, title, section, sidebar, stripe, and content slides).
    - A compiler script [src/build.js](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/src/build.js) bundles these modules into [icesibeamer.css](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/icesibeamer.css) and [icesibeamer.js](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/icesibeamer.js) in the project root.
5.  **Negative Contrast Logos**:
    - Created [ICESI_logo_prin_descriptor_WHITE.svg](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/resources/logos/ICESI_logo_prin_descriptor_WHITE.svg) with pure white fills (`#ffffff`) to ensure contrast on dark backgrounds (blue, green, orange, purple).
    - Overridable logo functions (`_logoNegFn()`, `_logoPosF()`) render correct files depending on background theme.
6.  **Page Number Collision Resolution**:
    - Renamed `.slide-number` class to `.icesi-slide-number` in [src/js/core.js](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/src/js/core.js) and [src/css/base.css](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/src/css/base.css) to prevent Reveal.js from applying its native grey background block.
    - Explicitly set `left: auto` / `right: auto` to prevent horizontal line stretching.
7.  **Mermaid v11 (ESM) & Scope Shadowing Resolution**:
    - Loaded Mermaid v11 from CDN ES Modules in presentation HTML.
    - Resolved scope shadowing bug by referencing `window.mermaid.initialize()` instead of `mermaid.initialize()` inside `icesi.init()` (since the local helper function `mermaid(code)` shadowed the global space).
8.  **Cards Layout Safe Margins**:
    - Set `margin: 0` for `.slide-header h2` titles to prevent default vertical displacement.
    - Moved the cards grid down by 30px (`top: 256px` for background, `top: 276px` for cards grid) to establish a safe margin of 54px and prevent title overlaps in `.four-cards` layout.
9.  **Node.js Presentation Migration**:
    - Successfully compiled 25 HTML/Reveal.js slides in [slides/nodejs-html/nodejs-html.html](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/slides/nodejs-html/nodejs-html.html) utilizing SVG assets.
    - Saved captured QA screenshots inside [slides/nodejs-html/build/](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/slides/nodejs-html/build/).

