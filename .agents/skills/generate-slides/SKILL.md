---
name: generate-slides
description: Beamer Layout Library and Slide Generation skill for Universidad Icesi slide template composition workflow.
---

# Skill: `generate-slides` (Beamer Layout Library and Slide Generation)

This skill defines the slide layout library for Universidad Icesi and provides a step-by-step composition workflow for autonomous agents to dynamically build brand-compliant slides based on user requirements.

---

## 📂 Layout Library Structure

The styling and layout rules are central to the style package and guidelines under [agents/](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/agents/):

```
agents/
├── formatting_rules.md   # Exact bounding boxes, Brand Colors, Safe Margins
├── memory.md             # Intended slide layouts contexts and technical log
└── generate-slides/
    └── SKILL.md          # This skill composition guide
```

The consolidated stylesheet [icesibeamer.sty](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/icesibeamer.sty) contains all macro declarations (`\titleSlideA`, `\sectionSlideA`, etc.).

---

## 📐 Layout Composition Rules and Safety Margins

To ensure text does not overlap with structural graphics or background shapes, follow these positioning rules:
1. **Vertical Alignment on Striped Slides (`[plain, t]`)**: When using banner layouts (e.g. `slideStripeTopLeft`), define the frame as `[plain, t]` and prepend an invisible vertical spacer rule `\rule{0pt}{7.2cm}` inside the frame body to push text below the decorative headers.
2. **Exclusive Use of Stylesheet Macros**: Never write ad-hoc TikZ code directly on slides in [main.tex](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/main.tex). If a layout is missing, it must be added as a style macro inside [icesibeamer.sty](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/icesibeamer.sty) first.
3. **Text Overlaps and Spacing**: Ensure standard content slides maintain at least `\vspace*{5.2cm}` in their margins so the body text does not mount onto the slide title.
4. **Hyphenation and Line Cuts**: Titles must never be cut with automated silabication (e.g., "Ja-vascript"). Use `\hyphenpenalty=10000\exhyphenpenalty=10000` inside nodes or design manual line breaks `\\` inside titles to preserve word integrity.
5. **Left Sidebar Images**: The sidebar templates `\slideSidebarLeftOrange/Blue/Purple` support a 3rd parameter. Use this parameter to center a schema or vector image in the color bar to enrich the slide's visual appeal.

---

## 🚀 Compilation and Verification Workflow

When generating or modifying slides, you MUST execute the following verification pipeline:
1. **Compile Three Times**: Run XeLaTeX three consecutive times to resolve absolute TikZ coordinate positions in the auxiliary `.aux` file stored in the build directory:
   ```bash
   xelatex -interaction=nonstopmode -output-directory=build main.tex
   ```
2. **Export to PNG for Review**: Export the output PDF pages to PNG (at 150 DPI) for alignment audit:
   ```bash
   pdftoppm -png -r 150 build/main.pdf build/page
   ```
3. **Visual Structure and Quality Checklist**:
   - Check page 1 (cover) to guarantee there are no word splits or weird breaks in titles.
   - Audit pages to confirm that text blocks do not overlap with titles or decorative background shapes.
   - Verify sidebar pages contain a helpful schematic graphic when requested.
   - Ensure horizontal title bounds on section transitions (e.g., Slide 8 / `\sectionSlideE`) allow wide text without wrapping.

