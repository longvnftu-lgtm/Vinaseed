// Thay thế runtime `dash` của nền tảng artifact để trang chạy độc lập (GitHub Pages).
// Hỗ trợ đúng các hàm trang đang dùng: data, calc, onData, params, setParams, resetParams, setLink.
(function () {
  const DATASETS = ['people', 'tasks', 'projects', 'events', 'approvals', 'sales', 'dealers', 'visits',
    'production', 'intake', 'orders', 'finance', 'quality', 'hr'];
  const DEFAULTS = { dept: null, person: null, period: 'month', from: '2026-10-01', to: '2026-10-31', season: 'Mùa 2026' };

  const store = {};   // id -> { status, data, error }
  const calcs = {};   // id -> { inputs, fn }
  const subs = [];
  let params = readUrl();
  let queued = false;

  function readUrl() {
    const q = new URLSearchParams(location.search), p = Object.assign({}, DEFAULTS);
    Object.keys(DEFAULTS).forEach((k) => { if (q.has(k)) p[k] = q.get(k) || null; });
    return p;
  }
  function writeUrl() {
    const q = new URLSearchParams();
    Object.keys(DEFAULTS).forEach((k) => { if (params[k] != null && params[k] !== DEFAULTS[k]) q.set(k, params[k]); });
    const s = q.toString();
    history.replaceState(null, '', location.pathname + (s ? '?' + s : '') + location.hash);
  }
  function notify() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; subs.forEach((fn) => { try { fn(); } catch (e) { console.error(e); } }); });
  }
  function runCalc(id) {
    const c = calcs[id], ins = c.inputs.map((k) => store[k] || { status: 'loading' });
    if (ins.some((s) => s.status === 'error')) store[id] = { status: 'error', error: 'Thiếu dữ liệu đầu vào' };
    else if (ins.every((s) => s.status === 'ok')) {
      try { store[id] = { status: 'ok', data: c.fn(...ins.map((s) => s.data)) }; }
      catch (e) { store[id] = { status: 'error', error: String(e) }; }
    } else store[id] = { status: 'loading' };
  }

  DATASETS.forEach((id) => {
    store[id] = { status: 'loading' };
    fetch('data/' + id + '.json')
      .then((r) => { if (!r.ok) throw new Error(r.status + ' ' + r.statusText); return r.json(); })
      .then((rows) => { store[id] = { status: 'ok', data: rows }; })
      .catch((e) => { store[id] = { status: 'error', error: String(e) }; })
      .finally(() => { Object.keys(calcs).forEach(runCalc); notify(); });
  });

  let resizeT;
  addEventListener('resize', () => { clearTimeout(resizeT); resizeT = setTimeout(notify, 150); });

  window.dash = {
    data: (id) => store[id] || { status: 'missing' },
    calc(id, def) { calcs[id] = { inputs: def.inputs, fn: def.fn }; runCalc(id); },
    onData(fn) { subs.push(fn); notify(); },
    params: () => Object.assign({}, params),
    setParams(patch) { params = Object.assign({}, params, patch); writeUrl(); notify(); },
    resetParams() { params = Object.assign({}, DEFAULTS); writeUrl(); notify(); },
    setLink(id) { history.replaceState(null, '', location.pathname + location.search + (id ? '#' + id : '')); },
    refresh() {},
  };
})();
