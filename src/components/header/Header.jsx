import { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden, selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectMessageHidden } from '../../redux/wishlist/wishlist-selectors';
import { toggleMessageHidden } from '../../redux/wishlist/wishlist-actions';

import SaleMessage from '../sale-message/SaleMessage';
import CartIcon from '../cart-icon/cartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import PopupMessage from '../popup-message/PopupMessage';

import styles from './header.module.scss';

import CompanyLogo from '../../assets/logo_transparent_cut.png';
import { ReactComponent as SideNavIcon } from '../../assets/sidenav-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as ContactIcon } from '../../assets/contact-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/user-icon-2.svg';

const Header = ({ cartHidden, cartItems, toggleCartHidden, history, currentUser, messageHidden, toggleMessageHidden }) => {
  useEffect(() => {
    let timer = setTimeout(() => toggleCartHidden(true), 4000);
    return () => clearTimeout(timer);
  }, [cartItems, toggleCartHidden]);

  useEffect(() => {
    let timer = setTimeout(() => toggleMessageHidden(true), 4000);
    return () => clearTimeout(timer);
  }, [messageHidden, toggleMessageHidden]);

  const redirect = () => {
    currentUser ? history.push('/user-profile') : history.push('/sign-in');
  }
  
  return (
    <div className={styles.header}>
      <SaleMessage />
      <div className={styles.mainHeader}>
        <div className={styles.leftOptions}>
          <SideNavIcon />
          <SearchIcon />
        </div>
        <Link to='/'>
          <img src={CompanyLogo} className={styles.companyLogo} alt='company logo'/>
        </Link>
        <div className={styles.rightOptions}>
          <ContactIcon />
          <UserIcon onClick={redirect} />
          <div 
            className={styles.cartGroup} 
            onMouseEnter={() => toggleCartHidden(false)} 
            onMouseLeave={() => toggleCartHidden(true)}
          >
            <Link to='/cart'>
              <CartIcon />
            </Link>
            { cartHidden || !cartItems.length ? null : <CartDropdown /> }
          </div>
        </div>
      </div>
      <div className={styles.categoryList}>
        <div className={styles.categoryItem}>新品上市</div>
        <Link to='/shop'>
          <div className={styles.categoryItem}>商品分類</div>
        </Link>
        <div className={styles.categoryItem}>會員專區</div>
        <div className={styles.categoryItem}>潮流話題</div>
        { messageHidden ? null : <PopupMessage /> }
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartHidden: selectCartHidden,
  cartItems: selectCartItems,
  currentUser: selectCurrentUser,
  messageHidden: selectMessageHidden
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: isHidden => dispatch(toggleCartHidden(isHidden)),
  toggleMessageHidden: isHidden => dispatch(toggleMessageHidden(isHidden))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));