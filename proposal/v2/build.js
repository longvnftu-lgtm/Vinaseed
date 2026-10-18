// Inline the Lucide icons into proposal.html and print it to an A4 PDF.
// Usage: node build.js   (needs playwright; Chromium path from PLAYWRIGHT_BROWSERS_PATH)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const dir = __dirname;
const out = process.argv[2] || path.join(dir, 'Vinaseed_Base2.0_Proposal_A4.pdf');

let html = fs.readFileSync(path.join(dir, 'proposal.html'), 'utf8');
html = html.replace(/@@([a-z0-9-]+)@@/g, (_, name) => {
  const svg = fs.readFileSync(path.join(dir, 'assets/icons', `${name}.svg`), 'utf8');
  return svg
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/class="[^"]*"/, '')
    .replace('<svg', '<svg class="i"')
    .replace(/\s+width="24"\s+height="24"/, '')
    .trim();
});
const built = path.join(dir, '.proposal.built.html');
fs.writeFileSync(built, html);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + built, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
  await browser.close();
  fs.unlinkSync(built);
  console.log(out);
})();
