import { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemsCount, selectCartTotal, selectShippingFee } from '../../redux/cart/cart-selectors';

import CartItem from '../cart-item/CartItem';

import styles from './cart-summary.module.scss';

import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down-icon.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/arrow-up-icon.svg';


const CartSummary = ({ cartItems, cartItemsCount, cartTotal, shippingFee }) => {
  const [isItemsHidden, setIsItemsHidden] = useState(true);

  return (
    <div className={styles.cartSummary}>
      <div className={styles.summaryBox}>
        <div className={styles.header} onClick={() => setIsItemsHidden(!isItemsHidden)}>
          <h3>我的購物車（{cartItemsCount}）</h3>
          { isItemsHidden ? <ArrowDownIcon /> : <ArrowUpIcon /> }
        </div>
        <div className={styles.cartItems} hidden={isItemsHidden}>
          {cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)}
        </div>
        <div className={styles.footer}>
          <h3>訂單摘要</h3>
          <div><span>總計：</span><span>NT${cartTotal.toLocaleString()}</span></div>
          <div><span>運費：</span><span>NT${shippingFee.toLocaleString()}</span></div>
          <h3><span>總額：</span><span>NT${(cartTotal + shippingFee).toLocaleString()}</span></h3>
        </div>
      </div>
    </div>
  )
  
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsCount: selectCartItemsCount,
  cartTotal: selectCartTotal,
  shippingFee: selectShippingFee
})

export default connect(mapStateToProps)(CartSummary);