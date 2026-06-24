import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const indexHtml = path.join(distDir, 'index.html');
const fallbackHtml = path.join(distDir, '404.html');

try {
  if (fs.existsSync(indexHtml)) {
    fs.copyFileSync(indexHtml, fallbackHtml);
    console.log('Successfully created dist/404.html for GitHub Pages routing fallback.');
  } else {
    console.warn('dist/index.html not found, skipped 404.html creation.');
  }
} catch (err) {
  console.error('Error creating 404.html fallback:', err);
}
