// this routes array is for breadcrumb
const routes = [
  {
    path: '/',
    breadcrumbName: '首頁',
    enBreadcrumbName: 'Homepage',
    routes: [
      {
        path: '/shop',
        breadcrumbName: '商品',
        enBreadcrumbName: 'Products',
        routes: [
          {
            path: '/shop/new-arrival',
            breadcrumbName: '新品上市',
            enBreadcrumbName: 'New Arrivals'
          },
          {
            path: '/shop/earrings',
            breadcrumbName: '耳環',
            enBreadcrumbName: 'Earrings'
          },
          {
            path: '/shop/necklaces',
            breadcrumbName: '項鏈',
            enBreadcrumbName: 'Necklaces'
          },
          {
            path: '/shop/bracelets',
            breadcrumbName: '手環',
            enBreadcrumbName: 'Bracelets'
          },
          {
            path: '/shop/rings',
            breadcrumbName: '戒指',
            enBreadcrumbName: 'Rings'
          },
          {
            path: '/shop/hairpins',
            breadcrumbName: '髮夾',
            enBreadcrumbName: 'Hairpins'
          },
          {
            path: '/shop/hats',
            breadcrumbName: '帽子',
            enBreadcrumbName: 'Hats'
          },
        ]
      },
      {
        path: '/sign-in',
        breadcrumbName: '登入',
        enBreadcrumbName: 'Login'
      },
      {
        path: '/cart',
        breadcrumbName: '我的購物車',
        enBreadcrumbName: 'My Cart'
      },
      {
        path: '/checkout',
        breadcrumbName: '結賬',
        enBreadcrumbName: 'Checkout'
      },
      {
        path: '/user-profile',
        breadcrumbName: '我的賬戶',
        enBreadcrumbName: 'My Account',
        routes: [
          {
            path: '/user-profile/my-wishlist',
            breadcrumbName: '願望清單',
            enBreadcrumbName: 'Wishlist'
          },
          {
            path: '/user-profile/my-order-history',
            breadcrumbName: '訂單記錄',
            enBreadcrumbName: 'Orders'
          }
        ]
      },
      {
        path: '/about-us',
        breadcrumbName: '關於 Floral Accessories',
        enBreadcrumbName: 'About Floral Accessories'
      },
      {
        path: '/contact-us',
        breadcrumbName: '聯絡我們',
        enBreadcrumbName: 'Contact Us'
      },
      {
        path: '/search-result',
        breadcrumbName: '搜尋結果',
        enBreadcrumbName: 'Search Result'
      },
    ]
  }
];

export default routes;