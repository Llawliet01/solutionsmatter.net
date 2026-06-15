const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = process.argv[2];
const destBase = process.argv[3];

if (!src || !destBase) {
  console.error("Usage: node process_images.js <src> <destBaseNameWithoutExtension>");
  process.exit(1);
}

// Make sure target directory exists
const destDir = path.dirname(destBase);
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy source as PNG
fs.copyFileSync(src, destBase + '.png');

// Convert to WebP
sharp(src)
  .webp({ quality: 90 })
  .toFile(destBase + '.webp')
  .then(() => {
    console.log(`Successfully generated PNG and WebP at ${destBase}`);
  })
  .catch(err => {
    console.error(`Error processing image ${destBase}:`, err);
    process.exit(1);
  });
