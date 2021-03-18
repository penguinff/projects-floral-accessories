import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user-selector';
import { checkUserSession } from './redux/user/user-actions';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop-page/ShopPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';
import SignInSignUpPage from './pages/signin-signup-page/SignInSignUpPage';
import UserProfilePage from './pages/user-profile-page/UserProfilePage';
import styles from './app.module.scss';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div className={styles.app}>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
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
      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);