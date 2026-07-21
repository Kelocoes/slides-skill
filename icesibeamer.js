/* Compilado automáticamente por src/build.js a partir de archivos modulares */
const icesi = (() => {
  'use strict';

  // =================================================================
  // ARCHIVO: core.js
  // =================================================================
  // ─── Recursos compartidos ───────────────────────────────────────
  const LOGO_NEG = '../../resources/logos/ICESI_logo_prin_descriptor_WHITE.svg';
  const LOGO_POS = '../../resources/logos/ICESI_logo_prin_descriptor_RGB_POSITIVO_0924.svg';

  // Contador auto-incrementado de slides (para numeración)
  let _n = 0;

  // ─── Helpers privados ──────────────────────────────────────────

  /**
   * Genera el tag de logo negativo (blanco, para fondos oscuros)
   */
  function _logoNeg() {
    return `<img class="logo-negative" src="${LOGO_NEG}" alt="Universidad Icesi">`;
  }

  /**
   * Genera el tag de logo positivo (color, para fondos blancos/claros)
   */
  function _logoPos() {
    return `<img class="logo-positive" src="${LOGO_POS}" alt="Universidad Icesi">`;
  }

  // Funciones de logo sobreescribibles por setBasePath
  let _logoNegFn = _logoNeg;
  let _logoPosF  = _logoPos;

  /**
   * Genera el número de página del slide
   * @param {'white'|'blue'|'dark'} color - Color del número
   * @param {'right'|'left'} side - Posición horizontal
   * @param {number} num - Número específico (usa _n si no se especifica)
   */
  function _pageNum(color, side = 'right', num) {
    const n = num !== undefined ? num : _n;
    const colorMap = {
      white: '#FFFFFF',
      blue: '#5454E9',
      dark: '#393939',
    };
    const c = colorMap[color] || color;
    return `<span class="icesi-slide-number ${side}" style="color:${c}">${n}</span>`;
  }

  /**
   * Envuelve el contenido en un <section> de Reveal.js con el tipo de slide dado
   * @param {string} className - Clase(s) del slide
   * @param {string} content - HTML interno del slide
   * @param {string} numColor - Color del número de página
   * @param {string} numSide - Posición del número de página
   */
  function _section(className, content, numColor = 'blue', numSide = 'right') {
    _n++;
    return `<section data-slide-index="${_n}">
    <div class="slide ${className}">
  ${content}
  ${_pageNum(numColor, numSide, _n)}
    </div>
  </section>`;
  }


  // =================================================================
  // ARCHIVO: layouts/title-slides.js
  // =================================================================
  // =================================================================
  // CATEGORÍA 1 — PORTADAS (TITLE SLIDES)
  // =================================================================

  /**
   * Portada A: Fondo azul sólido, caja blanca (título), caja amarilla (subtítulo)
   * Equivale a: \titleSlideA{title}{subtitle}
   * @param {string} title - Título principal (puede usar <br> para saltos de línea)
   * @param {string} subtitle - Subtítulo
   */
  function titleSlideA(title, subtitle) {
    return _section('title-a', `
    ${_logoNegFn()}
    <div class="title-box">
      <h1>${title}</h1>
    </div>
    <div class="subtitle-box">
      <p>${subtitle}</p>
    </div>
    `, 'white', 'right');
  }

  /**
   * Portada B: Fondo blanco, barra verde inferior, texto alineado a la derecha
   * Equivale a: \titleSlideB{title}{subtitle}{footer}
   * @param {string} title - Título principal (color verde)
   * @param {string} subtitle - Subtítulo (color oscuro)
   * @param {string} footer - Texto en la barra verde (autor/fecha/evento)
   */
  function titleSlideB(title, subtitle, footer) {
    return _section('title-b', `
    ${_logoPosF()}
    <div class="green-bar"></div>
    <div class="slide-title">${title}</div>
    <div class="slide-subtitle">${subtitle}</div>
    <div class="slide-footer">${footer}</div>
    `, 'blue', 'left');
  }

  /**
   * Portada C: Fondo blanco, bloque azul inferior, patrón de rayas institucional
   * Equivale a: \titleSlideC{title}{subtitle}
   * @param {string} title - Título (color azul, sobre fondo blanco)
   * @param {string} subtitle - Subtítulo (color blanco, sobre bloque azul)
   */
  function titleSlideC(title, subtitle) {
    return _section('title-c', `
    ${_logoPosF()}
    <div class="blue-block"></div>
    <div class="stripe-pattern"></div>
    <div class="slide-title">${title}</div>
    <div class="slide-subtitle">${subtitle}</div>
    `, 'white', 'right');
  }

  /**
   * Portada D: Pantalla dividida azul/morado, caja amarilla con badge
   * Equivale a: \titleSlideD{title}{subtitle}{badge}
   * @param {string} title - Título (blanco, sobre fondo azul izquierdo)
   * @param {string} subtitle - Subtítulo (blanco)
   * @param {string} badge - Texto destacado en la caja amarilla
   */
  function titleSlideD(title, subtitle, badge) {
    return _section('title-d', `
    <div class="blue-half"></div>
    <div class="purple-half"></div>
    <div class="yellow-accent"></div>
    ${_logoNegFn()}
    <div class="slide-title">${title}</div>
    <div class="slide-subtitle">${subtitle}</div>
    <div class="slide-badge">${badge}</div>
    `, 'white', 'right');
  }

  /**
   * Portada E: Fondo blanco, caja azul (título), caja morada (subtítulo)
   * Equivale a: \titleSlideE{title}{subtitle}
   * @param {string} title - Título (blanco, sobre caja azul)
   * @param {string} subtitle - Subtítulo (blanco, sobre caja morada)
   */
  function titleSlideE(title, subtitle) {
    return _section('title-e', `
    ${_logoPosF()}
    <div class="blue-box"></div>
    <div class="purple-box"></div>
    <div class="slide-title">${title}</div>
    <div class="slide-subtitle">${subtitle}</div>
    `, 'blue', 'right');
  }

  /**
   * Portada F: Bloque azul superior (top half), acento naranja, logo abajo
   * Equivale a: \titleSlideF{title}{subtitle}
   * @param {string} title - Título (blanco, dentro del bloque azul)
   * @param {string} subtitle - Subtítulo (blanco, dentro del bloque azul)
   */
  function titleSlideF(title, subtitle) {
    return _section('title-f', `
    <div class="blue-top"></div>
    <div class="orange-accent"></div>
    <div class="slide-title">${title}</div>
    <div class="slide-subtitle">${subtitle}</div>
    ${_logoPosF()}
    `, 'blue', 'right');
  }


  // =================================================================
  // ARCHIVO: layouts/section-slides.js
  // =================================================================
  // =================================================================
  // CATEGORÍA 2 — DIVISORES DE SECCIÓN
  // =================================================================

  /**
   * Sección A: Minimal, logo top-left, barra azul inferior con título
   * Equivale a: \sectionSlideA{title}
   * @param {string} title - Título de sección (blanco, sobre barra azul)
   */
  function sectionSlideA(title) {
    return _section('section-a', `
    ${_logoPosF()}
    <div class="blue-bar"></div>
    <div class="section-title">${title}</div>
    `, 'white', 'right');
  }

  /**
   * Sección B: Imagen en la mitad derecha, barra naranja con título
   * Equivale a: \sectionSlideB{title}{imagePath}
   * @param {string} title - Título de sección (blanco, sobre barra naranja)
   * @param {string} imagePath - Ruta de imagen para el panel derecho ('' para omitir)
   */
  function sectionSlideB(title, imagePath = '') {
    const img = imagePath
      ? `<img class="right-image" src="${imagePath}" alt="${title}">`
      : '';
    return _section('section-b', `
    ${_logoPosF()}
    ${img}
    <div class="orange-bar"></div>
    <div class="section-title">${title}</div>
    `, 'white', 'right');
  }

  /**
   * Sección C: Fondo azul sólido, caja blanca centrada a la derecha, acento verde
   * Equivale a: \sectionSlideC{title}
   * @param {string} title - Título de sección (azul, dentro de caja blanca)
   */
  function sectionSlideC(title) {
    return _section('section-c', `
    ${_logoNegFn()}
    <div class="green-accent"></div>
    <div class="white-box"></div>
    <div class="section-title">${title}</div>
    `, 'white', 'right');
  }

  /**
   * Sección E (blanco): Logo positivo, título en azul sobre fondo blanco
   * Equivale a: \sectionSlideE{title}
   * @param {string} title - Título de sección
   */
  function sectionSlideE(title) {
    return _section('section-e', `
    ${_logoPosF()}
    <div class="section-title">${title}</div>
    `, 'blue', 'right');
  }

  /**
   * Sección E (fondo azul): Logo negativo, título blanco
   * Equivale a: \sectionSlideEBlue{title}
   * @param {string} title - Título de sección
   */
  function sectionSlideEBlue(title) {
    return _section('section-e bg-blue', `
    ${_logoNegFn()}
    <div class="section-title">${title}</div>
    `, 'white', 'right');
  }

  /**
   * Sección E (fondo verde): Logo negativo, título blanco
   * Equivale a: \sectionSlideEGreen{title}
   * @param {string} title - Título de sección
   */
  function sectionSlideEGreen(title) {
    return _section('section-e bg-green', `
    ${_logoNegFn()}
    <div class="section-title">${title}</div>
    `, 'white', 'right');
  }

  /**
   * Sección E (fondo amarillo): Logo positivo, título oscuro
   * Equivale a: \sectionSlideEYellow{title}
   * @param {string} title - Título de sección
   */
  function sectionSlideEYellow(title) {
    return _section('section-e bg-yellow', `
    ${_logoPosF()}
    <div class="section-title">${title}</div>
    `, 'dark', 'right');
  }

  /**
   * Sección E (fondo naranja): Logo negativo, título blanco
   * Equivale a: \sectionSlideEOrange{title}
   * @param {string} title - Título de sección
   */
  function sectionSlideEOrange(title) {
    return _section('section-e bg-orange', `
    ${_logoNegFn()}
    <div class="section-title">${title}</div>
    `, 'white', 'right');
  }


  // =================================================================
  // ARCHIVO: layouts/sidebar-slides.js
  // =================================================================
  // =================================================================
  // CATEGORÍA 3 — SIDEBAR IZQUIERDA (3 variantes de color)
  // =================================================================

  /**
   * Helper interno para slides con sidebar izquierda
   * @param {'orange'|'blue'|'purple'} color - Color del sidebar
   * @param {string} title - Título del slide (azul, en zona blanca derecha)
   * @param {string} content - Contenido HTML (en zona blanca derecha)
   * @param {string} imagePath - Ruta de imagen/diagrama para el sidebar ('' para omitir)
   */
  function _sidebarLeft(color, title, content, imagePath = '') {
    const img = imagePath
      ? `<img class="sidebar-image" src="${imagePath}" alt="Diagrama">`
      : '';
    return _section(`sidebar-left ${color}`, `
    <div class="sidebar">
      ${_logoNegFn()}
      ${img}
    </div>
    <div class="sidebar-title"><h2>${title}</h2></div>
    <div class="sidebar-content">${content}</div>
    `, 'blue', 'right');
  }

  /**
   * Sidebar naranja: Panel izquierdo naranja + contenido en zona blanca derecha
   * Equivale a: \slideSidebarLeftOrange{title}{content}{imagePath}
   */
  function slideSidebarLeftOrange(title, content, imagePath = '') {
    return _sidebarLeft('orange', title, content, imagePath);
  }

  /**
   * Sidebar azul: Panel izquierdo azul + contenido en zona blanca derecha
   * Equivale a: \slideSidebarLeftBlue{title}{content}{imagePath}
   */
  function slideSidebarLeftBlue(title, content, imagePath = '') {
    return _sidebarLeft('blue', title, content, imagePath);
  }

  /**
   * Sidebar morado: Panel izquierdo morado + contenido en zona blanca derecha
   * Equivale a: \slideSidebarLeftPurple{title}{content}{imagePath}
   */
  function slideSidebarLeftPurple(title, content, imagePath = '') {
    return _sidebarLeft('purple', title, content, imagePath);
  }


  // =================================================================
  // ARCHIVO: layouts/stripe-slides.js
  // =================================================================
  // =================================================================
  // CATEGORÍA 4 — DECORATIVOS / BANNER
  // =================================================================

  /**
   * Franja azul superior + acento verde a la IZQUIERDA
   * Equivale a: \slideStripeTopLeft{title}{content}
   * @param {string} title - Título (blanco, en la barra verde)
   * @param {string} content - Contenido HTML (en zona blanca inferior)
   */
  function slideStripeTopLeft(title, content) {
    return _section('stripe-top-left', `
    ${_logoNegFn()}
    <div class="blue-banner"></div>
    <div class="green-accent"></div>
    <div class="slide-title">${title}</div>
    <div class="slide-content">${content}</div>
    `, 'blue', 'right');
  }

  /**
   * Franja azul superior + acento verde a la DERECHA
   * Equivale a: \slideStripeTopRight{title}{content}
   * @param {string} title - Título (blanco, en la barra verde derecha)
   * @param {string} content - Contenido HTML (en zona blanca inferior)
   */
  function slideStripeTopRight(title, content) {
    return _section('stripe-top-right', `
    ${_logoNegFn()}
    <div class="blue-banner"></div>
    <div class="green-accent"></div>
    <div class="slide-title">${title}</div>
    <div class="slide-content">${content}</div>
    `, 'blue', 'right');
  }


  // =================================================================
  // ARCHIVO: layouts/content-slides.js
  // =================================================================
  // =================================================================
  // CATEGORÍA 5 — SLIDES DE CONTENIDO
  // =================================================================

  /**
   * Slide estándar: Logo + título azul en header + área de contenido libre
   * Equivale a: \slideStandard{title}{content}
   * @param {string} title - Título del slide
   * @param {string} content - Contenido HTML (listas, párrafos, imágenes, Mermaid, etc.)
   */
  function slideStandard(title, content) {
    return _section('standard', `
    ${_logoPosF()}
    <div class="slide-header"><h2>${title}</h2></div>
    <div class="slide-content">${content}</div>
    `, 'blue', 'right');
  }

  /**
   * Slide de dos columnas iguales
   * Equivale a: \slideTwoCols{title}{col1}{col2}
   * @param {string} title - Título del slide
   * @param {string} col1 - Contenido HTML de la columna izquierda
   * @param {string} col2 - Contenido HTML de la columna derecha
   */
  function slideTwoCols(title, col1, col2) {
    return _section('two-cols', `
    ${_logoPosF()}
    <div class="slide-header"><h2>${title}</h2></div>
    <div class="cols-container">
      <div class="col">${col1}</div>
      <div class="col">${col2}</div>
    </div>
    `, 'blue', 'right');
  }

  /**
   * Slide de tres columnas iguales
   * Equivale a: \slideThreeCols{title}{col1}{col2}{col3}
   * @param {string} title - Título del slide
   * @param {string} col1 - Contenido HTML de la columna 1
   * @param {string} col2 - Contenido HTML de la columna 2
   * @param {string} col3 - Contenido HTML de la columna 3
   */
  function slideThreeCols(title, col1, col2, col3) {
    return _section('three-cols', `
    ${_logoPosF()}
    <div class="slide-header"><h2>${title}</h2></div>
    <div class="cols-container">
      <div class="col">${col1}</div>
      <div class="col">${col2}</div>
      <div class="col">${col3}</div>
    </div>
    `, 'blue', 'right');
  }

  /**
   * Slide de cuatro tarjetas coloreadas en grid
   * Equivale a: \slideFourCards{title}{c1title}{c1content}...
   * @param {string} title - Título del slide
   * @param {string} c1title - Título de la tarjeta 1 (azul)
   * @param {string} c1 - Contenido de la tarjeta 1
   * @param {string} c2title - Título de la tarjeta 2 (morado)
   * @param {string} c2 - Contenido de la tarjeta 2
   * @param {string} c3title - Título de la tarjeta 3 (naranja)
   * @param {string} c3 - Contenido de la tarjeta 3
   * @param {string} c4title - Título de la tarjeta 4 (verde)
   * @param {string} c4 - Contenido de la tarjeta 4
   */
  function slideFourCards(title, c1title, c1, c2title, c2, c3title, c3, c4title, c4) {
    function _card(colorClass, header, body) {
      return `<div class="card ${colorClass}">
        <div class="card-header">${header}</div>
        <div class="card-body">${body}</div>
      </div>`;
    }
    return _section('four-cards', `
    ${_logoPosF()}
    <div class="slide-header"><h2>${title}</h2></div>
    <div class="cards-bg"></div>
    <div class="cards-grid">
      ${_card('blue',   c1title, c1)}
      ${_card('purple', c2title, c2)}
      ${_card('orange', c3title, c3)}
      ${_card('green',  c4title, c4)}
    </div>
    `, 'blue', 'right');
  }


  // =================================================================
  // ARCHIVO: helpers.js
  // =================================================================
  // =================================================================
  // HELPERS DE CONTENIDO
  // =================================================================

  /**
   * Genera un bloque de diagrama Mermaid inline
   * Para usar dentro del contenido de cualquier slide
   * @param {string} code - Código Mermaid (sin los delimitadores ```)
   * @returns {string} HTML string con el bloque mermaid
   *
   * @example
   * icesi.slideStandard('Arquitectura', icesi.mermaid(`
   *   graph TD
   *     A[Cliente] --> B{API}
   *     B --> C[BD]
   * `))
   */
  function mermaid(code) {
    return `<div class="mermaid">${code}</div>`;
  }

  /**
   * Genera un bloque de contenido Markdown (procesado por Reveal.js)
   * @param {string} md - Contenido en formato Markdown
   * @returns {string} HTML string con data-markdown
   *
   * @example
   * icesi.slideStandard('Puntos clave', icesi.markdown(`
   *   - Punto 1 con **negrita**
   *   - Punto 2
   * `))
   */
  function markdown(md) {
    return `<div data-markdown>${md}</div>`;
  }

  /**
   * Genera un bloque de código con resaltado de sintaxis
   * @param {string} code - Código fuente
   * @param {string} lang - Lenguaje (js, python, bash, html, etc.)
   * @returns {string} HTML string con bloque <pre><code>
   */
  function codeBlock(code, lang = '') {
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return `<pre><code class="language-${lang}">${escaped}</code></pre>`;
  }


  // =================================================================
  // ARCHIVO: init.js
  // =================================================================
  // =================================================================
  // INICIALIZACIÓN DE REVEAL.JS Y MERMAID.JS
  // =================================================================

  /**
   * Inicializa Reveal.js con la configuración institucional de Icesi
   * Debe llamarse DESPUÉS de poblar el DOM con los slides
   * @param {object} options - Opciones adicionales de Reveal.js (override)
   */
  function init(options = {}) {
    // Inicializar Reveal.js
    if (typeof Reveal !== 'undefined') {
      Reveal.initialize({
        width: 1280,
        height: 720,
        margin: 0,
        minScale: 0.2,
        maxScale: 2.0,
        controls: true,
        controlsTutorial: false,
        progress: true,
        slideNumber: false,
        hash: true,
        keyboard: true,
        overview: true,
        center: true,             // center:true es necesario con position:absolute dentro de sections
        touch: true,
        loop: false,
        fragments: true,
        embedded: false,
        help: true,
        transition: 'slide',
        transitionSpeed: 'default',
        backgroundTransition: 'fade',
        pdfSeparateFragments: false,
        plugins: [
          ...(typeof RevealMarkdown !== 'undefined'  ? [RevealMarkdown]  : []),
          ...(typeof RevealHighlight !== 'undefined' ? [RevealHighlight] : []),
          ...(typeof RevealNotes !== 'undefined'     ? [RevealNotes]     : []),
        ],
        ...options
      });
    } else {
      console.warn('[icesibeamer] Reveal.js no está cargado. Llama a icesi.init() después de cargar Reveal.js.');
    }

    // Inicializar Mermaid con tema Icesi (Mermaid v11 API)
    if (typeof window.mermaid !== 'undefined') {
      try {
        window.mermaid.initialize({
          startOnLoad: true,
          theme: 'base',
          themeVariables: {
            primaryColor:     '#5454E9',
            secondaryColor:   '#865CF0',
            tertiaryColor:    '#4CB979',
            primaryTextColor: '#FFFFFF',
            secondaryTextColor: '#393939',
            lineColor:        '#393939',
            nodeBorder:       '#5454E9',
            clusterBkg:       '#f0f0ff',
            titleColor:       '#FFFFFF',
            edgeLabelBackground: '#f8f8ff',
          },
          flowchart: {
            curve: 'basis',
            padding: 20,
          },
          sequence: {
            diagramMarginX: 50,
            diagramMarginY: 10,
            actorMargin: 50,
          },
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        });
      } catch(e) {
        console.warn('[icesibeamer] Mermaid initialize error:', e);
      }
    } else {
      console.warn('[icesibeamer] Mermaid.js no está cargado.');
    }
  }

  /**
   * Resetea el contador de slides (útil para testing o regeneración)
   */
  function _reset() {
    _n = 0;
  }

  /**
   * Retorna el número actual de slides generados
   */
  function _count() {
    return _n;
  }

  /**
   * Configura rutas de logos personalizadas (si la presentación está en un subdirectorio)
   * @param {string} basePath - Ruta relativa a resources/ desde el HTML de la presentación
   */
  function setBasePath(basePath) {
    // Actualiza las rutas internas de logos
    const neg = basePath + 'resources/logos/ICESI_logo_prin_descriptor_WHITE.svg';
    const pos = basePath + 'resources/logos/ICESI_logo_prin_descriptor_RGB_POSITIVO_0924.svg';
    // Reemplaza las funciones de logo con las rutas actualizadas
    _logoNegFn = () => `<img class="logo-negative" src="${neg}" alt="Universidad Icesi">`;
    _logoPosF  = () => `<img class="logo-positive" src="${pos}" alt="Universidad Icesi">`;
  }

  // ─── API pública ───────────────────────────────────────────────
  return {
    // Categoría 1 — Portadas
    titleSlideA,
    titleSlideB,
    titleSlideC,
    titleSlideD,
    titleSlideE,
    titleSlideF,

    // Categoría 2 — Divisores de sección
    sectionSlideA,
    sectionSlideB,
    sectionSlideC,
    sectionSlideE,
    sectionSlideEBlue,
    sectionSlideEGreen,
    sectionSlideEYellow,
    sectionSlideEOrange,

    // Categoría 3 — Sidebars
    slideSidebarLeftOrange,
    slideSidebarLeftBlue,
    slideSidebarLeftPurple,

    // Categoría 4 — Decorativos
    slideStripeTopLeft,
    slideStripeTopRight,

    // Categoría 5 — Contenido
    slideStandard,
    slideTwoCols,
    slideThreeCols,
    slideFourCards,

    // Helpers de contenido
    mermaid,
    markdown,
    codeBlock,

    // Inicialización
    init,
    setBasePath,

    // Utilidades internas
    _reset,
    _count,
  };

})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = icesi;
}
