"""Sinh dữ liệu demo cho Executive Dashboard Vinaseed → data.js

Dữ liệu là giả lập (tên người, số liệu minh hoạ), mô phỏng đúng các trường mà
Data Warehouse sẽ gom từ Base: Task, Project, Meeting/Booking, BPM.
Thay data.js bằng dữ liệu thật (cùng cấu trúc) là dashboard chạy ngay.

    python3 dashboard/generate_demo_data.py
"""
import datetime as dt
import json
import os
import random

TODAY = dt.date(2026, 10, 19)
rnd = random.Random(2026)


def d(x):
    return x.isoformat()


# ───────────────────────── tổ chức & nhân sự ─────────────────────────
DEPTS = [
    "Ban Tổng giám đốc",
    "Khối Sản xuất",
    "Khối Kinh doanh",
    "Tài chính – Kế toán",
    "Nghiên cứu & Phát triển",
    "Đầu tư – Dự án",
    "Hành chính – Nhân sự",
]

PEOPLE = [
    # id, tên, chức danh, phòng ban, là lãnh đạo (hiện trên lịch công tác)
    ("CT", "Nguyễn Văn An", "Chủ tịch HĐQT", "Ban Tổng giám đốc", True),
    ("TGD", "Phạm Quốc Hưng", "Tổng giám đốc", "Ban Tổng giám đốc", True),
    ("PTGD-SX", "Lê Thanh Tùng", "PTGĐ Sản xuất", "Ban Tổng giám đốc", True),
    ("PTGD-KD", "Đỗ Thu Hà", "PTGĐ Kinh doanh", "Ban Tổng giám đốc", True),
    ("PTGD-TC", "Vũ Minh Khoa", "PTGĐ Tài chính", "Ban Tổng giám đốc", True),
    ("PTGD-RD", "Hoàng Lan Anh", "PTGĐ Nghiên cứu", "Ban Tổng giám đốc", True),
    ("SX1", "Trịnh Văn Nam", "Giám đốc Sản xuất", "Khối Sản xuất", False),
    ("SX2", "Bùi Đức Long", "Trưởng vùng sản xuất", "Khối Sản xuất", False),
    ("SX3", "Ngô Thị Mai", "Chuyên viên kế hoạch SX", "Khối Sản xuất", False),
    ("KD1", "Phan Hải Yến", "Giám đốc Kinh doanh", "Khối Kinh doanh", False),
    ("KD2", "Đặng Quang Huy", "Trưởng kênh đại lý", "Khối Kinh doanh", False),
    ("KD3", "Lý Thu Trang", "Chuyên viên marketing", "Khối Kinh doanh", False),
    ("TC1", "Mai Văn Phúc", "Kế toán trưởng", "Tài chính – Kế toán", False),
    ("TC2", "Cao Thị Ngọc", "Chuyên viên tài chính", "Tài chính – Kế toán", False),
    ("RD1", "Võ Đình Khang", "Trưởng phòng R&D", "Nghiên cứu & Phát triển", False),
    ("RD2", "Hà Thị Linh", "Chuyên viên khảo nghiệm", "Nghiên cứu & Phát triển", False),
    ("DA1", "Tạ Minh Quân", "Trưởng phòng Đầu tư", "Đầu tư – Dự án", False),
    ("DA2", "Lưu Hoàng Sơn", "Chuyên viên dự án", "Đầu tư – Dự án", False),
    ("NS1", "Kiều Thị Hoa", "Trưởng phòng HCNS", "Hành chính – Nhân sự", False),
    ("NS2", "Đinh Văn Toàn", "Chuyên viên hành chính", "Hành chính – Nhân sự", False),
]
P = {p[0]: p for p in PEOPLE}
STAFF = {dep: [p[0] for p in PEOPLE if p[3] == dep and p[0] != "CT"] for dep in DEPTS}

