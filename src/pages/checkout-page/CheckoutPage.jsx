import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import styles from './checkout-page.module.scss';

const CheckoutPage = ({ location }) => (
  <div className={styles.checkoutPage}>
    <Breadcrumb location={location}/>
    Checkout Page
  </div>
);

export default CheckoutPage;