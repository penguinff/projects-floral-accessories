import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop-page/ShopPage';
import SignInSignUpPage from './pages/signin-signup-page/SignInSignUpPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';

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
    breadcrumbName: 'Shop',
  },
  {
    path: '/signin',
    component: SignInSignUpPage,
    exact: true,
    breadcrumbName: 'Sign-in'
  },
  {
    path: '/checkout',
    component: CheckoutPage,
    exact: true,
    breadcrumbName: 'Checkout'
  },
];

export default routes;