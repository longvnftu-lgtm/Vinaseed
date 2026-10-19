# Executive Dashboard · Vinaseed

Trang Home của Chủ tịch HĐQT theo yêu cầu số 6 trong tài liệu yêu cầu kỹ thuật:
AI hỏi đáp, việc trọng tâm ngày/tuần, việc và dự án chậm tiến độ, lịch công tác
Ban TGĐ/PTGĐ, tờ trình chờ phê duyệt.

**Dữ liệu trong `data.js` là dữ liệu demo minh hoạ** (tên người, số liệu giả lập).

## Mở xem

- Mở trực tiếp `index.html` bằng trình duyệt (không cần mạng, Chart.js nằm trong `vendor/`).
- Hoặc bật GitHub Pages cho repo (Settings → Pages → chọn nhánh, thư mục gốc) rồi vào `/dashboard/`.

## Bộ lọc

- **Phòng ban**, **Nhân sự** (người thực hiện hoặc người giao việc), **Thời gian**
  (hôm nay, tuần này, tháng này, quý này, tất cả hoặc tự chọn từ ngày – đến ngày).
- Nhấp cột/lát biểu đồ, dòng nhân sự hoặc tên lãnh đạo trên lịch để lọc chéo.
- Việc quá hạn chưa xong luôn được tính vào kỳ có chứa hôm nay.

## Các góc nhìn

| Tab | Nội dung |
|---|---|
| Tổng quan | 6 KPI, AI hỏi đáp, chờ Chủ tịch duyệt, việc trọng tâm, việc & dự án chậm, lịch hôm nay |
| Công việc | trạng thái tiến độ, theo phòng ban, nguồn giao việc, theo nhân sự, theo tuần, bảng chi tiết |
| Dự án | tiến độ thực tế so với kế hoạch, mốc, rủi ro, chi phí, doanh thu |
| Lịch công tác | ai đang ở đâu theo ngày, theo loại lịch, địa điểm, bảng lịch |
| Phê duyệt | theo bước B1–B3, thời gian chờ theo loại, danh sách tờ trình |
| Trường dữ liệu | từ điển trường của từng bảng trên Data Warehouse và nguồn ứng dụng Base |

AI hỏi đáp ở bản demo là mô phỏng theo luật, trả lời trên dữ liệu đang lọc và dẫn mã bản ghi.

## Dùng dữ liệu thật

Thay `data.js` bằng dữ liệu xuất từ Data Warehouse theo đúng cấu trúc
(`departments`, `people`, `tasks`, `projects`, `events`, `approvals`; xem tab *Trường dữ liệu*).
Sinh lại dữ liệu demo: `python3 dashboard/generate_demo_data.py`.
