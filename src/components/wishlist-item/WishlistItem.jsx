import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart-actions';
import { removeWishlist } from '../../redux/wishlist/wishlist-actions';

import CustomButton from '../custom-button/CustomButton';

import styles from './wishlist-item.module.scss';

const WishlistItem = ({ wishlistItem, addItemToCart, removeWishlistItem }) => {
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
          <CustomButton onClick={() => addItemToCart(wishlistItem)}>
            新增至購物車
          </CustomButton>
        </div>
        <div
          className={styles.removeWishlist} 
          onClick={() => removeWishlistItem(wishlistItem)}
        >
          移除
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItem(item)),
  removeWishlistItem: item => dispatch(removeWishlist(item))
})

export default connect(null, mapDispatchToProps)(WishlistItem);