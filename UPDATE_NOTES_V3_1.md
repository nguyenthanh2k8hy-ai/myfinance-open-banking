# MYFINANCE v3.1 - AI Insight Fix

- Sửa nút "Tạo nhận định" để có trạng thái "Đang phân tích..." rõ ràng.
- Xóa nhận định cũ trước mỗi lần phân tích để người dùng thấy phản hồi mới.
- Gửi chính dữ liệu giao dịch sandbox hiện tại tới `/api/insights`.
- Nhận định trả về bằng tiếng Việt và tính theo thu nhập, chi tiêu, dòng tiền ròng, nhóm chi tiêu lớn nhất.
- Có thông báo khi chưa có giao dịch hoặc khi API lỗi.
- Vẫn là AI mô phỏng/sandbox, không kết nối tài khoản ngân hàng thật và không gọi dịch vụ AI bên ngoài.
