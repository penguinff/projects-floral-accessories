import { useEffect, useLayoutEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user-selectors';
import { selectCartItems } from './redux/cart/cart-selectors';
import { selectWishlistItems } from './redux/wishlist/wishlist-selectors';
import { checkUserSession } from './redux/user/user-actions';
import { fetchCollectionsStart } from './redux/shop/shop-actions';

import { storeUserCartAndWishlist } from './firebase/firebase.utils';

import Spinner from './components/spinner/Spinner';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import styles from './app.module.scss';

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const ShopPage = lazy(() => import('./pages/shop-page/ShopPage'));
const CartPage = lazy(() => import('./pages/cart-page/CartPage'));
const CheckoutPage = lazy(() => import('./pages/checkout-page/CheckoutPage'));
const SignInSignUpPage = lazy(() => import('./pages/signin-signup-page/SignInSignUpPage'));
const UserProfilePage = lazy(() => import('./pages/user-profile-page/UserProfilePage'));


const App = ({ checkUserSession, fetchCollectionsStart, currentUser, cartItems, wishlistItems }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  useEffect(() => {
    storeUserCartAndWishlist(currentUser, cartItems, wishlistItems);
  }, [currentUser, cartItems, wishlistItems]);

  // make pages always scroll to top after loaded
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.app}>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/cart' component={CartPage} />
            <Route 
              exact
              path='/sign-in'
              render={() => 
                currentUser ? <Redirect to='/user-profile' /> : <SignInSignUpPage />
              }
            />
            <Route path='/user-profile' component={UserProfilePage} />
            <Route exact path='/checkout' component={CheckoutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  wishlistItems: selectWishlistItems
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);