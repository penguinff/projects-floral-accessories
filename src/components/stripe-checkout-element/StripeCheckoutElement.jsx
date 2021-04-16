import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { createPaymentIntent, createOrder } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { clearCart } from '../../redux/cart/cart-actions';

import CustomButton from '../custom-button/CustomButton';

import styles from './stripe-checkout-element.module.scss';

const StripeCheckoutForm = ({ price, shippingInfo, cartItems, currentUser, clearCart, history }) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const priceForStripe = price * 100;

  useEffect(() => {
    createPaymentIntent(priceForStripe)
      .then(response => {
        setClientSecret(response.data.clientSecret);
      })
  }, [])

  const cardElementOpts = {
    iconStyle: 'solid',
    hidePostalCode: true,
  };
  
  const onSuccessfulPayment = () => {
    // create a random order reference number
    const orderRefNum = Math.floor(100000 + Math.random() * 900000);
    // upload the order details to firebase after payment successful
    createOrder(currentUser, cartItems, shippingInfo, orderRefNum, price);
    // after successful payment
    alert('Payment Successful');
    clearCart();
    history.push('/user-profile');
  }

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message: '');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      onSuccessfulPayment();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className={styles.cardElement} options={cardElementOpts} onChange={handleChange} />
      <CustomButton type='submit' disabled={processing || disabled || succeeded}>
        <span>
          {processing ? <div className={styles.spinner}></div> : '立即付款'}
        </span>
      </CustomButton>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </form>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StripeCheckoutForm));