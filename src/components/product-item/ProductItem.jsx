import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addItem } from '../../redux/cart/cart-actions';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { toggleWishlist, toggleMessageHidden } from '../../redux/wishlist/wishlist-actions';
import { selectWishlistItems } from '../../redux/wishlist/wishlist-selectors';

import styles from './product-item.module.scss';

import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';
import { ReactComponent as AddCartIcon } from '../../assets/addcart-icon.svg';

const ProductItem = ({ item, addItem, toggleCartHidden, toggleWishlist, wishlistItems, toggleMessageHidden }) => {
  const existingWishlistItem = wishlistItems.find(wishlistItem => wishlistItem.id === item.id);

  return (
    <div className={styles.productItem}>
      <img src={item.imageUrl} alt='product' className={styles.image} />
      <span className={styles.productName}>{item.name}</span>
      <span className={styles.productPrice}>{`NT$${item.price.toLocaleString()}`}</span>
      <div className={styles.icons}>
        <FavoriteIcon 
          className={existingWishlistItem && styles.onWishlist}
          onClick={() => {
            toggleWishlist(item);
            !existingWishlistItem && toggleMessageHidden(false);
          }}
        />
        <AddCartIcon 
          onClick={() => {
            addItem(item);
            toggleCartHidden(false);
          }} 
        />
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  wishlistItems: selectWishlistItems
})

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  toggleCartHidden: isHidden => dispatch(toggleCartHidden(isHidden)),
  toggleWishlist: item => dispatch(toggleWishlist(item)),
  toggleMessageHidden: isHidden => dispatch(toggleMessageHidden(isHidden))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);