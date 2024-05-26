import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart-selectors';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { selectCartTotal } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-slice';

import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';

import styles from './cart-dropdown.module.scss';

const CartDropdown = () => {
  // react-redux hooks
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartItemsCount = useSelector(selectCartItemsCount);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className={styles.cartDropdown}>
      <span>產品（{cartItemsCount}）</span>
      <div className={styles.cartItems}>
        {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
      </div>
      <div className={styles.total}>
        <span>全部</span>
        <span>NT${cartTotal.toLocaleString()}</span>
      </div>
      <Link to='/cart'><CustomButton onClick={() => dispatch(toggleCartHidden(true))}>查看購物車</CustomButton></Link>
    </div>
  )
};

export default CartDropdown;