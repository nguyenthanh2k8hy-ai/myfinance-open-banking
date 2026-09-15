# MYFINANCE v3 - Giao dich theo ngan hang

Ban nang cap nay giu nguyen flow Open Banking va localStorage cua v2, dong thoi bo sung:

1. Moi giao dich duoc gan voi mot ngan hang va mot tai khoan cu the.
2. Lich su hien ten ngan hang + 4 so cuoi tai khoan.
3. Form Them giao dich cho phep chon Ngan hang / Tai khoan.
4. Thu/chi chi lam thay doi so du cua tai khoan duoc chon.
5. Co bo loc Tat ca ngan hang / tung ngan hang trong trang Giao dich.
6. Them openingBalance de bao toan cong thuc: So du hien tai = So du dau ky + Thu - Chi.
7. Du lieu localStorage v2 duoc migrate tu dong, khong can xoa data cu.

## Cach cap nhat website dang online

- Giai nen ZIP nay.
- Upload cac file/thuc muc trong project len dung repository GitHub `myfinance-open-banking` va commit.
- Vercel dang lien ket voi GitHub se tu dong build va deploy lai.
- Sau khi Vercel bao Ready, mo URL public cu de test.

Khong upload `node_modules` hoac `.next`.
