# HTML/Reveal.js Slide Formatting Rules — Universidad Icesi

This manual establishes the strict layout rules, dimensions in CSS pixels, typography, and safety margin guidelines for the Universidad Icesi Reveal.js presentation generator. It must be respected by all agents to prevent overlaps and ensure a clean, brand-aligned design.

---

## 📐 1. Canvas Geometry & Viewport
The presentation renders in a standard **16:9 widescreen** aspect ratio:
- **Viewport Width**: `1280px`
- **Viewport Height**: `720px`
- **Conversion Factor (LaTeX to CSS)**: `1cm = 37.8px` (derived from `1280px / 33.86cm`).
- **Positioning**: Absolute positioning (`position: absolute`) in CSS pixels is used within each slide to faithfully reproduce the design grid.

---

## 🎨 2. Official Color Palette (Brand Colors)
These are defined as global CSS variables in `dist/main.css`:

| CSS Variable | Hex | Primary Usage |
|---|---|---|
| `--icesi-blue` | `#5454E9` | Main cover slides, primary titles, and accents |
| `--icesi-purple` | `#865CF0` | Secondary sections, purple sidebar |
| `--icesi-green` | `#4CB979` | Success state, positive marks, stripe accents |
| `--icesi-yellow` | `#E4EB60` | Highlights, cover slide subtitle boxes |
| `--icesi-orange` | `#E9683B` | Alerts, negative marks, orange sidebar |
| `--icesi-dark` | `#393939` | Main body text color |
| `--icesi-white` | `#FFFFFF` | Standard slide backgrounds and boxes |
| `--icesi-gray-1` | `#88898C` | Secondary subtitles |
| `--icesi-gray-2` | `#CECFD4` | Card borders and backgrounds |

---

## 🏢 3. Logo Positioning
- **Logo Size**: Fixed width of **`187px`** (equivalent to `4.95cm` in LaTeX).
- **Position Coordinates (Top-Left)**:
  - `left: 72px` (equivalent to `1.90cm`).
  - `top: 60px` (equivalent to `1.60cm`).
- **Contrast on Dark Backgrounds**:
  - For slides with a blue, green, orange, or purple background, the negative white version of the logo must be used: `ICESI_logo_prin_descriptor_WHITE.svg`.

---

## 🔤 4. Typography & Visual Hierarchy

> **CRITICAL RULE**: Typography must always form a clear descending hierarchy.  
> `Slide Title (h2)` → `Section Heading (h3)` → `Body / List (p, li)` → `Label/Tag (card-header)`

- **Official Font**: *Plus Jakarta Sans* loaded locally using `@font-face` from `resources/fonts/`.
- **Header Styles** (enforced via component CSS):
  - **Main Title (Cover, h1)**: `font-size: clamp(34px, 4.2vw, 54px)`, `font-weight: 700`.
    - Uses `clamp()` to scale gracefully between 34px (long titles) and 54px (short titles).
    - Never use a fixed `54px` for covers — this causes overflow on longer titles.
  - **Slide Title (Standard, h2)**: `font-size: 38px`, `font-weight: 700`, `line-height: 46px`.
  - **Section Heading within slide (h3)**: `font-size: 22px`, `font-weight: 700`. Enforced globally in `base.css`.
  - **Micro-label (h4)**: `font-size: 17px`, `font-weight: 700`. Always visually smaller than h3.
- **Body Styles**:
  - **Main Text (p, li)**: `font-size: 19px`, `line-height: 27px`. Enforced globally in `base.css`.
  - **Card Header label**: `font-size: 14px`, `letter-spacing: 0.05em`, `text-transform: uppercase`.
    - The card header label is intentionally the **smallest text** in a card — it is a category tag, not a title.
    - Card body content (p, li) must be larger (17-18px) to maintain reading hierarchy.
  - **Lists (`ul`/`ol`)**: Spacing between items `margin-bottom: 10px`.
- **Section Dividers (sectionSlideE)**:
  - Title uses `font-size: clamp(36px, 4.4vw, 57px)` — allows 2-line titles with `<small>` subtags without overflow.
  - If a section title needs two lines, use `<br>` plus `<small style="font-size:0.5em;">Subtitle</small>`.