# ───────────────────────── dự án chiến lược ─────────────────────────
PROJECTS = [
    dict(id="VSD26", name="Mở rộng vùng sản xuất lúa giống Thu Đông 2026", dept="Khối Sản xuất", owner="SX1",
         start="2026-09-01", end="2027-03-05", tasks_total=12, tasks_done=4, cost_plan=5_195_000_000,
         revenue_plan=6_000_000_000,
         milestones=[("Hoàn tất ký hợp đồng liên kết 120 hộ", "2026-09-30", None),
                     ("Gieo cấy xong 100% diện tích 450 ha", "2026-10-30", None),
                     ("Đạt kiểm định đồng ruộng", "2026-12-23", None),
                     ("Nhập kho lô hạt giống thương phẩm", "2027-02-05", None)],
         risks=[("Mưa muộn ảnh hưởng thời điểm gieo cấy ở 2 điểm vùng trũng", "Cao"),
                ("Lịch trỗ bố mẹ chưa đồng đều tại điểm sản xuất số 3", "Trung bình"),
                ("Nguy cơ rầy nâu giai đoạn đẻ nhánh", "Trung bình")]),
    dict(id="HTHN2", name="Nhà máy chế biến hạt giống Hitech Hà Nam – giai đoạn 2", dept="Đầu tư – Dự án", owner="DA1",
         start="2026-03-01", end="2027-01-31", tasks_total=26, tasks_done=14, cost_plan=48_000_000_000,
         revenue_plan=0,
         milestones=[("Hoàn thiện nhà xưởng", "2026-07-15", "2026-07-28"),
                     ("Lắp đặt dây chuyền sấy – tách hạt", "2026-10-10", None),
                     ("Chạy thử không tải", "2026-11-20", None),
                     ("Nghiệm thu, đưa vào vận hành", "2027-01-31", None)],
         risks=[("Thiết bị nhập khẩu giao chậm 3 tuần", "Cao"),
                ("Chi phí lắp đặt vượt dự toán 4%", "Trung bình")]),
    dict(id="KN-DX27", name="Khảo nghiệm 3 giống lúa chất lượng cao vụ Đông Xuân", dept="Nghiên cứu & Phát triển", owner="RD1",
         start="2026-08-15", end="2027-05-30", tasks_total=18, tasks_done=8, cost_plan=1_250_000_000,
         revenue_plan=0,
         milestones=[("Chọn điểm khảo nghiệm 6 tỉnh", "2026-09-15", "2026-09-12"),
                     ("Gieo mạ khảo nghiệm", "2026-12-20", None),
                     ("Đánh giá giữa vụ", "2027-03-15", None)],
         risks=[("Thiếu cán bộ theo dõi tại 2 điểm", "Trung bình")]),
    dict(id="DL-MT", name="Mở rộng kênh đại lý cấp 1 miền Trung", dept="Khối Kinh doanh", owner="KD2",
         start="2026-07-01", end="2026-12-31", tasks_total=20, tasks_done=6, cost_plan=2_100_000_000,
         revenue_plan=18_000_000_000,
         milestones=[("Ký 15 đại lý cấp 1 mới", "2026-09-30", None),
                     ("Hội nghị khách hàng miền Trung", "2026-11-10", None),
                     ("Đạt 60% doanh số kế hoạch", "2026-12-31", None)],
         risks=[("Đối thủ giảm giá mạnh tại Nghệ An", "Cao"),
                ("Công nợ đại lý mới vượt hạn mức", "Trung bình")]),
    dict(id="KHO-L", name="Hệ thống kho lạnh bảo quản hạt giống", dept="Đầu tư – Dự án", owner="DA2",
         start="2026-04-01", end="2026-12-15", tasks_total=15, tasks_done=12, cost_plan=12_500_000_000,
         revenue_plan=0,
         milestones=[("Hoàn thiện kho số 1", "2026-08-30", "2026-08-29"),
                     ("Hoàn thiện kho số 2", "2026-11-15", None)],
         risks=[]),
    dict(id="B20", name="Chuyển đổi số quản trị vận hành (Base 2.0)", dept="Hành chính – Nhân sự", owner="NS1",
         start="2026-10-01", end="2027-03-31", tasks_total=10, tasks_done=2, cost_plan=0, revenue_plan=0,
         milestones=[("Chốt phạm vi kiểm thử", "2026-10-25", None),
                     ("Vận hành thử 30 tài khoản", "2026-11-30", None)],
         risks=[("Dữ liệu đầu vào cung cấp chậm", "Trung bình")]),
]


