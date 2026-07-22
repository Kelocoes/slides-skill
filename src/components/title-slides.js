// =================================================================
// CATEGORÍA 1 — PORTADAS (TITLE SLIDES)
// =================================================================

import { _section, state } from '../utils/core.js';

/**
 * Portada A: Fondo azul sólido, caja blanca (título), caja amarilla (subtítulo)
 * Equivale a: \titleSlideA{title}{subtitle}
 * @param {string} title - Título principal (puede usar <br> para saltos de línea)
 * @param {string} subtitle - Subtítulo
 */
export function titleSlideA(title, subtitle) {
  return _section('title-a', `
  ${state.logoNegFn()}
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
export function titleSlideB(title, subtitle, footer) {
  return _section('title-b', `
  ${state.logoPosFn()}
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
export function titleSlideC(title, subtitle) {
  return _section('title-c', `
  ${state.logoPosFn()}
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
export function titleSlideD(title, subtitle, badge) {
  return _section('title-d', `
  <div class="blue-half"></div>
  <div class="purple-half"></div>
  <div class="yellow-accent"></div>
  ${state.logoNegFn()}
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
export function titleSlideE(title, subtitle) {
  return _section('title-e', `
  ${state.logoPosFn()}
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
export function titleSlideF(title, subtitle) {
  return _section('title-f', `
  <div class="blue-top"></div>
  <div class="orange-accent"></div>
  <div class="slide-title">${title}</div>
  <div class="slide-subtitle">${subtitle}</div>
  ${state.logoPosFn()}
  `, 'blue', 'right');
}
