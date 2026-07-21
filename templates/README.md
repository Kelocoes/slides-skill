# Biblioteca de Plantillas: `icesibeamer.sty`

Este directorio contiene la hoja de estilos de Beamer oficial de la Universidad Icesi ([icesibeamer.sty](icesibeamer.sty)) y esta guía técnica estructurada para servir como contexto de diseño a cualquier agente autónomo que requiera componer o modificar presentaciones.

---

## 📐 Tipos Generales de Diapositivas

Las diapositivas se clasifican estrictamente en 3 categorías de diseño según su propósito y estructura:

### Categoría 1: Portadas (Title Slides)
Diseñadas para el inicio de la presentación, cambio de módulos mayores o portadas de cierre.
- `\titleSlideA{título}{subtítulo}`: Fondo azul sólido, caja de título blanca, caja de subtítulo amarilla. (Uso: Portada principal oficial).
- `\titleSlideB{título}{subtítulo}{autor/evento/fecha}`: Fondo blanco con acento verde inferior. (Uso: Portadas de ponencias académicas con autoría explícita).
- `\titleSlideC{título}{subtítulo}`: Fondo blanco, pie de página azul con patrón decorativo de franjas. (Uso: Diapositiva institucional formal).
- `\titleSlideD{título}{subtítulo}{texto_caja_amarilla}`: Pantalla dividida asimétrica (azul e izquierdo, morado a la derecha) con caja amarilla cruzada. (Uso: Apertura creativa e interactiva).
- `\titleSlideE{título}{subtítulo}`: Fondo blanco con caja azul de título grande y caja morada pequeña. (Uso: Portada ejecutiva limpia).
- `\titleSlideF{título}{subtítulo}`: Mitad superior azul, mitad inferior blanca con logotipo a color y caja naranja superior. (Uso: Portadas de talleres, guías rápidas o laboratorios).

### Categoría 2: Divisores de Sección / Transición (Section Dividers & Transitions)
Utilizadas para segmentar la agenda, separar temas o introducir subsecciones.
- `\sectionSlideA{título}`: Minimalista. Fondo blanco, logo arriba, bloque azul de `3.08cm` de alto abajo con texto en blanco. (Uso: Transición estándar).
- `\sectionSlideB{título}{ruta_imagen}`: Pantalla dividida con imagen a la derecha. Si la imagen no se encuentra localmente, dibuja un fondo blanco sólido. (Uso: Introducción temática con apoyo fotográfico).
- `\sectionSlideC{título}`: Fondo azul, caja blanca sobre una delgada franja de acento verde. (Uso: Enlace entre módulos mayores).
- `\sectionSlideE{título}`: Minimalista en fondo blanco con logo positivo y título en Azul Icesi.
- `\sectionSlideEBlue{título}` / `\sectionSlideEGreen{título}` / `\sectionSlideEYellow{título}` / `\sectionSlideEOrange{título}`: Fondos de color completo (Azul, Verde, Amarillo, Naranja) para transiciones ágiles.
- `\slideSidebarLeftOrange{título}{contenido}` / `Blue` / `Purple`: Barra lateral izquierda de `12.41cm` de ancho que contiene el logo blanco en negativo. (Uso: Diapositiva de transición de conceptos o datos importantes al lado del tema).

### Categoría 3: Diapositivas de Contenido e Información (Content Slides)
Estructuras optimizadas para desplegar textos, listas, columnas o grids de datos.
- `\slideStripeTopLeft{título}{contenido}`: Banner superior azul y franja de acento verde a la izquierda. Alineada arriba `[t]` con margen seguro de `7.2cm` para evitar solapamientos. (Uso: Diapositiva general con título destacado a la izquierda).
- `\slideStripeTopRight{título}{contenido}`: Hermana de la anterior, con la franja de acento verde alineada a la derecha. (Uso: Diapositiva general con título destacado a la derecha).
- `\slideStandard{título}{contenido}`: Plantilla de contenido blanco básico de Beamer, con logo institucional arriba y título a la izquierda. (Uso: Listas de viñetas o texto extenso).
- `\slideTwoCols{título}{col1}{col2}`: Divide el contenido en dos columnas de ancho `0.48\textwidth`. (Uso: Comparaciones o imágenes con texto descriptivo al lado).
- `\slideThreeCols{título}{col1}{col2}{col3}`: Divide el contenido en tres columnas de ancho `0.31\textwidth`. (Uso: Desglose de tres pasos o características).
- `\slideFourCards{título}{c1}{c2}{c3}{c4}`: Grid horizontal de 4 tarjetas de colores de marca con fondo gris suave en el pie de página. (Uso: Resumen de 4 pilares, conceptos o fases).

---

## 🎯 Contextos de Uso de las 19 Diapositivas de `main.tex`

Cualquier agente autónomo puede tomar como contexto de inicialización y uso la estructura actual del archivo `main.tex` para construir presentaciones coherentes:

1. **Diapositiva 1 (Portada Principal)**: `\titleSlideA` -> Contexto: Inicio de la presentación o curso formal.
2. **Diapositiva 2 (Portada Académica)**: `\titleSlideB` -> Contexto: Introducción donde se requiere mostrar autor, fecha o nombre de facultad.
3. **Diapositiva 3 (Portada Institucional)**: `\titleSlideC` -> Contexto: Presentaciones formales, informes ejecutivos de rectoría o directivos.
4. **Diapositiva 4 (Portada Creativa)**: `\titleSlideD` -> Contexto: Presentaciones de innovación, diseño, talleres dinámicos.
5. **Diapositiva 5 (Portada Limpia)**: `\titleSlideE` -> Contexto: Presentaciones ejecutivas rápidas, minimalistas.
6. **Diapositiva 6 (Portada Taller/Lab)**: `\titleSlideF` -> Contexto: Separador de capítulos prácticos, laboratorios, talleres de código.
7. **Diapositiva 7 (División de Tema Principal)**: `\sectionSlideA` -> Contexto: Separación de secciones teóricas estándar.
8. **Diapositiva 8 (División con Apoyo Visual)**: `\sectionSlideB` -> Contexto: Introducción a temas prácticos que se benefician de una foto alusiva.
9. **Diapositiva 9 (División de Enlace)**: `\sectionSlideC` -> Contexto: Transiciones entre capítulos grandes de un curso.
10. **Diapositiva 10 (División Minimal)**: `\sectionSlideE` -> Contexto: Transiciones rápidas y discretas.
11. **Diapositiva 11 a 14 (Transiciones de Color Continuas)**: `\sectionSlideEBlue` / `Green` / `Yellow` / `Orange` -> Contexto: Secuencia rápida de hitos o cambios de temas cortos dentro de un mismo módulo.
12. **Diapositiva 15 a 17 (Transición de Barra Lateral Izquierda)**: `\slideSidebarLeftOrange` / `Blue` / `Purple` -> Contexto: Diapositivas de énfasis conceptual. Ideales para introducir términos nuevos o frases célebres donde la barra lateral izquierda segmenta la vista.
13. **Diapositiva 18 (Contenido General Izquierdo)**: `\slideStripeTopLeft` -> Contexto: Exposición de un concepto detallado, con el título alineado a la izquierda.
14. **Diapositiva 19 (Contenido General Derecho)**: `\slideStripeTopRight` -> Contexto: Diapositiva complementaria a la anterior, balanceando visualmente el peso al alinear el título a la derecha.