def project_metrics(p):
    s, e = dt.date.fromisoformat(p["start"]), dt.date.fromisoformat(p["end"])
    plan = max(0.0, min(1.0, (TODAY - s).days / max(1, (e - s).days)))
    actual = p["tasks_done"] / p["tasks_total"]
    late_ms = [m for m in p["milestones"]
               if m[2] is None and dt.date.fromisoformat(m[1]) < TODAY]
    high_risk = sum(1 for r in p["risks"] if r[1] == "Cao")
    if late_ms or actual < plan - 0.1:
        status = "Chậm tiến độ"
    elif high_risk:
        status = "Có rủi ro"
    else:
        status = "Đúng tiến độ"
    nxt = next((m for m in p["milestones"] if m[2] is None), None)
    return dict(
        id=p["id"], name=p["name"], dept=p["dept"], owner=p["owner"], start=p["start"], end=p["end"],
        tasks_total=p["tasks_total"], tasks_done=p["tasks_done"],
        progress=round(actual * 100), plan=round(plan * 100), status=status,
        cost_plan=p["cost_plan"], revenue_plan=p["revenue_plan"],
        milestones=[dict(name=m[0], due=m[1], done=m[2]) for m in p["milestones"]],
        next_milestone=nxt[0] if nxt else None, next_due=nxt[1] if nxt else None,
        late_days=max([(TODAY - dt.date.fromisoformat(m[1])).days for m in late_ms], default=0),
        risks=[dict(name=r[0], level=r[1]) for r in p["risks"]],
    )


# ───────────────────────── công việc ─────────────────────────
TASK_TITLES = {
    "Khối Sản xuất": [
        "Rà soát phương án giá thu mua lúa giống vụ Đông", "Báo cáo tiến độ gieo trồng ngô giống vụ Đông 2026",
        "Giám sát đồng ruộng, khử lẫn lần 1", "Kiểm tra cách ly vùng sản xuất số 3",
        "Cấp giống bố mẹ và vật tư đầu vào", "Lập kế hoạch thu hoạch, sấy, nhập kho",
        "Tập huấn kỹ thuật cho hộ liên kết", "Điều chỉnh lịch trỗ bố mẹ điểm 3",
        "Rà soát hợp đồng thu mua vùng Đồng bằng sông Hồng", "Kiểm định đồng ruộng với trung tâm khảo kiểm nghiệm",
    ],
    "Khối Kinh doanh": [
        "Kế hoạch bán hàng vụ Đông Xuân 2026–2027", "Đàm phán chính sách đại lý cấp 1 miền Trung",
        "Báo cáo công nợ đại lý quá hạn", "Chuẩn bị hội nghị khách hàng miền Trung",
        "Phân tích giá đối thủ tại Nghệ An", "Ra mắt bao bì mới dòng lúa chất lượng cao",
        "Cập nhật danh mục sản phẩm cho đại lý", "Khảo sát nhu cầu giống ngô vùng Tây Bắc",
    ],
    "Tài chính – Kế toán": [
        "Báo cáo tài chính quý III", "Dự toán ngân sách năm 2027", "Đối chiếu công nợ hộ liên kết",
        "Phương án vốn lưu động vụ Đông Xuân", "Rà soát chi phí dự án kho lạnh",
        "Thẩm định tờ trình giá thu mua",
    ],
    "Nghiên cứu & Phát triển": [
        "Đánh giá kết quả khảo nghiệm giống lúa vụ Hè Thu", "Hồ sơ công nhận giống lúa mới",
        "Chọn điểm khảo nghiệm Đông Xuân", "Báo cáo đặc tính chống chịu rầy nâu",
        "Kế hoạch nhân dòng bố mẹ", "Phối hợp viện nghiên cứu về giống ngô lai",
    ],
    "Đầu tư – Dự án": [
        "Theo dõi giao thiết bị dây chuyền sấy", "Nghiệm thu nhà xưởng giai đoạn 2",
        "Báo cáo giải ngân dự án Hitech Hà Nam", "Hồ sơ thầu lắp đặt kho lạnh số 2",
        "Rà soát dự toán điều chỉnh", "Kế hoạch chạy thử không tải",
    ],
    "Hành chính – Nhân sự": [
        "Chốt danh sách người dùng kiểm thử Base 2.0", "Kế hoạch tuyển dụng kỹ sư nông nghiệp",
        "Quy chế đánh giá KPI năm 2027", "Chuẩn bị hội nghị người lao động",
        "Cập nhật sơ đồ tổ chức và chức danh",
    ],
    "Ban Tổng giám đốc": [
        "Chỉ đạo phương án ứng phó mưa muộn vùng trũng", "Rà soát kế hoạch kinh doanh năm 2027",
        "Làm việc với đối tác về giống ngô lai", "Phê duyệt chiến lược kênh phân phối",
    ],
}
SOURCES = ["Kết luận họp giao ban", "Văn bản chỉ đạo", "Giao trực tiếp", "Kế hoạch dự án"]
PROJECT_OF = {"Khối Sản xuất": "VSD26", "Đầu tư – Dự án": "HTHN2", "Nghiên cứu & Phát triển": "KN-DX27",
              "Khối Kinh doanh": "DL-MT", "Hành chính – Nhân sự": "B20"}


