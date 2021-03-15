import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import SaleMessage from '../sale-message/SaleMessage';
import CartIcon from '../cart-icon/cartIcon';
import CompanyLogo from '../../assets/logo_transparent_cut.png';

import { ReactComponent as SideNavIcon } from '../../assets/sidenav-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as ContactIcon } from '../../assets/contact-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/user-icon-2.svg';

const Header = () => (
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
        <Link to='/checkout'>
          <CartIcon />
        </Link>
      </div>

    </div>

    <div className={styles.categoryList}>
      <div className={styles.categoryItem}>新品上市</div>
      <div className={styles.categoryItem}>商品分類</div>
      <div className={styles.categoryItem}>會員專區</div>
      <div className={styles.categoryItem}>潮流話題</div>
    </div>

  </div>
)

export default Header;