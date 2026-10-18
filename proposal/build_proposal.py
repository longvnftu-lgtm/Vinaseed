"""Build the A4 proposal 'Base 2.0 cho Vinaseed' (Sown Order design language)."""
import math
import os
import sys

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT, TA_RIGHT, TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

FONT_DIR = sys.argv[1] if len(sys.argv) > 1 else "canvas-fonts"
OUT = sys.argv[2] if len(sys.argv) > 2 else "Vinaseed_Base2.0_Proposal_A4.pdf"

for name, file in [
    ("Serif", "CrimsonPro-Regular.ttf"),
    ("Serif-It", "CrimsonPro-Italic.ttf"),
    ("Serif-Bd", "CrimsonPro-Bold.ttf"),
    ("Sans", "WorkSans-Regular.ttf"),
    ("Sans-Bd", "WorkSans-Bold.ttf"),
    ("Sans-It", "WorkSans-Italic.ttf"),
    ("Mono", "JetBrainsMono-Regular.ttf"),
    ("Mono-Bd", "JetBrainsMono-Bold.ttf"),
]:
    pdfmetrics.registerFont(TTFont(name, os.path.join(FONT_DIR, file)))
pdfmetrics.registerFontFamily("Sans", normal="Sans", bold="Sans-Bd", italic="Sans-It", boldItalic="Sans-Bd")
pdfmetrics.registerFontFamily("Serif", normal="Serif", bold="Serif-Bd", italic="Serif-It", boldItalic="Serif-Bd")

W, H = A4
M = 44  # outer margin
CW = W - 2 * M

PAPER = HexColor("#F4F0E5")
INK = HexColor("#1C2420")
GREEN = HexColor("#24402F")
SAGE = HexColor("#8E9F88")
SAGE_L = HexColor("#D9DCCB")
OCHRE = HexColor("#B5852A")
OCHRE_L = HexColor("#EADBB4")
MUTED = HexColor("#6A6E64")
RULE = HexColor("#CBC4B1")

TOTAL = 4


def style(font="Sans", size=8.4, leading=None, color=INK, align=TA_LEFT):
    return ParagraphStyle("s", fontName=font, fontSize=size, leading=leading or size * 1.42,
                          textColor=color, alignment=align)


BODY = style()
BODY_S = style(size=7.6, color=MUTED)
BODY_W = style(size=8.4, color=PAPER)


def para(c, text, x, top, width, st=BODY):
    """Draw wrapped text with its top edge at `top`; return its height."""
    p = Paragraph(text, st)
    _, h = p.wrap(width, 1000)
    p.drawOn(c, x, top - h)
    return h


def text(c, s, x, y, font="Sans", size=8, color=INK, align="l", tracking=0):
    c.setFillColor(color)
    if tracking:
        c.saveState()
        t = c.beginText()
        t.setFont(font, size)
        t.setCharSpace(tracking)
        w = pdfmetrics.stringWidth(s, font, size) + tracking * (len(s) - 1)
        if align == "r":
            x -= w
        elif align == "c":
            x -= w / 2
        t.setTextOrigin(x, y)
        t.textOut(s)
        c.drawText(t)
        c.restoreState()
        return w
    c.setFont(font, size)
    if align == "r":
        c.drawRightString(x, y, s)
    elif align == "c":
        c.drawCentredString(x, y, s)
    else:
        c.drawString(x, y, s)
    return pdfmetrics.stringWidth(s, font, size)


def dot(c, x, y, r, fill=GREEN, stroke=None, lw=0.5):
    if stroke is not None:
        c.setStrokeColor(stroke)
        c.setLineWidth(lw)
    c.setFillColor(fill if fill is not None else PAPER)
    c.circle(x, y, r, stroke=1 if stroke is not None else 0, fill=1 if fill is not None else 0)


def hline(c, x1, x2, y, color=RULE, lw=0.5):
    c.setStrokeColor(color)
    c.setLineWidth(lw)
    c.line(x1, y, x2, y)


def field(c, x0, y0, cols, rows, pitch, r, color, fade=None):
    """A plot of seed dots. `fade(i, j)` -> radius multiplier (0 hides the dot)."""
    c.setFillColor(color)
    for j in range(rows):
        for i in range(cols):
            k = fade(i, j) if fade else 1
            if k > 0.05:
                c.circle(x0 + i * pitch, y0 + j * pitch, r * k, stroke=0, fill=1)


