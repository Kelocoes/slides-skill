---
name: slides-iconification
description: Guidelines to design and embed simple, semantic inline SVG icons within Universidad Icesi HTML/Reveal.js slides, following the visual DNA of the iag-al-entorno icon system. Emoji characters are strictly forbidden.
---

# Skill: `slides-iconification` (SVG Icons in HTML)

This guide establishes the guidelines to design and embed simple, semantic **inline SVG icons** within Universidad Icesi HTML slides. SVGs are used **directly as inline code or `<img>` tags**, without any conversion to PNG or PDF.

> **⚠️ CRITICAL RULE: Emoji are strictly forbidden.**
> Never use emoji characters (🚀, ⚙️, 📦, 🔌, etc.) as icons in slides.
> All icon slots MUST use compact inline SVG graphics designed by the agent.

---

### Section 1: Visual DNA of the Icon System

Analyzing the icons from `iag-al-entorno/` reveals the following visual pattern:

**Structure of a Card Icon (Compact 36×36 symbol):**
- Simple geometric shapes that evoke the concept semantically.
- Background: colored circle, rounded rect, or bare geometric form.
- Foreground: white stroke/path representing the concept (check, arrow, cog, etc.).
- Colors drawn from the institutional palette.

**Structure of a Sidebar Icon (Compact 28×28 symbol for `sidebarVisual` icon lists):**
- Smaller format optimized for the sidebar icon list.
- Rounded rect or circle container with a white symbolic mark inside.

**Semantic Color Palette:**
- **Technology / Process:** `#5454E9` (icesiblue)
- **Success / Available:** `#4CB979` (icesigreen)
- **Interaction / AI:** `#865CF0` (icesipurple)
- **Warning:** `#E9683B` (icesiorange)
- **Neutral / Data:** `#393939` (icesidark)

---

### Section 2: Catalog of Icon Primitives (SVG Patterns)

The agent MUST create context-appropriate SVGs. Below are ready-to-use base patterns per concept:

#### Check / Validation Icon (green)
```html
<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
  <circle cx="18" cy="18" r="16" fill="#4CB979"/>
  <polyline points="10,18 15,24 26,12" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

#### Gear / Settings Icon (blue)
```html
<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
  <circle cx="18" cy="18" r="16" fill="#5454E9"/>
  <circle cx="18" cy="18" r="5" stroke="white" stroke-width="2" fill="none"/>
  <line x1="18" y1="7" x2="18" y2="10" stroke="white" stroke-width="2" stroke-linecap="round"/>
  <line x1="18" y1="26" x2="18" y2="29" stroke="white" stroke-width="2" stroke-linecap="round"/>
  <line x1="7" y1="18" x2="10" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"/>
  <line x1="26" y1="18" x2="29" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
```

#### Stack / Module Icon (purple)
```html
<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
  <circle cx="18" cy="18" r="16" fill="#865CF0"/>
  <rect x="10" y="12" width="16" height="4" rx="2" fill="white" opacity="0.9"/>
  <rect x="10" y="18" width="16" height="4" rx="2" fill="white" opacity="0.7"/>
  <rect x="10" y="24" width="16" height="4" rx="2" fill="white" opacity="0.5"/>
</svg>
```

#### Arrow / Flow Icon (blue)
```html
<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
  <circle cx="18" cy="18" r="16" fill="#5454E9"/>
  <line x1="10" y1="18" x2="24" y2="18" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
  <polyline points="19,13 25,18 19,23" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

#### Database / Storage Icon (dark)
```html
<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
  <circle cx="18" cy="18" r="16" fill="#393939"/>
  <ellipse cx="18" cy="13" rx="8" ry="3" stroke="white" stroke-width="1.5" fill="none"/>
  <line x1="10" y1="13" x2="10" y2="23" stroke="white" stroke-width="1.5"/>
  <line x1="26" y1="13" x2="26" y2="23" stroke="white" stroke-width="1.5"/>
  <ellipse cx="18" cy="23" rx="8" ry="3" stroke="white" stroke-width="1.5" fill="none"/>
</svg>
```

#### Shield / Security Icon (orange)
```html
<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
  <circle cx="18" cy="18" r="16" fill="#E9683B"/>
  <path d="M18 9 L26 13 L26 20 Q26 25 18 29 Q10 25 10 20 L10 13 Z" stroke="white" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
  <polyline points="14,18 17,21 22,15" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

#### Code / Terminal Icon (blue)
```html
<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
  <circle cx="18" cy="18" r="16" fill="#5454E9"/>
  <polyline points="14,14 9,18 14,22" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="22,14 27,18 22,22" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="20" y1="12" x2="16" y2="24" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

