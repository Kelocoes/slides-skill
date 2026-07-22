---
name: slides-svg-graphics
description: Guidelines and workflow to generate brand-compliant vector graphics, flowcharts, architecture stacks, and SVG illustrations for Universidad Icesi HTML/Reveal.js presentations. SVGs are embedded directly as HTML or sidebar visual objects.
---

# Skill: `slides-svg-graphics` (SVG Vector Graphics for HTML Slides)

This skill provides guidelines and SVG code templates for creating custom vector illustrations, architecture diagrams, component stacks, and flowcharts for Universidad Icesi HTML slides.

> **💡 Primary Recommendation for Diagrams:**
> Custom SVG graphics (`{ type: 'graphic', html: '<svg>...</svg>' }` or inline HTML SVGs) are **preferred over plain text or brittle Mermaid strings** for complex architecture diagrams, system stacks, and sidebar visuals. Custom SVGs provide **100% design control, pixel-perfect rendering, exact typography, and zero browser parsing failures**.

---

## 🎨 1. Institutional Color Tokens for SVGs

All custom SVGs must strictly adhere to the institutional palette:

| Role / Element | Hex | Token |
| :--- | :--- | :--- |
| **Primary / Accent Nodes** | `#5454E9` | `icesiblue` |
| **Secondary Processes** | `#865CF0` | `icesipurple` |
| **Success / Data / Paths** | `#4CB979` | `icesigreen` |
| **Highlights / Tags** | `#E4EB60` | `icesiyellow` |
| **Alerts / Warnings** | `#E9683B` | `icesiorange` |
| **Dark Borders / Texts** | `#393939` | `icesidark` |
| **White Container / Cards** | `#FFFFFF` | `icesiwhite` |

> **Rule**: Always use `fill="transparent"` or `fill="none"` as the background of the root `<svg>` so it integrates cleanly on white body slides or colored sidebars.

---

## 🛠️ 2. SVG Templates for Common Slide Visuals

### A. Sidebar Architecture Stack SVG (fits in 429×400px panel)

Use inside `slideSidebarLeft*` with `{ type: 'graphic', html: '...' }`:

```xml
<svg viewBox="0 0 380 340" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Top Layer -->
  <rect x="20" y="20" width="340" height="60" rx="10" fill="#5454E9"/>
  <text x="190" y="55" text-anchor="middle" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="bold">Controller Layer (HTTP Routing)</text>
  
  <!-- Arrow -->
  <line x1="190" y1="80" x2="190" y2="105" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="4 4"/>
  
  <!-- Middle Layer -->
  <rect x="20" y="110" width="340" height="60" rx="10" fill="#865CF0"/>
  <text x="190" y="145" text-anchor="middle" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="bold">Service Layer (Business Logic)</text>
  
  <!-- Arrow -->
  <line x1="190" y1="170" x2="190" y2="195" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="4 4"/>
  
  <!-- Bottom Layer -->
  <rect x="20" y="200" width="340" height="60" rx="10" fill="#4CB979"/>
  <text x="190" y="235" text-anchor="middle" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="bold">Repository / ORM Layer</text>

  <!-- Database Node -->
  <rect x="90" y="280" width="200" height="45" rx="8" fill="#393939"/>
  <text x="190" y="308" text-anchor="middle" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="bold">PostgreSQL / MongoDB</text>
</svg>
```

---

### B. Linear Request-Response Pipeline SVG (for two-column or standard slides)

```xml
<svg viewBox="0 0 560 220" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Step 1: Client -->
  <rect x="10" y="70" width="110" height="80" rx="10" fill="#393939"/>
  <text x="65" y="105" text-anchor="middle" fill="#FFFFFF" font-size="14" font-weight="bold" font-family="'Plus Jakarta Sans', sans-serif">Client</text>
  <text x="65" y="125" text-anchor="middle" fill="#CECFD4" font-size="11" font-family="'Plus Jakarta Sans', sans-serif">HTTP Req</text>

  <path d="M125 110 L165 110" stroke="#5454E9" stroke-width="3" marker-end="url(#arrow)"/>

  <!-- Step 2: Guard -->
  <rect x="170" y="70" width="110" height="80" rx="10" fill="#E9683B"/>
  <text x="225" y="105" text-anchor="middle" fill="#FFFFFF" font-size="14" font-weight="bold" font-family="'Plus Jakarta Sans', sans-serif">Guard</text>
  <text x="225" y="125" text-anchor="middle" fill="#FFFFFF" font-size="11" font-family="'Plus Jakarta Sans', sans-serif">Auth & Roles</text>

  <path d="M285 110 L325 110" stroke="#5454E9" stroke-width="3"/>

  <!-- Step 3: Pipe -->
  <rect x="330" y="70" width="110" height="80" rx="10" fill="#5454E9"/>
  <text x="385" y="105" text-anchor="middle" fill="#FFFFFF" font-size="14" font-weight="bold" font-family="'Plus Jakarta Sans', sans-serif">Pipe</text>
  <text x="385" y="125" text-anchor="middle" fill="#FFFFFF" font-size="11" font-family="'Plus Jakarta Sans', sans-serif">DTO Validation</text>

  <path d="M445 110 L485 110" stroke="#5454E9" stroke-width="3"/>

  <!-- Step 4: Controller -->
  <rect x="490" y="70" width="110" height="80" rx="10" fill="#4CB979"/>
  <text x="545" y="105" text-anchor="middle" fill="#FFFFFF" font-size="14" font-weight="bold" font-family="'Plus Jakarta Sans', sans-serif">Handler</text>
  <text x="545" y="125" text-anchor="middle" fill="#FFFFFF" font-size="11" font-family="'Plus Jakarta Sans', sans-serif">Execute</text>
</svg>
```

