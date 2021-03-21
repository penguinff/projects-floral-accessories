import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectCartItemsCount, selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CustomButton from '../../components/custom-button/CustomButton';

import styles from './checkout-page.module.scss';

const CheckoutPage = ({ match, location, itemsCount, cartItems, total }) => {
  const onMatchedRoutes = () => {
    return [
      {
        route: {
          path: '/',
          breadcrumbName: 'Home'
        }
      },
      {
        route: {
          path: '/cart',
          breadcrumbName: 'Shopping Cart'
        }
      },
      {
        route: {
          path: `${match.path}`,
          breadcrumbName: 'Checkout'
        }
      },
    ]
  };
  
  return (
    <div className={styles.checkoutPage}>
      <Breadcrumb location={location} onMatchedRoutes={onMatchedRoutes}/>
      <h1>結賬</h1>
      <CustomButton>繼續</CustomButton>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);