#### Package / Module Box Icon (green)
```html
<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
  <circle cx="18" cy="18" r="16" fill="#4CB979"/>
  <rect x="11" y="14" width="14" height="10" rx="2" stroke="white" stroke-width="1.5" fill="none"/>
  <polyline points="11,18 25,18" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="18" y1="14" x2="18" y2="18" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

#### Clock / Timer Icon (purple)
```html
<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
  <circle cx="18" cy="18" r="16" fill="#865CF0"/>
  <circle cx="18" cy="18" r="7" stroke="white" stroke-width="1.5" fill="none"/>
  <line x1="18" y1="13" x2="18" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"/>
  <line x1="18" y1="18" x2="22" y2="20" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
```

#### API / Network Icon (blue)
```html
<svg width="36" height="36" viewBox="0 0 36 36" fill="none">
  <circle cx="18" cy="18" r="16" fill="#5454E9"/>
  <circle cx="18" cy="18" r="4" fill="white"/>
  <circle cx="18" cy="18" r="8" stroke="white" stroke-width="1" fill="none" opacity="0.5"/>
  <circle cx="18" cy="18" r="12" stroke="white" stroke-width="1" fill="none" opacity="0.25"/>
</svg>
```

---

### Section 3: Creating Sidebar Icon Lists

When using `sidebarVisual: { type: 'icons', items: [...] }`, each item's `icon` field MUST be a compact **28×28** inline SVG:

```javascript
icesi.slideSidebarLeftBlue(
  'TypeScript Features',
  `<p>Description of the topic...</p>`,
  {
    type: 'icons',
    items: [
      {
        icon: '<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="13" fill="#5454E9"/><text x="14" y="19" text-anchor="middle" fill="white" font-size="12" font-weight="bold" font-family="system-ui">TS</text></svg>',
        label: 'TypeScript First'
      },
      {
        icon: '<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="13" fill="#4CB979"/><polyline points="8,14 12,19 20,9" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        label: 'Type Safety'
      }
    ]
  }
)
```

---

### Section 4: Using Icons in `.icon-card` Components

For card-based layouts inside `slideTwoCols`, `slideStandard`, or `slideStripeTop*`:

```html
<div class="icon-card blue">
  <div class="icon-symbol">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="16" fill="#5454E9"/>
      <polyline points="10,18 15,24 26,12" stroke="white" stroke-width="2.5"
        fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <div class="icon-body"><strong>Concept Name:</strong> Explanation of the concept in 1-2 sentences.</div>
</div>
```

---

### Section 5: HTML Embedding — No Conversion

Unlike the LaTeX workflow (which required exporting to PNG using `svgexport`), in the HTML system, SVGs are used **directly** — either inline in the content string or via `<img src="path.svg">` for file-based icons.

For **file-based icons** (saved as `.svg` files):
```html
<!-- In slideFourCards — compact icon in card header -->
icesi.slideFourCards(
  'Native APIs',
  '<img src="../../slides/nestjs/assets/icon_terminal.svg" height="28" alt="Terminal"> HTTP/HTTPS',
  '<p>Module for servers and clients</p>',
  ...
)
```

For **inline SVG** (recommended — no file dependency):
```javascript
icesi.slideStandard(
  'Installation',
  `<div style="display:flex; align-items:center; gap:16px; margin-bottom:16px;">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19" fill="#4CB979"/>
      <polyline points="10,20 17,27 30,13" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>
    <span style="font-size:22px; color:#4CB979; font-weight:700;">Ready to build!</span>
  </div>
  <ul>
    <li>All dependencies installed</li>
  </ul>`
)
```

---

### Section 6: Dimensions and Scaling

| Context | Icon Size | Notes |
|---|---|---|
| `.icon-symbol` in `.icon-card` | 36×36 | Centered in the symbol area |
| Sidebar icon list (`sidebarVisual` icons) | 28×28 | Compact, evenly distributed |
| Decorative icon in column header | 48×48 | Floated or block above title |
| Card header inline icon | `height="28"` | Next to text in card header |
| Decorative floating icon | `height="56"` | Floating to the right |

---

### Section 7: Consistency Rules

- A single slide **should not contain more than 1 prominent decorative icon**.
- Icons in `slideFourCards` must share the same visual format (either all round or all square).
- The **icon border/fill color must match the card or section semantics**.
- **SVGs must have a defined `viewBox`** so that the `height` scales correctly without distortion.
- **Transparent or themed Background**: Use `fill="none"` on root `<svg>` or a colored filled shape as background.
- **No Embedded Descriptive Text in Decorative SVGs**: Keep descriptive text in HTML (`.icon-body`), not inside the SVG, to maintain typography uniformity using Plus Jakarta Sans.
- **Never use emoji** in any icon slot — this is a hard constraint.
