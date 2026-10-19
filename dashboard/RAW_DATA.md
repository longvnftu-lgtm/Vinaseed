# Vinaseed Executive Dashboard · Dữ liệu thô

Toàn bộ dữ liệu dùng để dựng dashboard https://claude.ai/artifact/LeN5EkW1u2GbfPcxhozKKq.

> **Lưu ý:** trừ bảng *Danh mục báo cáo khảo sát* (lấy từ phiếu khảo sát), mọi bảng là **số liệu mẫu do Claude sinh để minh hoạ**, mốc ngày 19/10/2026; tên người, đại lý, mã giống là giả lập, không phải số liệu thật của Vinaseed. Sinh lại bằng `python3 dashboard/generate_exec_data.py`.

## Mục lục

| # | Bảng | Số dòng | Nguồn dự kiến khi dùng thật | Dùng ở tab |
|---|---|---|---|---|
| 1 | [Tổ chức và nhân sự](#1-people) | 25 | Base Account | Bộ lọc phòng ban, nhân sự; người phụ trách |
| 2 | [Công việc](#2-tasks) | 125 | Base Task (giao từ Meeting, E-office) | Điều hành; Nhân sự (báo cáo giao việc) |
| 3 | [Dự án chiến lược](#3-projects) | 6 | Base Project | Điều hành |
| 4 | [Lịch công tác Ban TGĐ](#4-events) | 120 | Base Meeting, Booking | Điều hành |
| 5 | [Tờ trình, phê duyệt](#5-approvals) | 21 | Base BPM | Điều hành |
| 6 | [Bán hàng theo tháng (BC1)](#6-sales) | 144 | Fast | Kinh doanh; Tài chính |
| 7 | [Đại lý và công nợ (BC3, tuổi nợ)](#7-dealers) | 43 | CRM, DMS, Fast | Kinh doanh; Đại lý & thị trường; Tài chính |
| 8 | [Ghé thăm đại lý (BC2, BC4)](#8-visits) | 491 | DMS | Đại lý & thị trường |
| 9 | [Tiến độ sản xuất (BC9)](#9-production) | 38 | Excel (sau này phần mềm sản xuất mới) | Sản xuất & thu mua |
| 10 | [Thu mua nhập kho (BC6, BC7)](#10-intake) | 133 | Excel → Workflow thu mua, nhập kho | Sản xuất & thu mua |
| 11 | [Đơn đặt hàng (BC8)](#11-orders) | 60 | Excel → Workflow thu mua | Đơn đặt hàng |
| 12 | [Tài chính theo tháng](#12-finance) | 10 | Fast (KQKD, lưu chuyển tiền tệ), Excel (tiền vay, tiền gửi) | Tài chính |
| 13 | [Chất lượng lô giống (BC10)](#13-quality) | 90 | Excel (phiếu kiểm nghiệm) | Chất lượng |
| 14 | [Nhân sự theo tháng](#14-hr) | 70 | Excel → Base HRM | Nhân sự |
| 15 | [Danh mục báo cáo khảo sát](#15-catalog) | 25 | Phiếu khảo sát hệ thống dữ liệu | Danh mục báo cáo |

## 1. Tổ chức và nhân sự
<a id="1-people"></a>

- Tệp: `dashboard/data/people.json` · 25 dòng
- Nguồn dự kiến: Base Account
- Dùng ở tab: Bộ lọc phòng ban, nhân sự; người phụ trách

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `id` | Mã nhân sự |
| `name` | Họ tên (giả lập) |
| `title` | Chức danh |
| `dept` | Phòng ban |
| `leader` | Thuộc Ban lãnh đạo (hiện trên lịch công tác) |

**Dữ liệu**

| id | name | title | dept | leader |
|---|---|---|---|---|
| CT | Nguyễn Văn An | Chủ tịch HĐQT | Ban Tổng giám đốc | Có |
| TGD | Phạm Quốc Hưng | Tổng giám đốc | Ban Tổng giám đốc | Có |
| PTGD-SX | Lê Thanh Tùng | PTGĐ Sản xuất | Ban Tổng giám đốc | Có |
| PTGD-KD | Đỗ Thu Hà | PTGĐ Kinh doanh | Ban Tổng giám đốc | Có |
| PTGD-TC | Vũ Minh Khoa | PTGĐ Tài chính | Ban Tổng giám đốc | Có |
| PTGD-RD | Hoàng Lan Anh | PTGĐ Nghiên cứu | Ban Tổng giám đốc | Có |
| SX1 | Trịnh Văn Nam | Giám đốc Sản xuất | Khối Sản xuất | Không |
| SX2 | Bùi Đức Long | Trưởng vùng sản xuất | Khối Sản xuất | Không |
| SX3 | Ngô Thị Mai | Chuyên viên kế hoạch SX | Khối Sản xuất | Không |
| KD1 | Phan Hải Yến | Giám đốc Kinh doanh | Khối Kinh doanh | Không |
| KD2 | Đặng Quang Huy | Trưởng kênh đại lý | Khối Kinh doanh | Không |
| KD3 | Lý Thu Trang | Chuyên viên marketing | Khối Kinh doanh | Không |
| TC1 | Mai Văn Phúc | Kế toán trưởng | Tài chính – Kế toán | Không |
| TC2 | Cao Thị Ngọc | Chuyên viên tài chính | Tài chính – Kế toán | Không |
| RD1 | Võ Đình Khang | Trưởng phòng R&D | Nghiên cứu & Phát triển | Không |
| RD2 | Hà Thị Linh | Chuyên viên khảo nghiệm | Nghiên cứu & Phát triển | Không |
| DA1 | Tạ Minh Quân | Trưởng phòng Đầu tư | Đầu tư – Dự án | Không |
| DA2 | Lưu Hoàng Sơn | Chuyên viên dự án | Đầu tư – Dự án | Không |
| NS1 | Kiều Thị Hoa | Trưởng phòng HCNS | Hành chính – Nhân sự | Không |
| NS2 | Đinh Văn Toàn | Chuyên viên hành chính | Hành chính – Nhân sự | Không |
| KD4 | Trần Văn Bình | Nhân viên thị trường | Khối Kinh doanh | Không |
| KD5 | Nguyễn Thị Lan | Nhân viên thị trường | Khối Kinh doanh | Không |
| KD6 | Lê Minh Tâm | Nhân viên thị trường | Khối Kinh doanh | Không |
| SX4 | Phạm Đức Anh | Cán bộ phụ trách vùng | Khối Sản xuất | Không |
| QL1 | Dương Thị Thu | Chuyên viên quản lý chất lượng | Khối Sản xuất | Không |

## 2. Công việc
<a id="2-tasks"></a>

- Tệp: `dashboard/data/tasks.json` · 125 dòng
- Nguồn dự kiến: Base Task (giao từ Meeting, E-office)
- Dùng ở tab: Điều hành; Nhân sự (báo cáo giao việc)

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `id` | Mã việc |
| `title` | Tên việc |
| `dept` | Phòng ban thực hiện |
| `assignee` | Người thực hiện |
| `assigner` | Người giao |
| `source` | Nguồn giao việc |
| `project` | Mã dự án liên quan |
| `priority` | Ưu tiên |
| `focus` | Việc trọng tâm |
| `created` | Ngày tạo |
| `deadline` | Hạn chót |
| `done_on` | Ngày hoàn thành |
| `status` | Trạng thái |
| `progress` | % hoàn thành |

**Dữ liệu**

| id | title | dept | assignee | assigner | source | project | priority | focus | created | deadline | done_on | status | progress |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T-001 | Rà soát phương án giá thu mua lúa giống vụ Đông | Khối Sản xuất | SX3 | TGD | Kế hoạch dự án | VSD26 | Thấp | Có | 2026-09-05 | 2026-10-14 | 2026-10-10 | Hoàn thành | 100 |
| T-002 | Rà soát phương án giá thu mua lúa giống vụ Đông | Khối Sản xuất | SX3 | PTGD-TC | Kết luận họp giao ban |  | Trung bình | Có | 2026-09-15 | 2026-10-23 | 2026-10-19 | Hoàn thành | 100 |
| T-003 | Báo cáo tiến độ gieo trồng ngô giống vụ Đông 2026 | Khối Sản xuất | SX3 | PTGD-KD | Kết luận họp giao ban |  | Cao | Có | 2026-09-28 | 2026-11-05 |  | Tạm dừng | 50 |
| T-004 | Báo cáo tiến độ gieo trồng ngô giống vụ Đông 2026 | Khối Sản xuất | SX1 | PTGD-RD | Giao trực tiếp |  | Cao | Có | 2026-09-29 | 2026-10-27 | 2026-10-19 | Hoàn thành | 100 |
| T-005 | Giám sát đồng ruộng, khử lẫn lần 1 | Khối Sản xuất | SX2 | PTGD-TC | Văn bản chỉ đạo |  | Trung bình | Không | 2026-09-13 | 2026-10-13 | 2026-10-13 | Hoàn thành | 100 |
| T-006 | Giám sát đồng ruộng, khử lẫn lần 1 | Khối Sản xuất | SX2 | PTGD-TC | Kế hoạch dự án | VSD26 | Cao | Có | 2026-09-03 | 2026-10-18 | 2026-10-15 | Hoàn thành | 100 |
| T-007 | Giám sát đồng ruộng, khử lẫn lần 1 | Khối Sản xuất | SX3 | PTGD-SX | Kế hoạch dự án | VSD26 | Thấp | Không | 2026-10-14 | 2026-10-22 |  | Đang làm | 30 |
| T-008 | Kiểm tra cách ly vùng sản xuất số 3 | Khối Sản xuất | SX1 | TGD | Giao trực tiếp |  | Trung bình | Không | 2026-09-13 | 2026-10-20 |  | Tạm dừng | 50 |
| T-009 | Kiểm tra cách ly vùng sản xuất số 3 | Khối Sản xuất | SX3 | PTGD-RD | Giao trực tiếp |  | Thấp | Không | 2026-09-21 | 2026-10-17 | 2026-10-19 | Hoàn thành | 100 |
| T-010 | Kiểm tra cách ly vùng sản xuất số 3 | Khối Sản xuất | SX3 | PTGD-RD | Kế hoạch dự án | VSD26 | Thấp | Không | 2026-09-03 | 2026-09-19 |  | Đang làm | 50 |
| T-011 | Cấp giống bố mẹ và vật tư đầu vào | Khối Sản xuất | SX2 | PTGD-TC | Giao trực tiếp |  | Thấp | Không | 2026-09-12 | 2026-10-21 |  | Đang làm | 30 |
| T-012 | Cấp giống bố mẹ và vật tư đầu vào | Khối Sản xuất | SX2 | PTGD-TC | Kế hoạch dự án | VSD26 | Cao | Có | 2026-09-20 | 2026-10-29 |  | Chưa bắt đầu | 0 |
| T-013 | Cấp giống bố mẹ và vật tư đầu vào | Khối Sản xuất | SX1 | PTGD-SX | Giao trực tiếp |  | Trung bình | Không | 2026-10-12 | 2026-11-11 |  | Đang làm | 20 |
| T-014 | Lập kế hoạch thu hoạch, sấy, nhập kho | Khối Sản xuất | SX3 | PTGD-SX | Kết luận họp giao ban |  | Trung bình | Không | 2026-10-11 | 2026-10-23 |  | Tạm dừng | 20 |
| T-015 | Lập kế hoạch thu hoạch, sấy, nhập kho | Khối Sản xuất | SX3 | PTGD-TC | Giao trực tiếp |  | Thấp | Không | 2026-08-05 | 2026-09-18 | 2026-09-17 | Hoàn thành | 100 |
| T-016 | Lập kế hoạch thu hoạch, sấy, nhập kho | Khối Sản xuất | SX2 | TGD | Văn bản chỉ đạo |  | Cao | Có | 2026-10-09 | 2026-11-17 | 2026-10-19 | Hoàn thành | 100 |
| T-017 | Tập huấn kỹ thuật cho hộ liên kết | Khối Sản xuất | SX1 | PTGD-RD | Kế hoạch dự án | VSD26 | Trung bình | Không | 2026-09-21 | 2026-10-22 |  | Đang làm | 30 |
| T-018 | Tập huấn kỹ thuật cho hộ liên kết | Khối Sản xuất | SX1 | TGD | Giao trực tiếp |  | Trung bình | Không | 2026-10-08 | 2026-11-06 |  | Đang làm | 30 |
| T-019 | Tập huấn kỹ thuật cho hộ liên kết | Khối Sản xuất | SX3 | PTGD-SX | Kết luận họp giao ban |  | Trung bình | Không | 2026-10-04 | 2026-11-16 |  | Đang làm | 50 |
| T-020 | Điều chỉnh lịch trỗ bố mẹ điểm 3 | Khối Sản xuất | SX3 | PTGD-SX | Kết luận họp giao ban |  | Trung bình | Không | 2026-09-28 | 2026-10-17 |  | Đang làm | 50 |
| T-021 | Điều chỉnh lịch trỗ bố mẹ điểm 3 | Khối Sản xuất | SX1 | PTGD-RD | Kết luận họp giao ban |  | Thấp | Không | 2026-10-22 | 2026-10-30 |  | Đang làm | 40 |
| T-022 | Điều chỉnh lịch trỗ bố mẹ điểm 3 | Khối Sản xuất | SX2 | TGD | Văn bản chỉ đạo |  | Cao | Có | 2026-09-01 | 2026-10-12 | 2026-10-06 | Hoàn thành | 100 |
| T-023 | Rà soát hợp đồng thu mua vùng Đồng bằng sông Hồng | Khối Sản xuất | SX2 | PTGD-RD | Văn bản chỉ đạo |  | Cao | Có | 2026-09-24 | 2026-10-12 |  | Chưa bắt đầu | 0 |
| T-024 | Rà soát hợp đồng thu mua vùng Đồng bằng sông Hồng | Khối Sản xuất | SX2 | PTGD-KD | Văn bản chỉ đạo |  | Trung bình | Không | 2026-09-27 | 2026-10-09 |  | Chưa bắt đầu | 0 |
| T-025 | Rà soát hợp đồng thu mua vùng Đồng bằng sông Hồng | Khối Sản xuất | SX3 | PTGD-RD | Kế hoạch dự án | VSD26 | Cao | Có | 2026-10-09 | 2026-11-07 |  | Đang làm | 50 |
| T-026 | Kiểm định đồng ruộng với trung tâm khảo kiểm nghiệm | Khối Sản xuất | SX1 | TGD | Kế hoạch dự án | VSD26 | Cao | Có | 2026-09-12 | 2026-10-24 |  | Đang làm | 20 |
| T-027 | Kiểm định đồng ruộng với trung tâm khảo kiểm nghiệm | Khối Sản xuất | SX3 | TGD | Giao trực tiếp |  | Cao | Có | 2026-10-13 | 2026-10-31 |  | Đang làm | 70 |
| T-028 | Kiểm định đồng ruộng với trung tâm khảo kiểm nghiệm | Khối Sản xuất | SX1 | PTGD-TC | Kế hoạch dự án | VSD26 | Thấp | Không | 2026-09-30 | 2026-10-11 | 2026-10-11 | Hoàn thành | 100 |
| T-029 | Kế hoạch bán hàng vụ Đông Xuân 2026–2027 | Khối Kinh doanh | KD1 | TGD | Giao trực tiếp |  | Trung bình | Không | 2026-09-14 | 2026-10-10 |  | Đang làm | 90 |
| T-030 | Kế hoạch bán hàng vụ Đông Xuân 2026–2027 | Khối Kinh doanh | KD2 | PTGD-KD | Giao trực tiếp |  | Trung bình | Không | 2026-10-17 | 2026-10-26 |  | Chưa bắt đầu | 0 |
| T-031 | Đàm phán chính sách đại lý cấp 1 miền Trung | Khối Kinh doanh | KD2 | PTGD-KD | Kế hoạch dự án | DL-MT | Trung bình | Không | 2026-10-06 | 2026-10-29 |  | Đang làm | 20 |
| T-032 | Đàm phán chính sách đại lý cấp 1 miền Trung | Khối Kinh doanh | KD3 | TGD | Kết luận họp giao ban |  | Trung bình | Không | 2026-10-05 | 2026-10-30 |  | Đang làm | 70 |
| T-033 | Đàm phán chính sách đại lý cấp 1 miền Trung | Khối Kinh doanh | KD1 | PTGD-RD | Kết luận họp giao ban |  | Cao | Có | 2026-10-10 | 2026-10-24 |  | Đang làm | 60 |
| T-034 | Báo cáo công nợ đại lý quá hạn | Khối Kinh doanh | KD2 | PTGD-TC | Văn bản chỉ đạo |  | Trung bình | Không | 2026-09-25 | 2026-10-24 |  | Chưa bắt đầu | 0 |
| T-035 | Báo cáo công nợ đại lý quá hạn | Khối Kinh doanh | KD3 | PTGD-RD | Văn bản chỉ đạo |  | Cao | Có | 2026-08-13 | 2026-09-23 | 2026-09-26 | Hoàn thành | 100 |
| T-036 | Báo cáo công nợ đại lý quá hạn | Khối Kinh doanh | KD2 | PTGD-KD | Kết luận họp giao ban |  | Trung bình | Không | 2026-09-20 | 2026-10-23 | 2026-10-19 | Hoàn thành | 100 |
| T-037 | Chuẩn bị hội nghị khách hàng miền Trung | Khối Kinh doanh | KD2 | PTGD-KD | Giao trực tiếp |  | Trung bình | Không | 2026-09-30 | 2026-11-08 |  | Đang làm | 20 |
| T-038 | Chuẩn bị hội nghị khách hàng miền Trung | Khối Kinh doanh | KD3 | PTGD-RD | Kế hoạch dự án | DL-MT | Thấp | Không | 2026-09-29 | 2026-10-20 |  | Đang làm | 70 |
| T-039 | Chuẩn bị hội nghị khách hàng miền Trung | Khối Kinh doanh | KD2 | PTGD-SX | Văn bản chỉ đạo |  | Trung bình | Không | 2026-09-30 | 2026-10-24 |  | Chưa bắt đầu | 0 |
| T-040 | Phân tích giá đối thủ tại Nghệ An | Khối Kinh doanh | KD2 | TGD | Kế hoạch dự án | DL-MT | Thấp | Không | 2026-10-10 | 2026-10-26 |  | Chưa bắt đầu | 0 |
| T-041 | Phân tích giá đối thủ tại Nghệ An | Khối Kinh doanh | KD3 | PTGD-KD | Kết luận họp giao ban |  | Trung bình | Không | 2026-08-30 | 2026-09-29 |  | Đang làm | 50 |
| T-042 | Ra mắt bao bì mới dòng lúa chất lượng cao | Khối Kinh doanh | KD2 | PTGD-RD | Kế hoạch dự án | DL-MT | Trung bình | Không | 2026-09-22 | 2026-10-24 |  | Đang làm | 30 |
| T-043 | Ra mắt bao bì mới dòng lúa chất lượng cao | Khối Kinh doanh | KD2 | PTGD-RD | Kết luận họp giao ban |  | Cao | Có | 2026-09-03 | 2026-10-04 | 2026-10-03 | Hoàn thành | 100 |
| T-044 | Ra mắt bao bì mới dòng lúa chất lượng cao | Khối Kinh doanh | KD3 | PTGD-KD | Văn bản chỉ đạo |  | Thấp | Không | 2026-10-17 | 2026-11-11 | 2026-10-19 | Hoàn thành | 100 |
| T-045 | Cập nhật danh mục sản phẩm cho đại lý | Khối Kinh doanh | KD2 | PTGD-RD | Kết luận họp giao ban |  | Trung bình | Không | 2026-09-23 | 2026-10-27 | 2026-10-19 | Hoàn thành | 100 |
| T-046 | Cập nhật danh mục sản phẩm cho đại lý | Khối Kinh doanh | KD3 | TGD | Kế hoạch dự án | DL-MT | Cao | Có | 2026-09-09 | 2026-09-23 | 2026-09-19 | Hoàn thành | 100 |
| T-047 | Cập nhật danh mục sản phẩm cho đại lý | Khối Kinh doanh | KD1 | PTGD-KD | Văn bản chỉ đạo |  | Thấp | Không | 2026-10-11 | 2026-10-26 |  | Đang làm | 60 |
| T-048 | Khảo sát nhu cầu giống ngô vùng Tây Bắc | Khối Kinh doanh | KD1 | PTGD-RD | Giao trực tiếp |  | Thấp | Không | 2026-09-12 | 2026-10-20 |  | Đang làm | 70 |
| T-049 | Khảo sát nhu cầu giống ngô vùng Tây Bắc | Khối Kinh doanh | KD2 | PTGD-KD | Kết luận họp giao ban |  | Trung bình | Không | 2026-09-16 | 2026-09-28 | 2026-09-24 | Hoàn thành | 100 |
| T-050 | Khảo sát nhu cầu giống ngô vùng Tây Bắc | Khối Kinh doanh | KD2 | PTGD-KD | Kết luận họp giao ban |  | Thấp | Không | 2026-09-06 | 2026-10-14 | 2026-10-12 | Hoàn thành | 100 |
| T-051 | Báo cáo tài chính quý III | Tài chính – Kế toán | TC2 | PTGD-SX | Kết luận họp giao ban |  | Trung bình | Có | 2026-09-04 | 2026-10-18 | 2026-10-19 | Hoàn thành | 100 |
| T-052 | Báo cáo tài chính quý III | Tài chính – Kế toán | TC2 | PTGD-KD | Kế hoạch dự án |  | Trung bình | Có | 2026-09-30 | 2026-10-14 | 2026-10-13 | Hoàn thành | 100 |
| T-053 | Báo cáo tài chính quý III | Tài chính – Kế toán | TC1 | PTGD-KD | Kết luận họp giao ban |  | Trung bình | Có | 2026-09-28 | 2026-10-14 | 2026-10-19 | Hoàn thành | 100 |
| T-054 | Dự toán ngân sách năm 2027 | Tài chính – Kế toán | TC1 | PTGD-TC | Kế hoạch dự án |  | Thấp | Không | 2026-10-01 | 2026-10-29 |  | Chưa bắt đầu | 0 |
| T-055 | Dự toán ngân sách năm 2027 | Tài chính – Kế toán | TC1 | PTGD-TC | Giao trực tiếp |  | Cao | Có | 2026-09-17 | 2026-10-15 | 2026-10-13 | Hoàn thành | 100 |
| T-056 | Dự toán ngân sách năm 2027 | Tài chính – Kế toán | TC2 | PTGD-TC | Văn bản chỉ đạo |  | Cao | Có | 2026-09-21 | 2026-10-24 | 2026-10-19 | Hoàn thành | 100 |
| T-057 | Đối chiếu công nợ hộ liên kết | Tài chính – Kế toán | TC2 | PTGD-RD | Kết luận họp giao ban |  | Trung bình | Không | 2026-09-01 | 2026-09-21 | 2026-09-17 | Hoàn thành | 100 |
| T-058 | Đối chiếu công nợ hộ liên kết | Tài chính – Kế toán | TC1 | PTGD-KD | Kế hoạch dự án |  | Thấp | Không | 2026-10-20 | 2026-11-02 | 2026-10-19 | Hoàn thành | 100 |
| T-059 | Đối chiếu công nợ hộ liên kết | Tài chính – Kế toán | TC2 | PTGD-RD | Giao trực tiếp |  | Trung bình | Không | 2026-08-31 | 2026-10-13 | 2026-10-10 | Hoàn thành | 100 |
| T-060 | Phương án vốn lưu động vụ Đông Xuân | Tài chính – Kế toán | TC1 | PTGD-TC | Giao trực tiếp |  | Trung bình | Không | 2026-08-29 | 2026-10-07 | 2026-10-05 | Hoàn thành | 100 |
| T-061 | Phương án vốn lưu động vụ Đông Xuân | Tài chính – Kế toán | TC2 | TGD | Giao trực tiếp |  | Cao | Có | 2026-09-24 | 2026-10-21 |  | Đang làm | 90 |
| T-062 | Rà soát chi phí dự án kho lạnh | Tài chính – Kế toán | TC2 | PTGD-SX | Giao trực tiếp |  | Thấp | Không | 2026-09-10 | 2026-10-12 |  | Chưa bắt đầu | 0 |
| T-063 | Rà soát chi phí dự án kho lạnh | Tài chính – Kế toán | TC2 | PTGD-TC | Kết luận họp giao ban |  | Trung bình | Không | 2026-09-17 | 2026-10-26 | 2026-10-19 | Hoàn thành | 100 |
| T-064 | Rà soát chi phí dự án kho lạnh | Tài chính – Kế toán | TC2 | TGD | Kế hoạch dự án |  | Thấp | Không | 2026-10-12 | 2026-11-04 | 2026-10-19 | Hoàn thành | 100 |
| T-065 | Thẩm định tờ trình giá thu mua | Tài chính – Kế toán | TC1 | PTGD-KD | Kế hoạch dự án |  | Trung bình | Không | 2026-10-24 | 2026-11-08 | 2026-10-19 | Hoàn thành | 100 |
| T-066 | Thẩm định tờ trình giá thu mua | Tài chính – Kế toán | TC1 | PTGD-SX | Giao trực tiếp |  | Trung bình | Không | 2026-09-12 | 2026-10-14 | 2026-10-19 | Hoàn thành | 100 |
| T-067 | Thẩm định tờ trình giá thu mua | Tài chính – Kế toán | TC2 | PTGD-KD | Kế hoạch dự án |  | Cao | Có | 2026-10-15 | 2026-10-24 |  | Đang làm | 70 |
| T-068 | Đánh giá kết quả khảo nghiệm giống lúa vụ Hè Thu | Nghiên cứu & Phát triển | RD1 | PTGD-SX | Văn bản chỉ đạo |  | Trung bình | Không | 2026-09-26 | 2026-10-06 |  | Tạm dừng | 20 |
| T-069 | Đánh giá kết quả khảo nghiệm giống lúa vụ Hè Thu | Nghiên cứu & Phát triển | RD1 | PTGD-TC | Giao trực tiếp |  | Trung bình | Không | 2026-09-11 | 2026-10-22 |  | Đang làm | 20 |
| T-070 | Đánh giá kết quả khảo nghiệm giống lúa vụ Hè Thu | Nghiên cứu & Phát triển | RD2 | PTGD-RD | Kế hoạch dự án | KN-DX27 | Trung bình | Không | 2026-09-06 | 2026-09-19 |  | Đang làm | 20 |
| T-071 | Hồ sơ công nhận giống lúa mới | Nghiên cứu & Phát triển | RD2 | PTGD-TC | Kết luận họp giao ban |  | Thấp | Không | 2026-09-25 | 2026-10-07 | 2026-10-04 | Hoàn thành | 100 |
| T-072 | Hồ sơ công nhận giống lúa mới | Nghiên cứu & Phát triển | RD2 | PTGD-TC | Văn bản chỉ đạo |  | Trung bình | Không | 2026-09-21 | 2026-10-08 | 2026-10-03 | Hoàn thành | 100 |
| T-073 | Hồ sơ công nhận giống lúa mới | Nghiên cứu & Phát triển | RD2 | TGD | Kế hoạch dự án | KN-DX27 | Cao | Có | 2026-09-07 | 2026-10-19 | 2026-10-17 | Hoàn thành | 100 |
| T-074 | Chọn điểm khảo nghiệm Đông Xuân | Nghiên cứu & Phát triển | RD1 | PTGD-SX | Kết luận họp giao ban |  | Trung bình | Không | 2026-10-12 | 2026-10-29 |  | Tạm dừng | 10 |
| T-075 | Chọn điểm khảo nghiệm Đông Xuân | Nghiên cứu & Phát triển | RD2 | PTGD-KD | Giao trực tiếp |  | Trung bình | Không | 2026-10-07 | 2026-10-23 |  | Đang làm | 60 |
| T-076 | Chọn điểm khảo nghiệm Đông Xuân | Nghiên cứu & Phát triển | RD1 | PTGD-SX | Giao trực tiếp |  | Thấp | Không | 2026-10-06 | 2026-10-21 |  | Đang làm | 20 |
| T-077 | Báo cáo đặc tính chống chịu rầy nâu | Nghiên cứu & Phát triển | RD2 | PTGD-TC | Văn bản chỉ đạo |  | Thấp | Không | 2026-10-21 | 2026-11-02 |  | Đang làm | 30 |
| T-078 | Báo cáo đặc tính chống chịu rầy nâu | Nghiên cứu & Phát triển | RD1 | TGD | Giao trực tiếp |  | Trung bình | Không | 2026-10-01 | 2026-10-13 | 2026-10-07 | Hoàn thành | 100 |
| T-079 | Báo cáo đặc tính chống chịu rầy nâu | Nghiên cứu & Phát triển | RD2 | PTGD-RD | Kết luận họp giao ban |  | Thấp | Không | 2026-09-18 | 2026-10-24 | 2026-10-19 | Hoàn thành | 100 |
| T-080 | Kế hoạch nhân dòng bố mẹ | Nghiên cứu & Phát triển | RD1 | TGD | Giao trực tiếp |  | Cao | Có | 2026-09-30 | 2026-10-23 |  | Đang làm | 70 |
| T-081 | Kế hoạch nhân dòng bố mẹ | Nghiên cứu & Phát triển | RD1 | PTGD-KD | Giao trực tiếp |  | Trung bình | Không | 2026-09-06 | 2026-10-13 | 2026-10-16 | Hoàn thành | 100 |
| T-082 | Phối hợp viện nghiên cứu về giống ngô lai | Nghiên cứu & Phát triển | RD1 | PTGD-TC | Kết luận họp giao ban |  | Cao | Có | 2026-09-03 | 2026-09-25 | 2026-09-21 | Hoàn thành | 100 |
| T-083 | Phối hợp viện nghiên cứu về giống ngô lai | Nghiên cứu & Phát triển | RD2 | TGD | Giao trực tiếp |  | Trung bình | Không | 2026-09-01 | 2026-09-21 | 2026-09-19 | Hoàn thành | 100 |
| T-084 | Phối hợp viện nghiên cứu về giống ngô lai | Nghiên cứu & Phát triển | RD1 | PTGD-KD | Giao trực tiếp |  | Trung bình | Không | 2026-09-07 | 2026-10-11 |  | Đang làm | 70 |
| T-085 | Theo dõi giao thiết bị dây chuyền sấy | Đầu tư – Dự án | DA2 | PTGD-TC | Kế hoạch dự án | HTHN2 | Thấp | Không | 2026-09-12 | 2026-09-29 |  | Đang làm | 20 |
| T-086 | Theo dõi giao thiết bị dây chuyền sấy | Đầu tư – Dự án | DA1 | PTGD-RD | Kết luận họp giao ban |  | Trung bình | Không | 2026-09-14 | 2026-10-07 | 2026-10-07 | Hoàn thành | 100 |
| T-087 | Theo dõi giao thiết bị dây chuyền sấy | Đầu tư – Dự án | DA1 | PTGD-TC | Giao trực tiếp |  | Cao | Có | 2026-08-28 | 2026-10-09 |  | Tạm dừng | 50 |
| T-088 | Nghiệm thu nhà xưởng giai đoạn 2 | Đầu tư – Dự án | DA2 | TGD | Kết luận họp giao ban |  | Cao | Có | 2026-10-26 | 2026-11-14 | 2026-10-19 | Hoàn thành | 100 |
| T-089 | Nghiệm thu nhà xưởng giai đoạn 2 | Đầu tư – Dự án | DA2 | PTGD-KD | Kết luận họp giao ban |  | Trung bình | Không | 2026-10-17 | 2026-10-26 |  | Đang làm | 50 |
| T-090 | Nghiệm thu nhà xưởng giai đoạn 2 | Đầu tư – Dự án | DA2 | PTGD-SX | Giao trực tiếp |  | Trung bình | Không | 2026-09-25 | 2026-11-05 |  | Đang làm | 80 |
| T-091 | Báo cáo giải ngân dự án Hitech Hà Nam | Đầu tư – Dự án | DA1 | PTGD-SX | Kết luận họp giao ban |  | Cao | Có | 2026-10-01 | 2026-10-19 |  | Đang làm | 40 |
| T-092 | Báo cáo giải ngân dự án Hitech Hà Nam | Đầu tư – Dự án | DA1 | PTGD-SX | Kế hoạch dự án | HTHN2 | Trung bình | Không | 2026-09-01 | 2026-09-30 | 2026-10-04 | Hoàn thành | 100 |
| T-093 | Hồ sơ thầu lắp đặt kho lạnh số 2 | Đầu tư – Dự án | DA1 | PTGD-TC | Giao trực tiếp |  | Cao | Có | 2026-09-07 | 2026-10-04 |  | Đang làm | 90 |
| T-094 | Hồ sơ thầu lắp đặt kho lạnh số 2 | Đầu tư – Dự án | DA2 | TGD | Giao trực tiếp |  | Trung bình | Không | 2026-09-30 | 2026-10-28 |  | Đang làm | 80 |
| T-095 | Hồ sơ thầu lắp đặt kho lạnh số 2 | Đầu tư – Dự án | DA1 | PTGD-KD | Giao trực tiếp |  | Cao | Có | 2026-10-01 | 2026-11-15 | 2026-10-19 | Hoàn thành | 100 |
| T-096 | Rà soát dự toán điều chỉnh | Đầu tư – Dự án | DA1 | PTGD-TC | Kế hoạch dự án | HTHN2 | Cao | Có | 2026-10-07 | 2026-10-20 |  | Tạm dừng | 10 |
| T-097 | Rà soát dự toán điều chỉnh | Đầu tư – Dự án | DA2 | PTGD-SX | Văn bản chỉ đạo |  | Cao | Có | 2026-09-21 | 2026-09-28 | 2026-09-27 | Hoàn thành | 100 |
| T-098 | Rà soát dự toán điều chỉnh | Đầu tư – Dự án | DA2 | PTGD-RD | Kết luận họp giao ban |  | Cao | Có | 2026-10-10 | 2026-10-17 | 2026-10-11 | Hoàn thành | 100 |
| T-099 | Kế hoạch chạy thử không tải | Đầu tư – Dự án | DA2 | PTGD-KD | Kết luận họp giao ban |  | Trung bình | Không | 2026-10-12 | 2026-11-16 |  | Đang làm | 70 |
| T-100 | Kế hoạch chạy thử không tải | Đầu tư – Dự án | DA1 | PTGD-SX | Kết luận họp giao ban |  | Trung bình | Không | 2026-08-20 | 2026-10-01 | 2026-09-28 | Hoàn thành | 100 |
| T-101 | Kế hoạch chạy thử không tải | Đầu tư – Dự án | DA1 | TGD | Kết luận họp giao ban |  | Cao | Có | 2026-09-12 | 2026-10-09 | 2026-10-08 | Hoàn thành | 100 |
| T-102 | Chốt danh sách người dùng kiểm thử Base 2.0 | Hành chính – Nhân sự | NS2 | PTGD-KD | Văn bản chỉ đạo |  | Thấp | Không | 2026-09-12 | 2026-10-23 |  | Đang làm | 20 |
| T-103 | Chốt danh sách người dùng kiểm thử Base 2.0 | Hành chính – Nhân sự | NS1 | PTGD-TC | Giao trực tiếp |  | Cao | Có | 2026-10-11 | 2026-11-06 |  | Đang làm | 20 |
| T-104 | Chốt danh sách người dùng kiểm thử Base 2.0 | Hành chính – Nhân sự | NS2 | PTGD-RD | Kết luận họp giao ban |  | Trung bình | Không | 2026-10-04 | 2026-10-13 |  | Đang làm | 60 |
| T-105 | Kế hoạch tuyển dụng kỹ sư nông nghiệp | Hành chính – Nhân sự | NS2 | PTGD-RD | Kết luận họp giao ban |  | Trung bình | Không | 2026-09-16 | 2026-10-15 | 2026-10-13 | Hoàn thành | 100 |
| T-106 | Kế hoạch tuyển dụng kỹ sư nông nghiệp | Hành chính – Nhân sự | NS2 | PTGD-KD | Kế hoạch dự án | B20 | Thấp | Không | 2026-10-17 | 2026-11-08 | 2026-10-19 | Hoàn thành | 100 |
| T-107 | Kế hoạch tuyển dụng kỹ sư nông nghiệp | Hành chính – Nhân sự | NS2 | PTGD-SX | Văn bản chỉ đạo |  | Cao | Có | 2026-09-19 | 2026-10-21 | 2026-10-19 | Hoàn thành | 100 |
| T-108 | Quy chế đánh giá KPI năm 2027 | Hành chính – Nhân sự | NS2 | PTGD-RD | Văn bản chỉ đạo |  | Trung bình | Không | 2026-09-25 | 2026-10-09 |  | Đang làm | 50 |
| T-109 | Quy chế đánh giá KPI năm 2027 | Hành chính – Nhân sự | NS1 | TGD | Kế hoạch dự án | B20 | Trung bình | Không | 2026-10-06 | 2026-10-13 | 2026-10-08 | Hoàn thành | 100 |
| T-110 | Chuẩn bị hội nghị người lao động | Hành chính – Nhân sự | NS2 | PTGD-KD | Giao trực tiếp |  | Cao | Có | 2026-10-18 | 2026-11-06 |  | Đang làm | 90 |
| T-111 | Chuẩn bị hội nghị người lao động | Hành chính – Nhân sự | NS2 | PTGD-SX | Kết luận họp giao ban |  | Trung bình | Không | 2026-10-02 | 2026-11-13 |  | Tạm dừng | 40 |
| T-112 | Cập nhật sơ đồ tổ chức và chức danh | Hành chính – Nhân sự | NS1 | TGD | Văn bản chỉ đạo |  | Trung bình | Không | 2026-09-20 | 2026-10-19 | 2026-10-15 | Hoàn thành | 100 |
| T-113 | Cập nhật sơ đồ tổ chức và chức danh | Hành chính – Nhân sự | NS2 | PTGD-SX | Kết luận họp giao ban |  | Cao | Có | 2026-09-27 | 2026-10-10 | 2026-10-04 | Hoàn thành | 100 |
| T-114 | Chỉ đạo phương án ứng phó mưa muộn vùng trũng | Ban Tổng giám đốc | PTGD-KD | CT | Kế hoạch dự án |  | Cao | Có | 2026-10-13 | 2026-11-03 |  | Đang làm | 60 |
| T-115 | Chỉ đạo phương án ứng phó mưa muộn vùng trũng | Ban Tổng giám đốc | PTGD-KD | CT | Kết luận họp giao ban |  | Thấp | Có | 2026-09-04 | 2026-10-18 | 2026-10-16 | Hoàn thành | 100 |
| T-116 | Chỉ đạo phương án ứng phó mưa muộn vùng trũng | Ban Tổng giám đốc | PTGD-RD | CT | Văn bản chỉ đạo |  | Trung bình | Có | 2026-09-01 | 2026-09-24 |  | Đang làm | 90 |
| T-117 | Rà soát kế hoạch kinh doanh năm 2027 | Ban Tổng giám đốc | PTGD-KD | CT | Kết luận họp giao ban |  | Thấp | Không | 2026-10-10 | 2026-11-05 |  | Tạm dừng | 30 |
| T-118 | Rà soát kế hoạch kinh doanh năm 2027 | Ban Tổng giám đốc | PTGD-KD | CT | Văn bản chỉ đạo |  | Trung bình | Không | 2026-10-17 | 2026-10-31 |  | Đang làm | 30 |
| T-119 | Rà soát kế hoạch kinh doanh năm 2027 | Ban Tổng giám đốc | PTGD-TC | CT | Giao trực tiếp |  | Trung bình | Không | 2026-10-06 | 2026-11-09 |  | Chưa bắt đầu | 0 |
| T-120 | Làm việc với đối tác về giống ngô lai | Ban Tổng giám đốc | PTGD-KD | CT | Văn bản chỉ đạo |  | Cao | Có | 2026-10-27 | 2026-11-03 | 2026-10-19 | Hoàn thành | 100 |
| T-121 | Làm việc với đối tác về giống ngô lai | Ban Tổng giám đốc | TGD | CT | Kế hoạch dự án |  | Trung bình | Không | 2026-11-10 | 2026-11-20 |  | Tạm dừng | 10 |
| T-122 | Làm việc với đối tác về giống ngô lai | Ban Tổng giám đốc | TGD | CT | Kết luận họp giao ban |  | Cao | Có | 2026-09-28 | 2026-10-08 | 2026-10-04 | Hoàn thành | 100 |
| T-123 | Phê duyệt chiến lược kênh phân phối | Ban Tổng giám đốc | PTGD-RD | CT | Giao trực tiếp |  | Cao | Có | 2026-09-09 | 2026-10-20 | 2026-10-19 | Hoàn thành | 100 |
| T-124 | Phê duyệt chiến lược kênh phân phối | Ban Tổng giám đốc | TGD | CT | Kế hoạch dự án |  | Cao | Có | 2026-09-21 | 2026-10-02 | 2026-09-29 | Hoàn thành | 100 |
| T-125 | Phê duyệt chiến lược kênh phân phối | Ban Tổng giám đốc | PTGD-RD | CT | Giao trực tiếp |  | Trung bình | Không | 2026-08-20 | 2026-09-24 |  | Đang làm | 70 |

## 3. Dự án chiến lược
<a id="3-projects"></a>

- Tệp: `dashboard/data/projects.json` · 6 dòng
- Nguồn dự kiến: Base Project
- Dùng ở tab: Điều hành

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `id` | Mã dự án |
| `name` | Tên dự án |
| `dept` | Đơn vị |
| `owner` | Người phụ trách |
| `start` | Bắt đầu |
| `end` | Kết thúc |
| `tasks_total` | Số đầu việc |
| `tasks_done` | Đầu việc đã xong |
| `progress` | Tiến độ thực tế % |
| `plan` | Tiến độ kế hoạch % (thời gian đã qua) |
| `status` | Trạng thái |
| `cost_plan` | Chi phí kế hoạch (đ) |
| `revenue_plan` | Doanh thu dự kiến (đ) |
| `milestones` | Mốc (JSON) |
| `next_milestone` | Mốc kế tiếp |
| `next_due` | Hạn mốc kế tiếp |
| `late_days` | Số ngày trễ mốc |
| `risks` | Rủi ro (JSON) |

**Dữ liệu**

| id | name | dept | owner | start | end | tasks_total | tasks_done | progress | plan | status | cost_plan | revenue_plan | milestones | next_milestone | next_due | late_days | risks |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| VSD26 | Mở rộng vùng sản xuất lúa giống Thu Đông 2026 | Khối Sản xuất | SX1 | 2026-09-01 | 2027-03-05 | 12 | 4 | 33 | 26 | Chậm tiến độ | 5195000000 | 6000000000 | [{"name": "Hoàn tất ký hợp đồng liên kết 120 hộ", "due": "2026-09-30", "done": null}, {"name": "Gieo cấy xong 100% diện tích 450 ha", "due": "2026-10-30", "done": null}, {"name": "Đạt kiểm định đồng ruộng", "due": "2026-12-23", "done": null}, {"name": "Nhập kho lô hạt giống thương phẩm", "due": "2027-02-05", "done": null}] | Hoàn tất ký hợp đồng liên kết 120 hộ | 2026-09-30 | 19 | [{"name": "Mưa muộn ảnh hưởng thời điểm gieo cấy ở 2 điểm vùng trũng", "level": "Cao"}, {"name": "Lịch trỗ bố mẹ chưa đồng đều tại điểm sản xuất số 3", "level": "Trung bình"}, {"name": "Nguy cơ rầy nâu giai đoạn đẻ nhánh", "level": "Trung bình"}] |
| HTHN2 | Nhà máy chế biến hạt giống Hitech Hà Nam – giai đoạn 2 | Đầu tư – Dự án | DA1 | 2026-03-01 | 2027-01-31 | 26 | 14 | 54 | 69 | Chậm tiến độ | 48000000000 | 0 | [{"name": "Hoàn thiện nhà xưởng", "due": "2026-07-15", "done": "2026-07-28"}, {"name": "Lắp đặt dây chuyền sấy – tách hạt", "due": "2026-10-10", "done": null}, {"name": "Chạy thử không tải", "due": "2026-11-20", "done": null}, {"name": "Nghiệm thu, đưa vào vận hành", "due": "2027-01-31", "done": null}] | Lắp đặt dây chuyền sấy – tách hạt | 2026-10-10 | 9 | [{"name": "Thiết bị nhập khẩu giao chậm 3 tuần", "level": "Cao"}, {"name": "Chi phí lắp đặt vượt dự toán 4%", "level": "Trung bình"}] |
| KN-DX27 | Khảo nghiệm 3 giống lúa chất lượng cao vụ Đông Xuân | Nghiên cứu & Phát triển | RD1 | 2026-08-15 | 2027-05-30 | 18 | 8 | 44 | 23 | Đúng tiến độ | 1250000000 | 0 | [{"name": "Chọn điểm khảo nghiệm 6 tỉnh", "due": "2026-09-15", "done": "2026-09-12"}, {"name": "Gieo mạ khảo nghiệm", "due": "2026-12-20", "done": null}, {"name": "Đánh giá giữa vụ", "due": "2027-03-15", "done": null}] | Gieo mạ khảo nghiệm | 2026-12-20 | 0 | [{"name": "Thiếu cán bộ theo dõi tại 2 điểm", "level": "Trung bình"}] |
| DL-MT | Mở rộng kênh đại lý cấp 1 miền Trung | Khối Kinh doanh | KD2 | 2026-07-01 | 2026-12-31 | 20 | 6 | 30 | 60 | Chậm tiến độ | 2100000000 | 18000000000 | [{"name": "Ký 15 đại lý cấp 1 mới", "due": "2026-09-30", "done": null}, {"name": "Hội nghị khách hàng miền Trung", "due": "2026-11-10", "done": null}, {"name": "Đạt 60% doanh số kế hoạch", "due": "2026-12-31", "done": null}] | Ký 15 đại lý cấp 1 mới | 2026-09-30 | 19 | [{"name": "Đối thủ giảm giá mạnh tại Nghệ An", "level": "Cao"}, {"name": "Công nợ đại lý mới vượt hạn mức", "level": "Trung bình"}] |
| KHO-L | Hệ thống kho lạnh bảo quản hạt giống | Đầu tư – Dự án | DA2 | 2026-04-01 | 2026-12-15 | 15 | 12 | 80 | 78 | Đúng tiến độ | 12500000000 | 0 | [{"name": "Hoàn thiện kho số 1", "due": "2026-08-30", "done": "2026-08-29"}, {"name": "Hoàn thiện kho số 2", "due": "2026-11-15", "done": null}] | Hoàn thiện kho số 2 | 2026-11-15 | 0 | [] |
| B20 | Chuyển đổi số quản trị vận hành (Base 2.0) | Hành chính – Nhân sự | NS1 | 2026-10-01 | 2027-03-31 | 10 | 2 | 20 | 10 | Đúng tiến độ | 0 | 0 | [{"name": "Chốt phạm vi kiểm thử", "due": "2026-10-25", "done": null}, {"name": "Vận hành thử 30 tài khoản", "due": "2026-11-30", "done": null}] | Chốt phạm vi kiểm thử | 2026-10-25 | 0 | [{"name": "Dữ liệu đầu vào cung cấp chậm", "level": "Trung bình"}] |

## 4. Lịch công tác Ban TGĐ
<a id="4-events"></a>

- Tệp: `dashboard/data/events.json` · 120 dòng
- Nguồn dự kiến: Base Meeting, Booking
- Dùng ở tab: Điều hành

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `id` | Mã lịch |
| `date` | Ngày |
| `start` | Bắt đầu |
| `end` | Kết thúc |
| `person` | Lãnh đạo |
| `title` | Nội dung |
| `type` | Loại lịch |
| `place` | Địa điểm |
| `resource` | Phòng họp / xe |
| `related_dept` | Phòng ban liên quan |

**Dữ liệu**

| id | date | start | end | person | title | type | place | resource | related_dept |
|---|---|---|---|---|---|---|---|---|---|
| L-001 | 2026-10-12 | 08:00 | 10:00 | CT | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-002 | 2026-10-12 | 13:00 | 14:00 | CT | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-003 | 2026-10-12 | 08:00 | 10:00 | TGD | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-004 | 2026-10-12 | 13:00 | 15:00 | TGD | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-005 | 2026-10-12 | 08:00 | 10:00 | PTGD-SX | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-006 | 2026-10-12 | 13:00 | 14:00 | PTGD-SX | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-007 | 2026-10-12 | 08:00 | 09:00 | PTGD-KD | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-008 | 2026-10-12 | 13:00 | 17:00 | PTGD-KD | Hội nghị khách hàng khu vực | Công tác | Chi nhánh Thái Bình | Xe 16 chỗ | Khối Kinh doanh |
| L-009 | 2026-10-12 | 08:00 | 10:00 | PTGD-TC | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-010 | 2026-10-12 | 13:00 | 15:00 | PTGD-TC | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-011 | 2026-10-12 | 08:00 | 10:00 | PTGD-RD | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-012 | 2026-10-12 | 13:00 | 17:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-013 | 2026-10-13 | 08:00 | 09:00 | CT | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-014 | 2026-10-13 | 08:00 | 10:00 | TGD | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-015 | 2026-10-13 | 08:00 | 09:00 | PTGD-SX | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-016 | 2026-10-13 | 08:00 | 12:00 | PTGD-KD | Hội nghị khách hàng khu vực | Công tác | Chi nhánh Thái Bình | Xe 16 chỗ | Khối Kinh doanh |
| L-017 | 2026-10-13 | 08:00 | 10:00 | PTGD-TC | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-018 | 2026-10-13 | 08:00 | 12:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-019 | 2026-10-14 | 08:00 | 09:00 | CT | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-020 | 2026-10-14 | 08:00 | 10:00 | TGD | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-021 | 2026-10-14 | 08:00 | 10:00 | PTGD-SX | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-022 | 2026-10-14 | 08:00 | 12:00 | PTGD-KD | Làm việc với đại lý cấp 1 | Công tác | Chi nhánh Nghệ An | Xe 16 chỗ | Khối Kinh doanh |
| L-023 | 2026-10-14 | 08:00 | 09:00 | PTGD-TC | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-024 | 2026-10-14 | 08:00 | 12:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-025 | 2026-10-15 | 08:00 | 09:00 | CT | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-026 | 2026-10-15 | 08:00 | 10:00 | TGD | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-027 | 2026-10-15 | 08:00 | 09:00 | PTGD-SX | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-028 | 2026-10-15 | 08:00 | 12:00 | PTGD-KD | Hội nghị khách hàng khu vực | Công tác | Chi nhánh Thái Bình | Xe 16 chỗ | Khối Kinh doanh |
| L-029 | 2026-10-15 | 08:00 | 10:00 | PTGD-TC | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-030 | 2026-10-15 | 08:00 | 12:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-031 | 2026-10-16 | 08:00 | 10:00 | CT | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-032 | 2026-10-16 | 08:00 | 09:00 | TGD | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-033 | 2026-10-16 | 08:00 | 12:00 | PTGD-SX | Kiểm tra đồng ruộng vùng liên kết | Công tác | Vùng sản xuất Nam Định | Xe 7 chỗ | Khối Sản xuất |
| L-034 | 2026-10-16 | 08:00 | 12:00 | PTGD-KD | Làm việc với đại lý cấp 1 | Công tác | Chi nhánh Nghệ An | Xe 16 chỗ | Khối Kinh doanh |
| L-035 | 2026-10-16 | 08:00 | 09:00 | PTGD-TC | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-036 | 2026-10-16 | 08:00 | 12:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-037 | 2026-10-19 | 08:00 | 10:00 | CT | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-038 | 2026-10-19 | 13:00 | 14:00 | CT | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-039 | 2026-10-19 | 08:00 | 09:00 | TGD | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-040 | 2026-10-19 | 13:00 | 14:00 | TGD | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-041 | 2026-10-19 | 08:00 | 10:00 | PTGD-SX | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-042 | 2026-10-19 | 13:00 | 17:00 | PTGD-SX | Kiểm tra tiến độ lắp đặt dây chuyền | Công tác | Nhà máy Hitech Hà Nam | Xe 7 chỗ | Đầu tư – Dự án |
| L-043 | 2026-10-19 | 08:00 | 10:00 | PTGD-KD | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-044 | 2026-10-19 | 13:00 | 17:00 | PTGD-KD | Làm việc với đại lý cấp 1 | Công tác | Chi nhánh Nghệ An | Xe 16 chỗ | Khối Kinh doanh |
| L-045 | 2026-10-19 | 08:00 | 10:00 | PTGD-TC | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-046 | 2026-10-19 | 13:00 | 15:00 | PTGD-TC | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-047 | 2026-10-19 | 08:00 | 09:00 | PTGD-RD | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-048 | 2026-10-19 | 13:00 | 17:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-049 | 2026-10-20 | 08:00 | 10:00 | CT | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-050 | 2026-10-20 | 08:00 | 09:00 | TGD | Làm việc với Phòng HCNS về Base 2.0 | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 3 | Hành chính – Nhân sự |
| L-051 | 2026-10-20 | 08:00 | 12:00 | PTGD-SX | Kiểm tra tiến độ lắp đặt dây chuyền | Công tác | Nhà máy Hitech Hà Nam | Xe 7 chỗ | Đầu tư – Dự án |
| L-052 | 2026-10-20 | 08:00 | 12:00 | PTGD-KD | Làm việc với đại lý cấp 1 | Công tác | Chi nhánh Nghệ An | Xe 16 chỗ | Khối Kinh doanh |
| L-053 | 2026-10-20 | 08:00 | 09:00 | PTGD-TC | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-054 | 2026-10-20 | 08:00 | 12:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-055 | 2026-10-21 | 08:00 | 10:00 | CT | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-056 | 2026-10-21 | 08:00 | 09:00 | TGD | Làm việc với Phòng HCNS về Base 2.0 | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 3 | Hành chính – Nhân sự |
| L-057 | 2026-10-21 | 08:00 | 12:00 | PTGD-SX | Kiểm tra đồng ruộng vùng liên kết | Công tác | Vùng sản xuất Nam Định | Xe 7 chỗ | Khối Sản xuất |
| L-058 | 2026-10-21 | 08:00 | 12:00 | PTGD-KD | Làm việc với đại lý cấp 1 | Công tác | Chi nhánh Nghệ An | Xe 16 chỗ | Khối Kinh doanh |
| L-059 | 2026-10-21 | 08:00 | 10:00 | PTGD-TC | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-060 | 2026-10-21 | 08:00 | 12:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-061 | 2026-10-22 | 08:00 | 09:00 | CT | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-062 | 2026-10-22 | 08:00 | 10:00 | TGD | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-063 | 2026-10-22 | 08:00 | 10:00 | PTGD-SX | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-064 | 2026-10-22 | 08:00 | 12:00 | PTGD-KD | Hội nghị khách hàng khu vực | Công tác | Chi nhánh Thái Bình | Xe 16 chỗ | Khối Kinh doanh |
| L-065 | 2026-10-22 | 08:00 | 10:00 | PTGD-TC | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-066 | 2026-10-22 | 08:00 | 12:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-067 | 2026-10-23 | 08:00 | 10:00 | CT | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-068 | 2026-10-23 | 08:00 | 09:00 | TGD | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-069 | 2026-10-23 | 08:00 | 10:00 | PTGD-SX | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-070 | 2026-10-23 | 08:00 | 12:00 | PTGD-KD | Hội nghị khách hàng khu vực | Công tác | Chi nhánh Thái Bình | Xe 16 chỗ | Khối Kinh doanh |
| L-071 | 2026-10-23 | 08:00 | 09:00 | PTGD-TC | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-072 | 2026-10-23 | 08:00 | 12:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-073 | 2026-10-26 | 08:00 | 09:00 | CT | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-074 | 2026-10-26 | 13:00 | 14:00 | CT | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-075 | 2026-10-26 | 08:00 | 09:00 | TGD | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-076 | 2026-10-26 | 13:00 | 14:00 | TGD | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-077 | 2026-10-26 | 08:00 | 10:00 | PTGD-SX | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-078 | 2026-10-26 | 13:00 | 17:00 | PTGD-SX | Kiểm tra tiến độ lắp đặt dây chuyền | Công tác | Nhà máy Hitech Hà Nam | Xe 7 chỗ | Đầu tư – Dự án |
| L-079 | 2026-10-26 | 08:00 | 10:00 | PTGD-KD | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-080 | 2026-10-26 | 13:00 | 17:00 | PTGD-KD | Làm việc với đại lý cấp 1 | Công tác | Chi nhánh Nghệ An | Xe 16 chỗ | Khối Kinh doanh |
| L-081 | 2026-10-26 | 08:00 | 10:00 | PTGD-TC | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-082 | 2026-10-26 | 13:00 | 15:00 | PTGD-TC | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-083 | 2026-10-26 | 08:00 | 09:00 | PTGD-RD | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-084 | 2026-10-26 | 13:00 | 17:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-085 | 2026-10-27 | 08:00 | 10:00 | CT | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-086 | 2026-10-27 | 08:00 | 10:00 | TGD | Làm việc với Phòng HCNS về Base 2.0 | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 3 | Hành chính – Nhân sự |
| L-087 | 2026-10-27 | 08:00 | 10:00 | PTGD-SX | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-088 | 2026-10-27 | 08:00 | 12:00 | PTGD-KD | Hội nghị khách hàng khu vực | Công tác | Chi nhánh Thái Bình | Xe 16 chỗ | Khối Kinh doanh |
| L-089 | 2026-10-27 | 08:00 | 10:00 | PTGD-TC | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-090 | 2026-10-27 | 08:00 | 12:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-091 | 2026-10-28 | 08:00 | 09:00 | CT | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-092 | 2026-10-28 | 08:00 | 10:00 | TGD | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-093 | 2026-10-28 | 08:00 | 12:00 | PTGD-SX | Kiểm tra đồng ruộng vùng liên kết | Công tác | Vùng sản xuất Nam Định | Xe 7 chỗ | Khối Sản xuất |
| L-094 | 2026-10-28 | 08:00 | 12:00 | PTGD-KD | Làm việc với đại lý cấp 1 | Công tác | Chi nhánh Nghệ An | Xe 16 chỗ | Khối Kinh doanh |
| L-095 | 2026-10-28 | 08:00 | 10:00 | PTGD-TC | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-096 | 2026-10-28 | 08:00 | 12:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-097 | 2026-10-29 | 08:00 | 10:00 | CT | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-098 | 2026-10-29 | 08:00 | 09:00 | TGD | Làm việc với Phòng HCNS về Base 2.0 | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 3 | Hành chính – Nhân sự |
| L-099 | 2026-10-29 | 08:00 | 12:00 | PTGD-SX | Kiểm tra tiến độ lắp đặt dây chuyền | Công tác | Nhà máy Hitech Hà Nam | Xe 7 chỗ | Đầu tư – Dự án |
| L-100 | 2026-10-29 | 08:00 | 12:00 | PTGD-KD | Hội nghị khách hàng khu vực | Công tác | Chi nhánh Thái Bình | Xe 16 chỗ | Khối Kinh doanh |
| L-101 | 2026-10-29 | 08:00 | 10:00 | PTGD-TC | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-102 | 2026-10-29 | 08:00 | 12:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-103 | 2026-10-30 | 08:00 | 10:00 | CT | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-104 | 2026-10-30 | 08:00 | 09:00 | TGD | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-105 | 2026-10-30 | 08:00 | 12:00 | PTGD-SX | Kiểm tra đồng ruộng vùng liên kết | Công tác | Vùng sản xuất Nam Định | Xe 7 chỗ | Khối Sản xuất |
| L-106 | 2026-10-30 | 08:00 | 12:00 | PTGD-KD | Làm việc với đại lý cấp 1 | Công tác | Chi nhánh Nghệ An | Xe 16 chỗ | Khối Kinh doanh |
| L-107 | 2026-10-30 | 08:00 | 09:00 | PTGD-TC | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-108 | 2026-10-30 | 08:00 | 12:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |
| L-109 | 2026-11-02 | 08:00 | 10:00 | CT | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-110 | 2026-11-02 | 13:00 | 15:00 | CT | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-111 | 2026-11-02 | 08:00 | 10:00 | TGD | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-112 | 2026-11-02 | 13:00 | 14:00 | TGD | Họp duyệt ngân sách 2027 | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 | Tài chính – Kế toán |
| L-113 | 2026-11-02 | 08:00 | 10:00 | PTGD-SX | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-114 | 2026-11-02 | 13:00 | 14:00 | PTGD-SX | Làm việc với Khối Sản xuất về tiến độ vụ Thu Đông | Làm việc với phòng ban | Trụ sở Hà Nội | Phòng họp 2 | Khối Sản xuất |
| L-115 | 2026-11-02 | 08:00 | 10:00 | PTGD-KD | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-116 | 2026-11-02 | 13:00 | 17:00 | PTGD-KD | Hội nghị khách hàng khu vực | Công tác | Chi nhánh Thái Bình | Xe 16 chỗ | Khối Kinh doanh |
| L-117 | 2026-11-02 | 08:00 | 10:00 | PTGD-TC | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-118 | 2026-11-02 | 13:00 | 15:00 | PTGD-TC | Tiếp đối tác cung ứng thiết bị | Tiếp khách | Trụ sở Hà Nội | Phòng khách VIP | Đầu tư – Dự án |
| L-119 | 2026-11-02 | 08:00 | 09:00 | PTGD-RD | Họp giao ban Ban TGĐ | Họp nội bộ | Trụ sở Hà Nội | Phòng họp 1 |  |
| L-120 | 2026-11-02 | 13:00 | 17:00 | PTGD-RD | Đánh giá điểm khảo nghiệm giống | Công tác | Trạm khảo nghiệm Hải Dương | Xe 7 chỗ | Nghiên cứu & Phát triển |

## 5. Tờ trình, phê duyệt
<a id="5-approvals"></a>

- Tệp: `dashboard/data/approvals.json` · 21 dòng
- Nguồn dự kiến: Base BPM
- Dùng ở tab: Điều hành

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `id` | Mã tờ trình |
| `title` | Nội dung |
| `kind` | Loại |
| `dept` | Đơn vị trình |
| `submitter` | Người trình |
| `approver` | Người duyệt |
| `submitted` | Ngày trình |
| `step` | Bước hiện tại |
| `step_since` | Vào bước từ ngày |
| `closed` | Ngày kết thúc |
| `urgent` | Gấp |
| `amount` | Giá trị (đ) |
| `waiting_days` | Số ngày chờ |

**Dữ liệu**

| id | title | kind | dept | submitter | approver | submitted | step | step_since | closed | urgent | amount | waiting_days |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TT-001 | Tờ trình duyệt giá thu mua lúa giống vụ Thu Đông | Duyệt giá thu mua | Khối Sản xuất | SX1 | CT | 2026-10-17 | B3 · Chờ Chủ tịch duyệt | 2026-10-18 |  | Có | 3600000000 | 1 |
| TT-002 | Tờ trình duyệt giá thu mua ngô giống vụ Đông | Duyệt giá thu mua | Khối Sản xuất | SX3 | CT | 2026-09-30 | B3 · Chờ Chủ tịch duyệt | 2026-10-19 |  | Có | 1850000000 | 0 |
| TT-003 | Đề xuất ngân sách hội nghị khách hàng miền Trung | Đề xuất chi | Khối Kinh doanh | KD3 | TGD | 2026-09-25 | Đã duyệt | 2026-10-10 | 2026-10-10 | Không | 420000000 | 0 |
| TT-004 | Đề xuất chính sách chiết khấu đại lý cấp 1 | Xin ý kiến chỉ đạo | Khối Kinh doanh | KD3 | CT | 2026-10-12 | Đã duyệt | 2026-10-17 | 2026-10-17 | Không |  | 0 |
| TT-005 | Phê duyệt dự toán điều chỉnh dây chuyền sấy | Đề xuất chi | Đầu tư – Dự án | DA2 | CT | 2026-10-11 | B2 · Rà soát TC & SX | 2026-10-18 |  | Có | 1920000000 | 1 |
| TT-006 | Hợp đồng lắp đặt kho lạnh số 2 | Hợp đồng | Đầu tư – Dự án | DA2 | CT | 2026-09-30 | B3 · Chờ Chủ tịch duyệt | 2026-10-14 |  | Có | 5400000000 | 5 |
| TT-007 | Quyết định bổ nhiệm Trưởng vùng sản xuất | Quyết định nhân sự | Hành chính – Nhân sự | NS2 | CT | 2026-09-26 | Đã duyệt | 2026-10-05 | 2026-10-05 | Không |  | 0 |
| TT-008 | Kế hoạch tuyển dụng kỹ sư nông nghiệp 2027 | Xin ý kiến chỉ đạo | Hành chính – Nhân sự | NS2 | CT | 2026-09-25 | B3 · Chờ Chủ tịch duyệt | 2026-10-17 |  | Không |  | 2 |
| TT-009 | Phương án vốn lưu động vụ Đông Xuân | Xin ý kiến chỉ đạo | Tài chính – Kế toán | TC1 | CT | 2026-10-03 | B3 · Chờ Chủ tịch duyệt | 2026-10-13 |  | Không | 25000000000 | 6 |
| TT-010 | Hồ sơ đăng ký công nhận giống lúa mới | Xin ý kiến chỉ đạo | Nghiên cứu & Phát triển | RD1 | CT | 2026-09-27 | Đã duyệt | 2026-09-30 | 2026-09-30 | Không |  | 0 |
| TT-011 | Đề xuất mua thiết bị phòng kiểm nghiệm | Đề xuất chi | Nghiên cứu & Phát triển | RD2 | TGD | 2026-10-09 | Đã duyệt | 2026-10-14 | 2026-10-14 | Không | 780000000 | 0 |
| TT-012 | Tờ trình phương án ứng phó mưa muộn vùng trũng | Xin ý kiến chỉ đạo | Khối Sản xuất | SX2 | TGD | 2026-10-19 | Đã duyệt | 2026-10-19 | 2026-10-19 | Không | 350000000 | 0 |
| TT-013 | Tờ trình duyệt giá thu mua ngô giống vụ Đông (bổ sung) | Duyệt giá thu mua | Khối Sản xuất | SX1 | CT | 2026-09-19 | Đã duyệt | 2026-10-12 | 2026-10-12 | Có | 1850000000 | 0 |
| TT-014 | Đề xuất ngân sách hội nghị khách hàng miền Trung (bổ sung) | Đề xuất chi | Khối Kinh doanh | KD2 | CT | 2026-10-09 | B2 · Rà soát TC & SX | 2026-10-13 |  | Không | 420000000 | 6 |
| TT-015 | Đề xuất chính sách chiết khấu đại lý cấp 1 (bổ sung) | Xin ý kiến chỉ đạo | Khối Kinh doanh | KD1 | CT | 2026-09-24 | B3 · Chờ Chủ tịch duyệt | 2026-10-18 |  | Không |  | 1 |
| TT-016 | Phê duyệt dự toán điều chỉnh dây chuyền sấy (bổ sung) | Đề xuất chi | Đầu tư – Dự án | DA2 | CT | 2026-10-13 | B1 · Lập đề nghị | 2026-10-13 |  | Không | 1920000000 | 6 |
| TT-017 | Hợp đồng lắp đặt kho lạnh số 2 (bổ sung) | Hợp đồng | Đầu tư – Dự án | DA1 | CT | 2026-10-13 | B1 · Lập đề nghị | 2026-10-13 |  | Không | 5400000000 | 6 |
| TT-018 | Phương án vốn lưu động vụ Đông Xuân (bổ sung) | Xin ý kiến chỉ đạo | Tài chính – Kế toán | TC2 | CT | 2026-09-24 | B2 · Rà soát TC & SX | 2026-09-30 |  | Không | 25000000000 | 19 |
| TT-019 | Hồ sơ đăng ký công nhận giống lúa mới (bổ sung) | Xin ý kiến chỉ đạo | Nghiên cứu & Phát triển | RD2 | TGD | 2026-10-07 | B1 · Lập đề nghị | 2026-10-15 |  | Không |  | 4 |
| TT-020 | Đề xuất mua thiết bị phòng kiểm nghiệm (bổ sung) | Đề xuất chi | Nghiên cứu & Phát triển | RD1 | TGD | 2026-09-21 | Đã duyệt | 2026-10-19 | 2026-10-19 | Không | 780000000 | 0 |
| TT-021 | Tờ trình phương án ứng phó mưa muộn vùng trũng (bổ sung) | Xin ý kiến chỉ đạo | Khối Sản xuất | SX1 | CT | 2026-10-04 | B3 · Chờ Chủ tịch duyệt | 2026-10-15 |  | Có | 350000000 | 4 |

## 6. Bán hàng theo tháng (BC1)
<a id="6-sales"></a>

- Tệp: `dashboard/data/sales.json` · 144 dòng
- Nguồn dự kiến: Fast
- Dùng ở tab: Kinh doanh; Tài chính

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `id` | Khoá dòng |
| `month` | Tháng |
| `region` | Vùng |
| `product` | Nhóm hàng |
| `owner` | Phụ trách vùng |
| `dept` | Phòng ban |
| `plan_bn` | Kế hoạch (tỷ) |
| `actual_bn` | Thực hiện (tỷ) |
| `volume_t` | Sản lượng (tấn) |
| `margin_pct` | Biên lãi gộp % |

**Dữ liệu**

| id | month | region | product | owner | dept | plan_bn | actual_bn | volume_t | margin_pct |
|---|---|---|---|---|---|---|---|---|---|
| 2026-01\|Miền Bắc\|Lúa giống thuần | 2026-01 | Miền Bắc | Lúa giống thuần | KD1 | Khối Kinh doanh | 78.0 | 71.4 | 2231 | 24.3 |
| 2026-01\|Miền Bắc\|Lúa giống lai | 2026-01 | Miền Bắc | Lúa giống lai | KD1 | Khối Kinh doanh | 33.0 | 35.3 | 372 | 31.0 |
| 2026-01\|Miền Bắc\|Ngô giống | 2026-01 | Miền Bắc | Ngô giống | KD1 | Khối Kinh doanh | 25.5 | 26.7 | 243 | 27.6 |
| 2026-01\|Miền Bắc\|Hạt giống rau | 2026-01 | Miền Bắc | Hạt giống rau | KD1 | Khối Kinh doanh | 9.0 | 9.8 | 16 | 37.0 |
| 2026-01\|Miền Trung\|Lúa giống thuần | 2026-01 | Miền Trung | Lúa giống thuần | KD2 | Khối Kinh doanh | 48.4 | 51.8 | 1619 | 23.3 |
| 2026-01\|Miền Trung\|Lúa giống lai | 2026-01 | Miền Trung | Lúa giống lai | KD2 | Khối Kinh doanh | 20.5 | 22.1 | 233 | 31.8 |
| 2026-01\|Miền Trung\|Ngô giống | 2026-01 | Miền Trung | Ngô giống | KD2 | Khối Kinh doanh | 15.8 | 15.1 | 137 | 27.6 |
| 2026-01\|Miền Trung\|Hạt giống rau | 2026-01 | Miền Trung | Hạt giống rau | KD2 | Khối Kinh doanh | 5.6 | 5.9 | 10 | 36.7 |
| 2026-01\|Miền Nam\|Lúa giống thuần | 2026-01 | Miền Nam | Lúa giống thuần | KD3 | Khối Kinh doanh | 60.8 | 59.6 | 1862 | 23.2 |
| 2026-01\|Miền Nam\|Lúa giống lai | 2026-01 | Miền Nam | Lúa giống lai | KD3 | Khối Kinh doanh | 25.7 | 22.6 | 238 | 30.9 |
| 2026-01\|Miền Nam\|Ngô giống | 2026-01 | Miền Nam | Ngô giống | KD3 | Khối Kinh doanh | 19.9 | 21.4 | 195 | 28.9 |
| 2026-01\|Miền Nam\|Hạt giống rau | 2026-01 | Miền Nam | Hạt giống rau | KD3 | Khối Kinh doanh | 7.0 | 6.9 | 12 | 37.0 |
| 2026-02\|Miền Bắc\|Lúa giống thuần | 2026-02 | Miền Bắc | Lúa giống thuần | KD1 | Khối Kinh doanh | 70.2 | 61.6 | 1925 | 22.0 |
| 2026-02\|Miền Bắc\|Lúa giống lai | 2026-02 | Miền Bắc | Lúa giống lai | KD1 | Khối Kinh doanh | 29.7 | 32.2 | 339 | 33.4 |
| 2026-02\|Miền Bắc\|Ngô giống | 2026-02 | Miền Bắc | Ngô giống | KD1 | Khối Kinh doanh | 23.0 | 22.0 | 200 | 26.6 |
| 2026-02\|Miền Bắc\|Hạt giống rau | 2026-02 | Miền Bắc | Hạt giống rau | KD1 | Khối Kinh doanh | 8.1 | 8.4 | 14 | 36.2 |
| 2026-02\|Miền Trung\|Lúa giống thuần | 2026-02 | Miền Trung | Lúa giống thuần | KD2 | Khối Kinh doanh | 43.5 | 47.3 | 1478 | 22.4 |
| 2026-02\|Miền Trung\|Lúa giống lai | 2026-02 | Miền Trung | Lúa giống lai | KD2 | Khối Kinh doanh | 18.4 | 18.5 | 195 | 30.3 |
| 2026-02\|Miền Trung\|Ngô giống | 2026-02 | Miền Trung | Ngô giống | KD2 | Khối Kinh doanh | 14.2 | 13.2 | 120 | 28.8 |
| 2026-02\|Miền Trung\|Hạt giống rau | 2026-02 | Miền Trung | Hạt giống rau | KD2 | Khối Kinh doanh | 5.0 | 5.0 | 8 | 35.9 |
| 2026-02\|Miền Nam\|Lúa giống thuần | 2026-02 | Miền Nam | Lúa giống thuần | KD3 | Khối Kinh doanh | 54.8 | 55.6 | 1738 | 22.6 |
| 2026-02\|Miền Nam\|Lúa giống lai | 2026-02 | Miền Nam | Lúa giống lai | KD3 | Khối Kinh doanh | 23.2 | 24.1 | 254 | 28.9 |
| 2026-02\|Miền Nam\|Ngô giống | 2026-02 | Miền Nam | Ngô giống | KD3 | Khối Kinh doanh | 17.9 | 17.3 | 157 | 29.4 |
| 2026-02\|Miền Nam\|Hạt giống rau | 2026-02 | Miền Nam | Hạt giống rau | KD3 | Khối Kinh doanh | 6.3 | 5.8 | 10 | 35.8 |
| 2026-03\|Miền Bắc\|Lúa giống thuần | 2026-03 | Miền Bắc | Lúa giống thuần | KD1 | Khối Kinh doanh | 36.4 | 35.9 | 1122 | 25.3 |
| 2026-03\|Miền Bắc\|Lúa giống lai | 2026-03 | Miền Bắc | Lúa giống lai | KD1 | Khối Kinh doanh | 15.4 | 16.8 | 177 | 30.5 |
| 2026-03\|Miền Bắc\|Ngô giống | 2026-03 | Miền Bắc | Ngô giống | KD1 | Khối Kinh doanh | 11.9 | 11.8 | 107 | 28.6 |
| 2026-03\|Miền Bắc\|Hạt giống rau | 2026-03 | Miền Bắc | Hạt giống rau | KD1 | Khối Kinh doanh | 4.2 | 4.5 | 8 | 35.6 |
| 2026-03\|Miền Trung\|Lúa giống thuần | 2026-03 | Miền Trung | Lúa giống thuần | KD2 | Khối Kinh doanh | 22.6 | 21.1 | 659 | 23.2 |
| 2026-03\|Miền Trung\|Lúa giống lai | 2026-03 | Miền Trung | Lúa giống lai | KD2 | Khối Kinh doanh | 9.5 | 9.5 | 100 | 30.8 |
| 2026-03\|Miền Trung\|Ngô giống | 2026-03 | Miền Trung | Ngô giống | KD2 | Khối Kinh doanh | 7.4 | 7.1 | 65 | 26.9 |
| 2026-03\|Miền Trung\|Hạt giống rau | 2026-03 | Miền Trung | Hạt giống rau | KD2 | Khối Kinh doanh | 2.6 | 2.6 | 4 | 36.1 |
| 2026-03\|Miền Nam\|Lúa giống thuần | 2026-03 | Miền Nam | Lúa giống thuần | KD3 | Khối Kinh doanh | 28.4 | 28.1 | 878 | 25.1 |
| 2026-03\|Miền Nam\|Lúa giống lai | 2026-03 | Miền Nam | Lúa giống lai | KD3 | Khối Kinh doanh | 12.0 | 12.6 | 133 | 32.6 |
| 2026-03\|Miền Nam\|Ngô giống | 2026-03 | Miền Nam | Ngô giống | KD3 | Khối Kinh doanh | 9.3 | 10.0 | 91 | 29.9 |
| 2026-03\|Miền Nam\|Hạt giống rau | 2026-03 | Miền Nam | Hạt giống rau | KD3 | Khối Kinh doanh | 3.3 | 3.4 | 6 | 40.3 |
| 2026-04\|Miền Bắc\|Lúa giống thuần | 2026-04 | Miền Bắc | Lúa giống thuần | KD1 | Khối Kinh doanh | 31.2 | 30.4 | 950 | 21.5 |
| 2026-04\|Miền Bắc\|Lúa giống lai | 2026-04 | Miền Bắc | Lúa giống lai | KD1 | Khối Kinh doanh | 13.2 | 13.3 | 140 | 28.8 |
| 2026-04\|Miền Bắc\|Ngô giống | 2026-04 | Miền Bắc | Ngô giống | KD1 | Khối Kinh doanh | 10.2 | 9.9 | 90 | 30.3 |
| 2026-04\|Miền Bắc\|Hạt giống rau | 2026-04 | Miền Bắc | Hạt giống rau | KD1 | Khối Kinh doanh | 3.6 | 3.9 | 6 | 38.5 |
| 2026-04\|Miền Trung\|Lúa giống thuần | 2026-04 | Miền Trung | Lúa giống thuần | KD2 | Khối Kinh doanh | 19.3 | 18.5 | 578 | 21.6 |
| 2026-04\|Miền Trung\|Lúa giống lai | 2026-04 | Miền Trung | Lúa giống lai | KD2 | Khối Kinh doanh | 8.2 | 7.6 | 80 | 30.1 |
| 2026-04\|Miền Trung\|Ngô giống | 2026-04 | Miền Trung | Ngô giống | KD2 | Khối Kinh doanh | 6.3 | 6.4 | 58 | 25.6 |
| 2026-04\|Miền Trung\|Hạt giống rau | 2026-04 | Miền Trung | Hạt giống rau | KD2 | Khối Kinh doanh | 2.2 | 2.2 | 4 | 38.3 |
| 2026-04\|Miền Nam\|Lúa giống thuần | 2026-04 | Miền Nam | Lúa giống thuần | KD3 | Khối Kinh doanh | 24.3 | 24.0 | 750 | 22.4 |
| 2026-04\|Miền Nam\|Lúa giống lai | 2026-04 | Miền Nam | Lúa giống lai | KD3 | Khối Kinh doanh | 10.3 | 10.0 | 105 | 30.4 |
| 2026-04\|Miền Nam\|Ngô giống | 2026-04 | Miền Nam | Ngô giống | KD3 | Khối Kinh doanh | 8.0 | 8.4 | 76 | 28.6 |
| 2026-04\|Miền Nam\|Hạt giống rau | 2026-04 | Miền Nam | Hạt giống rau | KD3 | Khối Kinh doanh | 2.8 | 3.0 | 5 | 38.0 |
| 2026-05\|Miền Bắc\|Lúa giống thuần | 2026-05 | Miền Bắc | Lúa giống thuần | KD1 | Khối Kinh doanh | 44.2 | 46.9 | 1466 | 25.8 |
| 2026-05\|Miền Bắc\|Lúa giống lai | 2026-05 | Miền Bắc | Lúa giống lai | KD1 | Khối Kinh doanh | 18.7 | 16.9 | 178 | 32.6 |
| 2026-05\|Miền Bắc\|Ngô giống | 2026-05 | Miền Bắc | Ngô giống | KD1 | Khối Kinh doanh | 14.4 | 14.4 | 131 | 29.6 |
| 2026-05\|Miền Bắc\|Hạt giống rau | 2026-05 | Miền Bắc | Hạt giống rau | KD1 | Khối Kinh doanh | 5.1 | 4.8 | 8 | 35.5 |
| 2026-05\|Miền Trung\|Lúa giống thuần | 2026-05 | Miền Trung | Lúa giống thuần | KD2 | Khối Kinh doanh | 27.4 | 27.1 | 847 | 24.2 |
| 2026-05\|Miền Trung\|Lúa giống lai | 2026-05 | Miền Trung | Lúa giống lai | KD2 | Khối Kinh doanh | 11.6 | 10.3 | 108 | 30.2 |
| 2026-05\|Miền Trung\|Ngô giống | 2026-05 | Miền Trung | Ngô giống | KD2 | Khối Kinh doanh | 9.0 | 9.2 | 84 | 26.5 |
| 2026-05\|Miền Trung\|Hạt giống rau | 2026-05 | Miền Trung | Hạt giống rau | KD2 | Khối Kinh doanh | 3.2 | 3.2 | 5 | 37.1 |
| 2026-05\|Miền Nam\|Lúa giống thuần | 2026-05 | Miền Nam | Lúa giống thuần | KD3 | Khối Kinh doanh | 34.5 | 36.8 | 1150 | 25.4 |
| 2026-05\|Miền Nam\|Lúa giống lai | 2026-05 | Miền Nam | Lúa giống lai | KD3 | Khối Kinh doanh | 14.6 | 13.9 | 146 | 29.3 |
| 2026-05\|Miền Nam\|Ngô giống | 2026-05 | Miền Nam | Ngô giống | KD3 | Khối Kinh doanh | 11.3 | 11.8 | 107 | 27.6 |
| 2026-05\|Miền Nam\|Hạt giống rau | 2026-05 | Miền Nam | Hạt giống rau | KD3 | Khối Kinh doanh | 4.0 | 3.6 | 6 | 36.0 |
| 2026-06\|Miền Bắc\|Lúa giống thuần | 2026-06 | Miền Bắc | Lúa giống thuần | KD1 | Khối Kinh doanh | 65.0 | 69.8 | 2181 | 26.3 |
| 2026-06\|Miền Bắc\|Lúa giống lai | 2026-06 | Miền Bắc | Lúa giống lai | KD1 | Khối Kinh doanh | 27.5 | 24.4 | 257 | 29.7 |
| 2026-06\|Miền Bắc\|Ngô giống | 2026-06 | Miền Bắc | Ngô giống | KD1 | Khối Kinh doanh | 21.2 | 22.8 | 207 | 29.4 |
| 2026-06\|Miền Bắc\|Hạt giống rau | 2026-06 | Miền Bắc | Hạt giống rau | KD1 | Khối Kinh doanh | 7.5 | 6.5 | 11 | 37.6 |
| 2026-06\|Miền Trung\|Lúa giống thuần | 2026-06 | Miền Trung | Lúa giống thuần | KD2 | Khối Kinh doanh | 40.3 | 37.3 | 1166 | 22.0 |
| 2026-06\|Miền Trung\|Lúa giống lai | 2026-06 | Miền Trung | Lúa giống lai | KD2 | Khối Kinh doanh | 17.1 | 18.2 | 192 | 30.6 |
| 2026-06\|Miền Trung\|Ngô giống | 2026-06 | Miền Trung | Ngô giống | KD2 | Khối Kinh doanh | 13.2 | 12.2 | 111 | 27.9 |
| 2026-06\|Miền Trung\|Hạt giống rau | 2026-06 | Miền Trung | Hạt giống rau | KD2 | Khối Kinh doanh | 4.6 | 4.8 | 8 | 36.7 |
| 2026-06\|Miền Nam\|Lúa giống thuần | 2026-06 | Miền Nam | Lúa giống thuần | KD3 | Khối Kinh doanh | 50.7 | 48.9 | 1528 | 22.0 |
| 2026-06\|Miền Nam\|Lúa giống lai | 2026-06 | Miền Nam | Lúa giống lai | KD3 | Khối Kinh doanh | 21.4 | 19.5 | 205 | 29.0 |
| 2026-06\|Miền Nam\|Ngô giống | 2026-06 | Miền Nam | Ngô giống | KD3 | Khối Kinh doanh | 16.6 | 15.8 | 144 | 29.6 |
| 2026-06\|Miền Nam\|Hạt giống rau | 2026-06 | Miền Nam | Hạt giống rau | KD3 | Khối Kinh doanh | 5.8 | 5.2 | 9 | 36.0 |
| 2026-07\|Miền Bắc\|Lúa giống thuần | 2026-07 | Miền Bắc | Lúa giống thuần | KD1 | Khối Kinh doanh | 67.6 | 64.2 | 2006 | 24.1 |
| 2026-07\|Miền Bắc\|Lúa giống lai | 2026-07 | Miền Bắc | Lúa giống lai | KD1 | Khối Kinh doanh | 28.6 | 26.8 | 282 | 31.8 |
| 2026-07\|Miền Bắc\|Ngô giống | 2026-07 | Miền Bắc | Ngô giống | KD1 | Khối Kinh doanh | 22.1 | 21.3 | 194 | 29.6 |
| 2026-07\|Miền Bắc\|Hạt giống rau | 2026-07 | Miền Bắc | Hạt giống rau | KD1 | Khối Kinh doanh | 7.8 | 8.0 | 13 | 35.5 |
| 2026-07\|Miền Trung\|Lúa giống thuần | 2026-07 | Miền Trung | Lúa giống thuần | KD2 | Khối Kinh doanh | 41.9 | 45.6 | 1425 | 26.3 |
| 2026-07\|Miền Trung\|Lúa giống lai | 2026-07 | Miền Trung | Lúa giống lai | KD2 | Khối Kinh doanh | 17.7 | 19.0 | 200 | 33.3 |
| 2026-07\|Miền Trung\|Ngô giống | 2026-07 | Miền Trung | Ngô giống | KD2 | Khối Kinh doanh | 13.7 | 14.5 | 132 | 30.1 |
| 2026-07\|Miền Trung\|Hạt giống rau | 2026-07 | Miền Trung | Hạt giống rau | KD2 | Khối Kinh doanh | 4.8 | 4.4 | 7 | 37.6 |
| 2026-07\|Miền Nam\|Lúa giống thuần | 2026-07 | Miền Nam | Lúa giống thuần | KD3 | Khối Kinh doanh | 52.7 | 56.0 | 1750 | 26.1 |
| 2026-07\|Miền Nam\|Lúa giống lai | 2026-07 | Miền Nam | Lúa giống lai | KD3 | Khối Kinh doanh | 22.3 | 23.8 | 251 | 30.7 |
| 2026-07\|Miền Nam\|Ngô giống | 2026-07 | Miền Nam | Ngô giống | KD3 | Khối Kinh doanh | 17.2 | 18.5 | 168 | 27.7 |
| 2026-07\|Miền Nam\|Hạt giống rau | 2026-07 | Miền Nam | Hạt giống rau | KD3 | Khối Kinh doanh | 6.1 | 5.4 | 9 | 38.5 |
| 2026-08\|Miền Bắc\|Lúa giống thuần | 2026-08 | Miền Bắc | Lúa giống thuần | KD1 | Khối Kinh doanh | 46.8 | 42.3 | 1322 | 22.9 |
| 2026-08\|Miền Bắc\|Lúa giống lai | 2026-08 | Miền Bắc | Lúa giống lai | KD1 | Khối Kinh doanh | 19.8 | 18.5 | 195 | 29.5 |
| 2026-08\|Miền Bắc\|Ngô giống | 2026-08 | Miền Bắc | Ngô giống | KD1 | Khối Kinh doanh | 15.3 | 16.3 | 148 | 29.8 |
| 2026-08\|Miền Bắc\|Hạt giống rau | 2026-08 | Miền Bắc | Hạt giống rau | KD1 | Khối Kinh doanh | 5.4 | 5.3 | 9 | 37.6 |
| 2026-08\|Miền Trung\|Lúa giống thuần | 2026-08 | Miền Trung | Lúa giống thuần | KD2 | Khối Kinh doanh | 29.0 | 25.5 | 797 | 24.2 |
| 2026-08\|Miền Trung\|Lúa giống lai | 2026-08 | Miền Trung | Lúa giống lai | KD2 | Khối Kinh doanh | 12.3 | 9.1 | 96 | 28.6 |
| 2026-08\|Miền Trung\|Ngô giống | 2026-08 | Miền Trung | Ngô giống | KD2 | Khối Kinh doanh | 9.5 | 8.3 | 75 | 28.9 |
| 2026-08\|Miền Trung\|Hạt giống rau | 2026-08 | Miền Trung | Hạt giống rau | KD2 | Khối Kinh doanh | 3.3 | 2.9 | 5 | 37.3 |
| 2026-08\|Miền Nam\|Lúa giống thuần | 2026-08 | Miền Nam | Lúa giống thuần | KD3 | Khối Kinh doanh | 36.5 | 36.6 | 1144 | 21.7 |
| 2026-08\|Miền Nam\|Lúa giống lai | 2026-08 | Miền Nam | Lúa giống lai | KD3 | Khối Kinh doanh | 15.4 | 13.7 | 144 | 28.7 |
| 2026-08\|Miền Nam\|Ngô giống | 2026-08 | Miền Nam | Ngô giống | KD3 | Khối Kinh doanh | 11.9 | 11.8 | 107 | 27.4 |
| 2026-08\|Miền Nam\|Hạt giống rau | 2026-08 | Miền Nam | Hạt giống rau | KD3 | Khối Kinh doanh | 4.2 | 4.3 | 7 | 40.5 |
| 2026-09\|Miền Bắc\|Lúa giống thuần | 2026-09 | Miền Bắc | Lúa giống thuần | KD1 | Khối Kinh doanh | 39.0 | 34.8 | 1088 | 24.3 |
| 2026-09\|Miền Bắc\|Lúa giống lai | 2026-09 | Miền Bắc | Lúa giống lai | KD1 | Khối Kinh doanh | 16.5 | 14.7 | 155 | 28.7 |
| 2026-09\|Miền Bắc\|Ngô giống | 2026-09 | Miền Bắc | Ngô giống | KD1 | Khối Kinh doanh | 12.8 | 11.3 | 103 | 26.7 |
| 2026-09\|Miền Bắc\|Hạt giống rau | 2026-09 | Miền Bắc | Hạt giống rau | KD1 | Khối Kinh doanh | 4.5 | 4.2 | 7 | 40.3 |
| 2026-09\|Miền Trung\|Lúa giống thuần | 2026-09 | Miền Trung | Lúa giống thuần | KD2 | Khối Kinh doanh | 24.2 | 20.9 | 653 | 22.8 |
| 2026-09\|Miền Trung\|Lúa giống lai | 2026-09 | Miền Trung | Lúa giống lai | KD2 | Khối Kinh doanh | 10.2 | 8.7 | 92 | 30.4 |
| 2026-09\|Miền Trung\|Ngô giống | 2026-09 | Miền Trung | Ngô giống | KD2 | Khối Kinh doanh | 7.9 | 7.0 | 64 | 27.3 |
| 2026-09\|Miền Trung\|Hạt giống rau | 2026-09 | Miền Trung | Hạt giống rau | KD2 | Khối Kinh doanh | 2.8 | 2.4 | 4 | 39.1 |
| 2026-09\|Miền Nam\|Lúa giống thuần | 2026-09 | Miền Nam | Lúa giống thuần | KD3 | Khối Kinh doanh | 30.4 | 30.6 | 956 | 25.2 |
| 2026-09\|Miền Nam\|Lúa giống lai | 2026-09 | Miền Nam | Lúa giống lai | KD3 | Khối Kinh doanh | 12.9 | 12.7 | 134 | 28.5 |
| 2026-09\|Miền Nam\|Ngô giống | 2026-09 | Miền Nam | Ngô giống | KD3 | Khối Kinh doanh | 9.9 | 9.2 | 84 | 25.9 |
| 2026-09\|Miền Nam\|Hạt giống rau | 2026-09 | Miền Nam | Hạt giống rau | KD3 | Khối Kinh doanh | 3.5 | 3.4 | 6 | 37.0 |
| 2026-10\|Miền Bắc\|Lúa giống thuần | 2026-10 | Miền Bắc | Lúa giống thuần | KD1 | Khối Kinh doanh | 59.8 | 36.1 | 1128 | 22.8 |
| 2026-10\|Miền Bắc\|Lúa giống lai | 2026-10 | Miền Bắc | Lúa giống lai | KD1 | Khối Kinh doanh | 25.3 | 16.8 | 177 | 30.5 |
| 2026-10\|Miền Bắc\|Ngô giống | 2026-10 | Miền Bắc | Ngô giống | KD1 | Khối Kinh doanh | 19.5 | 12.9 | 117 | 29.2 |
| 2026-10\|Miền Bắc\|Hạt giống rau | 2026-10 | Miền Bắc | Hạt giống rau | KD1 | Khối Kinh doanh | 6.9 | 4.2 | 7 | 38.4 |
| 2026-10\|Miền Trung\|Lúa giống thuần | 2026-10 | Miền Trung | Lúa giống thuần | KD2 | Khối Kinh doanh | 37.1 | 18.7 | 584 | 22.2 |
| 2026-10\|Miền Trung\|Lúa giống lai | 2026-10 | Miền Trung | Lúa giống lai | KD2 | Khối Kinh doanh | 15.7 | 8.1 | 85 | 29.9 |
| 2026-10\|Miền Trung\|Ngô giống | 2026-10 | Miền Trung | Ngô giống | KD2 | Khối Kinh doanh | 12.1 | 6.4 | 58 | 27.7 |
| 2026-10\|Miền Trung\|Hạt giống rau | 2026-10 | Miền Trung | Hạt giống rau | KD2 | Khối Kinh doanh | 4.3 | 2.3 | 4 | 37.7 |
| 2026-10\|Miền Nam\|Lúa giống thuần | 2026-10 | Miền Nam | Lúa giống thuần | KD3 | Khối Kinh doanh | 46.6 | 26.9 | 841 | 22.5 |
| 2026-10\|Miền Nam\|Lúa giống lai | 2026-10 | Miền Nam | Lúa giống lai | KD3 | Khối Kinh doanh | 19.7 | 11.5 | 121 | 30.4 |
| 2026-10\|Miền Nam\|Ngô giống | 2026-10 | Miền Nam | Ngô giống | KD3 | Khối Kinh doanh | 15.2 | 8.8 | 80 | 28.7 |
| 2026-10\|Miền Nam\|Hạt giống rau | 2026-10 | Miền Nam | Hạt giống rau | KD3 | Khối Kinh doanh | 5.4 | 3.5 | 6 | 39.5 |
| 2026-11\|Miền Bắc\|Lúa giống thuần | 2026-11 | Miền Bắc | Lúa giống thuần | KD1 | Khối Kinh doanh | 57.2 |  |  |  |
| 2026-11\|Miền Bắc\|Lúa giống lai | 2026-11 | Miền Bắc | Lúa giống lai | KD1 | Khối Kinh doanh | 24.2 |  |  |  |
| 2026-11\|Miền Bắc\|Ngô giống | 2026-11 | Miền Bắc | Ngô giống | KD1 | Khối Kinh doanh | 18.7 |  |  |  |
| 2026-11\|Miền Bắc\|Hạt giống rau | 2026-11 | Miền Bắc | Hạt giống rau | KD1 | Khối Kinh doanh | 6.6 |  |  |  |
| 2026-11\|Miền Trung\|Lúa giống thuần | 2026-11 | Miền Trung | Lúa giống thuần | KD2 | Khối Kinh doanh | 35.5 |  |  |  |
| 2026-11\|Miền Trung\|Lúa giống lai | 2026-11 | Miền Trung | Lúa giống lai | KD2 | Khối Kinh doanh | 15.0 |  |  |  |
| 2026-11\|Miền Trung\|Ngô giống | 2026-11 | Miền Trung | Ngô giống | KD2 | Khối Kinh doanh | 11.6 |  |  |  |
| 2026-11\|Miền Trung\|Hạt giống rau | 2026-11 | Miền Trung | Hạt giống rau | KD2 | Khối Kinh doanh | 4.1 |  |  |  |
| 2026-11\|Miền Nam\|Lúa giống thuần | 2026-11 | Miền Nam | Lúa giống thuần | KD3 | Khối Kinh doanh | 44.6 |  |  |  |
| 2026-11\|Miền Nam\|Lúa giống lai | 2026-11 | Miền Nam | Lúa giống lai | KD3 | Khối Kinh doanh | 18.9 |  |  |  |
| 2026-11\|Miền Nam\|Ngô giống | 2026-11 | Miền Nam | Ngô giống | KD3 | Khối Kinh doanh | 14.6 |  |  |  |
| 2026-11\|Miền Nam\|Hạt giống rau | 2026-11 | Miền Nam | Hạt giống rau | KD3 | Khối Kinh doanh | 5.1 |  |  |  |
| 2026-12\|Miền Bắc\|Lúa giống thuần | 2026-12 | Miền Bắc | Lúa giống thuần | KD1 | Khối Kinh doanh | 49.4 |  |  |  |
| 2026-12\|Miền Bắc\|Lúa giống lai | 2026-12 | Miền Bắc | Lúa giống lai | KD1 | Khối Kinh doanh | 20.9 |  |  |  |
| 2026-12\|Miền Bắc\|Ngô giống | 2026-12 | Miền Bắc | Ngô giống | KD1 | Khối Kinh doanh | 16.1 |  |  |  |
| 2026-12\|Miền Bắc\|Hạt giống rau | 2026-12 | Miền Bắc | Hạt giống rau | KD1 | Khối Kinh doanh | 5.7 |  |  |  |
| 2026-12\|Miền Trung\|Lúa giống thuần | 2026-12 | Miền Trung | Lúa giống thuần | KD2 | Khối Kinh doanh | 30.6 |  |  |  |
| 2026-12\|Miền Trung\|Lúa giống lai | 2026-12 | Miền Trung | Lúa giống lai | KD2 | Khối Kinh doanh | 13.0 |  |  |  |
| 2026-12\|Miền Trung\|Ngô giống | 2026-12 | Miền Trung | Ngô giống | KD2 | Khối Kinh doanh | 10.0 |  |  |  |
| 2026-12\|Miền Trung\|Hạt giống rau | 2026-12 | Miền Trung | Hạt giống rau | KD2 | Khối Kinh doanh | 3.5 |  |  |  |
| 2026-12\|Miền Nam\|Lúa giống thuần | 2026-12 | Miền Nam | Lúa giống thuần | KD3 | Khối Kinh doanh | 38.5 |  |  |  |
| 2026-12\|Miền Nam\|Lúa giống lai | 2026-12 | Miền Nam | Lúa giống lai | KD3 | Khối Kinh doanh | 16.3 |  |  |  |
| 2026-12\|Miền Nam\|Ngô giống | 2026-12 | Miền Nam | Ngô giống | KD3 | Khối Kinh doanh | 12.6 |  |  |  |
| 2026-12\|Miền Nam\|Hạt giống rau | 2026-12 | Miền Nam | Hạt giống rau | KD3 | Khối Kinh doanh | 4.4 |  |  |  |

## 7. Đại lý và công nợ (BC3, tuổi nợ)
<a id="7-dealers"></a>

- Tệp: `dashboard/data/dealers.json` · 43 dòng
- Nguồn dự kiến: CRM, DMS, Fast
- Dùng ở tab: Kinh doanh; Đại lý & thị trường; Tài chính

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `dealer_id` | Mã đại lý |
| `dealer` | Tên đại lý |
| `province` | Tỉnh |
| `region` | Vùng |
| `owner` | Nhân viên phụ trách |
| `dept` | Phòng ban |
| `status` | Trạng thái DMS |
| `target_ytd_bn` | Kế hoạch lũy kế (tỷ) |
| `revenue_ytd_bn` | Doanh thu lũy kế (tỷ) |
| `orders_ytd` | Số đơn |
| `sku` | Số SKU |
| `ar_bn` | Tổng công nợ (tỷ) |
| `ar_0_30` | Nợ 0–30 ngày |
| `ar_31_60` | Nợ 31–60 |
| `ar_61_90` | Nợ 61–90 |
| `ar_90` | Nợ trên 90 |
| `visits_in_route` | Lượt viếng thăm đúng tuyến |
| `visits_off_route` | Lượt ngoại tuyến |
| `last_visit` | Ghé gần nhất |

**Dữ liệu**

| dealer_id | dealer | province | region | owner | dept | status | target_ytd_bn | revenue_ytd_bn | orders_ytd | sku | ar_bn | ar_0_30 | ar_31_60 | ar_61_90 | ar_90 | visits_in_route | visits_off_route | last_visit |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| DL-001 | Đại lý cấp 1 · Thái Bình 01 | Thái Bình | Miền Bắc | KD4 | Khối Kinh doanh | Chính thức | 21.5 | 13.7 | 28 | 14 | 0.96 | 0.58 | 0.24 | 0.14 | 0.0 | 8 | 0 | 2026-10-19 |
| DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | KD4 | Khối Kinh doanh | Chính thức | 21.9 | 15.4 | 6 | 17 | 3.91 | 2.35 | 0.98 | 0.59 | 0.0 | 12 | 1 | 2026-10-17 |
| DL-003 | Đại lý cấp 1 · Nam Định 01 | Nam Định | Miền Bắc | KD4 | Khối Kinh doanh | Dự thảo | 21.1 | 14.1 | 7 | 5 | 1.13 | 1.13 | 0.0 | 0.0 | 0.0 | 6 | 5 | 2026-10-09 |
| DL-004 | Đại lý cấp 1 · Nam Định 02 | Nam Định | Miền Bắc | KD4 | Khối Kinh doanh | Chính thức | 8.7 | 8.6 | 8 | 8 | 2.23 | 2.23 | 0.0 | 0.0 | 0.0 | 11 | 1 | 2026-10-15 |
| DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | KD4 | Khối Kinh doanh | Dự thảo | 13.4 | 13.6 | 18 | 7 | 2.97 | 2.68 | 0.3 | 0.0 | 0.0 | 11 | 3 | 2026-10-16 |
| DL-006 | Đại lý cấp 1 · Hà Nam 02 | Hà Nam | Miền Bắc | KD4 | Khối Kinh doanh | Chính thức | 10.0 | 9.2 | 7 | 20 | 2.21 | 1.33 | 0.55 | 0.33 | 0.0 | 10 | 1 | 2026-10-14 |
| DL-007 | Đại lý cấp 1 · Hải Dương 01 | Hải Dương | Miền Bắc | KD4 | Khối Kinh doanh | Dự thảo | 21.9 | 17.7 | 31 | 16 | 1.53 | 1.38 | 0.15 | 0.0 | 0.0 | 10 | 1 | 2026-10-15 |
| DL-008 | Đại lý cấp 1 · Hải Dương 02 | Hải Dương | Miền Bắc | KD4 | Khối Kinh doanh | Chính thức | 6.6 | 4.9 | 33 | 11 | 1.19 | 1.19 | 0.0 | 0.0 | 0.0 | 6 | 0 | 2026-10-03 |
| DL-009 | Đại lý cấp 1 · Hải Dương 03 | Hải Dương | Miền Bắc | KD4 | Khối Kinh doanh | Chính thức | 15.3 | 13.0 | 29 | 21 | 1.18 | 0.94 | 0.24 | 0.0 | 0.0 | 12 | 0 | 2026-10-13 |
| DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | KD4 | Khối Kinh doanh | Chính thức | 22.2 | 18.8 | 37 | 3 | 2.49 | 1.49 | 0.62 | 0.37 | 0.0 | 17 | 1 | 2026-10-17 |
| DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | KD4 | Khối Kinh doanh | Chính thức | 24.4 | 24.0 | 14 | 3 | 2.9 | 1.45 | 0.58 | 0.43 | 0.43 | 13 | 2 | 2026-10-17 |
| DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | KD4 | Khối Kinh doanh | Chính thức | 17.1 | 12.6 | 8 | 6 | 2.58 | 2.06 | 0.52 | 0.0 | 0.0 | 17 | 2 | 2026-10-19 |
| DL-013 | Đại lý cấp 1 · Phú Thọ 02 | Phú Thọ | Miền Bắc | KD4 | Khối Kinh doanh | Chính thức | 11.8 | 13.2 | 6 | 14 | 1.88 | 1.5 | 0.38 | 0.0 | 0.0 | 8 | 2 | 2026-10-10 |
| DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | KD4 | Khối Kinh doanh | Chính thức | 14.6 | 11.8 | 30 | 18 | 1.39 | 0.84 | 0.35 | 0.21 | 0.0 | 13 | 2 | 2026-10-16 |
| DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | KD4 | Khối Kinh doanh | Chính thức | 14.7 | 9.4 | 34 | 19 | 1.04 | 0.94 | 0.1 | 0.0 | 0.0 | 13 | 4 | 2026-10-19 |
| DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | KD5 | Khối Kinh doanh | Dự thảo | 12.7 | 11.5 | 15 | 3 | 2.94 | 2.94 | 0.0 | 0.0 | 0.0 | 9 | 4 | 2026-10-13 |
| DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | KD5 | Khối Kinh doanh | Dự thảo | 12.3 | 6.7 | 37 | 14 | 1.5 | 0.9 | 0.38 | 0.23 | 0.0 | 10 | 4 | 2026-10-16 |
| DL-018 | Đại lý cấp 1 · Hà Tĩnh 01 | Hà Tĩnh | Miền Trung | KD5 | Khối Kinh doanh | Chính thức | 10.9 | 10.3 | 27 | 19 | 0.82 | 0.49 | 0.2 | 0.12 | 0.0 | 9 | 2 | 2026-10-19 |
| DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | KD5 | Khối Kinh doanh | Chính thức | 20.3 | 13.4 | 8 | 11 | 3.41 | 2.73 | 0.68 | 0.0 | 0.0 | 18 | 2 | 2026-10-19 |
| DL-020 | Đại lý cấp 1 · Hà Tĩnh 03 | Hà Tĩnh | Miền Trung | KD5 | Khối Kinh doanh | Ngừng hoạt động | 18.9 | 18.4 | 22 | 9 | 4.31 | 3.88 | 0.43 | 0.0 | 0.0 | 0 | 0 |  |
| DL-021 | Đại lý cấp 1 · Quảng Bình 01 | Quảng Bình | Miền Trung | KD5 | Khối Kinh doanh | Dự thảo | 25.7 | 23.3 | 30 | 11 | 1.83 | 1.47 | 0.37 | 0.0 | 0.0 | 7 | 1 | 2026-10-14 |
| DL-022 | Đại lý cấp 1 · Quảng Bình 02 | Quảng Bình | Miền Trung | KD5 | Khối Kinh doanh | Chính thức | 10.7 | 9.7 | 7 | 22 | 0.76 | 0.76 | 0.0 | 0.0 | 0.0 | 8 | 2 | 2026-10-12 |
| DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | KD5 | Khối Kinh doanh | Chính thức | 15.0 | 14.7 | 26 | 10 | 1.66 | 1.0 | 0.42 | 0.25 | 0.0 | 13 | 3 | 2026-10-19 |
| DL-024 | Đại lý cấp 1 · Quảng Nam 02 | Quảng Nam | Miền Trung | KD5 | Khối Kinh doanh | Ngừng hoạt động | 15.8 | 14.9 | 10 | 11 | 1.49 | 0.9 | 0.37 | 0.22 | 0.0 | 0 | 0 |  |
| DL-025 | Đại lý cấp 1 · Bình Định 01 | Bình Định | Miền Trung | KD5 | Khối Kinh doanh | Ngừng hoạt động | 11.5 | 6.4 | 29 | 13 | 1.07 | 0.85 | 0.21 | 0.0 | 0.0 | 0 | 0 |  |
| DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | KD5 | Khối Kinh doanh | Chính thức | 20.3 | 13.3 | 32 | 8 | 0.9 | 0.9 | 0.0 | 0.0 | 0.0 | 11 | 3 | 2026-10-19 |
| DL-027 | Đại lý cấp 1 · Bình Định 03 | Bình Định | Miền Trung | KD5 | Khối Kinh doanh | Chính thức | 25.3 | 22.3 | 8 | 3 | 1.52 | 0.91 | 0.38 | 0.23 | 0.0 | 10 | 0 | 2026-10-19 |
| DL-028 | Đại lý cấp 1 · Đắk Lắk 01 | Đắk Lắk | Miền Trung | KD5 | Khối Kinh doanh | Chính thức | 24.3 | 17.8 | 4 | 6 | 3.71 | 2.23 | 0.93 | 0.56 | 0.0 | 9 | 1 | 2026-10-12 |
| DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | KD5 | Khối Kinh doanh | Chính thức | 10.1 | 6.0 | 32 | 5 | 0.9 | 0.54 | 0.22 | 0.13 | 0.0 | 14 | 2 | 2026-10-19 |
| DL-030 | Đại lý cấp 1 · An Giang 01 | An Giang | Miền Nam | KD6 | Khối Kinh doanh | Ngừng hoạt động | 9.8 | 7.3 | 20 | 4 | 0.66 | 0.33 | 0.13 | 0.1 | 0.1 | 0 | 0 |  |
| DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | KD6 | Khối Kinh doanh | Chính thức | 19.0 | 14.6 | 22 | 7 | 3.18 | 3.18 | 0.0 | 0.0 | 0.0 | 11 | 2 | 2026-10-15 |
| DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | KD6 | Khối Kinh doanh | Chính thức | 12.7 | 13.6 | 24 | 21 | 3.06 | 1.83 | 0.76 | 0.46 | 0.0 | 18 | 5 | 2026-10-16 |
| DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | KD6 | Khối Kinh doanh | Chính thức | 15.1 | 10.3 | 7 | 4 | 2.65 | 2.39 | 0.27 | 0.0 | 0.0 | 11 | 3 | 2026-10-16 |
| DL-034 | Đại lý cấp 1 · Cần Thơ 01 | Cần Thơ | Miền Nam | KD6 | Khối Kinh doanh | Ngừng hoạt động | 10.1 | 9.7 | 39 | 12 | 2.61 | 2.09 | 0.52 | 0.0 | 0.0 | 0 | 0 |  |
| DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | KD6 | Khối Kinh doanh | Chính thức | 15.8 | 12.4 | 25 | 5 | 2.54 | 1.52 | 0.64 | 0.38 | 0.0 | 12 | 3 | 2026-10-19 |
| DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | KD6 | Khối Kinh doanh | Chính thức | 21.0 | 15.4 | 21 | 8 | 1.12 | 0.9 | 0.22 | 0.0 | 0.0 | 10 | 6 | 2026-10-17 |
| DL-037 | Đại lý cấp 1 · Kiên Giang 02 | Kiên Giang | Miền Nam | KD6 | Khối Kinh doanh | Ngừng hoạt động | 18.5 | 16.9 | 19 | 11 | 3.63 | 3.63 | 0.0 | 0.0 | 0.0 | 0 | 0 |  |
| DL-038 | Đại lý cấp 1 · Kiên Giang 03 | Kiên Giang | Miền Nam | KD6 | Khối Kinh doanh | Chính thức | 7.3 | 4.7 | 31 | 7 | 0.73 | 0.44 | 0.18 | 0.11 | 0.0 | 7 | 3 | 2026-10-14 |
| DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | KD6 | Khối Kinh doanh | Chính thức | 25.4 | 17.1 | 33 | 22 | 4.31 | 4.31 | 0.0 | 0.0 | 0.0 | 19 | 6 | 2026-10-17 |
| DL-040 | Đại lý cấp 1 · Long An 02 | Long An | Miền Nam | KD6 | Khối Kinh doanh | Chính thức | 12.6 | 7.8 | 23 | 14 | 1.58 | 0.79 | 0.32 | 0.24 | 0.24 | 8 | 1 | 2026-10-19 |
| DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | KD6 | Khối Kinh doanh | Chính thức | 23.8 | 24.6 | 10 | 16 | 3.2 | 1.92 | 0.8 | 0.48 | 0.0 | 13 | 1 | 2026-10-17 |
| DL-042 | Đại lý cấp 1 · Sóc Trăng 02 | Sóc Trăng | Miền Nam | KD6 | Khối Kinh doanh | Chính thức | 23.9 | 19.8 | 33 | 20 | 5.05 | 4.54 | 0.5 | 0.0 | 0.0 | 7 | 1 | 2026-10-16 |
| DL-043 | Đại lý cấp 1 · Sóc Trăng 03 | Sóc Trăng | Miền Nam | KD6 | Khối Kinh doanh | Dự thảo | 8.6 | 7.3 | 9 | 10 | 0.46 | 0.41 | 0.05 | 0.0 | 0.0 | 10 | 0 | 2026-10-13 |

## 8. Ghé thăm đại lý (BC2, BC4)
<a id="8-visits"></a>

- Tệp: `dashboard/data/visits.json` · 491 dòng
- Nguồn dự kiến: DMS
- Dùng ở tab: Đại lý & thị trường

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `visit_id` | Mã lượt |
| `date` | Ngày |
| `staff` | Nhân viên |
| `dealer_id` | Mã đại lý |
| `dealer` | Đại lý |
| `province` | Tỉnh |
| `region` | Vùng |
| `dept` | Phòng ban |
| `in_route` | Đúng tuyến |
| `minutes` | Số phút |
| `checkin_m` | Khoảng cách check-in (m) |
| `km` | Cự ly di chuyển (km) |
| `has_order` | Có đơn hàng |

**Dữ liệu**

| visit_id | date | staff | dealer_id | dealer | province | region | dept | in_route | minutes | checkin_m | km | has_order |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| VT-0001 | 2026-09-01 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Không | 35 | 29 | 16.9 | Có |
| VT-0002 | 2026-09-01 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 17 | 45 | 26.6 | Không |
| VT-0003 | 2026-09-01 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 43 | 42 | 25.0 | Không |
| VT-0004 | 2026-09-01 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 11 | 166 | 32.9 | Không |
| VT-0005 | 2026-09-01 | KD5 | DL-028 | Đại lý cấp 1 · Đắk Lắk 01 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 30 | 46 | 16.1 | Không |
| VT-0006 | 2026-09-01 | KD5 | DL-018 | Đại lý cấp 1 · Hà Tĩnh 01 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 15 | 31 | 8.8 | Không |
| VT-0007 | 2026-09-01 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Có | 13 | 111 | 11.5 | Không |
| VT-0008 | 2026-09-01 | KD6 | DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | Khối Kinh doanh | Có | 50 | 12 | 15.1 | Không |
| VT-0009 | 2026-09-01 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Không | 27 | 142 | 13.7 | Có |
| VT-0010 | 2026-09-01 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 24 | 176 | 7.7 | Không |
| VT-0011 | 2026-09-01 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Không | 47 | 127 | 28.9 | Không |
| VT-0012 | 2026-09-02 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 53 | 138 | 4.6 | Không |
| VT-0013 | 2026-09-02 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 54 | 92 | 21.0 | Không |
| VT-0014 | 2026-09-02 | KD4 | DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 50 | 59 | 21.8 | Không |
| VT-0015 | 2026-09-02 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 55 | 39 | 16.5 | Có |
| VT-0016 | 2026-09-02 | KD5 | DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 21 | 140 | 11.6 | Không |
| VT-0017 | 2026-09-02 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 33 | 129 | 27.8 | Không |
| VT-0018 | 2026-09-02 | KD5 | DL-027 | Đại lý cấp 1 · Bình Định 03 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 46 | 71 | 21.5 | Không |
| VT-0019 | 2026-09-02 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 46 | 68 | 18.1 | Có |
| VT-0020 | 2026-09-02 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 42 | 64 | 10.3 | Có |
| VT-0021 | 2026-09-02 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 19 | 89 | 22.2 | Không |
| VT-0022 | 2026-09-02 | KD6 | DL-043 | Đại lý cấp 1 · Sóc Trăng 03 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 14 | 150 | 26.7 | Có |
| VT-0023 | 2026-09-02 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 27 | 32 | 6.9 | Không |
| VT-0024 | 2026-09-03 | KD4 | DL-006 | Đại lý cấp 1 · Hà Nam 02 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 15 | 22 | 15.8 | Không |
| VT-0025 | 2026-09-03 | KD4 | DL-003 | Đại lý cấp 1 · Nam Định 01 | Nam Định | Miền Bắc | Khối Kinh doanh | Không | 30 | 170 | 17.1 | Không |
| VT-0026 | 2026-09-03 | KD4 | DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 48 | 85 | 29.6 | Có |
| VT-0027 | 2026-09-03 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 21 | 152 | 30.6 | Có |
| VT-0028 | 2026-09-03 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 14 | 43 | 11.9 | Có |
| VT-0029 | 2026-09-03 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 21 | 101 | 5.5 | Không |
| VT-0030 | 2026-09-03 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Không | 33 | 174 | 33.8 | Không |
| VT-0031 | 2026-09-03 | KD5 | DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 43 | 176 | 36.6 | Có |
| VT-0032 | 2026-09-03 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 29 | 8 | 27.6 | Không |
| VT-0033 | 2026-09-03 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 15 | 118 | 31.2 | Có |
| VT-0034 | 2026-09-03 | KD6 | DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | Khối Kinh doanh | Có | 10 | 130 | 31.8 | Không |
| VT-0035 | 2026-09-04 | KD4 | DL-003 | Đại lý cấp 1 · Nam Định 01 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 31 | 73 | 31.8 | Không |
| VT-0036 | 2026-09-04 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 17 | 94 | 7.8 | Không |
| VT-0037 | 2026-09-04 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 48 | 130 | 17.1 | Không |
| VT-0038 | 2026-09-04 | KD4 | DL-007 | Đại lý cấp 1 · Hải Dương 01 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 54 | 19 | 15.0 | Có |
| VT-0039 | 2026-09-04 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 37 | 47 | 20.9 | Không |
| VT-0040 | 2026-09-04 | KD4 | DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 40 | 130 | 18.3 | Không |
| VT-0041 | 2026-09-04 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 20 | 167 | 32.7 | Có |
| VT-0042 | 2026-09-04 | KD5 | DL-028 | Đại lý cấp 1 · Đắk Lắk 01 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Không | 8 | 68 | 9.7 | Không |
| VT-0043 | 2026-09-04 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Không | 52 | 106 | 22.7 | Không |
| VT-0044 | 2026-09-04 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 8 | 117 | 35.0 | Không |
| VT-0045 | 2026-09-04 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 32 | 125 | 30.0 | Không |
| VT-0046 | 2026-09-05 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 51 | 64 | 36.5 | Không |
| VT-0047 | 2026-09-05 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 49 | 63 | 23.2 | Có |
| VT-0048 | 2026-09-05 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 20 | 124 | 10.7 | Không |
| VT-0049 | 2026-09-05 | KD5 | DL-022 | Đại lý cấp 1 · Quảng Bình 02 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 34 | 175 | 4.3 | Không |
| VT-0050 | 2026-09-05 | KD5 | DL-028 | Đại lý cấp 1 · Đắk Lắk 01 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 38 | 47 | 36.6 | Không |
| VT-0051 | 2026-09-05 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Có | 22 | 134 | 6.3 | Không |
| VT-0052 | 2026-09-05 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 45 | 73 | 16.9 | Không |
| VT-0053 | 2026-09-05 | KD5 | DL-027 | Đại lý cấp 1 · Bình Định 03 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 9 | 36 | 34.1 | Có |
| VT-0054 | 2026-09-05 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 55 | 84 | 11.4 | Có |
| VT-0055 | 2026-09-05 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Không | 53 | 178 | 35.5 | Không |
| VT-0056 | 2026-09-05 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 8 | 113 | 16.0 | Không |
| VT-0057 | 2026-09-05 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 8 | 126 | 36.7 | Không |
| VT-0058 | 2026-09-05 | KD6 | DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | Khối Kinh doanh | Không | 47 | 123 | 11.6 | Không |
| VT-0059 | 2026-09-05 | KD6 | DL-038 | Đại lý cấp 1 · Kiên Giang 03 | Kiên Giang | Miền Nam | Khối Kinh doanh | Không | 41 | 138 | 10.5 | Có |
| VT-0060 | 2026-09-05 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Có | 42 | 92 | 34.4 | Có |
| VT-0061 | 2026-09-07 | KD4 | DL-007 | Đại lý cấp 1 · Hải Dương 01 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 49 | 126 | 23.6 | Có |
| VT-0062 | 2026-09-07 | KD4 | DL-008 | Đại lý cấp 1 · Hải Dương 02 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 48 | 177 | 11.6 | Không |
| VT-0063 | 2026-09-07 | KD4 | DL-003 | Đại lý cấp 1 · Nam Định 01 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 17 | 136 | 36.1 | Có |
| VT-0064 | 2026-09-07 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 35 | 99 | 33.0 | Không |
| VT-0065 | 2026-09-07 | KD5 | DL-022 | Đại lý cấp 1 · Quảng Bình 02 | Quảng Bình | Miền Trung | Khối Kinh doanh | Không | 39 | 68 | 34.5 | Không |
| VT-0066 | 2026-09-07 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 44 | 28 | 7.6 | Có |
| VT-0067 | 2026-09-07 | KD5 | DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 20 | 58 | 27.8 | Không |
| VT-0068 | 2026-09-07 | KD5 | DL-021 | Đại lý cấp 1 · Quảng Bình 01 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 30 | 104 | 17.0 | Không |
| VT-0069 | 2026-09-07 | KD6 | DL-043 | Đại lý cấp 1 · Sóc Trăng 03 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 20 | 40 | 12.1 | Không |
| VT-0070 | 2026-09-07 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 26 | 45 | 5.2 | Có |
| VT-0071 | 2026-09-07 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Không | 11 | 116 | 12.0 | Không |
| VT-0072 | 2026-09-08 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 17 | 19 | 18.7 | Không |
| VT-0073 | 2026-09-08 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 33 | 115 | 17.6 | Không |
| VT-0074 | 2026-09-08 | KD4 | DL-001 | Đại lý cấp 1 · Thái Bình 01 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 51 | 74 | 21.9 | Có |
| VT-0075 | 2026-09-08 | KD4 | DL-004 | Đại lý cấp 1 · Nam Định 02 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 21 | 88 | 29.6 | Không |
| VT-0076 | 2026-09-08 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 36 | 162 | 25.1 | Không |
| VT-0077 | 2026-09-08 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Không | 15 | 55 | 27.6 | Không |
| VT-0078 | 2026-09-08 | KD6 | DL-043 | Đại lý cấp 1 · Sóc Trăng 03 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 49 | 87 | 5.1 | Không |
| VT-0079 | 2026-09-08 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Không | 10 | 73 | 14.4 | Có |
| VT-0080 | 2026-09-09 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 44 | 171 | 35.2 | Không |
| VT-0081 | 2026-09-09 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 24 | 163 | 21.4 | Có |
| VT-0082 | 2026-09-09 | KD4 | DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 16 | 30 | 19.7 | Có |
| VT-0083 | 2026-09-09 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 33 | 50 | 17.1 | Có |
| VT-0084 | 2026-09-09 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Không | 27 | 175 | 6.1 | Không |
| VT-0085 | 2026-09-09 | KD5 | DL-028 | Đại lý cấp 1 · Đắk Lắk 01 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 24 | 65 | 19.9 | Không |
| VT-0086 | 2026-09-09 | KD5 | DL-027 | Đại lý cấp 1 · Bình Định 03 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 35 | 139 | 21.8 | Không |
| VT-0087 | 2026-09-09 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Không | 29 | 75 | 30.1 | Có |
| VT-0088 | 2026-09-09 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Có | 51 | 155 | 30.7 | Không |
| VT-0089 | 2026-09-09 | KD6 | DL-043 | Đại lý cấp 1 · Sóc Trăng 03 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 39 | 175 | 20.5 | Không |
| VT-0090 | 2026-09-10 | KD4 | DL-004 | Đại lý cấp 1 · Nam Định 02 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 16 | 58 | 30.3 | Không |
| VT-0091 | 2026-09-10 | KD4 | DL-001 | Đại lý cấp 1 · Thái Bình 01 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 53 | 136 | 17.8 | Có |
| VT-0092 | 2026-09-10 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 29 | 135 | 35.1 | Không |
| VT-0093 | 2026-09-10 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 30 | 80 | 10.4 | Có |
| VT-0094 | 2026-09-10 | KD4 | DL-013 | Đại lý cấp 1 · Phú Thọ 02 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Không | 49 | 126 | 6.3 | Không |
| VT-0095 | 2026-09-10 | KD4 | DL-007 | Đại lý cấp 1 · Hải Dương 01 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 44 | 70 | 19.2 | Không |
| VT-0096 | 2026-09-10 | KD5 | DL-027 | Đại lý cấp 1 · Bình Định 03 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 30 | 146 | 29.1 | Có |
| VT-0097 | 2026-09-10 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Không | 29 | 90 | 30.4 | Có |
| VT-0098 | 2026-09-10 | KD6 | DL-038 | Đại lý cấp 1 · Kiên Giang 03 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 42 | 23 | 25.2 | Có |
| VT-0099 | 2026-09-10 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Không | 48 | 55 | 32.7 | Có |
| VT-0100 | 2026-09-10 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 17 | 111 | 26.2 | Không |
| VT-0101 | 2026-09-10 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Không | 15 | 177 | 8.8 | Không |
| VT-0102 | 2026-09-10 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 55 | 91 | 32.6 | Không |
| VT-0103 | 2026-09-10 | KD6 | DL-043 | Đại lý cấp 1 · Sóc Trăng 03 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 37 | 103 | 23.4 | Không |
| VT-0104 | 2026-09-11 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 43 | 32 | 10.3 | Có |
| VT-0105 | 2026-09-11 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 30 | 49 | 4.1 | Có |
| VT-0106 | 2026-09-11 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 51 | 130 | 13.6 | Có |
| VT-0107 | 2026-09-11 | KD4 | DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 21 | 138 | 26.7 | Không |
| VT-0108 | 2026-09-11 | KD4 | DL-003 | Đại lý cấp 1 · Nam Định 01 | Nam Định | Miền Bắc | Khối Kinh doanh | Không | 54 | 11 | 13.4 | Không |
| VT-0109 | 2026-09-11 | KD4 | DL-007 | Đại lý cấp 1 · Hải Dương 01 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 35 | 16 | 36.8 | Không |
| VT-0110 | 2026-09-11 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 25 | 54 | 21.8 | Không |
| VT-0111 | 2026-09-11 | KD5 | DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 32 | 21 | 27.0 | Có |
| VT-0112 | 2026-09-11 | KD5 | DL-028 | Đại lý cấp 1 · Đắk Lắk 01 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 21 | 60 | 26.2 | Có |
| VT-0113 | 2026-09-11 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 19 | 24 | 24.4 | Không |
| VT-0114 | 2026-09-11 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 45 | 68 | 29.9 | Có |
| VT-0115 | 2026-09-11 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 16 | 135 | 36.0 | Có |
| VT-0116 | 2026-09-11 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 17 | 88 | 31.8 | Không |
| VT-0117 | 2026-09-12 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 15 | 50 | 12.1 | Không |
| VT-0118 | 2026-09-12 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 19 | 172 | 16.3 | Không |
| VT-0119 | 2026-09-12 | KD4 | DL-004 | Đại lý cấp 1 · Nam Định 02 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 48 | 45 | 7.5 | Có |
| VT-0120 | 2026-09-12 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 29 | 141 | 37.9 | Có |
| VT-0121 | 2026-09-12 | KD4 | DL-013 | Đại lý cấp 1 · Phú Thọ 02 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 9 | 105 | 36.0 | Có |
| VT-0122 | 2026-09-12 | KD5 | DL-018 | Đại lý cấp 1 · Hà Tĩnh 01 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 16 | 55 | 8.8 | Có |
| VT-0123 | 2026-09-12 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 40 | 27 | 21.0 | Không |
| VT-0124 | 2026-09-12 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Không | 10 | 69 | 33.3 | Không |
| VT-0125 | 2026-09-12 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 48 | 134 | 24.4 | Không |
| VT-0126 | 2026-09-12 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 13 | 98 | 30.7 | Không |
| VT-0127 | 2026-09-12 | KD6 | DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | Khối Kinh doanh | Có | 10 | 178 | 12.2 | Không |
| VT-0128 | 2026-09-12 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 24 | 9 | 36.8 | Không |
| VT-0129 | 2026-09-14 | KD4 | DL-006 | Đại lý cấp 1 · Hà Nam 02 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 42 | 169 | 27.4 | Không |
| VT-0130 | 2026-09-14 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 45 | 104 | 9.3 | Không |
| VT-0131 | 2026-09-14 | KD4 | DL-004 | Đại lý cấp 1 · Nam Định 02 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 30 | 45 | 35.6 | Không |
| VT-0132 | 2026-09-14 | KD4 | DL-001 | Đại lý cấp 1 · Thái Bình 01 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 41 | 39 | 9.5 | Không |
| VT-0133 | 2026-09-14 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 28 | 48 | 32.6 | Có |
| VT-0134 | 2026-09-14 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 9 | 64 | 9.2 | Không |
| VT-0135 | 2026-09-14 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 33 | 128 | 33.8 | Có |
| VT-0136 | 2026-09-14 | KD6 | DL-043 | Đại lý cấp 1 · Sóc Trăng 03 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 53 | 127 | 13.0 | Không |
| VT-0137 | 2026-09-14 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 21 | 11 | 5.7 | Không |
| VT-0138 | 2026-09-15 | KD4 | DL-008 | Đại lý cấp 1 · Hải Dương 02 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 42 | 169 | 29.5 | Có |
| VT-0139 | 2026-09-15 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 38 | 110 | 24.1 | Không |
| VT-0140 | 2026-09-15 | KD4 | DL-003 | Đại lý cấp 1 · Nam Định 01 | Nam Định | Miền Bắc | Khối Kinh doanh | Không | 45 | 42 | 4.3 | Không |
| VT-0141 | 2026-09-15 | KD4 | DL-013 | Đại lý cấp 1 · Phú Thọ 02 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 19 | 106 | 24.5 | Có |
| VT-0142 | 2026-09-15 | KD5 | DL-028 | Đại lý cấp 1 · Đắk Lắk 01 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 19 | 37 | 26.3 | Không |
| VT-0143 | 2026-09-15 | KD5 | DL-022 | Đại lý cấp 1 · Quảng Bình 02 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 11 | 29 | 11.4 | Có |
| VT-0144 | 2026-09-15 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 28 | 15 | 35.7 | Có |
| VT-0145 | 2026-09-15 | KD6 | DL-040 | Đại lý cấp 1 · Long An 02 | Long An | Miền Nam | Khối Kinh doanh | Có | 36 | 92 | 5.9 | Có |
| VT-0146 | 2026-09-15 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Không | 19 | 62 | 37.0 | Không |
| VT-0147 | 2026-09-15 | KD6 | DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | Khối Kinh doanh | Có | 34 | 90 | 33.8 | Không |
| VT-0148 | 2026-09-16 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 33 | 99 | 32.2 | Có |
| VT-0149 | 2026-09-16 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 24 | 104 | 21.7 | Có |
| VT-0150 | 2026-09-16 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 48 | 179 | 33.9 | Có |
| VT-0151 | 2026-09-16 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 14 | 174 | 12.2 | Không |
| VT-0152 | 2026-09-16 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 53 | 9 | 32.1 | Không |
| VT-0153 | 2026-09-16 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Có | 21 | 133 | 37.2 | Không |
| VT-0154 | 2026-09-16 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Không | 14 | 135 | 34.0 | Không |
| VT-0155 | 2026-09-16 | KD6 | DL-042 | Đại lý cấp 1 · Sóc Trăng 02 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 45 | 147 | 19.3 | Có |
| VT-0156 | 2026-09-16 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 12 | 91 | 25.6 | Có |
| VT-0157 | 2026-09-16 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 18 | 98 | 11.6 | Không |
| VT-0158 | 2026-09-16 | KD6 | DL-038 | Đại lý cấp 1 · Kiên Giang 03 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 54 | 143 | 10.0 | Có |
| VT-0159 | 2026-09-17 | KD4 | DL-009 | Đại lý cấp 1 · Hải Dương 03 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 48 | 119 | 37.4 | Không |
| VT-0160 | 2026-09-17 | KD4 | DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 27 | 154 | 35.2 | Không |
| VT-0161 | 2026-09-17 | KD4 | DL-013 | Đại lý cấp 1 · Phú Thọ 02 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Không | 38 | 88 | 13.5 | Có |
| VT-0162 | 2026-09-17 | KD4 | DL-007 | Đại lý cấp 1 · Hải Dương 01 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 10 | 47 | 37.1 | Có |
| VT-0163 | 2026-09-17 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 55 | 25 | 6.9 | Có |
| VT-0164 | 2026-09-17 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Không | 49 | 19 | 26.8 | Có |
| VT-0165 | 2026-09-17 | KD5 | DL-021 | Đại lý cấp 1 · Quảng Bình 01 | Quảng Bình | Miền Trung | Khối Kinh doanh | Không | 9 | 63 | 7.3 | Không |
| VT-0166 | 2026-09-17 | KD5 | DL-027 | Đại lý cấp 1 · Bình Định 03 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 12 | 73 | 13.1 | Có |
| VT-0167 | 2026-09-17 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 39 | 124 | 24.5 | Không |
| VT-0168 | 2026-09-17 | KD5 | DL-018 | Đại lý cấp 1 · Hà Tĩnh 01 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 32 | 97 | 8.4 | Có |
| VT-0169 | 2026-09-17 | KD6 | DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | Khối Kinh doanh | Không | 35 | 99 | 4.0 | Có |
| VT-0170 | 2026-09-17 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 15 | 163 | 13.7 | Có |
| VT-0171 | 2026-09-17 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Không | 41 | 143 | 34.8 | Không |
| VT-0172 | 2026-09-18 | KD4 | DL-009 | Đại lý cấp 1 · Hải Dương 03 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 41 | 168 | 33.9 | Không |
| VT-0173 | 2026-09-18 | KD4 | DL-008 | Đại lý cấp 1 · Hải Dương 02 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 16 | 26 | 23.9 | Có |
| VT-0174 | 2026-09-18 | KD4 | DL-007 | Đại lý cấp 1 · Hải Dương 01 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 53 | 125 | 4.5 | Không |
| VT-0175 | 2026-09-18 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 21 | 176 | 37.7 | Không |
| VT-0176 | 2026-09-18 | KD4 | DL-006 | Đại lý cấp 1 · Hà Nam 02 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 48 | 152 | 7.6 | Không |
| VT-0177 | 2026-09-18 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 16 | 70 | 30.3 | Có |
| VT-0178 | 2026-09-18 | KD5 | DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | Khối Kinh doanh | Không | 36 | 44 | 37.1 | Không |
| VT-0179 | 2026-09-18 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Không | 15 | 9 | 5.1 | Không |
| VT-0180 | 2026-09-18 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Không | 49 | 50 | 15.1 | Không |
| VT-0181 | 2026-09-18 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Có | 53 | 143 | 27.8 | Không |
| VT-0182 | 2026-09-18 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 33 | 74 | 8.2 | Không |
| VT-0183 | 2026-09-19 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 36 | 152 | 32.1 | Có |
| VT-0184 | 2026-09-19 | KD4 | DL-009 | Đại lý cấp 1 · Hải Dương 03 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 28 | 169 | 7.9 | Có |
| VT-0185 | 2026-09-19 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 12 | 53 | 37.3 | Không |
| VT-0186 | 2026-09-19 | KD4 | DL-003 | Đại lý cấp 1 · Nam Định 01 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 34 | 70 | 31.6 | Không |
| VT-0187 | 2026-09-19 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 21 | 74 | 11.8 | Có |
| VT-0188 | 2026-09-19 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Không | 11 | 76 | 7.4 | Không |
| VT-0189 | 2026-09-19 | KD5 | DL-018 | Đại lý cấp 1 · Hà Tĩnh 01 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 32 | 10 | 4.5 | Không |
| VT-0190 | 2026-09-19 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 21 | 42 | 4.8 | Có |
| VT-0191 | 2026-09-19 | KD6 | DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | Khối Kinh doanh | Có | 31 | 130 | 10.0 | Có |
| VT-0192 | 2026-09-19 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 52 | 160 | 34.9 | Không |
| VT-0193 | 2026-09-21 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Không | 17 | 162 | 35.1 | Có |
| VT-0194 | 2026-09-21 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 18 | 139 | 21.5 | Có |
| VT-0195 | 2026-09-21 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 49 | 72 | 9.8 | Không |
| VT-0196 | 2026-09-21 | KD5 | DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 15 | 67 | 18.3 | Không |
| VT-0197 | 2026-09-21 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 23 | 83 | 37.3 | Không |
| VT-0198 | 2026-09-21 | KD5 | DL-021 | Đại lý cấp 1 · Quảng Bình 01 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 32 | 14 | 7.5 | Không |
| VT-0199 | 2026-09-21 | KD6 | DL-043 | Đại lý cấp 1 · Sóc Trăng 03 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 15 | 77 | 33.4 | Có |
| VT-0200 | 2026-09-21 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 49 | 66 | 24.0 | Không |
| VT-0201 | 2026-09-21 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 46 | 116 | 30.4 | Có |
| VT-0202 | 2026-09-22 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 46 | 96 | 17.6 | Có |
| VT-0203 | 2026-09-22 | KD4 | DL-003 | Đại lý cấp 1 · Nam Định 01 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 55 | 66 | 26.1 | Có |
| VT-0204 | 2026-09-22 | KD4 | DL-007 | Đại lý cấp 1 · Hải Dương 01 | Hải Dương | Miền Bắc | Khối Kinh doanh | Không | 41 | 7 | 37.2 | Không |
| VT-0205 | 2026-09-22 | KD4 | DL-004 | Đại lý cấp 1 · Nam Định 02 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 46 | 29 | 29.6 | Không |
| VT-0206 | 2026-09-22 | KD4 | DL-013 | Đại lý cấp 1 · Phú Thọ 02 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 28 | 100 | 31.8 | Có |
| VT-0207 | 2026-09-22 | KD5 | DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 33 | 62 | 6.1 | Có |
| VT-0208 | 2026-09-22 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 17 | 130 | 22.3 | Có |
| VT-0209 | 2026-09-22 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 41 | 157 | 7.3 | Không |
| VT-0210 | 2026-09-22 | KD6 | DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | Khối Kinh doanh | Có | 9 | 29 | 31.0 | Có |
| VT-0211 | 2026-09-22 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 28 | 109 | 10.9 | Có |
| VT-0212 | 2026-09-22 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 20 | 121 | 37.2 | Không |
| VT-0213 | 2026-09-22 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 30 | 64 | 6.2 | Có |
| VT-0214 | 2026-09-22 | KD6 | DL-038 | Đại lý cấp 1 · Kiên Giang 03 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 18 | 111 | 34.9 | Có |
| VT-0215 | 2026-09-23 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Không | 9 | 138 | 29.9 | Không |
| VT-0216 | 2026-09-23 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Không | 33 | 162 | 33.6 | Không |
| VT-0217 | 2026-09-23 | KD4 | DL-008 | Đại lý cấp 1 · Hải Dương 02 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 45 | 93 | 30.3 | Có |
| VT-0218 | 2026-09-23 | KD4 | DL-001 | Đại lý cấp 1 · Thái Bình 01 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 26 | 152 | 9.0 | Có |
| VT-0219 | 2026-09-23 | KD4 | DL-007 | Đại lý cấp 1 · Hải Dương 01 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 41 | 82 | 28.3 | Có |
| VT-0220 | 2026-09-23 | KD5 | DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 17 | 81 | 10.6 | Không |
| VT-0221 | 2026-09-23 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 8 | 180 | 34.8 | Có |
| VT-0222 | 2026-09-23 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 37 | 115 | 13.4 | Không |
| VT-0223 | 2026-09-23 | KD5 | DL-027 | Đại lý cấp 1 · Bình Định 03 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 41 | 136 | 16.7 | Không |
| VT-0224 | 2026-09-23 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Không | 13 | 19 | 21.3 | Có |
| VT-0225 | 2026-09-23 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 12 | 101 | 32.7 | Không |
| VT-0226 | 2026-09-23 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Có | 28 | 61 | 22.1 | Có |
| VT-0227 | 2026-09-23 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Không | 34 | 169 | 7.0 | Không |
| VT-0228 | 2026-09-24 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 45 | 130 | 24.6 | Không |
| VT-0229 | 2026-09-24 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 47 | 97 | 24.1 | Không |
| VT-0230 | 2026-09-24 | KD4 | DL-003 | Đại lý cấp 1 · Nam Định 01 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 20 | 7 | 15.6 | Không |
| VT-0231 | 2026-09-24 | KD4 | DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 31 | 35 | 32.6 | Có |
| VT-0232 | 2026-09-24 | KD4 | DL-006 | Đại lý cấp 1 · Hà Nam 02 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 38 | 74 | 15.3 | Không |
| VT-0233 | 2026-09-24 | KD5 | DL-022 | Đại lý cấp 1 · Quảng Bình 02 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 23 | 65 | 21.0 | Không |
| VT-0234 | 2026-09-24 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Không | 47 | 5 | 29.8 | Không |
| VT-0235 | 2026-09-24 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Có | 24 | 58 | 36.9 | Không |
| VT-0236 | 2026-09-24 | KD5 | DL-018 | Đại lý cấp 1 · Hà Tĩnh 01 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 21 | 138 | 11.8 | Có |
| VT-0237 | 2026-09-24 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 52 | 140 | 32.3 | Không |
| VT-0238 | 2026-09-24 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 17 | 55 | 21.6 | Có |
| VT-0239 | 2026-09-24 | KD6 | DL-040 | Đại lý cấp 1 · Long An 02 | Long An | Miền Nam | Khối Kinh doanh | Có | 54 | 130 | 13.0 | Có |
| VT-0240 | 2026-09-24 | KD6 | DL-038 | Đại lý cấp 1 · Kiên Giang 03 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 38 | 30 | 30.0 | Có |
| VT-0241 | 2026-09-25 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 24 | 89 | 7.6 | Không |
| VT-0242 | 2026-09-25 | KD4 | DL-009 | Đại lý cấp 1 · Hải Dương 03 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 14 | 148 | 19.1 | Có |
| VT-0243 | 2026-09-25 | KD4 | DL-004 | Đại lý cấp 1 · Nam Định 02 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 22 | 161 | 13.8 | Không |
| VT-0244 | 2026-09-25 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 49 | 178 | 28.9 | Không |
| VT-0245 | 2026-09-25 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Không | 15 | 105 | 11.8 | Không |
| VT-0246 | 2026-09-25 | KD5 | DL-022 | Đại lý cấp 1 · Quảng Bình 02 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 12 | 109 | 16.7 | Không |
| VT-0247 | 2026-09-25 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 45 | 50 | 14.9 | Không |
| VT-0248 | 2026-09-25 | KD5 | DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 47 | 102 | 12.5 | Có |
| VT-0249 | 2026-09-25 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Có | 32 | 180 | 15.5 | Không |
| VT-0250 | 2026-09-25 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 37 | 146 | 37.7 | Có |
| VT-0251 | 2026-09-25 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 18 | 85 | 17.5 | Có |
| VT-0252 | 2026-09-25 | KD6 | DL-042 | Đại lý cấp 1 · Sóc Trăng 02 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 45 | 81 | 5.8 | Không |
| VT-0253 | 2026-09-25 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 48 | 36 | 13.8 | Không |
| VT-0254 | 2026-09-25 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 38 | 89 | 24.4 | Có |
| VT-0255 | 2026-09-26 | KD4 | DL-009 | Đại lý cấp 1 · Hải Dương 03 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 28 | 157 | 14.3 | Không |
| VT-0256 | 2026-09-26 | KD4 | DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 22 | 116 | 10.1 | Có |
| VT-0257 | 2026-09-26 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 14 | 133 | 9.7 | Có |
| VT-0258 | 2026-09-26 | KD4 | DL-006 | Đại lý cấp 1 · Hà Nam 02 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 52 | 49 | 12.7 | Không |
| VT-0259 | 2026-09-26 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 47 | 123 | 28.2 | Có |
| VT-0260 | 2026-09-26 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 39 | 67 | 19.7 | Không |
| VT-0261 | 2026-09-26 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 49 | 42 | 29.2 | Không |
| VT-0262 | 2026-09-26 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 20 | 13 | 13.8 | Có |
| VT-0263 | 2026-09-26 | KD5 | DL-027 | Đại lý cấp 1 · Bình Định 03 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 48 | 123 | 21.1 | Không |
| VT-0264 | 2026-09-26 | KD6 | DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | Khối Kinh doanh | Có | 13 | 88 | 37.6 | Có |
| VT-0265 | 2026-09-26 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 16 | 173 | 17.1 | Không |
| VT-0266 | 2026-09-26 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 48 | 111 | 29.7 | Không |
| VT-0267 | 2026-09-26 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Không | 15 | 98 | 22.6 | Không |
| VT-0268 | 2026-09-26 | KD6 | DL-042 | Đại lý cấp 1 · Sóc Trăng 02 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 39 | 157 | 19.7 | Không |
| VT-0269 | 2026-09-28 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Không | 24 | 30 | 13.6 | Không |
| VT-0270 | 2026-09-28 | KD4 | DL-003 | Đại lý cấp 1 · Nam Định 01 | Nam Định | Miền Bắc | Khối Kinh doanh | Không | 12 | 22 | 13.4 | Không |
| VT-0271 | 2026-09-28 | KD4 | DL-008 | Đại lý cấp 1 · Hải Dương 02 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 26 | 109 | 36.1 | Không |
| VT-0272 | 2026-09-28 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 17 | 160 | 7.1 | Không |
| VT-0273 | 2026-09-28 | KD4 | DL-009 | Đại lý cấp 1 · Hải Dương 03 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 35 | 88 | 6.6 | Có |
| VT-0274 | 2026-09-28 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 20 | 16 | 19.5 | Có |
| VT-0275 | 2026-09-28 | KD5 | DL-021 | Đại lý cấp 1 · Quảng Bình 01 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 49 | 148 | 12.8 | Có |
| VT-0276 | 2026-09-28 | KD5 | DL-018 | Đại lý cấp 1 · Hà Tĩnh 01 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Không | 37 | 170 | 17.3 | Không |
| VT-0277 | 2026-09-28 | KD5 | DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 11 | 46 | 22.9 | Có |
| VT-0278 | 2026-09-28 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 16 | 138 | 36.5 | Không |
| VT-0279 | 2026-09-28 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Có | 54 | 119 | 37.6 | Không |
| VT-0280 | 2026-09-28 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Không | 12 | 152 | 34.5 | Có |
| VT-0281 | 2026-09-28 | KD6 | DL-042 | Đại lý cấp 1 · Sóc Trăng 02 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 8 | 71 | 14.7 | Không |
| VT-0282 | 2026-09-29 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 43 | 80 | 6.0 | Không |
| VT-0283 | 2026-09-29 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 51 | 160 | 10.1 | Không |
| VT-0284 | 2026-09-29 | KD4 | DL-004 | Đại lý cấp 1 · Nam Định 02 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 21 | 21 | 33.9 | Không |
| VT-0285 | 2026-09-29 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 24 | 118 | 27.1 | Không |
| VT-0286 | 2026-09-29 | KD4 | DL-006 | Đại lý cấp 1 · Hà Nam 02 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 42 | 77 | 16.1 | Không |
| VT-0287 | 2026-09-29 | KD5 | DL-018 | Đại lý cấp 1 · Hà Tĩnh 01 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 20 | 55 | 8.6 | Không |
| VT-0288 | 2026-09-29 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 27 | 116 | 34.7 | Có |
| VT-0289 | 2026-09-29 | KD6 | DL-043 | Đại lý cấp 1 · Sóc Trăng 03 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 10 | 70 | 22.2 | Có |
| VT-0290 | 2026-09-29 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 8 | 154 | 28.0 | Không |
| VT-0291 | 2026-09-29 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 52 | 153 | 6.3 | Không |
| VT-0292 | 2026-09-29 | KD6 | DL-038 | Đại lý cấp 1 · Kiên Giang 03 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 25 | 179 | 14.9 | Có |
| VT-0293 | 2026-09-29 | KD6 | DL-040 | Đại lý cấp 1 · Long An 02 | Long An | Miền Nam | Khối Kinh doanh | Có | 27 | 61 | 13.7 | Không |
| VT-0294 | 2026-09-29 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Có | 46 | 32 | 30.2 | Không |
| VT-0295 | 2026-09-30 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 8 | 102 | 36.6 | Không |
| VT-0296 | 2026-09-30 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 38 | 12 | 24.2 | Không |
| VT-0297 | 2026-09-30 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 50 | 59 | 21.8 | Không |
| VT-0298 | 2026-09-30 | KD4 | DL-006 | Đại lý cấp 1 · Hà Nam 02 | Hà Nam | Miền Bắc | Khối Kinh doanh | Không | 30 | 12 | 22.2 | Không |
| VT-0299 | 2026-09-30 | KD4 | DL-013 | Đại lý cấp 1 · Phú Thọ 02 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 51 | 49 | 6.9 | Không |
| VT-0300 | 2026-09-30 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Có | 22 | 130 | 16.7 | Có |
| VT-0301 | 2026-09-30 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 36 | 74 | 32.5 | Có |
| VT-0302 | 2026-09-30 | KD5 | DL-022 | Đại lý cấp 1 · Quảng Bình 02 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 46 | 127 | 12.3 | Có |
| VT-0303 | 2026-09-30 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 16 | 69 | 36.8 | Có |
| VT-0304 | 2026-09-30 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Không | 33 | 125 | 27.8 | Không |
| VT-0305 | 2026-09-30 | KD6 | DL-038 | Đại lý cấp 1 · Kiên Giang 03 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 22 | 37 | 21.4 | Không |
| VT-0306 | 2026-09-30 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 35 | 115 | 18.9 | Không |
| VT-0307 | 2026-09-30 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 50 | 90 | 21.6 | Không |
| VT-0308 | 2026-10-01 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 50 | 82 | 10.3 | Có |
| VT-0309 | 2026-10-01 | KD4 | DL-013 | Đại lý cấp 1 · Phú Thọ 02 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 44 | 75 | 5.5 | Không |
| VT-0310 | 2026-10-01 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 14 | 122 | 11.3 | Không |
| VT-0311 | 2026-10-01 | KD5 | DL-021 | Đại lý cấp 1 · Quảng Bình 01 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 16 | 63 | 5.4 | Có |
| VT-0312 | 2026-10-01 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 53 | 168 | 9.9 | Không |
| VT-0313 | 2026-10-01 | KD5 | DL-027 | Đại lý cấp 1 · Bình Định 03 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 15 | 62 | 17.0 | Không |
| VT-0314 | 2026-10-01 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 53 | 115 | 28.2 | Có |
| VT-0315 | 2026-10-01 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 30 | 10 | 20.0 | Không |
| VT-0316 | 2026-10-01 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 42 | 110 | 20.3 | Không |
| VT-0317 | 2026-10-01 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 42 | 82 | 19.5 | Không |
| VT-0318 | 2026-10-02 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 23 | 31 | 21.7 | Không |
| VT-0319 | 2026-10-02 | KD4 | DL-001 | Đại lý cấp 1 · Thái Bình 01 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 28 | 40 | 34.4 | Có |
| VT-0320 | 2026-10-02 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 52 | 141 | 26.6 | Không |
| VT-0321 | 2026-10-02 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 11 | 122 | 15.4 | Không |
| VT-0322 | 2026-10-02 | KD5 | DL-028 | Đại lý cấp 1 · Đắk Lắk 01 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 26 | 64 | 24.5 | Không |
| VT-0323 | 2026-10-02 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Có | 29 | 147 | 18.0 | Không |
| VT-0324 | 2026-10-02 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 37 | 141 | 32.4 | Không |
| VT-0325 | 2026-10-02 | KD5 | DL-021 | Đại lý cấp 1 · Quảng Bình 01 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 11 | 57 | 32.0 | Có |
| VT-0326 | 2026-10-02 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 42 | 58 | 16.1 | Có |
| VT-0327 | 2026-10-02 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Không | 36 | 130 | 34.0 | Không |
| VT-0328 | 2026-10-02 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 45 | 96 | 15.7 | Không |
| VT-0329 | 2026-10-03 | KD4 | DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 41 | 19 | 35.5 | Không |
| VT-0330 | 2026-10-03 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 32 | 65 | 16.4 | Có |
| VT-0331 | 2026-10-03 | KD4 | DL-009 | Đại lý cấp 1 · Hải Dương 03 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 14 | 111 | 6.2 | Không |
| VT-0332 | 2026-10-03 | KD4 | DL-008 | Đại lý cấp 1 · Hải Dương 02 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 48 | 8 | 29.2 | Không |
| VT-0333 | 2026-10-03 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 37 | 156 | 11.1 | Không |
| VT-0334 | 2026-10-03 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 53 | 104 | 17.4 | Có |
| VT-0335 | 2026-10-03 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 29 | 156 | 10.1 | Không |
| VT-0336 | 2026-10-03 | KD6 | DL-043 | Đại lý cấp 1 · Sóc Trăng 03 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 47 | 156 | 17.2 | Không |
| VT-0337 | 2026-10-03 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 40 | 71 | 11.5 | Không |
| VT-0338 | 2026-10-05 | KD4 | DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 22 | 169 | 28.9 | Không |
| VT-0339 | 2026-10-05 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Không | 29 | 39 | 37.0 | Không |
| VT-0340 | 2026-10-05 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 49 | 154 | 25.6 | Không |
| VT-0341 | 2026-10-05 | KD5 | DL-028 | Đại lý cấp 1 · Đắk Lắk 01 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 51 | 180 | 30.0 | Không |
| VT-0342 | 2026-10-05 | KD5 | DL-018 | Đại lý cấp 1 · Hà Tĩnh 01 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 36 | 180 | 18.6 | Có |
| VT-0343 | 2026-10-05 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 17 | 34 | 9.6 | Có |
| VT-0344 | 2026-10-05 | KD5 | DL-022 | Đại lý cấp 1 · Quảng Bình 02 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 32 | 151 | 31.2 | Không |
| VT-0345 | 2026-10-05 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Có | 29 | 51 | 24.5 | Có |
| VT-0346 | 2026-10-05 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 52 | 145 | 10.7 | Có |
| VT-0347 | 2026-10-05 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 10 | 151 | 15.7 | Không |
| VT-0348 | 2026-10-05 | KD6 | DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | Khối Kinh doanh | Có | 45 | 106 | 14.2 | Không |
| VT-0349 | 2026-10-05 | KD6 | DL-040 | Đại lý cấp 1 · Long An 02 | Long An | Miền Nam | Khối Kinh doanh | Không | 40 | 41 | 13.2 | Không |
| VT-0350 | 2026-10-06 | KD4 | DL-013 | Đại lý cấp 1 · Phú Thọ 02 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 34 | 111 | 12.0 | Không |
| VT-0351 | 2026-10-06 | KD4 | DL-007 | Đại lý cấp 1 · Hải Dương 01 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 8 | 47 | 22.6 | Không |
| VT-0352 | 2026-10-06 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 53 | 18 | 12.5 | Không |
| VT-0353 | 2026-10-06 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 28 | 178 | 4.9 | Có |
| VT-0354 | 2026-10-06 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 17 | 20 | 15.5 | Có |
| VT-0355 | 2026-10-06 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Không | 22 | 165 | 17.5 | Không |
| VT-0356 | 2026-10-06 | KD5 | DL-022 | Đại lý cấp 1 · Quảng Bình 02 | Quảng Bình | Miền Trung | Khối Kinh doanh | Không | 20 | 90 | 22.4 | Không |
| VT-0357 | 2026-10-06 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Có | 29 | 95 | 22.7 | Có |
| VT-0358 | 2026-10-06 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Có | 20 | 82 | 8.6 | Không |
| VT-0359 | 2026-10-06 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 37 | 18 | 17.6 | Không |
| VT-0360 | 2026-10-06 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 14 | 170 | 34.8 | Có |
| VT-0361 | 2026-10-07 | KD4 | DL-009 | Đại lý cấp 1 · Hải Dương 03 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 52 | 40 | 4.4 | Có |
| VT-0362 | 2026-10-07 | KD4 | DL-006 | Đại lý cấp 1 · Hà Nam 02 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 45 | 17 | 35.3 | Không |
| VT-0363 | 2026-10-07 | KD4 | DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 11 | 107 | 36.5 | Có |
| VT-0364 | 2026-10-07 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 38 | 99 | 27.4 | Không |
| VT-0365 | 2026-10-07 | KD4 | DL-001 | Đại lý cấp 1 · Thái Bình 01 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 36 | 109 | 11.4 | Không |
| VT-0366 | 2026-10-07 | KD4 | DL-004 | Đại lý cấp 1 · Nam Định 02 | Nam Định | Miền Bắc | Khối Kinh doanh | Không | 30 | 128 | 24.6 | Có |
| VT-0367 | 2026-10-07 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 8 | 92 | 37.2 | Có |
| VT-0368 | 2026-10-07 | KD5 | DL-028 | Đại lý cấp 1 · Đắk Lắk 01 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 13 | 70 | 29.9 | Có |
| VT-0369 | 2026-10-07 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 34 | 8 | 5.9 | Không |
| VT-0370 | 2026-10-07 | KD6 | DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | Khối Kinh doanh | Có | 30 | 165 | 13.4 | Không |
| VT-0371 | 2026-10-07 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Có | 9 | 117 | 22.1 | Có |
| VT-0372 | 2026-10-08 | KD4 | DL-004 | Đại lý cấp 1 · Nam Định 02 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 46 | 12 | 26.9 | Không |
| VT-0373 | 2026-10-08 | KD4 | DL-003 | Đại lý cấp 1 · Nam Định 01 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 18 | 47 | 19.2 | Không |
| VT-0374 | 2026-10-08 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 21 | 129 | 10.8 | Không |
| VT-0375 | 2026-10-08 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 48 | 180 | 5.0 | Có |
| VT-0376 | 2026-10-08 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 32 | 97 | 28.3 | Không |
| VT-0377 | 2026-10-08 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 39 | 39 | 23.8 | Không |
| VT-0378 | 2026-10-08 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 15 | 160 | 11.5 | Có |
| VT-0379 | 2026-10-08 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Có | 32 | 72 | 7.5 | Không |
| VT-0380 | 2026-10-08 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 48 | 82 | 21.0 | Không |
| VT-0381 | 2026-10-08 | KD5 | DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | Khối Kinh doanh | Không | 13 | 67 | 21.3 | Có |
| VT-0382 | 2026-10-08 | KD6 | DL-040 | Đại lý cấp 1 · Long An 02 | Long An | Miền Nam | Khối Kinh doanh | Có | 45 | 158 | 32.1 | Có |
| VT-0383 | 2026-10-08 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Có | 18 | 5 | 24.8 | Không |
| VT-0384 | 2026-10-08 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 31 | 180 | 32.2 | Không |
| VT-0385 | 2026-10-08 | KD6 | DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | Khối Kinh doanh | Có | 30 | 115 | 5.3 | Có |
| VT-0386 | 2026-10-08 | KD6 | DL-042 | Đại lý cấp 1 · Sóc Trăng 02 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Không | 22 | 27 | 31.0 | Có |
| VT-0387 | 2026-10-09 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 18 | 146 | 12.5 | Không |
| VT-0388 | 2026-10-09 | KD4 | DL-013 | Đại lý cấp 1 · Phú Thọ 02 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 52 | 84 | 10.8 | Không |
| VT-0389 | 2026-10-09 | KD4 | DL-003 | Đại lý cấp 1 · Nam Định 01 | Nam Định | Miền Bắc | Khối Kinh doanh | Không | 16 | 43 | 31.2 | Không |
| VT-0390 | 2026-10-09 | KD4 | DL-009 | Đại lý cấp 1 · Hải Dương 03 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 22 | 86 | 27.9 | Có |
| VT-0391 | 2026-10-09 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 35 | 177 | 7.9 | Không |
| VT-0392 | 2026-10-09 | KD4 | DL-006 | Đại lý cấp 1 · Hà Nam 02 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 51 | 160 | 18.9 | Không |
| VT-0393 | 2026-10-09 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Không | 13 | 82 | 17.7 | Không |
| VT-0394 | 2026-10-09 | KD5 | DL-022 | Đại lý cấp 1 · Quảng Bình 02 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 34 | 145 | 9.6 | Không |
| VT-0395 | 2026-10-09 | KD5 | DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | Khối Kinh doanh | Không | 32 | 162 | 25.1 | Có |
| VT-0396 | 2026-10-09 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Có | 13 | 175 | 7.0 | Có |
| VT-0397 | 2026-10-09 | KD6 | DL-040 | Đại lý cấp 1 · Long An 02 | Long An | Miền Nam | Khối Kinh doanh | Có | 11 | 78 | 31.0 | Không |
| VT-0398 | 2026-10-09 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 16 | 148 | 29.3 | Có |
| VT-0399 | 2026-10-09 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 25 | 101 | 31.7 | Không |
| VT-0400 | 2026-10-10 | KD4 | DL-009 | Đại lý cấp 1 · Hải Dương 03 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 49 | 20 | 13.6 | Không |
| VT-0401 | 2026-10-10 | KD4 | DL-013 | Đại lý cấp 1 · Phú Thọ 02 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 35 | 177 | 35.1 | Không |
| VT-0402 | 2026-10-10 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 53 | 174 | 10.0 | Có |
| VT-0403 | 2026-10-10 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 23 | 157 | 24.1 | Không |
| VT-0404 | 2026-10-10 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Không | 17 | 170 | 18.0 | Có |
| VT-0405 | 2026-10-10 | KD5 | DL-027 | Đại lý cấp 1 · Bình Định 03 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 47 | 56 | 7.0 | Có |
| VT-0406 | 2026-10-10 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Có | 35 | 65 | 16.1 | Không |
| VT-0407 | 2026-10-10 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 19 | 117 | 21.2 | Có |
| VT-0408 | 2026-10-10 | KD5 | DL-018 | Đại lý cấp 1 · Hà Tĩnh 01 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 46 | 96 | 12.4 | Có |
| VT-0409 | 2026-10-10 | KD5 | DL-021 | Đại lý cấp 1 · Quảng Bình 01 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 35 | 30 | 5.6 | Có |
| VT-0410 | 2026-10-10 | KD6 | DL-038 | Đại lý cấp 1 · Kiên Giang 03 | Kiên Giang | Miền Nam | Khối Kinh doanh | Không | 50 | 101 | 28.7 | Không |
| VT-0411 | 2026-10-10 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 13 | 72 | 30.7 | Không |
| VT-0412 | 2026-10-10 | KD6 | DL-042 | Đại lý cấp 1 · Sóc Trăng 02 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 34 | 180 | 6.1 | Có |
| VT-0413 | 2026-10-10 | KD6 | DL-040 | Đại lý cấp 1 · Long An 02 | Long An | Miền Nam | Khối Kinh doanh | Có | 13 | 91 | 35.1 | Không |
| VT-0414 | 2026-10-12 | KD4 | DL-004 | Đại lý cấp 1 · Nam Định 02 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 53 | 74 | 37.0 | Không |
| VT-0415 | 2026-10-12 | KD4 | DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 37 | 115 | 12.0 | Không |
| VT-0416 | 2026-10-12 | KD4 | DL-009 | Đại lý cấp 1 · Hải Dương 03 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 32 | 7 | 14.0 | Có |
| VT-0417 | 2026-10-12 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 51 | 17 | 34.7 | Có |
| VT-0418 | 2026-10-12 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Không | 25 | 15 | 33.8 | Không |
| VT-0419 | 2026-10-12 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 54 | 90 | 24.4 | Không |
| VT-0420 | 2026-10-12 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 49 | 6 | 18.8 | Có |
| VT-0421 | 2026-10-12 | KD5 | DL-028 | Đại lý cấp 1 · Đắk Lắk 01 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 42 | 170 | 21.2 | Không |
| VT-0422 | 2026-10-12 | KD5 | DL-018 | Đại lý cấp 1 · Hà Tĩnh 01 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 30 | 46 | 11.6 | Không |
| VT-0423 | 2026-10-12 | KD5 | DL-022 | Đại lý cấp 1 · Quảng Bình 02 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 55 | 57 | 15.0 | Có |
| VT-0424 | 2026-10-12 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Không | 45 | 125 | 25.0 | Có |
| VT-0425 | 2026-10-12 | KD6 | DL-040 | Đại lý cấp 1 · Long An 02 | Long An | Miền Nam | Khối Kinh doanh | Có | 18 | 58 | 37.3 | Có |
| VT-0426 | 2026-10-13 | KD4 | DL-006 | Đại lý cấp 1 · Hà Nam 02 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 51 | 76 | 29.1 | Có |
| VT-0427 | 2026-10-13 | KD4 | DL-009 | Đại lý cấp 1 · Hải Dương 03 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 11 | 17 | 36.8 | Không |
| VT-0428 | 2026-10-13 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Có | 52 | 45 | 17.1 | Có |
| VT-0429 | 2026-10-13 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 8 | 134 | 10.0 | Không |
| VT-0430 | 2026-10-13 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 9 | 139 | 5.6 | Không |
| VT-0431 | 2026-10-13 | KD4 | DL-004 | Đại lý cấp 1 · Nam Định 02 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 14 | 36 | 12.2 | Có |
| VT-0432 | 2026-10-13 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 39 | 77 | 26.7 | Không |
| VT-0433 | 2026-10-13 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Không | 34 | 179 | 10.2 | Có |
| VT-0434 | 2026-10-13 | KD5 | DL-016 | Đại lý cấp 1 · Nghệ An 01 | Nghệ An | Miền Trung | Khối Kinh doanh | Không | 36 | 77 | 20.4 | Không |
| VT-0435 | 2026-10-13 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Có | 41 | 34 | 11.6 | Không |
| VT-0436 | 2026-10-13 | KD6 | DL-043 | Đại lý cấp 1 · Sóc Trăng 03 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 39 | 12 | 9.9 | Không |
| VT-0437 | 2026-10-13 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 46 | 19 | 25.0 | Không |
| VT-0438 | 2026-10-13 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 39 | 102 | 9.2 | Không |
| VT-0439 | 2026-10-13 | KD6 | DL-038 | Đại lý cấp 1 · Kiên Giang 03 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 38 | 136 | 31.6 | Có |
| VT-0440 | 2026-10-13 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Không | 47 | 133 | 25.4 | Không |
| VT-0441 | 2026-10-14 | KD4 | DL-006 | Đại lý cấp 1 · Hà Nam 02 | Hà Nam | Miền Bắc | Khối Kinh doanh | Có | 32 | 47 | 4.9 | Không |
| VT-0442 | 2026-10-14 | KD4 | DL-007 | Đại lý cấp 1 · Hải Dương 01 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 47 | 167 | 12.8 | Không |
| VT-0443 | 2026-10-14 | KD4 | DL-001 | Đại lý cấp 1 · Thái Bình 01 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 33 | 13 | 21.0 | Không |
| VT-0444 | 2026-10-14 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 17 | 129 | 19.6 | Không |
| VT-0445 | 2026-10-14 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 18 | 69 | 6.0 | Không |
| VT-0446 | 2026-10-14 | KD5 | DL-021 | Đại lý cấp 1 · Quảng Bình 01 | Quảng Bình | Miền Trung | Khối Kinh doanh | Có | 49 | 17 | 15.3 | Không |
| VT-0447 | 2026-10-14 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Có | 28 | 9 | 6.2 | Có |
| VT-0448 | 2026-10-14 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 35 | 145 | 30.2 | Không |
| VT-0449 | 2026-10-14 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Có | 14 | 64 | 8.6 | Có |
| VT-0450 | 2026-10-14 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Có | 31 | 74 | 12.1 | Không |
| VT-0451 | 2026-10-14 | KD6 | DL-038 | Đại lý cấp 1 · Kiên Giang 03 | Kiên Giang | Miền Nam | Khối Kinh doanh | Không | 36 | 99 | 6.0 | Có |
| VT-0452 | 2026-10-15 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Không | 43 | 161 | 9.3 | Không |
| VT-0453 | 2026-10-15 | KD4 | DL-007 | Đại lý cấp 1 · Hải Dương 01 | Hải Dương | Miền Bắc | Khối Kinh doanh | Có | 53 | 71 | 7.8 | Không |
| VT-0454 | 2026-10-15 | KD4 | DL-004 | Đại lý cấp 1 · Nam Định 02 | Nam Định | Miền Bắc | Khối Kinh doanh | Có | 45 | 124 | 21.0 | Có |
| VT-0455 | 2026-10-15 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 49 | 12 | 15.1 | Không |
| VT-0456 | 2026-10-15 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 25 | 26 | 33.3 | Có |
| VT-0457 | 2026-10-15 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 37 | 62 | 18.6 | Không |
| VT-0458 | 2026-10-15 | KD6 | DL-031 | Đại lý cấp 1 · An Giang 02 | An Giang | Miền Nam | Khối Kinh doanh | Có | 10 | 123 | 19.8 | Có |
| VT-0459 | 2026-10-15 | KD6 | DL-042 | Đại lý cấp 1 · Sóc Trăng 02 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 18 | 125 | 29.4 | Có |
| VT-0460 | 2026-10-15 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 21 | 162 | 4.2 | Không |
| VT-0461 | 2026-10-15 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 24 | 24 | 32.0 | Không |
| VT-0462 | 2026-10-16 | KD4 | DL-014 | Đại lý cấp 1 · Thanh Hoá 01 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Có | 49 | 142 | 25.7 | Có |
| VT-0463 | 2026-10-16 | KD4 | DL-005 | Đại lý cấp 1 · Hà Nam 01 | Hà Nam | Miền Bắc | Khối Kinh doanh | Không | 40 | 35 | 34.3 | Có |
| VT-0464 | 2026-10-16 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 8 | 33 | 19.6 | Có |
| VT-0465 | 2026-10-16 | KD5 | DL-017 | Đại lý cấp 1 · Nghệ An 02 | Nghệ An | Miền Trung | Khối Kinh doanh | Không | 45 | 162 | 12.9 | Không |
| VT-0466 | 2026-10-16 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 18 | 112 | 9.8 | Không |
| VT-0467 | 2026-10-16 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Không | 43 | 12 | 9.8 | Có |
| VT-0468 | 2026-10-16 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 52 | 110 | 35.0 | Có |
| VT-0469 | 2026-10-16 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 50 | 115 | 28.5 | Có |
| VT-0470 | 2026-10-16 | KD6 | DL-033 | Đại lý cấp 1 · Đồng Tháp 02 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 30 | 131 | 31.8 | Không |
| VT-0471 | 2026-10-16 | KD6 | DL-032 | Đại lý cấp 1 · Đồng Tháp 01 | Đồng Tháp | Miền Nam | Khối Kinh doanh | Có | 26 | 111 | 8.8 | Có |
| VT-0472 | 2026-10-16 | KD6 | DL-042 | Đại lý cấp 1 · Sóc Trăng 02 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Có | 26 | 134 | 36.1 | Không |
| VT-0473 | 2026-10-17 | KD4 | DL-002 | Đại lý cấp 1 · Thái Bình 02 | Thái Bình | Miền Bắc | Khối Kinh doanh | Không | 28 | 136 | 21.9 | Có |
| VT-0474 | 2026-10-17 | KD4 | DL-010 | Đại lý cấp 1 · Bắc Giang 01 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 8 | 167 | 35.5 | Không |
| VT-0475 | 2026-10-17 | KD4 | DL-011 | Đại lý cấp 1 · Bắc Giang 02 | Bắc Giang | Miền Bắc | Khối Kinh doanh | Có | 32 | 166 | 26.8 | Không |
| VT-0476 | 2026-10-17 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Không | 33 | 163 | 21.3 | Không |
| VT-0477 | 2026-10-17 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 10 | 55 | 17.9 | Không |
| VT-0478 | 2026-10-17 | KD6 | DL-039 | Đại lý cấp 1 · Long An 01 | Long An | Miền Nam | Khối Kinh doanh | Có | 36 | 120 | 31.8 | Không |
| VT-0479 | 2026-10-17 | KD6 | DL-041 | Đại lý cấp 1 · Sóc Trăng 01 | Sóc Trăng | Miền Nam | Khối Kinh doanh | Không | 33 | 109 | 9.0 | Có |
| VT-0480 | 2026-10-17 | KD6 | DL-036 | Đại lý cấp 1 · Kiên Giang 01 | Kiên Giang | Miền Nam | Khối Kinh doanh | Không | 25 | 90 | 28.4 | Có |
| VT-0481 | 2026-10-19 | KD4 | DL-012 | Đại lý cấp 1 · Phú Thọ 01 | Phú Thọ | Miền Bắc | Khối Kinh doanh | Không | 47 | 99 | 31.3 | Không |
| VT-0482 | 2026-10-19 | KD4 | DL-001 | Đại lý cấp 1 · Thái Bình 01 | Thái Bình | Miền Bắc | Khối Kinh doanh | Có | 9 | 147 | 15.8 | Không |
| VT-0483 | 2026-10-19 | KD4 | DL-015 | Đại lý cấp 1 · Thanh Hoá 02 | Thanh Hoá | Miền Bắc | Khối Kinh doanh | Không | 32 | 6 | 7.3 | Không |
| VT-0484 | 2026-10-19 | KD5 | DL-019 | Đại lý cấp 1 · Hà Tĩnh 02 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Có | 14 | 116 | 33.8 | Không |
| VT-0485 | 2026-10-19 | KD5 | DL-029 | Đại lý cấp 1 · Đắk Lắk 02 | Đắk Lắk | Miền Trung | Khối Kinh doanh | Có | 17 | 149 | 27.7 | Có |
| VT-0486 | 2026-10-19 | KD5 | DL-026 | Đại lý cấp 1 · Bình Định 02 | Bình Định | Miền Trung | Khối Kinh doanh | Không | 54 | 150 | 24.8 | Không |
| VT-0487 | 2026-10-19 | KD5 | DL-018 | Đại lý cấp 1 · Hà Tĩnh 01 | Hà Tĩnh | Miền Trung | Khối Kinh doanh | Không | 8 | 39 | 13.8 | Không |
| VT-0488 | 2026-10-19 | KD5 | DL-023 | Đại lý cấp 1 · Quảng Nam 01 | Quảng Nam | Miền Trung | Khối Kinh doanh | Có | 26 | 143 | 11.2 | Không |
| VT-0489 | 2026-10-19 | KD5 | DL-027 | Đại lý cấp 1 · Bình Định 03 | Bình Định | Miền Trung | Khối Kinh doanh | Có | 18 | 114 | 21.8 | Không |
| VT-0490 | 2026-10-19 | KD6 | DL-040 | Đại lý cấp 1 · Long An 02 | Long An | Miền Nam | Khối Kinh doanh | Có | 34 | 121 | 4.8 | Không |
| VT-0491 | 2026-10-19 | KD6 | DL-035 | Đại lý cấp 1 · Cần Thơ 02 | Cần Thơ | Miền Nam | Khối Kinh doanh | Có | 11 | 29 | 15.0 | Không |

## 9. Tiến độ sản xuất (BC9)
<a id="9-production"></a>

- Tệp: `dashboard/data/production.json` · 38 dòng
- Nguồn dự kiến: Excel (sau này phần mềm sản xuất mới)
- Dùng ở tab: Sản xuất & thu mua

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `plot_id` | Mã điểm SX |
| `season` | Vụ |
| `unit` | Đơn vị SX |
| `region` | Vùng |
| `variety` | Giống |
| `crop` | Loại giống |
| `owner` | Cán bộ phụ trách |
| `dept` | Phòng ban |
| `area_plan_ha` | DT kế hoạch (ha) |
| `area_deployed_ha` | DT triển khai (ha) |
| `ha_delivered` | Đã giao giống (ha) |
| `ha_sown` | Đã gieo (ha) |
| `ha_doing` | Đang triển khai (ha) |
| `ha_failed` | Không làm được (ha) |
| `output_plan_t` | SL kế hoạch (tấn) |
| `output_expected_t` | SL dự kiến (tấn) |
| `harvest_month` | Tháng thu hoạch |

**Dữ liệu**

| plot_id | season | unit | region | variety | crop | owner | dept | area_plan_ha | area_deployed_ha | ha_delivered | ha_sown | ha_doing | ha_failed | output_plan_t | output_expected_t | harvest_month |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SX-001 | Thu Đông 2026 | P.SX 1 | Đồng bằng sông Hồng | VS-N02 | Ngô lai | SX1 | Khối Sản xuất | 35 | 34 | 8 | 17 | 9 | 1 | 172 | 150 | 2027-01 |
| SX-002 | Mùa 2026 | P.SX 1 | Đồng bằng sông Hồng | VS-H01 | Lúa lai | SX1 | Khối Sản xuất | 41 | 40 | 0 | 40 | 0 | 1 | 238 | 222 | 2026-10 |
| SX-003 | Thu Đông 2026 | P.SX 1 | Đồng bằng sông Hồng | VS-H01 | Lúa lai | SX1 | Khối Sản xuất | 134 | 131 | 19 | 75 | 37 | 3 | 777 | 716 | 2027-01 |
| SX-004 | Mùa 2026 | P.SX 1 | Đồng bằng sông Hồng | VS-L03 | Lúa thuần | SX1 | Khối Sản xuất | 138 | 135 | 0 | 135 | 0 | 3 | 800 | 795 | 2026-10 |
| SX-005 | Thu Đông 2026 | P.SX 1 | Đồng bằng sông Hồng | VS-L03 | Lúa thuần | SX1 | Khối Sản xuất | 152 | 148 | 26 | 72 | 50 | 4 | 882 | 789 | 2027-01 |
| SX-006 | Mùa 2026 | P.SX 2 | Đồng bằng sông Hồng | VS-H01 | Lúa lai | SX2 | Khối Sản xuất | 129 | 123 | 0 | 123 | 0 | 6 | 748 | 702 | 2026-10 |
| SX-007 | Thu Đông 2026 | P.SX 2 | Đồng bằng sông Hồng | VS-H01 | Lúa lai | SX2 | Khối Sản xuất | 72 | 70 | 14 | 37 | 19 | 2 | 418 | 383 | 2027-01 |
| SX-008 | Mùa 2026 | P.SX 2 | Đồng bằng sông Hồng | VS-N01 | Ngô lai | SX2 | Khối Sản xuất | 40 | 40 | 0 | 40 | 0 | 0 | 196 | 200 | 2026-10 |
| SX-009 | Thu Đông 2026 | P.SX 2 | Đồng bằng sông Hồng | VS-N01 | Ngô lai | SX2 | Khối Sản xuất | 151 | 147 | 34 | 44 | 69 | 4 | 740 | 679 | 2027-01 |
| SX-010 | Mùa 2026 | P.SX 2 | Đồng bằng sông Hồng | VS-L02 | Lúa thuần | SX2 | Khối Sản xuất | 83 | 82 | 0 | 82 | 0 | 1 | 481 | 435 | 2026-10 |
| SX-011 | Thu Đông 2026 | P.SX 2 | Đồng bằng sông Hồng | VS-L02 | Lúa thuần | SX2 | Khối Sản xuất | 68 | 65 | 19 | 27 | 19 | 3 | 394 | 351 | 2027-01 |
| SX-012 | Mùa 2026 | P.SX 2 | Đồng bằng sông Hồng | VS-L01 | Lúa thuần | SX2 | Khối Sản xuất | 37 | 36 | 0 | 36 | 0 | 1 | 215 | 211 | 2026-10 |
| SX-013 | Thu Đông 2026 | P.SX 2 | Đồng bằng sông Hồng | VS-L01 | Lúa thuần | SX2 | Khối Sản xuất | 130 | 124 | 24 | 63 | 37 | 6 | 754 | 720 | 2027-01 |
| SX-014 | Mùa 2026 | P.SX 3 | Bắc Trung Bộ | VS-H01 | Lúa lai | SX2 | Khối Sản xuất | 46 | 40 | 0 | 40 | 0 | 6 | 267 | 213 | 2026-10 |
| SX-015 | Thu Đông 2026 | P.SX 3 | Bắc Trung Bộ | VS-H01 | Lúa lai | SX2 | Khối Sản xuất | 160 | 144 | 26 | 56 | 62 | 16 | 928 | 865 | 2027-01 |
| SX-016 | Mùa 2026 | P.SX 3 | Bắc Trung Bộ | VS-N01 | Ngô lai | SX2 | Khối Sản xuất | 85 | 81 | 0 | 81 | 0 | 4 | 417 | 394 | 2026-10 |
| SX-017 | Thu Đông 2026 | P.SX 3 | Bắc Trung Bộ | VS-N01 | Ngô lai | SX2 | Khối Sản xuất | 124 | 110 | 32 | 64 | 14 | 14 | 608 | 491 | 2027-01 |
| SX-018 | Mùa 2026 | P.SX 3 | Bắc Trung Bộ | VS-L03 | Lúa thuần | SX2 | Khối Sản xuất | 31 | 27 | 0 | 27 | 0 | 4 | 180 | 148 | 2026-10 |
| SX-019 | Thu Đông 2026 | P.SX 3 | Bắc Trung Bộ | VS-L03 | Lúa thuần | SX2 | Khối Sản xuất | 137 | 124 | 36 | 48 | 40 | 13 | 795 | 748 | 2027-01 |
| SX-020 | Mùa 2026 | P.SX 4 | Bắc Trung Bộ | VS-L01 | Lúa thuần | SX4 | Khối Sản xuất | 109 | 101 | 0 | 101 | 0 | 8 | 632 | 564 | 2026-10 |
| SX-021 | Thu Đông 2026 | P.SX 4 | Bắc Trung Bộ | VS-L01 | Lúa thuần | SX4 | Khối Sản xuất | 61 | 55 | 16 | 24 | 15 | 6 | 354 | 320 | 2027-01 |
| SX-022 | Thu Đông 2026 | P.SX 4 | Bắc Trung Bộ | VS-N02 | Ngô lai | SX4 | Khối Sản xuất | 135 | 119 | 20 | 55 | 44 | 16 | 662 | 530 | 2027-01 |
| SX-023 | Mùa 2026 | P.SX 4 | Bắc Trung Bộ | VS-L03 | Lúa thuần | SX4 | Khối Sản xuất | 104 | 91 | 0 | 91 | 0 | 13 | 603 | 531 | 2026-10 |
| SX-024 | Thu Đông 2026 | P.SX 4 | Bắc Trung Bộ | VS-L03 | Lúa thuần | SX4 | Khối Sản xuất | 148 | 140 | 40 | 83 | 17 | 8 | 858 | 842 | 2027-01 |
| SX-025 | Mùa 2026 | P.SX 4 | Bắc Trung Bộ | VS-H01 | Lúa lai | SX4 | Khối Sản xuất | 143 | 133 | 0 | 133 | 0 | 10 | 829 | 781 | 2026-10 |
| SX-026 | Thu Đông 2026 | P.SX 4 | Bắc Trung Bộ | VS-H01 | Lúa lai | SX4 | Khối Sản xuất | 93 | 83 | 23 | 38 | 22 | 10 | 539 | 454 | 2027-01 |
| SX-027 | Thu Đông 2026 | P.SX 5 | Tây Nguyên | VS-N02 | Ngô lai | SX3 | Khối Sản xuất | 109 | 107 | 16 | 34 | 57 | 2 | 534 | 548 | 2027-01 |
| SX-028 | Mùa 2026 | P.SX 5 | Tây Nguyên | VS-L01 | Lúa thuần | SX3 | Khối Sản xuất | 36 | 36 | 0 | 36 | 0 | 0 | 209 | 194 | 2026-10 |
| SX-029 | Thu Đông 2026 | P.SX 5 | Tây Nguyên | VS-L01 | Lúa thuần | SX3 | Khối Sản xuất | 149 | 143 | 38 | 60 | 45 | 6 | 864 | 867 | 2027-01 |
| SX-030 | Mùa 2026 | P.SX 6 | Đồng bằng sông Cửu Long | VS-L01 | Lúa thuần | SX4 | Khối Sản xuất | 102 | 100 | 0 | 100 | 0 | 2 | 592 | 567 | 2026-10 |
| SX-031 | Thu Đông 2026 | P.SX 6 | Đồng bằng sông Cửu Long | VS-L01 | Lúa thuần | SX4 | Khối Sản xuất | 153 | 150 | 37 | 79 | 34 | 3 | 887 | 862 | 2027-01 |
| SX-032 | Thu Đông 2026 | P.SX 6 | Đồng bằng sông Cửu Long | VS-N01 | Ngô lai | SX4 | Khối Sản xuất | 39 | 37 | 9 | 12 | 16 | 2 | 191 | 172 | 2027-01 |
| SX-033 | Mùa 2026 | P.SX 6 | Đồng bằng sông Cửu Long | VS-N02 | Ngô lai | SX4 | Khối Sản xuất | 79 | 78 | 0 | 78 | 0 | 1 | 387 | 386 | 2026-10 |
| SX-034 | Thu Đông 2026 | P.SX 6 | Đồng bằng sông Cửu Long | VS-N02 | Ngô lai | SX4 | Khối Sản xuất | 65 | 65 | 9 | 28 | 28 | 0 | 318 | 291 | 2027-01 |
| SX-035 | Mùa 2026 | P.SX 7 | Đồng bằng sông Cửu Long | VS-H01 | Lúa lai | SX3 | Khối Sản xuất | 68 | 65 | 0 | 65 | 0 | 3 | 394 | 367 | 2026-10 |
| SX-036 | Thu Đông 2026 | P.SX 7 | Đồng bằng sông Cửu Long | VS-H01 | Lúa lai | SX3 | Khối Sản xuất | 44 | 43 | 8 | 17 | 18 | 1 | 255 | 243 | 2027-01 |
| SX-037 | Mùa 2026 | P.SX 7 | Đồng bằng sông Cửu Long | VS-L01 | Lúa thuần | SX3 | Khối Sản xuất | 42 | 40 | 0 | 40 | 0 | 2 | 244 | 238 | 2026-10 |
| SX-038 | Thu Đông 2026 | P.SX 7 | Đồng bằng sông Cửu Long | VS-L01 | Lúa thuần | SX3 | Khối Sản xuất | 139 | 139 | 24 | 63 | 52 | 0 | 806 | 845 | 2027-01 |

## 10. Thu mua nhập kho (BC6, BC7)
<a id="10-intake"></a>

- Tệp: `dashboard/data/intake.json` · 133 dòng
- Nguồn dự kiến: Excel → Workflow thu mua, nhập kho
- Dùng ở tab: Sản xuất & thu mua

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `intake_id` | Mã phiếu |
| `date` | Ngày |
| `plot_id` | Điểm SX |
| `variety` | Giống |
| `crop` | Loại |
| `unit` | Đơn vị SX |
| `region` | Vùng |
| `owner` | Phụ trách |
| `dept` | Phòng ban |
| `warehouse` | Kho nhập |
| `kg_out` | Lượng SX xuất (kg) |
| `kg_in` | Thực nhập (kg) |
| `kg_dry` | Quy khô (kg) |
| `kg_diff` | Chênh lệch (kg) |
| `status` | Tình trạng |

**Dữ liệu**

| intake_id | date | plot_id | variety | crop | unit | region | owner | dept | warehouse | kg_out | kg_in | kg_dry | kg_diff | status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| NK-0001 | 2026-09-10 | SX-020 | VS-L01 | Lúa thuần | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 23000 | 22857 | 19231 | -143 | Đã nhập kho |
| NK-0002 | 2026-09-10 | SX-018 | VS-L03 | Lúa thuần | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 51000 | 50896 | 42686 | -104 | Đã nhập kho |
| NK-0003 | 2026-09-10 | SX-008 | VS-N01 | Ngô lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 29000 | 28915 | 23288 | -85 | Đã nhập kho |
| NK-0004 | 2026-09-10 | SX-023 | VS-L03 | Lúa thuần | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 60000 | 58398 | 49411 | -1602 | Đã nhập kho |
| NK-0005 | 2026-09-10 | SX-030 | VS-L01 | Lúa thuần | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 38000 | 37709 | 30126 | -291 | Đã nhập kho |
| NK-0006 | 2026-09-11 | SX-006 | VS-H01 | Lúa lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 14000 | 13541 | 10719 | -459 | Đã nhập kho |
| NK-0007 | 2026-09-11 | SX-014 | VS-H01 | Lúa lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 47000 | 46394 | 39326 | -606 | Đã nhập kho |
| NK-0008 | 2026-09-11 | SX-002 | VS-H01 | Lúa lai | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 14000 | 13914 | 11042 | -86 | Đã nhập kho |
| NK-0009 | 2026-09-12 | SX-016 | VS-N01 | Ngô lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 47000 | 45733 | 38238 | -1267 | Đã nhập kho |
| NK-0010 | 2026-09-12 | SX-030 | VS-L01 | Lúa thuần | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 33000 | 31515 | 25159 | -1485 | Đã nhập kho |
| NK-0011 | 2026-09-13 | SX-002 | VS-H01 | Lúa lai | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 54000 | 53318 | 45182 | -682 | Đã nhập kho |
| NK-0012 | 2026-09-13 | SX-016 | VS-N01 | Ngô lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 11000 | 10733 | 8373 | -267 | Đã nhập kho |
| NK-0013 | 2026-09-14 | SX-030 | VS-L01 | Lúa thuần | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 27000 | 26702 | 21781 | -298 | Đã nhập kho |
| NK-0014 | 2026-09-14 | SX-014 | VS-H01 | Lúa lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 15000 | 14785 | 12129 | -215 | Đã nhập kho |
| NK-0015 | 2026-09-14 | SX-033 | VS-N02 | Ngô lai | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 21000 | 20677 | 16182 | -323 | Đã nhập kho |
| NK-0016 | 2026-09-15 | SX-010 | VS-L02 | Lúa thuần | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 51000 | 50477 | 41525 | -523 | Đã nhập kho |
| NK-0017 | 2026-09-15 | SX-033 | VS-N02 | Ngô lai | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 58000 | 55717 | 43579 | -2283 | Đã nhập kho |
| NK-0018 | 2026-09-15 | SX-014 | VS-H01 | Lúa lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 57000 | 54224 | 43150 | -2776 | Đã nhập kho |
| NK-0019 | 2026-09-15 | SX-037 | VS-L01 | Lúa thuần | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 19000 | 18185 | 14891 | -815 | Đã nhập kho |
| NK-0020 | 2026-09-16 | SX-012 | VS-L01 | Lúa thuần | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 30000 | 29393 | 24641 | -607 | Đã nhập kho |
| NK-0021 | 2026-09-16 | SX-002 | VS-H01 | Lúa lai | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 35000 | 34310 | 29177 | -690 | Đã nhập kho |
| NK-0022 | 2026-09-17 | SX-006 | VS-H01 | Lúa lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 40000 | 38696 | 32149 | -1304 | Đã nhập kho |
| NK-0023 | 2026-09-17 | SX-002 | VS-H01 | Lúa lai | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 44000 | 43406 | 35422 | -594 | Đã nhập kho |
| NK-0024 | 2026-09-17 | SX-016 | VS-N01 | Ngô lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 43000 | 42514 | 34546 | -486 | Đã nhập kho |
| NK-0025 | 2026-09-18 | SX-037 | VS-L01 | Lúa thuần | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 14000 | 13888 | 11165 | -112 | Đã nhập kho |
| NK-0026 | 2026-09-18 | SX-035 | VS-H01 | Lúa lai | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 58000 | 57923 | 49746 | -77 | Đã nhập kho |
| NK-0027 | 2026-09-19 | SX-006 | VS-H01 | Lúa lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 44000 | 42765 | 33633 | -1235 | Đã nhập kho |
| NK-0028 | 2026-09-19 | SX-016 | VS-N01 | Ngô lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 35000 | 33749 | 27044 | -1251 | Đã nhập kho |
| NK-0029 | 2026-09-19 | SX-035 | VS-H01 | Lúa lai | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 45000 | 43027 | 36797 | -1973 | Đã nhập kho |
| NK-0030 | 2026-09-20 | SX-025 | VS-H01 | Lúa lai | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 52000 | 49904 | 42194 | -2096 | Đã nhập kho |
| NK-0031 | 2026-09-20 | SX-012 | VS-L01 | Lúa thuần | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 39000 | 37301 | 30580 | -1699 | Đã nhập kho |
| NK-0032 | 2026-09-20 | SX-028 | VS-L01 | Lúa thuần | P.SX 5 | Tây Nguyên | SX3 | Khối Sản xuất | Kho Đắk Lắk | 35000 | 34295 | 29386 | -705 | Đã nhập kho |
| NK-0033 | 2026-09-20 | SX-006 | VS-H01 | Lúa lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 16000 | 15234 | 12780 | -766 | Đã nhập kho |
| NK-0034 | 2026-09-20 | SX-002 | VS-H01 | Lúa lai | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 36000 | 34256 | 28914 | -1744 | Đã nhập kho |
| NK-0035 | 2026-09-21 | SX-006 | VS-H01 | Lúa lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 20000 | 19040 | 15769 | -960 | Đã nhập kho |
| NK-0036 | 2026-09-21 | SX-012 | VS-L01 | Lúa thuần | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 25000 | 24445 | 20486 | -555 | Đã nhập kho |
| NK-0037 | 2026-09-21 | SX-035 | VS-H01 | Lúa lai | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 59000 | 56238 | 44928 | -2762 | Đã nhập kho |
| NK-0038 | 2026-09-21 | SX-018 | VS-L03 | Lúa thuần | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 49000 | 48143 | 38238 | -857 | Đã nhập kho |
| NK-0039 | 2026-09-22 | SX-035 | VS-H01 | Lúa lai | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 30000 | 28524 | 23830 | -1476 | Đã nhập kho |
| NK-0040 | 2026-09-22 | SX-016 | VS-N01 | Ngô lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 39000 | 38184 | 30666 | -816 | Đã nhập kho |
| NK-0041 | 2026-09-22 | SX-023 | VS-L03 | Lúa thuần | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 31000 | 30398 | 23965 | -602 | Đã nhập kho |
| NK-0042 | 2026-09-22 | SX-012 | VS-L01 | Lúa thuần | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 38000 | 37203 | 30690 | -797 | Đã nhập kho |
| NK-0043 | 2026-09-22 | SX-008 | VS-N01 | Ngô lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 17000 | 16759 | 13402 | -241 | Đã nhập kho |
| NK-0044 | 2026-09-23 | SX-008 | VS-N01 | Ngô lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 60000 | 57811 | 48553 | -2189 | Đã nhập kho |
| NK-0045 | 2026-09-23 | SX-002 | VS-H01 | Lúa lai | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 34000 | 33426 | 26889 | -574 | Đã nhập kho |
| NK-0046 | 2026-09-24 | SX-010 | VS-L02 | Lúa thuần | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 24000 | 23574 | 18659 | -426 | Đã nhập kho |
| NK-0047 | 2026-09-24 | SX-014 | VS-H01 | Lúa lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 59000 | 56209 | 45821 | -2791 | Đã nhập kho |
| NK-0048 | 2026-09-24 | SX-008 | VS-N01 | Ngô lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 41000 | 40045 | 32675 | -955 | Đã nhập kho |
| NK-0049 | 2026-09-24 | SX-012 | VS-L01 | Lúa thuần | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 26000 | 24953 | 19501 | -1047 | Đã nhập kho |
| NK-0050 | 2026-09-25 | SX-033 | VS-N02 | Ngô lai | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 42000 | 40978 | 32357 | -1022 | Đã nhập kho |
| NK-0051 | 2026-09-25 | SX-016 | VS-N01 | Ngô lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 11000 | 10926 | 8569 | -74 | Đã nhập kho |
| NK-0052 | 2026-09-25 | SX-025 | VS-H01 | Lúa lai | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 23000 | 22159 | 17788 | -841 | Đã nhập kho |
| NK-0053 | 2026-09-26 | SX-035 | VS-H01 | Lúa lai | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 34000 | 32463 | 25876 | -1537 | Đã nhập kho |
| NK-0054 | 2026-09-26 | SX-023 | VS-L03 | Lúa thuần | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 45000 | 44846 | 36485 | -154 | Đã nhập kho |
| NK-0055 | 2026-09-27 | SX-002 | VS-H01 | Lúa lai | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 55000 | 54313 | 44655 | -687 | Đã nhập kho |
| NK-0056 | 2026-09-27 | SX-030 | VS-L01 | Lúa thuần | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 56000 | 53360 | 44394 | -2640 | Đã nhập kho |
| NK-0057 | 2026-09-27 | SX-037 | VS-L01 | Lúa thuần | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 41000 | 39110 | 31162 | -1890 | Đã nhập kho |
| NK-0058 | 2026-09-27 | SX-004 | VS-L03 | Lúa thuần | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 56000 | 54010 | 43841 | -1990 | Đã nhập kho |
| NK-0059 | 2026-09-28 | SX-033 | VS-N02 | Ngô lai | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 47000 | 45560 | 38722 | -1440 | Đã nhập kho |
| NK-0060 | 2026-09-28 | SX-020 | VS-L01 | Lúa thuần | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 15000 | 14617 | 11440 | -383 | Đã nhập kho |
| NK-0061 | 2026-09-28 | SX-030 | VS-L01 | Lúa thuần | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 43000 | 41376 | 33908 | -1624 | Đã nhập kho |
| NK-0062 | 2026-09-28 | SX-028 | VS-L01 | Lúa thuần | P.SX 5 | Tây Nguyên | SX3 | Khối Sản xuất | Kho Đắk Lắk | 54000 | 51775 | 42707 | -2225 | Đã nhập kho |
| NK-0063 | 2026-09-28 | SX-035 | VS-H01 | Lúa lai | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 51000 | 48687 | 41322 | -2313 | Đã nhập kho |
| NK-0064 | 2026-09-29 | SX-014 | VS-H01 | Lúa lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 46000 | 45440 | 36053 | -560 | Đã nhập kho |
| NK-0065 | 2026-09-29 | SX-006 | VS-H01 | Lúa lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 36000 | 35632 | 29584 | -368 | Đã nhập kho |
| NK-0066 | 2026-09-29 | SX-023 | VS-L03 | Lúa thuần | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 45000 | 44092 | 37111 | -908 | Đã nhập kho |
| NK-0067 | 2026-09-29 | SX-004 | VS-L03 | Lúa thuần | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 53000 | 52329 | 41553 | -671 | Đã nhập kho |
| NK-0068 | 2026-09-30 | SX-002 | VS-H01 | Lúa lai | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 19000 | 18934 | 15613 | -66 | Đã nhập kho |
| NK-0069 | 2026-09-30 | SX-008 | VS-N01 | Ngô lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 17000 | 16339 | 13016 | -661 | Đã nhập kho |
| NK-0070 | 2026-09-30 | SX-018 | VS-L03 | Lúa thuần | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 37000 | 35667 | 30188 | -1333 | Đã nhập kho |
| NK-0071 | 2026-09-30 | SX-016 | VS-N01 | Ngô lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 50000 | 48991 | 40486 | -1009 | Đã nhập kho |
| NK-0072 | 2026-10-01 | SX-020 | VS-L01 | Lúa thuần | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 42000 | 41286 | 34856 | -714 | Đã nhập kho |
| NK-0073 | 2026-10-01 | SX-010 | VS-L02 | Lúa thuần | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 41000 | 38998 | 31723 | -2002 | Đã nhập kho |
| NK-0074 | 2026-10-02 | SX-006 | VS-H01 | Lúa lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 16000 | 15429 | 12685 | -571 | Đã nhập kho |
| NK-0075 | 2026-10-02 | SX-014 | VS-H01 | Lúa lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 34000 | 32322 | 26661 | -1678 | Đã nhập kho |
| NK-0076 | 2026-10-02 | SX-010 | VS-L02 | Lúa thuần | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 14000 | 13530 | 11508 | -470 | Đã nhập kho |
| NK-0077 | 2026-10-03 | SX-004 | VS-L03 | Lúa thuần | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 42000 | 41220 | 34825 | -780 | Đã nhập kho |
| NK-0078 | 2026-10-03 | SX-028 | VS-L01 | Lúa thuần | P.SX 5 | Tây Nguyên | SX3 | Khối Sản xuất | Kho Đắk Lắk | 18000 | 17553 | 14657 | -447 | Đã nhập kho |
| NK-0079 | 2026-10-03 | SX-023 | VS-L03 | Lúa thuần | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 51000 | 49630 | 41868 | -1370 | Đã nhập kho |
| NK-0080 | 2026-10-04 | SX-006 | VS-H01 | Lúa lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 48000 | 45801 | 36250 | -2199 | Đã nhập kho |
| NK-0081 | 2026-10-04 | SX-002 | VS-H01 | Lúa lai | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 55000 | 52358 | 41437 | -2642 | Đã nhập kho |
| NK-0082 | 2026-10-04 | SX-016 | VS-N01 | Ngô lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 57000 | 56246 | 47054 | -754 | Đã nhập kho |
| NK-0083 | 2026-10-04 | SX-025 | VS-H01 | Lúa lai | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 20000 | 19420 | 16421 | -580 | Đã nhập kho |
| NK-0084 | 2026-10-04 | SX-012 | VS-L01 | Lúa thuần | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 28000 | 27968 | 23848 | -32 | Đã nhập kho |
| NK-0085 | 2026-10-05 | SX-028 | VS-L01 | Lúa thuần | P.SX 5 | Tây Nguyên | SX3 | Khối Sản xuất | Kho Đắk Lắk | 44000 | 43922 | 37231 | -78 | Đã nhập kho |
| NK-0086 | 2026-10-05 | SX-020 | VS-L01 | Lúa thuần | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 50000 | 49520 | 40446 | -480 | Đã nhập kho |
| NK-0087 | 2026-10-05 | SX-037 | VS-L01 | Lúa thuần | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 42000 | 40420 | 33288 | -1580 | Đã nhập kho |
| NK-0088 | 2026-10-05 | SX-008 | VS-N01 | Ngô lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 59000 | 58486 | 48587 | -514 | Đã nhập kho |
| NK-0089 | 2026-10-06 | SX-035 | VS-H01 | Lúa lai | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 33000 | 32827 | 26254 | -173 | Đã nhập kho |
| NK-0090 | 2026-10-06 | SX-004 | VS-L03 | Lúa thuần | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 26000 | 25787 | 21784 | -213 | Đã nhập kho |
| NK-0091 | 2026-10-06 | SX-002 | VS-H01 | Lúa lai | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 22000 | 21538 | 18364 | -462 | Đã nhập kho |
| NK-0092 | 2026-10-06 | SX-033 | VS-N02 | Ngô lai | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 25000 | 24356 | 19347 | -644 | Đã nhập kho |
| NK-0093 | 2026-10-06 | SX-028 | VS-L01 | Lúa thuần | P.SX 5 | Tây Nguyên | SX3 | Khối Sản xuất | Kho Đắk Lắk | 55000 | 54046 | 42405 | -954 | Đã nhập kho |
| NK-0094 | 2026-10-07 | SX-004 | VS-L03 | Lúa thuần | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 38000 | 37299 | 30880 | -701 | Đã nhập kho |
| NK-0095 | 2026-10-07 | SX-010 | VS-L02 | Lúa thuần | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 21000 | 20773 | 16770 | -227 | Đã nhập kho |
| NK-0096 | 2026-10-08 | SX-025 | VS-H01 | Lúa lai | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 48000 | 46719 | 37096 | -1281 | Đã nhập kho |
| NK-0097 | 2026-10-08 | SX-006 | VS-H01 | Lúa lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 54000 | 53358 | 42600 | -642 | Đã nhập kho |
| NK-0098 | 2026-10-09 | SX-030 | VS-L01 | Lúa thuần | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 23000 | 22075 | 17276 | -925 | Đã nhập kho |
| NK-0099 | 2026-10-09 | SX-004 | VS-L03 | Lúa thuần | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 21000 | 19999 | 17034 | -1001 | Đã nhập kho |
| NK-0100 | 2026-10-09 | SX-023 | VS-L03 | Lúa thuần | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 11000 | 10589 | 8493 | -411 | Đã nhập kho |
| NK-0101 | 2026-10-09 | SX-014 | VS-H01 | Lúa lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 34000 | 32853 | 27496 | -1147 | Đã nhập kho |
| NK-0102 | 2026-10-10 | SX-030 | VS-L01 | Lúa thuần | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 57000 | 54318 | 46108 | -2682 | Đã nhập kho |
| NK-0103 | 2026-10-10 | SX-025 | VS-H01 | Lúa lai | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 18000 | 17117 | 14670 | -883 | Đã nhập kho |
| NK-0104 | 2026-10-10 | SX-008 | VS-N01 | Ngô lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 18000 | 17730 | 14052 | -270 | Đã nhập kho |
| NK-0105 | 2026-10-11 | SX-004 | VS-L03 | Lúa thuần | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 44000 | 43511 | 35634 | -489 | Đã nhập kho |
| NK-0106 | 2026-10-11 | SX-014 | VS-H01 | Lúa lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 36000 | 34848 | 28361 | -1152 | Đã nhập kho |
| NK-0107 | 2026-10-12 | SX-033 | VS-N02 | Ngô lai | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 10000 | 9753 | 7941 | -247 | Đã nhập kho |
| NK-0108 | 2026-10-12 | SX-037 | VS-L01 | Lúa thuần | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 43000 | 41084 | 34723 | -1916 | Đã nhập kho |
| NK-0109 | 2026-10-12 | SX-010 | VS-L02 | Lúa thuần | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 48000 | 47273 | 39886 | -727 | Đã nhập kho |
| NK-0110 | 2026-10-12 | SX-002 | VS-H01 | Lúa lai | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 11000 | 10801 | 9229 | -199 | Đã nhập kho |
| NK-0111 | 2026-10-12 | SX-014 | VS-H01 | Lúa lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 40000 | 38582 | 30591 | -1418 | Đã nhập kho |
| NK-0112 | 2026-10-13 | SX-037 | VS-L01 | Lúa thuần | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 58000 | 57549 | 45777 | -451 | Đã nhập kho |
| NK-0113 | 2026-10-13 | SX-035 | VS-H01 | Lúa lai | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 37000 | 36528 | 31073 | -472 | Đã nhập kho |
| NK-0114 | 2026-10-13 | SX-006 | VS-H01 | Lúa lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 37000 | 35393 | 29955 | -1607 | Đã nhập kho |
| NK-0115 | 2026-10-13 | SX-002 | VS-H01 | Lúa lai | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 15000 | 14713 | 12538 | -287 | Đã nhập kho |
| NK-0116 | 2026-10-13 | SX-033 | VS-N02 | Ngô lai | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 15000 | 14312 | 12110 | -688 | Đã nhập kho |
| NK-0117 | 2026-10-14 | SX-018 | VS-L03 | Lúa thuần | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 47000 | 46192 | 38571 | -808 | Đã nhập kho |
| NK-0118 | 2026-10-14 | SX-025 | VS-H01 | Lúa lai | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 31000 | 29779 | 0 | -1221 | Đã chuyển lò sấy |
| NK-0119 | 2026-10-15 | SX-020 | VS-L01 | Lúa thuần | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 41000 | 39800 | 0 | -1200 | Đã chuyển lò sấy |
| NK-0120 | 2026-10-15 | SX-008 | VS-N01 | Ngô lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 40000 | 38868 | 31850 | -1132 | Đã nhập kho |
| NK-0121 | 2026-10-15 | SX-025 | VS-H01 | Lúa lai | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 37000 | 36423 | 0 | -577 | Đã chuyển lò sấy |
| NK-0122 | 2026-10-15 | SX-033 | VS-N02 | Ngô lai | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 17000 | 16266 | 13376 | -734 | Đã nhập kho |
| NK-0123 | 2026-10-16 | SX-025 | VS-H01 | Lúa lai | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 35000 | 34816 | 28899 | -184 | Đã nhập kho |
| NK-0124 | 2026-10-16 | SX-008 | VS-N01 | Ngô lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 36000 | 35009 | 27839 | -991 | Đã nhập kho |
| NK-0125 | 2026-10-16 | SX-033 | VS-N02 | Ngô lai | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 42000 | 40111 | 32002 | -1889 | Đã nhập kho |
| NK-0126 | 2026-10-16 | SX-035 | VS-H01 | Lúa lai | P.SX 7 | Đồng bằng sông Cửu Long | SX3 | Khối Sản xuất | Kho Cần Thơ | 21000 | 20527 | 0 | -473 | Đã chuyển lò sấy |
| NK-0127 | 2026-10-17 | SX-014 | VS-H01 | Lúa lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 20000 | 19530 | 0 | -470 | Đã chuyển lò sấy |
| NK-0128 | 2026-10-17 | SX-018 | VS-L03 | Lúa thuần | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 31000 | 29794 | 24121 | -1206 | Đã nhập kho |
| NK-0129 | 2026-10-18 | SX-020 | VS-L01 | Lúa thuần | P.SX 4 | Bắc Trung Bộ | SX4 | Khối Sản xuất | Kho Nghệ An | 33000 | 0 | 0 | 0 | Đang về kho |
| NK-0130 | 2026-10-18 | SX-033 | VS-N02 | Ngô lai | P.SX 6 | Đồng bằng sông Cửu Long | SX4 | Khối Sản xuất | Kho Cần Thơ | 38000 | 0 | 0 | 0 | Đang về kho |
| NK-0131 | 2026-10-18 | SX-002 | VS-H01 | Lúa lai | P.SX 1 | Đồng bằng sông Hồng | SX1 | Khối Sản xuất | Kho Thái Bình | 54000 | 0 | 0 | 0 | Đang về kho |
| NK-0132 | 2026-10-19 | SX-016 | VS-N01 | Ngô lai | P.SX 3 | Bắc Trung Bộ | SX2 | Khối Sản xuất | Kho Nghệ An | 19000 | 0 | 0 | 0 | Đang về kho |
| NK-0133 | 2026-10-19 | SX-008 | VS-N01 | Ngô lai | P.SX 2 | Đồng bằng sông Hồng | SX2 | Khối Sản xuất | Kho Thái Bình | 32000 | 0 | 0 | 0 | Đang về kho |

## 11. Đơn đặt hàng (BC8)
<a id="11-orders"></a>

- Tệp: `dashboard/data/orders.json` · 60 dòng
- Nguồn dự kiến: Excel → Workflow thu mua
- Dùng ở tab: Đơn đặt hàng

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `order_id` | Mã đơn |
| `doc` | Công văn |
| `order_date` | Ngày đặt |
| `variety` | Mặt hàng |
| `crop` | Loại |
| `grade` | Cấp giống |
| `pack` | Quy cách |
| `qty_kg` | SL đặt (kg) |
| `delivered_kg` | Đã giao (kg) |
| `remaining_kg` | Chưa giao (kg) |
| `supplier` | ĐV cung cấp |
| `buyer` | ĐV đặt hàng |
| `warehouse` | Kho nhập |
| `due_date` | Hạn giao |
| `owner` | Phụ trách |
| `dept` | Phòng ban |
| `price_vnd_kg` | Đơn giá (đ/kg) |
| `status` | Trạng thái |

**Dữ liệu**

| order_id | doc | order_date | variety | crop | grade | pack | qty_kg | delivered_kg | remaining_kg | supplier | buyer | warehouse | due_date | owner | dept | price_vnd_kg | status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| DH-2601 | CV 101/26 | 2026-10-11 | VS-L02 | Lúa thuần | NC | Bao 40 kg | 3000 | 1500 | 1500 | Công ty con B | Chi nhánh Miền Trung | Kho Cần Thơ | 2027-01-01 | SX3 | Khối Sản xuất | 25000 | Đang giao |
| DH-2602 | CV 102/26 | 2026-08-10 | VS-L03 | Lúa thuần | F1 | Bao 40 kg | 4000 | 4000 | 0 | Công ty con C | Văn phòng công ty | Kho Đắk Lắk | 2026-09-19 | SX3 | Khối Sản xuất | 42000 | Hoàn thành |
| DH-2603 | CV 103/26 | 2026-08-04 | VS-L03 | Lúa thuần | F1 | Bao 40 kg | 4000 | 4000 | 0 | Công ty con B | Chi nhánh Miền Nam | Kho Hà Nam | 2026-09-15 | SX3 | Khối Sản xuất | 25000 | Hoàn thành |
| DH-2604 | CV 104/26 | 2026-08-04 | VS-N02 | Ngô lai | F1 | Bao 40 kg | 500 | 500 | 0 | Công ty con A | Chi nhánh Miền Trung | Kho Hà Nam | 2026-10-01 | SX3 | Khối Sản xuất | 18000 | Hoàn thành |
| DH-2605 | CV 105/26 | 2026-09-04 | VS-L03 | Lúa thuần | F1 | Bao 40 kg | 3000 | 3000 | 0 | Công ty con B | Chi nhánh Miền Trung | Kho Đắk Lắk | 2026-09-25 | SX3 | Khối Sản xuất | 65000 | Hoàn thành |
| DH-2606 | CV 106/26 | 2026-10-14 | VS-N01 | Ngô lai | NC | Bao 40 kg | 3000 | 0 | 3000 | Công ty con A | Chi nhánh Miền Nam | Kho Nghệ An | 2026-12-14 | SX3 | Khối Sản xuất | 42000 | Chưa giao |
| DH-2607 | CV 107/26 | 2026-06-13 | VS-L02 | Lúa thuần | F1 | Bao 40 kg | 2000 | 2000 | 0 | Công ty con C | Chi nhánh Miền Nam | Kho Thái Bình | 2026-09-11 | SX3 | Khối Sản xuất | 25000 | Hoàn thành |
| DH-2608 | CV 108/26 | 2026-09-18 | VS-N01 | Ngô lai | XN | Bao 40 kg | 800 | 800 | 0 | Công ty con B | Chi nhánh Miền Nam | Kho Thái Bình | 2026-10-31 | SX3 | Khối Sản xuất | 65000 | Hoàn thành |
| DH-2609 | CV 109/26 | 2026-07-19 | VS-H01 | Lúa lai | XN | Bao 40 kg | 4000 | 4000 | 0 | Công ty con B | Văn phòng công ty | Kho Thái Bình | 2026-10-02 | SX3 | Khối Sản xuất | 42000 | Hoàn thành |
| DH-2610 | CV 110/26 | 2026-06-04 | VS-H01 | Lúa lai | NC | Bao 40 kg | 4000 | 4000 | 0 | Công ty con A | Chi nhánh Miền Trung | Kho Đắk Lắk | 2026-08-05 | SX3 | Khối Sản xuất | 65000 | Hoàn thành |
| DH-2611 | CV 111/26 | 2026-07-04 | VS-H01 | Lúa lai | XN | Bao 40 kg | 500 | 500 | 0 | Công ty con B | Chi nhánh Miền Trung | Kho Thái Bình | 2026-08-01 | SX3 | Khối Sản xuất | 42000 | Hoàn thành |
| DH-2612 | CV 112/26 | 2026-09-23 | VS-L02 | Lúa thuần | F1 | Bao 40 kg | 6000 | 6000 | 0 | Công ty con A | Chi nhánh Miền Nam | Kho Hà Nam | 2026-10-21 | SX3 | Khối Sản xuất | 25000 | Hoàn thành |
| DH-2613 | CV 113/26 | 2026-08-06 | VS-L02 | Lúa thuần | F1 | Bao 40 kg | 6000 | 0 | 6000 | Công ty con C | Chi nhánh Miền Nam | Kho Cần Thơ | 2026-09-04 | SX3 | Khối Sản xuất | 65000 | Chưa giao |
| DH-2614 | CV 114/26 | 2026-08-08 | VS-N02 | Ngô lai | NC | Bao 40 kg | 800 | 240 | 560 | Công ty con A | Văn phòng công ty | Kho Hà Nam | 2026-10-03 | SX3 | Khối Sản xuất | 18000 | Đang giao |
| DH-2615 | CV 115/26 | 2026-07-10 | VS-H01 | Lúa lai | F1 | Bao 40 kg | 1200 | 1200 | 0 | Công ty con B | Văn phòng công ty | Kho Thái Bình | 2026-08-19 | SX3 | Khối Sản xuất | 42000 | Hoàn thành |
| DH-2616 | CV 116/26 | 2026-09-22 | VS-L03 | Lúa thuần | F1 | Bao 40 kg | 4000 | 0 | 4000 | Công ty con C | Chi nhánh Miền Nam | Kho Đắk Lắk | 2026-11-12 | SX3 | Khối Sản xuất | 42000 | Chưa giao |
| DH-2617 | CV 117/26 | 2026-08-14 | VS-N01 | Ngô lai | NC | Bao 40 kg | 1200 | 1200 | 0 | Công ty con B | Chi nhánh Miền Trung | Kho Thái Bình | 2026-10-09 | SX3 | Khối Sản xuất | 65000 | Hoàn thành |
| DH-2618 | CV 118/26 | 2026-08-21 | VS-L01 | Lúa thuần | F1 | Bao 40 kg | 800 | 240 | 560 | Công ty con A | Chi nhánh Miền Trung | Kho Đắk Lắk | 2026-11-14 | SX3 | Khối Sản xuất | 25000 | Đang giao |
| DH-2619 | CV 119/26 | 2026-09-30 | VS-L03 | Lúa thuần | F1 | Bao 40 kg | 500 | 350 | 150 | Công ty con B | Văn phòng công ty | Kho Đắk Lắk | 2026-12-14 | SX3 | Khối Sản xuất | 18000 | Đang giao |
| DH-2620 | CV 120/26 | 2026-09-08 | VS-N02 | Ngô lai | XN | Bao 40 kg | 2000 | 0 | 2000 | Công ty con B | Chi nhánh Miền Trung | Kho Đắk Lắk | 2026-10-30 | SX3 | Khối Sản xuất | 18000 | Chưa giao |
| DH-2621 | CV 121/26 | 2026-09-07 | VS-L01 | Lúa thuần | F1 | Bao 40 kg | 500 | 150 | 350 | Công ty con A | Chi nhánh Miền Trung | Kho Nghệ An | 2026-11-10 | SX3 | Khối Sản xuất | 18000 | Đang giao |
| DH-2622 | CV 122/26 | 2026-10-11 | VS-H01 | Lúa lai | NC | Bao 40 kg | 2000 | 0 | 2000 | Công ty con B | Chi nhánh Miền Nam | Kho Nghệ An | 2026-11-24 | SX3 | Khối Sản xuất | 18000 | Chưa giao |
| DH-2623 | CV 123/26 | 2026-09-27 | VS-L01 | Lúa thuần | NC | Bao 40 kg | 500 | 250 | 250 | Công ty con C | Chi nhánh Miền Nam | Kho Thái Bình | 2026-11-26 | SX3 | Khối Sản xuất | 42000 | Đang giao |
| DH-2624 | CV 124/26 | 2026-09-16 | VS-N01 | Ngô lai | F1 | Bao 40 kg | 2000 | 600 | 1400 | Công ty con B | Văn phòng công ty | Kho Đắk Lắk | 2026-11-19 | SX3 | Khối Sản xuất | 18000 | Đang giao |
| DH-2625 | CV 125/26 | 2026-09-15 | VS-N01 | Ngô lai | NC | Bao 40 kg | 4000 | 4000 | 0 | Công ty con B | Văn phòng công ty | Kho Đắk Lắk | 2026-10-06 | SX3 | Khối Sản xuất | 65000 | Hoàn thành |
| DH-2626 | CV 126/26 | 2026-07-20 | VS-N01 | Ngô lai | XN | Bao 40 kg | 6000 | 6000 | 0 | Công ty con A | Chi nhánh Miền Trung | Kho Cần Thơ | 2026-08-29 | SX3 | Khối Sản xuất | 65000 | Hoàn thành |
| DH-2627 | CV 127/26 | 2026-10-14 | VS-L02 | Lúa thuần | XN | Bao 40 kg | 800 | 800 | 0 | Công ty con A | Văn phòng công ty | Kho Hà Nam | 2026-12-15 | SX3 | Khối Sản xuất | 25000 | Hoàn thành |
| DH-2628 | CV 128/26 | 2026-08-22 | VS-H01 | Lúa lai | F1 | Bao 40 kg | 6000 | 6000 | 0 | Công ty con C | Văn phòng công ty | Kho Cần Thơ | 2026-09-13 | SX3 | Khối Sản xuất | 42000 | Hoàn thành |
| DH-2629 | CV 129/26 | 2026-10-03 | VS-L03 | Lúa thuần | F1 | Bao 40 kg | 500 | 150 | 350 | Công ty con B | Chi nhánh Miền Trung | Kho Hà Nam | 2026-10-31 | SX3 | Khối Sản xuất | 42000 | Đang giao |
| DH-2630 | CV 130/26 | 2026-09-29 | VS-H01 | Lúa lai | NC | Bao 40 kg | 6000 | 0 | 6000 | Công ty con B | Chi nhánh Miền Trung | Kho Thái Bình | 2026-12-24 | SX3 | Khối Sản xuất | 42000 | Chưa giao |
| DH-2631 | CV 131/26 | 2026-06-22 | VS-H01 | Lúa lai | F1 | Bao 40 kg | 500 | 500 | 0 | Công ty con B | Chi nhánh Miền Nam | Kho Hà Nam | 2026-07-14 | SX3 | Khối Sản xuất | 25000 | Hoàn thành |
| DH-2632 | CV 132/26 | 2026-08-04 | VS-H01 | Lúa lai | NC | Bao 40 kg | 4000 | 4000 | 0 | Công ty con C | Chi nhánh Miền Nam | Kho Hà Nam | 2026-08-29 | SX3 | Khối Sản xuất | 42000 | Hoàn thành |
| DH-2633 | CV 133/26 | 2026-08-08 | VS-N01 | Ngô lai | F1 | Bao 40 kg | 1200 | 1200 | 0 | Công ty con A | Chi nhánh Miền Nam | Kho Thái Bình | 2026-09-15 | SX3 | Khối Sản xuất | 65000 | Hoàn thành |
| DH-2634 | CV 134/26 | 2026-07-03 | VS-L03 | Lúa thuần | NC | Bao 40 kg | 500 | 350 | 150 | Công ty con A | Văn phòng công ty | Kho Nghệ An | 2026-09-03 | SX3 | Khối Sản xuất | 18000 | Đang giao |
| DH-2635 | CV 135/26 | 2026-06-30 | VS-L03 | Lúa thuần | XN | Bao 40 kg | 3000 | 3000 | 0 | Công ty con A | Văn phòng công ty | Kho Đắk Lắk | 2026-08-22 | SX3 | Khối Sản xuất | 18000 | Hoàn thành |
| DH-2636 | CV 136/26 | 2026-08-16 | VS-L02 | Lúa thuần | NC | Bao 40 kg | 1200 | 1200 | 0 | Công ty con A | Chi nhánh Miền Nam | Kho Cần Thơ | 2026-09-10 | SX3 | Khối Sản xuất | 65000 | Hoàn thành |
| DH-2637 | CV 137/26 | 2026-09-29 | VS-N02 | Ngô lai | F1 | Bao 40 kg | 500 | 350 | 150 | Công ty con B | Văn phòng công ty | Kho Hà Nam | 2026-11-06 | SX3 | Khối Sản xuất | 25000 | Đang giao |
| DH-2638 | CV 138/26 | 2026-08-26 | VS-N01 | Ngô lai | NC | Bao 40 kg | 4000 | 4000 | 0 | Công ty con B | Chi nhánh Miền Trung | Kho Hà Nam | 2026-10-02 | SX3 | Khối Sản xuất | 18000 | Hoàn thành |
| DH-2639 | CV 139/26 | 2026-06-15 | VS-L02 | Lúa thuần | NC | Bao 40 kg | 500 | 500 | 0 | Công ty con B | Chi nhánh Miền Trung | Kho Thái Bình | 2026-08-28 | SX3 | Khối Sản xuất | 18000 | Hoàn thành |
| DH-2640 | CV 140/26 | 2026-06-29 | VS-H01 | Lúa lai | NC | Bao 40 kg | 500 | 500 | 0 | Công ty con A | Chi nhánh Miền Trung | Kho Hà Nam | 2026-09-15 | SX3 | Khối Sản xuất | 65000 | Hoàn thành |
| DH-2641 | CV 141/26 | 2026-10-14 | VS-L03 | Lúa thuần | F1 | Bao 40 kg | 6000 | 4200 | 1800 | Công ty con B | Văn phòng công ty | Kho Hà Nam | 2026-12-02 | SX3 | Khối Sản xuất | 18000 | Đang giao |
| DH-2642 | CV 142/26 | 2026-08-30 | VS-H01 | Lúa lai | F1 | Bao 40 kg | 4000 | 0 | 4000 | Công ty con B | Văn phòng công ty | Kho Thái Bình | 2026-10-16 | SX3 | Khối Sản xuất | 25000 | Chưa giao |
| DH-2643 | CV 143/26 | 2026-08-09 | VS-N01 | Ngô lai | NC | Bao 40 kg | 500 | 500 | 0 | Công ty con A | Văn phòng công ty | Kho Hà Nam | 2026-09-03 | SX3 | Khối Sản xuất | 25000 | Hoàn thành |
| DH-2644 | CV 144/26 | 2026-09-18 | VS-N02 | Ngô lai | XN | Bao 40 kg | 1200 | 840 | 360 | Công ty con A | Chi nhánh Miền Trung | Kho Thái Bình | 2026-12-15 | SX3 | Khối Sản xuất | 25000 | Đang giao |
| DH-2645 | CV 145/26 | 2026-08-05 | VS-H01 | Lúa lai | NC | Bao 40 kg | 3000 | 3000 | 0 | Công ty con C | Chi nhánh Miền Nam | Kho Thái Bình | 2026-11-01 | SX3 | Khối Sản xuất | 18000 | Hoàn thành |
| DH-2646 | CV 146/26 | 2026-10-05 | VS-L02 | Lúa thuần | NC | Bao 40 kg | 4000 | 2000 | 2000 | Công ty con C | Văn phòng công ty | Kho Đắk Lắk | 2026-12-30 | SX3 | Khối Sản xuất | 65000 | Đang giao |
| DH-2647 | CV 147/26 | 2026-06-28 | VS-L01 | Lúa thuần | NC | Bao 40 kg | 500 | 500 | 0 | Công ty con A | Chi nhánh Miền Trung | Kho Nghệ An | 2026-09-01 | SX3 | Khối Sản xuất | 42000 | Hoàn thành |
| DH-2648 | CV 148/26 | 2026-07-09 | VS-L01 | Lúa thuần | NC | Bao 40 kg | 800 | 800 | 0 | Công ty con A | Chi nhánh Miền Nam | Kho Thái Bình | 2026-09-09 | SX3 | Khối Sản xuất | 25000 | Hoàn thành |
| DH-2649 | CV 149/26 | 2026-09-02 | VS-L02 | Lúa thuần | F1 | Bao 40 kg | 500 | 500 | 0 | Công ty con C | Văn phòng công ty | Kho Hà Nam | 2026-10-15 | SX3 | Khối Sản xuất | 25000 | Hoàn thành |
| DH-2650 | CV 150/26 | 2026-08-24 | VS-L02 | Lúa thuần | XN | Bao 40 kg | 2000 | 2000 | 0 | Công ty con A | Chi nhánh Miền Trung | Kho Hà Nam | 2026-10-05 | SX3 | Khối Sản xuất | 65000 | Hoàn thành |
| DH-2651 | CV 151/26 | 2026-07-26 | VS-N02 | Ngô lai | XN | Bao 40 kg | 500 | 500 | 0 | Công ty con B | Chi nhánh Miền Trung | Kho Nghệ An | 2026-10-01 | SX3 | Khối Sản xuất | 25000 | Hoàn thành |
| DH-2652 | CV 152/26 | 2026-08-24 | VS-L03 | Lúa thuần | NC | Bao 40 kg | 6000 | 6000 | 0 | Công ty con B | Văn phòng công ty | Kho Thái Bình | 2026-10-26 | SX3 | Khối Sản xuất | 25000 | Hoàn thành |
| DH-2653 | CV 153/26 | 2026-09-04 | VS-N01 | Ngô lai | F1 | Bao 40 kg | 4000 | 4000 | 0 | Công ty con C | Chi nhánh Miền Trung | Kho Hà Nam | 2026-10-16 | SX3 | Khối Sản xuất | 65000 | Hoàn thành |
| DH-2654 | CV 154/26 | 2026-10-06 | VS-N02 | Ngô lai | NC | Bao 40 kg | 1200 | 1200 | 0 | Công ty con A | Chi nhánh Miền Trung | Kho Cần Thơ | 2026-12-15 | SX3 | Khối Sản xuất | 65000 | Hoàn thành |
| DH-2655 | CV 155/26 | 2026-06-18 | VS-N02 | Ngô lai | XN | Bao 40 kg | 4000 | 4000 | 0 | Công ty con A | Chi nhánh Miền Nam | Kho Hà Nam | 2026-09-16 | SX3 | Khối Sản xuất | 42000 | Hoàn thành |
| DH-2656 | CV 156/26 | 2026-07-12 | VS-L03 | Lúa thuần | XN | Bao 40 kg | 3000 | 0 | 3000 | Công ty con C | Chi nhánh Miền Nam | Kho Cần Thơ | 2026-09-04 | SX3 | Khối Sản xuất | 65000 | Chưa giao |
| DH-2657 | CV 157/26 | 2026-06-19 | VS-L02 | Lúa thuần | NC | Bao 40 kg | 6000 | 6000 | 0 | Công ty con C | Văn phòng công ty | Kho Cần Thơ | 2026-08-06 | SX3 | Khối Sản xuất | 18000 | Hoàn thành |
| DH-2658 | CV 158/26 | 2026-10-05 | VS-H01 | Lúa lai | XN | Bao 40 kg | 3000 | 0 | 3000 | Công ty con B | Văn phòng công ty | Kho Cần Thơ | 2026-12-01 | SX3 | Khối Sản xuất | 18000 | Chưa giao |
| DH-2659 | CV 159/26 | 2026-09-14 | VS-L03 | Lúa thuần | NC | Bao 40 kg | 2000 | 1400 | 600 | Công ty con B | Chi nhánh Miền Trung | Kho Thái Bình | 2026-12-04 | SX3 | Khối Sản xuất | 65000 | Đang giao |
| DH-2660 | CV 160/26 | 2026-10-10 | VS-N01 | Ngô lai | XN | Bao 40 kg | 3000 | 3000 | 0 | Công ty con A | Chi nhánh Miền Nam | Kho Đắk Lắk | 2026-12-04 | SX3 | Khối Sản xuất | 42000 | Hoàn thành |

## 12. Tài chính theo tháng
<a id="12-finance"></a>

- Tệp: `dashboard/data/finance.json` · 10 dòng
- Nguồn dự kiến: Fast (KQKD, lưu chuyển tiền tệ), Excel (tiền vay, tiền gửi)
- Dùng ở tab: Tài chính

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `month` | Tháng |
| `dept` | Phòng ban |
| `revenue_bn` | Doanh thu (tỷ) |
| `revenue_plan_bn` | Kế hoạch doanh thu (tỷ) |
| `cogs_bn` | Giá vốn (tỷ) |
| `gross_profit_bn` | Lãi gộp (tỷ) |
| `opex_bn` | Chi phí hoạt động (tỷ) |
| `profit_bt_bn` | LN trước thuế (tỷ) |
| `cash_in_bn` | Tiền thu (tỷ) |
| `cash_out_bn` | Tiền chi (tỷ) |
| `loan_balance_bn` | Dư nợ vay (tỷ) |
| `deposit_balance_bn` | Tiền gửi (tỷ) |

**Dữ liệu**

| month | dept | revenue_bn | revenue_plan_bn | cogs_bn | gross_profit_bn | opex_bn | profit_bt_bn | cash_in_bn | cash_out_bn | loan_balance_bn | deposit_balance_bn |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 2026-01 | Tài chính – Kế toán | 348.6 | 349.2 | 253.5 | 95.1 | 39.6 | 55.5 | 314.1 | 284.0 | 398.6 | 189.0 |
| 2026-02 | Tài chính – Kế toán | 311.0 | 314.3 | 233.1 | 77.9 | 37.6 | 40.3 | 306.7 | 274.3 | 370.9 | 198.8 |
| 2026-03 | Tài chính – Kế toán | 163.4 | 163.0 | 115.0 | 48.4 | 19.2 | 29.2 | 149.2 | 133.0 | 375.1 | 203.6 |
| 2026-04 | Tài chính – Kế toán | 137.6 | 139.6 | 100.4 | 37.2 | 15.5 | 21.7 | 139.6 | 105.3 | 399.1 | 213.9 |
| 2026-05 | Tài chính – Kế toán | 198.9 | 198.0 | 140.5 | 58.4 | 22.4 | 36.1 | 191.3 | 162.3 | 385.5 | 222.6 |
| 2026-06 | Tài chính – Kế toán | 285.4 | 290.9 | 212.8 | 72.6 | 34.6 | 38.0 | 297.2 | 262.2 | 390.5 | 233.1 |
| 2026-07 | Tài chính – Kế toán | 307.5 | 302.5 | 219.4 | 88.1 | 33.9 | 54.3 | 318.9 | 248.4 | 355.6 | 254.3 |
| 2026-08 | Tài chính – Kế toán | 194.6 | 209.4 | 142.1 | 52.5 | 22.7 | 29.8 | 190.1 | 163.6 | 343.4 | 262.2 |
| 2026-09 | Tài chính – Kế toán | 159.9 | 174.6 | 119.7 | 40.2 | 19.5 | 20.7 | 144.6 | 142.8 | 310.9 | 262.8 |
| 2026-10 | Tài chính – Kế toán | 156.2 | 267.6 | 113.5 | 42.7 | 19.6 | 23.2 | 152.6 | 127.1 | 293.1 | 270.4 |

## 13. Chất lượng lô giống (BC10)
<a id="13-quality"></a>

- Tệp: `dashboard/data/quality.json` · 90 dòng
- Nguồn dự kiến: Excel (phiếu kiểm nghiệm)
- Dùng ở tab: Chất lượng

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `lot_id` | Mã lô |
| `test_date` | Ngày kiểm nghiệm |
| `variety` | Giống |
| `crop` | Loại |
| `grade` | Cấp giống |
| `unit` | Đơn vị SX |
| `region` | Vùng |
| `owner` | Phụ trách QLCL |
| `dept` | Phòng ban |
| `storage` | Loại kho |
| `warehouse` | Kho |
| `kg` | Khối lượng (kg) |
| `germination_pct` | Nảy mầm % |
| `moisture_pct` | Độ ẩm % |
| `impurity_pct` | Tạp chất % |
| `result` | Kết luận |

**Dữ liệu**

| lot_id | test_date | variety | crop | grade | unit | region | owner | dept | storage | warehouse | kg | germination_pct | moisture_pct | impurity_pct | result |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| LG-2608-001 | 2026-08-18 | VS-H01 | Lúa lai | XN | P.SX 4 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho lạnh | Kho Nghệ An | 20000 | 88.4 | 12.6 | 0.52 | Đạt |
| LG-2610-002 | 2026-10-08 | VS-L01 | Lúa thuần | F1 | P.SX 5 | Tây Nguyên | QL1 | Khối Sản xuất | Kho mát | Kho Đắk Lắk | 9000 | 91.6 | 12.2 | 0.73 | Đạt |
| LG-2608-003 | 2026-08-19 | VS-L01 | Lúa thuần | NC | P.SX 4 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho lạnh | Kho Nghệ An | 23000 | 97.3 | 13.3 | 1.07 | Không đạt |
| LG-2609-004 | 2026-09-18 | VS-N01 | Ngô lai | NC | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho lạnh | Kho Thái Bình | 18000 | 90.2 | 12.7 | 0.86 | Đạt |
| LG-2610-005 | 2026-10-03 | VS-H01 | Lúa lai | NC | P.SX 1 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho thường | Kho Thái Bình | 15000 | 91.0 | 12.5 | 0.55 | Đạt |
| LG-2608-006 | 2026-08-24 | VS-H01 | Lúa lai | NC | P.SX 7 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho thường | Kho Cần Thơ | 11000 | 93.1 | 14.0 | 0.21 | Không đạt |
| LG-2609-007 | 2026-09-12 | VS-H01 | Lúa lai | XN | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho lạnh | Kho Nghệ An | 5000 | 96.0 | 11.6 | 0.28 | Đạt |
| LG-2609-008 | 2026-09-24 | VS-N01 | Ngô lai | NC | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho mát | Kho Nghệ An | 22000 | 96.2 | 12.8 | 0.34 | Đạt |
| LG-2609-009 | 2026-09-28 | VS-N01 | Ngô lai | XN | P.SX 6 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho mát | Kho Cần Thơ | 15000 | 93.5 | 12.6 | 0.96 | Đạt |
| LG-2608-010 | 2026-08-05 | VS-N01 | Ngô lai | F1 | P.SX 6 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho lạnh | Kho Cần Thơ | 4000 | 87.7 | 13.7 | 0.92 | Không đạt |
| LG-2610-011 | 2026-10-18 | VS-L01 | Lúa thuần | NC | P.SX 6 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho thường | Kho Cần Thơ | 24000 | 86.1 | 12.6 | 0.59 | Đạt |
| LG-2608-012 | 2026-08-13 | VS-H01 | Lúa lai | F1 | P.SX 1 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho lạnh | Kho Thái Bình | 8000 | 96.0 | 12.2 | 0.29 | Đạt |
| LG-2610-013 | 2026-10-12 | VS-L01 | Lúa thuần | XN | P.SX 5 | Tây Nguyên | QL1 | Khối Sản xuất | Kho mát | Kho Đắk Lắk | 21000 | 93.6 | 12.6 | 0.09 | Đạt |
| LG-2608-014 | 2026-08-15 | VS-L01 | Lúa thuần | F1 | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho lạnh | Kho Thái Bình | 7000 | 96.6 | 13.5 | 0.83 | Đạt |
| LG-2610-015 | 2026-10-19 | VS-N02 | Ngô lai | XN | P.SX 6 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho mát | Kho Cần Thơ | 13000 | 84.2 | 12.7 | 0.52 | Không đạt |
| LG-2609-016 | 2026-09-23 | VS-L01 | Lúa thuần | XN | P.SX 7 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho thường | Kho Cần Thơ | 17000 | 93.7 | 12.1 | 0.48 | Đạt |
| LG-2609-017 | 2026-09-22 | VS-N02 | Ngô lai | NC | P.SX 6 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho lạnh | Kho Cần Thơ | 13000 | 91.5 | 12.7 | 0.4 | Đạt |
| LG-2610-018 | 2026-10-16 | VS-L03 | Lúa thuần | XN | P.SX 1 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho thường | Kho Thái Bình | 16000 | 88.0 | 12.8 | 0.25 | Đạt |
| LG-2608-019 | 2026-08-14 | VS-L01 | Lúa thuần | F1 | P.SX 4 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho mát | Kho Nghệ An | 18000 | 84.2 | 13.5 | 0.76 | Không đạt |
| LG-2609-020 | 2026-09-21 | VS-L01 | Lúa thuần | XN | P.SX 5 | Tây Nguyên | QL1 | Khối Sản xuất | Kho lạnh | Kho Đắk Lắk | 20000 | 85.6 | 11.8 | 0.31 | Đạt |
| LG-2609-021 | 2026-09-23 | VS-N02 | Ngô lai | F1 | P.SX 4 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho thường | Kho Nghệ An | 18000 | 85.2 | 12.9 | 0.27 | Đạt |
| LG-2610-022 | 2026-10-07 | VS-H01 | Lúa lai | XN | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho mát | Kho Thái Bình | 22000 | 93.5 | 12.9 | 0.5 | Đạt |
| LG-2608-023 | 2026-08-22 | VS-L01 | Lúa thuần | NC | P.SX 4 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho thường | Kho Nghệ An | 25000 | 93.7 | 12.3 | 0.96 | Đạt |
| LG-2609-024 | 2026-09-28 | VS-L01 | Lúa thuần | F1 | P.SX 5 | Tây Nguyên | QL1 | Khối Sản xuất | Kho lạnh | Kho Đắk Lắk | 4000 | 89.0 | 13.9 | 0.8 | Không đạt |
| LG-2609-025 | 2026-09-13 | VS-N01 | Ngô lai | F1 | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho lạnh | Kho Thái Bình | 19000 | 90.1 | 12.3 | 0.62 | Đạt |
| LG-2610-026 | 2026-10-07 | VS-L01 | Lúa thuần | NC | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho lạnh | Kho Thái Bình | 23000 | 92.5 | 11.8 | 0.19 | Đạt |
| LG-2610-027 | 2026-10-06 | VS-H01 | Lúa lai | NC | P.SX 1 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho lạnh | Kho Thái Bình | 23000 | 93.9 | 13.4 | 0.66 | Đạt |
| LG-2609-028 | 2026-09-01 | VS-H01 | Lúa lai | NC | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho thường | Kho Nghệ An | 24000 | 92.6 | 12.4 | 0.44 | Đạt |
| LG-2609-029 | 2026-09-03 | VS-H01 | Lúa lai | XN | P.SX 1 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho thường | Kho Thái Bình | 5000 | 83.3 | 12.6 | 0.72 | Không đạt |
| LG-2610-030 | 2026-10-06 | VS-L03 | Lúa thuần | F1 | P.SX 4 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho lạnh | Kho Nghệ An | 13000 | 90.4 | 12.5 | 0.76 | Đạt |
| LG-2609-031 | 2026-09-11 | VS-H01 | Lúa lai | F1 | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho lạnh | Kho Nghệ An | 23000 | 88.5 | 13.1 | 0.39 | Đạt |
| LG-2609-032 | 2026-09-14 | VS-L01 | Lúa thuần | NC | P.SX 7 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho lạnh | Kho Cần Thơ | 14000 | 90.3 | 12.3 | 0.48 | Đạt |
| LG-2608-033 | 2026-08-16 | VS-H01 | Lúa lai | F1 | P.SX 1 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho thường | Kho Thái Bình | 13000 | 94.2 | 13.1 | 0.44 | Đạt |
| LG-2609-034 | 2026-09-12 | VS-L01 | Lúa thuần | XN | P.SX 7 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho thường | Kho Cần Thơ | 9000 | 94.2 | 12.0 | 0.18 | Đạt |
| LG-2609-035 | 2026-09-01 | VS-N02 | Ngô lai | F1 | P.SX 5 | Tây Nguyên | QL1 | Khối Sản xuất | Kho mát | Kho Đắk Lắk | 6000 | 91.5 | 12.4 | 0.4 | Đạt |
| LG-2609-036 | 2026-09-21 | VS-N02 | Ngô lai | NC | P.SX 5 | Tây Nguyên | QL1 | Khối Sản xuất | Kho mát | Kho Đắk Lắk | 18000 | 95.2 | 12.6 | 0.83 | Đạt |
| LG-2610-037 | 2026-10-02 | VS-L01 | Lúa thuần | XN | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho thường | Kho Thái Bình | 17000 | 92.1 | 12.6 | 0.43 | Đạt |
| LG-2608-038 | 2026-08-05 | VS-L03 | Lúa thuần | F1 | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho mát | Kho Nghệ An | 15000 | 87.0 | 12.7 | 0.09 | Đạt |
| LG-2610-039 | 2026-10-10 | VS-H01 | Lúa lai | F1 | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho thường | Kho Nghệ An | 21000 | 89.4 | 12.7 | 0.61 | Đạt |
| LG-2608-040 | 2026-08-30 | VS-L03 | Lúa thuần | XN | P.SX 4 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho mát | Kho Nghệ An | 19000 | 93.9 | 12.5 | 0.44 | Đạt |
| LG-2609-041 | 2026-09-19 | VS-H01 | Lúa lai | F1 | P.SX 1 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho lạnh | Kho Thái Bình | 19000 | 93.4 | 11.9 | 0.53 | Đạt |
| LG-2610-042 | 2026-10-13 | VS-H01 | Lúa lai | F1 | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho lạnh | Kho Thái Bình | 12000 | 87.1 | 12.2 | 0.62 | Đạt |
| LG-2609-043 | 2026-09-14 | VS-L03 | Lúa thuần | F1 | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho lạnh | Kho Nghệ An | 11000 | 89.1 | 12.1 | 0.1 | Đạt |
| LG-2609-044 | 2026-09-19 | VS-H01 | Lúa lai | F1 | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho thường | Kho Nghệ An | 23000 | 89.4 | 12.5 | 1.22 | Không đạt |
| LG-2610-045 | 2026-10-19 | VS-H01 | Lúa lai | XN | P.SX 1 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho lạnh | Kho Thái Bình | 21000 | 89.1 | 13.7 | 0.48 | Không đạt |
| LG-2609-046 | 2026-09-24 | VS-L01 | Lúa thuần | F1 | P.SX 7 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho lạnh | Kho Cần Thơ | 25000 | 93.5 | 13.7 | 0.77 | Không đạt |
| LG-2610-047 | 2026-10-16 | VS-L01 | Lúa thuần | F1 | P.SX 6 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho mát | Kho Cần Thơ | 23000 | 95.5 | 12.4 | 0.92 | Đạt |
| LG-2608-048 | 2026-08-12 | VS-H01 | Lúa lai | XN | P.SX 7 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho thường | Kho Cần Thơ | 7000 | 97.2 | 12.9 | 0.3 | Đạt |
| LG-2608-049 | 2026-08-30 | VS-N01 | Ngô lai | XN | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho thường | Kho Nghệ An | 12000 | 90.3 | 12.3 | 1.04 | Không đạt |
| LG-2608-050 | 2026-08-19 | VS-L01 | Lúa thuần | F1 | P.SX 6 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho lạnh | Kho Cần Thơ | 24000 | 90.5 | 13.0 | 0.99 | Đạt |
| LG-2610-051 | 2026-10-03 | VS-L02 | Lúa thuần | NC | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho mát | Kho Thái Bình | 19000 | 95.4 | 12.6 | 0.12 | Đạt |
| LG-2608-052 | 2026-08-17 | VS-H01 | Lúa lai | XN | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho mát | Kho Nghệ An | 20000 | 91.9 | 12.3 | 0.5 | Đạt |
| LG-2609-053 | 2026-09-23 | VS-H01 | Lúa lai | NC | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho thường | Kho Nghệ An | 13000 | 95.3 | 13.1 | 0.36 | Đạt |
| LG-2610-054 | 2026-10-14 | VS-N01 | Ngô lai | NC | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho lạnh | Kho Nghệ An | 17000 | 89.8 | 12.9 | 0.51 | Đạt |
| LG-2610-055 | 2026-10-01 | VS-N01 | Ngô lai | F1 | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho mát | Kho Thái Bình | 22000 | 90.7 | 12.2 | 0.62 | Đạt |
| LG-2609-056 | 2026-09-06 | VS-L01 | Lúa thuần | NC | P.SX 7 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho mát | Kho Cần Thơ | 20000 | 84.1 | 12.3 | 1.31 | Không đạt |
| LG-2608-057 | 2026-08-25 | VS-N02 | Ngô lai | F1 | P.SX 5 | Tây Nguyên | QL1 | Khối Sản xuất | Kho mát | Kho Đắk Lắk | 20000 | 91.4 | 13.2 | 0.97 | Đạt |
| LG-2608-058 | 2026-08-28 | VS-L01 | Lúa thuần | NC | P.SX 5 | Tây Nguyên | QL1 | Khối Sản xuất | Kho mát | Kho Đắk Lắk | 7000 | 85.1 | 13.6 | 0.78 | Không đạt |
| LG-2608-059 | 2026-08-17 | VS-H01 | Lúa lai | XN | P.SX 7 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho thường | Kho Cần Thơ | 25000 | 96.0 | 13.5 | 0.51 | Đạt |
| LG-2609-060 | 2026-09-24 | VS-N01 | Ngô lai | NC | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho thường | Kho Nghệ An | 25000 | 88.0 | 11.7 | 1.12 | Không đạt |
| LG-2608-061 | 2026-08-10 | VS-H01 | Lúa lai | F1 | P.SX 7 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho lạnh | Kho Cần Thơ | 25000 | 87.8 | 12.6 | 0.81 | Đạt |
| LG-2609-062 | 2026-09-02 | VS-L02 | Lúa thuần | XN | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho lạnh | Kho Thái Bình | 16000 | 96.5 | 12.0 | 0.86 | Đạt |
| LG-2609-063 | 2026-09-07 | VS-L03 | Lúa thuần | NC | P.SX 1 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho mát | Kho Thái Bình | 15000 | 93.1 | 12.8 | 0.34 | Đạt |
| LG-2608-064 | 2026-08-13 | VS-L03 | Lúa thuần | F1 | P.SX 4 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho thường | Kho Nghệ An | 22000 | 92.4 | 12.7 | 0.2 | Đạt |
| LG-2609-065 | 2026-09-11 | VS-L01 | Lúa thuần | F1 | P.SX 6 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho thường | Kho Cần Thơ | 14000 | 89.4 | 13.2 | 0.31 | Đạt |
| LG-2609-066 | 2026-09-06 | VS-N01 | Ngô lai | NC | P.SX 6 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho thường | Kho Cần Thơ | 23000 | 97.2 | 12.5 | 0.68 | Đạt |
| LG-2610-067 | 2026-10-03 | VS-H01 | Lúa lai | F1 | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho thường | Kho Thái Bình | 11000 | 94.6 | 12.9 | 0.84 | Đạt |
| LG-2609-068 | 2026-09-20 | VS-H01 | Lúa lai | NC | P.SX 7 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho mát | Kho Cần Thơ | 10000 | 92.9 | 13.2 | 0.25 | Đạt |
| LG-2608-069 | 2026-08-13 | VS-L01 | Lúa thuần | XN | P.SX 5 | Tây Nguyên | QL1 | Khối Sản xuất | Kho mát | Kho Đắk Lắk | 21000 | 87.7 | 12.8 | 0.44 | Đạt |
| LG-2610-070 | 2026-10-05 | VS-L02 | Lúa thuần | F1 | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho thường | Kho Thái Bình | 8000 | 93.8 | 12.4 | 0.61 | Đạt |
| LG-2610-071 | 2026-10-09 | VS-L01 | Lúa thuần | XN | P.SX 6 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho mát | Kho Cần Thơ | 22000 | 85.2 | 12.4 | 0.52 | Đạt |
| LG-2609-072 | 2026-09-06 | VS-H01 | Lúa lai | NC | P.SX 7 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho thường | Kho Cần Thơ | 5000 | 89.7 | 12.4 | 0.77 | Đạt |
| LG-2608-073 | 2026-08-28 | VS-L01 | Lúa thuần | XN | P.SX 5 | Tây Nguyên | QL1 | Khối Sản xuất | Kho mát | Kho Đắk Lắk | 7000 | 89.5 | 12.2 | 0.26 | Đạt |
| LG-2608-074 | 2026-08-22 | VS-H01 | Lúa lai | XN | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho thường | Kho Nghệ An | 17000 | 96.8 | 13.0 | 0.46 | Đạt |
| LG-2608-075 | 2026-08-23 | VS-H01 | Lúa lai | NC | P.SX 7 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho lạnh | Kho Cần Thơ | 5000 | 88.2 | 12.8 | 0.15 | Đạt |
| LG-2608-076 | 2026-08-14 | VS-L01 | Lúa thuần | XN | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho thường | Kho Thái Bình | 12000 | 88.7 | 11.6 | 0.31 | Đạt |
| LG-2609-077 | 2026-09-08 | VS-H01 | Lúa lai | XN | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho lạnh | Kho Nghệ An | 15000 | 82.7 | 13.9 | 1.31 | Không đạt |
| LG-2608-078 | 2026-08-29 | VS-L03 | Lúa thuần | NC | P.SX 4 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho mát | Kho Nghệ An | 23000 | 85.1 | 13.3 | 0.62 | Đạt |
| LG-2608-079 | 2026-08-23 | VS-N01 | Ngô lai | XN | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho lạnh | Kho Nghệ An | 19000 | 90.5 | 13.7 | 0.11 | Không đạt |
| LG-2609-080 | 2026-09-18 | VS-L02 | Lúa thuần | XN | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho mát | Kho Thái Bình | 19000 | 95.1 | 12.3 | 0.73 | Đạt |
| LG-2608-081 | 2026-08-27 | VS-L01 | Lúa thuần | F1 | P.SX 4 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho mát | Kho Nghệ An | 22000 | 89.8 | 13.8 | 1.23 | Không đạt |
| LG-2608-082 | 2026-08-31 | VS-L02 | Lúa thuần | XN | P.SX 2 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho thường | Kho Thái Bình | 7000 | 95.6 | 12.4 | 0.45 | Đạt |
| LG-2608-083 | 2026-08-10 | VS-N02 | Ngô lai | XN | P.SX 4 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho lạnh | Kho Nghệ An | 22000 | 85.2 | 13.4 | 1.17 | Không đạt |
| LG-2608-084 | 2026-08-17 | VS-L01 | Lúa thuần | XN | P.SX 6 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho thường | Kho Cần Thơ | 18000 | 88.3 | 12.3 | 0.32 | Đạt |
| LG-2609-085 | 2026-09-13 | VS-L03 | Lúa thuần | F1 | P.SX 1 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho thường | Kho Thái Bình | 24000 | 84.8 | 12.5 | 0.68 | Không đạt |
| LG-2609-086 | 2026-09-13 | VS-L01 | Lúa thuần | NC | P.SX 5 | Tây Nguyên | QL1 | Khối Sản xuất | Kho mát | Kho Đắk Lắk | 9000 | 91.4 | 13.5 | 0.3 | Đạt |
| LG-2609-087 | 2026-09-14 | VS-L01 | Lúa thuần | NC | P.SX 5 | Tây Nguyên | QL1 | Khối Sản xuất | Kho lạnh | Kho Đắk Lắk | 13000 | 92.8 | 14.0 | 0.55 | Không đạt |
| LG-2608-088 | 2026-08-07 | VS-L03 | Lúa thuần | F1 | P.SX 1 | Đồng bằng sông Hồng | QL1 | Khối Sản xuất | Kho lạnh | Kho Thái Bình | 12000 | 90.7 | 12.6 | 0.48 | Đạt |
| LG-2608-089 | 2026-08-11 | VS-L03 | Lúa thuần | NC | P.SX 3 | Bắc Trung Bộ | QL1 | Khối Sản xuất | Kho lạnh | Kho Nghệ An | 7000 | 91.8 | 13.4 | 0.27 | Đạt |
| LG-2610-090 | 2026-10-08 | VS-L01 | Lúa thuần | XN | P.SX 7 | Đồng bằng sông Cửu Long | QL1 | Khối Sản xuất | Kho thường | Kho Cần Thơ | 6000 | 93.3 | 12.7 | 0.73 | Đạt |

## 14. Nhân sự theo tháng
<a id="14-hr"></a>

- Tệp: `dashboard/data/hr.json` · 70 dòng
- Nguồn dự kiến: Excel → Base HRM
- Dùng ở tab: Nhân sự

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `id` | Khoá dòng |
| `month` | Tháng |
| `dept` | Phòng ban |
| `headcount` | Quân số |
| `joins` | Tuyển mới |
| `leaves` | Nghỉ việc |
| `training_hours` | Giờ đào tạo |

**Dữ liệu**

| id | month | dept | headcount | joins | leaves | training_hours |
|---|---|---|---|---|---|---|
| 2026-01\|Ban Tổng giám đốc | 2026-01 | Ban Tổng giám đốc | 8 | 1 | 1 | 11 |
| 2026-02\|Ban Tổng giám đốc | 2026-02 | Ban Tổng giám đốc | 7 | 0 | 1 | 14 |
| 2026-03\|Ban Tổng giám đốc | 2026-03 | Ban Tổng giám đốc | 8 | 1 | 0 | 12 |
| 2026-04\|Ban Tổng giám đốc | 2026-04 | Ban Tổng giám đốc | 8 | 0 | 0 | 17 |
| 2026-05\|Ban Tổng giám đốc | 2026-05 | Ban Tổng giám đốc | 7 | 0 | 1 | 14 |
| 2026-06\|Ban Tổng giám đốc | 2026-06 | Ban Tổng giám đốc | 6 | 0 | 1 | 10 |
| 2026-07\|Ban Tổng giám đốc | 2026-07 | Ban Tổng giám đốc | 6 | 0 | 0 | 10 |
| 2026-08\|Ban Tổng giám đốc | 2026-08 | Ban Tổng giám đốc | 6 | 0 | 0 | 8 |
| 2026-09\|Ban Tổng giám đốc | 2026-09 | Ban Tổng giám đốc | 6 | 0 | 0 | 9 |
| 2026-10\|Ban Tổng giám đốc | 2026-10 | Ban Tổng giám đốc | 5 | 0 | 1 | 5 |
| 2026-01\|Khối Sản xuất | 2026-01 | Khối Sản xuất | 213 | 3 | 0 | 243 |
| 2026-02\|Khối Sản xuất | 2026-02 | Khối Sản xuất | 214 | 5 | 4 | 178 |
| 2026-03\|Khối Sản xuất | 2026-03 | Khối Sản xuất | 213 | 0 | 1 | 294 |
| 2026-04\|Khối Sản xuất | 2026-04 | Khối Sản xuất | 212 | 1 | 2 | 146 |
| 2026-05\|Khối Sản xuất | 2026-05 | Khối Sản xuất | 216 | 5 | 1 | 348 |
| 2026-06\|Khối Sản xuất | 2026-06 | Khối Sản xuất | 219 | 3 | 0 | 351 |
| 2026-07\|Khối Sản xuất | 2026-07 | Khối Sản xuất | 224 | 5 | 0 | 190 |
| 2026-08\|Khối Sản xuất | 2026-08 | Khối Sản xuất | 226 | 5 | 3 | 365 |
| 2026-09\|Khối Sản xuất | 2026-09 | Khối Sản xuất | 225 | 0 | 1 | 281 |
| 2026-10\|Khối Sản xuất | 2026-10 | Khối Sản xuất | 224 | 0 | 1 | 107 |
| 2026-01\|Khối Kinh doanh | 2026-01 | Khối Kinh doanh | 158 | 0 | 2 | 96 |
| 2026-02\|Khối Kinh doanh | 2026-02 | Khối Kinh doanh | 156 | 0 | 2 | 306 |
| 2026-03\|Khối Kinh doanh | 2026-03 | Khối Kinh doanh | 155 | 2 | 3 | 208 |
| 2026-04\|Khối Kinh doanh | 2026-04 | Khối Kinh doanh | 156 | 3 | 2 | 321 |
| 2026-05\|Khối Kinh doanh | 2026-05 | Khối Kinh doanh | 154 | 1 | 3 | 62 |
| 2026-06\|Khối Kinh doanh | 2026-06 | Khối Kinh doanh | 153 | 2 | 3 | 317 |
| 2026-07\|Khối Kinh doanh | 2026-07 | Khối Kinh doanh | 152 | 0 | 1 | 179 |
| 2026-08\|Khối Kinh doanh | 2026-08 | Khối Kinh doanh | 152 | 1 | 1 | 169 |
| 2026-09\|Khối Kinh doanh | 2026-09 | Khối Kinh doanh | 154 | 2 | 0 | 196 |
| 2026-10\|Khối Kinh doanh | 2026-10 | Khối Kinh doanh | 155 | 2 | 1 | 337 |
| 2026-01\|Tài chính – Kế toán | 2026-01 | Tài chính – Kế toán | 37 | 0 | 1 | 58 |
| 2026-02\|Tài chính – Kế toán | 2026-02 | Tài chính – Kế toán | 37 | 0 | 0 | 34 |
| 2026-03\|Tài chính – Kế toán | 2026-03 | Tài chính – Kế toán | 38 | 1 | 0 | 71 |
| 2026-04\|Tài chính – Kế toán | 2026-04 | Tài chính – Kế toán | 37 | 0 | 1 | 48 |
| 2026-05\|Tài chính – Kế toán | 2026-05 | Tài chính – Kế toán | 38 | 1 | 0 | 47 |
| 2026-06\|Tài chính – Kế toán | 2026-06 | Tài chính – Kế toán | 39 | 1 | 0 | 29 |
| 2026-07\|Tài chính – Kế toán | 2026-07 | Tài chính – Kế toán | 39 | 0 | 0 | 32 |
| 2026-08\|Tài chính – Kế toán | 2026-08 | Tài chính – Kế toán | 38 | 0 | 1 | 17 |
| 2026-09\|Tài chính – Kế toán | 2026-09 | Tài chính – Kế toán | 38 | 0 | 0 | 47 |
| 2026-10\|Tài chính – Kế toán | 2026-10 | Tài chính – Kế toán | 38 | 0 | 0 | 74 |
| 2026-01\|Nghiên cứu & Phát triển | 2026-01 | Nghiên cứu & Phát triển | 44 | 0 | 1 | 26 |
| 2026-02\|Nghiên cứu & Phát triển | 2026-02 | Nghiên cứu & Phát triển | 45 | 1 | 0 | 81 |
| 2026-03\|Nghiên cứu & Phát triển | 2026-03 | Nghiên cứu & Phát triển | 45 | 1 | 1 | 34 |
| 2026-04\|Nghiên cứu & Phát triển | 2026-04 | Nghiên cứu & Phát triển | 45 | 1 | 1 | 57 |
| 2026-05\|Nghiên cứu & Phát triển | 2026-05 | Nghiên cứu & Phát triển | 45 | 0 | 0 | 25 |
| 2026-06\|Nghiên cứu & Phát triển | 2026-06 | Nghiên cứu & Phát triển | 45 | 1 | 1 | 73 |
| 2026-07\|Nghiên cứu & Phát triển | 2026-07 | Nghiên cứu & Phát triển | 44 | 0 | 1 | 24 |
| 2026-08\|Nghiên cứu & Phát triển | 2026-08 | Nghiên cứu & Phát triển | 44 | 1 | 1 | 65 |
| 2026-09\|Nghiên cứu & Phát triển | 2026-09 | Nghiên cứu & Phát triển | 43 | 0 | 1 | 65 |
| 2026-10\|Nghiên cứu & Phát triển | 2026-10 | Nghiên cứu & Phát triển | 44 | 1 | 0 | 83 |
| 2026-01\|Đầu tư – Dự án | 2026-01 | Đầu tư – Dự án | 23 | 1 | 0 | 35 |
| 2026-02\|Đầu tư – Dự án | 2026-02 | Đầu tư – Dự án | 23 | 0 | 0 | 25 |
| 2026-03\|Đầu tư – Dự án | 2026-03 | Đầu tư – Dự án | 23 | 0 | 0 | 49 |
| 2026-04\|Đầu tư – Dự án | 2026-04 | Đầu tư – Dự án | 23 | 0 | 0 | 37 |
| 2026-05\|Đầu tư – Dự án | 2026-05 | Đầu tư – Dự án | 22 | 0 | 1 | 48 |
| 2026-06\|Đầu tư – Dự án | 2026-06 | Đầu tư – Dự án | 22 | 0 | 0 | 12 |
| 2026-07\|Đầu tư – Dự án | 2026-07 | Đầu tư – Dự án | 22 | 0 | 0 | 30 |
| 2026-08\|Đầu tư – Dự án | 2026-08 | Đầu tư – Dự án | 22 | 1 | 1 | 28 |
| 2026-09\|Đầu tư – Dự án | 2026-09 | Đầu tư – Dự án | 23 | 1 | 0 | 44 |
| 2026-10\|Đầu tư – Dự án | 2026-10 | Đầu tư – Dự án | 24 | 1 | 0 | 33 |
| 2026-01\|Hành chính – Nhân sự | 2026-01 | Hành chính – Nhân sự | 30 | 1 | 1 | 51 |
| 2026-02\|Hành chính – Nhân sự | 2026-02 | Hành chính – Nhân sự | 31 | 1 | 0 | 34 |
| 2026-03\|Hành chính – Nhân sự | 2026-03 | Hành chính – Nhân sự | 32 | 1 | 0 | 38 |
| 2026-04\|Hành chính – Nhân sự | 2026-04 | Hành chính – Nhân sự | 31 | 0 | 1 | 27 |
| 2026-05\|Hành chính – Nhân sự | 2026-05 | Hành chính – Nhân sự | 31 | 1 | 1 | 38 |
| 2026-06\|Hành chính – Nhân sự | 2026-06 | Hành chính – Nhân sự | 32 | 1 | 0 | 30 |
| 2026-07\|Hành chính – Nhân sự | 2026-07 | Hành chính – Nhân sự | 31 | 0 | 1 | 57 |
| 2026-08\|Hành chính – Nhân sự | 2026-08 | Hành chính – Nhân sự | 30 | 0 | 1 | 24 |
| 2026-09\|Hành chính – Nhân sự | 2026-09 | Hành chính – Nhân sự | 29 | 0 | 1 | 63 |
| 2026-10\|Hành chính – Nhân sự | 2026-10 | Hành chính – Nhân sự | 29 | 1 | 1 | 36 |

## 15. Danh mục báo cáo khảo sát
<a id="15-catalog"></a>

- Tệp: `dashboard/data/catalog.json` · 25 dòng
- Nguồn dự kiến: Phiếu khảo sát hệ thống dữ liệu
- Dùng ở tab: Danh mục báo cáo

**Trường dữ liệu**

| Trường | Ý nghĩa |
|---|---|
| `code` | Mã |
| `users` | Bộ phận sử dụng |
| `report` | Báo cáo |
| `frequency` | Tần suất |
| `source` | Nguồn dữ liệu |
| `scope` | Phạm vi Data Service |
| `tab` | Tab trên dashboard |

**Dữ liệu**

| code | users | report | frequency | source | scope | tab |
|---|---|---|---|---|---|---|
| R01 | Tài chính kế toán | Cân đối kế toán | Hàng ngày | Fast | Trong phạm vi | Tài chính |
| R02 | Tài chính kế toán | Báo cáo kết quả kinh doanh | Hàng ngày | Fast | Trong phạm vi | Tài chính |
| R03 | Tài chính kế toán | Báo cáo lưu chuyển tiền tệ | Hàng ngày | Fast | Trong phạm vi | Tài chính |
| R04 | Tài chính kế toán | Thuyết minh BCTC | Hàng ngày | Fast | Ngoài phạm vi | — |
| R05 | TCKT, Kinh doanh, Kế hoạch, Lãnh đạo công ty con | Bán hàng theo mặt hàng, khách hàng, đơn vị (BC1) | Hàng ngày | Fast | Trong phạm vi | Kinh doanh |
| R06 | Tài chính kế toán | Tuổi nợ khách hàng | Hàng tháng | Excel → Fast | Có khả năng (Workflow công nợ) | Tài chính |
| R07 | Tài chính kế toán | Tiền vay | Hàng tháng | Fast | Có khả năng | Tài chính |
| R08 | Tài chính kế toán | Tiền gửi | Hàng tháng | Excel → Fast | Có khả năng | Tài chính |
| R09 | Tài chính kế toán | Dòng tiền | Hàng ngày | Excel → Fast | Có khả năng (Finance) | Tài chính |
| R10 | Kinh doanh, Marketing | Cự ly di chuyển (BC2) | Hàng tuần | CRM & DMS | Trong phạm vi | Đại lý & thị trường |
| R11 | Kinh doanh, Marketing | Đại lý (BC3) | Hàng tuần | CRM & DMS | Trong phạm vi | Đại lý & thị trường |
| R12 | Kinh doanh, Marketing | Ghé thăm đại lý (BC4) | Hàng tuần | CRM & DMS | Trong phạm vi | Đại lý & thị trường |
| R13 | TCKT, Kinh doanh, Kế hoạch, Lãnh đạo công ty con | Tồn kho theo đơn vị (BC5) | Hàng ngày | Fast | Khó | — |
| R14 | Sản xuất, Kế hoạch, Ban lãnh đạo | Thu mua (BC6) | Hàng ngày | Excel | Trong phạm vi (Workflow thu mua) | Sản xuất & thu mua |
| R15 | Sản xuất, Kế hoạch, Ban lãnh đạo | Tiến độ về kho (BC7) | Hàng ngày | Excel | Trong phạm vi (Workflow nhập kho) | Sản xuất & thu mua |
| R16 | TCKT, Kinh doanh, Kế hoạch, Lãnh đạo công ty con | Theo dõi đơn đặt hàng (BC8) | Hàng ngày | Excel | Trong phạm vi (Workflow thu mua) | Đơn đặt hàng |
| R17 | Sản xuất, Kế hoạch, Ban lãnh đạo | Tiến độ sản xuất (BC9) | Hàng ngày | Excel | Trong phạm vi (Workflow sản xuất) | Sản xuất & thu mua |
| R18 | Hành chính nhân sự | Báo cáo HCNS | Hàng tuần | Excel → Base | Có khả năng (HRM) | Nhân sự |
| R19 | Quản lý chất lượng | Chất lượng tồn kho, lô giống theo kho, giống, vùng (BC10) | Hàng ngày | Excel | Khó | Chất lượng |
| R20 | Sản xuất, Kế hoạch, Ban lãnh đạo | Quản lý sản xuất | Hàng ngày | Facefarm | Ngoài phạm vi | — |
| R21 | Toàn công ty | Quản lý, lưu trữ văn bản | Hàng ngày | Voffice | Ngoài phạm vi | — |
| R22 | Hành chính nhân sự | Giao việc | Hàng ngày | Base | Trong phạm vi | Điều hành |
| R23 | Hành chính nhân sự | Hoạt động, số giờ đào tạo | Hàng tháng | Base | Có khả năng | Nhân sự |
| R24 | Hành chính nhân sự | Biến động nhân sự | Hàng tháng | Base | Có khả năng | Nhân sự |
| R25 | R&D | Khảo nghiệm, công nhận giống | Hàng tháng | Base Project | Có khả năng | Điều hành |
