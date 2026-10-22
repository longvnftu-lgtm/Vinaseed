"""Sinh bộ dữ liệu MẪU cho Executive Dashboard Vinaseed (bản link online) → dashboard/data/*.json

- Điều hành: công việc, dự án, lịch công tác, tờ trình (dùng lại generate_demo_data.py).
- Các góc nhìn theo phiếu khảo sát hệ thống dữ liệu (BC1–BC10, tài chính, HCNS):
  kinh doanh, đại lý & ghé thăm, sản xuất, thu mua nhập kho, đơn đặt hàng,
  tài chính tháng, chất lượng lô giống, nhân sự, danh mục báo cáo.

Toàn bộ là số liệu mẫu, không phải số liệu thật của Vinaseed. Ngày chốt: 19/10/2026.

    python3 dashboard/generate_exec_data.py
"""
import datetime as dt
import json
import os
import random

import generate_demo_data as g

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")
rnd = random.Random(1907)
TODAY = g.TODAY
MONTHS = [f"2026-{m:02d}" for m in range(1, 13)]
CUR = TODAY.strftime("%Y-%m")
iso = lambda x: x.isoformat()

EXTRA_PEOPLE = [
    ("KD4", "Trần Văn Bình", "Nhân viên thị trường", "Khối Kinh doanh", False),
    ("KD5", "Nguyễn Thị Lan", "Nhân viên thị trường", "Khối Kinh doanh", False),
    ("KD6", "Lê Minh Tâm", "Nhân viên thị trường", "Khối Kinh doanh", False),
    ("SX4", "Phạm Đức Anh", "Cán bộ phụ trách vùng", "Khối Sản xuất", False),
    ("QL1", "Dương Thị Thu", "Chuyên viên quản lý chất lượng", "Khối Sản xuất", False),
]
REGIONS = {"Miền Bắc": ("KD1", "KD4"), "Miền Trung": ("KD2", "KD5"), "Miền Nam": ("KD3", "KD6")}
SEASON = [1.5, 1.35, 0.7, 0.6, 0.85, 1.25, 1.3, 0.9, 0.75, 1.15, 1.1, 0.95]
VARIETIES = [("VS-L01", "Lúa thuần"), ("VS-L02", "Lúa thuần"), ("VS-L03", "Lúa thuần"), ("VS-H01", "Lúa lai"), ("VS-N01", "Ngô lai"), ("VS-N02", "Ngô lai")]
UNITS = [("P.SX 1", "Đồng bằng sông Hồng", "SX1"), ("P.SX 2", "Đồng bằng sông Hồng", "SX2"), ("P.SX 3", "Bắc Trung Bộ", "SX2"),
         ("P.SX 4", "Bắc Trung Bộ", "SX4"), ("P.SX 5", "Tây Nguyên", "SX3"), ("P.SX 6", "Đồng bằng sông Cửu Long", "SX4"), ("P.SX 7", "Đồng bằng sông Cửu Long", "SX3")]
WAREHOUSES = ["Kho Thái Bình", "Kho Hà Nam", "Kho Nghệ An", "Kho Đắk Lắk", "Kho Cần Thơ"]
WH_OF = {"Đồng bằng sông Hồng": "Kho Thái Bình", "Bắc Trung Bộ": "Kho Nghệ An", "Tây Nguyên": "Kho Đắk Lắk", "Đồng bằng sông Cửu Long": "Kho Cần Thơ"}


def sales():
    products = [("Lúa giống thuần", 52, 24, 0.032), ("Lúa giống lai", 22, 31, 0.095), ("Ngô giống", 17, 28, 0.11), ("Hạt giống rau", 6, 38, 0.6)]
    scale = {"Miền Bắc": 1.0, "Miền Trung": 0.62, "Miền Nam": 0.78}
    rows = []
    for i, m in enumerate(MONTHS):
        for reg, (mgr, _) in REGIONS.items():
            for prod, base, margin, price in products:
                plan = round(base * scale[reg] * SEASON[i], 1)
                actual = vol = mg = None
                if m <= CUR:
                    f = rnd.uniform(0.86, 1.09) * (0.85 if reg == "Miền Trung" and m >= "2026-08" else 1)
                    if m == CUR:
                        f *= TODAY.day / 31
                    actual = round(plan * f, 1)
                    vol = round(actual / price)
                    mg = round(margin + rnd.uniform(-2.5, 2.5), 1)
                rows.append(dict(id=f"{m}|{reg}|{prod}", month=m, region=reg, product=prod, owner=mgr, dept="Khối Kinh doanh",
                                 plan_bn=plan, actual_bn=actual, volume_t=vol, margin_pct=mg))
    return rows


