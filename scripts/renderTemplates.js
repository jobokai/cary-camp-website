const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const templatesDir = path.join(__dirname, '..', 'src', 'templates', 'carycamp');
const layoutPath = path.join(__dirname, '..', 'src', 'templates', 'layout.hbs');
const outDir = path.join(__dirname, '..', 'public', 'carycamp');

if (!fs.existsSync(layoutPath)) {
  console.error('Layout not found at', layoutPath);
  process.exit(1);
}

const layoutSource = fs.readFileSync(layoutPath, 'utf8');
const layoutTpl = Handlebars.compile(layoutSource);

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.hbs'));

files.forEach(file => {
  const filePath = path.join(templatesDir, file);
  const source = fs.readFileSync(filePath, 'utf8');

  // Derive title from filename or first H1
  let title = file.replace(/\.hbs$/,'').replace(/[-_]/g,' ');
  const h1match = source.match(/<h1>(.*?)<\/h1>/i);
  if (h1match && h1match[1]) title = h1match[1].trim();

  const html = layoutTpl({ title, body: source });

  // Write to public/carycamp/<name>.html (use .html for easier dev preview)
  const outName = file.replace(/\.hbs$/i, '.html');
  const outPath = path.join(outDir, outName);
  fs.writeFileSync(outPath, html, 'utf8');
  console.log('Rendered', file, '→', outPath);
});

console.log('All templates rendered to', outDir);
