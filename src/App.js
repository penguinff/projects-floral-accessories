import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import SignInSignUpPage from './pages/signin-signup-page/SignInSignUpPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' component={SignInSignUpPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
