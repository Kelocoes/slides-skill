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

1.  **Native SVG Loading (No conversion required)**: Brand logos and pattern SVGs are used directly via `<img src="...">` tags referencing files in `resources/logos/` and `resources/patterns/`. No Inkscape, `rsvg-convert`, or PDF conversion required. The browser renders SVG natively.
2.  **Top Banner Height Fix on Striped Slides**: Stripe accent slides (`icesi.slideStripeTopLeft()` and `icesi.slideStripeTopRight()`) use the CSS class `.blue-banner` with `height:158px` (equivalent to 4.18cm in the original LaTeX). Content is positioned with `top:268px` in `.slide-content` to ensure all text renders consistently below the institutional header bars and the green accent stripe.
3.  **Reveal.js Canvas**: The system uses Reveal.js with `width=1280, height=720` (16:9 ratio). All elements within each `<section class="slide">` use `position:absolute` with pixel values derived from the original TikZ coordinates at the scale of **1cm = 37.8px** (1280px / 33.86cm). Reveal.js handles scaling, fullscreen, keyboard navigation, and PDF export via `?print-pdf` URL parameter.
