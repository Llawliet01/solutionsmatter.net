const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

const srcDir = path.join(__dirname, '../src');

console.log("Scanning source files to update image references to WebP...");
walkDir(srcDir, (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.js' || ext === '.jsx' || ext === '.css' || ext === '.html') {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Match any /images/ paths ending in .png, .jpg, or .jpeg
    const regex = /\/images\/([A-Za-z0-9_-]+)\.(png|jpg|jpeg)/g;
    if (regex.test(content)) {
      const updated = content.replace(regex, '/images/$1.webp');
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`- Updated: ${path.relative(path.join(__dirname, '..'), filePath)}`);
    }
  }
});
console.log("All image references updated successfully.");
