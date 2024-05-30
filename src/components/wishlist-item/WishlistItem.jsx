import { useDispatch } from 'react-redux';

import { addItem, toggleCartHidden } from '../../redux/cart/cart-slice';
import { removeWishlist } from '../../redux/wishlist/wishlist-slice';

import CustomButton from '../custom-button/CustomButton';

import styles from './wishlist-item.module.scss';
import { useTranslation } from 'react-i18next';

const WishlistItem = ({ wishlistItem }) => {
  const {t, i18n} = useTranslation();

  // react-redux hooks
  const dispatch = useDispatch();
  
  const { name, price, imageUrl, enName } = wishlistItem;

  return (
    <div className={styles.wishlistItem}>
      <div className={styles.productImage}>
        <img src={imageUrl} alt='product' />
      </div>
      <div className={styles.itemDetails}>
        <h3>{i18n.language === 'zh' ? name : enName}</h3>
        <span>NT${price.toLocaleString()}</span>
        <div className={styles.button}>
          <CustomButton onClick={() => {
            dispatch(addItem(wishlistItem));
            dispatch(toggleCartHidden(false));
          }}>
            {t('新增至購物車')}
          </CustomButton>
        </div>
        <div
          className={styles.removeWishlist} 
          onClick={() => dispatch(removeWishlist(wishlistItem))}
        >
          {t('移除')}
        </div>
      </div>
    </div>
  )
}

export default WishlistItem;