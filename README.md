# MYFINANCE — Open Banking Interactive Demo

Đây là prototype để bạn **đóng vai người dùng** và tự thực hiện toàn bộ journey Open Banking.

## Journey

App mở lần đầu với:
- 0 bank
- 0 account
- 0 transaction
- Balance = ₫0

Sau đó:
1. Add Bank
2. Chọn Demo Bank
3. Consent / Permission
4. Bank Login giả lập
5. Approve
6. API Sync animation
7. Account + Balance + Transactions xuất hiện
8. Add thêm bank
9. Tạo transaction mới
10. Xem API Explorer / Consent Manager / Bank Simulator
11. Reset về trạng thái trắng

**Không kết nối ngân hàng thật và không dùng credentials thật.**

## Chạy

Cài Node.js LTS, mở Terminal trong thư mục này:

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Mục tiêu thuyết trình

Đừng nạp data sẵn. Hãy bắt đầu từ Empty State, sau đó tự thao tác để chứng minh:
`User Consent → Bank Authorization → API → Aggregated Data`.

## Custom

- Danh sách bank: `src/lib/mock-data.ts`
- Giao diện: `src/app/page.tsx` và `src/app/globals.css`
- Mock API: `src/app/api/*`

Đây là sandbox/presentation prototype, không phải hệ thống tài chính production.


## Nang cap giao dich theo ngan hang (v3)

- Moi giao dich luu `bankId`, `bankName` va 4 so cuoi tai khoan.
- Lich su giao dich hien ro nguon: ngan hang + tai khoan.
- Form them giao dich cho phep chon dung ngan hang/tai khoan; so du chi thay doi o tai khoan duoc chon.
- Co bo loc giao dich theo ngan hang.
- Du lieu `localStorage` cu (`mf-vn-v2`) duoc migrate tu dong, khong can xoa sandbox cu.
- Moi tai khoan co `openingBalance` de giu logic: so du hien tai = so du dau ky + thu - chi.
