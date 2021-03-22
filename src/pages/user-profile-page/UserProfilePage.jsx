import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { signOutStart } from '../../redux/user/user-actions';

import { storeUserCart } from '../../firebase/firebase.utils';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CustomButton from '../../components/custom-button/CustomButton';

import styles from './user-profile-page.module.scss';

const UserProfilePage = ({ location, history, signOutStart, currentUser, cartItems }) => {
  const onSignout = async() => {
    try {
      await storeUserCart(currentUser, cartItems);
      await signOutStart();
      await history.push('/signin');
    } 
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.userProfilePage}>
      <Breadcrumb location={location} />
      User Profile Page
      <CustomButton onClick={onSignout}>
        登出
      </CustomButton>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserProfilePage));