import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCartItems, selectCartItemsCount, selectCartTotal, selectShippingFee } from '../../redux/cart/cart-selectors';

import CartItem from '../cart-item/CartItem';

import styles from './cart-summary.module.scss';

import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down-icon.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/arrow-up-icon.svg';


const CartSummary = () => {
  // react-redux hooks
  const cartItems = useSelector(selectCartItems);
  const cartItemsCount = useSelector(selectCartItemsCount);
  const cartTotal = useSelector(selectCartTotal);
  const shippingFee = useSelector(selectShippingFee);

  // local state for displaying cart items
  const [isItemsHidden, setIsItemsHidden] = useState(true);

  return (
    <div className={styles.cartSummary}>
      <div className={styles.summaryBox}>
        <div className={styles.header} onClick={() => setIsItemsHidden(isItemsHidden => !isItemsHidden)}>
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

export default CartSummary;