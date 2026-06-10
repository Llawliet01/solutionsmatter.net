const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, '../src/app/page.js');
const pageLines = fs.readFileSync(pagePath, 'utf8').split('\n');

console.log('Searching for background shape elements in page.js:');
pageLines.forEach((line, idx) => {
  if (line.includes('svg') || line.includes('circle') || line.includes('pattern') || line.includes('bg') || line.includes('url')) {
    console.log(`${idx + 1}: ${line.trim()}`);
  }
});
