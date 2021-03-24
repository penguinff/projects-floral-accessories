import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart-actions';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { addWishlist } from '../../redux/wishlist/wishlist-actions';

import styles from './product-item.module.scss';

import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';
import { ReactComponent as AddCartIcon } from '../../assets/addcart-icon.svg';

const ProductItem = ({ item, addItem, toggleCartHidden, addWishlist }) => (
  <div className={styles.productItem}>
    <img src={item.imageUrl} alt='product' className={styles.image} />
    <span className={styles.productName}>{item.name}</span>
    <span className={styles.productPrice}>{`NT$${item.price}`}</span>
    <div className={styles.icons}>
      <FavoriteIcon 
        onClick={() => addWishlist(item)}
      />
      <AddCartIcon 
        onClick={() => {
          addItem(item);
          toggleCartHidden(false);
        }} 
      />
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  toggleCartHidden: isHidden => dispatch(toggleCartHidden(isHidden)),
  addWishlist: item => dispatch(addWishlist(item))
})

export default connect(null, mapDispatchToProps)(ProductItem);