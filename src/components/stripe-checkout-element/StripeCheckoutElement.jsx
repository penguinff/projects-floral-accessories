import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { createPaymentIntent, createOrder } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { clearCart } from '../../redux/cart/cart-slice';

import CustomButton from '../custom-button/CustomButton';

import styles from './stripe-checkout-element.module.scss';

const StripeCheckoutElement = ({ price, shippingInfo }) => {
  const history = useHistory();

  // react-redux hooks
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  
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
      });
    return () => {
      setClientSecret('');
    }
  }, [priceForStripe])

  const cardElementOpts = {
    iconStyle: 'solid',
    hidePostalCode: true,
  };

  const onSuccessfulPayment = () => {
    // upload the order details to firebase after payment successful
    createOrder(currentUser, cartItems, shippingInfo, price);
    // after successful payment
    alert('Payment Successful');
    dispatch(clearCart());
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

export default StripeCheckoutElement;