---

## 🚫 5. Exclusion Zones and Grids by Layout

### A. Standard and Column Slides (`.standard`, `.two-cols`, `.three-cols`)
- **Header**: The area reserved for the title and logo extends from `top: 0` to `top: 220px`.
- **Safe Content Box**:
  - Must start strictly at `top: 240px` or below.
  - Safe left margin: `left: 32px`.
  - Safe right margin: content must end at `left + width ≤ 1248px` (32px right margin from 1280).

### B. Four-Card Slide (`.four-cards`)
- **Header**: The slide title is placed at `top: 176px` and must have `margin: 0;` to prevent accidental shifting.
- **Card Grid**:
  - Grid wrapper (`.cards-grid`): `top: 260px`, `left: 32px`, `width: 1216px`.
  - *Vertical Safety Margin*: **84px** of separation between the header title and the cards grid.
  - `.cards-bg` is **disabled** (display:none) — the gray background tint was visually confusing.
- **Card Content Hierarchy**:
  - `.card-header` = category label (14px, uppercase) — the SMALLEST text in the card.
  - `.card-body` content (p, li) = 17-18px — the LARGEST text in the card.
  - Never make the category header font larger than the body content.

### C. Sidebar Slides (`.sidebar-left-orange`, `.blue`, `.purple`)
- **Sidebar Area**: Occupies the left column from `left: 0` to `width: 469px`.
- **Safe Content Box**: Must start at `left: 529px` to clear the sidebar graphic elements.
- **Maximum right edge of content**: `left: 529px + width: 720px = 1249px` (safe 31px margin from edge).
- **Sidebar Visual Panel Options** (choose ONE per slide):
  1. **Empty** (logo only) — `sidebarVisual = ''`
  2. **Classic image** — `sidebarVisual = 'path/to/image.png'` (fits in 359×359px box at top:175px)
  3. **SVG graphic** — `sidebarVisual = { type: 'graphic', html: '<svg>...</svg>' }` (fills 429×540px below logo)
  4. **Mermaid diagram** — `sidebarVisual = { type: 'mermaid', code: '...' }` (auto light-background contrast)
  5. **Icon list** — `sidebarVisual = { type: 'icons', items: [{icon:'🔧', label:'Deploy'}] }` (evenly distributed)
  - **CONTRAST RULE**: Any element placed inside the sidebar panel on a dark background (orange, blue, purple) MUST either use `rgba(255,255,255,0.9)` container or white fills on SVG nodes.

### D. Stripe Accent Slides (`.stripe-top-left`, `.stripe-top-right`)
- **Header Area**: The blue banner and green accent stripe occupy the space from `top: 0` to `height: 158px`.
- **Safe Content Box**: Must start at `top: 268px` or below to avoid entering the stripe header banner.

### E. Tables
- Tables MUST use `width: 100%; max-width: 100%; box-sizing: border-box`.
- Never set a fixed pixel width on a table — use percentage.
- Tables are rendered with the `.slide-content table` styles from `base.css` (Icesi-blue headers, alternating rows).
- **Critical**: Tables placed inside `.slide-content` (left:32, width:1218) are already safe within margins.

---

## 🎨 6. Visual Contrast & Color Harmony Rules

### Mermaid Diagrams on Dark Backgrounds
> **MANDATORY**: Any Mermaid diagram on a dark or colored background MUST be made visible.

- **CSS Auto-Contrast**: `base.css` automatically applies `background: rgba(255,255,255,0.90)` to `.mermaid svg` inside dark slide variants:
  - `.slide.section-e.bg-blue .mermaid svg`
  - `.slide.section-e.bg-green .mermaid svg`
  - `.slide.section-e.bg-orange .mermaid svg`
  - `.slide.title-a .mermaid svg`
  - `.slide.section-c .mermaid svg`
- **Explicit Override (recommended)**: Additionally use `%%{init}%%` directives to define light node colors:
  ```
  %%{init: {'theme': 'base', 'themeVariables': {
    'primaryColor': '#5454E9',
    'primaryTextColor': '#ffffff',
    'lineColor': '#393939',
    'background': '#ffffff'
  }}}%%
  ```
