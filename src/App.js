import { Switch, Route, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import Homepage from './pages/homepage/Homepage';
// import ShopPage from './pages/shop-page/ShopPage';
// import SignInSignUpPage from './pages/signin-signup-page/SignInSignUpPage';
// import CheckoutPage from './pages/checkout-page/CheckoutPage';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      {renderRoutes(routes)}
      <Footer />
    </div>
  );
}

export default App;


// <Switch>
// <Route exact path='/' component={Homepage} />
// <Route path='/shop' component={ShopPage} />
// <Route exact path='/checkout' component={CheckoutPage} />
// <Route exact path='/signin' component={SignInSignUpPage} />
// </Switch>