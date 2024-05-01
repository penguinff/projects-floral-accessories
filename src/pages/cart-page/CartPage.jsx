import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCartItems, selectCartTotal, selectShippingFee } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';

import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import CustomButton from '../../components/custom-button/CustomButton';

import styles from './cart-page.module.scss';

const CartPage = ({ location, history }) => {
  // if user not signed in, redirect to signin page and pass current path to location.state
  const redirect = () => {
    currentUser ? history.push('/checkout') : history.push({pathname: '/sign-in', state: {from: '/cart'}});
  };

  // react-redux hooks
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const shippingFee = useSelector(selectShippingFee);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <section className={styles.cartPage}>
      <Breadcrumb location={location}/>
      <h2>我的購物車</h2>
      {cartItems.length ? 
        <div className={styles.withCartItems}>
          <div className={styles.cartHeader}>
            <span>商品</span>
            <span>單價</span>
            <span>數量</span>
            <span>總金額</span>
          </div>
          <div className={styles.cartItems}>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
          </div>
          <div className={styles.totalGroup}>
            <span className={styles.note}>小計:</span>
            <span className={styles.total}>NT${cartTotal.toLocaleString()}</span>
            <span className={styles.note}>運費:</span>
            <span className={styles.total}>NT${shippingFee}</span>
          </div>
          <div className={styles.totalGroup}>
            <span className={styles.note}>總額:</span>
            <span className={styles.total}>NT${(cartTotal + shippingFee).toLocaleString()}</span>
            <span className={styles.button} onClick={redirect}>
              <CustomButton>{currentUser ? '前往結賬' : '先登入再結賬'}</CustomButton>
            </span>
            { currentUser ? '' : 
              <span className={styles.button}>
                <Link to='/checkout'><CustomButton>訪客結賬</CustomButton></Link>
              </span>
            }
          </div>
        </div>
        :
        <div className={styles.withoutCartItems}>
          <h3>目前您的購物車沒有商品，請點選前往購物，開始選購商品</h3>
          <Link to='/shop'><CustomButton>開始購物</CustomButton></Link>
        </div>
      }
    </section>
  )
};

export default CartPage;