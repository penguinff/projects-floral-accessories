import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { createOrder } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { clearCart } from '../../redux/cart/cart-actions';

import CustomButton from '../custom-button/CustomButton';

const StripeCheckoutForm = ({ price, shippingInfo, cartItems, currentUser, clearCart, history }) => {
  const stripe = useStripe();
  const elements = useElements();

  const cardElementOpts = {
    iconStyle: 'solid',
    hidePostalCode: true,
  };

  const priceForStripe = price * 100;

  const onSuccessfulPayment = () => {
    // info that send to backend
    console.log(priceForStripe);
    // create a random order reference number
    const orderRefNum = Math.floor(100000 + Math.random() * 900000);
    // upload the order details to firebase after payment successful
    createOrder(currentUser, cartItems, shippingInfo, orderRefNum, price);
    // after successful payment
    alert('Payment Successful');
    clearCart();
    history.push('/user-profile');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      onSuccessfulPayment();
    }
  };

  const stripeCartItems = cartItems.map(item => {
    return {
      quantity: item.quantity,
      price_data: {
        currency: "twd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.name,
        },
      },
    }
  })

  console.log(stripeCartItems)

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={cardElementOpts} />
      <CustomButton type='submit' disabled={!stripe}>
        立即付款
      </CustomButton>
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