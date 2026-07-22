// =================================================================
// CATEGORÍA 3 — SIDEBAR IZQUIERDA (3 variantes de color)
// =================================================================

import { _section, state } from '../utils/core.js';

/**
 * Helper interno para slides con sidebar izquierda.
 *
 * @param {'orange'|'blue'|'purple'} color - Color del sidebar
 * @param {string} title - Título del slide (azul, en zona blanca derecha)
 * @param {string} content - Contenido HTML (en zona blanca derecha)
 * @param {string|object} sidebarVisual - Visual para el panel lateral.
 *   Puede ser:
 *   - '' o undefined → panel vacío (solo logo)
 *   - string con ruta de imagen → <img class="sidebar-image">
 *   - { type: 'graphic', html: '<svg>...</svg>' } → <div class="sidebar-graphic"> envuelto
 *   - { type: 'mermaid', code: 'flowchart...' } → diagrama Mermaid con fondo de contraste
 *   - { type: 'icons', items: [{icon, label}] } → lista de iconos verticalmente distribuida
 */
function _sidebarLeft(color, title, content, sidebarVisual = '') {
  let sidebarInner = '';

  if (!sidebarVisual) {
    // Empty panel: just the logo
    sidebarInner = '';
  } else if (typeof sidebarVisual === 'string') {
    if (sidebarVisual.trim().startsWith('<')) {
      // It's raw HTML (e.g. from codeBlock)
      sidebarInner = `<div class="sidebar-graphic">${sidebarVisual}</div>`;
    } else {
      // Legacy: image path
      sidebarInner = `<img class="sidebar-image" src="${sidebarVisual}" alt="Diagrama">`;
    }
  } else if (sidebarVisual.type === 'graphic') {
    // SVG / vector illustration inside a safe container
    sidebarInner = `<div class="sidebar-graphic">${sidebarVisual.html}</div>`;
  } else if (sidebarVisual.type === 'mermaid') {
    // Mermaid diagram — always rendered inside a light-background container for contrast
    sidebarInner = `<div class="mermaid">${sidebarVisual.code}</div>`;
  } else if (sidebarVisual.type === 'icons') {
    // List of icons distributed evenly inside the sidebar panel
    const iconItems = (sidebarVisual.items || []).map(item => `
      <div class="icon-item">
        <div class="icon-mark">${item.icon}</div>
        <div class="icon-label">${item.label}</div>
      </div>`).join('');
    sidebarInner = `<div class="sidebar-icons">${iconItems}</div>`;
  }

  return _section(`sidebar-left ${color}`, `
  <div class="sidebar">
    ${state.logoNegFn()}
    ${sidebarInner}
  </div>
  <div class="sidebar-title"><h2>${title}</h2></div>
  <div class="sidebar-content">${content}</div>
  `, 'blue', 'right');
}

/**
 * Sidebar naranja: Panel izquierdo naranja + contenido en zona blanca derecha
 * Equivale a: \slideSidebarLeftOrange{title}{content}{sidebarVisual}
 *
 * sidebarVisual puede ser:
 *   - '' → panel vacío
 *   - 'path/to/image.png' → imagen clásica
 *   - { type: 'graphic', html: '<svg>...</svg>' } → gráfico vectorial
 *   - { type: 'mermaid', code: '...' } → diagrama Mermaid (contraste automático)
 *   - { type: 'icons', items: [{icon:'🔧', label:'Deploy'},...] } → lista de iconos
 */
export function slideSidebarLeftOrange(title, content, sidebarVisual = '') {
  return _sidebarLeft('orange', title, content, sidebarVisual);
}

/**
 * Sidebar azul: Panel izquierdo azul + contenido en zona blanca derecha
 * Equivale a: \slideSidebarLeftBlue{title}{content}{sidebarVisual}
 */
export function slideSidebarLeftBlue(title, content, sidebarVisual = '') {
  return _sidebarLeft('blue', title, content, sidebarVisual);
}

/**
 * Sidebar morado: Panel izquierdo morado + contenido en zona blanca derecha
 * Equivale a: \slideSidebarLeftPurple{title}{content}{sidebarVisual}
 */
export function slideSidebarLeftPurple(title, content, sidebarVisual = '') {
  return _sidebarLeft('purple', title, content, sidebarVisual);
}
