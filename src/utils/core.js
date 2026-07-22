// ─── Recursos y Estado Compartido ─────────────────────────────────
const LOGO_NEG = '../../resources/logos/ICESI_logo_prin_descriptor_WHITE.svg';
const LOGO_POS = '../../resources/logos/ICESI_logo_prin_descriptor_RGB_POSITIVO_0924.svg';

export const state = {
  n: 0,
  logoNegFn: () => `<img class="logo-negative" src="${LOGO_NEG}" alt="Universidad Icesi">`,
  logoPosFn: () => `<img class="logo-positive" src="${LOGO_POS}" alt="Universidad Icesi">`
};

export function setN(val) {
  state.n = val;
}

export function getN() {
  return state.n;
}

export function setLogos(neg, pos) {
  state.logoNegFn = () => `<img class="logo-negative" src="${neg}" alt="Universidad Icesi">`;
  state.logoPosFn = () => `<img class="logo-positive" src="${pos}" alt="Universidad Icesi">`;
}

/**
 * Genera el número de página del slide
 * @param {'white'|'blue'|'dark'} color - Color del número
 * @param {'right'|'left'} side - Posición horizontal
 * @param {number} num - Número específico (usa state.n si no se especifica)
 */
export function _pageNum(color, side = 'right', num) {
  const n = num !== undefined ? num : state.n;
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
export function _section(className, content, numColor = 'blue', numSide = 'right') {
  state.n++;
  return `<section data-slide-index="${state.n}">
  <div class="slide ${className}">
${content}
${_pageNum(numColor, numSide, state.n)}
  </div>
</section>`;
}
