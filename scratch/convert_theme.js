const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Royal Blue -> Indigo/Violet (#5E3BEE)
css = css.replace(/#086[a-fA-F0-9]{3}/g, '#5E3BEE');
css = css.replace(/#0655ae/gi, '#4C2FD4');
css = css.replace(/8,\s*106,\s*216/g, '94, 59, 238');

// Cyan -> Emerald Green (#10B981)
css = css.replace(/#43[bB][aA][fF]{2}/g, '#10B981');
css = css.replace(/#33a6e6/gi, '#0D9488');
css = css.replace(/67,\s*186,\s*255/g, '16, 185, 129');

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully converted Royal Blue & Cyan to Indigo & Emerald in globals.css!');
