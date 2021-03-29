# Floral Accessories 日韓飾品電商

![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/homepage.PNG)

## 網頁 Demo

https://floral-accessories.herokuapp.com/

## 簡介

此網頁為前端練習作品，主要功能為:

- 前端：

  - 商品展示
  - 購物車功能
  - 願望清單功能
  - 用戶註冊和登入
  - 檢視我的賬戶
  - 商品下單、結賬

- 連結到 Firebase 後端服務：
  - 利用 Authentication 管理新用戶註冊和用戶登入
  - 利用 Firestore 儲存商品資訊、用戶資料和訂單記錄
  - 管理員可以可以輕鬆新增/刪除/修改上架商品，檢視用戶訂單
  - 把用戶購物車内商品、願望清單儲存到雲端，方便用戶在任何裝置上管理

### 主要練習

- React
- React Router
- Redux
- Redux-Saga
- 串接 Firebase
- 串接 Stripe 金流支付 API (後段架構還沒完成)
- 手刻 CSS (利用 CSS modules & Sass)
- Responsive Web Design (此網頁可以在任何裝置上瀏覽)

## 網頁内容介紹

### 促銷廣告 Carousel

- 可加入網站促銷活動宣傳圖片，每 8 秒跳轉一張，用戶也可自行跳轉到感興趣的内容

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/carousel.PNG)

### 最新商品

- 自動抓取 Firestore 各項飾品最新上架的兩樣商品，總共 12 項最新商品

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/new_arrival.PNG)

### 麵包屑導覽列

- 讓用戶得知目前位置
- 透過麵包屑的連結，回到主分類頁，提高網頁易用性
- 提升 SEO

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/breadcrumb.PNG)

### 商品預覽

- 讓用戶先預覽每項飾品的部分商品，吸引用戶瀏覽分類頁

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/shoppage.PNG)

### 商品詳細内容

- 單一商品詳細介紹
- 商品圖片可放大檢視
- 如有需要，下方可以加入更多圖片

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/productpage.PNG)

### 我的願望清單

- 用戶可加入商品至願望清單，留待日後購買

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/add_wishlist.png)

### 購物車

- 電腦版商品加入購物車後，右上方的購物車列表會跳出提示用戶
- 在購物車頁面中可以調整商品數量/刪除商品

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/cartpage.PNG)

### 結賬資訊

- 有訂單摘要讓用戶清楚自己將要下單的商品數量、金額和運費
- 輸入收貨人資料後可確認内容是否正確，如需修改可按編輯回到上一頁

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/checkoutpage1.PNG)
  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/checkoutpage2.PNG)

### 用戶註冊、登入

- 用戶可使用電子信箱註冊和登入，或利用 Google/Facebook 第三方登入
- 用戶登入後，購物車、願望清單和訂單記錄會儲存到 Firestore，方便用戶在不同裝置登入瀏覽

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/signin_signup_page.PNG)

### 側邊跳出選單

- 側邊選單特別適用於手機瀏覽

  <img src='https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/m_sidenav.jpeg' width='375px'/>

### RWD 響應式網頁設計

- 此網頁有特別對應不同解析度做出頁面調整
- 用戶可在任何裝置上瀏覽，從桌面電腦到手機都會有最佳使用者體驗

  <img src='https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/m_homepage.jpeg' width='375px'/>

## 使用外掛程式模組

- react-transition-group (React 過場動畫)
- react-multi-carousel (可滑動的 slideshow)
- react-magnifier (商品圖片放大鏡功能)

## 製作時間

- 約 15 個工作天

## 圖片來源

- Unsplash <https://unsplash.com/>
