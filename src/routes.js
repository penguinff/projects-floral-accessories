import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop-page/ShopPage';
import SignInSignUpPage from './pages/signin-signup-page/SignInSignUpPage';
import CartPage from './pages/cart-page/CartPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';
import UserProfilePage from './pages/user-profile-page/UserProfilePage';
import MyWishlistPage from './pages/my-wishlist-page/MyWishlistPage';
import MyOrderHistoryPage from './pages/my-order-history-page/MyOrderHistoryPage';

const routes = [
  {
    path: '/',
    component: Homepage,
    exact: true,
    breadcrumbName: 'Home'
  },
  {
    path: '/shop',
    component: ShopPage,
    exact: false,
    breadcrumbName: 'Shop'
  },
  {
    path: '/sign-in',
    component: SignInSignUpPage,
    exact: true,
    breadcrumbName: 'Sign-in'
  },
  {
    path: '/cart',
    component: CartPage,
    exact: true,
    breadcrumbName: 'Shopping Cart'
  },
  {
    path: '/checkout',
    component: CheckoutPage,
    exact: true,
    breadcrumbName: 'Checkout'
  },
  {
    path: '/user-profile',
    component: UserProfilePage,
    exact: false,
    breadcrumbName: 'User Profile',
    routes: [
      {
        path: '/user-profile/my-wishlist',
        component: MyWishlistPage,
        breadcrumbName: 'My Wishlist'
      },
      {
        path: '/user-profile/my-order-history',
        component: MyOrderHistoryPage,
        breadcrumbName: 'My Order History'
      }
    ]
  },
];

export default routes;