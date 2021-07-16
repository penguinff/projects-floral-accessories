import { useSelector, useDispatch } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

import styles from './cart-icon.module.scss';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shoppingcart-icon.svg';

const CartIcon = () => {
  // react-redux hooks
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div 
      className={styles.shoppingCartBox} 
      onClick={() => dispatch(toggleCartHidden(true))}
    >
      <ShoppingCartIcon className={styles.shoppingCartIcon} />
      { itemCount !== 0 && <span className={styles.shoppingCartNum}>{itemCount}</span> }
    </div>
  )
};

export default CartIcon;