def frame(c, page, section, title_right):
    c.setFillColor(PAPER)
    c.rect(0, 0, W, H, stroke=0, fill=1)
    # running head
    y = H - 30
    text(c, "BASE 2.0  ·  VINASEED", M, y, "Mono", 6.4, MUTED, tracking=1.1)
    text(c, title_right, W - M, y, "Mono", 6.4, MUTED, "r", tracking=1.1)
    hline(c, M, W - M, y - 7, RULE, 0.4)
    # folio
    yb = 26
    hline(c, M, W - M, yb + 12, RULE, 0.4)
    text(c, "ĐỀ XUẤT SƠ BỘ — LƯU HÀNH NỘI BỘ", M, yb, "Mono", 6, MUTED, tracking=1)
    text(c, f"{page:02d} / {TOTAL:02d}", W - M, yb, "Mono", 6, INK, "r", tracking=1)
    text(c, section, W / 2, yb, "Mono", 6, MUTED, "c", tracking=1)


def section_head(c, y, numeral, title, kicker):
    """Large section opener. Returns y below it."""
    nw = text(c, numeral, M, y, "Mono", 7, OCHRE, tracking=1.4)
    text(c, kicker.upper(), M + max(22, nw + 12), y, "Mono", 7, MUTED, tracking=1.4)
    y -= 34
    text(c, title, M - 1, y, "Serif", 30, INK)
    return y - 16


