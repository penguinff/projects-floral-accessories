import { useSelector } from 'react-redux';

import { selectWishlistItems } from '../../redux/wishlist/wishlist-selectors';

import WishlistItem from '../../components/wishlist-item/WishlistItem';

import styles from './my-wishlist-page.module.scss';
import { useTranslation } from 'react-i18next';

const MyWishlistPage = () => {
  const {t} = useTranslation();

  // react-redux hooks
  const wishlistItems = useSelector(selectWishlistItems);

  return (
    <div className={styles.myWishlistPage}>
      <h2>{t('我的願望清單')}</h2>
      {wishlistItems.length ?
        <div>
          <h3>{wishlistItems.length} {t('件商品')}</h3>
          <div className={styles.wishlistItems}>
            {wishlistItems.map(wishlistItem => 
              <WishlistItem key={wishlistItem.id} wishlistItem={wishlistItem} />
            )}
          </div>
        </div>
        :
        <h3>{t('你沒有加入商品到願望清單')}</h3>
      }
    </div>
  )
};

export default MyWishlistPage;