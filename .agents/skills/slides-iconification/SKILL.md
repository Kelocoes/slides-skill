---
name: slides-iconification
description: Guidelines to design and embed simple, semantic SVG icons within Universidad Icesi Beamer slides, following the visual DNA of the iag-al-entorno icon system.
---

# Skill: `slides-iconification`

Esta guía establece las directrices para diseñar y embeber iconos SVG simples y semánticos dentro de las diapositivas Beamer de la Universidad Icesi, manteniendo el ADN visual del sistema de iconos de `iag-al-entorno`.

---

### Sección 1: ADN Visual del Sistema de Iconos

Al analizar los iconos de `iag-al-entorno/`, se ha descubierto el siguiente patrón visual:

**Estructura de un icón tarjeta (patrón horizontal 160×60):**
- **Rectángulo contenedor** (`160×60`, rx=6): fondo blanco o claro, con un borde coloreado según la semántica.
- **Zona izquierda** (x=20–55): círculo o forma geométrica que representa la esencia del concepto.
- **Zona derecha** (x=65–155): texto del label en `font-size="12"`, `font-family="system-ui"`, y `font-weight="bold"`.

**Estructura de un icón cuadrado (patrón compacto 100×70):**
- Sin rectángulo contenedor.
- Elementos geométricos compactos que evocan el concepto visualmente.
- **Escala**: Se usa directamente como miniatura de 1.5cm × 1.5cm en el slide.

**Paleta de bordes semánticos:**
- **Tecnología / proceso:** `#5454E9` (icesiblue)
- **Éxito / disponible:** `#4CB979` (icesigreen) 
- **Interacción / IA:** `#865CF0` (icesipurple)
- **Advertencia:** `#E9683B` (icesiorange)
- **Neutral / datos:** `#393939` (icesidark)

---

### Sección 2: Catálogo de Tipos de Iconos para Slides

A continuación se clasifican y documentan 8 tipos de iconos con sus fórmulas SVG:

1. **Icón de Terminal/Código** (para slides de instalación/comandos)
2. **Icón de Servidor/API** (para slides de arquitectura)
3. **Icón de Paquete/NPM** (para slides de ecosistema)
4. **Icón de Base de Datos** (para slides de persistencia)
5. **Icón de Reloj/Timer** (para slides de async/Event Loop)
6. **Icón de Engranaje/Proceso** (para slides de configuración)
7. **Icón de Flecha/Flujo** (para slides de flujos de datos)
8. **Icón de Check/Éxito** (para listas de ventajas/características)

*(Ejemplo base de estructura de código SVG siguiendo el patrón de `iag-al-entorno`)*:
```xml
<svg width="100" height="70" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Reemplazar con formas geométricas específicas para cada concepto, usando colores semánticos -->
  <rect width="100" height="70" rx="8" fill="#FFFFFF" stroke="#5454E9" stroke-width="2"/>
  <circle cx="50" cy="35" r="15" fill="#5454E9"/>
</svg>
```

---

### Sección 3: Dimensiones y Escala en Slides

Las dimensiones de embedding dependen del contexto de uso en la presentación:

- **Dentro de `\slideFourCards`**: `1.8cm × 0.8cm` (icón muy compacto, inline con texto)
  ```latex
  \includegraphics[height=0.8cm]{slides/<tema>/assets/icon_compacto.png}
  ```
- **Cabecera de columna en `\slideTwoCols`**: `2.0cm × 1.5cm`
  ```latex
  \includegraphics[height=1.5cm]{slides/<tema>/assets/icon_columna.png}
  ```
- **Decoración en `\slideStandard`**: `1.5cm` de alto máximo, flotando a la derecha del título.
  ```latex
  \includegraphics[height=1.5cm]{slides/<tema>/assets/icon_decorativo.png}
  ```
- **En sidebar colorido**: `3.0cm × 3.0cm` máximo.
  ```latex
  \includegraphics[height=3.0cm,keepaspectratio]{slides/<tema>/assets/icon_sidebar.png}
  ```

---

### Sección 4: Workflow de Creación

1. **Identificar el concepto** del slide (ej: "instalación", "base de datos", "async").
2. **Elegir el tipo de icón** correspondiente del catálogo.
3. **Personalizar** con los colores semánticos del tema.
4. **Guardar el `.svg`** en `slides/<tema>/assets/icon_<nombre>.svg`.
5. **Convertir a PNG** con escala 2x:
   ```bash
   npx svgexport slides/<tema>/assets/icon_<nombre>.svg slides/<tema>/assets/icon_<nombre>.png 2x
   ```
6. **Embeber** en el documento `.tex`:
   ```latex
   \includegraphics[height=1.5cm]{slides/<tema>/assets/icon_<nombre>.png}
   ```

---

### Sección 5: Reglas de Coherencia

- Un mismo slide **no debe tener más de 1 icón decorativo prominente**.
- Los iconos en cards (`\slideFourCards`) deben ser del mismo tipo visual (todos formato tarjeta o todos formato cuadrado).
- El **color de borde del icón debe coincidir semánticamente** con el color de la card o la sección que lo contiene.
- **Nunca usar iconos con texto embebido en slides** (el texto debe estar renderizado en LaTeX, no dentro de la imagen SVG, para mantener una tipografía uniforme y escalable).