# ───────────────────────────────── page 1 ─────────────────────────────────
def page1(c):
    frame(c, 1, "I · YÊU CẦU BÀI TOÁN", "ĐỀ XUẤT GIẢI PHÁP · 18.10.2026")

    # Title block
    y = H - 92
    text(c, "Tập đoàn Giống cây trồng Việt Nam", M, y, "Mono", 7.2, GREEN, tracking=1.2)
    y -= 50
    text(c, "Văn phòng điện tử", M - 2, y, "Serif", 46, INK)
    y -= 44
    text(c, "cho điều hành", M - 1, y, "Serif-It", 46, GREEN)
    w = pdfmetrics.stringWidth("cho điều hành", "Serif-It", 46)
    dot(c, M + w + 7, y + 4, 5.2, OCHRE)

    # seed field top right: a plot that thins toward the title
    def fade_tr(i, j):
        d = math.hypot(i - 11, j - 9) / 13
        return max(0.0, 1.05 - d) if (i + j) % 1 == 0 else 0
    field(c, W - M - 11 * 9.5, H - 160, 12, 10, 9.5, 1.45, SAGE, fade_tr)

    y -= 30
    para(c, "Đề xuất sơ bộ giải pháp <b>Base 2.0</b>: một hệ thống xuyên suốt từ Chủ tịch HĐQT, "
            "Ban TGĐ tới phòng ban và chi nhánh, nơi lịch, cuộc họp, chỉ đạo, quy trình và dự án "
            "cùng chảy về một màn hình điều hành mỗi sáng.",
         M, y, 300, style(size=9.2, leading=13.6, color=INK))

    # ── Section I
    y = 520
    hline(c, M, W - M, y + 26, INK, 0.8)
    y = section_head(c, y, "I", "Yêu cầu bài toán", "Tóm tắt từ tài liệu yêu cầu kỹ thuật")

    reqs = [
        ("01", "Lịch công tác & đặt chỗ", "Lịch tập trung các PTGĐ; ai đi đâu, ai ở văn phòng; đặt phòng họp, xe; phân quyền xem.", "Meeting · Booking"),
        ("02", "Kết luận họp → giao việc", "Biên bản gửi thành viên; rút kết luận, tách đầu việc có người nhận, hạn, tiêu chí.", "Meeting AI · Task"),
        ("03", "Quy trình liên phòng ban", "Đưa quy trình hiện có lên hệ thống; luồng duyệt giá thu mua 3 bước, ký song song, trả lại.", "BPM"),
        ("04", "Dự án chiến lược", "Mốc trọng yếu, SLA, tiến độ theo dự án, đầu việc và khối lượng từng thành viên.", "Project"),
        ("05", "Cảnh báo & nhắc việc", "Tự động nhắc sắp đến hạn, trễ hạn qua thông báo và email cho mọi loại việc.", "Toàn hệ thống"),
        ("06", "Executive Dashboard", "Trang sáng của Chủ tịch: việc trọng tâm, việc chậm, lịch Ban TGĐ, tờ trình chờ duyệt, hỏi đáp AI.", "Home · AI"),
    ]
    list_w = 282
    row_h = 40
    top = y - 4
    gx = M + list_w + 24          # start of the convergence figure
    cx, cy = W - M - 58, top - row_h * 3 + 6   # the convergence point
    for idx, (n, t, d, mod) in enumerate(reqs):
        ry = top - idx * row_h
        text(c, n, M, ry - 10, "Mono", 7, OCHRE, tracking=0.6)
        text(c, t, M + 22, ry - 10, "Sans-Bd", 8.6, INK)
        para(c, d, M + 22, ry - 14.5, list_w - 22, style(size=7.4, leading=10.2, color=MUTED))
        # seed row
        my = ry - 12.5
        for k in range(5):
            dot(c, gx + k * 8, my, 1.5, SAGE)
        # channel to the centre
        c.setStrokeColor(SAGE)
        c.setLineWidth(0.55)
        p = c.beginPath()
        sx = gx + 4 * 8 + 6
        p.moveTo(sx, my)
        p.curveTo(sx + 40, my, cx - 70, cy, cx - 37, cy)
        c.drawPath(p, stroke=1, fill=0)
        text(c, mod, gx, my + 6, "Mono", 5.6, MUTED, tracking=0.3)
        if idx < len(reqs) - 1:
            hline(c, M + 22, M + list_w, ry - row_h + 2, RULE, 0.35)

    # convergence circle
    dot(c, cx, cy, 37, GREEN)
    c.setStrokeColor(OCHRE)
    c.setLineWidth(0.6)
    c.circle(cx, cy, 43, stroke=1, fill=0)
    text(c, "Văn phòng", cx, cy + 3, "Serif-It", 11.5, PAPER, "c")
    text(c, "điện tử", cx, cy - 9.5, "Serif-It", 11.5, PAPER, "c")
    text(c, "FIG. 1 — SÁU YÊU CẦU, MỘT BẢN CHẤT", cx + 43, top - row_h * 6 + 8, "Mono", 5.6, MUTED, "r", tracking=0.6)

    # ── Positioning band
    by = top - row_h * 6 - 14
    bh = 128
    c.setFillColor(GREEN)
    c.rect(M, by - bh, CW, bh, stroke=0, fill=1)
    text(c, "ĐỊNH VỊ", M + 18, by - 22, "Mono", 6.6, OCHRE_L, tracking=1.6)
    para(c, "Cả sáu yêu cầu cùng xoay quanh một luồng: <i>chỉ đạo <font name='Sans'>→</font> thực thi <font name='Sans'>→</font> theo dõi <font name='Sans'>→</font> báo cáo</i> "
            "của Ban lãnh đạo. Đây là bài toán <b>văn phòng điện tử cho điều hành</b>, "
            "không phải ERP hay phần mềm sản xuất.",
         M + 18, by - 32, 232, style("Serif", 11.6, 15.4, PAPER))
    # three tenets
    tx = M + 278
    tw = (CW - 278 - 18) / 3
    tenets = [
        ("Một nguồn", "Mọi chỉ đạo, lịch, tờ trình nằm trên một hệ thống, dùng chung sơ đồ tổ chức."),
        ("Tự vận hành", "Kết luận thành việc, việc tự nhắc, trễ hạn tự cảnh báo, không cần đôn đốc tay."),
        ("Nhìn một chỗ", "Chủ tịch xem và hỏi mọi thứ trên một màn hình mỗi sáng."),
    ]
    for i, (h, d) in enumerate(tenets):
        x = tx + i * tw
        dot(c, x + 3, by - 20, 2.6, OCHRE if i == 2 else SAGE)
        text(c, h, x, by - 38, "Sans-Bd", 8.2, PAPER)
        para(c, d, x, by - 44, tw - 12, style(size=7.2, leading=9.9, color=SAGE_L))
    text(c, "Nguồn: Yêu cầu kỹ thuật dự án số hoá quản trị vận hành, Vinaseed, 10/2026",
         M + 18, by - bh + 12, "Mono", 5.4, SAGE, tracking=0.3)


