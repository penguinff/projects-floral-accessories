import styles from './cart-icon.module.scss';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shoppingcart-icon.svg';

const CartIcon = () => (
  <div className={styles.shoppingCartBox}>
    <ShoppingCartIcon className={styles.shoppingCartIcon} />
    <span className={styles.shoppingCartNum}>10</span>
  </div>
);

export default CartIcon;