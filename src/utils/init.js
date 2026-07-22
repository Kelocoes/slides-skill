import { setN, getN, setLogos } from './core.js';

/**
 * Inicializa Reveal.js con la configuración institucional de Icesi
 * Debe llamarse DESPUÉS de poblar el DOM con los slides
 * @param {object} options - Opciones adicionales de Reveal.js (override)
 */
export function init(options = {}) {
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
        startOnLoad: false,
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
      window.mermaid.run({ querySelector: '.mermaid' });
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
export function _reset() {
  setN(0);
}

/**
 * Retorna el número actual de slides generados
 */
export function _count() {
  return getN();
}

/**
 * Configura rutas de logos personalizadas (si la presentación está en un subdirectorio)
 * @param {string} basePath - Ruta relativa a resources/ desde el HTML de la presentación
 */
export function setBasePath(basePath) {
  const neg = basePath + 'resources/logos/ICESI_logo_prin_descriptor_WHITE.svg';
  const pos = basePath + 'resources/logos/ICESI_logo_prin_descriptor_RGB_POSITIVO_0924.svg';
  setLogos(neg, pos);
}
