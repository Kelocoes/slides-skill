# Skill: `generate-slides` (Biblioteca de Layouts y Generación de Diapositivas)

Esta skill define la biblioteca de plantillas (layouts) de Beamer para la Universidad Icesi y proporciona una guía paso a paso para que cualquier agente autónomo pueda componer diapositivas dinámicamente según la necesidad del usuario.

---

## 📂 Estructura de la Biblioteca de Plantillas

Las plantillas de diseño se encuentran consolidadas en una estructura simplificada bajo el directorio [templates/icesibeamer/](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/templates/icesibeamer/):

```
templates/icesibeamer/
├── icesibeamer.sty   # Archivo de estilos de Beamer (paquete LaTeX)
└── README.md         # Documentación de referencia consolidada de las macros y contextos de uso
```

El archivo [templates/icesibeamer/README.md](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/templates/icesibeamer/README.md) sirve como la fuente única de verdad para conocer los nombres de las macros, sus parámetros y los contextos ideales de uso.

---

## 📐 Reglas de Composición y Posicionamiento Seguro

Para evitar problemas de solapamiento y conservar la integridad visual:
1. **Margen Superior de Contenido (`[plain, t]`)**: En layouts de banner (como `slideStripeTopLeft`), se utiliza alineación superior `t` y un espaciador vertical `\rule{0pt}{7.2cm}` para forzar que el contenido inicie exactamente abajo del área de encabezado y del bloque verde de acento.
2. **Uso Exclusivo de Macros**: Bajo ninguna circunstancia se debe escribir código TikZ ad-hoc en [main.tex](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/main.tex). Si un diseño no existe, se debe extender [icesibeamer.sty](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/templates/icesibeamer/icesibeamer.sty).

---

## 🚀 Proceso de Compilación y Visualización

Al generar o modificar diapositivas en [main.tex](file:///C:/Users/GlobE/Desktop/Docencia%20Icesi/skill-slides/main.tex):
1. **Compilar 3 Veces**: Ejecutar XeLaTeX tres veces consecutivas para consolidar la tabla de coordenadas TikZ en el archivo `.aux` ubicado en la carpeta de compilación:
   ```bash
   xelatex -interaction=nonstopmode -output-directory=build main.tex
   ```
2. **Generar PNG para Revisión**: Convertir las páginas a imágenes PNG de alta resolución (150 DPI) para comparar visualmente:
   ```bash
   pdftoppm -png -r 150 build/main.pdf build/page
   ```
