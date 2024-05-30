import { useRouteMatch } from 'react-router-dom';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CheckoutForm from '../../components/checkout-form/CheckoutForm';
import CartSummary from '../../components/cart-summary/CartSummary';

import styles from './checkout-page.module.scss';

const CheckoutPage = () => {
  const { path } = useRouteMatch();

  const onMatchedRoutes = () => {
    return [
      {
        route: {
          path: '/',
          breadcrumbName: '首頁',
          enBreadcrumbName: 'Homepage'
        }
      },
      {
        route: {
          path: '/cart',
          breadcrumbName: '我的購物車',
          enBreadcrumbName: 'My Cart'
        }
      },
      {
        route: {
          path: `${path}`,
          breadcrumbName: '結賬',
          enBreadcrumbName: 'Checkout'
        }
      },
    ]
  };
  
  return (
    <section className={styles.checkoutPage}>
      <Breadcrumb onMatchedRoutes={onMatchedRoutes}/>
      <div className={styles.group}>
        <CheckoutForm />
        <CartSummary />
      </div>
    </section>
  )
};

export default CheckoutPage;