# ───────────────────────────────── page 2 ─────────────────────────────────
def page2(c):
    frame(c, 2, "II · KIẾN TRÚC GIẢI PHÁP", "KIẾN TRÚC · SERVICE HOÁ DỮ LIỆU")
    y = H - 74
    y = section_head(c, y, "II", "Kiến trúc: service hoá dữ liệu", "Kiến trúc giải pháp")
    para(c, "Mỗi ứng dụng nghiệp vụ vẫn làm tốt việc của mình, nhưng không giữ dữ liệu cho riêng mình. "
            "Dữ liệu được <b>công bố thành dịch vụ</b> theo một chuẩn chung, gom về kho điều hành, "
            "để AI hỏi đáp và báo cáo tập trung đọc từ cùng một nguồn.",
         M, y, 330, style(size=9, leading=13.2))

    # diagram geometry
    dl, dr = M, M + 340          # diagram column
    dw = dr - dl
    ax = dr + 26                 # annotation column
    aw = W - M - ax

    labels = []

    def band_label(yy, code, name):
        labels.append((yy, code, name))

    def draw_label(yy, code, name):
        lw = 24 + pdfmetrics.stringWidth(name.upper(), "Mono", 6) + len(name) * 1 + 6
        c.setFillColor(PAPER)
        c.rect(dl - 2, yy - 3, lw, 11, stroke=0, fill=1)
        text(c, code, dl, yy, "Mono", 6, OCHRE, tracking=1)
        text(c, name.upper(), dl + 24, yy, "Mono", 6, MUTED, tracking=1)

    # L4 · Chairman home
    y4 = 630
    band_label(y4, "L4", "Người dùng cuối")
    c.setFillColor(GREEN)
    c.roundRect(dl, y4 - 72, dw, 62, 3, stroke=0, fill=1)
    text(c, "Home của Chủ tịch", dl + 14, y4 - 30, "Serif-It", 14, PAPER)
    blocks = ["Hỏi đáp AI", "Việc trọng tâm", "Việc chậm", "Lịch Ban TGĐ", "Chờ phê duyệt"]
    bw = (dw - 28 - 4 * 5) / 5
    for i, b in enumerate(blocks):
        x = dl + 14 + i * (bw + 5)
        c.setFillColor(HexColor("#2F5440") if i else OCHRE)
        c.roundRect(x, y4 - 64, bw, 20, 2, stroke=0, fill=1)
        text(c, b, x + bw / 2, y4 - 57, "Sans", 6.4, PAPER, "c")

    # L3 · AI layer
    y3 = y4 - 100
    band_label(y3, "L3", "AI nhúng")
    ai = [("AI Agent hỏi đáp", "trả lời kèm nguồn"), ("Báo cáo tập trung", "tự sinh ngày / tuần"), ("Cảnh báo chủ động", "sắp hạn · trễ hạn")]
    aiw = (dw - 2 * 8) / 3
    for i, (a, s) in enumerate(ai):
        x = dl + i * (aiw + 8)
        c.setStrokeColor(GREEN)
        c.setLineWidth(0.7)
        c.setFillColor(PAPER)
        c.roundRect(x, y3 - 46, aiw, 36, 3, stroke=1, fill=1)
        text(c, a, x + 10, y3 - 24, "Sans-Bd", 7.6, INK)
        text(c, s, x + 10, y3 - 36, "Mono", 5.8, MUTED, tracking=0.2)
        # stem up to Home
        c.setStrokeColor(SAGE)
        c.setLineWidth(0.6)
        c.line(x + aiw / 2, y3 - 10, x + aiw / 2, y4 - 72)
        dot(c, x + aiw / 2, y4 - 72, 1.8, GREEN)

    # L2 · Data service layer (the heart)
    y2 = y3 - 78
    band_label(y2, "L2", "Service hoá dữ liệu")
    c.setFillColor(OCHRE_L)
    c.roundRect(dl, y2 - 60, dw, 50, 3, stroke=0, fill=1)
    c.setStrokeColor(OCHRE)
    c.setLineWidth(0.8)
    c.roundRect(dl, y2 - 60, dw, 50, 3, stroke=1, fill=0)
    text(c, "Kho dữ liệu điều hành", dl + 14, y2 - 29, "Serif-It", 13, INK)
    text(c, "Data Service  ·  Dataset  ·  Output  —  một chuẩn, một nguồn", dl + 14, y2 - 44, "Mono", 6.2, GREEN, tracking=0.2)
    for i in range(3):
        x = dl + i * (aiw + 8) + aiw / 2
        c.setStrokeColor(SAGE)
        c.setLineWidth(0.6)
        c.line(x, y2 - 10, x, y3 - 46)
        dot(c, x, y3 - 46, 1.8, GREEN)

    # L1 · Apps
    y1 = y2 - 96
    band_label(y1, "L1", "Ứng dụng nghiệp vụ")
    apps = [("Meeting", "biên bản"), ("Booking", "phòng · xe"), ("E-office", "chỉ đạo"),
            ("Task", "giao việc"), ("BPM", "duyệt giá"), ("Project", "dự án")]
    pw = (dw - 5 * 6) / 6
    for i, (a, s) in enumerate(apps):
        x = dl + i * (pw + 6)
        c.setFillColor(SAGE_L)
        c.roundRect(x, y1 - 44, pw, 34, 2.5, stroke=0, fill=1)
        text(c, a, x + pw / 2, y1 - 25, "Sans-Bd", 7.4, INK, "c")
        text(c, s, x + pw / 2, y1 - 36, "Mono", 5.4, MUTED, "c")
        # service stem: a dotted seed line into the data layer
        sx = x + pw / 2
        y_from, y_to = y1 - 10, y2 - 60
        n = 9
        for k in range(1, n):
            dot(c, sx, y_from + (y_to - y_from) * k / n, 0.9, OCHRE)
        dot(c, sx, y_to, 1.8, OCHRE)

    # L0 · Platform
    y0 = y1 - 72
    band_label(y0, "L0", "Nền tảng chung")
    hline(c, dl, dr, y0 - 10, INK, 0.8)
    text(c, "Base Account — sơ đồ tổ chức · người dùng · phân quyền theo cấp bậc", dl, y0 - 24, "Sans", 7.6, INK)
    text(c, "FIG. 2 — DỮ LIỆU ĐI TỪ DƯỚI LÊN, QUYẾT ĐỊNH ĐI TỪ TRÊN XUỐNG", dr, y0 - 40, "Mono", 5.6, MUTED, "r", tracking=0.6)

    for lb in labels:
        draw_label(*lb)

    # annotations
    notes = [
        (y4, "Một màn hình", "Năm khối mà yêu cầu số 06 nêu, gom trên trang Home. Chủ tịch không phải mở từng ứng dụng."),
        (y3, "AI đọc qua dịch vụ", "AI không truy cập thẳng vào từng app. Nó đọc qua dịch vụ dữ liệu, theo đúng quyền của người hỏi, và mỗi câu trả lời dẫn về bản ghi gốc."),
        (y2, "Service hoá", "Mỗi app công bố dữ liệu (việc, hạn, người phụ trách, trạng thái, tờ trình) thành dịch vụ chuẩn. Nhập một lần, dùng ở nhiều nơi."),
        (y1, "Nghiệp vụ giữ nguyên", "Các phòng ban làm việc trên app quen thuộc. Báo cáo được sinh ra từ chính vận hành, không phải tổng hợp tay."),
    ]
    for yy, h, d in notes:
        dot(c, ax + 2.5, yy + 2.5, 2.4, OCHRE if h == "Service hoá" else GREEN)
        text(c, h, ax + 11, yy, "Sans-Bd", 8, INK)
        para(c, d, ax + 11, yy - 6, aw - 11, style(size=7.2, leading=10))

    # bottom band: what changes for the chairman
    by = 184
    hline(c, M, W - M, by, INK, 0.8)
    text(c, "ĐIỀU KHÁC BIỆT", M, by - 16, "Mono", 6.4, OCHRE, tracking=1.4)
    cols = [
        ("Hôm nay", "Hỏi qua thư ký, chờ phòng ban tổng hợp Excel, số liệu lệch giữa các báo cáo."),
        ("Với Base 2.0", "Hỏi trực tiếp AI, trả lời trong vài giây, có dẫn nguồn, cùng một con số ở mọi nơi."),
        ("Điểm cần chốt", "Mức tự động hoá số liệu liên ứng dụng và phạm vi AI trích kết luận họp sẽ chốt trong PoC."),
    ]
    cw3 = (CW - 2 * 18) / 3
    for i, (h, d) in enumerate(cols):
        x = M + i * (cw3 + 18)
        text(c, h, x, by - 34, "Serif-It", 12, GREEN if i == 1 else INK)
        para(c, d, x, by - 41, cw3, style(size=7.4, leading=10.3, color=INK if i < 2 else MUTED))


