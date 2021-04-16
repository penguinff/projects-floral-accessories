import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { createStripeCheckout, createOrder } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { clearCart } from '../../redux/cart/cart-actions';

import CustomButton from '../custom-button/CustomButton';

const stripe = window.Stripe('pk_test_51Gs8LHGm0HT5YB3DuO8XmMMNiQ9oOeulR6UruC3pru13wZDM3NkdsuCGM8S6Q2SEIJ6x8PPhTqHXeggdpGONZQic00soELdq0K');

const StripeCheckoutButton = ({ price, shippingInfo, cartItems, currentUser, clearCart, history }) => {
  // create a random order reference number
  const orderRefNum = Math.floor(100000 + Math.random() * 900000);

  const dataForStripe = cartItems.map(item => {
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

  const handleCheckout = () => {
    createStripeCheckout(dataForStripe)
      .then(response => {
        const sessionId = response.data.id
        stripe.redirectToCheckout({ sessionId: sessionId });
      });
  }

  const onToken = token => {
    // will link to backend server later
    console.log(`Credit Card Info: ${token}`);
    // upload the order details to firebase after payment successful
    createOrder(currentUser, cartItems, shippingInfo, orderRefNum, price);
    // after successful payment
    alert('Payment Successful');
    clearCart();
    history.push('/user-profile');
  }

  return (
    <div>
      <CustomButton onClick={handleCheckout}>按此付款</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StripeCheckoutButton));