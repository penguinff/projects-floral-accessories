import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop-page/ShopPage';
import SignInSignUpPage from './pages/signin-signup-page/SignInSignUpPage';
import CartPage from './pages/cart-page/CartPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';
import UserProfilePage from './pages/user-profile-page/UserProfilePage';
import MyWishlistPage from './pages/my-wishlist-page/MyWishlistPage';
import MyOrderHistoryPage from './pages/my-order-history-page/MyOrderHistoryPage';
import CollectionPageContainer from './pages/collection-page/CollectionPageContainer';
import AboutUsPage from './pages/about-us-page/AboutUsPage';
import ContactUsPage from './pages/contact-us-page/ContactUsPage';
import SearchResultPageContainer from './pages/search-result-page/SearchResultPageContainer';

const routes = [
  {
    path: '/',
    component: Homepage,
    exact: true,
    breadcrumbName: '首頁'
  },
  {
    path: '/shop',
    component: ShopPage,
    exact: false,
    breadcrumbName: '商品',
    routes: [
      {
        path: '/shop/new-arrival',
        component: CollectionPageContainer,
        breadcrumbName: '新品上市'
      },
      {
        path: '/shop/earrings',
        component: CollectionPageContainer,
        breadcrumbName: '耳環'
      },
      {
        path: '/shop/necklaces',
        component: CollectionPageContainer,
        breadcrumbName: '項鏈'
      },
      {
        path: '/shop/bracelets',
        component: CollectionPageContainer,
        breadcrumbName: '手環'
      },
      {
        path: '/shop/rings',
        component: CollectionPageContainer,
        breadcrumbName: '戒指'
      },
      {
        path: '/shop/hairpins',
        component: CollectionPageContainer,
        breadcrumbName: '髮夾'
      },
      {
        path: '/shop/hats',
        component: CollectionPageContainer,
        breadcrumbName: '帽子'
      },
    ]
  },
  {
    path: '/sign-in',
    component: SignInSignUpPage,
    exact: true,
    breadcrumbName: '登入'
  },
  {
    path: '/cart',
    component: CartPage,
    exact: true,
    breadcrumbName: '我的購物車'
  },
  {
    path: '/checkout',
    component: CheckoutPage,
    exact: true,
    breadcrumbName: '結賬'
  },
  {
    path: '/user-profile',
    component: UserProfilePage,
    exact: false,
    breadcrumbName: '我的賬戶',
    routes: [
      {
        path: '/user-profile/my-wishlist',
        component: MyWishlistPage,
        breadcrumbName: '願望清單'
      },
      {
        path: '/user-profile/my-order-history',
        component: MyOrderHistoryPage,
        breadcrumbName: '訂單記錄'
      }
    ]
  },
  {
    path: '/about-us',
    component: AboutUsPage,
    exact: true,
    breadcrumbName: '關於 Floral Accessories'
  },
  {
    path: '/contact-us',
    component: ContactUsPage,
    exact: true,
    breadcrumbName: '聯絡我們'
  },
  {
    path: '/search-result',
    component: SearchResultPageContainer,
    exact: true,
    breadcrumbName: '搜尋結果'
  },
];

export default routes;