def gen_tasks():
    tasks, n = [], 0
    for dep, titles in TASK_TITLES.items():
        for title in titles:
            for _ in range(rnd.choice([2, 3, 3])):
                n += 1
                # dồn hạn chót quanh hôm nay để kỳ "tuần này" có đủ việc
                deadline = TODAY + dt.timedelta(days=round(rnd.triangular(-35, 40, 2)))
                created = deadline - dt.timedelta(days=rnd.randint(7, 45))
                assignee = rnd.choice(STAFF[dep])
                assigner = "CT" if dep == "Ban Tổng giám đốc" else rnd.choice(["TGD", "PTGD-SX", "PTGD-KD", "PTGD-TC", "PTGD-RD"])
                source = rnd.choices(SOURCES, [4, 2, 3, 3])[0]
                project = PROJECT_OF.get(dep) if source == "Kế hoạch dự án" else None
                priority = rnd.choices(["Cao", "Trung bình", "Thấp"], [3, 5, 2])[0]
                if deadline < TODAY:
                    done = rnd.random() < 0.72
                else:
                    done = rnd.random() < 0.22
                if done:
                    late = rnd.random() < 0.25
                    done_on = deadline + dt.timedelta(days=rnd.randint(1, 6)) if late else deadline - dt.timedelta(days=rnd.randint(0, 6))
                    done_on = min(done_on, TODAY)
                    status, progress = "Hoàn thành", 100
                else:
                    done_on = None
                    status = rnd.choices(["Đang làm", "Chưa bắt đầu", "Tạm dừng"], [6, 2, 1])[0]
                    progress = {"Đang làm": rnd.randint(2, 9) * 10, "Chưa bắt đầu": 0, "Tạm dừng": rnd.randint(1, 5) * 10}[status]
                focus = priority == "Cao" or (title.startswith(("Rà soát phương án giá", "Chỉ đạo", "Báo cáo tài chính")))
                tasks.append(dict(
                    id=f"T-{n:03d}", title=title, dept=dep, assignee=assignee, assigner=assigner, source=source,
                    project=project, priority=priority, focus=focus, created=d(created), deadline=d(deadline),
                    done_on=d(done_on) if done_on else None, status=status, progress=progress,
                ))
    return tasks


