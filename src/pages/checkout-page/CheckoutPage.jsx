import { withRouter } from 'react-router-dom';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CheckoutForm from '../../components/checkout-form/CheckoutForm';
import CartSummary from '../../components/cart-summary/CartSummary';

import styles from './checkout-page.module.scss';

const CheckoutPage = ({ match, location }) => {
  const onMatchedRoutes = () => {
    return [
      {
        route: {
          path: '/',
          breadcrumbName: '首頁'
        }
      },
      {
        route: {
          path: '/cart',
          breadcrumbName: '我的購物車'
        }
      },
      {
        route: {
          path: `${match.path}`,
          breadcrumbName: '結賬'
        }
      },
    ]
  };
  
  return (
    <section className={styles.checkoutPage}>
      <Breadcrumb location={location} onMatchedRoutes={onMatchedRoutes}/>
      <div className={styles.group}>
        <CheckoutForm />
        <CartSummary />
      </div>
    </section>
  )
};

export default withRouter(CheckoutPage);