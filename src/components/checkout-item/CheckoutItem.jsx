import { connect } from 'react-redux';

import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart-actions';

import { ReactComponent as LeftIcon } from '../../assets/left-icon.svg';
import { ReactComponent as RightIcon } from '../../assets/right-icon.svg';
import { ReactComponent as ClearIcon } from '../../assets/clear-icon.svg';

import styles from './checkout-item.module.scss';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItemFromCart }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  
  return (
    <div className={styles.checkoutItem}>
      <div className={styles.image}>
        <img src={imageUrl} alt='item' />
      </div>
      <div className={styles.group}>
        <div className={styles.name}>
          <span>{name}</span>
        </div>
        <div className={styles.price}>
          <span>NT${price.toLocaleString()}</span>
        </div>
        <div className={styles.quantity}>
          <LeftIcon onClick={() => removeItem(cartItem)} />
          <div><span>{quantity}</span></div>
          <RightIcon onClick={() => addItem(cartItem)}/>
        </div>
        <div className={styles.total}>
          <span>NT${(price * quantity).toLocaleString()}</span>
        </div>
        <div className={styles.removeButton} onClick={() => clearItemFromCart(cartItem)}>
          <ClearIcon />
        </div>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItemFromCart: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);