# ───────────────────────── lịch công tác ─────────────────────────
PLACES = ["Trụ sở Hà Nội", "Nhà máy Hitech Hà Nam", "Chi nhánh Thái Bình", "Chi nhánh Nghệ An",
          "Vùng sản xuất Nam Định", "Trạm khảo nghiệm Hải Dương"]
EVENT_TEMPLATES = [
    ("Họp giao ban Ban TGĐ", "Họp nội bộ", "Trụ sở Hà Nội", "Phòng họp 1", None),
    ("Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông", "Làm việc với phòng ban", "Trụ sở Hà Nội", "Phòng họp 2", "Khối Sản xuất"),
    ("Kiểm tra đồng ruộng vùng liên kết", "Công tác", "Vùng sản xuất Nam Định", "Xe 7 chỗ", "Khối Sản xuất"),
    ("Kiểm tra tiến độ lắp đặt dây chuyền", "Công tác", "Nhà máy Hitech Hà Nam", "Xe 7 chỗ", "Đầu tư – Dự án"),
    ("Tiếp đối tác cung ứng thiết bị", "Tiếp khách", "Trụ sở Hà Nội", "Phòng khách VIP", "Đầu tư – Dự án"),
    ("Làm việc với đại lý cấp 1", "Công tác", "Chi nhánh Nghệ An", "Xe 16 chỗ", "Khối Kinh doanh"),
    ("Họp duyệt ngân sách 2027", "Họp nội bộ", "Trụ sở Hà Nội", "Phòng họp 1", "Tài chính – Kế toán"),
    ("Đánh giá điểm khảo nghiệm giống", "Công tác", "Trạm khảo nghiệm Hải Dương", "Xe 7 chỗ", "Nghiên cứu & Phát triển"),
    ("Làm việc với Phòng HCNS về Base 2.0", "Làm việc với phòng ban", "Trụ sở Hà Nội", "Phòng họp 3", "Hành chính – Nhân sự"),
    ("Hội nghị khách hàng khu vực", "Công tác", "Chi nhánh Thái Bình", "Xe 16 chỗ", "Khối Kinh doanh"),
]
LEADER_FOCUS = {"CT": [0, 4, 6, 1], "TGD": [0, 1, 6, 4, 8], "PTGD-SX": [0, 1, 2, 3], "PTGD-KD": [0, 5, 9],
                "PTGD-TC": [0, 6, 4], "PTGD-RD": [0, 7]}


def gen_events():
    events, n = [], 0
    for off in range(-7, 15):
        day = TODAY + dt.timedelta(days=off)
        if day.weekday() >= 5:
            continue
        for pid, choices in LEADER_FOCUS.items():
            k = 1 if day.weekday() != 0 else 2
            picks = [0] if day.weekday() == 0 else []
            while len(picks) < k:
                c = rnd.choice(choices[1:])
                if c not in picks:
                    picks.append(c)
            hour = 8
            for c in picks:
                t = EVENT_TEMPLATES[c]
                n += 1
                dur = 4 if t[1] == "Công tác" else rnd.choice([1, 2])
                if t[1] == "Công tác":
                    hour = 8 if hour == 8 else 13
                events.append(dict(id=f"L-{n:03d}", date=d(day), start=f"{hour:02d}:00", end=f"{hour + dur:02d}:00",
                                   person=pid, title=t[0], type=t[1], place=t[2], resource=t[3], related_dept=t[4]))
                hour = 13 if hour < 13 else 15
    return events


