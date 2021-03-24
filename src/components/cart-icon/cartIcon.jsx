import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

import styles from './cart-icon.module.scss';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shoppingcart-icon.svg';

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div 
    className={styles.shoppingCartBox} 
    onClick={() => toggleCartHidden(true)}
  >
    <ShoppingCartIcon className={styles.shoppingCartIcon} />
    {itemCount ? 
      <span className={styles.shoppingCartNum}>{itemCount}</span>
      : ''
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: isHidden => dispatch(toggleCartHidden(isHidden))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);