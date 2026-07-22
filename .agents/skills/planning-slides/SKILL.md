---
name: planning-slides
description: Interactive planning & discovery skill for slide generation — Engages in a wayfinding interview to clarify goals, resolve ambiguities, explore pedagogical focus, map out content blocks, and produce a formal spec plan file in .agents/spec/slides-plan/<topic>-plan.md before implementation.
---

# Skill: `planning-slides`

This skill handles the **discovery, wayfinding, and interactive planning stage** for creating presentation slides using the Universidad Icesi HTML/Reveal.js presentation framework.

---

## Purpose & Core Mandate

When creating a new set of slides, the path from a vague idea to a polished presentation is wrapped in fog. **The agent MUST perform a structured planning and discovery process before writing any slide HTML code.**

Rather than rushing to write code or generating a static plan in isolation, `planning-slides` uses **wayfinding and interactive grilling**:
1. Asking targeted, one-at-a-time design and pedagogical questions.
2. Exploring scope boundaries (in-scope vs. out-of-scope).
3. Defining clear visual architecture (diagrams, layout choices, card grids).
4. Generating a comprehensive, decision-backed specification file in `.agents/spec/slides-plan/<topic>-plan.md`.

---

## Interactive Wayfinding & Discovery (Grilling Workflow)

Before saving the final specification, the agent MUST guide the user through a dynamic, iterative discovery dialogue ("grilling"):

**Mandatory Web Research:**
Before finalizing the plan, you MUST use the `search_web` tool (if available) or invoke a `research` subagent to find updated references, real-world examples, and best practices regarding the topic to enrich the presentation content beyond your base training data.

**Dynamic Questions:** Do not just ask a static list of questions. Ask follow-up questions based on the user's answers until you have a deep, comprehensive understanding of the goals, context, and visual strategy. Consider these areas:

### 1. Pinpoint the Destination & Audience
- What is the primary learning objective or key takeaway for the audience?
- Who is the audience (e.g., undergraduate students, senior engineers, executives)?
- What depth level is required (conceptual overview vs. deep-dive code examples)?

### 2. Map the Scope & Fog of War
- **In Scope**: Key modules, patterns, and concepts that MUST be covered.
- **Not Yet Specified (Fog)**: Subtopics or examples that might be added depending on slide budget.
- **Out of Scope**: Complex edge cases or related technologies consciously ruled out for this presentation.

### 3. Layout & Visual Strategy
- **CRITICAL AESTHETIC REQUIREMENT**: DO NOT use Mermaid for major architecture diagrams unless it's a simple sequence diagram. Mermaid is visually sterile. ALWAYS prefer crafting **raw SVG code** (following `slides-svg-graphics` templates) for premium, beautifully colored infographics.
- **AVOID DENSE TEXT**: Never pack heavy paragraphs into a single slide. If a concept has 4 steps, use 4 slides (or progressive code frames). Chunk the content!
- **SHARED ASSETS REGISTRY**: Reusable SVGs, logos, and general architecture diagrams should be checked for and stored in `slides/shared/`. Always read `slides/shared/registry.json` first to see if an image you need already exists. If you generate a highly reusable diagram, add it to `slides/shared/` instead of the local topic's asset folder, and update the `registry.json` with its path and an English description.
- **PEDAGOGICAL REQUIREMENT**: Students learn best visually! For EVERY major complex topic, you MUST include at least one custom raw SVG infographic.
- **ICONIFICATION**: Every bullet point list (`<ul>`, `<li>`) MUST use an inline SVG icon instead of default black dots. Read `slides-iconification` for details.
- How should multi-column or 4-card grids (`icesi.slideFourCards`) be distributed to maintain ideal content density (>60% visual fullness, zero overflow)?
- **Sidebar panel planning**: For every `slideSidebarLeft*` slide, explicitly decide what goes in the sidebar panel:
  - Custom SVG illustration / Architecture Graphic
  - Icon list — for up to 5 key attributes or features. **Icons MUST be inline SVG, never emoji characters.**
  - Leave empty only for explicitly minimalist transition slides
