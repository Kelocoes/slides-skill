---
name: slides-iconification
description: Guidelines to design and embed simple, semantic SVG icons within Universidad Icesi HTML/Reveal.js slides, following the visual DNA of the iag-al-entorno icon system.
---

# Skill: `slides-iconification` (SVG Icons en HTML)

Esta guía establece las directrices para diseñar y embeber iconos SVG simples y semánticos dentro de las diapositivas HTML de la Universidad Icesi. El SVG se usa **directamente como `<img>` o inline**, sin conversión a PNG ni PDF.

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
- **Escala**: Se usa directamente como miniatura dentro del slide.

**Paleta de bordes semánticos:**
- **Tecnología / proceso:** `#5454E9` (icesiblue)
- **Éxito / disponible:** `#4CB979` (icesigreen)
- **Interacción / IA:** `#865CF0` (icesipurple)
- **Advertencia:** `#E9683B` (icesiorange)
- **Neutral / datos:** `#393939` (icesidark)

---

### Sección 2: Catálogo de Tipos de Iconos para Slides

A continuación se clasifican 8 tipos de iconos con sus fórmulas SVG:

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

### Sección 3: Embedding en HTML — Sin Conversión a PNG

A diferencia del flujo LaTeX (que requería exportar a PNG con `svgexport`), en el sistema HTML los SVGs se usan **directamente**:

#### Opción A: `<img src="...">` (recomendada para iconos rasterizados o fijos)

```html
<!-- Dentro del content de cualquier slide -->

<!-- En slideFourCards — icono compacto en el header de la tarjeta -->
icesi.slideFourCards(
  'APIs Nativas',
  '<img src="slides/nodejs/assets/icon_terminal.svg" height="28" alt="Terminal"> HTTP/HTTPS',
  '<p>Módulo para servidores y clientes</p>',
  '<img src="slides/nodejs/assets/icon_server.svg" height="28" alt="Server"> File System',
  '<p>Lectura y escritura de archivos</p>',
  ...
)

<!-- En slideStandard — icono decorativo junto al título -->
icesi.slideStandard(
  'Instalación',
  `<img src="slides/nodejs/assets/icon_npm.svg" height="40" alt="NPM" style="float:right; margin-left:16px;">
   <ul>
     <li>Instalar Node.js desde nodejs.org</li>
     <li>Verificar: <code>node --version</code></li>
   </ul>`
)
```

#### Opción B: SVG Inline (recomendada para iconos que necesitan animaciones CSS)

```html
<!-- Directamente en el HTML del contenido -->
icesi.slideStandard(
  'Verificación de Instalación',
  `<div style="display:flex; align-items:center; gap:16px; margin-bottom:16px;">
    <!-- SVG inline del icono de check -->
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19" fill="#4CB979"/>
      <polyline points="10,20 17,27 30,13" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>
    <span style="font-size:22px; color:#4CB979; font-weight:700;">¡Node.js instalado correctamente!</span>
  </div>
  <ul>
    <li>Versión detectada: v20.x.x</li>
  </ul>`
)
```

---

### Sección 4: Dimensiones y Escala en Slides HTML

Las dimensiones de embedding dependen del contexto de uso:

- **Dentro de `slideFourCards`** (card header): `height="28"` — compacto e inline con texto del header
  ```html
  <img src="assets/icon_terminal.svg" height="28" alt="Terminal">
  ```

- **Cabecera de columna en `slideTwoCols`**: `height="48"`
  ```html
  <div style="margin-bottom:12px;">
    <img src="assets/icon_server.svg" height="48" alt="Servidor">
    <strong style="display:block; color:#5454E9; font-size:20px;">Backend</strong>
  </div>
  ```

- **Decoración en `slideStandard`**: `height="56"` flotando a la derecha del título
  ```html
  <img src="assets/icon_decorativo.svg" height="56" alt="" style="float:right; margin-left:20px;">
  ```

- **En sidebar colorido** (`slideSidebarLeft*`): usar el parámetro `imagePath` de la función
  ```javascript
  icesi.slideSidebarLeftBlue(
    'Base de Datos',
    `<ul><li>SQL vs NoSQL</li></ul>`,
    'slides/nodejs/assets/icon_db_large.svg'  // 359×359px max
  )
  ```

---

### Sección 5: Workflow de Creación

1. **Identificar el concepto** del slide (ej: "instalación", "base de datos", "async").
2. **Elegir el tipo de icón** correspondiente del catálogo.
3. **Personalizar** con los colores semánticos del tema.
4. **Guardar el `.svg`** en `slides/<tema>/assets/icon_<nombre>.svg`.
5. **Embeber directamente** en el HTML del slide:
   ```html
   <img src="slides/<tema>/assets/icon_<nombre>.svg" height="40" alt="Descripción">
   ```
6. **Sin conversión**: No se requiere `svgexport`, `magick`, ni ninguna herramienta CLI.

---

### Sección 6: Reglas de Coherencia

- Un mismo slide **no debe tener más de 1 icón decorativo prominente**.
- Los iconos en `slideFourCards` deben ser del mismo tipo visual (todos formato tarjeta o todos formato cuadrado).
- El **color del borde del icón debe coincidir semánticamente** con el color de la card o sección.
- **Los SVGs deben tener `viewBox` definido** para que el `height` funcione correctamente sin distorsión.
- **Fondo transparente** (`fill="none"` en `<svg>`): permite que el icono se integre en cualquier fondo (sidebar de color, fondo blanco, etc.).
- **Sin texto embebido en SVGs de decoración**: El texto debe estar en HTML, no dentro del SVG, para mantener la tipografía de Plus Jakarta Sans uniforme.