# ───────────────────────── tờ trình, phê duyệt ─────────────────────────
APPROVAL_TEMPLATES = [
    ("Tờ trình duyệt giá thu mua lúa giống vụ Thu Đông", "Duyệt giá thu mua", "Khối Sản xuất", 3_600_000_000),
    ("Tờ trình duyệt giá thu mua ngô giống vụ Đông", "Duyệt giá thu mua", "Khối Sản xuất", 1_850_000_000),
    ("Đề xuất ngân sách hội nghị khách hàng miền Trung", "Đề xuất chi", "Khối Kinh doanh", 420_000_000),
    ("Đề xuất chính sách chiết khấu đại lý cấp 1", "Xin ý kiến chỉ đạo", "Khối Kinh doanh", None),
    ("Phê duyệt dự toán điều chỉnh dây chuyền sấy", "Đề xuất chi", "Đầu tư – Dự án", 1_920_000_000),
    ("Hợp đồng lắp đặt kho lạnh số 2", "Hợp đồng", "Đầu tư – Dự án", 5_400_000_000),
    ("Quyết định bổ nhiệm Trưởng vùng sản xuất", "Quyết định nhân sự", "Hành chính – Nhân sự", None),
    ("Kế hoạch tuyển dụng kỹ sư nông nghiệp 2027", "Xin ý kiến chỉ đạo", "Hành chính – Nhân sự", None),
    ("Phương án vốn lưu động vụ Đông Xuân", "Xin ý kiến chỉ đạo", "Tài chính – Kế toán", 25_000_000_000),
    ("Hồ sơ đăng ký công nhận giống lúa mới", "Xin ý kiến chỉ đạo", "Nghiên cứu & Phát triển", None),
    ("Đề xuất mua thiết bị phòng kiểm nghiệm", "Đề xuất chi", "Nghiên cứu & Phát triển", 780_000_000),
    ("Tờ trình phương án ứng phó mưa muộn vùng trũng", "Xin ý kiến chỉ đạo", "Khối Sản xuất", 350_000_000),
]
STEPS = ["B1 · Lập đề nghị", "B2 · Rà soát TC & SX", "B3 · Chờ Chủ tịch duyệt", "Đã duyệt", "Trả lại"]


def gen_approvals():
    out, n = [], 0
    for rep in range(2):
        for title, kind, dep, amount in APPROVAL_TEMPLATES:
            if rep and rnd.random() < 0.45:
                continue
            n += 1
            submitted = TODAY - dt.timedelta(days=rnd.randint(0, 24) + rep * 6)
            step = rnd.choices(STEPS, [1, 3, 4, 4, 1])[0]
            entered = submitted + dt.timedelta(days=rnd.randint(0, max(0, (TODAY - submitted).days)))
            closed = d(entered) if step in ("Đã duyệt", "Trả lại") else None
            urgent = kind in ("Duyệt giá thu mua",) or rnd.random() < 0.25
            approver = "CT" if step.startswith("B3") or kind in ("Duyệt giá thu mua", "Hợp đồng") else rnd.choice(["CT", "TGD"])
            out.append(dict(
                id=f"TT-{n:03d}", title=title + (" (bổ sung)" if rep else ""), kind=kind, dept=dep,
                submitter=rnd.choice(STAFF[dep]), approver=approver, submitted=d(submitted), step=step,
                step_since=d(entered), closed=closed, urgent=urgent, amount=amount,
                waiting_days=(TODAY - entered).days if not closed else 0,
            ))
    return out


def main():
    data = dict(
        meta=dict(today=d(TODAY), generated="Dữ liệu demo minh hoạ", org="Vinaseed"),
        departments=DEPTS,
        people=[dict(id=p[0], name=p[1], title=p[2], dept=p[3], leader=p[4]) for p in PEOPLE],
        tasks=gen_tasks(),
        projects=[project_metrics(p) for p in PROJECTS],
        events=gen_events(),
        approvals=gen_approvals(),
    )
    out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data.js")
    with open(out, "w", encoding="utf-8") as f:
        f.write("// Dữ liệu demo — sinh bởi generate_demo_data.py. Thay bằng dữ liệu thật cùng cấu trúc.\n")
        f.write("window.VSD_DATA = ")
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write(";\n")
    print(out, {k: len(v) for k, v in data.items() if isinstance(v, list)})


if __name__ == "__main__":
    main()
