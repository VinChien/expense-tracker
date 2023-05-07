# Expense-tracker

使用 Node.js + Express 製作

## 功能

1. 註冊帳號
2. 使用 Facebook 登入
3. 可以看到支出的所有項目
4. 可以看到所有支出的加總金額
5. 可以新增支出項目
6. 可以編輯支出項目
7. 可以刪除特定一筆支出項目
8. 可以根據類別做篩選

## 使用
1. 安裝 Node.js 、 npm
2. clone 專案到本機
3. 在終端機 CD 進入資料夾後，再輸入 npm install
4. 連線 MongoDB 

MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/restaurant?retryWrites=true&w=majority

5.連線成功後，再輸入 npm run seed，看到 All done! 表示完成。
再輸入 npm run dev 後，成功會看到 
Express is listening on http://localost:3000

6. 在瀏覽器輸入 http://localhost:3000

## 測試帳號
[
  {
    "name": "廣志",
    "email": "user1@example.com",
    "password": "12345678"
  },
  {
    "name": "小新",
    "email": "user2@example.com",
    "password": "12345678"
  }
]
