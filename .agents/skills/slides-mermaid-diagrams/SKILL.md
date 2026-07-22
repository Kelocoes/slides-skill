---
name: slides-mermaid-diagrams
description: Workflow to generate inline Mermaid diagrams directly in Universidad Icesi HTML slides, without external CLI or PNG/PDF conversion.
---

# Skill: `slides-mermaid-diagrams` (Mermaid.js Inline)

This workflow explains how to use **Mermaid.js directly inside Universidad Icesi HTML slides**. No CLI tools (`mmdc`) or PNG/PDF pre-compiling are required.

---

### Section 1: How Inline Mermaid Works

Mermaid.js is loaded from a CDN and automatically compiles all `<div class="mermaid">` blocks when the page loads. The helper `icesi.mermaid(code)` generates this wrapper block:

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

Mermaid converts this block into a dynamically rendered SVG matching the Icesi color theme variables.

---

### Section 2: Initialization with Icesi Theme

Mermaid initialization occurs automatically within `icesi.init()`. The theme uses the institutional brand colors:

```javascript
// This runs inside icesi.init() — you DO NOT need to call it manually:
window.mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  themeVariables: {
    primaryColor:     '#5454E9',  // icesiblue — primary nodes
    secondaryColor:   '#865CF0',  // icesipurple — secondary nodes
    tertiaryColor:    '#4CB979',  // icesigreen — tertiary nodes
    primaryTextColor: '#FFFFFF',
    lineColor:        '#393939',  // icesidark
  },
  fontFamily: "'Plus Jakarta Sans', sans-serif",
});
```

If you need to override colors per diagram, use Mermaid `%%{init}%%` directives:

```
%%{init: {'theme': 'base', 'themeVariables': {
  'primaryColor': '#E9683B',
  'primaryTextColor': '#fff'
}}}%%
graph TD ...
```

---

### Section 3: Diagram Types and Examples

#### A. Flowcharts

```javascript
icesi.slideStandard(
  'HTTP Request Flow',
  icesi.mermaid(`
    %%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#5454E9', 'primaryTextColor': '#fff', 'lineColor': '#393939'}}}%%
    graph TD
      A["Client"] -->|"HTTP Request"| B{"API Gateway"}
      B -->|"Route /users"| C["Users Service"]
      B -->|"Route /data"| D["Data Service"]
      C --> E[("PostgreSQL")]
      D --> F[("MongoDB")]
      classDef blue fill:#5454E9,stroke:none,color:#fff
      classDef green fill:#4CB979,stroke:none,color:#fff
      classDef purple fill:#865CF0,stroke:none,color:#fff
      class A,B blue
      class C,D purple
      class E,F green
  `)
)
```

#### B. Sequence Diagrams

```javascript
icesi.slideTwoCols(
  'JWT Authentication Lifecycle',
  `<ul>
    <li>POST /login sends credentials</li>
    <li>Server validates against DB</li>
    <li>Signed JWT is returned</li>
    <li>Client attaches token to subsequent requests</li>
  </ul>`,
  icesi.mermaid(`
    sequenceDiagram
      autonumber
      actor Client
      participant API
      participant DB
      Client->>API: POST /login
      API->>DB: SELECT user
      DB-->>API: data
      API-->>Client: JWT Token
      Client->>API: GET /profile + JWT
      API-->>Client: Protected Data
  `)
)
```

#### C. Architecture Diagrams (Subgraphs)

```javascript
icesi.slideSidebarLeftBlue(
  'Node.js Architecture Stack',
  `<ul>
    <li>V8 engine executes JS</li>
    <li>libuv handles async I/O</li>
    <li>Event Loop coordinates callbacks</li>
  </ul>`,
  '' // no sidebar graphic, inline diagram used in content area
)

// Or with the diagram in the second column:
icesi.slideTwoCols(
  'Platform Layers',
  `<ul>
    <li>JS Application (your code)</li>
    <li>Node.js APIs (http, fs, stream)</li>
    <li>V8 Engine + libuv</li>
    <li>Operating System</li>
  </ul>`,
  icesi.mermaid(`
    graph TB
      subgraph App ["Your Application"]
        JS["JavaScript"]
      end
      subgraph Node ["Node.js Runtime"]
        V8["V8 Engine"]
        libuv["libuv"]
        APIs["Node APIs"]
      end
      subgraph OS ["Operating System"]
        IO["I/O, Network, Timers"]
      end
      JS --> APIs
      APIs --> V8
      APIs --> libuv
      libuv --> IO
  `)
)
```

#### D. State / Lifecycle Diagrams

```javascript
icesi.slideStripeTopLeft(
  'Promise Lifecycle States',
  icesi.mermaid(`
    stateDiagram-v2
      [*] --> Pending
      Pending --> Fulfilled : resolve()
      Pending --> Rejected  : reject()
      Fulfilled --> [*]
      Rejected  --> [*]
  `)
)
```

#### E. Entity-Relationship Diagrams

```javascript
icesi.slideStandard(
  'Data Model Relationships',
  icesi.mermaid(`
    erDiagram
      USER ||--o{ ORDER : "places"
      ORDER ||--|{ ITEM : "contains"
      ITEM }|--|| PRODUCT : "references"
  `)
)
```

---

### Section 4: Layout Specific Integrations

#### In `slideStandard` (Full width diagram):
```javascript
icesi.slideStandard('Title', icesi.mermaid(`graph LR\n  A --> B --> C`))
```

#### In `slideTwoCols` (col1 for text, col2 for diagram):
```javascript
icesi.slideTwoCols(
  'Title',
  `<ul><li>Point 1</li></ul>`,
  icesi.mermaid(`graph TD\n  A --> B`)
)
```

#### In `slideSidebarLeft*` (diagram in the right content area):
```javascript
icesi.slideSidebarLeftBlue(
  'Title',
  icesi.mermaid(`graph LR\n  A --> B`) + `<p>Additional Description</p>`,
  '' // no sidebar image
)
```

#### In `slideStripeTopLeft/Right` (diagram in open content area):
```javascript
icesi.slideStripeTopLeft(
  'Green Stripe Title',
  icesi.mermaid(`graph TD\n  A --> B --> C`)
)
```

---

### Section 5: Visual Quality Guidelines

- **Transparent Background**: Mermaid.js uses SVG with a transparent background by default. ✅
- **Scaling**: Mermaid SVGs inherit `max-width: 100%; height: auto` styling in `dist/main.css`. ✅
- **Font Legibility**: Keep a minimum `font-size` of 14px in theme variables to ensure text remains readable on 1280×720px screens.
- **Simplicity**: Target a maximum of 8-10 nodes per slide diagram. If it is more complex, split it across two slides.
- **Node Coloring**: Use `classDef` to apply brand colors to specific nodes in complex graphs.
- **No mmdc CLI required**: Do not export diagrams to PNG or PDF. Mermaid renders them dynamically in the browser.
