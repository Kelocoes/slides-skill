---
name: slides-iconification
description: Guidelines to design and embed simple, semantic SVG icons within Universidad Icesi HTML/Reveal.js slides, following the visual DNA of the iag-al-entorno icon system.
---

# Skill: `slides-iconification` (SVG Icons in HTML)

This guide establishes the guidelines to design and embed simple, semantic SVG icons within Universidad Icesi HTML slides. SVGs are used **directly as `<img>` or inline**, without any conversion to PNG or PDF.

---

### Section 1: Visual DNA of the Icon System

Analyzing the icons from `iag-al-entorno/` reveals the following visual pattern:

**Structure of a Card Icon (Horizontal 160×60 pattern):**
- **Container Rectangle** (`160×60`, rx=6): White or light background, with a colored border corresponding to the semantics.
- **Left Zone** (x=20–55): Circle or geometric shape representing the core concept.
- **Right Zone** (x=65–155): Label text with `font-size="12"`, `font-family="system-ui"`, and `font-weight="bold"`.

**Structure of a Square Icon (Compact 100×70 pattern):**
- No container rectangle.
- Compact geometric elements that evoke the concept visually.
- **Scale**: Used directly as a thumbnail inside the slide.

**Semantic Border Palette:**
- **Technology / Process:** `#5454E9` (icesiblue)
- **Success / Available:** `#4CB979` (icesigreen)
- **Interaction / AI:** `#865CF0` (icesipurple)
- **Warning:** `#E9683B` (icesiorange)
- **Neutral / Data:** `#393939` (icesidark)

---

### Section 2: Catalog of Icon Types for Slides

Here are the 8 classifications of icon types with their SVG structures:

1. **Terminal/Code Icon** (for installation/commands slides)
2. **Server/API Icon** (for architecture slides)
3. **Package/NPM Icon** (for package/ecosystem slides)
4. **Database Icon** (for database/persistence slides)
5. **Clock/Timer Icon** (for async/Event Loop slides)
6. **Gear/Process Icon** (for setup/configuration slides)
7. **Arrow/Flow Icon** (for data flow diagrams)
8. **Check/Success Icon** (for feature lists and pros)

*(Base SVG code structure following the `iag-al-entorno` pattern)*:
```xml
<svg width="100" height="70" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Replace with specific geometric shapes for each concept, using semantic colors -->
  <rect width="100" height="70" rx="8" fill="#FFFFFF" stroke="#5454E9" stroke-width="2"/>
  <circle cx="50" cy="35" r="15" fill="#5454E9"/>
</svg>
```

---

### Section 3: HTML Embedding — No Conversion to PNG

Unlike the LaTeX workflow (which required exporting to PNG using `svgexport`), in the HTML system, SVGs are used **directly**:

#### Option A: `<img src="...">` (Recommended for static/fixed icons)

```html
<!-- Inside the content of any slide -->

<!-- In slideFourCards — compact icon in the card header -->
icesi.slideFourCards(
  'Native APIs',
  '<img src="slides/nodejs/assets/icon_terminal.svg" height="28" alt="Terminal"> HTTP/HTTPS',
  '<p>Module for servers and clients</p>',
  '<img src="slides/nodejs/assets/icon_server.svg" height="28" alt="Server"> File System',
  '<p>Read and write files</p>',
  ...
)

<!-- In slideStandard — decorative icon next to the title -->
icesi.slideStandard(
  'Installation',
  `<img src="slides/nodejs/assets/icon_npm.svg" height="40" alt="NPM" style="float:right; margin-left:16px;">
   <ul>
     <li>Install Node.js from nodejs.org</li>
     <li>Verify: <code>node --version</code></li>
   </ul>`
)
```

#### Option B: Inline SVG (Recommended for icons that need CSS animations)

```html
<!-- Directly in the slide content HTML -->
icesi.slideStandard(
  'Installation Verification',
  `<div style="display:flex; align-items:center; gap:16px; margin-bottom:16px;">
    <!-- Inline SVG check icon -->
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19" fill="#4CB979"/>
      <polyline points="10,20 17,27 30,13" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>
    <span style="font-size:22px; color:#4CB979; font-weight:700;">Node.js installed successfully!</span>
  </div>
  <ul>
    <li>Detected version: v20.x.x</li>
  </ul>`
)
```

---

### Section 4: Dimensions and Scaling in HTML Slides

Embedding dimensions depend on the context of use:

- **Inside `slideFourCards`** (card header): `height="28"` — compact and inline with the header text
  ```html
  <img src="assets/icon_terminal.svg" height="28" alt="Terminal">
  ```

- **Column Header in `slideTwoCols`**: `height="48"`
  ```html
  <div style="margin-bottom:12px;">
    <img src="assets/icon_server.svg" height="48" alt="Server">
    <strong style="display:block; color:#5454E9; font-size:20px;">Backend</strong>
  </div>
  ```

- **Decorative Icon in `slideStandard`**: `height="56"` floating to the right of the title
  ```html
  <img src="assets/icon_decor.svg" height="56" alt="" style="float:right; margin-left:20px;">
  ```

- **In Colored Sidebar** (`slideSidebarLeft*`): Use the function's `imagePath` parameter
  ```javascript
  icesi.slideSidebarLeftBlue(
    'Database',
    `<ul><li>SQL vs NoSQL</li></ul>`,
    'slides/nodejs/assets/icon_db_large.svg'  // 359×359px max
  )
  ```

---

### Section 5: Creation Workflow

1. **Identify the slide concept** (e.g., "installation", "database", "async").
2. **Choose the icon type** from the catalog.
3. **Customize** using the semantic colors of the topic.
4. **Save the `.svg`** under `slides/<topic>/assets/icon_<name>.svg`.
5. **Embed directly** in the slide HTML:
   ```html
   <img src="slides/<topic>/assets/icon_<name>.svg" height="40" alt="Description">
   ```
6. **No conversion**: No `svgexport`, `magick`, or CLI tools required.

---

### Section 6: Consistency Rules

- A single slide **should not contain more than 1 prominent decorative icon**.
- Icons in `slideFourCards` must share the same visual format (either all horizontal card icons or all square icons).
- The **icon border color must match the card or section semantics**.
- **SVGs must have a defined `viewBox`** so that the `height` scales correctly without distortion.
- **Transparent Background** (`fill="none"` on root `<svg>`): Allows the icon to integrate cleanly on colored sidebars or white backgrounds.
- **No Embedded Text in Decorative SVGs**: Keep text in HTML, not inside the SVG, to maintain typography uniformity using Plus Jakarta Sans.
