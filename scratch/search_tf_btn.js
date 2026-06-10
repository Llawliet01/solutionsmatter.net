const fs = require('fs');
const path = require('path');
const https = require('https');

const htmlPath = 'C:/Users/Yug/.gemini/antigravity-ide/brain/762745ad-7c93-4760-9bfe-8c2c5a307a4d/.system_generated/steps/432/content.md';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('=== PARSING HTML FOR STYLESHEETS ===');
  if (!fs.existsSync(htmlPath)) {
    console.log('HTML file not found!');
    return;
  }
  const html = fs.readFileSync(htmlPath, 'utf8');
  
  // Find all stylesheet hrefs
  const hrefs = [];
  const regex = /<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    hrefs.push(match[1]);
  }
  console.log('Stylesheets linked in HTML:', hrefs);

  // Let's download all of them from https://teckko.vercel.app/
  for (const href of hrefs) {
    const url = href.startsWith('http') ? href : `https://teckko.vercel.app/${href}`;
    const filename = path.basename(href);
    const dest = path.join(__dirname, filename);
    console.log(`Downloading ${url} to ${dest}...`);
    try {
      await downloadFile(url, dest);
      console.log(`Downloaded ${filename} successfully.`);
      const cssContent = fs.readFileSync(dest, 'utf8');
      if (cssContent.includes('tf-btn')) {
        console.log(`FOUND tf-btn in ${filename}!`);
        // Find tf-btn styles
        let idx = 0;
        while (true) {
          idx = cssContent.indexOf('tf-btn', idx);
          if (idx === -1) break;
          console.log(`Style matching tf-btn in ${filename} at ${idx}:`);
          console.log(cssContent.substring(idx - 50, idx + 400));
          idx += 6;
        }
      }
    } catch (err) {
      console.error(`Failed to download ${href}:`, err.message);
    }
  }
}

run().catch(console.error);
