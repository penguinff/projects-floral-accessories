import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addItem } from '../../redux/cart/cart-slice';
import { toggleCartHidden } from '../../redux/cart/cart-slice';
import { toggleWishlist, toggleMessageHidden } from '../../redux/wishlist/wishlist-slice';
import { selectWishlistItems } from '../../redux/wishlist/wishlist-selectors';

import styles from './product-item.module.scss';

import { ReactComponent as FavoriteIcon } from '../../assets/favorite-icon.svg';
import { ReactComponent as AddCartIcon } from '../../assets/addcart-icon.svg';
import { useTranslation } from 'react-i18next';

const ProductItem = ({ item }) => {
  const {i18n} = useTranslation();

  const history = useHistory();

  // react-redux hooks
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);

  const { id, category, name, price, imageUrl, enName } = item;
  const productPath = `/shop/${category}/${id}`;
  const existingWishlistItem = wishlistItems.find(wishlistItem => wishlistItem.id === id);

  return (
    <div className={styles.productItem}>
      <img src={imageUrl} alt='product' className={styles.image} onClick={() => history.push(productPath)}/>
      <span className={styles.productName} onClick={() => history.push(productPath)}>
        {i18n.language === 'zh' ? name : enName}
      </span>
      <span className={styles.productPrice}>{`NT$${price.toLocaleString()}`}</span>
      <div className={styles.icons}>
        <FavoriteIcon 
          className={existingWishlistItem && styles.onWishlist}
          onClick={() => {
            dispatch(toggleWishlist(item));
            !existingWishlistItem && dispatch(toggleMessageHidden(false));
          }}
        />
        <AddCartIcon 
          onClick={() => {
            dispatch(addItem(item));
            dispatch(toggleCartHidden(false));
          }} 
        />
      </div>
    </div>
  )
};

export default ProductItem;