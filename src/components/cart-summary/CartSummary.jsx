import { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart-selectors';

import CartItem from '../cart-item/CartItem';

import styles from './cart-summary.module.scss';

import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down-icon.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/arrow-up-icon.svg';


const CartSummary = ({ cartItems, cartItemsCount, cartTotal }) => {
  const [isItemsHidden, setIsItemsHidden] = useState(true);

  const shippingFee = cartTotal >= 1000 ? 0 : 100;

  return (
    <div className={styles.cartSummary}>
      <div className={styles.summaryBox}>
        <div className={styles.header} onClick={() => setIsItemsHidden(!isItemsHidden)}>
          <h3>我的購物車（{cartItemsCount}）</h3>
          { isItemsHidden ? <ArrowDownIcon /> : <ArrowUpIcon /> }
        </div>
        <div className={styles.cartItems} hidden={isItemsHidden}>
          {cartItems.map(cartItem => <CartItem cartItem={cartItem} />)}
        </div>
        <div className={styles.footer}>
          <h3>訂單摘要</h3>
          <div><span>總計：</span><span>NT${cartTotal}</span></div>
          <div><span>運費：</span><span>NT${shippingFee}</span></div>
          <h3><span>總額：</span><span>NT${cartTotal + shippingFee}</span></h3>
        </div>
      </div>
    </div>
  )
  
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsCount: selectCartItemsCount,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CartSummary);