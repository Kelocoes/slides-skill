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
