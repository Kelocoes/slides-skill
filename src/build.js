const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

// 1. Compile CSS
const cssDir = path.join(__dirname, 'css');
const cssFiles = [
  'base.css',
  'layouts/title-slides.css',
  'layouts/section-slides.css',
  'layouts/sidebar-slides.css',
  'layouts/stripe-slides.css',
  'layouts/content-slides.css'
];

let compiledCSS = `/* Compilado automáticamente por src/build.js a partir de archivos modulares */\n`;
cssFiles.forEach(file => {
  const filePath = path.join(cssDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    compiledCSS += `\n/* =================================================================\n   ARCHIVO: ${file}\n   ================================================================= */\n${content}\n`;
  } else {
    console.error(`Error: Archivo CSS no encontrado: ${filePath}`);
  }
});
fs.writeFileSync(path.join(projectRoot, 'icesibeamer.css'), compiledCSS);

// 2. Compile JS
const jsDir = path.join(__dirname, 'js');
const jsFiles = [
  'core.js',
  'layouts/title-slides.js',
  'layouts/section-slides.js',
  'layouts/sidebar-slides.js',
  'layouts/stripe-slides.js',
  'layouts/content-slides.js',
  'helpers.js',
  'init.js'
];

let compiledJS = `/* Compilado automáticamente por src/build.js a partir de archivos modulares */\n`;
compiledJS += `const icesi = (() => {\n  'use strict';\n`;
jsFiles.forEach(file => {
  const filePath = path.join(jsDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Indent content by 2 spaces to maintain style format inside IIFE
    const indented = content
      .split('\n')
      .map(line => line.trim() === '' ? '' : '  ' + line)
      .join('\n');
    compiledJS += `\n  // =================================================================\n  // ARCHIVO: ${file}\n  // =================================================================\n${indented}\n`;
  } else {
    console.error(`Error: Archivo JS no encontrado: ${filePath}`);
  }
});
compiledJS += `})();\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = icesi;\n}\n`;
fs.writeFileSync(path.join(projectRoot, 'icesibeamer.js'), compiledJS);

console.log('¡ICESI Beamer compilado exitosamente en la raíz del proyecto!');
