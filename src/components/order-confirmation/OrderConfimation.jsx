import styles from './order-confirmation.module.scss'

const OrderConfirmation = ({ shippingInfo }) => {
  const { title, name, email, phone, address } = shippingInfo;

  return (
    <div className={styles.orderConfirmation}>
      <div className={styles.title}>
        <h2>1. 確認送貨地址和方式</h2>
      </div>
      <div className={styles.shippingInfo}>
        <div className={styles.info}>
          <span>送貨到：</span>
          <span>{title} {name}</span>
          <span>{address}</span>
          <span>{phone}</span>
          <span>{email}</span>
        </div>
        <div className={styles.method}>
          <span>送貨方式：</span>
          <span>宅配到府</span>
          <span>1-3個工作天</span>
        </div>
      </div>
      <div className={styles.title}>
        <h2>2. 信用卡付款</h2>
      </div>
      <div className={styles.payment}>
        Stripe
      </div>
    </div>
  )
};

export default OrderConfirmation;