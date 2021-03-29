# Floral Accessories 日韓飾品電商

//主頁圖片

## 網頁Demo

https://floral-accessories.herokuapp.com/

## 簡介

此網頁為前端練習作品，主要功能為:
* 前端：
  * 商品展示
  * 購物車功能
  * 願望清單功能
  * 用戶註冊和登入
  * 檢視我的賬戶
  * 商品下單、結賬

* 連結到Firebase後端服務：
  * 利用Authentication管理新用戶註冊和用戶登入
  * 利用Firestore儲存商品資訊、用戶資料和訂單記錄
  * 管理員可以可以輕鬆新增/刪除/修改上架商品，檢視用戶訂單
  * 把用戶購物車内商品、願望清單儲存到雲端，方便用戶在任何裝置上管理

### 主要練習
* React
* React Router
* Redux
* Redux-Saga
* 串接Firebase
* 串接Stripe金流支付API (後段架構還沒完成)
* 手刻CSS (利用CSS modules & Sass)
* Responsive Web Design (此網頁可以在任何裝置上瀏覽)

## 網頁内容介紹
### 促銷廣告Carousel
* 可加入網站促銷活動宣傳圖片，每8秒跳轉一張，用戶也可自行跳轉到感興趣的内容
* // Carousel 圖片

### 最新商品
* 自動抓取Firestore各項飾品最新上架的兩樣商品，總共12項最新商品
* // New Arrival 圖片

### 麵包屑導覽列
* 讓用戶得知目前位置
* 透過麵包屑的連結，回到主分類頁，提高網頁易用性
* 提升SEO
* // Breadcrumb 圖片

### 商品預覽
* 讓用戶先預覽每項飾品的部分商品，吸引用戶瀏覽分類頁
* // Shoppage 圖片

### 商品詳細内容
* 單一商品詳細介紹
* 商品圖片可放大檢視
* 如有需要，下方可以加入更多圖片
* // ProductPage 圖片

### 我的願望清單
* 用戶可加入商品至願望清單，留待日後購買
* // product item 圖片

### 購物車
* 電腦版商品加入購物車後，右上方的購物車列表會跳出提示用戶
* 在購物車頁面中可以調整商品數量/刪除商品
* // CartPage & CartDropdown 圖片

### 結賬資訊
* 有訂單摘要讓用戶清楚自己將要下單的商品數量、金額和運費
* 輸入收貨人資料後可確認内容是否正確，如需修改可按編輯回到上一頁
* // Checkout page 圖片

### 用戶註冊、登入
* 用戶可使用電子信箱註冊和登入，或利用Google/Facebook第三方登入
* 用戶登入後，購物車、願望清單和訂單記錄會儲存到Firestore，方便用戶在不同裝置登入瀏覽
* // UserProfile Page圖片

### 側邊跳出選單
* 側邊選單特別適用於手機瀏覽
* // SideNav 圖片

### RWD 響應式網頁設計
* 此網頁有特別對應不同解析度做出頁面調整
* 用戶可在任何裝置上瀏覽，從桌面電腦到手機都會有最佳使用者體驗
* // 手機截圖

## 使用外掛程式模組
* react-transition-group (React過場動畫)
* react-multi-carousel (可滑動的slideshow)
* react-magnifier (商品圖片放大鏡功能)

## 製作時間
* 約15個工作天

## 圖片來源
* Unsplash <https://unsplash.com/>
