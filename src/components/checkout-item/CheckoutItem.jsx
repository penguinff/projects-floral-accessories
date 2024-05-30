import { useDispatch } from 'react-redux';

import { addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart-slice';

import { ReactComponent as LeftIcon } from '../../assets/left-icon.svg';
import { ReactComponent as RightIcon } from '../../assets/right-icon.svg';
import { ReactComponent as ClearIcon } from '../../assets/clear-icon.svg';

import styles from './checkout-item.module.scss';
import { useTranslation } from 'react-i18next';

const CheckoutItem = ({ cartItem }) => {
  const {i18n} = useTranslation();

  // react-redux hook
  const dispatch = useDispatch();

  const { imageUrl, name, quantity, price, enName } = cartItem;
  
  return (
    <div className={styles.checkoutItem}>
      <div className={styles.image}>
        <img src={imageUrl} alt='item' />
      </div>

      <div className={styles.group}>
        <div className={styles.name}>
          <span>{i18n.language === 'zh' ? name : enName}</span>
        </div>

        <div className={styles.price}>
          <span>NT${price.toLocaleString()}</span>
        </div>

        <div className={styles.quantity}>
          <LeftIcon onClick={() => dispatch(removeItem(cartItem))} />
          <div><span>{quantity}</span></div>
          <RightIcon onClick={() => dispatch(addItem(cartItem))}/>
        </div>

        <div className={styles.total}>
          <span>NT${(price * quantity).toLocaleString()}</span>
        </div>

        <div className={styles.removeButton}>
          <ClearIcon onClick={() => dispatch(clearItemFromCart(cartItem))} />
        </div>
      </div>
    </div>
  )
};

export default CheckoutItem;