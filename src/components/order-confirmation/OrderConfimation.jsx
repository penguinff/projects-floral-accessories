import { useSelector } from 'react-redux';

import { selectCartTotal, selectShippingFee } from '../../redux/cart/cart-selectors';

import StripeCheckoutElement from '../stripe-checkout-element/StripeCheckoutElement';

import styles from './order-confirmation.module.scss'

const OrderConfirmation = ({ shippingInfo }) => {
  // react-redux hooks
  const cartTotal = useSelector(selectCartTotal);
  const shippingFee = useSelector(selectShippingFee);
  
  const { title, name, email, phone, address } = shippingInfo;
  const totalToPay = cartTotal + shippingFee;

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
        <p>我們網店使用第三方支付Stripe，安全又便捷！<span><a href='https://stripe.com/' target='_blank' rel='noreferrer noopener'>了解更多</a></span></p>
        <p className={styles.testCardInfo}>
          <span>***請用以下信用卡資料作測試用途***</span>
          <br/>
          <span>Card No.: 4242 4242 4242 4242 - Exp: 01/22 - CVV: 123</span>
        </p>
        {/* TODO: error with StripeCheckoutElement -> comment out first */}
        {/* <StripeCheckoutElement price={totalToPay} shippingInfo={shippingInfo} /> */}
      </div>
    </div>
  )
};

export default OrderConfirmation;