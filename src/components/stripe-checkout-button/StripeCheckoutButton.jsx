import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeCheckout from 'react-stripe-checkout';
import { withRouter } from 'react-router-dom';

import { createOrder } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { clearCart } from '../../redux/cart/cart-actions';

import CustomButton from '../custom-button/CustomButton';
import CompanyLogo from '../../assets/logo.png';

const StripeCheckoutButton = ({ price, shippingInfo, cartItems, currentUser, clearCart, history }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Gs8LHGm0HT5YB3DuO8XmMMNiQ9oOeulR6UruC3pru13wZDM3NkdsuCGM8S6Q2SEIJ6x8PPhTqHXeggdpGONZQic00soELdq0K';
  // create a random order reference number
  const orderRefNum = Math.floor(100000 + Math.random() * 900000);

  const onToken = token => {
    // will link to backend server later
    console.log(`Credit Card Info: ${token}`);
    // upload the order details to firebase after payment successful
    createOrder(currentUser, cartItems, shippingInfo, orderRefNum);
    // after successful payment
    alert('Payment Successful');
    clearCart();
    history.push('/userprofile');
  }

  return (
    <StripeCheckout 
      label='立即付款'
      name='Floral Accessories Ltd.'
      image={CompanyLogo}
      description={`總額：NT$${price.toLocaleString()}`}
      amount={priceForStripe}
      currency='TWD'
      panelLabel='立即付款'
      token={onToken}
      stripeKey={publishableKey}
    >
    <CustomButton>按此付款</CustomButton>
    </StripeCheckout>
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