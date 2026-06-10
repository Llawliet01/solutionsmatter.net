const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../src/app/globals.css');
const cssLines = fs.readFileSync(cssPath, 'utf8').split('\n');

console.log('Searching for background patterns in globals.css:');
cssLines.forEach((line, idx) => {
  if (line.includes('url(') || line.includes('background-image:') || line.includes('circle') || line.includes('ring')) {
    console.log(`${idx + 1}: ${line.trim()}`);
  }
});
