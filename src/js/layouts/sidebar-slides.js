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
