import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import CustomButton from '../../components/custom-button/CustomButton';

import styles from './cart-page.module.scss';

const CartPage = ({ location, cartItems, total }) => {
  const shippingFee = total >= 1000 ? 0 : 100;
  return (
    <div className={styles.cartPage}>
      <Breadcrumb location={location}/>
      <h1>我的購物車</h1>
      {cartItems.length ? 
        <div className={styles.withCartItems}>
          <div className={styles.cartHeader}>
            <span>商品</span>
            <span>單價</span>
            <span>數量</span>
            <span>總金額</span>
          </div>
          <div className={styles.cartItems}>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
          </div>
          <div className={styles.totalGroup}>
            <span className={styles.note}>小計:</span>
            <span className={styles.total}>NT${total}</span>
            <span className={styles.note}>運費:</span>
            <span className={styles.total}>NT${shippingFee}</span>
          </div>
          <div className={styles.totalGroup}>
            <span className={styles.note}>總額:</span>
            <span className={styles.total}>NT${total + shippingFee}</span>
            <span className={styles.button}>
              <Link to='/checkout'><CustomButton>前往結賬</CustomButton></Link>
            </span>
          </div>
        </div>
        :
        <div className={styles.withoutCartItems}>
          <h2>目前您的購物車沒有商品，請點選前往購物，開始選購商品</h2>
          <Link to='/shop'><CustomButton>開始購物</CustomButton></Link>
        </div>
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CartPage);