PROVINCES = {"Miền Bắc": ["Thái Bình", "Nam Định", "Hà Nam", "Hải Dương", "Bắc Giang", "Phú Thọ", "Thanh Hoá"],
             "Miền Trung": ["Nghệ An", "Hà Tĩnh", "Quảng Bình", "Quảng Nam", "Bình Định", "Đắk Lắk"],
             "Miền Nam": ["An Giang", "Đồng Tháp", "Cần Thơ", "Kiên Giang", "Long An", "Sóc Trăng"]}


def dealers_and_visits():
    dealers, visits, n = [], [], 0
    for reg, provs in PROVINCES.items():
        mgr, rep = REGIONS[reg]
        for prov in provs:
            for k in range(rnd.choice([2, 2, 3])):
                n += 1
                target = round(rnd.uniform(5, 26), 1)
                rev = round(target * rnd.uniform(0.6, 1.12) * (0.88 if reg == "Miền Trung" else 1), 1)
                recv = rev * rnd.uniform(0.06, 0.28)
                w = rnd.choice([(1, 0, 0, 0), (0.8, 0.2, 0, 0), (0.6, 0.25, 0.15, 0), (0.5, 0.2, 0.15, 0.15), (0.9, 0.1, 0, 0)])
                status = rnd.choices(["Chính thức", "Dự thảo", "Ngừng hoạt động"], [8, 2, 1])[0]
                dealers.append(dict(dealer_id=f"DL-{n:03d}", dealer=f"Đại lý cấp 1 · {prov} {k + 1:02d}", province=prov, region=reg,
                                    owner=rep, dept="Khối Kinh doanh", status=status, target_ytd_bn=target, revenue_ytd_bn=rev,
                                    orders_ytd=rnd.randint(4, 40), sku=rnd.randint(3, 22),
                                    ar_bn=round(recv, 2), ar_0_30=round(recv * w[0], 2), ar_31_60=round(recv * w[1], 2),
                                    ar_61_90=round(recv * w[2], 2), ar_90=round(recv * w[3], 2)))
    v = 0
    by_rep = {}
    for d_ in dealers:
        by_rep.setdefault(d_["owner"], []).append(d_)
    day = dt.date(2026, 9, 1)
    while day <= TODAY:
        if day.weekday() < 6:
            for rep, ds in by_rep.items():
                for d_ in rnd.sample(ds, k=min(len(ds), rnd.randint(3, 6))):
                    if d_["status"] == "Ngừng hoạt động":
                        continue
                    v += 1
                    in_route = rnd.random() < 0.82
                    visits.append(dict(visit_id=f"VT-{v:04d}", date=iso(day), staff=rep, dealer_id=d_["dealer_id"], dealer=d_["dealer"],
                                       province=d_["province"], region=d_["region"], dept="Khối Kinh doanh", in_route=in_route,
                                       minutes=rnd.randint(8, 55), checkin_m=rnd.randint(5, 180), km=round(rnd.uniform(4, 38), 1),
                                       has_order=rnd.random() < 0.38))
        day += dt.timedelta(days=1)
    for d_ in dealers:
        vs = [x for x in visits if x["dealer_id"] == d_["dealer_id"]]
        d_["visits_in_route"] = sum(1 for x in vs if x["in_route"])
        d_["visits_off_route"] = sum(1 for x in vs if not x["in_route"])
        d_["last_visit"] = max((x["date"] for x in vs), default=None)
    return dealers, visits


