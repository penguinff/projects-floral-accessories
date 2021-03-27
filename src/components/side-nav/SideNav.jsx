import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './side-nav.module.scss';

import { ReactComponent as ClearIcon } from '../../assets/clear-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/user-icon-2.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down-icon.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/arrow-up-icon.svg';


const SideNav = ({ showSideNav, setShowSideNav }) => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <nav className={styles.sideNav} hidden={!showSideNav}>
      <div className={styles.upper}>
        <div onClick={() => setShowSideNav(!showSideNav)}><ClearIcon />目錄</div>
        <Link><UserIcon />我的賬戶</Link>
      </div>
      <div className={styles.middle}>
        <Link>新品上市</Link>
        <div>
          <Link>商品分類<ArrowDownIcon /><ArrowUpIcon /></Link>
          <div>
            <div>商品分類<Link>檢視全部</Link></div>
            <Link>耳環</Link>
            <Link>項鏈</Link>
            <Link>手環</Link>
            <Link>戒指</Link>
            <Link>髮夾</Link>
            <Link>帽子</Link>
          </div>
        </div>
        <Link>會員專區</Link>
        <Link>潮流話題</Link>
      </div>
      <div className={styles.lower}>
        <Link>關於Floral Accessories</Link>
        <Link>聯絡我們</Link>
      </div>
    </nav>
  )
};

export default SideNav;