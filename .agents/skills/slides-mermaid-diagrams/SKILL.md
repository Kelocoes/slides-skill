---
name: slides-mermaid-diagrams
description: Workflow to generate inline Mermaid diagrams directly in Universidad Icesi HTML slides, without external CLI or PNG/PDF conversion.
---

# Skill: `slides-mermaid-diagrams` (Mermaid.js Inline)

This workflow explains how to use **Mermaid.js directly inside Universidad Icesi HTML slides**. No CLI tools (`mmdc`) or PNG/PDF pre-compiling are required.

> **💡 Graphic Strategy Note:**
> Mermaid diagrams are ideal for quick flowcharts, sequence diagrams, and ER models. If a diagram requires custom styling, pixel-perfect alignment, or multi-layered architecture stacks, consider using **`slides-svg-graphics`** to build custom inline vector graphics.

---

### Section 1: How Inline Mermaid Works

Mermaid.js is loaded from CDN and initialized automatically via `icesi.init()`.

The helper `icesi.mermaid(code)` generates the required wrapper block:

```javascript
// Inside the content of any slide:
icesi.slideStandard(
  'Authentication Flow',
  icesi.mermaid(`
    sequenceDiagram
      actor Client
      participant API
      participant DB
      Client->>API: POST /login
      API->>DB: SELECT user
      DB-->>API: data
      API-->>Client: JWT Token
  `)
)
```

The resulting HTML inserted into the slide:
```html
<div class="mermaid">
  sequenceDiagram
    actor Client
    ...
</div>
```

---

### Section 2: Initialization with Icesi Theme

Mermaid initialization and rendering occur automatically within `icesi.init()`. The theme uses institutional brand colors:

```javascript
// Automatically executed inside icesi.init():
window.mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    primaryColor:     '#5454E9',  // icesiblue
    secondaryColor:   '#865CF0',  // icesipurple
    tertiaryColor:    '#4CB979',  // icesigreen
    primaryTextColor: '#FFFFFF',
    secondaryTextColor: '#393939',
    lineColor:        '#393939',  // icesidark
  },
  fontFamily: "'Plus Jakarta Sans', sans-serif",
});
window.mermaid.run({ querySelector: '.mermaid' });
```

---

### Section 3: Sidebar Diagram Integration

When placing a Mermaid diagram in `slideSidebarLeft*` sidebars:

```javascript
icesi.slideSidebarLeftOrange(
  'Module Structure',
  `<p>Content text...</p>`,
  {
    type: 'mermaid',
    code: `graph TD
      Root[AppModule] --> Auth[AuthModule]
      Root --> Users[UsersModule]
      style Root fill:#5454E9,color:#fff,stroke:none
      style Auth fill:#E9683B,color:#fff,stroke:none
      style Users fill:#4CB979,color:#fff,stroke:none`
  }
)
```

---

### Section 4: Visual Quality & Contrast Checklist
- **Contrast**: Node fills on dark sidebar panels or colored slides MUST have explicit text colors (`color:#fff` or `primaryTextColor`).
- **No Raw Code Leakage**: Verify that Mermaid diagrams render into SVG graphs rather than displaying raw code text.
- **Verification**: Always inspect screenshots under `slides/<topic>/build/` to verify that all diagrams rendered cleanly into SVG elements.
