import { useEffect, useLayoutEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

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
const AboutUsPage = lazy(() => import('./pages/about-us-page/AboutUsPage'));
const ContactUsPage = lazy(() => import('./pages/contact-us-page/ContactUsPage'));
const SearchResultPageContainer = lazy(() => import('./pages/search-result-page/SearchResultPageContainer'));
const UnderConstructionPage = lazy(() => import('./pages/under-construction-page/UnderConstructionPage'));

const stripePromise = loadStripe('pk_test_51Gs8LHGm0HT5YB3DuO8XmMMNiQ9oOeulR6UruC3pru13wZDM3NkdsuCGM8S6Q2SEIJ6x8PPhTqHXeggdpGONZQic00soELdq0K');

const App = ({ checkUserSession, fetchCollectionsStart, currentUser, cartItems, wishlistItems }) => {
  // check User Session after first render
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // fetch product info after first render
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  // update logged in user cart & wishlist to firebase after first render & certain states change
  useEffect(() => {
    storeUserCartAndWishlist(currentUser, cartItems, wishlistItems);
  }, [currentUser, cartItems, wishlistItems]);

  // make pages always scroll to top after loaded a new url (pathname)
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.app}>
      <Header />
      <Elements stripe={stripePromise}>
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
              <Route exact path='/about-us' component={AboutUsPage} />
              <Route exact path='/contact-us' component={ContactUsPage} />
              <Route exact path='/search-result' component={SearchResultPageContainer} />
              <Route exact path='/under-construction' component={UnderConstructionPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </Elements>
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