// =================================================================
// CATEGORÍA 4 — DECORATIVOS / BANNER
// =================================================================

import { _section, state } from '../utils/core.js';

/**
 * Franja azul superior + acento verde a la IZQUIERDA
 * Equivale a: \slideStripeTopLeft{title}{content}
 * @param {string} title - Título (blanco, en la barra verde)
 * @param {string} content - Contenido HTML (en zona blanca inferior)
 */
export function slideStripeTopLeft(title, content) {
  return _section('stripe-top-left', `
  ${state.logoNegFn()}
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
export function slideStripeTopRight(title, content) {
  return _section('stripe-top-right', `
  ${state.logoNegFn()}
  <div class="blue-banner"></div>
  <div class="green-accent"></div>
  <div class="slide-title">${title}</div>
  <div class="slide-content">${content}</div>
  `, 'blue', 'right');
}
