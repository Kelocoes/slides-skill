# Style Guide & LaTeX (Beamer) Formatting Rules - Universidad Icesi

This file establishes the strict visual, positioning, and safety margin rules for compiling the Universidad Icesi institutional presentation in Beamer. It must be respected and referenced by all agents and subagents to prevent text and structural content from overlapping with background graphics.

---

## 📐 1. Canvas Geometry & Widescreen
Every presentation must strictly configure a 16:9 widescreen canvas with the following XeTeX physical dimensions:
- **Width (`paperwidth`):** `33.86cm`
- **Height (`paperheight`):** `19.05cm`
- **MediaBox mapping:**
  ```latex
  \geometry{paperwidth=33.86cm, paperheight=19.05cm}
  \paperwidth=33.86cm
  \paperheight=19.05cm
  \pdfpagewidth=\paperwidth
  \pdfpageheight=\paperheight
  ```

---

## 🎨 2. Official Color Palette (Brand Colors)
Only use the official brand colors defined below:
- **Icesi Blue (Primary):** `\definecolor{icesiblue}{HTML}{5454E9}`
- **Icesi Yellow:** `\definecolor{icesiyellow}{HTML}{E4EB60}`
- **Icesi Green:** `\definecolor{icesigreen}{HTML}{4CB979}`
- **Icesi Purple:** `\definecolor{icesipurple}{HTML}{865CF0}`
- **Icesi Orange:** `\definecolor{icesiorange}{HTML}{E9683B}`
- **Icesi Dark (Text):** `\definecolor{icesidark}{HTML}{393939}`
- **Icesi Gray 1:** `\definecolor{icesigray1}{HTML}{88898C}`
- **Icesi Gray 2:** `\definecolor{icesigray2}{HTML}{CECFD4}`

---

## 🏢 3. Logo Positioning
- **Logo Size (Native):** Fixed width of **`4.95cm`**.
- **Top-Left Corner Coordinates:**
  ```latex
  Left = 1.90cm, Top = 1.60cm
  ```
  In TikZ: `[xshift=1.90cm, yshift=-1.60cm]current page.north west`
- **Color Inversion:** On dark backgrounds (like `icesiblue`), use the `BYN_RGB_POSITIVO` file, which is the negative white logo.

---

## 🔤 4. Typography & Line Spacing
- **Institutional Typeface:** *Plus Jakarta Sans* loaded locally from `resources/fonts/`.
- **Relative Font Sizes:**
  - **Main Title (Cover):** `34pt` / `40pt` line spacing.
  - **Subtitle:** `18pt` / `22pt`.
  - **Slide Title (Standard):** `24pt` / `28pt`.
  - **Slide Body (Standard):** `14pt` / `18pt`.

---

## 🚫 5. Exclusion Zone and Safe Margin Boxes per Template

To guarantee that new user text does not overlap with background graphics, agents must enforce the following boundaries and safe bounding boxes when formatting content:

### A. Title Slides (Covers)
*   **`\titleSlideA` (Solid Blue)**:
    *   *Title Box*: `x=[1.94cm, 16.93cm]`, `y=[-8.47cm, -13.75cm]`.
    *   *Subtitle Box*: `x=[1.94cm, 12.32cm]`, `y=[-13.73cm, -16.48cm]`.
    *   *Avoid*: The right side (`x > 18.0cm`) must remain clean of text.
*   **`\titleSlideB` (White & Green bar)**:
    *   *Title Box*: `x=[15.09cm, 32.87cm]`, `y=[-5.77cm, -11.50cm]`.
    *   *Subtitle Box*: `x=[15.07cm, 32.88cm]`, `y=[-11.50cm, -13.70cm]`.
    *   *Avoid*: The left half (`x < 15.0cm`) to prevent hiding the primary logo.
*   **`\titleSlideC` (White & Pattern)**:
    *   *Title Box*: `x=[1.40cm, 24.78cm]`, `y=[-8.16cm, -12.36cm]`.
    *   *Subtitle Box*: `x=[1.36cm, 24.78cm]`, `y=[-13.24cm, -15.44cm]`.
    *   *Avoid*: The bottom stripe pattern area (`y < -12.46cm`).
*   **`\titleSlideD` (Split Blue/Purple)**:
    *   *Title Box*: `x=[2.17cm, 13.44cm]`, `y=[-6.17cm, -12.20cm]`.
    *   *Subtitle Box*: `x=[2.17cm, 13.44cm]`, `y=[-12.36cm, -14.36cm]`.
*   **`\titleSlideE` (White & Blue/Purple Overlay)**:
    *   *Title Box*: `x=[2.15cm, 16.92cm]`, `y=[-8.57cm, -13.85cm]`.
    *   *Subtitle Box*: `x=[2.12cm, 12.29cm]`, `y=[-13.70cm, -16.45cm]`.
*   **`\titleSlideF` (Top Blue & Orange block)**:
    *   *Title Box*: `x=[1.40cm, 18.28cm]`, `y=[-5.33cm, -9.53cm]`.
    *   *Subtitle Box*: `x=[1.47cm, 18.27cm]`, `y=[-9.69cm, -11.89cm]`.

### B. Section Dividers
*   **`\sectionSlideA` and `\sectionSlideB` (Bottom Blue/Orange Bar)**:
    *   *Text Box*: `x=[7.33cm, 32.51cm]`, `y=[-14.82cm, -17.90cm]`.
    *   *Avoid*: In `sectionSlideB`, the right image area (`x = [15.50cm, 33.86cm]`) must not have overlapping text.
*   **`\sectionSlideC` (Blue with White Container)**:
    *   *Text Box*: `x=[11.83cm, 33.02cm]`, `y=[-13.50cm, -17.81cm]`.
*   **`\sectionSlideE` (Minimal & Color Variants)**:
    *   *Text Box*: `x=[1.36cm, 22.55cm]`, `y=[-10.54cm, -14.75cm]`.
*   **`\slideSidebarLeftOrange` / `Blue` / `Purple` (Left Sidebar)**:
    *   *Exclusion*: The left sidebar occupies `x = [0cm, 12.41cm]`.
    *   *Safe Content Box*: Confined strictly to `x = [14.00cm, 32.00cm]`. Use columns with a left offset of `0.38\textwidth` to clear the sidebar graphic.

### C. Stripe Accent Content Slides
*   **`\slideStripeTopLeft` and `\slideStripeTopRight`**:
    *   *Exclusion*: The blue header banner and green accent stripe occupy `y = [0cm, -6.57cm]`.
    *   *Safe Content Box*: Must start strictly at `y <= -7.20cm`. To ensure this, use top vertical alignment `[plain, t]` and apply an invisible spacer `\rule{0pt}{7.2cm}` before the main content blocks.

### D. Standard Content Slides
*   **`\slideStandard`, `\slideTwoCols`, `\slideThreeCols`**:
    *   *Exclusion*: The header area (logo and slide title) occupies `y = [0cm, -6.00cm]`.
    *   *Safe Content Box*: Must start at `y <= -6.50cm` (use `\vspace*{4.5cm}` in the standard Beamer flow). Lateral margin `x = [1.36cm, 32.50cm]`.
*   **`\slideFourCards` (4-Card Grid)**:
    *   *Exclusion*: The bottom gray banner area occupies `y = [-9.52cm, -19.05cm]`. The 4 cards must be placed in this block using a multi-column grid.
