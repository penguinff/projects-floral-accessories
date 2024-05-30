import { useTranslation } from 'react-i18next';
import styles from './cart-item.module.scss';

const CartItem = ({ cartItem }) => {
  const {t, i18n} = useTranslation();

  const { name, imageUrl, price, quantity, enName } = cartItem;
  return (
    <div className={styles.cartItem}>
      <div className={styles.image}>
        <img src={imageUrl} alt='item' />
      </div>
      <div className={styles.name}>
        <span>{i18n.language === 'zh' ? name : enName}</span>
      </div>
      <div className={styles.group}>
        <div className={styles.total}>
          <span>NT${(price * quantity).toLocaleString()}</span>
        </div>
        <div className={styles.quantity}>
          <span>{t('數量')}: {quantity}</span>
        </div>
      </div>
    </div>
  )
};

export default CartItem;