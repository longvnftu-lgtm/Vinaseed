// Nền dùng chung: định dạng số, bộ lọc, tab, biểu đồ d3, bảng, danh sách.
window.VS = (function () {
  const TODAY = '2026-10-19'; // ngày chốt của bộ số liệu mẫu
  const NF = new Intl.NumberFormat('vi-VN');
  const NF1 = new Intl.NumberFormat('vi-VN', { maximumFractionDigits: 1 });
  const bad = (v) => v == null || v === '' || !isFinite(v);
  const f = {
    int: (v) => (bad(v) ? '–' : NF.format(Math.round(v))),
    d1: (v) => (bad(v) ? '–' : NF1.format(v)),
    pct: (v) => (bad(v) ? '–' : NF1.format(v * 100) + '%'),
    bn: (v) => (bad(v) ? '–' : NF1.format(v) + ' tỷ'),
    t: (v) => (bad(v) ? '–' : NF.format(Math.round(v)) + ' tấn'),
    dmy: (s) => (s ? s.slice(8, 10) + '/' + s.slice(5, 7) : ''),
    dmyy: (s) => (s ? s.slice(8, 10) + '/' + s.slice(5, 7) + '/' + s.slice(0, 4) : ''),
    mon: (m) => 'T' + Number(m.slice(5, 7)),
  };
  const num = (v) => (v == null || v === '' ? null : Number(v));
  const bool = (v) => v === true || v === 'true' || v === 1 || v === '1';

  const data = (id) => dash.data(id);
  const rows = (id) => { const d = dash.data(id); return d.status === 'ok' ? d.data : null; };

  // ───── ngày ─────
  const toD = (s) => new Date(s + 'T00:00:00Z');
  const iso = (d) => d.toISOString().slice(0, 10);
  const add = (s, n) => { const d = toD(s); d.setUTCDate(d.getUTCDate() + n); return iso(d); };
  const diff = (a, b) => Math.round((toD(a) - toD(b)) / 864e5);
  const WD = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const wd = (s) => WD[toD(s).getUTCDay()];
  function range(p) {
    const t = toD(TODAY), y = t.getUTCFullYear(), m = t.getUTCMonth();
    if (p === 'today') return [TODAY, TODAY];
    if (p === 'week') { const s = add(TODAY, -((t.getUTCDay() + 6) % 7)); return [s, add(s, 6)]; }
    if (p === 'month') return [iso(new Date(Date.UTC(y, m, 1))), iso(new Date(Date.UTC(y, m + 1, 0)))];
    if (p === 'quarter') { const q = Math.floor(m / 3); return [iso(new Date(Date.UTC(y, q * 3, 1))), iso(new Date(Date.UTC(y, q * 3 + 3, 0)))]; }
    if (p === 'year') return [y + '-01-01', y + '-12-31'];
    return [null, null];
  }

  // ───── bộ lọc ─────
  function F() {
    const p = dash.params();
    return { dept: p.dept || '', person: p.person || '', period: p.period || 'month', from: p.from || '', to: p.to || '', season: p.season || 'Mùa 2026' };
  }
  const inR = (s, x) => !!s && (!x.from || s >= x.from) && (!x.to || s <= x.to);
  const monthIn = (m, x) => (!x.from || m >= x.from.slice(0, 7)) && (!x.to || m <= x.to.slice(0, 7));
  const overlap = (a, b, x) => (!x.to || a <= x.to) && (!x.from || b >= x.from);
  let P = {};
  const name = (id) => (P[id] ? P[id].name : id || '');
  const deptOf = (id) => (P[id] ? P[id].dept : '');
  const REGION_OF = { KD1: 'Miền Bắc', KD4: 'Miền Bắc', KD2: 'Miền Trung', KD5: 'Miền Trung', KD3: 'Miền Nam', KD6: 'Miền Nam' };
  // opts.dept: tên cột hoặc hàm; opts.persons: các cột người; opts.region: cột vùng (lọc nhân sự kinh doanh theo vùng phụ trách)
  function pass(row, x, opts) {
    if (x.dept && opts.dept) {
      const d = typeof opts.dept === 'function' ? opts.dept(row) : row[opts.dept];
      if (Array.isArray(d) ? !d.includes(x.dept) : d !== x.dept) return false;
    }
    if (x.person && (opts.persons || opts.region)) {
      if (opts.region && REGION_OF[x.person]) return row[opts.region] === REGION_OF[x.person];
      return (opts.persons || []).some((k) => row[k] === x.person);
    }
    return true;
  }
  const periodLabel = (x) => (!x.from && !x.to ? 'mọi thời gian' : x.from === x.to ? f.dmyy(x.from) : f.dmyy(x.from) + ' – ' + f.dmyy(x.to));

  const sel = {
    dept: document.getElementById('vs-dept'), person: document.getElementById('vs-person'),
    from: document.getElementById('vs-from'), to: document.getElementById('vs-to'), scope: document.getElementById('vs-scope'),
  };
  function setPeriod(p) { const [a, b] = range(p); dash.setParams({ period: p, from: a, to: b }); }
  sel.dept.addEventListener('change', () => {
    const d = sel.dept.value || null, x = F();
    dash.setParams({ dept: d, person: x.person && d && deptOf(x.person) !== d ? null : x.person || null });
  });
  sel.person.addEventListener('change', () => dash.setParams({ person: sel.person.value || null }));
  document.querySelectorAll('#vs-period button').forEach((b) => b.addEventListener('click', () => setPeriod(b.dataset.p)));
  for (const k of ['from', 'to']) {
    const el = sel[k];
    el.addEventListener('change', () => { if (el.value && el.validity.valid) dash.setParams({ [k]: el.value, period: 'custom' }); });
    el.addEventListener('blur', () => { el.value = F()[k]; });
  }
  document.getElementById('vs-reset').addEventListener('click', () => dash.resetParams());

  function drawFilters() {
    const ppl = rows('people') || [];
    P = {}; ppl.forEach((p) => { P[p.id] = p; });
    const x = F();
    const depts = [...new Set(ppl.map((p) => p.dept))];
    sel.dept.replaceChildren(new Option('Tất cả phòng ban', ''), ...depts.map((d) => new Option(d, d)));
    sel.dept.value = x.dept;
    const list = ppl.filter((p) => !x.dept || p.dept === x.dept);
    sel.person.replaceChildren(new Option('Tất cả nhân sự', ''), ...list.map((p) => new Option(p.name + ' · ' + p.title, p.id)));
    sel.person.value = x.person;
    document.querySelectorAll('#vs-period button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.p === x.period)));
    if (document.activeElement !== sel.from) sel.from.value = x.from;
    if (document.activeElement !== sel.to) sel.to.value = x.to;
    sel.scope.replaceChildren();
    const parts = [['Phạm vi', 'Toàn công ty' + (x.dept ? ' › ' + x.dept : '') + (x.person ? ' › ' + name(x.person) : '')], ['Kỳ', periodLabel(x)]];
    parts.forEach(([k, v], i) => {
      if (i) sel.scope.append(' · ');
      sel.scope.append(k + ': ');
      const b = document.createElement('b'); b.textContent = v; sel.scope.append(b);
    });
  }

  // ───── tab ─────
  const tabs = [...document.querySelectorAll('.vs-tabs [data-tab]')];
  let current = 'dieu-hanh';
  const onShow = [];
  function show(id, link) {
    if (!document.getElementById(id)) return;
    current = id;
    tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.tab === id)));
    document.querySelectorAll('.vs-page').forEach((p) => { p.hidden = p.id !== id; });
    if (link !== false) dash.setLink(id);
    onShow.forEach((fn) => fn(id));
  }
  tabs.forEach((t) => t.addEventListener('click', () => show(t.dataset.tab)));

  // ───── màu ─────
  const C = { green: '#2E8B3E', green2: '#8DB58F', brown: '#4E2C18', brown2: '#7A4E2D', gold: '#C8962E', late: '#C2412D', soon: '#D9A21B', doing: '#4F7CAC', idle: '#A59B8F' };

  // ───── trạng thái nạp ─────
  function state(ids) {
    const s = ids.map((id) => data(id).status);
    if (s.every((v) => v === 'ok')) return 'ok';
    if (s.some((v) => v === 'error' || v === 'missing' || v === 'declined' || v === 'connect')) return 'error';
    return 'loading';
  }
  function placeholder(el, st) {
    el.querySelectorAll(':scope > svg, :scope > .vs-empty, :scope > .vs-li').forEach((n) => n.remove());
    if (st === 'error') {
      el.classList.remove('dash-skeleton');
      const d = document.createElement('div'); d.className = 'vs-empty';
      d.textContent = '● Không tải được'; el.appendChild(d);
    } else el.classList.add('dash-skeleton');
  }

  // ───── tooltip ─────
  function tipOf(el) {
    let t = el.querySelector(':scope > .vs-tip');
    if (!t) { t = document.createElement('div'); t.className = 'vs-tip'; t.hidden = true; el.appendChild(t); }
    return t;
  }
  function showTip(el, ev, head, lines) {
    const t = tipOf(el); t.replaceChildren();
    const h = document.createElement('div'); h.className = 'h'; h.textContent = head; t.appendChild(h);
    lines.forEach(([c, label, val]) => {
      const d = document.createElement('div');
      if (c) { const i = document.createElement('i'); i.style.background = c; d.appendChild(i); }
      d.appendChild(document.createTextNode(label + ': ' + val)); t.appendChild(d);
    });
    t.hidden = false;
    const r = el.getBoundingClientRect(), w = t.offsetWidth, hh = t.offsetHeight;
    let x = ev.clientX - r.left + 12, y = ev.clientY - r.top + 12;
    if (x + w > r.width) x = Math.max(0, ev.clientX - r.left - w - 12);
    if (y + hh > r.height) y = Math.max(0, ev.clientY - r.top - hh - 12);
    t.style.left = x + 'px'; t.style.top = y + 'px';
  }
  const hideTip = (el) => { const t = el.querySelector(':scope > .vs-tip'); if (t) t.hidden = true; };

  function prep(el) {
    el.classList.remove('dash-skeleton');
    el.querySelectorAll(':scope > svg, :scope > .vs-empty').forEach((n) => n.remove());
  }
  function empty(el, msg) { prep(el); const d = document.createElement('div'); d.className = 'vs-empty'; d.textContent = msg || 'Không có dữ liệu trong bộ lọc hiện tại'; el.appendChild(d); }
  function widest(svg, texts, size) {
    const g = svg.append('g'); let w = 0;
    texts.forEach((s) => { const n = g.append('text').attr('font-size', size).text(s).node(); w = Math.max(w, n.getComputedTextLength()); });
    g.remove(); return w;
  }
  const short = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s);

  // Cột dọc: {cats, labels, series:[{name,color,values}], stacked, line:{name,color,values}, fmt, h, onClick, hl}
  function vbar(el, o) {
    prep(el);
    const n = o.cats.length;
    if (!n) return empty(el, o.emptyMsg);
    const W = Math.max(280, el.clientWidth || 600), H = o.h || 240;
    const tot = o.cats.map((_, i) => (o.stacked ? d3.sum(o.series, (s) => s.values[i] || 0) : d3.max(o.series, (s) => s.values[i] || 0)));
    const max = Math.max(d3.max(tot) || 0, o.line ? d3.max(o.line.values, (v) => v || 0) || 0 : 0) || 1;
    const svg = d3.select(el).insert('svg', ':first-child').attr('width', '100%').attr('viewBox', `0 0 ${W} ${H}`).attr('role', 'img').attr('aria-label', o.aria || '');
    const y = d3.scaleLinear([0, max * 1.08], [H - 24, 10]).nice();
    const ticks = y.ticks(4);
    const L = widest(svg, ticks.map(o.fmt), 11) + 10, R = 6;
    const x = d3.scaleBand(d3.range(n), [L, W - R]).padding(0.26);
    const g = svg.append('g');
    g.selectAll('line').data(ticks).join('line').attr('x1', L).attr('x2', W - R).attr('y1', y).attr('y2', y).attr('stroke', 'var(--cds-chart-grid)');
    g.selectAll('text').data(ticks).join('text').attr('x', L - 6).attr('y', (d) => y(d) + 4).attr('text-anchor', 'end').attr('font-size', 11).attr('fill', 'var(--color-fg-muted)').text(o.fmt);
    const op = (i) => (o.hl && !o.hl[i] ? 0.35 : 1);
    if (o.stacked) {
      const acc = new Array(n).fill(0);
      o.series.forEach((s) => {
        svg.append('g').selectAll('rect').data(d3.range(n)).join('rect')
          .attr('x', (i) => x(i)).attr('width', x.bandwidth())
          .attr('y', (i) => y(acc[i] + (s.values[i] || 0))).attr('height', (i) => { const h = y(acc[i]) - y(acc[i] + (s.values[i] || 0)); acc[i] += s.values[i] || 0; return Math.max(0, h); })
          .attr('fill', s.color).attr('opacity', op);
      });
    } else {
      const x1 = d3.scaleBand(d3.range(o.series.length), [0, x.bandwidth()]).padding(0.1);
      o.series.forEach((s, k) => {
        svg.append('g').selectAll('rect').data(d3.range(n)).join('rect')
          .attr('x', (i) => x(i) + x1(k)).attr('width', x1.bandwidth()).attr('rx', Math.min(3, x1.bandwidth() / 2))
          .attr('y', (i) => y(s.values[i] || 0)).attr('height', (i) => Math.max(0, y(0) - y(s.values[i] || 0)))
          .attr('fill', s.color).attr('opacity', op);
      });
    }
    if (o.line) {
      const pts = d3.range(n).filter((i) => o.line.values[i] != null);
      svg.append('path').datum(pts).attr('fill', 'none').attr('stroke', o.line.color || C.gold).attr('stroke-width', 2).attr('stroke-dasharray', o.line.solid ? null : '6 4')
        .attr('d', d3.line().x((i) => x(i) + x.bandwidth() / 2).y((i) => y(o.line.values[i])));
      svg.append('g').selectAll('circle').data(pts).join('circle').attr('cx', (i) => x(i) + x.bandwidth() / 2).attr('cy', (i) => y(o.line.values[i])).attr('r', 3).attr('fill', o.line.color || C.gold);
    }
    const step = Math.max(1, Math.ceil(n / Math.max(1, Math.floor((W - L) / 46))));
    svg.append('g').selectAll('text').data(d3.range(n).filter((i) => i % step === 0)).join('text')
      .attr('x', (i) => x(i) + x.bandwidth() / 2).attr('y', H - 6).attr('text-anchor', 'middle').attr('font-size', 11).attr('fill', 'var(--color-fg-muted)').text((i) => o.labels[i]);
    svg.append('line').attr('x1', L).attr('x2', W - R).attr('y1', y(0)).attr('y2', y(0)).attr('stroke', 'var(--cds-chart-axis)');
    svg.append('g').selectAll('rect').data(d3.range(n)).join('rect')
      .attr('x', (i) => x(i) - (x.step() - x.bandwidth()) / 2).attr('width', x.step()).attr('y', 0).attr('height', H - 20).attr('fill', 'transparent')
      .style('cursor', o.onClick ? 'pointer' : null)
      .on('mousemove', (ev, i) => showTip(el, ev, o.tipHead ? o.tipHead(i) : o.labels[i],
        o.series.map((s) => [s.color, s.name, o.fmt(s.values[i] || 0)]).concat(o.line && o.line.values[i] != null ? [[o.line.color || C.gold, o.line.name, o.fmt(o.line.values[i])]] : [])))
      .on('mouseleave', () => hideTip(el))
      .on('click', (ev, i) => o.onClick && o.onClick(i));
  }

  // Thanh ngang: {cats, labels, series, stacked, fmt, onClick, hl, total}
  function hbar(el, o) {
    prep(el);
    const n = o.cats.length;
    if (!n) return empty(el, o.emptyMsg);
    const W = Math.max(280, el.clientWidth || 600), row = o.row || 30, H = n * row + 26;
    const svg = d3.select(el).insert('svg', ':first-child').attr('width', '100%').attr('viewBox', `0 0 ${W} ${H}`).attr('role', 'img').attr('aria-label', o.aria || '');
    const labels = o.labels.map((s) => short(s, Math.max(14, Math.floor(W / 18))));
    const L = Math.min(W * 0.42, widest(svg, labels, 12) + 12);
    const tot = o.cats.map((_, i) => (o.stacked ? d3.sum(o.series, (s) => s.values[i] || 0) : d3.max(o.series, (s) => s.values[i] || 0)));
    const max = o.max || d3.max(tot) || 1;
    const endW = widest(svg, tot.map(o.fmt), 11) + 10;
    const x = d3.scaleLinear([0, max], [L, W - endW]);
    const yb = d3.scaleBand(d3.range(n), [4, H - 22]).padding(0.28);
    svg.append('g').selectAll('line').data(x.ticks(4)).join('line').attr('x1', x).attr('x2', x).attr('y1', 0).attr('y2', H - 20).attr('stroke', 'var(--cds-chart-grid)');
    svg.append('g').selectAll('text').data(x.ticks(4)).join('text').attr('x', x).attr('y', H - 6).attr('text-anchor', 'middle').attr('font-size', 10.5).attr('fill', 'var(--color-fg-muted)').text(o.fmt);
    const op = (i) => (o.hl && !o.hl[i] ? 0.35 : 1);
    if (o.stacked) {
      const acc = new Array(n).fill(0);
      o.series.forEach((s) => {
        svg.append('g').selectAll('rect').data(d3.range(n)).join('rect')
          .attr('y', (i) => yb(i)).attr('height', yb.bandwidth())
          .attr('x', (i) => x(acc[i])).attr('width', (i) => { const w = x(acc[i] + (s.values[i] || 0)) - x(acc[i]); acc[i] += s.values[i] || 0; return Math.max(0, w); })
          .attr('fill', s.color).attr('opacity', op);
      });
    } else {
      const y1 = d3.scaleBand(d3.range(o.series.length), [0, yb.bandwidth()]).padding(0.08);
      o.series.forEach((s, k) => {
        svg.append('g').selectAll('rect').data(d3.range(n)).join('rect')
          .attr('y', (i) => yb(i) + y1(k)).attr('height', y1.bandwidth()).attr('rx', Math.min(3, y1.bandwidth() / 2))
          .attr('x', L).attr('width', (i) => Math.max(0, x(s.values[i] || 0) - L)).attr('fill', s.color).attr('opacity', op);
      });
    }
    svg.append('g').selectAll('text').data(d3.range(n)).join('text').attr('x', L - 8).attr('y', (i) => yb(i) + yb.bandwidth() / 2 + 4)
      .attr('text-anchor', 'end').attr('font-size', 12).attr('fill', 'var(--color-fg)').text((i) => labels[i]);
    svg.append('g').selectAll('text').data(d3.range(n)).join('text').attr('x', (i) => x(tot[i]) + 6).attr('y', (i) => yb(i) + yb.bandwidth() / 2 + 4)
      .attr('font-size', 11).attr('fill', 'var(--color-fg-muted)').text((i) => (o.endLabel ? o.endLabel(i) : o.fmt(tot[i])));
    svg.append('g').selectAll('rect').data(d3.range(n)).join('rect').attr('x', 0).attr('width', W).attr('y', (i) => yb(i) - (yb.step() - yb.bandwidth()) / 2).attr('height', yb.step()).attr('fill', 'transparent')
      .style('cursor', o.onClick ? 'pointer' : null)
      .on('mousemove', (ev, i) => showTip(el, ev, o.labels[i], o.series.map((s) => [s.color, s.name, o.fmt(s.values[i] || 0)])))
      .on('mouseleave', () => hideTip(el))
      .on('click', (ev, i) => o.onClick && o.onClick(i));
  }

  // Đường: {cats, labels, series:[{name,color,values}], fmt}
  function lines(el, o) {
    prep(el);
    const n = o.cats.length;
    if (!n) return empty(el, o.emptyMsg);
    const W = Math.max(280, el.clientWidth || 600), H = o.h || 240;
    const max = d3.max(o.series, (s) => d3.max(s.values)) || 1;
    const svg = d3.select(el).insert('svg', ':first-child').attr('width', '100%').attr('viewBox', `0 0 ${W} ${H}`).attr('role', 'img');
    const y = d3.scaleLinear([0, max * 1.1], [H - 24, 10]).nice();
    const ticks = y.ticks(4);
    const L = widest(svg, ticks.map(o.fmt), 11) + 10, R = 12;
    const x = d3.scalePoint(d3.range(n), [L + 8, W - R - 8]);
    svg.append('g').selectAll('line').data(ticks).join('line').attr('x1', L).attr('x2', W - R).attr('y1', y).attr('y2', y).attr('stroke', 'var(--cds-chart-grid)');
    svg.append('g').selectAll('text').data(ticks).join('text').attr('x', L - 6).attr('y', (d) => y(d) + 4).attr('text-anchor', 'end').attr('font-size', 11).attr('fill', 'var(--color-fg-muted)').text(o.fmt);
    o.series.forEach((s) => {
      svg.append('path').datum(d3.range(n)).attr('fill', 'none').attr('stroke', s.color).attr('stroke-width', 2).attr('stroke-linecap', 'round').attr('stroke-linejoin', 'round')
        .attr('d', d3.line().x((i) => x(i)).y((i) => y(s.values[i])));
      svg.append('circle').attr('cx', x(n - 1)).attr('cy', y(s.values[n - 1])).attr('r', 3.5).attr('fill', s.color);
    });
    svg.append('g').selectAll('text').data(d3.range(n)).join('text').attr('x', (i) => x(i)).attr('y', H - 6).attr('text-anchor', 'middle').attr('font-size', 11).attr('fill', 'var(--color-fg-muted)').text((i) => o.labels[i]);
    const rule = svg.append('line').attr('y1', 10).attr('y2', H - 24).attr('stroke', 'var(--cds-chart-reference)').attr('opacity', 0);
    svg.append('rect').attr('x', L).attr('width', W - L - R).attr('y', 0).attr('height', H - 20).attr('fill', 'transparent')
      .on('mousemove', (ev) => {
        const px = d3.pointer(ev)[0]; let i = 0, best = Infinity;
        d3.range(n).forEach((k) => { const d = Math.abs(x(k) - px); if (d < best) { best = d; i = k; } });
        rule.attr('x1', x(i)).attr('x2', x(i)).attr('opacity', 1);
        showTip(el, ev, o.labels[i], o.series.map((s) => [s.color, s.name, o.fmt(s.values[i])]));
      })
      .on('mouseleave', () => { rule.attr('opacity', 0); hideTip(el); });
  }

  function legend(id, items) {
    const el = document.getElementById(id); el.replaceChildren();
    items.forEach(([c, t]) => { const s = document.createElement('span'); const i = document.createElement('i'); i.style.background = c; s.append(i, t); el.appendChild(s); });
  }

  // ───── danh sách & KPI ─────
  function tag(text, cls) { const s = document.createElement('span'); s.className = 'vs-tag ' + (cls || ''); s.textContent = text; return s; }
  function list(el, items, emptyMsg) {
    el.classList.remove('dash-skeleton');
    el.replaceChildren();
    if (!items.length) { const d = document.createElement('div'); d.className = 'vs-empty'; d.textContent = emptyMsg || 'Không có mục nào'; el.appendChild(d); return; }
    items.forEach((it) => {
      const li = document.createElement('div'); li.className = 'vs-li';
      const t = document.createElement('div'); t.className = 't'; t.textContent = it.t;
      const m = document.createElement('div'); m.className = 'm'; m.textContent = it.m || '';
      const r = document.createElement('div'); r.className = 'r';
      (it.r || []).forEach((x) => r.append(typeof x === 'string' ? Object.assign(document.createElement('span'), { textContent: x }) : x));
      li.append(t, m, r); el.appendChild(li);
    });
  }
  function kpis(el, items) {
    el.replaceChildren();
    items.forEach((k) => {
      const d = document.createElement('div'); d.className = 'vs-kpi' + (k.tone ? ' t-' + k.tone : '');
      const l = document.createElement('small'); l.textContent = k.l;
      const v = document.createElement('div'); v.className = 'v'; v.textContent = k.v;
      if (k.vc) v.style.color = k.vc;
      const s = document.createElement('div'); s.className = 's';
      if (k.delta != null && isFinite(k.delta)) {
        const b = document.createElement('span'); b.className = k.delta >= 0 === !k.lowerBetter ? 'up' : 'down';
        b.textContent = (k.delta >= 0 ? '+' : '−') + NF1.format(Math.abs(k.delta) * 100) + '% ';
        s.append(b);
      }
      s.append(k.s || '');
      d.append(l, v, s); el.appendChild(d);
    });
  }
  function kpiState(el, st, n) {
    el.replaceChildren();
    for (let i = 0; i < (n || 4); i++) {
      const d = document.createElement('div'); d.className = 'vs-kpi';
      if (st === 'error') d.textContent = '● Không tải được';
      else d.classList.add('dash-skeleton');
      el.appendChild(d);
    }
  }

  // ───── bảng: sắp xếp, tìm kiếm ─────
  const TS = {};
  function table(id, all, cols, opts) {
    opts = opts || {};
    const tb = document.getElementById(id), body = tb.tBodies[0];
    const st = TS[id] || (TS[id] = { sort: opts.sort == null ? null : opts.sort, dir: opts.dir || 1 });
    st.all = all; st.cols = cols; st.opts = opts;
    tb.querySelectorAll('thead th').forEach((th, i) => {
      if (!th.querySelector('button')) {
        const b = document.createElement('button'); b.type = 'button'; b.textContent = th.textContent; th.textContent = ''; th.appendChild(b);
        b.addEventListener('click', () => { const s = TS[id]; s.dir = s.sort === i ? -s.dir : s.cols[i].n ? -1 : 1; s.sort = i; table(id, s.all, s.cols, s.opts); });
      }
      th.setAttribute('aria-sort', st.sort === i ? (st.dir > 0 ? 'ascending' : 'descending') : 'none');
    });
    const text = (c, r) => String(c.f ? c.f(r) : r[c.k] == null ? '' : r[c.k]);
    let rs = all;
    const qel = opts.q && document.getElementById(opts.q);
    const q = qel ? qel.value.trim().toLowerCase() : '';
    if (q) rs = rs.filter((r) => cols.some((c) => text(c, r).toLowerCase().includes(q)));
    if (st.sort != null) {
      const c = cols[st.sort];
      const v = (r) => (c.v ? c.v(r) : c.n ? Number(r[c.k]) || 0 : text(c, r));
      rs = rs.slice().sort((a, b) => (v(a) > v(b) ? 1 : v(a) < v(b) ? -1 : 0) * st.dir);
    }
    body.replaceChildren(...rs.map((r) => {
      const tr = document.createElement('tr');
      if (opts.key) tr.dataset.key = r[opts.key];
      if (opts.onRow) { tr.style.cursor = 'pointer'; tr.addEventListener('click', () => opts.onRow(r)); }
      cols.forEach((c) => {
        const td = document.createElement('td'); if (c.n) td.className = 'n';
        if (c.node) td.appendChild(c.node(r)); else td.textContent = text(c, r);
        tr.appendChild(td);
      });
      return tr;
    }));
    if (!rs.length) {
      const tr = document.createElement('tr'), td = document.createElement('td');
      td.colSpan = cols.length; td.className = 'vs-empty'; td.textContent = 'Không có dữ liệu trong bộ lọc hiện tại';
      tr.appendChild(td); body.appendChild(tr);
    }
    if (opts.count) document.getElementById(opts.count).textContent = NF.format(rs.length) + ' dòng';
    if (qel && !qel.dataset.bound) { qel.dataset.bound = '1'; qel.addEventListener('input', () => { const s = TS[id]; table(id, s.all, s.cols, s.opts); }); }
  }
  function tableState(id, st) {
    const tb = document.getElementById(id), body = tb.tBodies[0];
    const tr = document.createElement('tr'), td = document.createElement('td');
    td.colSpan = tb.tHead.rows[0].cells.length; td.className = 'vs-empty';
    if (st === 'error') td.textContent = '● Không tải được'; else td.classList.add('dash-skeleton');
    tr.appendChild(td); body.replaceChildren(tr);
  }

  return { TODAY, f, num, bool, rows, data, add, diff, wd, range, F, inR, monthIn, overlap, pass, name, deptOf, periodLabel, REGION_OF,
    drawFilters, show, onShow, current: () => current, C, state, placeholder, vbar, hbar, lines, legend, tag, list, kpis, kpiState, table, tableState, empty, setPeriod };
})();
