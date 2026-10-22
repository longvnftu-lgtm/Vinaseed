// Đóng gói dashboard/online thành trang tĩnh độc lập trong /docs (dùng cho GitHub Pages).
// Chạy: node dashboard/site/build.js
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const SRC = path.join(ROOT, 'dashboard', 'online');
const DATA = path.join(ROOT, 'dashboard', 'data');
const OUT = path.join(ROOT, 'docs');
const DATASETS = ['people', 'tasks', 'projects', 'events', 'approvals', 'sales', 'dealers', 'visits',
  'production', 'intake', 'orders', 'finance', 'quality', 'hr'];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'data'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'vendor'), { recursive: true });

['core.js', 'views.js', 'brand.css', 'fonts.css'].forEach((f) => fs.copyFileSync(path.join(SRC, f), path.join(OUT, f)));
fs.copyFileSync(path.join(__dirname, 'dash-shim.js'), path.join(OUT, 'dash-shim.js'));
fs.copyFileSync(path.join(__dirname, 'tokens.css'), path.join(OUT, 'tokens.css'));
['d3.min.js', 'd3-LICENSE'].forEach((f) => fs.copyFileSync(path.join(__dirname, 'vendor', f), path.join(OUT, 'vendor', f)));
DATASETS.forEach((id) => fs.copyFileSync(path.join(DATA, id + '.json'), path.join(OUT, 'data', id + '.json')));
fs.copyFileSync(path.join(SRC, 'brand', 'vinaseed-logo.png'), path.join(OUT, 'favicon.png'));

// Trang gốc là phần thân (không có <html>); bọc vào khung tài liệu, nạp shim + d3 trước core.js.
const body = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8')
  .replace('<script src="core.js"></script>', '<script src="vendor/d3.min.js"></script>\n<script src="dash-shim.js"></script>\n<script src="core.js"></script>');

const html = `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Vinaseed Executive Dashboard</title>
<link rel="icon" href="favicon.png">
<link rel="stylesheet" href="tokens.css">
</head>
<body>
<div id="dash-root">
${body}
</div>
</body>
</html>
`;
fs.writeFileSync(path.join(OUT, 'index.html'), html);
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
console.log('Đã tạo', path.relative(ROOT, OUT));
