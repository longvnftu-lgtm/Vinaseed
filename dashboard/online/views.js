// Các góc nhìn báo cáo: điều hành (Ban lãnh đạo) và các mảng theo phiếu khảo sát.
(function () {
  const V = window.VS, f = V.f, C = V.C, TODAY = V.TODAY, $ = (id) => document.getElementById(id);

  dash.calc('orders_aging', {
    inputs: ['orders'],
    title: 'Hạn giao đơn hàng',
    description: 'Số ngày còn lại đến hạn giao (âm là đã quá hạn) và nhóm hạn của đơn chưa giao xong, tính tại ngày chốt 19/10/2026.',
    fn: (orders) => orders.map((o) => {
      const left = Math.round((Date.parse(o.due_date) - Date.parse('2026-10-19')) / 864e5);
      const open = o.status !== 'Hoàn thành';
      return {
        order_id: o.order_id,
        days_left: open ? left : null,
        bucket: !open ? 'Đã hoàn thành' : left < 0 ? 'Quá hạn' : left <= 30 ? 'Đến hạn trong 30 ngày' : left <= 60 ? 'Từ 30 đến 60 ngày' : 'Trên 60 ngày',
      };
    }),
  });

  const NEED = {
    'dieu-hanh': ['people', 'tasks', 'projects', 'events', 'approvals'],
    'kinh-doanh': ['people', 'sales', 'dealers'],
    'dai-ly': ['people', 'dealers', 'visits'],
    'san-xuat': ['people', 'production', 'intake'],
    'don-hang': ['people', 'orders', 'orders_aging'],
    'tai-chinh': ['people', 'finance', 'dealers'],
    'chat-luong': ['people', 'quality'],
    'nhan-su': ['people', 'hr', 'tasks'],
    'danh-muc': ['catalog'],
  };
  function pageState(page, st) {
    const root = $(page);
    root.querySelectorAll('.vs-kpis').forEach((el) => V.kpiState(el, st, 5));
    root.querySelectorAll('.vs-chart, .vs-list').forEach((el) => V.placeholder(el, st));
    root.querySelectorAll('table.vs-table').forEach((t) => V.tableState(t.id, st));
    root.querySelectorAll('.vs-lead').forEach((el) => { if (el.id) el.textContent = st === 'error' ? 'Một nguồn dữ liệu không tải được.' : '—'; });
  }
  const setLead = (id, parts) => { $(id).textContent = parts.filter(Boolean).join(' '); };
  const outOfScope = (x, depts) => x.dept && !depts.includes(x.dept) ? `Phòng ban "${x.dept}" không phụ trách mảng này; bỏ lọc phòng ban để xem.` : '';
  const sum = (a, k) => a.reduce((s, r) => s + (Number(typeof k === 'function' ? k(r) : r[k]) || 0), 0);
  const groupBy = (a, k) => a.reduce((m, r) => { const g = typeof k === 'function' ? k(r) : r[k]; (m[g] = m[g] || []).push(r); return m; }, {});

  // ─────────────── Điều hành ───────────────
  const ST = ['Hoàn thành đúng hạn', 'Hoàn thành trễ', 'Đang làm', 'Sắp đến hạn', 'Quá hạn', 'Chưa bắt đầu'];
  const STC = { 'Hoàn thành đúng hạn': C.green, 'Hoàn thành trễ': C.green2, 'Đang làm': C.doing, 'Sắp đến hạn': C.soon, 'Quá hạn': C.late, 'Chưa bắt đầu': C.idle };
  const STCLS = { 'Hoàn thành đúng hạn': 'ok', 'Hoàn thành trễ': 'ok', 'Đang làm': 'doing', 'Sắp đến hạn': 'soon', 'Quá hạn': 'late', 'Chưa bắt đầu': '' };
  function track(t) {
    if (t.status === 'Hoàn thành') return t.done_on && t.done_on <= t.deadline ? ST[0] : ST[1];
    if (t.deadline < TODAY) return 'Quá hạn';
    if (V.diff(t.deadline, TODAY) <= 3) return 'Sắp đến hạn';
    return t.status === 'Chưa bắt đầu' ? 'Chưa bắt đầu' : 'Đang làm';
  }
  const taskBase = (x) => (V.rows('tasks') || []).map((t) => Object.assign({}, t, { track: track(t), late: t.deadline < TODAY && t.status !== 'Hoàn thành' ? V.diff(TODAY, t.deadline) : 0 }))
    .filter((t) => V.pass(t, x, { dept: 'dept', persons: ['assignee', 'assigner'] }));
  const taskInPeriod = (t, x) => V.inR(t.deadline, x) || (t.track === 'Quá hạn' && (!x.to || x.to >= TODAY) && (!x.from || x.from <= TODAY));

  function dieuHanh(x) {
    const base = taskBase(x);
    const tasks = base.filter((t) => taskInPeriod(t, x));
    const overdue = base.filter((t) => t.track === 'Quá hạn').sort((a, b) => b.late - a.late);
    const focus = tasks.filter((t) => V.bool(t.focus) && t.status !== 'Hoàn thành').sort((a, b) => a.deadline.localeCompare(b.deadline));
    const doneIn = tasks.filter((t) => t.status === 'Hoàn thành' && V.inR(t.deadline, x));
    const onTime = doneIn.filter((t) => t.track === ST[0]).length;
    const projs = V.rows('projects').filter((p) => V.pass(p, x, { dept: 'dept', persons: ['owner'] }) && V.overlap(p.start, p.end, x));
    const slow = projs.filter((p) => p.status === 'Chậm tiến độ');
    const evOpts = { dept: (e) => [V.deptOf(e.person), e.related_dept], persons: ['person'] };
    const events = V.rows('events').filter((e) => V.pass(e, x, evOpts));
    const evToday = events.filter((e) => e.date === TODAY);
    const ap = V.rows('approvals').filter((a) => V.pass(a, x, { dept: 'dept', persons: ['submitter', 'approver'] }));
    const forCT = ap.filter((a) => !a.closed && String(a.step).startsWith('B3')).sort((a, b) => (V.bool(b.urgent) - V.bool(a.urgent)) || (b.waiting_days - a.waiting_days));
    const urgent = forCT.filter((a) => V.bool(a.urgent)).length;

    setLead('dh-lead', [`Kỳ ${V.periodLabel(x)}:`, `${f.int(overdue.length)} việc quá hạn,`, `${f.int(slow.length)}/${f.int(projs.length)} dự án chậm tiến độ,`, `${f.int(forCT.length)} hồ sơ chờ Chủ tịch duyệt (${f.int(urgent)} gấp).`]);
    V.kpis($('dh-kpis'), [
      { l: 'Việc trọng tâm', v: f.int(focus.length), s: 'chưa xong, gồm việc quá hạn' },
      { l: 'Việc quá hạn', v: f.int(overdue.length), tone: 'bad', vc: overdue.length ? C.late : '', s: 'tại ngày chốt' },
      { l: 'Xong đúng hạn', v: f.pct(doneIn.length ? onTime / doneIn.length : NaN), s: `${f.int(onTime)}/${f.int(doneIn.length)} việc xong trong kỳ` },
      { l: 'Dự án chậm tiến độ', v: `${f.int(slow.length)}/${f.int(projs.length)}`, tone: 'warn', s: 'dự án chiến lược' },
      { l: 'Lịch Ban TGĐ hôm nay', v: f.int(evToday.length), tone: 'brown', s: `${V.wd(TODAY)}, ${f.dmyy(TODAY)}` },
      { l: 'Chờ Chủ tịch duyệt', v: f.int(forCT.length), tone: 'gold', s: `${f.int(urgent)} hồ sơ gấp` },
    ]);
    V.list($('dh-approvals'), forCT.slice(0, 6).map((a) => ({
      t: a.title, m: `${a.id} · ${a.dept} · ${V.name(a.submitter)}${a.amount ? ' · ' + f.bn(a.amount / 1e9) : ''}`,
      r: [V.bool(a.urgent) ? V.tag('Gấp', 'late') : '', `chờ ${f.int(a.waiting_days)} ngày`].filter(Boolean),
    })), 'Không có hồ sơ chờ duyệt');
    $('dh-focus-note').textContent = 'Chưa xong, hạn trong kỳ ' + V.periodLabel(x) + ' và việc quá hạn';
    V.list($('dh-focus'), focus.slice(0, 7).map((t) => ({ t: t.title, m: `${V.name(t.assignee)} · ${t.dept}`, r: [V.tag(t.late ? `Quá hạn ${t.late} ngày` : t.track, STCLS[t.track]), 'hạn ' + f.dmy(t.deadline)] })), 'Không có việc trọng tâm trong kỳ');
    V.list($('dh-late'), slow.map((p) => ({ t: p.name, m: `Dự án · ${V.name(p.owner)} · thực tế ${p.progress}% / kế hoạch ${p.plan}%`, r: [V.tag(Number(p.late_days) ? `Trễ mốc ${p.late_days} ngày` : 'Chậm', 'late')] }))
      .concat(overdue.slice(0, 6).map((t) => ({ t: t.title, m: `${V.name(t.assignee)} · ${t.dept}`, r: [V.tag(`Quá hạn ${t.late} ngày`, 'late')] }))), 'Không có việc chậm');
    const ev = evToday.length ? evToday : events.filter((e) => V.inR(e.date, x));
    $('dh-cal-note').textContent = evToday.length ? `Hôm nay, ${V.wd(TODAY)} ${f.dmyy(TODAY)}` : 'Kỳ đang lọc không có hôm nay: lịch trong kỳ';
    V.list($('dh-cal'), ev.sort((a, b) => (a.date + a.start).localeCompare(b.date + b.start)).slice(0, 8).map((e) => ({
      t: `${V.name(e.person)} · ${e.title}`, m: `${e.place} · ${e.resource}`, r: [evToday.length ? '' : `${V.wd(e.date)} ${f.dmy(e.date)}`, `${e.start}–${e.end}`].filter(Boolean),
    })), 'Không có lịch');
    const depts = [...new Set(tasks.map((t) => t.dept))];
    V.legend('dh-dept-legend', ST.map((s) => [STC[s], s]));
    V.hbar($('dh-dept'), {
      cats: depts, labels: depts, stacked: true, fmt: f.int, aria: 'Số việc theo trạng thái tiến độ của từng phòng ban',
      series: ST.map((s) => ({ name: s, color: STC[s], values: depts.map((d) => tasks.filter((t) => t.dept === d && t.track === s).length) })),
      hl: x.dept ? depts.map((d) => d === x.dept) : null, onClick: (i) => dash.setParams({ dept: x.dept === depts[i] ? null : depts[i], person: null }),
    });
    V.table('dh-proj', projs, [
      { k: 'id' }, { k: 'name' }, { k: 'dept' }, { k: 'progress', n: 1, f: (p) => f.int(p.progress) + '%' }, { k: 'plan', n: 1, f: (p) => f.int(p.plan) + '%' },
      { k: 'next_milestone' }, { k: 'next_due', f: (p) => f.dmyy(p.next_due), v: (p) => p.next_due || '' },
      { k: 'status', node: (p) => V.tag(p.status, p.status === 'Chậm tiến độ' ? 'late' : p.status === 'Có rủi ro' ? 'soon' : 'ok') },
    ], { key: 'id' });
  }

  // ─────────────── Kinh doanh (BC1) ───────────────
  function kinhDoanh(x) {
    const opt = { dept: 'dept', persons: ['owner'], region: 'region' };
    const all = V.rows('sales').filter((r) => V.pass(r, x, opt));
    const inP = all.filter((r) => V.monthIn(r.month, x));
    const act = sum(inP, 'actual_bn'), plan = sum(inP.filter((r) => r.month <= TODAY.slice(0, 7)), 'plan_bn');
    const endM = (x.to || TODAY).slice(0, 7) < TODAY.slice(0, 7) ? (x.to || TODAY).slice(0, 7) : TODAY.slice(0, 7);
    const ytd = all.filter((r) => r.month <= endM);
    const yAct = sum(ytd, 'actual_bn'), yPlan = sum(ytd, 'plan_bn'), yearPlan = sum(all, 'plan_bn');
    const vol = sum(inP, 'volume_t'), margin = act ? sum(inP, (r) => (r.actual_bn || 0) * (r.margin_pct || 0)) / act : NaN;
    setLead('kd-lead', [outOfScope(x, ['Khối Kinh doanh']) || `Doanh thu kỳ ${V.periodLabel(x)} đạt ${f.bn(act)}, bằng ${f.pct(plan ? act / plan : NaN)} kế hoạch; lũy kế năm ${f.bn(yAct)} (${f.pct(yearPlan ? yAct / yearPlan : NaN)} kế hoạch cả năm).`]);
    V.kpis($('kd-kpis'), [
      { l: 'Doanh thu trong kỳ', v: f.bn(act), delta: plan ? act / plan - 1 : null, s: 'so với kế hoạch kỳ' },
      { l: 'Lũy kế năm', v: f.bn(yAct), delta: yPlan ? yAct / yPlan - 1 : null, s: 'so với kế hoạch lũy kế', tone: 'gold' },
      { l: 'Hoàn thành KH năm', v: f.pct(yearPlan ? yAct / yearPlan : NaN), s: 'kế hoạch ' + f.bn(yearPlan), tone: 'brown' },
      { l: 'Sản lượng bán trong kỳ', v: f.t(vol), s: 'tất cả nhóm hàng' },
      { l: 'Biên lãi gộp', v: f.d1(margin) + '%', s: 'bình quân theo doanh thu' },
    ]);
    const months = [...new Set(all.map((r) => r.month))].sort();
    V.vbar($('kd-month'), {
      cats: months, labels: months.map(f.mon), fmt: f.d1, h: 250, aria: 'Doanh thu theo tháng so với kế hoạch',
      series: [{ name: 'Thực hiện', color: C.green, values: months.map((m) => { const a = all.filter((r) => r.month === m && r.actual_bn != null); return a.length ? sum(a, 'actual_bn') : 0; }) }],
      line: { name: 'Kế hoạch', color: C.gold, values: months.map((m) => sum(all.filter((r) => r.month === m), 'plan_bn')) },
      hl: months.map((m) => V.monthIn(m, x)), tipHead: (i) => 'Tháng ' + months[i].slice(5, 7) + '/' + months[i].slice(0, 4),
    });
    const grp = (k) => { const g = groupBy(inP, k), ks = Object.keys(g).sort((a, b) => sum(g[b], 'actual_bn') - sum(g[a], 'actual_bn')); return { ks, a: ks.map((q) => sum(g[q], 'actual_bn')), p: ks.map((q) => sum(g[q].filter((r) => r.month <= TODAY.slice(0, 7)), 'plan_bn')) }; };
    const pr = grp('product');
    V.hbar($('kd-prod'), { cats: pr.ks, labels: pr.ks, fmt: f.d1, series: [{ name: 'Thực hiện', color: C.green, values: pr.a }, { name: 'Kế hoạch', color: C.gold, values: pr.p }], row: 40 });
    const rg = grp('region'), MGR = { 'Miền Bắc': 'KD1', 'Miền Trung': 'KD2', 'Miền Nam': 'KD3' };
    V.hbar($('kd-region'), { cats: rg.ks, labels: rg.ks, fmt: f.d1, row: 40, series: [{ name: 'Thực hiện', color: C.green, values: rg.a }, { name: 'Kế hoạch', color: C.gold, values: rg.p }],
      onClick: (i) => dash.setParams({ person: x.person === MGR[rg.ks[i]] ? null : MGR[rg.ks[i]], dept: 'Khối Kinh doanh' }) });
    const dl = V.rows('dealers').filter((d) => V.pass(d, x, { dept: 'dept', persons: ['owner'], region: 'region' }));
    V.table('kd-top', dl, [
      { k: 'dealer_id' }, { k: 'dealer' }, { k: 'province' }, { k: 'region' },
      { k: 'revenue_ytd_bn', n: 1, f: (d) => f.d1(d.revenue_ytd_bn) }, { k: 'target_ytd_bn', n: 1, f: (d) => f.d1(d.target_ytd_bn) }, { k: 'status' },
    ], { key: 'dealer_id', q: 'kd-top-q', count: 'kd-top-n', sort: 4, dir: -1 });
  }

  // ─────────────── Đại lý & thị trường (BC2–BC4) ───────────────
  function daiLy(x) {
    const dl = V.rows('dealers').filter((d) => V.pass(d, x, { dept: 'dept', persons: ['owner'], region: 'region' }));
    const vs = V.rows('visits').filter((v) => V.pass(v, x, { dept: 'dept', persons: ['staff'], region: 'region' }) && V.inR(v.date, x));
    const inRoute = vs.filter((v) => V.bool(v.in_route)).length, withOrder = vs.filter((v) => V.bool(v.has_order)).length;
    const official = dl.filter((d) => d.status === 'Chính thức');
    const stale = official.map((d) => Object.assign({}, d, { gap: d.last_visit ? V.diff(TODAY, d.last_visit) : 999 })).filter((d) => d.gap > 10).sort((a, b) => b.gap - a.gap);
    setLead('dl-lead', [outOfScope(x, ['Khối Kinh doanh']) || `Kỳ ${V.periodLabel(x)}: ${f.int(vs.length)} lượt ghé thăm, ${f.pct(vs.length ? inRoute / vs.length : NaN)} đúng tuyến; ${f.int(stale.length)} đại lý chính thức quá 10 ngày chưa được ghé.`]);
    V.kpis($('dl-kpis'), [
      { l: 'Đại lý chính thức', v: f.int(official.length), s: `${f.int(dl.length)} đại lý trên DMS` },
      { l: 'Lượt ghé thăm', v: f.int(vs.length), s: 'trong kỳ' },
      { l: 'Đúng tuyến', v: f.pct(vs.length ? inRoute / vs.length : NaN), tone: 'gold', s: `${f.int(vs.length - inRoute)} lượt ngoại tuyến` },
      { l: 'Lượt có đơn hàng', v: f.pct(vs.length ? withOrder / vs.length : NaN), s: `${f.int(withOrder)} lượt` },
      { l: 'Cự ly di chuyển', v: f.int(sum(vs, 'km')) + ' km', tone: 'brown', s: 'tổng các nhân viên' },
    ]);
    const days = [...new Set(vs.map((v) => v.date))].sort();
    V.vbar($('dl-day'), {
      cats: days, labels: days.map(f.dmy), stacked: true, fmt: f.int, aria: 'Lượt ghé thăm theo ngày', emptyMsg: 'Không có lượt ghé thăm trong kỳ',
      series: [{ name: 'Đúng tuyến', color: C.green, values: days.map((d) => vs.filter((v) => v.date === d && V.bool(v.in_route)).length) },
        { name: 'Ngoại tuyến', color: C.soon, values: days.map((d) => vs.filter((v) => v.date === d && !V.bool(v.in_route)).length) }],
      tipHead: (i) => V.wd(days[i]) + ' ' + f.dmyy(days[i]),
    });
    const by = groupBy(vs, 'staff');
    const staffRows = Object.entries(by).map(([s, a]) => ({ staff: s, n: a.length, inr: a.filter((v) => V.bool(v.in_route)).length, ord: a.filter((v) => V.bool(v.has_order)).length, km: sum(a, 'km'), min: sum(a, 'minutes') / a.length }));
    V.table('dl-staff', staffRows, [
      { k: 'staff', f: (r) => V.name(r.staff) }, { k: 'n', n: 1, f: (r) => f.int(r.n) }, { k: 'inr', n: 1, f: (r) => f.pct(r.inr / r.n) },
      { k: 'ord', n: 1, f: (r) => f.int(r.ord) }, { k: 'km', n: 1, f: (r) => f.int(r.km) }, { k: 'min', n: 1, f: (r) => f.int(r.min) },
    ], { sort: 1, dir: -1, onRow: (r) => dash.setParams({ person: x.person === r.staff ? null : r.staff, dept: 'Khối Kinh doanh' }) });
    V.list($('dl-stale'), stale.slice(0, 8).map((d) => ({ t: d.dealer, m: `${d.province} · ${V.name(d.owner)}`, r: [V.tag(d.gap === 999 ? 'Chưa ghé' : `${d.gap} ngày`, d.gap > 20 ? 'late' : 'soon')] })), 'Mọi đại lý chính thức đều được ghé trong 10 ngày');
    V.table('dl-table', dl, [
      { k: 'dealer_id' }, { k: 'dealer' }, { k: 'province' }, { k: 'status' },
      { k: 'visits_in_route', n: 1, f: (d) => f.int(d.visits_in_route) }, { k: 'visits_off_route', n: 1, f: (d) => f.int(d.visits_off_route) },
      { k: 'last_visit', f: (d) => f.dmyy(d.last_visit), v: (d) => d.last_visit || '' }, { k: 'orders_ytd', n: 1, f: (d) => f.int(d.orders_ytd) },
      { k: 'sku', n: 1, f: (d) => f.int(d.sku) }, { k: 'revenue_ytd_bn', n: 1, f: (d) => f.d1(d.revenue_ytd_bn) },
    ], { key: 'dealer_id', q: 'dl-q', count: 'dl-n' });
  }

  // ─────────────── Sản xuất & thu mua (BC6, BC7, BC9) ───────────────
  document.querySelectorAll('#sx-season button').forEach((b) => b.addEventListener('click', () => dash.setParams({ season: b.dataset.s })));
  function sanXuat(x) {
    document.querySelectorAll('#sx-season button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.s === x.season)));
    const opt = { dept: 'dept', persons: ['owner'] };
    const prodAll = V.rows('production').filter((p) => V.pass(p, x, opt));
    const prod = prodAll.filter((p) => p.season === x.season);
    const inAll = V.rows('intake').filter((r) => V.pass(r, x, opt));
    const inP = inAll.filter((r) => V.inR(r.date, x));
    const plan = sum(prod, 'area_plan_ha'), dep = sum(prod, 'area_deployed_ha'), fail = sum(prod, 'ha_failed');
    const dryP = sum(inP, 'kg_dry') / 1000, coming = sum(inP.filter((r) => r.status === 'Đang về kho'), 'kg_out') / 1000;
    setLead('sx-lead', [outOfScope(x, ['Khối Sản xuất']) || `Vụ ${x.season}: triển khai ${f.int(dep)}/${f.int(plan)} ha (${f.pct(plan ? dep / plan : NaN)}), ${f.int(fail)} ha không làm được. Kỳ ${V.periodLabel(x)} đã nhập kho ${f.t(dryP)} quy khô.`]);
    V.kpis($('sx-kpis'), [
      { l: 'Diện tích kế hoạch', v: f.int(plan) + ' ha', s: 'vụ ' + x.season },
      { l: 'Đã triển khai', v: f.pct(plan ? dep / plan : NaN), s: f.int(dep) + ' ha' },
      { l: 'Không làm được', v: f.int(fail) + ' ha', tone: 'bad', vc: fail ? C.late : '', s: f.pct(plan ? fail / plan : NaN) + ' kế hoạch' },
      { l: 'Sản lượng kế hoạch', v: f.t(sum(prod, 'output_plan_t')), tone: 'gold', s: 'dự kiến ' + f.t(sum(prod, 'output_expected_t')) },
      { l: 'Nhập kho quy khô', v: f.t(dryP), tone: 'brown', s: 'trong kỳ' },
      { l: 'Đang về kho', v: f.t(coming), tone: 'warn', s: 'lượng sản xuất đã xuất' },
    ]);
    const units = [...new Set(prod.map((p) => p.unit))].sort();
    const segs = [['Đã giao giống', 'ha_delivered', C.gold], ['Đã gieo', 'ha_sown', C.green], ['Đang triển khai', 'ha_doing', C.doing], ['Không làm được', 'ha_failed', C.late]];
    V.legend('sx-unit-legend', segs.map((s) => [s[2], s[0]]));
    V.hbar($('sx-unit'), { cats: units, labels: units, stacked: true, fmt: f.int, aria: 'Diện tích theo trạng thái triển khai của từng đơn vị sản xuất', emptyMsg: 'Không có kế hoạch sản xuất trong bộ lọc',
      series: segs.map(([n, k, c]) => ({ name: n, color: c, values: units.map((u) => sum(prod.filter((p) => p.unit === u), k)) })),
      endLabel: (i) => { const a = prod.filter((p) => p.unit === units[i]); return f.int(sum(a, 'area_deployed_ha')) + '/' + f.int(sum(a, 'area_plan_ha')) + ' ha'; } });
    const days = [...new Set(inP.map((r) => r.date))].sort();
    V.vbar($('sx-day'), { cats: days, labels: days.map(f.dmy), fmt: f.d1, aria: 'Sản lượng nhập kho quy khô theo ngày', emptyMsg: 'Không có phiếu thu mua trong kỳ',
      series: [{ name: 'Quy khô (tấn)', color: C.green, values: days.map((d) => sum(inP.filter((r) => r.date === d), 'kg_dry') / 1000) }],
      tipHead: (i) => V.wd(days[i]) + ' ' + f.dmyy(days[i]) });
    const mua = prodAll.filter((p) => p.season === 'Mùa 2026');
    const vars = [...new Set(mua.map((p) => p.variety))].sort();
    V.table('sx-var', vars.map((v) => {
      const p = mua.filter((r) => r.variety === v), i = inAll.filter((r) => r.variety === v), planT = sum(p, 'output_plan_t'), dry = sum(i, 'kg_dry') / 1000;
      return { variety: v, crop: p[0].crop, plan: planT, dry, pct: planT ? dry / planT : 0,
        dryer: sum(i.filter((r) => r.status === 'Đã chuyển lò sấy'), 'kg_in') / 1000, coming: sum(i.filter((r) => r.status === 'Đang về kho'), 'kg_out') / 1000 };
    }), [
      { k: 'variety' }, { k: 'crop' }, { k: 'plan', n: 1, f: (r) => f.int(r.plan) }, { k: 'dry', n: 1, f: (r) => f.int(r.dry) },
      { k: 'pct', n: 1, node: (r) => { const s = document.createElement('span'); const b = document.createElement('i'); b.className = 'vs-bar'; b.style.width = Math.round(Math.min(1, r.pct) * 60) + 'px'; s.append(b, f.pct(r.pct)); return s; } },
      { k: 'dryer', n: 1, f: (r) => f.int(r.dryer) }, { k: 'coming', n: 1, f: (r) => f.int(r.coming) },
    ], { sort: 4, dir: -1 });
    V.table('sx-intake', inP, [
      { k: 'intake_id' }, { k: 'date', f: (r) => f.dmyy(r.date), v: (r) => r.date }, { k: 'variety' }, { k: 'unit' }, { k: 'warehouse' },
      { k: 'kg_out', n: 1, f: (r) => f.int(r.kg_out) }, { k: 'kg_in', n: 1, f: (r) => f.int(r.kg_in) }, { k: 'kg_dry', n: 1, f: (r) => f.int(r.kg_dry) },
      { k: 'kg_diff', n: 1, f: (r) => f.int(r.kg_diff) }, { k: 'status' },
    ], { key: 'intake_id', q: 'sx-q', count: 'sx-n', sort: 1, dir: -1 });
  }

  // ─────────────── Đơn đặt hàng (BC8) ───────────────
  function donHang(x) {
    const age = {}; (V.data('orders_aging').data || []).forEach((r) => { age[r.order_id] = r; });
    const ords = V.rows('orders').filter((o) => V.pass(o, x, { dept: 'dept', persons: ['owner'] }) && (o.status !== 'Hoàn thành' || V.inR(o.order_date, x)));
    const open = ords.filter((o) => o.status !== 'Hoàn thành');
    const B = ['Quá hạn', 'Đến hạn trong 30 ngày', 'Từ 30 đến 60 ngày', 'Trên 60 ngày'], BC = [C.late, C.soon, C.doing, C.green];
    const cnt = B.map((b) => open.filter((o) => age[o.order_id] && age[o.order_id].bucket === b).length);
    const remain = sum(open, 'remaining_kg') / 1000;
    setLead('dhg-lead', [outOfScope(x, ['Khối Sản xuất']) || `${f.int(open.length)} đơn chưa giao xong, còn ${f.t(remain)}; ${f.int(cnt[0])} đơn đã quá hạn giao.`]);
    V.kpis($('dhg-kpis'), [
      { l: 'Đơn đang mở', v: f.int(open.length), s: `${f.int(ords.length)} đơn trong danh sách` },
      { l: 'Khối lượng chưa giao', v: f.t(remain), tone: 'gold' },
      { l: 'Đơn quá hạn giao', v: f.int(cnt[0]), tone: 'bad', vc: cnt[0] ? C.late : '' },
      { l: 'Đến hạn trong 30 ngày', v: f.int(cnt[1]), tone: 'warn' },
      { l: 'Tỷ lệ giao đủ', v: f.pct(sum(ords, 'qty_kg') ? sum(ords, 'delivered_kg') / sum(ords, 'qty_kg') : NaN), s: 'khối lượng đã giao / đặt' },
    ]);
    V.vbar($('dhg-age'), { cats: B, labels: ['Quá hạn', '≤ 30 ngày', '30–60', '> 60'], stacked: true, fmt: f.int, aria: 'Số đơn chưa giao xong theo nhóm hạn',
      series: B.map((b, k) => ({ name: b, color: BC[k], values: B.map((_, i) => (i === k ? cnt[k] : 0)) })), emptyMsg: 'Không có đơn đang mở' });
    const sup = [...new Set(ords.map((o) => o.supplier))].sort();
    V.hbar($('dhg-sup'), { cats: sup, labels: sup, stacked: true, fmt: f.d1, row: 40,
      series: [{ name: 'Đã giao (tấn)', color: C.green, values: sup.map((s) => sum(ords.filter((o) => o.supplier === s), 'delivered_kg') / 1000) },
        { name: 'Còn lại (tấn)', color: C.gold, values: sup.map((s) => sum(ords.filter((o) => o.supplier === s), 'remaining_kg') / 1000) }] });
    V.table('dhg-table', ords, [
      { k: 'order_id' }, { k: 'doc' }, { k: 'order_date', f: (o) => f.dmyy(o.order_date), v: (o) => o.order_date }, { k: 'variety' }, { k: 'grade' },
      { k: 'qty_kg', n: 1, f: (o) => f.int(o.qty_kg) }, { k: 'delivered_kg', n: 1, f: (o) => f.int(o.delivered_kg) }, { k: 'remaining_kg', n: 1, f: (o) => f.int(o.remaining_kg) },
      { k: 'supplier' }, { k: 'warehouse' }, { k: 'due_date', f: (o) => f.dmyy(o.due_date), v: (o) => o.due_date },
      { k: 'days_left', n: 1, f: (o) => (age[o.order_id] && age[o.order_id].days_left != null ? f.int(age[o.order_id].days_left) : ''), v: (o) => (age[o.order_id] && age[o.order_id].days_left != null ? age[o.order_id].days_left : 9999) },
      { k: 'status', node: (o) => { const b = age[o.order_id] && age[o.order_id].bucket; return V.tag(o.status, o.status === 'Hoàn thành' ? 'ok' : b === 'Quá hạn' ? 'late' : 'soon'); } },
    ], { key: 'order_id', q: 'dhg-q', count: 'dhg-n', sort: 11, dir: 1 });
  }

  // ─────────────── Tài chính ───────────────
  function taiChinh(x) {
    const fin = V.rows('finance').filter((r) => V.pass(r, x, { dept: 'dept' }));
    const inP = fin.filter((r) => V.monthIn(r.month, x));
    const last = inP.length ? inP[inP.length - 1] : fin[fin.length - 1];
    const dl = V.rows('dealers').filter((d) => V.pass(d, x, { dept: () => ['Khối Kinh doanh', 'Tài chính – Kế toán'], region: 'region', persons: ['owner'] }));
    const ar = sum(dl, 'ar_bn'), ar60 = sum(dl, 'ar_61_90') + sum(dl, 'ar_90');
    const rev = sum(inP, 'revenue_bn'), pbt = sum(inP, 'profit_bt_bn'), net = sum(inP, 'cash_in_bn') - sum(inP, 'cash_out_bn');
    setLead('tc-lead', [outOfScope(x, ['Tài chính – Kế toán', 'Khối Kinh doanh']) || `Kỳ ${V.periodLabel(x)}: doanh thu ${f.bn(rev)}, lợi nhuận trước thuế ${f.bn(pbt)}, dòng tiền thuần ${f.bn(net)}. Công nợ trên 60 ngày ${f.bn(ar60)}.`]);
    V.kpis($('tc-kpis'), [
      { l: 'Doanh thu', v: f.bn(rev), delta: sum(inP, 'revenue_plan_bn') ? rev / sum(inP, 'revenue_plan_bn') - 1 : null, s: 'so với kế hoạch' },
      { l: 'LN trước thuế', v: f.bn(pbt), tone: 'gold', s: 'biên ' + f.pct(rev ? pbt / rev : NaN) },
      { l: 'Dòng tiền thuần', v: f.bn(net), tone: net < 0 ? 'bad' : '', s: 'thu trừ chi trong kỳ' },
      { l: 'Dư nợ vay', v: f.bn(last && last.loan_balance_bn), tone: 'brown', s: last ? 'cuối ' + f.mon(last.month) : '' },
      { l: 'Tiền gửi', v: f.bn(last && last.deposit_balance_bn), s: last ? 'cuối ' + f.mon(last.month) : '' },
      { l: 'Công nợ phải thu', v: f.bn(ar), tone: 'warn', s: `${f.pct(ar ? ar60 / ar : NaN)} trên 60 ngày` },
    ]);
    const m = fin.map((r) => r.month), lab = m.map(f.mon), hl = m.map((q) => V.monthIn(q, x)), tip = (i) => 'Tháng ' + m[i].slice(5, 7) + '/' + m[i].slice(0, 4);
    V.vbar($('tc-pl'), { cats: m, labels: lab, fmt: f.d1, hl, tipHead: tip, h: 250,
      series: [{ name: 'Doanh thu', color: C.green, values: fin.map((r) => r.revenue_bn) }, { name: 'LN trước thuế', color: C.brown2, values: fin.map((r) => r.profit_bt_bn) }],
      line: { name: 'Kế hoạch doanh thu', color: C.gold, values: fin.map((r) => r.revenue_plan_bn) } });
    V.vbar($('tc-cash'), { cats: m, labels: lab, fmt: f.d1, hl, tipHead: tip,
      series: [{ name: 'Tiền thu', color: C.green, values: fin.map((r) => r.cash_in_bn) }, { name: 'Tiền chi', color: C.late, values: fin.map((r) => r.cash_out_bn) }] });
    V.lines($('tc-bal'), { cats: m, labels: lab, fmt: f.d1,
      series: [{ name: 'Dư nợ vay', color: C.late, values: fin.map((r) => r.loan_balance_bn) }, { name: 'Tiền gửi', color: C.doing, values: fin.map((r) => r.deposit_balance_bn) }] });
    const regs = [...new Set(dl.map((d) => d.region))];
    const AB = [['0–30 ngày', 'ar_0_30', C.green], ['31–60 ngày', 'ar_31_60', C.soon], ['61–90 ngày', 'ar_61_90', C.brown2], ['Trên 90 ngày', 'ar_90', C.late]];
    V.legend('tc-ar-legend', AB.map((a) => [a[2], a[0]]));
    V.hbar($('tc-ar'), { cats: regs, labels: regs, stacked: true, fmt: f.d1, row: 40,
      series: AB.map(([n, k, c]) => ({ name: n, color: c, values: regs.map((r) => sum(dl.filter((d) => d.region === r), k)) })) });
    V.table('tc-ar-table', dl.filter((d) => Number(d.ar_bn) > 0), [
      { k: 'dealer_id' }, { k: 'dealer' }, { k: 'region' }, { k: 'ar_bn', n: 1, f: (d) => f.d1(d.ar_bn) },
      { k: 'ar_0_30', n: 1, f: (d) => f.d1(d.ar_0_30) }, { k: 'ar_31_60', n: 1, f: (d) => f.d1(d.ar_31_60) },
      { k: 'ar_61_90', n: 1, f: (d) => f.d1(d.ar_61_90) }, { k: 'ar_90', n: 1, f: (d) => f.d1(d.ar_90) },
    ], { key: 'dealer_id', sort: 7, dir: -1 });
  }

  // ─────────────── Chất lượng (BC10) ───────────────
  function chatLuong(x) {
    const q = V.rows('quality').filter((r) => V.pass(r, x, { dept: 'dept', persons: ['owner'] }) && V.inR(r.test_date, x));
    const okN = q.filter((r) => r.result === 'Đạt').length, bad = q.filter((r) => r.result !== 'Đạt');
    const avg = (k) => (q.length ? sum(q, k) / q.length : NaN);
    setLead('cl-lead', [outOfScope(x, ['Khối Sản xuất']) || `Kỳ ${V.periodLabel(x)}: ${f.int(q.length)} lô kiểm nghiệm, ${f.pct(q.length ? okN / q.length : NaN)} đạt; ${f.int(bad.length)} lô cần xử lý (${f.t(sum(bad, 'kg') / 1000)}).`]);
    V.kpis($('cl-kpis'), [
      { l: 'Lô kiểm nghiệm', v: f.int(q.length), s: 'trong kỳ' },
      { l: 'Tỷ lệ đạt', v: f.pct(q.length ? okN / q.length : NaN), tone: 'gold' },
      { l: 'Nảy mầm bình quân', v: f.d1(avg('germination_pct')) + '%', s: 'ngưỡng 85%' },
      { l: 'Độ ẩm bình quân', v: f.d1(avg('moisture_pct')) + '%', tone: 'brown', s: 'ngưỡng 13,5%' },
      { l: 'Khối lượng không đạt', v: f.t(sum(bad, 'kg') / 1000), tone: 'bad', vc: bad.length ? C.late : '' },
    ]);
    const vars = [...new Set(q.map((r) => r.variety))].sort();
    V.hbar($('cl-var'), { cats: vars, labels: vars, stacked: true, fmt: f.int, emptyMsg: 'Không có lô kiểm nghiệm trong kỳ',
      series: [{ name: 'Đạt', color: C.green, values: vars.map((v) => q.filter((r) => r.variety === v && r.result === 'Đạt').length) },
        { name: 'Không đạt', color: C.late, values: vars.map((v) => q.filter((r) => r.variety === v && r.result !== 'Đạt').length) }] });
    const whs = [...new Set(q.map((r) => r.warehouse))].sort();
    V.hbar($('cl-wh'), { cats: whs, labels: whs, fmt: (v) => f.d1(v) + '%', max: 100, emptyMsg: 'Không có lô kiểm nghiệm trong kỳ',
      series: [{ name: 'Nảy mầm bình quân', color: C.green, values: whs.map((w) => { const a = q.filter((r) => r.warehouse === w); return sum(a, 'germination_pct') / a.length; }) }] });
    V.table('cl-table', bad, [
      { k: 'lot_id' }, { k: 'test_date', f: (r) => f.dmyy(r.test_date), v: (r) => r.test_date }, { k: 'variety' }, { k: 'grade' }, { k: 'warehouse' }, { k: 'storage' },
      { k: 'kg', n: 1, f: (r) => f.int(r.kg) }, { k: 'germination_pct', n: 1, f: (r) => f.d1(r.germination_pct) }, { k: 'moisture_pct', n: 1, f: (r) => f.d1(r.moisture_pct) },
      { k: 'impurity_pct', n: 1, f: (r) => f.d1(r.impurity_pct) }, { k: 'result', node: (r) => V.tag(r.result, r.result === 'Đạt' ? 'ok' : 'late') },
    ], { key: 'lot_id', sort: 7, dir: 1 });
  }

  // ─────────────── Nhân sự ───────────────
  function nhanSu(x) {
    const hr = V.rows('hr').filter((r) => V.pass(r, x, { dept: 'dept' }));
    const inP = hr.filter((r) => V.monthIn(r.month, x));
    const lastM = inP.length ? inP.map((r) => r.month).sort().pop() : null;
    const atEnd = hr.filter((r) => r.month === lastM);
    const head = sum(atEnd, 'headcount'), joins = sum(inP, 'joins'), leaves = sum(inP, 'leaves');
    const months = [...new Set(hr.map((r) => r.month))].sort();
    const avgHead = inP.length ? sum(inP, 'headcount') / new Set(inP.map((r) => r.month)).size : 0;
    const tasks = taskBase(x).filter((t) => t.status === 'Hoàn thành' && V.inR(t.deadline, x));
    setLead('ns-lead', [`Kỳ ${V.periodLabel(x)}: ${f.int(head)} nhân sự, tuyển mới ${f.int(joins)}, nghỉ việc ${f.int(leaves)}; ${f.int(sum(inP, 'training_hours'))} giờ đào tạo.`]);
    V.kpis($('ns-kpis'), [
      { l: 'Tổng nhân sự', v: f.int(head), s: lastM ? 'cuối ' + f.mon(lastM) : '' },
      { l: 'Tuyển mới', v: f.int(joins), s: 'trong kỳ' },
      { l: 'Nghỉ việc', v: f.int(leaves), tone: 'warn', s: 'tỷ lệ ' + f.pct(avgHead ? leaves / avgHead : NaN) },
      { l: 'Giờ đào tạo', v: f.int(sum(inP, 'training_hours')), tone: 'gold', s: f.d1(head ? sum(inP, 'training_hours') / head : NaN) + ' giờ/người' },
      { l: 'Việc xong đúng hạn', v: f.pct(tasks.length ? tasks.filter((t) => t.track === ST[0]).length / tasks.length : NaN), tone: 'brown', s: 'báo cáo giao việc' },
    ]);
    V.vbar($('ns-move'), { cats: months, labels: months.map(f.mon), fmt: f.int, hl: months.map((m) => V.monthIn(m, x)), tipHead: (i) => 'Tháng ' + months[i].slice(5, 7) + '/' + months[i].slice(0, 4),
      series: [{ name: 'Tuyển mới', color: C.green, values: months.map((m) => sum(hr.filter((r) => r.month === m), 'joins')) }, { name: 'Nghỉ việc', color: C.late, values: months.map((m) => sum(hr.filter((r) => r.month === m), 'leaves')) }] });
    const depts = atEnd.slice().sort((a, b) => b.headcount - a.headcount).map((r) => r.dept);
    V.hbar($('ns-dept'), { cats: depts, labels: depts, fmt: f.int, series: [{ name: 'Nhân sự', color: C.green, values: depts.map((d) => sum(atEnd.filter((r) => r.dept === d), 'headcount')) }],
      hl: x.dept ? depts.map((d) => d === x.dept) : null, onClick: (i) => dash.setParams({ dept: x.dept === depts[i] ? null : depts[i], person: null }) });
    const td = [...new Set(inP.map((r) => r.dept))].sort((a, b) => sum(inP.filter((r) => r.dept === b), 'training_hours') - sum(inP.filter((r) => r.dept === a), 'training_hours'));
    V.hbar($('ns-train'), { cats: td, labels: td, fmt: f.int, series: [{ name: 'Giờ đào tạo', color: C.gold, values: td.map((d) => sum(inP.filter((r) => r.dept === d), 'training_hours')) }] });
    const tdep = [...new Set(tasks.map((t) => t.dept))];
    V.hbar($('ns-task'), { cats: tdep, labels: tdep, fmt: f.pct, max: 1, emptyMsg: 'Chưa có việc hoàn thành trong kỳ',
      series: [{ name: 'Xong đúng hạn', color: C.green, values: tdep.map((d) => { const a = tasks.filter((t) => t.dept === d); return a.filter((t) => t.track === ST[0]).length / a.length; }) }],
      endLabel: (i) => { const a = tasks.filter((t) => t.dept === tdep[i]); return f.pct(a.filter((t) => t.track === ST[0]).length / a.length) + ` (${a.length} việc)`; } });
  }

  // ─────────────── Danh mục báo cáo ───────────────
  function danhMuc() {
    const cat = V.rows('catalog');
    const grp = (re) => cat.filter((r) => re.test(r.scope)).length;
    V.kpis($('dm-kpis'), [
      { l: 'Báo cáo khảo sát', v: f.int(cat.length) },
      { l: 'Trong phạm vi', v: f.int(grp(/^Trong phạm vi/)), s: 'làm được ngay' },
      { l: 'Có khả năng', v: f.int(grp(/^Có khả năng/)), tone: 'gold', s: 'cần số hoá quy trình trên Base' },
      { l: 'Khó', v: f.int(grp(/^Khó/)), tone: 'warn', s: 'cần làm rõ nguồn dữ liệu' },
      { l: 'Ngoài phạm vi', v: f.int(grp(/^Ngoài phạm vi/)), tone: 'bad', s: 'Vinaseed tự thực hiện' },
    ]);
    V.table('dm-table', cat, [
      { k: 'code' }, { k: 'report' }, { k: 'users' }, { k: 'frequency' }, { k: 'source' },
      { k: 'scope', node: (r) => V.tag(r.scope, /^Trong/.test(r.scope) ? 'ok' : /^Có khả năng/.test(r.scope) ? 'gold' : /^Khó/.test(r.scope) ? 'soon' : 'late') }, { k: 'tab' },
    ], { key: 'code', q: 'dm-q', count: 'dm-n' });
  }

  const R = { 'dieu-hanh': dieuHanh, 'kinh-doanh': kinhDoanh, 'dai-ly': daiLy, 'san-xuat': sanXuat, 'don-hang': donHang, 'tai-chinh': taiChinh, 'chat-luong': chatLuong, 'nhan-su': nhanSu, 'danh-muc': danhMuc };
  function draw() {
    V.drawFilters();
    const page = V.current(), st = V.state(NEED[page]);
    if (st !== 'ok') return pageState(page, st);
    R[page](V.F());
  }
  V.onShow.push(draw);
  dash.onData(draw);
  const named = location.hash.slice(1);
  if (named && R[named]) V.show(named, false);
})();
