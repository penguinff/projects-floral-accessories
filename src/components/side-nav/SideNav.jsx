import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './side-nav.module.scss';

import { ReactComponent as ClearIcon } from '../../assets/clear-icon.svg';
import { ReactComponent as UserIcon } from '../../assets/user-icon-2.svg';
import { ReactComponent as ArrowDownIcon } from '../../assets/arrow-down-icon.svg';
import { ReactComponent as ArrowUpIcon } from '../../assets/arrow-up-icon.svg';
import { useTranslation } from 'react-i18next';

const SideNav = ({ showSideNav, setShowSideNav }) => {
  const {t} = useTranslation();

  // local state for displaying category
  const [showCategory, setShowCategory] = useState(false);

  // set toggle functions
  const toggleSideNav = () => setShowSideNav(showSideNav => !showSideNav);
  const toggleCategory = () => setShowCategory(showCategory => !showCategory);

  return (
    <nav className={`${styles.sideNav} ${showSideNav && styles.sideNavActive}`}>

      <div className={styles.content}>
        <ul className={styles.upper}>
          <li onClick={toggleSideNav}><ClearIcon/>{t('目錄')}</li>
          <Link to='/user-profile' onClick={toggleSideNav}><li><UserIcon />{t('我的賬戶')}</li></Link>
        </ul>

        <ul className={styles.middle}>
          <Link to='/shop/new-arrival' onClick={toggleSideNav}><li>{t('新品上市')}</li></Link>
          <li onClick={toggleCategory} className={styles.title}>
            <Link to='/shop' onClick={toggleSideNav}>{t('商品分類')}</Link>
            <span>
              {showCategory ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </span>
          </li>
          <ul 
            className={styles.category}
            hidden={!showCategory} 
            onClick={toggleSideNav}
          >
            <Link to='/shop/earrings'><li>{t('耳環')}</li></Link>
            <Link to='/shop/necklaces'><li>{t('項鏈')}</li></Link>
            <Link to='/shop/bracelets'><li>{t('手環')}</li></Link>
            <Link to='/shop/rings'><li>{t('戒指')}</li></Link>
            <Link to='/shop/hairpins'><li>{t('髮夾')}</li></Link>
            <Link to='/shop/hats'><li>{t('帽子')}</li></Link>
          </ul>
          <Link to='/under-construction' onClick={toggleSideNav}><li>{t('會員專區')}</li></Link>
          <Link to='/under-construction' onClick={toggleSideNav}><li>{t('潮流話題')}</li></Link>
        </ul>

        <ul className={styles.lower} onClick={toggleSideNav}>
          <Link to='/about-us'><li>{t('關於 Floral Accessories')}</li></Link>
          <Link to='/contact-us'><li>{t('聯絡我們')}</li></Link>
        </ul>
      </div>

      <div className={styles.background} onClick={toggleSideNav}></div>

    </nav>
  )
};

export default SideNav;