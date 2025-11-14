const fs = require('fs');
const path = require('path');
const sass = require('sass');

// Compile SCSS to CSS
const scssPath = path.join(__dirname, '..', 'src', 'styles', 'carycamp.scss');
const cssOutput = path.join(__dirname, '..', 'public', 'carycamp-styles.css');

try {
  const result = sass.compile(scssPath, {
    style: 'expanded',
    sourceMap: true
  });
  
  // Ensure output directory exists
  const outputDir = path.dirname(cssOutput);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write CSS file
  fs.writeFileSync(cssOutput, result.css, 'utf8');
  console.log('SCSS compiled successfully to', cssOutput);
  
  // Write source map if available
  if (result.sourceMap) {
    const sourceMapPath = cssOutput + '.map';
    fs.writeFileSync(sourceMapPath, JSON.stringify(result.sourceMap), 'utf8');
    console.log('Source map written to', sourceMapPath);
  }
  
} catch (error) {
  console.error('SCSS compilation failed:', error.message);
  process.exit(1);
}