// Build a single self-contained HTML (icons and fonts embedded) from
// proposal.html, then print it to an A4 PDF.
// Usage: node build.js   (needs playwright; Chromium from PLAYWRIGHT_BROWSERS_PATH)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const dir = __dirname;
const htmlOut = path.join(dir, 'Vinaseed_Base2.0_Proposal.html');
const pdfOut = path.join(dir, 'Vinaseed_Base2.0_Proposal_A4.pdf');

const dataUri = (file, mime) =>
  `data:${mime};base64,${fs.readFileSync(path.join(dir, file)).toString('base64')}`;

let html = fs.readFileSync(path.join(dir, 'proposal.html'), 'utf8');

// Lucide icons
html = html.replace(/@@([a-z0-9-]+)@@/g, (_, name) =>
  fs.readFileSync(path.join(dir, 'assets/icons', `${name}.svg`), 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/class="[^"]*"/, '')
    .replace('<svg', '<svg class="i"')
    .replace(/\s+width="24"\s+height="24"/, '')
    .replace(/\s*\n\s*/g, ' ')
    .trim());

// Fonts: inline the stylesheet with each woff2 as a data URI
const fontsCss = fs.readFileSync(path.join(dir, 'assets/fonts.css'), 'utf8')
  .replace(/url\((fonts\/[^)]+)\)/g, (_, f) => `url(${dataUri('assets/' + f, 'font/woff2')})`);
html = html.replace('<link rel="stylesheet" href="assets/fonts.css">', `<style id="fonts">${fontsCss}</style>`);

fs.writeFileSync(htmlOut, html);
console.log(htmlOut);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + htmlOut, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ media: 'print' });
  await page.pdf({ path: pdfOut, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await browser.close();
  console.log(pdfOut);
})();
