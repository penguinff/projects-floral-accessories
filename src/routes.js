// this routes array is for breadcrumb
const routes = [
  {
    path: '/',
    breadcrumbName: '首頁',
    routes: [
      {
        path: '/shop',
        breadcrumbName: '商品',
        routes: [
          {
            path: '/shop/new-arrival',
            breadcrumbName: '新品上市'
          },
          {
            path: '/shop/earrings',
            breadcrumbName: '耳環'
          },
          {
            path: '/shop/necklaces',
            breadcrumbName: '項鏈'
          },
          {
            path: '/shop/bracelets',
            breadcrumbName: '手環'
          },
          {
            path: '/shop/rings',
            breadcrumbName: '戒指'
          },
          {
            path: '/shop/hairpins',
            breadcrumbName: '髮夾'
          },
          {
            path: '/shop/hats',
            breadcrumbName: '帽子'
          },
        ]
      },
      {
        path: '/sign-in',
        breadcrumbName: '登入'
      },
      {
        path: '/cart',
        breadcrumbName: '我的購物車'
      },
      {
        path: '/checkout',
        breadcrumbName: '結賬'
      },
      {
        path: '/user-profile',
        breadcrumbName: '我的賬戶',
        routes: [
          {
            path: '/user-profile/my-wishlist',
            breadcrumbName: '願望清單'
          },
          {
            path: '/user-profile/my-order-history',
            breadcrumbName: '訂單記錄'
          }
        ]
      },
      {
        path: '/about-us',
        breadcrumbName: '關於 Floral Accessories'
      },
      {
        path: '/contact-us',
        breadcrumbName: '聯絡我們'
      },
      {
        path: '/search-result',
        breadcrumbName: '搜尋結果'
      },
    ]
  }
];

export default routes;