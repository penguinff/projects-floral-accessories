import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartTotal, selectShippingFee } from '../../redux/cart/cart-selectors';

import StripeCheckoutButton from '../stripe-checkout-button/StripeCheckoutButton';

import styles from './order-confirmation.module.scss'

const OrderConfirmation = ({ shippingInfo, cartTotal, shippingFee }) => {
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
        <p>我們網店使用第三方支付Stripe，安全又便捷！<span><a href='https://stripe.com/'>了解更多</a></span></p>
        <StripeCheckoutButton price={totalToPay} shippingInfo={shippingInfo} />
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartTotal: selectCartTotal,
  shippingFee: selectShippingFee
});

export default connect(mapStateToProps)(OrderConfirmation);