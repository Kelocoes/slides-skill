# Agent Instructions (AGENTS.md)

This repository contains the LaTeX (Beamer) replica of the institutional slide template for Universidad Icesi.

---

## 🤖 Repository Guide for Agents

Any agent working on this presentation must strictly follow the control guidelines located in the `agents/` directory:

### 1. Context and Memory
Review slide classification and design decisions at:
- 💾 **[agents/memory.md](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/agents/memory.md)**: Details the intended layout usage of the 19 project slides and the history of technical changes.

### 2. Consistency and Formatting Rules
Review exact dimensions, brand colors, and safe bounding boxes to prevent text overlaps at:
- 📐 **[agents/formatting_rules.md](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/agents/formatting_rules.md)**: Manual detailing safe text bounding boxes for each slide layout.

### 3. Composition Skills
Review the interactive guide to composing new slides using native theme commands at:
- 🛠️ **[agents/generate-slides/SKILL.md](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/agents/generate-slides/SKILL.md)**: Guidelines on structured frame composition and content flow.

---

## 🚀 General Production Guidelines

1. **Exclusive Use of Stylesheet**:
   - Every slide in [main.tex](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/main.tex) must invoke the macros defined in [icesibeamer.sty](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/icesibeamer.sty) (`\titleSlideA`, `\slideStandard`, etc.).
   - **Do not write ad-hoc TikZ code directly on slides**. Any new visual component must be modularized and integrated directly into the main stylesheet first.
2. **Typography and Images**:
   - Primary typeface: **Plus Jakarta Sans** (loaded locally from `resources/fonts/`).
   - Vector graphics must be handled as native PDFs under `resources/logos/` and `resources/patterns/` and imported via `\includegraphics` (no local Inkscape requirement).
3. **Compilation and Cleanup**:
   - Compile by running XeLaTeX consecutively:
     ```bash
     xelatex -interaction=nonstopmode -output-directory=build main.tex
     ```
   - The root directory must remain 100% clean. All auxiliary compilation files (`.aux`, `.log`, `.nav`, `.out`, `.snm`, `.toc`) must be stored exclusively inside the `build/` folder.
