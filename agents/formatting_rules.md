# Guía de Estilo y Reglas de Formateo de LaTeX (Beamer) - Universidad Icesi

Este archivo establece las reglas visuales y de posicionamiento estrictas para compilar la presentación institucional de la Universidad Icesi en Beamer. Debe ser respetado y consultado por todos los subagentes.

---

## 📐 1. Geometría de Canvas y Widescreen
Toda presentación debe configurarse estrictamente con un formato de pantalla ancha 16:9 con las siguientes dimensiones físicas de XeTeX:
- **Ancho (`paperwidth`):** `33.86cm`
- **Alto (`paperheight`):** `19.05cm`
- **Mapeo de MediaBox:**
  ```latex
  \geometry{paperwidth=33.86cm, paperheight=19.05cm}
  \paperwidth=33.86cm
  \paperheight=19.05cm
  \pdfpagewidth=\paperwidth
  \pdfpageheight=\paperheight
  ```

---

## 🎨 2. Paleta Oficial de Colores (Colores de Marca)
Usar únicamente los nombres de colores oficiales definidos a continuación:
- **Azul Icesi (Principal):** `\definecolor{icesiblue}{HTML}{5454E9}`
- **Amarillo Icesi:** `\definecolor{icesiyellow}{HTML}{E4EB60}`
- **Verde Icesi:** `\definecolor{icesigreen}{HTML}{4CB979}`
- **Morado Icesi:** `\definecolor{icesipurple}{HTML}{865CF0}`
- **Naranja Icesi:** `\definecolor{icesiorange}{HTML}{E9683B}`
- **Gris Oscuro (Texto):** `\definecolor{icesidark}{HTML}{393939}`
- **Gris Claro 1:** `\definecolor{icesigray1}{HTML}{88898C}`
- **Gris Claro 2:** `\definecolor{icesigray2}{HTML}{CECFD4}`

---

## 🏢 3. Posicionamiento e Integración del Logotipo
- **Tamaño del Logo (+10% ajustado):** Ancho fijo de **`4.95cm`**.
- **Coordenadas de Esquina Superior Izquierda:**
  ```latex
  Left = 1.90cm, Top = 1.60cm
  ```
  En TikZ: `[xshift=1.90cm, yshift=-1.60cm]current page.north west`
- **Transparencia y Bounding Box:** Siempre incluir usando `inkscapelatex=false` para evitar distorsión de bounding box.
- **Exclusión de Fondos:** No utilizar logos con cajas o fondos de color integrados (usar únicamente SVG transparentes).
- **Inversión de Color:** En fondos oscuros (azul `icesiblue`), utilizar el archivo `BYN_RGB_POSITIVO` que es detectado e invertido a blanco automáticamente por la biblioteca.

---

## 🔤 4. Tipografía e Interlineado
- **Tipografía Institucional:** *Plus Jakarta Sans* cargada localmente desde `resources/fonts/`.
- **Tamaños de Fuente Relativos:**
  - **Título Principal de Portada:** `34pt` / `40pt` interlineado.
  - **Subtítulo:** `18pt` / `22pt`.
  - **Título de Diapositiva Estándar:** `20pt` / `24pt`.
  - **Cuerpo de Diapositiva Estándar:** `14pt` / `18pt`.

---

## 🚫 5. Zona de Exclusión y Reglas de Sobreposición
Para evitar que el logotipo o los elementos geométricos se solapen con los textos del usuario:
1. **Margen de Título de Diapositiva:** Los títulos de diapositivas estándar deben empezar a partir de `Top = 4.00cm`.
2. **Margen de Cuerpo de Diapositiva:** El contenido (bloques, columnas, texto de viñetas) debe empezar a partir de `Top = 6.50cm` mínimo.
3. **Márgenes Laterales:** Todos los elementos visibles principales deben alinearse con un margen izquierdo de al menos `1.36cm` y un margen derecho de `1.36cm`.
