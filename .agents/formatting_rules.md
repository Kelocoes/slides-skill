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
- **Official Font**: *Plus Jakarta Sans* loaded locally using `@font-face` from `resources/fonts/`.
- **Header Styles**:
  - **Main Title (Cover)**: `font-size: 54px`, `font-weight: 700`, `line-height: 64px`.
  - **Subtitle (Cover)**: `font-size: 20px`, `font-weight: 400`, `line-height: 27px`.
  - **Slide Title (Standard)**: `font-size: 38px`, `font-weight: 700`, `line-height: 46px`.
- **Body Styles**:
  - **Main Text**: `font-size: 22px`, `line-height: 30px`.
  - **Lists (`ul`/`ol`)**: Spacing between items `margin-bottom: 10px`.

---

## 🚫 5. Exclusion Zones and Grids by Layout

### A. Standard and Column Slides (`.standard`, `.two-cols`, `.three-cols`)
- **Header**: The area reserved for the title and logo extends from `top: 0` to `top: 220px`.
- **Safe Content Box**:
  - Must start strictly at `top: 240px` or below.
  - Safe left margin: `left: 32px`.
  - Safe right margin: `width: 1218px` (`left + width = 1250px`).

### B. Four-Card Slide (`.four-cards`)
- **Header**: The slide title is placed at `top: 176px` and must have `margin: 0;` to prevent accidental shifting.
- **Card Grid**:
  - Background block (`.cards-bg`): `top: 256px`, `height: 464px` (ending exactly at the `720px` slide bottom boundary).
  - Card grid wrapper (`.cards-grid`): `top: 276px`, `left: 28px`, `width: 1226px`.
  - *Vertical Safety Margin*: **54px** of separation between the header title and the cards block to prevent overlays.

### C. Sidebar Slides (`.sidebar-left-orange`, `.blue`, `.purple`)
- **Sidebar Area**: Occupies the left column from `left: 0` to `width: 470px` (equivalent to `12.41cm`).
- **Safe Content Box**: Must start at `left: 512px` (equivalent to `13.54cm`) to clear the sidebar graphic elements.
- **Sidebar Graphic Panel**: The area reserved for images on the sidebar panel is **`359px × 359px`** (equivalent to `9.5cm × 9.5cm`).

### D. Stripe Accent Slides (`.stripe-top-left`, `.stripe-top-right`)
- **Header Area**: The blue banner and green accent stripe occupy the space from `top: 0` to `height: 158px`.
- **Safe Content Box**: Must start at `top: 268px` or below to avoid entering the stripe header banner.

---

## 🔢 6. Slide Numbering (`.icesi-slide-number`)
Slide numbering is handled via specific CSS classes to prevent collision with Reveal.js's native overlay:
- **Base Class**: `.icesi-slide-number` (removes native gray background block and sets correct typography).
- **Positioning**:
  - Right-aligned: `.right` (`right: 32px`, `left: auto`).
  - Left-aligned: `.left` (`left: 32px`, `right: auto`).
- **Colors**:
  - Light backgrounds: `.blue` class (color `--icesi-blue`).
  - Dark backgrounds: `.white` class (color `#FFFFFF`).
