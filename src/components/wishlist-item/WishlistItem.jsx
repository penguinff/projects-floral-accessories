import { useDispatch } from 'react-redux';

import { addItem, toggleCartHidden } from '../../redux/cart/cart-slice';
import { removeWishlist } from '../../redux/wishlist/wishlist-slice';

import CustomButton from '../custom-button/CustomButton';

import styles from './wishlist-item.module.scss';

const WishlistItem = ({ wishlistItem }) => {
  // react-redux hooks
  const dispatch = useDispatch();
  
  const { name, price, imageUrl } = wishlistItem;

  return (
    <div className={styles.wishlistItem}>
      <div className={styles.productImage}>
        <img src={imageUrl} alt='product' />
      </div>
      <div className={styles.itemDetails}>
        <h3>{name}</h3>
        <span>NT${price.toLocaleString()}</span>
        <div className={styles.button}>
          <CustomButton onClick={() => {
            dispatch(addItem(wishlistItem));
            dispatch(toggleCartHidden(false));
          }}>
            新增至購物車
          </CustomButton>
        </div>
        <div
          className={styles.removeWishlist} 
          onClick={() => dispatch(removeWishlist(wishlistItem))}
        >
          移除
        </div>
      </div>
    </div>
  )
}

export default WishlistItem;