# ───────────────────────────────── page 3 ─────────────────────────────────
def page3(c):
    frame(c, 3, "II · DEMO USECASE", "MỘT NGÀY CỦA CHỦ TỊCH")
    y = H - 74
    y = section_head(c, y, "II", "Một ngày của Chủ tịch", "Demo use case · kể theo góc nhìn người điều hành")
    para(c, "Sáu khoảnh khắc trong một ngày làm việc, mỗi khoảnh khắc là một luồng dữ liệu "
            "đi qua kiến trúc ở trang trước. Đây cũng là kịch bản demo đề xuất.",
         M, y, 330, style(size=9, leading=13.2))

    scenes = [
        ("07:30", "Bản tin sáng", "Mở trang Home trên điện thoại: 3 việc trọng tâm trong ngày, 4 việc đang chậm, "
         "lịch của các PTGĐ và 2 tờ trình chờ phê duyệt. Không cần gọi ai.",
         ["Task", "Project", "Meeting", "BPM", "Home"]),
        ("07:40", "«Dự án Hitech Hà Nam đang chậm ở đâu?»", "Chủ tịch gõ câu hỏi. AI trả lời: mốc đang trễ, phần trăm tiến độ, "
         "người phụ trách, đầu việc vướng. Mỗi ý có đường dẫn về bản ghi gốc.",
         ["Project", "Data Service", "AI Agent"]),
        ("08:15", "Duyệt giá thu mua", "Tờ trình đã qua B2: GĐ Tài chính và GĐ Sản xuất ký song song. AI tóm tắt "
         "giá đề nghị so với vụ trước. Chủ tịch ký ở B3, luồng hoàn tất; hoặc trả lại B2 kèm ý kiến.",
         ["BPM", "AI tóm tắt", "Ký duyệt"]),
        ("09:00", "Họp giao ban", "Phòng và xe đã đặt, không trùng lịch. Sau họp, AI ghi biên bản và tách kết luận "
         "thành đầu việc; thư ký xác nhận, việc tới người nhận kèm hạn và tiêu chí đánh giá.",
         ["Booking", "Meeting AI", "Task"]),
        ("14:00", "«Chiều nay các PTGĐ ở đâu?»", "AI đọc lịch công tác: ai đi chi nhánh, ai ở văn phòng, ai đang họp. "
         "Phòng ban có thể chủ động xin lịch làm việc với PTGĐ ngay trên hệ thống.",
         ["Meeting", "Booking", "AI Agent"]),
        ("17:00", "Tự nhắc, tự báo cáo", "Hai kết luận họp sắp đến hạn được nhắc qua thông báo và email. "
         "Chiều thứ Sáu, báo cáo tuần tự sinh từ chính dữ liệu vận hành.",
         ["Task", "Cảnh báo", "Báo cáo tuần"]),
    ]
    top = y - 50
    step = 98
    axis_x = M + 52
    # time axis
    c.setStrokeColor(RULE)
    c.setLineWidth(0.6)
    c.line(axis_x, top + 4, axis_x, top - step * (len(scenes) - 1) - 40)
    for i, (t, h, d, chain) in enumerate(scenes):
        ry = top - i * step
        text(c, t, M, ry - 9, "Mono-Bd", 9, GREEN)
        key = i in (1, 3)
        dot(c, axis_x, ry - 6, 4.2 if key else 3, OCHRE if key else GREEN)
        c.setFillColor(PAPER)
        c.circle(axis_x, ry - 6, 1.3 if key else 0.9, stroke=0, fill=1)
        tx = axis_x + 18
        text(c, h, tx, ry - 10, "Serif-It", 13.5, INK)
        para(c, d, tx, ry - 17, 270, style(size=7.8, leading=11))
        # data path chips (right column)
        cx0 = M + 380
        yy = ry - 4
        text(c, "LUỒNG DỮ LIỆU", cx0, yy - 4, "Mono", 5.2, MUTED, tracking=0.8)
        yy -= 16
        for k, node in enumerate(chain):
            last = k == len(chain) - 1
            dot(c, cx0 + 3, yy + 2.4, 2.4, OCHRE if last else (SAGE if k else GREEN))
            text(c, node, cx0 + 11, yy, "Sans-Bd" if last else "Sans", 7, INK)
            if not last:
                c.setStrokeColor(SAGE)
                c.setLineWidth(0.5)
                c.line(cx0 + 3, yy - 1, cx0 + 3, yy - 8)
            yy -= 11
        if i < len(scenes) - 1:
            hline(c, tx, W - M, ry - step + 12, RULE, 0.35)

    text(c, "FIG. 3 — SỐ LIỆU TRONG KỊCH BẢN LÀ MINH HOẠ; KHI DEMO SẼ DÙNG DỮ LIỆU CỦA VINASEED",
         W - M, 56, "Mono", 5.6, MUTED, "r", tracking=0.6)