- **Evenly-distributed items**: When a slide has 2–4 key points with icons, plan for `.items-evenly` or `.icon-grid-2/3` layout instead of plain bullet lists. This maximizes visual density and engagement.
- **Content splitting**: If a topic needs > 5 bullet points in one area, plan for 2 slides instead of 1 to avoid font size reduction below 16px.
- **"Frames" / Incremental Reveal**: If the user wants to reveal information step-by-step (e.g., showing 1 objective, then 2, up to 6), you MUST plan this as **separate, duplicated slides** (Slide 1, Slide 2, Slide 3...) with incrementally added content. Do NOT rely on Reveal.js fragments, as the primary output is PDF and we want explicit frames in the PDF.
- **Versatile Diagrams**: Remember that simple colored template slides (`icesi.sectionSlideE*`) can now accept a second parameter `content`, making them perfect for large, full-bleed SVG graphics (Do NOT use Mermaid).

---

## Critical Content Rules (MUST follow during planning)

### No External Workshops or Exercises
- **NEVER plan slides that redirect to external workshops, labs, or exercises** (e.g., "Taller Práctico", "Lab 01", "Hands-On Exercise").
- All information must be **self-contained and pedagogically complete** within the presentation itself.
- If a topic warrants deeper coverage, plan additional conceptual or demonstrative slides on that topic instead.
- **Allowed alternatives to workshop slides**: A "Case Study" slide showing a worked example inline, a "Comparison" slide, or an additional "Deep Dive" slide on the same concept.

### No Emoji Icons
- **NEVER use emoji characters** (🚀, ⚙️, 📦, etc.) as icons inside `.icon-card`, `.icon-symbol`, `.items-evenly`, or any other layout component.
- All icons MUST be **semantic inline SVG** created by the agent following the `slides-iconification` skill guidelines.
- In the spec plan, mark each icon slot as: `"Icon: inline SVG — [concept description]"` to signal that the implementation agent must create the SVG.
- When using `sidebarVisual: { type: 'icons', items: [...] }`, each item's `icon` field must contain an inline SVG string, not an emoji.

### Self-Contained Pedagogical Completeness
Before finalizing the spec, the agent MUST perform an **internal critique pass**:

**Ask for each slide:**
1. *"Does this slide teach something a student can understand standalone?"*
2. *"Is there enough visual support (diagram, icon grid, code example) to make the concept concrete?"*
3. *"Is the information density appropriate — not too sparse (<60% fill) and not overloaded (>5 bullets)?"*
4. *"Does the slide sequence tell a coherent story without gaps that require external resources?"*

**Reject and replace any slide that:**
- Redirects to an external activity without explaining the concept
- Has fewer than 3 content elements (title + only 1 bullet point)
- Contains no visual anchor (diagram, code, or icon grid) for abstract concepts
- Duplicates information already covered without adding depth

---

## Parameters & Usage

- **`topic_description`**: Text explaining the topic, course, or tech stack.
- **`target_slide_count`**: Number of slides requested (e.g., 20, 25, 30).

Example invocation:
```
/planning-slides Plan a 25-slide presentation on NestJS covering core concepts, DI, controllers, pipes, guards, interceptors, and microservices.
```

---

## Ecosystem & Sister Skills Integration

The spec plan generated by this skill acts as the master map for all sister skills:

1. **`implement-slides`** (`.agents/skills/implement-slides/SKILL.md`):
   - Reads the spec plan file and generates the final Reveal.js presentation HTML.
2. **`slides-mermaid-diagrams`** (`.agents/skills/slides-mermaid-diagrams/SKILL.md`):
   - Defines inline sequence, flowchart, and architecture diagrams via `icesi.mermaid(...)`.
3. **`slides-iconification`** (`.agents/skills/slides-iconification/SKILL.md`):
   - Provides semantic SVG icons for lists and highlights. **No emoji allowed.**
4. **`slides-svg-graphics`** (`.agents/skills/slides-svg-graphics/SKILL.md`):
   - Provides custom vector illustrations and sidebar graphics under `slides/<topic>/assets/`.

---

## Layout Library Catalog (`dist/main.js`)

Every slide in the spec plan MUST map to a specific function from the catalog:

- **Covers**: `icesi.titleSlideA`, `B`, `C`, `D`, `E`, `F`
  - Note: `titleSlideF` is ONLY for major chapter breaks with a specific aesthetic purpose, not for workshop redirects.
