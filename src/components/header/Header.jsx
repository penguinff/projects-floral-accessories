import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import SaleMessage from '../sale-message/SaleMessage';
import CartIcon from '../cart-icon/cartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import styles from './header.module.scss';

import CompanyLogo from '../../assets/logo_transparent_cut.png';
import { ReactComponent as SideNavIcon } from '../../assets/sidenav-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as ContactIcon } from '../../assets/contact-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/user-icon-2.svg';

const Header = ({ hidden, cartItems, toggleCartHidden }) => (
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
        <Link to='/signin'>
          <UserIcon />
        </Link>
        <div 
          className={styles.cartGroup} 
          onMouseEnter={() => toggleCartHidden(false)} 
          onMouseLeave={() => toggleCartHidden(true)}
        >
          <Link to='/checkout'>
            <CartIcon />
          </Link>
          { hidden || !cartItems.length ? null : <CartDropdown /> }
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
    </div>

  </div>
)

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: isHidden => dispatch(toggleCartHidden(isHidden))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);