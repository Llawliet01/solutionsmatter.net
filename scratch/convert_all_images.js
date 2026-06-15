const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, '../public/images');

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, ext);
  const destPath = path.join(directory, baseName + '.webp');
  
  if (ext === '.webp') {
    const stats = fs.statSync(filePath);
    if (stats.size <= 100 * 1024) {
      console.log(`- Skipping ${baseName}.webp (already WebP and under 100KB: ${(stats.size / 1024).toFixed(1)}KB)`);
      return;
    }
    console.log(`- Optimizing existing large WebP: ${baseName}.webp (${(stats.size / 1024).toFixed(1)}KB)`);
  } else {
    console.log(`- Converting ${baseName}${ext} to WebP...`);
  }

  let quality = 82;
  let width = 1100; // Standardize responsive max width to optimize size
  let success = false;
  
  // Read file into buffer
  const imageBuffer = fs.readFileSync(filePath);
  
  while (!success && quality >= 10) {
    const tempDest = path.join(directory, `_temp_${baseName}.webp`);
    
    // Process: resize and compress
    await sharp(imageBuffer)
      .resize({ width: width, withoutEnlargement: true })
      .webp({ quality: quality })
      .toFile(tempDest);
      
    const size = fs.statSync(tempDest).size;
    if (size <= 100 * 1024) {
      // Replace target
      if (fs.existsSync(destPath)) {
        fs.unlinkSync(destPath);
      }
      fs.renameSync(tempDest, destPath);
      console.log(`  + Generated ${baseName}.webp: ${(size / 1024).toFixed(1)}KB (Quality: ${quality}, Width: ${width})`);
      success = true;
    } else {
      fs.unlinkSync(tempDest);
      if (quality > 45) {
        quality -= 15;
      } else {
        quality -= 10;
        width = Math.round(width * 0.8);
      }
    }
  }

  if (!success) {
    console.warn(`  ! Could not compress ${baseName} under 100KB, forcing aggressive quality fallback`);
    await sharp(imageBuffer)
      .resize({ width: 600, withoutEnlargement: true })
      .webp({ quality: 15 })
      .toFile(destPath);
    const size = fs.statSync(destPath).size;
    console.log(`  + Fallback generated ${baseName}.webp: ${(size / 1024).toFixed(1)}KB`);
  }

  // Delete original if it was png/jpg/jpeg
  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
    fs.unlinkSync(filePath);
    console.log(`  x Deleted original ${baseName}${ext}`);
  }
}

async function run() {
  const files = fs.readdirSync(directory);
  console.log(`Starting image conversion & optimization for ${files.length} items...`);
  for (const file of files) {
    const filePath = path.join(directory, file);
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.webp') {
      try {
        await processImage(filePath);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
  console.log("All image conversions completed successfully.");
}

run();
