import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart-selectors';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { selectCartTotal } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';

import styles from './cart-dropdown.module.scss';

const CartDropdown = ({ cartItems, cartItemsCount, cartTotal, toggleCartHidden }) => (
  <div className={styles.cartDropdown}>
    <span>產品（{cartItemsCount}）</span>
    <div className={styles.cartItems}>
      {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
    </div>
    <div className={styles.total}>
      <span>全部</span>
      <span>NT${cartTotal}</span>
    </div>
    <Link to='/checkout'><CustomButton onClick={() => toggleCartHidden(true)}>查看購物車</CustomButton></Link>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsCount: selectCartItemsCount,
  cartTotal: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: isHidden => dispatch(toggleCartHidden(isHidden))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);