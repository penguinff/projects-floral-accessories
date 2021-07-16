import styles from './cart-item.module.scss';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className={styles.cartItem}>
      <div className={styles.image}>
        <img src={imageUrl} alt='item' />
      </div>
      <div className={styles.name}>
        <span>{name}</span>
      </div>
      <div className={styles.group}>
        <div className={styles.total}>
          <span>NT${(price * quantity).toLocaleString()}</span>
        </div>
        <div className={styles.quantity}>
          <span>數量：{quantity}</span>
        </div>
      </div>
    </div>
  )
};

export default CartItem;