def production():
    rows, n = [], 0
    for unit, reg, owner in UNITS:
        for var, crop in rnd.sample(VARIETIES, k=rnd.randint(2, 4)):
            for season, hm in (("Mùa 2026", "2026-10"), ("Thu Đông 2026", "2027-01")):
                if crop == "Ngô lai" and season == "Mùa 2026" and rnd.random() < 0.5:
                    continue
                n += 1
                area = rnd.randint(30, 160)
                yield_t = 5.8 if crop.startswith("Lúa") else 4.9
                fail = round(area * (rnd.uniform(0.04, 0.14) if reg == "Bắc Trung Bộ" else rnd.uniform(0, 0.05)))
                deployed = area - fail
                if season == "Mùa 2026":
                    split = (0, 0, deployed)  # đã gieo, đang thu hoạch/triển khai xong
                    delivered, sown, doing = 0, deployed, 0
                else:
                    delivered = round(deployed * rnd.uniform(0.1, 0.3))
                    sown = round(deployed * rnd.uniform(0.3, 0.6))
                    doing = deployed - delivered - sown
                rows.append(dict(plot_id=f"SX-{n:03d}", season=season, unit=unit, region=reg, variety=var, crop=crop, owner=owner,
                                 dept="Khối Sản xuất", area_plan_ha=area, area_deployed_ha=deployed, ha_delivered=delivered,
                                 ha_sown=sown, ha_doing=doing, ha_failed=fail, output_plan_t=round(area * yield_t),
                                 output_expected_t=round(deployed * yield_t * rnd.uniform(0.9, 1.05)), harvest_month=hm))
    return rows


def intake(prod):
    rows, n = [], 0
    mua = [p for p in prod if p["season"] == "Mùa 2026"]
    day = dt.date(2026, 9, 10)
    while day <= TODAY:
        for p in rnd.sample(mua, k=min(len(mua), rnd.randint(2, 5))):
            n += 1
            out_kg = rnd.randint(10, 60) * 1000
            in_kg = round(out_kg * rnd.uniform(0.95, 1.0))
            dry = round(in_kg * rnd.uniform(0.78, 0.86))
            age = (TODAY - day).days
            status = "Đang về kho" if age <= 1 else "Đã chuyển lò sấy" if age <= 5 and rnd.random() < 0.5 else "Đã nhập kho"
            rows.append(dict(intake_id=f"NK-{n:04d}", date=iso(day), plot_id=p["plot_id"], variety=p["variety"], crop=p["crop"],
                             unit=p["unit"], region=p["region"], owner=p["owner"], dept="Khối Sản xuất", warehouse=WH_OF[p["region"]],
                             kg_out=out_kg, kg_in=in_kg if status != "Đang về kho" else 0, kg_dry=dry if status == "Đã nhập kho" else 0,
                             kg_diff=(in_kg - out_kg) if status != "Đang về kho" else 0, status=status))
        day += dt.timedelta(days=1)
    return rows


def orders():
    rows = []
    for n in range(1, 61):
        od = TODAY - dt.timedelta(days=rnd.randint(5, 140))
        due = od + dt.timedelta(days=rnd.randint(20, 90))
        var, crop = rnd.choice(VARIETIES)
        qty = rnd.choice([500, 800, 1200, 2000, 3000, 4000, 6000])
        if due < TODAY:
            done = rnd.random() < 0.75
        else:
            done = rnd.random() < 0.2
        delivered = qty if done else round(qty * rnd.choice([0, 0, 0.3, 0.5, 0.7]))
        status = "Hoàn thành" if done else ("Đang giao" if delivered else "Chưa giao")
        rows.append(dict(order_id=f"DH-{2600 + n}", doc=f"CV {100 + n}/26", order_date=iso(od), variety=var, crop=crop,
                         grade=rnd.choice(["XN", "NC", "F1"]), pack="Bao 40 kg", qty_kg=qty, delivered_kg=delivered,
                         remaining_kg=qty - delivered, supplier=rnd.choice(["Công ty con A", "Công ty con B", "Công ty con C"]),
                         buyer=rnd.choice(["Văn phòng công ty", "Chi nhánh Miền Trung", "Chi nhánh Miền Nam"]),
                         warehouse=rnd.choice(WAREHOUSES), due_date=iso(due), owner="SX3", dept="Khối Sản xuất",
                         price_vnd_kg=rnd.choice([18000, 25000, 42000, 65000]), status=status))
    return rows