---

### C. Circular / Lifecycle Flow SVG (for Event Loop, Request Lifecycles)

```xml
<svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="160" cy="160" r="130" stroke="#CECFD4" stroke-width="4" stroke-dasharray="8 8"/>
  
  <!-- Core Node -->
  <circle cx="160" cy="160" r="45" fill="#5454E9"/>
  <text x="160" y="165" text-anchor="middle" fill="#FFFFFF" font-size="14" font-weight="bold" font-family="'Plus Jakarta Sans', sans-serif">Core</text>

  <!-- Phase 1 (Top) -->
  <rect x="110" y="10" width="100" height="40" rx="8" fill="#4CB979"/>
  <text x="160" y="35" text-anchor="middle" fill="#FFFFFF" font-size="12" font-weight="bold" font-family="'Plus Jakarta Sans', sans-serif">Middleware</text>

  <!-- Phase 2 (Right) -->
  <rect x="230" y="140" width="80" height="40" rx="8" fill="#865CF0"/>
  <text x="270" y="165" text-anchor="middle" fill="#FFFFFF" font-size="12" font-weight="bold" font-family="'Plus Jakarta Sans', sans-serif">Guards</text>

  <!-- Phase 3 (Bottom) -->
  <rect x="110" y="270" width="100" height="40" rx="8" fill="#E9683B"/>
  <text x="160" y="295" text-anchor="middle" fill="#FFFFFF" font-size="12" font-weight="bold" font-family="'Plus Jakarta Sans', sans-serif">Interceptors</text>

  <!-- Phase 4 (Left) -->
  <rect x="10" y="140" width="80" height="40" rx="8" fill="#5454E9"/>
  <text x="50" y="165" text-anchor="middle" fill="#FFFFFF" font-size="12" font-weight="bold" font-family="'Plus Jakarta Sans', sans-serif">Pipes</text>
</svg>
```

---

## 🖼️ 3. How to Use Custom SVGs in Slide Component Functions

### In `slideSidebarLeft*` (sidebar Visual slot):
```javascript
icesi.slideSidebarLeftOrange(
  'Architecture Layers',
  `<p>Explanatory text here...</p>`,
  {
    type: 'graphic',
    html: `<svg viewBox="0 0 380 340" fill="none">...</svg>`
  }
)
```

### In `slideTwoCols` (Right column slot):
```javascript
icesi.slideTwoCols(
  'Request Processing Pipeline',
  `<ul><li>Step by step explanation...</li></ul>`,
  `<svg viewBox="0 0 560 220" fill="none">...</svg>`
)
```

### In `slideStandard` (Main content area):
```javascript
icesi.slideStandard(
  'System Interaction Model',
  `<div style="display:flex; justify-content:center; align-items:center;">
     <svg viewBox="0 0 560 220" fill="none">...</svg>
   </div>
   <p style="text-align:center; font-size:16px; color:#88898C; margin-top:12px;">Figure 1: End-to-end request pipeline.</p>`
)
```

---

## ✅ 4. SVG Verification Checklist
- [ ] Uses institutional colors (`#5454E9`, `#865CF0`, `#4CB979`, `#E9683B`, `#393939`, `#FFFFFF`).
- [ ] Root `<svg>` specifies `viewBox="0 0 W H"` and `fill="none"`.
- [ ] Text elements use `font-family="'Plus Jakarta Sans', sans-serif"` and clean `font-size` (12px–16px).
- [ ] Tested via Playwright screenshots in `slides/<topic>/build/` to verify crispness and legibility.
