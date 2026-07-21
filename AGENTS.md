# Instrucciones para Agentes (AGENTS.md)

Este repositorio contiene la réplica en LaTeX (Beamer) de la plantilla institucional de la Universidad Icesi.

## 🤖 Directrices para Agentes y Subagentes

Cualquier agente que trabaje en esta presentación debe cumplir estrictamente las siguientes reglas:

1. **Uso de la Librería de Componentes y Plantillas:**
   - Toda diapositiva nueva debe usar las macros semánticas provistas por [icesibeamer.sty](icesibeamer.sty) (por ejemplo, `\titleSlideA`, `\slideStandard`, etc.).
   - Puedes consultar, reutilizar e inspirarte en las plantillas individuales ubicadas en la carpeta [templates/icesibeamer/](templates/icesibeamer/) para componer diapositivas según las necesidades visuales del usuario.
   - **No escribir código TikZ ad-hoc en las diapositivas** si ya existe una macro para ese diseño. Si es necesario crear un nuevo layout, este debe agregarse formalmente a [icesibeamer.sty](icesibeamer.sty).

2. **Tipografía e Imágenes:**
   - La tipografía debe ser **Plus Jakarta Sans** cargada de local en `resources/fonts/`.
   - Las imágenes de portadas y secciones deben colocarse en `resources/` y ser llamadas a través de las macros con control de existencia (el paquete define imágenes placeholder elegantes si las fotos reales no están presentes).

3. **Reglas de Formateo Visual y Habilidades (Skills):**
   - Consulta el manual detallado de posicionamiento, márgenes de seguridad y paletas de colores oficiales en [agents/formatting_rules.md](agents/formatting_rules.md).
   - Para aprender a seleccionar la plantilla correcta según el tipo de contenido y generar diapositivas de forma estructurada, consulta la guía de la habilidad en [agents/generate-slides/SKILL.md](agents/generate-slides/SKILL.md).

4. **Compilación Limpia:**
   - Compilar usando XeLaTeX: `xelatex -shell-escape -interaction=nonstopmode -output-directory=build main.tex`.
   - Mantener el directorio raíz libre de archivos compilados auxiliares (`.pdf_tex`, `.aux`, `.log`, `.nav`, `.out`, `.snm`, `.toc`). Estos deben guardarse exclusivamente en `build/` o en `svg-inkscape/`.

