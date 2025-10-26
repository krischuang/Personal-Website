const fs = require('fs');
const path = require('path');

// Create .nojekyll file in the out directory
const outDir = path.join(process.cwd(), 'out');
const nojekyllPath = path.join(outDir, '.nojekyll');

try {
  fs.writeFileSync(nojekyllPath, '');
  console.log('✓ Created .nojekyll file for GitHub Pages');
} catch (error) {
  console.error('Error creating .nojekyll file:', error);
  process.exit(1);
}