# ───────────────────────────────── page 4 ─────────────────────────────────
def page4(c):
    frame(c, 4, "III · KẾ HOẠCH POC", "ĐỀ XUẤT KẾ HOẠCH POC")
    y = H - 74
    y = section_head(c, y, "III", "Kế hoạch PoC: hai phương án", "Đề xuất kế hoạch thử nghiệm")
    para(c, "Hai cách để Vinaseed kiểm chứng giải pháp, khác nhau ở độ sâu và nguồn lực. "
            "Có thể đi tuần tự: Showcase trước, PoC sau khi đã thống nhất.",
         M, y, 330, style(size=9, leading=13.2))

    top = y - 40
    gap = 16
    colw = (CW - gap) / 2
    opts = [
        dict(code="PA 1", name="Showcase", tag="MIỄN PHÍ", fill=PAPER,
             lede="Chứng minh giải pháp trên dữ liệu thật của Vinaseed.",
             rows=[
                 ("Cách làm", "Base dựng kịch bản trên môi trường demo, nạp dữ liệu thật do Vinaseed cung cấp, trình diễn trực tiếp."),
                 ("Dữ liệu", "Lịch công tác, quy trình duyệt giá thu mua, danh sách dự án, mẫu biên bản họp."),
                 ("Người tham gia", "Ban TGĐ, các PTGĐ và đại diện phòng ban xem demo và chấm điểm."),
                 ("Thời gian", "Khoảng 2 tuần từ khi nhận đủ dữ liệu."),
                 ("Đầu ra", "Phiếu đánh giá từng thành viên theo các kịch bản đã chốt."),
             ],
             weeks=["Chốt kịch bản, nhận dữ liệu", "Dựng demo, trình diễn, chấm điểm"]),
        dict(code="PA 2", name="PoC dùng thật", tag="CÓ PHÍ", fill=GREEN,
             lede="30 tài khoản · 1 tháng · hệ thống riêng.",
             rows=[
                 ("Cách làm", "Mở hệ thống riêng; thiết lập Meeting, Booking, E-office, Task, BPM, Project và trang Home theo quy trình thật."),
                 ("Đào tạo", "Đào tạo người dùng; Ban lãnh đạo và quản lý cốt lõi dùng thật trong công việc hằng ngày."),
                 ("Người tham gia", "30 tài khoản: Ban TGĐ, các PTGĐ, Trưởng/Phó phòng ban."),
                 ("Thời gian", "1 tháng vận hành, chia 4 tuần như bên dưới."),
                 ("Đầu ra", "Các thành viên đánh giá tính đáp ứng dựa trên phạm vi PoC đã thống nhất."),
             ],
             weeks=["Chuẩn bị", "Cấu hình", "Dùng thật", "Đánh giá"]),
    ]
    card_h = 300
    for i, o in enumerate(opts):
        x = M + i * (colw + gap)
        dark = o["fill"] == GREEN
        fg = PAPER if dark else INK
        sub = SAGE_L if dark else MUTED
        c.setFillColor(o["fill"])
        c.setStrokeColor(GREEN)
        c.setLineWidth(0.7)
        c.roundRect(x, top - card_h, colw, card_h, 3, stroke=0 if dark else 1, fill=1)
        pad = 16
        text(c, o["code"], x + pad, top - 22, "Mono", 6.6, OCHRE_L if dark else OCHRE, tracking=1.4)
        # tag pill
        tw = pdfmetrics.stringWidth(o["tag"], "Mono-Bd", 6) + 6 * 1.0 + 14
        c.setFillColor(OCHRE)
        c.roundRect(x + colw - pad - tw, top - 27, tw, 13, 6.5, stroke=0, fill=1)
        text(c, o["tag"], x + colw - pad - tw / 2, top - 23, "Mono-Bd", 6, PAPER, "c", tracking=1)
        text(c, o["name"], x + pad, top - 52, "Serif", 22, fg)
        para(c, o["lede"], x + pad, top - 60, colw - 2 * pad, style("Serif-It", 10.4, 13.4, OCHRE_L if dark else GREEN))
        ry = top - 92
        for h, d in o["rows"]:
            text(c, h.upper(), x + pad, ry - 6, "Mono", 5.4, sub, tracking=0.8)
            hgt = para(c, d, x + pad + 72, ry, colw - 2 * pad - 72, style(size=7.3, leading=10, color=fg))
            ry -= max(hgt, 10) + 7.5
        # weeks strip
        wy = top - card_h + 34
        n = len(o["weeks"])
        sw = (colw - 2 * pad) / n
        for k, wk in enumerate(o["weeks"]):
            sx = x + pad + k * sw
            c.setStrokeColor(OCHRE if dark else GREEN)
            c.setLineWidth(1.4)
            c.line(sx, wy, sx + sw - 4, wy)
            text(c, f"T{k + 1}", sx, wy + 6, "Mono-Bd", 6, OCHRE_L if dark else OCHRE, tracking=0.5)
            para(c, wk, sx, wy - 5, sw - 8, style(size=6.6, leading=8.4, color=fg))

    # evaluation scope: the frame both sides sign before starting
    sy = top - card_h - 22
    hline(c, M, W - M, sy, INK, 0.8)
    text(c, "PHẠM VI ĐÁNH GIÁ ĐỀ XUẤT — KHUNG ĐỂ CHỐT", M, sy - 16, "Mono", 6.4, OCHRE, tracking=1.4)
    scope = [
        ("Executive Dashboard", "Chủ tịch dùng mỗi sáng; AI trả lời đúng, có nguồn."),
        ("Giao việc từ họp", "Kết luận thành việc có người nhận, hạn, tiêu chí."),
        ("Quy trình liên phòng", "Duyệt giá thu mua chạy đầu cuối, có trả lại, ký."),
        ("Lịch & cảnh báo", "Lịch Ban TGĐ, phòng/xe không trùng; tự nhắc hạn."),
    ]
    sw4 = (CW - 3 * 12) / 4
    for i, (h, d) in enumerate(scope):
        x = M + i * (sw4 + 12)
        c.setStrokeColor(GREEN)
        c.setLineWidth(0.7)
        c.rect(x, sy - 38, 7, 7, stroke=1, fill=0)
        text(c, h, x + 13, sy - 37.5, "Sans-Bd", 7.8, INK)
        para(c, d, x + 13, sy - 44, sw4 - 13, style(size=7.1, leading=9.8))
    text(c, "NGOÀI PHẠM VI POC", M, sy - 84, "Mono", 5.6, MUTED, tracking=0.8)
    para(c, "Chứng thư số pháp lý (CA, USB token), tích hợp ERP và kế toán, chuyển toàn bộ quy trình hiện có. "
            "Các hạng mục này được ghi nhận cho giai đoạn triển khai.",
         M + 92, sy - 78, CW - 92, style(size=7.1, leading=9.8, color=MUTED))

    # commitments band
    by = sy - 112
    hline(c, M, W - M, by, INK, 0.8)
    text(c, "ĐIỀU KIỆN CHO CẢ HAI PHƯƠNG ÁN", M, by - 16, "Mono", 6.4, OCHRE, tracking=1.4)
    text(c, "Chốt rõ trước, cùng quyết tâm làm.", M, by - 40, "Serif-It", 17, INK)
    rules = [
        ("01", "Chốt phạm vi bằng văn bản", "Danh sách luồng, tiêu chí đạt, người đánh giá được ký trước khi bắt đầu. "
         "Yêu cầu ngoài phạm vi được ghi nhận cho giai đoạn sau, không phát sinh trong PoC."),
        ("02", "Hai bên cam kết phối hợp", "Mỗi bên cử một đầu mối có thẩm quyền. Vinaseed cung cấp dữ liệu và "
         "quy trình đúng hạn; họp rà soát mỗi tuần để không lãng phí nguồn lực."),
        ("03", "Kết thúc bằng quyết định", "Biên bản đánh giá theo đúng phạm vi đã chốt là căn cứ để hai bên "
         "quyết định bước triển khai tiếp theo."),
    ]
    cw3 = (CW - 2 * 18) / 3
    for i, (n, h, d) in enumerate(rules):
        x = M + i * (cw3 + 18)
        text(c, n, x, by - 64, "Mono-Bd", 7, OCHRE)
        text(c, h, x + 16, by - 64, "Sans-Bd", 8, INK)
        para(c, d, x, by - 72, cw3, style(size=7.3, leading=10.2))
    # quiet seed row closing the document
    for k in range(int(CW / 9) + 1):
        dot(c, M + k * 9, 60, 0.9, OCHRE if k == int(CW / 9) else SAGE)


def main():
    c = canvas.Canvas(OUT, pagesize=A4)
    c.setTitle("Base 2.0 cho Vinaseed — Đề xuất sơ bộ")
    c.setAuthor("Base.vn")
    for p in (page1, page2, page3, page4):
        p(c)
        c.showPage()
    c.save()
    print(OUT)


if __name__ == "__main__":
    main()
