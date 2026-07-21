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
