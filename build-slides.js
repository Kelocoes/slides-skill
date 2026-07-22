const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const glob = require('glob'); // npm install glob might be needed, or use a manual walk

// Simple recursive directory walk
function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      filelist.push(dirFile);
    }
  }
  return filelist;
}

const allFiles = walkSync(path.join(__dirname, 'slides'));
const mmdFiles = allFiles.filter(f => f.endsWith('.mmd'));

console.log(`Encontrados ${mmdFiles.length} archivos .mmd para compilar.`);

mmdFiles.forEach(mmdFile => {
  const svgFile = mmdFile.replace(/\.mmd$/, '.svg');
  console.log(`Compilando: ${mmdFile} -> ${svgFile}`);
  try {
    // Requires @mermaid-js/mermaid-cli installed globally or via npx
    execSync(`npx -y @mermaid-js/mermaid-cli -i "${mmdFile}" -o "${svgFile}" -b transparent`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error compilando ${mmdFile}:`, error.message);
  }
});

console.log('Compilación Mermaid terminada. (Decktape exportación no incluida aquí, delegada al comando final)');