def finance(sales_rows):
    rows = []
    loan, dep = 420.0, 180.0
    for m in MONTHS[:10]:
        rev = sum(r["actual_bn"] or 0 for r in sales_rows if r["month"] == m)
        plan = sum(r["plan_bn"] for r in sales_rows if r["month"] == m)
        cogs = rev * rnd.uniform(0.7, 0.75)
        opex = rev * rnd.uniform(0.11, 0.14)
        cash_in = rev * rnd.uniform(0.85, 1.05)
        cash_out = (cogs + opex) * rnd.uniform(0.9, 1.1)
        loan = max(150, loan + rnd.uniform(-40, 35))
        dep = max(60, dep + (cash_in - cash_out) * 0.3)
        rows.append(dict(month=m, dept="Tài chính – Kế toán", revenue_bn=round(rev, 1), revenue_plan_bn=round(plan, 1),
                         cogs_bn=round(cogs, 1), gross_profit_bn=round(rev - cogs, 1), opex_bn=round(opex, 1),
                         profit_bt_bn=round(rev - cogs - opex, 1), cash_in_bn=round(cash_in, 1), cash_out_bn=round(cash_out, 1),
                         loan_balance_bn=round(loan, 1), deposit_balance_bn=round(dep, 1)))
    return rows


def quality(prod):
    rows = []
    for n in range(1, 91):
        p = rnd.choice(prod)
        test = TODAY - dt.timedelta(days=rnd.randint(0, 75))
        germ = round(rnd.triangular(81, 98, 93), 1)
        moist = round(rnd.triangular(11.2, 14.2, 12.6), 1)
        imp = round(rnd.triangular(0, 1.4, 0.4), 2)
        ok = germ >= 85 and moist <= 13.5 and imp <= 1.0
        rows.append(dict(lot_id=f"LG-{test:%y%m}-{n:03d}", test_date=iso(test), variety=p["variety"], crop=p["crop"],
                         grade=rnd.choice(["NC", "XN", "F1"]), unit=p["unit"], region=p["region"], owner="QL1", dept="Khối Sản xuất",
                         storage=rnd.choice(["Kho lạnh", "Kho mát", "Kho thường"]), warehouse=WH_OF[p["region"]],
                         kg=rnd.randint(4, 25) * 1000, germination_pct=germ, moisture_pct=moist, impurity_pct=imp,
                         result="Đạt" if ok else "Không đạt"))
    return rows