- **Section Dividers**: `icesi.sectionSlideA`, `B`, `C`, `E`, `EBlue`, `EGreen`, `EYellow`, `EOrange`
  - Note: `sectionSlideC(title)` accepts exactly **1 argument** (title string only).
  - Note: `sectionSlideA(title)` accepts exactly **1 argument** (title string only).
  - Note: `sectionSlideE*` variants all accept **2 arguments** (title string, and an optional `content` string for large diagrams, `<svg>`, or HTML).
- **Sidebars**: `icesi.slideSidebarLeftOrange`, `Blue`, `Purple`
  - `sidebarVisual` parameter: `''` | `'path'` | `{type:'graphic',html}` | `{type:'mermaid',code}` | `{type:'icons',items}`
  - When `type:'icons'`, each item's `icon` field MUST be an inline SVG string (see `slides-iconification`).
- **Banners/Stripes**: `icesi.slideStripeTopLeft`, `TopRight`
- **Content**: `icesi.slideStandard`, `slideTwoCols`, `slideThreeCols`, `slideFourCards`

### Function Signatures (Critical — match exactly):
```javascript
icesi.sectionSlideA(title)          // 1 arg only
icesi.sectionSlideC(title)          // 1 arg only — NOT (number, title, subtitle)
icesi.sectionSlideEBlue(title, content) // 2 args (content is optional, good for diagrams)
icesi.slideSidebarLeftBlue(title, content, sidebarVisual)   // 3 args
icesi.slideFourCards(title, c1title, c1body, c2title, c2body, c3title, c3body, c4title, c4body)  // 9 args
```

### CSS Utility Classes (available inside any content area):
- **`.items-evenly`** — flex column with `space-evenly`, ideal for icon+text rows filling slide height
- **`.icon-grid-2`** / **`.icon-grid-3`** — 2 or 3 column icon card grids
- **`.icon-card`** + **`.icon-symbol`** + **`.icon-body`** — icon+text card with brand color variant (`blue`, `green`, `orange`, `purple`)
  - `.icon-symbol` MUST contain an inline SVG, NOT an emoji
- **`.slide-footer-tag`** — white-on-blue badge for institution/faculty labels (used inside `titleSlideA` subtitle)
- **`.text-blue`**, **`.text-green`**, **`.text-orange`**, **`.text-purple`**, **`.text-dark`** — inline color helpers

---

## Spec Plan Document Format (`.agents/spec/slides-plan/<topic>-plan.md`)

The final output of this skill MUST be saved to `.agents/spec/slides-plan/<topic>-plan.md`:

```markdown
# Slide Specification Plan: <Topic Name>

## Destination & Objectives
- **Target Audience**: <Audience description>
- **Target Slide Count**: <N>
- **Output Files**:
  - Primary Deliverable: `slides/<topic>/<topic>.pdf`
  - HTML Canvas Medium: `slides/<topic>/<topic>.html`

## Decisions & Scope Boundary
- **In-Scope Key Concepts**: <List>
- **Out-of-Scope**: <Explicitly excluded topics>

## Pedagogical Critique (Internal QA Pass)
<!-- Agent must fill this section before finalizing -->
- **Slides replaced during critique**: List any slides that were redesigned due to failing the self-contained test.
- **Coverage gaps addressed**: Topics that needed extra slides for sufficient depth.
- **Density issues resolved**: Slides split or merged for optimal content density.

## Slide-by-Slide Map (1..N)
For each slide:
- **Slide <N>**: `<Title>`
- **Layout Function**: `icesi.<layoutName>(...)` — verify argument count matches signature
- **Content & Structure**: Key points, code blocks, or card parameters.
- **Visual Assets / Sister Skills**: Mermaid diagram specs, SVG assets, or icon specs (NO emojis — describe as "inline SVG: [concept]").
- **Self-Contained Check**: ✅ / ❌ (if ❌, redesign this slide)

## Handoff & Execution
Run `/implement-slides .agents/spec/slides-plan/<topic>-plan.md` to generate the presentation slides and compile the final PDF file under `slides/<topic>/<topic>.pdf`.
```
