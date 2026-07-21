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