def hr():
    rows = []
    base = {d: c for d, c in zip(g.DEPTS, [8, 210, 160, 38, 45, 22, 30])}
    for d_, hc in base.items():
        for m in MONTHS[:10]:
            j, l = rnd.randint(0, max(1, hc // 40)), rnd.randint(0, max(1, hc // 50))
            hc += j - l
            rows.append(dict(id=f"{m}|{d_}", month=m, dept=d_, headcount=hc, joins=j, leaves=l,
                             training_hours=round(hc * rnd.uniform(0.4, 2.2))))
    return rows


# Danh mục báo cáo theo phiếu khảo sát (phần "02. Biểu mẫu khảo sát"), kèm tab hiển thị trên dashboard
CATALOG = [
    ("R01", "Tài chính kế toán", "Cân đối kế toán", "Hàng ngày", "Fast", "Trong phạm vi", "Tài chính"),
    ("R02", "Tài chính kế toán", "Báo cáo kết quả kinh doanh", "Hàng ngày", "Fast", "Trong phạm vi", "Tài chính"),
    ("R03", "Tài chính kế toán", "Báo cáo lưu chuyển tiền tệ", "Hàng ngày", "Fast", "Trong phạm vi", "Tài chính"),
    ("R04", "Tài chính kế toán", "Thuyết minh BCTC", "Hàng ngày", "Fast", "Ngoài phạm vi", "—"),
    ("R05", "TCKT, Kinh doanh, Kế hoạch, Lãnh đạo công ty con", "Bán hàng theo mặt hàng, khách hàng, đơn vị (BC1)", "Hàng ngày", "Fast", "Trong phạm vi", "Kinh doanh"),
    ("R06", "Tài chính kế toán", "Tuổi nợ khách hàng", "Hàng tháng", "Excel → Fast", "Có khả năng (Workflow công nợ)", "Tài chính"),
    ("R07", "Tài chính kế toán", "Tiền vay", "Hàng tháng", "Fast", "Có khả năng", "Tài chính"),
    ("R08", "Tài chính kế toán", "Tiền gửi", "Hàng tháng", "Excel → Fast", "Có khả năng", "Tài chính"),
    ("R09", "Tài chính kế toán", "Dòng tiền", "Hàng ngày", "Excel → Fast", "Có khả năng (Finance)", "Tài chính"),
    ("R10", "Kinh doanh, Marketing", "Cự ly di chuyển (BC2)", "Hàng tuần", "CRM & DMS", "Trong phạm vi", "Đại lý & thị trường"),
    ("R11", "Kinh doanh, Marketing", "Đại lý (BC3)", "Hàng tuần", "CRM & DMS", "Trong phạm vi", "Đại lý & thị trường"),
    ("R12", "Kinh doanh, Marketing", "Ghé thăm đại lý (BC4)", "Hàng tuần", "CRM & DMS", "Trong phạm vi", "Đại lý & thị trường"),
    ("R13", "TCKT, Kinh doanh, Kế hoạch, Lãnh đạo công ty con", "Tồn kho theo đơn vị (BC5)", "Hàng ngày", "Fast", "Khó", "—"),
    ("R14", "Sản xuất, Kế hoạch, Ban lãnh đạo", "Thu mua (BC6)", "Hàng ngày", "Excel", "Trong phạm vi (Workflow thu mua)", "Sản xuất & thu mua"),
    ("R15", "Sản xuất, Kế hoạch, Ban lãnh đạo", "Tiến độ về kho (BC7)", "Hàng ngày", "Excel", "Trong phạm vi (Workflow nhập kho)", "Sản xuất & thu mua"),
    ("R16", "TCKT, Kinh doanh, Kế hoạch, Lãnh đạo công ty con", "Theo dõi đơn đặt hàng (BC8)", "Hàng ngày", "Excel", "Trong phạm vi (Workflow thu mua)", "Đơn đặt hàng"),
    ("R17", "Sản xuất, Kế hoạch, Ban lãnh đạo", "Tiến độ sản xuất (BC9)", "Hàng ngày", "Excel", "Trong phạm vi (Workflow sản xuất)", "Sản xuất & thu mua"),
    ("R18", "Hành chính nhân sự", "Báo cáo HCNS", "Hàng tuần", "Excel → Base", "Có khả năng (HRM)", "Nhân sự"),
    ("R19", "Quản lý chất lượng", "Chất lượng tồn kho, lô giống theo kho, giống, vùng (BC10)", "Hàng ngày", "Excel", "Khó", "Chất lượng"),
    ("R20", "Sản xuất, Kế hoạch, Ban lãnh đạo", "Quản lý sản xuất", "Hàng ngày", "Facefarm", "Ngoài phạm vi", "—"),
    ("R21", "Toàn công ty", "Quản lý, lưu trữ văn bản", "Hàng ngày", "Voffice", "Ngoài phạm vi", "—"),
    ("R22", "Hành chính nhân sự", "Giao việc", "Hàng ngày", "Base", "Trong phạm vi", "Điều hành"),
    ("R23", "Hành chính nhân sự", "Hoạt động, số giờ đào tạo", "Hàng tháng", "Base", "Có khả năng", "Nhân sự"),
    ("R24", "Hành chính nhân sự", "Biến động nhân sự", "Hàng tháng", "Base", "Có khả năng", "Nhân sự"),
    ("R25", "R&D", "Khảo nghiệm, công nhận giống", "Hàng tháng", "Base Project", "Có khả năng", "Điều hành"),
]


def main():
    os.makedirs(OUT, exist_ok=True)
    tasks = g.gen_tasks()
    projects = [g.project_metrics(p) for p in g.PROJECTS]
    for p in projects:
        p["milestones"] = json.dumps(p["milestones"], ensure_ascii=False)
        p["risks"] = json.dumps(p["risks"], ensure_ascii=False)
    events, approvals = g.gen_events(), g.gen_approvals()
    s = sales()
    dealers, visits = dealers_and_visits()
    prod = production()
    sets = dict(
        people=[dict(id=p[0], name=p[1], title=p[2], dept=p[3], leader=p[4]) for p in g.PEOPLE + EXTRA_PEOPLE],
        tasks=tasks, projects=projects, events=events, approvals=approvals,
        sales=s, dealers=dealers, visits=visits, production=prod, intake=intake(prod), orders=orders(),
        finance=finance(s), quality=quality(prod), hr=hr(),
        catalog=[dict(code=c[0], users=c[1], report=c[2], frequency=c[3], source=c[4], scope=c[5], tab=c[6]) for c in CATALOG],
    )
    for f in os.listdir(OUT):
        os.remove(os.path.join(OUT, f))
    for k, rows in sets.items():
        with open(os.path.join(OUT, f"{k}.json"), "w", encoding="utf-8") as f:
            json.dump(rows, f, ensure_ascii=False, separators=(",", ":"))
    print({k: len(v) for k, v in sets.items()})


if __name__ == "__main__":
    main()
