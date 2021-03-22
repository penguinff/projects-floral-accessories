import { useEffect, useLayoutEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user-selectors';
import { checkUserSession } from './redux/user/user-actions';
import { fetchCollectionsStart } from './redux/shop/shop-actions';

import Spinner from './components/spinner/Spinner';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import styles from './app.module.scss';

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const ShopPage = lazy(() => import('./pages/shop-page/ShopPage'));
const CartPage = lazy(() => import('./pages/cart-page/CartPage'));
const CheckoutPage = lazy(() => import('./pages/checkout-page/CheckoutPage'));
const SignInSignUpPage = lazy(() => import('./pages/signin-signup-page/SignInSignUpPage'));
const UserProfilePage = lazy(() => import('./pages/user-profile-page/UserProfilePage'));


const App = ({ checkUserSession, fetchCollectionsStart, currentUser }) => {
  useEffect(() => {
    checkUserSession();
    fetchCollectionsStart();
  }, [checkUserSession, fetchCollectionsStart]);

  // make pages always scroll to top after loaded
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.app}>
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/cart' component={CartPage} />
          <Route 
            exact
            path='/signin'
            render={() => 
              currentUser ? <Redirect to='/userprofile' /> : <SignInSignUpPage />
            }
          />
          <Route 
            exact 
            path='/userprofile' 
            render={() =>
              currentUser ? <UserProfilePage /> : <Redirect to='/signin' />
            }
          />
          <Route 
            exact 
            path='/checkout'
            render={() =>
              currentUser ? <CheckoutPage /> : <Redirect to='/signin' />
            }
          />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);