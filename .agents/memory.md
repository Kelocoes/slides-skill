# Project Memory and Context: Universidad Icesi Slide Presentation

This file preserves the memory of the presentation slide states, their structure, and the recommended layout contexts of use for any autonomous agent continuing work in this repository.

---

## 🎯 Slide Classification and Intended Contexts of Use (19 Slides in `main.tex`)

The main presentation file [main.tex](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/main.tex) consists of 19 slides designed and approved under the following specific contexts:

### 1. Title Slides (Presentation Openings)
*   **Slide 1 (Primary Cover - `\titleSlideA`)**:
    *   *Context*: Standard, formal presentation or course opening. Full blue background with a white title box and a yellow subtitle box.
*   **Slide 2 (Academic Cover - `\titleSlideB`)**:
    *   *Context*: Academic papers, graduations, or conferences where authors, dates, or faculty names need to be explicitly displayed.
*   **Slide 3 (Institutional Cover - `\titleSlideC`)**:
    *   *Context*: Highly formal rectorate reports, institutional planning, or directorship presentations with custom institutional SVG branding patterns.
*   **Slide 4 (Creative/Workshop Cover - `\titleSlideD`)**:
    *   *Context*: Innovation pitches, design classes, or interactive workshops using a dynamic split blue/purple block layout.
*   **Slide 5 (Minimal Executive Cover - `\titleSlideE`)**:
    *   *Context*: Quick executive summaries, corporate-style clean presentations on a white background.
*   **Slide 6 (Lab/Workshop Separator - `\titleSlideF`)**:
    *   *Context*: Chapter breaks separating theoretical blocks from practical exercises, labs, or live-coding tasks.

### 2. Section Dividers (Chapter Transitions)
*   **Slide 7 (Standard Section Divider - `\sectionSlideA`)**:
    *   *Context*: Standard transition between theoretical sections using a bottom blue block layout.
*   **Slide 8 (Visual Transition Divider - `\sectionSlideB`)**:
    *   *Context*: Section introduction that benefits from a thematic supporting photograph on the right side.
*   **Slide 9 (Major Chapter Divider - `\sectionSlideC`)**:
    *   *Context*: Major milestones or syllabus breaks (e.g., transitioning between main modules in a course).
*   **Slide 10 (Minimal White Transition - `\sectionSlideE`)**:
    *   *Context*: Rapid, clean, and silent transitions on a white background.
*   **Slides 11 to 14 (Rapid Colored Dividers)**:
    *   *Context*: Sequences of rapid transitions representing subtopics or short milestones within a single module:
        *   Slide 11 (`\sectionSlideEBlue`) - Blue Background.
        *   Slide 12 (`\sectionSlideEGreen`) - Green Background.
        *   Slide 13 (`\sectionSlideEYellow`) - Yellow Background.
        *   Slide 14 (`\sectionSlideEOrange`) - Orange Background.

### 3. Transitions with Vertical Sidebar Emphasis
*   **Slides 15 to 17 (Left Sidebar Transitions)**:
    *   *Context*: Slides designed for conceptual focus, definitions, vocabulary introduction, or quoting authors. The left sidebar segments the view for emphasis.
        *   Slide 15 (`\slideSidebarLeftOrange`) - Orange sidebar.
        *   Slide 16 (`\slideSidebarLeftBlue`) - Blue sidebar.
        *   Slide 17 (`\slideSidebarLeftPurple`) - Purple sidebar.

### 4. Content Slides (Bullet Points and Layouts)
*   **Slide 18 (Left-Aligned Accent Stripe Content - `\slideStripeTopLeft`)**:
    *   *Context*: Detailed conceptual exposition with a prominent left-aligned green accent.
*   **Slide 19 (Right-Aligned Accent Stripe Content - `\slideStripeTopRight`)**:
    *   *Context*: Balanced presentation slide matching the style of Slide 18 but with a right-aligned green accent stripe.

---

## 💾 Summary of Technical Design Decisions (Project Log)

1.  **Native Vector Graphics Loading (PDF vector)**: Removed local command-line dependencies on Inkscape. Brand SVGs are converted to `.pdf` and stored under `resources/logos/` and `resources/patterns/`, loading natively via `\includegraphics` for maximum speed and portability.
2.  **Top-Aligned Vertical Constraint on Striped Slides**: Stripe accent slides (`slideStripeTopLeft` and `slideStripeTopRight`) enforce vertical alignment `[plain, t]` and employ an invisible spacer `\rule{0pt}{7.2cm}` to ensure text content renders consistently below institutional header bars on all systems.
