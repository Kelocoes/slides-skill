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