- **classDef** must always be used in flowcharts: `classDef blue fill:#5454E9,stroke:none,color:#fff`
- Never allow default gray Mermaid nodes on a dark blue or colored slide background.

### Sidebar Panel SVGs
- SVG graphics placed in the sidebar `.sidebar-graphic` div must use **white or light fills** for elements that should be visible.
- Avoid `fill:#333` or `fill:#1a1a1a` on dark sidebar backgrounds — use `fill:#ffffff` or `fill:rgba(255,255,255,0.85)` for structural elements.
- Icon fills in `.sidebar-icons` should be `rgba(255,255,255,0.20)` background with white text/icon.

### Title Length Limits (updated with clamp() support)
- `titleSlideA` Main Title: The title box uses `clamp(34px, 4.2vw, 54px)` — up to ~3 lines are now safe. Use `<br>` for line breaks.
- `titleSlideA` Footer text (e.g., "Engineering Faculty — Universidad Icesi"): **MUST use `.slide-footer-tag`** class which renders as a blue badge with white text. Do NOT inject raw text in the subtitle paragraph.
- Standard Slide Titles (`slideStandard`, `slideTwoCols`, `slideFourCards`): Maximum **1 line** (~45 chars). If longer, use `<br>` to force wrapping.

---

## 🖼️ 7. Content Density & Layout Flexibility Rules

- **Do not leave > 40% empty space** per slide. Use icons, diagrams, or visual elements to fill space.
- **Sidebar panel is not a dead zone**: The left colored sidebar (469px wide) is a prime visual opportunity. Use it for:
  - Concept diagrams (Mermaid)
  - Themed SVG illustrations
  - Icon lists (up to 5 items distributed evenly)
  - Architecture mini-diagrams
- **Items Evenly Distributed**: For slides with few key points (2–5 items), use `.items-evenly` container which distributes items with `justify-content: space-evenly` across the full available height. Combine with `.icon-card` markup.
- **Icon Grids**: Use `.icon-grid-2` or `.icon-grid-3` inside `.slide-content` to create 2 or 3 column icon-card grids.
- **Content split across slides**: When a single slide becomes overly dense (> 5 bullet points per column), split into multiple slides rather than reducing font size below 16px.

---

## 🔁 8. Mandatory Visual Feedback QA Loop (Agent Workflow)
1. **Render & Launch**: Serve presentation on a local server (`npx -y http-server . -p 8080`).
2. **Screenshot Capture**: Automatically capture `.png` screenshots of generated slides (via Playwright browser tools or Puppeteer) saved under `slides/<topic>/build/`.
3. **Multimodal Analysis**: Inspect screenshot artifacts to verify:
   - Zero text overlap or line collisions between title boxes and content boxes.
   - High contrast on diagrams, icons, and code snippets against slide background.
   - No content overflow beyond the 1280×720px viewport bounding box.
   - No table touching the right edge of the slide (check `left + width ≤ 1248px`).
   - Mermaid diagrams are **visible** (not white-on-white or blue-on-blue).
   - Typography hierarchy is respected: slide title (h2) > sub-heading (h3) > body (p, li) > card labels.
   - Sidebar panel has meaningful visual content (not empty unless intentionally minimalist).
4. **Refine & Re-verify**: If any visual flaw or overlap is detected, edit the HTML slide and re-capture screenshots until 100% visual perfection is reached.

---

## 🔢 9. Slide Numbering (`.icesi-slide-number`)
Slide numbering is handled via specific CSS classes to prevent collision with Reveal.js's native overlay:
- **Base Class**: `.icesi-slide-number` (removes native gray background block and sets correct typography).
- **Positioning**:
  - Right-aligned: `.right` (`right: 32px`, `left: auto`).
  - Left-aligned: `.left` (`left: 32px`, `right: auto`).
- **Colors**:
  - Light backgrounds: `.blue` class (color `--icesi-blue`).
  - Dark backgrounds: `.white` class (color `#FFFFFF`).
